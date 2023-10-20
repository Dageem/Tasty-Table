const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get recipe's

router.get('/', async (req, res, next) => {
    try {
      const allRecipes = await prisma.recipe.findMany({
        include: {
          recipetags: {
            include: {
              tag: true,
            },
          },
        },
        include: {
          Ingredient_recipe: {
            include: {
              ingredient: true,
          }
        }
      }
      });
        
        res.send(allRecipes);
    } catch (err) {
        next(err);
    }
});

router.get('/search', async (req, res) => {
  const { query } = req.query; // Get the search query from the URL parameter

  try {
    const filteredRecipes = await prisma.recipe.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive', 
            },
          },
          {
            recipetags: {
              some: {
                tag: {
                  name: {
                    contains: query,
                    mode: 'insensitive',
                  },
                },
              },
            },
          },
        ],
      },
    });
    res.json(filteredRecipes);
  } catch (error) {
    console.error('Error searching for recipes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/', async (req,res,next)=>{
    // console.log(req.body)
    // console.log("Request headers:", req.headers);

    let tags = req.body.tags 
    const TagIds = [];

    for (const tagName of tags) {
        let tag = await prisma.Tag.findFirst({ 
            where: { 
                name: tagName.name 
            } 
        });

        if (!tag) {
        // Create the tag if it doesn't exist
            tag = await prisma.Tag.create({ 
                data: { 
                    name: tagName.name
                } 
            });
        }

        TagIds.push(tag.id);
    }

    const ingredients = req.body.ingredients

    const IngredientKeys = [];

    for (const ingredient of ingredients) {
        let individual = await prisma.ingredient.findFirst({ 
            where: {
                name: ingredient.name 
            } 
        });

        if (!individual) {
        // Create the tag if it doesn't exist
        individual = await prisma.ingredient.create({ 
            data: { 
                name: ingredient.name 
            } 
        });
        }

        IngredientKeys.push({
            ingredientId: individual.id,
            measurement: ingredient.measurement
        });
    }

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

        const convertedItems = TagIds.map(tagId => {
            return {
                recipeId: recipe.id,
                tagId: tagId
            };
        });

        const convertedItems2 = IngredientKeys.map( bothKeys=> {
            return {
                recipeId: recipe.id,
                ingredientId: bothKeys.ingredientId,
                measurement: bothKeys.measurement
            };
        });

        // const convertedItems2 = req.body.ingredients.map((i)=>{
        //   return {
        //     recipeId: recipe.id,
        //     ingredientId: i.id,
        //     measurement: i.measurement
        //   }
        // })

    

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

router.delete('/:id', async (req, res, next) => {
  try {
      await prisma.Recipetags.deleteMany({
          where: {
              recipeId: Number(req.params.id)
          },
      });
      await prisma.Ingredient_recipe.deleteMany({
          where: {
              recipeId: Number(req.params.id)
          },
      });
      await prisma.Recipe.delete({
          where: {
              id: Number(req.params.id)
          }
      });
      res.send({ message: 'Recipe successfully deleted' });
  } catch (err) {
      next(err);
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


router.put('/:id', async (req, res, next) => {
    let tags = req.body.tags 
    const TagIds = [];

    for (const tagName of tags) {
        let tag = await prisma.Tag.findFirst({ 
            where: { 
                name: tagName.name 
            } 
        });

        if (!tag) {
        // Create the tag if it doesn't exist
            tag = await prisma.Tag.create({ 
                data: { 
                    name: tagName.name
                } 
            });
        }

        TagIds.push(tag.id);
    }

    const ingredients = req.body.ingredients

    const IngredientKeys = [];

    for (const ingredient of ingredients) {
        let individual = await prisma.ingredient.findFirst({ 
            where: {
                name: ingredient.name 
            } 
        });

        if (!individual) {
        // Create the tag if it doesn't exist
        individual = await prisma.ingredient.create({ 
            data: { 
                name: ingredient.name 
            } 
        });
        }

        IngredientKeys.push({
            ingredientId: individual.id,
            measurement: ingredient.measurement
        });
    }

    try {
        const recipe = await prisma.Recipe.update({
            where: {
                id: Number(req.params.id)
            },
            data: 

            {   name: req.body.name,
                details: req.body.details,
                desc: req.body.desc,
                instructions: req.body.instructions,
                imageUrl:req.body.imageUrl,
                image2Url: req.body.image2Url,
                image3Url: req.body.image3Url,
                userId: req.body.userId,
            }
                
        })

        await prisma.Recipetags.deleteMany({
            where: {
                recipeId: Number(req.params.id)
            },
        })

        await prisma.Recipetags.createMany({
            data: TagIds.map((i) => {
                return {
                    recipeId: recipe.id,
                    tagId: i
                }
            })
        })

        await prisma.Ingredient_recipe.deleteMany({
            where: {
                recipeId: Number(req.params.id)
            },
        })

        await prisma.Ingredient_recipe.createMany({
            data: IngredientKeys.map((i) => {
                return {
                    recipeId: recipe.id,
                    ingredientId: i.ingredientId,
                    measurement: i.measurement
                }
            })
        })

        
        
        const finalPost = await prisma.Recipe.findFirst({
            where: {
                id: recipe.id
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
    } catch (err) {
        next(err)
    }
})





module.exports = router;
