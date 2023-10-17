const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get recipe's

router.get('/', async (req,res,next)=>{
    try{
        const allPosts = await prisma.recipe.findMany({
            include:{
                recipetags:{
                    include:{
                        tag:true
                    }
                }
            }
        });
        res.send(allPosts)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req,res,next)=>{
    console.log(req.body)
    console.log("Request headers:", req.headers);
    try{

        const recipe = await prisma.recipe.create({
          data: {
            name: req.body.name,
            details: req.body.details,
            desc: req.body.desc,
            instructions: req.body.instructions,
            imageUrl:req.body.imageUrl,
            image2Url: req.body.image2Url,
            image3Url: req.body.image3Url,
            userId: req.body.userId,
          }
        })

        const convertedItems = req.body.tags.map((i)=>{
            return {
                recipeId: recipe.id,
                tagId: i.id
            }
        })

        const convertedItems2 = req.body.ingredients.map((i)=>{
          return {
            recipeId: recipe.id,
            ingredientId: i.id,
            measurement: i.measurement
          }
        })

    

        const relations = await prisma.Recipetags.createMany({
            data: convertedItems
        })

        const relations2 = await prisma.ingredient_recipe.createMany({
          data: convertedItems2
        })

        const finalPost = await prisma.recipe.findFirst({
            where:{
                id:recipe.id
            },
            include:{
                recipetags:{
                    include:{
                        tag:true
                    }
                }
            }, 
            include:{
              Ingredient_recipe:{
                include:{
                  recipe: true
                }
              }
            }
        })
        res.send(finalPost)
    }catch(err){
        next(err)
    }
})

//create recipe
// router.post("/", async (req, res) => {
//   try {
//     const {
//       name,
//       details,
//       desc,
//       instructions,
//       imageUrl,
//       image2Url,
//       image3Url,
//       userId,
//       tagId,
//       ingredients,
//       tags,
//     } = req.body;
//     // console.log(req.body)

//     // Create the recipe
//     const recipe = await prisma.recipe.create({
//       data: {
//         name,
//         details,
//         desc,
//         instructions,
//         imageUrl,
//         image2Url,
//         image3Url,
//         userId,
//         tagId,
//       },
//       include: {
//         Tag: true,
//         User: true,
//         Ingredient_recipe: true,
//       },
//     });

//     // ccreate or match tqgs
//     for (const tagName of tags) {
//       const tag = await prisma.tag.upsert({
//         where: { name: tagName },
//         update: {},
//         create: { name: tagName },
//       });

//       await prisma.recipetags.create({
//         data: {
//           tagId: tag.id,
//           recipeId: recipe.id,
//         },
//       });
//     }

//     // Create or match ingr and mes
//     for (const ingredientData of ingredients) {
//       const { name, measurement } = ingredientData;

//       const ingredient = await prisma.ingredient.upsert({
//         where: { name },
//         update: {},
//         create: { name },
//       });

//       await prisma.ingredient_recipe.create({
//         data: {
//           ingredientId: ingredient.id,
//           recipeId: recipe.id,
//           measurement,
//         },
//       });
//     }

//     res.json({ recipe });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while creating the recipe." });
//   }
// });

router.get("/recent", async (req, res, next) => {
  try {
    const recentRecipes = await prisma.recipe.findMany({
      take: 3,
      orderBy: {
        id: "desc",
      },
      include: {
        Tag: true,
        User: true,
        Ingredient_recipe: true,
      },
    });

    res.send(recentRecipes);
  } catch (error) {
    console.error("Error fetching recent recipes:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching recent recipes." });
  }
});

// get recipe by userId, Also for Chef Daniel
router.get("/users/:userId", async (req, res, next) => {
  try {
    const recipes = await prisma.recipe.findMany({
      where: {
        userId: Number(req.params.userId),
      },
    });
    res.send(recipes);
  } catch (error) {
    next(error);
  }
});

// get recipe by recipe Id
router.get("/:id", async (req, res, next) => {
  if (isNaN(req.params.id)) {
    return next();
  }
  try {
    const recipeId = await prisma.recipe.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(recipeId);
  } catch (error) {
    next(error);
  }
});

//  user can update their recipe by userId -- This should be in Chef Dan's User routes, also unfinished
router.put("/user/:userId/recipe/recipeId", async (req, res, next) => {
  try {
    const recipe = await prisma.recipe.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const recipe = await prisma.recipe.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});

// get recipe by tag name
router.get("/recipesbytag/:tagName", async (req, res) => {
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
    console.error("Error fetching recipes:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching recipes." });
  }
});

// get recipe by ingredient name
router.get("/recipebyingredient/:name", async (req, res, next) => {
  try {
    const ingredient = await prisma.ingredient.findUnique({
      where: {
        name: req.params.name,
      },
      include: {
        ingredient_recipe: {
          select: {
            recipe: true,
          },
        },
      },
    });

    if (!ingredient || !ingredient.ingredient_recipe.length) {
      return res
        .status(404)
        .send("Ingredient not found or no recipes for ingredient");
    }

    // Extract recipes
    const recipes = ingredient.ingredient_recipe.map((ir) => ir.recipe);

    res.send(recipes);
  } catch (error) {
    next(error);
  }
});



module.exports = router;
