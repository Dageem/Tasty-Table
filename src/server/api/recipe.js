const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

// get recipe by userId, Also for Chef Daniel 
// router.get('/user/:id', async (req, res, next)=>{
//     try{
//         const recipes = await prisma.recipe.findMany({
//             where:{
//                 id: Number(req.params.userId)
//             }, include: {
//                 Recipe: true
//             }
//         })
//         res.send(recipes)
//     }catch(error){
//         next(error)
//     }
// })

// get recipe's
router.get('/', async (req, res, next)=>{
    try{
        const allRecipes = await prisma.recipe.findMany();
        res.send(allRecipes)
    }catch(error){
        next(error)
    }
})

// get recipe by recipe Id
router.get('/:id', async (req, res, next)=>{
    try{
        const recipeId = await prisma.recipe.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.send(recipeId)
    }catch(error){
        next(error)
    }
})

//  user can update their recipe by userId -- This should be in Chef Dan's User routes, also unfinished 
router.put('/user/:userId/recipe/recipeId', async (req, res, next)=>{
    try{
        const recipe = await prisma.recipe.update({
            where:{
                id: Number(req.params.id)
            },
            data:req.body
        })
        res.send(recipe)
    }catch(error){
        next(error)
    }
})

router.delete('/:id', async (req, res, next)=>{
    try{
        const recipe = await prisma.recipe.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.send(recipe)
    }catch(error){
        next(error)
    }
})

// get recipe by tag name 
router.get('/recipetags/:name', async (req, res, next)=>{
    try{
        const tagName = await prisma.tag.findUnique({
            where:{
                name: req.params.name
            }, include: {
                recipes: true
            }
        })
        if (tagName && tagName.recipes) {
            res.send(tagName.recipes);
        }
    }catch(error){
        next(error)
    }
})

// get recipe by ingredient name 
router.get('/recipebyingredient/:name', async (req, res, next) => {
    try {
        const ingredient = await prisma.ingredient.findUnique({
            where: {
                name: req.params.name
            },
            include: {
                ingredient_recipe: {
                    select: {
                        recipe: true
                    }
                }
            }
        });

        if (!ingredient || !ingredient.ingredient_recipe.length) {
            return res.status(404).send("Ingredient not found or no recipes for ingredient");
        }

        // Extract recipes
        const recipes = ingredient.ingredient_recipe.map(ir => ir.recipe);

        res.send(recipes);
    } catch (error) {
        next(error);
    }
});



module.exports = router;

