const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();



// get recipe's
router.get('/', async (req, res, next)=>{
    try{
        const allRecipes = await prisma.recipe.findMany();
        res.send(allRecipes)
    }catch(error){
        next(error)
    }
})

//create recipe
router.post('/', async (req, res, next) => {
    try {
        const newRecipe = await prisma.recipe.create({
            data: req.body
        });
        res.status(201).send(newRecipe); // 201 Created status code
    } catch (error) {
        next(error);
    }
});

  // get recipe by userId, Also for Chef Daniel 
  router.get('/users/:userId', async (req, res, next)=>{
    try{
        const recipes = await prisma.recipe.findMany({
            where:{
                userId: Number(req.params.userId)
            },
        })
        res.send(recipes)
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
router.get('/recipesbytag/:tagName', async (req, res) => {
    try {
      const { tagName } = req.params;
      const recipes = await prisma.recipe.findMany({
        where: {
          recipetags: {
            some: {
              tag: {
                name: tagName,
              },
            },
          },
        },
        // orderBy: {
        //   recipetags: {
        //     tag: {
        //       name: 'asc', // Sort recipes by tag name in ascending order
        //     },
        //   },
        // },
      });
  
      res.json(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ error: 'An error occurred while fetching recipes.' });
    }
  });

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


