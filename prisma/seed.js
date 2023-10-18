const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  // Upserting Tags
  const tags = ["easy", "mexican", "south america", "beef", "italian", "spicy", "indian"];
  const tagObjects = [];

  for (const tagName of tags) {
    const tag = await prisma.tag.upsert({
      where: { name: tagName },
      update: {},
      create: { name: tagName },
    });
    tagObjects.push(tag);
  }

  const recipesData = [
    {
      name: "Beef Quesadilla",
      details: "A simple and delicious beef quesadilla.",
      desc: "Tasty beef quesadilla made with fresh ingredients from the heart of Mexico. A classic staple for a quick, savory meal.",
      instructions:
        "1. Cook the beef until browned.\n2. Place the beef and cheese between two tortillas.\n3. Cook on a skillet until golden brown.\n4. Serve with a side of salsa and enjoy!",
      imageUrl: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      image2Url: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec",
      image3Url: "https://images.unsplash.com/photo-1593642634360-c6e8a62c8033",
      tags: ["easy", "mexican", "beef"],
      ingredients: [
        { name: "beef", measurement: "1 lb" },
        { name: "tortilla", measurement: "4 pieces" },
        { name: "cheese", measurement: "1 cup" },
        { name: "salsa", measurement: "1/4 cup" },
      ],
    },
    {
      name: "Chicken Tikka Masala",
      details: "A renowned Indian-British curry dish celebrated globally.",
      desc: "Chicken Tikka Masala, often dubbed as Britain's national dish, traces its roots back to the Indian subcontinent. The dish showcases tender chicken pieces marinated in aromatic spices and yogurt, then served in a lusciously creamy tomato sauce.",
      instructions:
        "1. In a bowl, mix together yogurt, lemon juice, turmeric, cumin, and garam masala. Add chicken pieces, ensuring they're well-coated with the marinade. Let it sit for at least 4 hours, preferably overnight.\n2. Preheat your grill to medium heat. Skewer the marinated chicken pieces and grill them until they're charred and fully cooked.\n3. In a large pan, heat some oil and sauté chopped onions until they're golden brown. Add in minced garlic and ginger, cooking for another 2 minutes.\n4. Stir in tomatoes, chili powder, and paprika. Allow the mixture to simmer on low heat until tomatoes break down and release their juices.\n5. Pour in cream, mixing it well with the tomato mixture. Add the grilled chicken pieces.\n6. Let the curry simmer for another 15-20 minutes, allowing the flavors to meld.\n7. Garnish with fresh coriander and serve hot with basmati rice or naan bread.",
      imageUrl: "https://unsplash.com/photos/ZSukCSw5VV4?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
      tags: ["spicy", "indian"],
      ingredients: [
        { name: "chicken", measurement: "500g" },
        { name: "yogurt", measurement: "1 cup" },
        { name: "tomatoes", measurement: "3" },
        { name: "cream", measurement: "1/2 cup" },
        { name: "onions", measurement: "2, chopped" },
        { name: "garlic", measurement: "3 cloves, minced" },
        { name: "ginger", measurement: "1 inch, minced" },
        // ... [other spices and ingredients]
      ]
    },
      {
        name: "Beef Bourguignon",
        details: "A classic French stew made of beef braised in red wine.",
        desc: "Beef Bourguignon hails from the Burgundy region of France. This dish slowly simmers beef in a deep, rich red wine sauce, accompanied by mushrooms, onions, and bacon. A comforting dish that's perfect for cold evenings.",
        instructions:
          "1. In a large pot, brown beef chunks in oil, then remove.\n2. Add sliced bacon and cook until crispy.\n3. Add chopped onions and garlic to the pot and sauté.\n4. Return beef to the pot. Sprinkle with flour and stir.\n5. Pour in red wine and beef broth, then add thyme and bay leaves.\n6. Allow to simmer for about two hours.\n7. In a separate pan, sauté mushrooms in butter.\n8. Add mushrooms and pearl onions to the pot.\n9. Simmer for another 30 minutes.\n10. Season with salt and pepper. Serve with crusty bread or potatoes.",
        imageUrl: "https://images.unsplash.com/photo-1593642532400-2682810df593",
        tags: ["french", "elegant", "beef"],
        ingredients: [
          { name: "beef chunks", measurement: "1 kg" },
          { name: "red wine", measurement: "750 ml" },
          { name: "bacon", measurement: "6 slices" },
          { name: "mushrooms", measurement: "200g" },
          { name: "pearl onions", measurement: "200g" },
          // ... [other ingredients]
        ],
      },
      {
        name: "Pad Thai",
        details: "A famous Thai stir-fried noodle dish.",
        desc: "Pad Thai is arguably the most iconic dish from Thailand. Made with stir-fried rice noodles, a blend of proteins, and a tangy tamarind sauce, it's a harmonious medley of flavors and textures, often garnished with peanuts and lime.",
        instructions:
          "1. Soak rice noodles in warm water for about 30 minutes.\n2. In a bowl, mix tamarind paste, fish sauce, sugar, and chili powder.\n3. Heat oil in a wok, then add tofu or shrimp and fry until golden.\n4. Push the protein to the side and crack an egg into the wok, scrambling it.\n5. Drain and add the rice noodles, followed by the sauce.\n6. Stir-fry for a few minutes until the noodles are tender.\n7. Add bean sprouts and green onions, mixing well.\n8. Serve hot, garnished with crushed peanuts, a lime wedge, and fresh cilantro.",
        imageUrl: "https://unsplash.com/photos/_wBJ0cvKhIE?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
        tags: ["thai", "spicy", "quick"],
        ingredients: [
          { name: "rice noodles", measurement: "200g" },
          { name: "tamarind paste", measurement: "2 tbsp" },
          { name: "fish sauce", measurement: "1 tbsp" },
          { name: "bean sprouts", measurement: "1 cup" },
          // ... [other ingredients]
        ],
      },
      // ... [More recipes]
    // ... [You can add more recipes following the same structure]
  ];

  for (const recipeData of recipesData) {
    // Upserting Ingredients
    const ingredientObjects = [];
    for (const ingredientData of recipeData.ingredients) {
      const ingredient = await prisma.ingredient.upsert({
        where: { name: ingredientData.name },
        update: {},
        create: { name: ingredientData.name },
      });
      ingredientObjects.push(ingredient);
    }

    // Creating Recipe
    const recipe = await prisma.recipe.create({
      data: {
        name: recipeData.name,
        details: recipeData.details,
        desc: recipeData.desc,
        instructions: recipeData.instructions,
        imageUrl: recipeData.imageUrl,
        image2Url: recipeData.image2Url,
        image3Url: recipeData.image3Url,
      },
    });

    // Associating Recipe with Tags
    for (const tagName of recipeData.tags) {
      const tag = tagObjects.find(t => t.name === tagName);
      if (tag) {
        await prisma.recipetags.create({
          data: {
            tagId: tag.id,
            recipeId: recipe.id
          }
        });
      }
    }

    // Associating Ingredients with Recipe
    for (const ingredientData of recipeData.ingredients) {
      const ingredient = ingredientObjects.find(i => i.name === ingredientData.name);
      if (ingredient) {
        await prisma.ingredient_recipe.create({
          data: {
            ingredientId: ingredient.id,
            recipeId: recipe.id,
            measurement: ingredientData.measurement
          }
        });
      }
    }
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

