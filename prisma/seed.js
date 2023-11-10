const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const recipesData = [
    {
      name: "Juicy Turkey",
      details: "A juicy cooked bird",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      instructions:
        "1. Sprinkle steak with salt and pepper. Grilled steak, covered, over medium heat or broil 4 inches from heat until meat reaches desired doneness (for medium rare, a thermometer should read 135 degrees, medium 160 degrees) 6 to 9 minutes per side. Let stand 5 minutes. 2. Meanwhile, process salsa and cilantro in a food processor until blended. Slice steak thinly across the grain; serve with salsa mixture, avocado, and tomato.",
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/QXMNIUJ5UJH6RE4GQ6RSHOIEL4.jpg",
      image2Url:
        "https://i.pinimg.com/736x/3f/ab/26/3fab2610354198ffba877ff94cd9aa40.jpg",
      image3Url:
        "https://homegrown.extension.ncsu.edu/wp-content/uploads/2019/11/Timing-Your-Turkey-Meal_Thanksgiving-food-safety_Homegrown.jpg",
      tags: ["holiday", "turkey", "dinner", "thanksgiving"],
      ingredients: [
        {
          name: "beef flank steak or top sirloin steak, 1in thick",
          measurement: "567g",
        },
        { name: "salt", measurement: "2-5g" },
        { name: "salsa verde", measurement: "240g" },
        { name: "cilantro", measurement: "30g" },
        { name: "peeled and cubed avocado", measurement: "170g" },
        { name: "chopped tomatoes", measurement: "150g" },
      ],
    },
    {
      name: "Classic Tomato Basil Pasta",
      details: "A simple and flavorful pasta dish",
      desc: "This classic tomato basil pasta is a quick and delicious meal that's perfect for busy weeknights. It features a rich tomato sauce infused with fresh basil and garlic, served over your favorite pasta.",
      instructions:
        "1. Cook 8 ounces (225g) of pasta according to package instructions until al dente. 2. In a large skillet, heat 2 tablespoons of olive oil over medium heat. 3. Add 3 cloves of minced garlic and sauté for 1-2 minutes until fragrant. 4. Pour in 1 can (14 ounces) of diced tomatoes and 1/4 cup of fresh basil leaves. 5. Simmer the sauce for 10-15 minutes, stirring occasionally, until it thickens. 6. Season with salt and black pepper to taste. 7. Drain the cooked pasta and add it to the skillet with the tomato basil sauce. Toss to combine. 8. Serve hot, garnished with grated Parmesan cheese if desired.",
      imageUrl:
        "https://www.acouplecooks.com/wp-content/uploads/2019/08/Tomato-Basil-Pasta-005.jpg",
      image2Url:
        "https://images.getrecipekit.com/20230125011759-garlic-20-26-20basil-20pasta-20with-20classic-20marinara_web_v2.jpg?aspect_ratio=4:3&quality=90&",
      image3Url:
        "https://theclevermeal.com/wp-content/uploads/2022/05/tomato-basil-pasta_7-1024x657.jpg",
      tags: ["pasta", "Italian", "easy", "dinner"],
      ingredients: [
        {
          name: "pasta",
          measurement: "8 ounces (225g)",
        },
        {
          name: "olive oil",
          measurement: "2 tablespoons",
        },
        {
          name: "garlic cloves, minced",
          measurement: "3",
        },
        {
          name: "canned diced tomatoes",
          measurement: "1 can (14 ounces)",
        },
        {
          name: "fresh basil leaves",
          measurement: "1/4 cup",
        },
        {
          name: "salt",
          measurement: "to taste",
        },
        {
          name: "black pepper",
          measurement: "to taste",
        },
        {
          name: "Parmesan cheese, grated (optional)",
          measurement: "for garnish",
        },
      ],
    },
    {
      name: "Simple Greek Salad",
      details: "A refreshing and healthy salad",
      desc: "This simple Greek salad is a delightful combination of fresh vegetables, olives, feta cheese, and a zesty dressing. It's a light and healthy salad that's easy to prepare and perfect for a quick lunch or side dish.",
      instructions:
        "1. In a large salad bowl, combine 2 cups of cherry tomatoes (halved), 1 cucumber (sliced), 1 red onion (thinly sliced), 1/2 cup of Kalamata olives (pitted), and 1/2 cup of crumbled feta cheese. 2. In a small bowl, whisk together 3 tablespoons of olive oil, 1 tablespoon of red wine vinegar, 1 teaspoon of dried oregano, salt, and black pepper to taste. 3. Drizzle the dressing over the salad ingredients. 4. Toss the salad gently to coat everything with the dressing. 5. Serve immediately as a refreshing and healthy side dish.",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
      image2Url: "https://www.foodnetwork.com/content/dam/images/food/fullset/2010/4/23/0/BX0204_greek-salad_s4x3.jpg",
      image3Url: "https://www.simplyrecipes.com/thmb/Z69nXRtC8QRza_ODhMB6-CKcttA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Greek-Salad-LEAD-8-360dba53fb8f41a2b89f4ab341068c3f.jpg",
      tags: ["salad", "Greek", "easy", "healthy"],
      ingredients: [
        {
          name: "cherry tomatoes, halved",
          measurement: "2 cups",
        },
        {
          name: "cucumber, sliced",
          measurement: "1",
        },
        {
          name: "red onion, thinly sliced",
          measurement: "1",
        },
        {
          name: "Kalamata olives, pitted",
          measurement: "1/2 cup",
        },
        {
          name: "crumbled feta cheese",
          measurement: "1/2 cup",
        },
        {
          name: "olive oil",
          measurement: "3 tablespoons",
        },
        {
          name: "red wine vinegar",
          measurement: "1 tablespoon",
        },
        {
          name: "dried oregano",
          measurement: "1 teaspoon",
        },
        {
          name: "salt",
          measurement: "to taste",
        },
        {
          name: "black pepper",
          measurement: "to taste",
        },
      ],
    },
    {
      name: "Pumpkin Pie",
      details: "A classic pumpkin pie with a flaky crust",
      desc: "No holiday dessert table is complete without a delicious pumpkin pie. This classic recipe features a creamy pumpkin filling spiced with cinnamon, nutmeg, and cloves, all nestled in a flaky pie crust. It's the perfect way to end your holiday meal on a sweet note.",
      instructions:
        "For the Pie Crust: 1. Preheat your oven to 375°F (190°C). 2. Roll out your pie crust and carefully place it in a 9-inch pie pan. Trim any excess dough and crimp the edges. 3. Line the pie crust with parchment paper and fill it with pie weights or dried beans. 4. Blind bake the crust for 15 minutes. Remove the parchment paper and weights, and bake for an additional 5 minutes, or until the crust is lightly golden. 5. Remove from the oven and let cool. For the Pumpkin Filling: 1. In a large bowl, whisk together the pumpkin puree, sugar, salt, cinnamon, nutmeg, cloves, eggs, and evaporated milk until well combined. 2. Pour the pumpkin filling into the pre-baked pie crust. 3. Bake in the preheated oven for 40-50 minutes or until the filling is set. You can check for doneness by inserting a knife into the center; it should come out clean when the pie is done. 4. Let the pumpkin pie cool completely before serving. You can refrigerate it for a few hours or overnight for best results. 5. Serve with whipped cream and a sprinkle of cinnamon if desired.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfLUAewdmBrpQqfFD_7JmRKWyNs6GWJnmQQ&usqp=CAU",
      image2Url:
        "https://www.allrecipes.com/thmb/CQrgVw7qjs2QQfKqy0GMerfppsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229932-Simple-Pumpkin-Pie-vat-hero-4x3-LSH-ae211272471a4e7aa9f10716cdcf4bc3.jpg",
      image3Url:
        "https://images.ctfassets.net/lufu0clouua1/4lelH9ihlKmEuIweQuEGUE/3b1f905f5bbb7514918061721577d18d/PumpkinPie4f-1.jpg",
      tags: ["holiday", "pumpkin", "dessert", "thanksgiving"],
      ingredients: [
        {
          name: "store-bought or homemade pie crust",
          measurement: "1 (9-inch) crust",
        },
        { name: "canned pumpkin puree", measurement: "1 (15-ounce) can" },
        { name: "granulated sugar", measurement: "3/4 cup" },
        { name: "salt", measurement: "1/2 teaspoon" },
        { name: "ground cinnamon", measurement: "1 teaspoon" },
        { name: "ground nutmeg", measurement: "1/2 teaspoon" },
        { name: "ground cloves", measurement: "1/4 teaspoon" },
        { name: "eggs", measurement: "2 large" },
        { name: "evaporated milk", measurement: "1 (12-ounce) can" },
      ],
    },
    {
      name: "Cranberry Orange Sauce",
      details: "A zesty and tangy cranberry sauce with a hint of orange",
      desc: "This cranberry orange sauce is the perfect accompaniment to your holiday turkey or ham. It's a delightful combination of tart cranberries and the zesty sweetness of oranges. This sauce adds a burst of flavor and a pop of color to your festive meal.",
      instructions:
        "1. Rinse the cranberries and pick out any stems or bruised berries. 2. In a medium saucepan, combine the cranberries, sugar, orange juice, and orange zest. 3. Place the saucepan over medium heat and bring the mixture to a boil, stirring frequently. 4. Reduce the heat to low and simmer for about 10-15 minutes, or until the cranberries burst and the sauce thickens. 5. Remove the saucepan from heat and let the sauce cool to room temperature. It will continue to thicken as it cools. 6. Transfer the cranberry orange sauce to a serving bowl and refrigerate until ready to serve.",
      imageUrl:
        "https://s23209.pcdn.co/wp-content/uploads/2013/11/Cranberry-Orange-Sauce__413.jpg",
      image2Url:
        "https://www.oceanspray.com/-/media/OS/US/DotCom/recipes/Sauces-Sides-and-Salads/Fresh-Cranberry-Orange-Relish_MobileDETAIL_815.ashx",
      image3Url:
        "https://flavorthemoments.com/wp-content/uploads/2020/11/cranberry-orange-sauce-1-1360.jpg",
      tags: ["holiday", "cranberry", "sauce", "thanksgiving"],
      ingredients: [
        {
          name: "fresh cranberries",
          measurement: "12 ounces (340g)",
        },
        { name: "granulated sugar", measurement: "1 cup" },
        { name: "fresh orange juice", measurement: "1/2 cup" },
        { name: "orange zest", measurement: "1 tablespoon" },
      ],
    },
    {
      name: "Roasted Garlic Mashed Potatoes",
      details:
        "Creamy and flavorful mashed potatoes with a hint of roasted garlic",
      desc: "These roasted garlic mashed potatoes are the perfect side dish for your holiday feast. The roasted garlic adds a rich and savory flavor to the creamy mashed potatoes, making them a delicious complement to your main course. Your guests will love this comforting and classic holiday recipe.",
      instructions:
        "1. Preheat your oven to 400°F (200°C). 2. Cut the top off a whole garlic bulb to expose the cloves. Drizzle with olive oil and wrap it in aluminum foil. Roast in the preheated oven for about 30-35 minutes, or until the garlic cloves are soft and golden. 3. While the garlic is roasting, peel and cut the potatoes into chunks. 4. Place the potato chunks in a large pot, cover them with cold water, and add a pinch of salt. Bring to a boil, then reduce the heat and simmer for about 15-20 minutes or until the potatoes are fork-tender. 5. Drain the potatoes and return them to the pot. 6. Squeeze the roasted garlic cloves out of their skins into the pot with the potatoes. 7. Add butter, milk, salt, and pepper to the potatoes and garlic. Mash everything together until smooth and creamy. You can use a hand masher or an electric mixer for this step. 8. Taste and adjust the seasoning if needed. 9. Serve hot, garnished with fresh chopped chives or parsley if desired.",
      imageUrl:
        "https://dishingouthealth.com/wp-content/uploads/2021/11/GarlicMashedPotatoes_Styled1.jpg",
      image2Url:
        "https://cdn.theliveinkitchen.com/wp-content/uploads/2021/10/22133400/Mashed-Potatoes-Without-Milk-The-Live-In-Kitchen-Ingredients-The-Live-In-Kitchen.png",
      image3Url:
        "https://littleferrarokitchen.com/wp-content/uploads/2021/10/Roasted-Garlic-Mashed-Potatoes-2.jpg",
      tags: ["holiday", "potatoes", "sides", "thanksgiving", "christmas"],
      ingredients: [
        {
          name: "russet potatoes",
          measurement: "2.5 pounds (about 1.13 kg)",
        },
        { name: "whole garlic bulb", measurement: "1" },
        { name: "olive oil", measurement: "2 tablespoons" },
        { name: "butter", measurement: "1/2 cup (1 stick)" },
        { name: "milk", measurement: "1/2 cup" },
        { name: "salt", measurement: "1 teaspoon" },
        { name: "black pepper", measurement: "1/2 teaspoon" },
        {
          name: "fresh chives or parsley (optional)",
          measurement: "for garnish",
        },
      ],
    },
    {
      name: "Herb-Infused Roasted Chicken",
      details: "A savory and herbaceous whole roasted chicken",
      desc: "This classic Herb-Infused Roasted Chicken features a golden, crispy skin on the outside and succulent, flavorful meat on the inside. The secret lies in a blend of herbs and spices that infuse the chicken with depth and aroma during the roasting process. While simple to prepare, the result is nothing short of a feast for the senses, making it a perfect centerpiece for any family dinner or special occasion. Follow this recipe for a poultry dish that's guaranteed to be a crowd-pleaser.",
      instructions:
        "1. Preheat your oven to 375 degrees F (190 degrees C). Pat the chicken dry with paper towels. 2. In a small bowl, mix together olive oil, minced garlic, rosemary, thyme, sage, salt, and pepper. Rub this mixture all over the chicken, both on and under the skin. 3. Stuff the cavity of the chicken with lemon quarters and onion pieces. Tie the legs together with kitchen string and tuck the wing tips under the body. 4. Place the chicken breast-side up in a roasting pan and roast for 90 minutes, or until the internal temperature reaches 165 degrees F (75 degrees C). Baste occasionally with the pan juices. 5. Once cooked, tent the chicken with aluminum foil and let it rest for 10 minutes before carving. Serve with the roasted garlic and onions from the cavity and a drizzle of the pan juices.",
      imageUrl:
        "https://www.jocooks.com/wp-content/uploads/2021/11/roast-chicken-1-22.jpg",
      image2Url:
        "https://static01.nyt.com/images/2022/04/23/dining/23MS-FOODMANREX/23MS-FOODMANREX-mediumSquareAt3X-v5.jpg",
      image3Url:
        "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2022/01/Whole-Roasted-Chicken-crop-27.jpg",
      tags: ["chicken", "foodprep", "dinner"],
      ingredients: [
        {
          name: "whole chicken (about 4 to 5 pounds)",
          measurement: "1800-2270g",
        },
        { name: "olive oil", measurement: "50ml" },
        { name: "garlic, minced", measurement: "15g" },
        { name: "fresh rosemary, chopped", measurement: "10g" },
        { name: "fresh thyme, chopped", measurement: "10g" },
        { name: "fresh sage, chopped", measurement: "10g" },
        { name: "salt", measurement: "5g" },
        { name: "ground black pepper", measurement: "2g" },
        { name: "lemon, quartered", measurement: "1 medium" },
        { name: "onion, cut into wedges", measurement: "100g" },
      ],
    },
    {
      name: "Flank Steak with Cilantro Salsa Verde",
      details: "A juicy steak tamed by a refreshing salsa verde",
      desc: "Savor the exquisite flavors of our perfectly grilled flank steak, lavished with a vibrant Cilantro Salsa Verde sauce. As the tender, succulent meat meets the zesty embrace of our homemade salsa, your palate embarks on an unforgettable journey. The robust, smoky notes of the steak harmonize seamlessly with the refreshing tang of cilantro and a hint of spiciness, creating a culinary masterpiece that delights the senses.",
      instructions:
        "1. Sprinkle steak with salt and pepper. Grilled steak, covered, over medium heat or broil 4 inches from heat until meat reaches desired doneness (for medium rare, a thermometer should read 135 degrees, medium 160 degrees) 6 to 9 minutes per side. Let stand 5 minutes. 2. Meanwhile, process salsa and cilantro in a food processor until blended. Slice steak thinly across the grain; serve with salsa mixture, avocado, and tomato.",
      imageUrl:
        "https://www.chelseasmessyapron.com/wp-content/uploads/2016/07/Flank-Steak-with-Chimichurri-Sauce-2.jpg",
      image2Url:
        "https://i.pinimg.com/736x/3f/ab/26/3fab2610354198ffba877ff94cd9aa40.jpg",
      image3Url:
        "https://nutritionfor.us/wp-content/uploads/2016/04/Easy-steak-with-creamy-pesto.jpg",
      tags: ["mexican", "beef"],
      ingredients: [
        {
          name: "beef flank steak or top sirloin steak, 1in thick",
          measurement: "567g",
        },
        { name: "salt", measurement: "2-5g" },
        { name: "salsa verde", measurement: "240g" },
        { name: "cilantro", measurement: "30g" },
        { name: "peeled and cubed avocado", measurement: "170g" },
        { name: "chopped tomatoes", measurement: "150g" },
      ],
    },
    {
      name: "Shrimp Gazpacho",
      details:
        "A cool, tangy relight brimming with succulent shrimp and vibrant, garden fresh ingredients",
      desc: "Perfect for a warm summer day this cool shrimp gazpacho, also known as a “coctel de camarones” or shrimp cocktail in Mexico. A tomato based cold soup filled with fresh plump shrimp and juicy vegetables. The embodiment of a refreshing dish meant to make your day just a little more relaxing.",
      instructions:
        "1. In a large nonreactive bowl, gently mix all of the ingredients. Cover and refrigerate for one hour before serving",
      imageUrl:
        "https://www.onionringsandthings.com/wp-content/uploads/2018/05/coctel-de-camaron-7.jpg",
      image2Url:
        "https://www.allrecipes.com/thmb/tBoJHihYN3EqENRruMEebEIOnB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228393-authentic-mexican-shrimp-cocktail-coctel-de-camarones-estilo-mexicano-ddmfs-beauty-3x4-9cda2dfc17a543d8b128ca2208a71d39.jpg",
      image3Url:
        "https://i.blogs.es/f5aba8/como-hacer-coctel-de-camaron-1-/1366_2000.jpg",
      tags: ["mexican", "easy"],
      ingredients: [
        {
          name: "spicy hot v8 juice",
          measurement: "1440g",
        },
        {
          name: "cold water",
          measurement: "480g",
        },
        {
          name: "lime juice",
          measurement: "120g",
        },
        {
          name: "minced cilantro",
          measurement: "60g",
        },
        {
          name: "salt",
          measurement: "2.5g",
        },
        {
          name: "uncooked shrimp",
          measurement: "454g",
        },
        {
          name: "diced cucumber",
          measurement: "227g",
        },
        {
          name: "chopped tomatoes",
          measurement: "454g",
        },
        {
          name: "peeled and cubed avocado",
          measurement: "454g",
        },
      ],
    },
    {
      name: "Pinto Bean Tostadas",
      details: "Like a taco and an arepa had a baby",
      desc: "Experience Tex-Mex bliss with our Pinto Bean Tostadas – crispy shells piled high with hearty pinto beans, zesty salsa, lettuce, and cheese. Quick to make and bursting with flavor, they're a guaranteed crowd-pleaser for any mealtime.",
      instructions:
        "1. In a large skillet, cook the beef and onion over medium heat until the meat is no longer pink; Drain. 2. Stir in the beans, salsa, and seasonings. Bring to a boil. Reduce the heat; Simmer, uncovered, for 10 minutes, stirring occasionally. 3. Spoon about half cup of the beef mixture onto each tostada shell. 4. Top each with lettuce, cheese, and tomato. 5. Serve immediately.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps138294__SD143206B04_08_12b-1.jpg?fit=700%2C1024",
      image2Url:
        "https://www.chelseasmessyapron.com/wp-content/uploads/2021/01/BEAN-TOSTADA-2.jpg",
      image3Url:
        "https://cadryskitchen.com/wp-content/uploads/2012/10/pinto-bean-tostada.jpg",
      tags: ["mexican", "easy"],
      ingredients: [
        { name: "sour cream", measurement: "60g" },
        { name: "lime zest", measurement: "1.5g" },
        { name: "cumin", measurement: "0.5g" },
        { name: "salt", measurement: "2.5g" },
        { name: "canola oil", measurement: "30ml" },
        { name: "minced garlic", measurement: "6g" },
        {
          name: "pinto beans rinsed and drained",
          measurement: "2 cans (425g each)",
        },
        { name: "hot pepper sauce", measurement: "10g" },
        { name: "chili powder", measurement: "2.5g" },
        { name: "corn tortillas", measurement: "6pc" },
        { name: "shredded lettuce", measurement: "170g" },
        { name: "salsa", measurement: "125g" },
        { name: "crumbled queso fresco", measurement: "90g" },
      ],
    },
    {
      name: "Chicken Tacos al Pastor",
      details: "Who doesn’t love a taco?",
      desc: "Chicken Tacos al Pastor are a mouthwatering combination of marinated chicken, aromatic spices, and sweet pineapple, all wrapped in warm tortillas. This quick and easy dish captures the essence of Mexican street food, delivering a burst of delicious flavor in every bite.",
      instructions:
        "1. Coarsely shred pork, reserving juices. In a small bowl, crush half the pineapple with a fork. 2. In a large nonstick skillet, heat oil over medium-high heat. Add whole pineapple chunks; cook until lightly browned, 2 to 3 minutes, turning occasionally. Remove from pan. 3. Add enchilada sauce and crushed pineapple to the same skillet; stir in pork and reserved juices. Cook over medium-high heat until liquid is evaporated, 4 to 6 minutes, stirring occasionally. 4. Serve in tortillas with pineapple chunks, onion, and cilantro. If desired, top with queso fresco and salsa and serve with lime wedges.",
      imageUrl:
        "https://carlsbadcravings.com/wp-content/uploads/2022/06/chicken-al-pastor-2a.jpg",
      image2Url:
        "https://masonfit.com/wp-content/uploads/2021/08/chicken-tacos-al-pastor-819x1024.jpg",
      image3Url:
        "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/al-pastor-3507w.jpg",
      tags: ["mexican"],
      ingredients: [
        { name: "Refrigerated cooked pork roast au jus", measurement: "425g" },
        { name: "Drained unsweetened pineapple chunks", measurement: "240g" },
        { name: "Canola oil", measurement: "15ml" },
        { name: "Enchilada sauce", measurement: "120g" },
        { name: "Chopped onion", measurement: "15g" },
        { name: "Chopped cilantro", measurement: "15g" },
        { name: "Corn tortillas", measurement: "8" },
      ],
    },
    {
      name: "Southwestern Pasta Salad",
      details: "A delicious pasta salad",
      desc: "Savor the vibrant Southwestern Pasta Salad, a harmonious blend of black beans, ripe olives, sweet peppers, and cherry tomatoes, tossed in a zesty cilantro, cumin, and lime dressing. This dish celebrates bold flavors and diverse textures, with creamy avocado and hearty pasta. It's a zingy, spicy, and delightful salad for every occasion.",
      instructions:
        "1. In a small bowl, whisk the first eight ingredients until blended. Cook pasta according to package directions. Drain pasta; Rinse with cold water. 2. In a large bowl, mix pasta, corn, beans, tomatoes, olives, peppers, onion, and 1/4 cup cilantro. Pour dressing over salad; toss to coat. Refrigerate until serving. 3. Just before serving, top with avocado and the remaining cilantro.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2020/02/Southwestern-Spiral-Pasta_EXPS_TOHJJ20_168769_E01_31_2b-3.jpg?fit=700%2C1024",
      image2Url:
        "https://i0.wp.com/lmld.org/wp-content/uploads/2014/06/southwest-pasta-salad8.jpg",
      image3Url:
        "https://www.bonappeteach.com/wp-content/uploads/2023/01/Creamy-Southwestern-Pasta-Salad-Recipe-7-scaled.jpg",
      tags: ["mexican", "easy"],
      ingredients: [
        { name: "black beans, rinsed and drained", measurement: "425g" },
        { name: "halved cherry tomatoes", measurement: "150g" },
        { name: "drained olives", measurement: "64g" },
        { name: "chopped green pepper", measurement: "60g" },
        { name: "chopped red pepper", measurement: "60g" },
        { name: "chopped red onion", measurement: "60g" },
        { name: "chopped cilantro", measurement: "30g" },
        { name: "peeled and cubed avocado", measurement: "170g" },
        { name: "cumin", measurement: "4g" },
        { name: "minced garlic", measurement: "6g" },
        { name: "salsa", measurement: "15g" },
        { name: "white wine vinegar", measurement: "15g" },
        { name: "cayenne pepper", measurement: "2g" },
        { name: "salt", measurement: "3g" },
        { name: "cavatappi pasta", measurement: "454g" },
        { name: "kernel corn", measurement: "170g" },
        { name: "lime juice", measurement: "180ml" },
        { name: "olive oil", measurement: "60ml" },
      ],
    },
    {
      name: "Vegetarian Skillet Enchiladas",
      details: "It's an enchilada fiesta!",
      desc: "Indulge in Tex-Mex perfection with the Enchilada Skillet! This dish features tender corn tortillas, black beans, and a blend of zesty spices, all smothered in cheesy goodness and enchilada sauce. Quick, satisfying, and packed with Southwestern flavor, it's a crowd-pleaser that brings the best of Tex-Mex right to your table.",
      instructions:
        "1. Preheat oven to 400 degrees. Heat oil in a 10-inch cast iron or other oven-proof skillet over medium-high heat. Add onion and pepper; cook and stir until tender, 2 to 3 minutes. Add garlic; cook one minute longer. Stir in beans, enchilada sauce, corn, chili powder, cumin, and pepper. Stir in tortilla strips. 2. Bring to a boil. Reduce heat; simmer, uncovered, until tortilla strips are softened, 3 to 5 minutes. Sprinkle with cheese. Bake, uncovered, until sauce is bubbly and cheese is melted, 3 to 5 minutes.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2020/05/Vegetarian-Skillet-Enchiladas_EXPS_FT20_251146_F_0221_1.jpg?fit=700%2C1024",
      image2Url:
        "https://www.howsweeteats.com/wp-content/uploads/2020/02/skillet-enchiladas-5-500x500.jpg",
      image3Url:
        "https://kelseynixon.com/wp-content/uploads/2021/02/Skillet-Enchiladas-Beauty-1200x799.png",
      tags: ["mexican"],
      ingredients: [
        { name: "cumin", measurement: "2g" },
        { name: "pepper", measurement: "1g" },
        { name: "corn tortillas", measurement: "8" },
        { name: "shredded Mexican cheese blend", measurement: "113g" },
        { name: "canola oil", measurement: "15ml" },
        { name: "chopped Spanish onion", measurement: "60g" },
        { name: "chopped sweet red pepper", measurement: "120g" },
        { name: "minced garlic", measurement: "6g" },
        { name: "rinsed and drained black beans", measurement: "425g" },
        { name: "enchilada sauce", measurement: "283g" },
        { name: "frozen corn", measurement: "150g" },
        { name: "chili powder", measurement: "5g" },
      ],
    },
    {
      name: "Fish Tacos",
      details: "A well-balanced fish taco",
      desc: "Fish Tacos, a mouthwatering delight featuring tender, seasoned mahi-mahi or cod strips, lightly breaded and paired with coleslaw, fresh tomatoes, and Mexican cheese. Drizzled with a zesty, creamy sauce, each taco is a perfect blend of flavors and textures, delivering a taste of coastal paradise in every bite.",
      instructions:
        "1. For sauce, in a small bowl, mix mayonnaise, lime juice, and milk; Refrigerate until serving. 2. In a shallow bowl, whisk together egg and water. In another shallow bowl, toss breadcrumbs with lemon pepper. Dip fish in egg mixture, then in crumb mixture, patting to help coating adhere. 3. Place a large nonstick skillet over medium-high heat. Add fish; cook 2 to 4 minutes per side or until golden brown and fish just begins to flake easily with a fork. Serve in tortillas with toppings and sauce.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/EXPS_HCK17_25596_B08_23_1b-13.jpg?fit=700%2C1024",
      image2Url:
        "https://diethood.com/wp-content/uploads/2023/03/mahi-mahi-taco-7.jpg",
      image3Url:
        "https://www.billyparisi.com/wp-content/uploads/2018/05/mahi-process-1.jpg",
      tags: ["mexican"],
      ingredients: [
        { name: "fat-free mayonnaise", measurement: "120g" },
        { name: "lime juice", measurement: "15g" },
        { name: "fat-free milk", measurement: "10g" },
        { name: "large egg", measurement: "1" },
        { name: "water", measurement: "5g" },
        { name: "dry breadcrumbs", measurement: "40g" },
        { name: "salt-free lemon pepper seasoning", measurement: "8g" },
        { name: "mahi-mahi or cod filets cut in strips", measurement: "454g" },
        { name: "minced cilantro", measurement: "15g" },
        { name: "coleslaw mix", measurement: "90g" },
        { name: "chopped tomatoes", measurement: "227g" },
        { name: "shredded Mexican cheese blend", measurement: "113g" },
        { name: "corn tortillas", measurement: "4" },
      ],
    },
    {
      name: "Pot Stickers",
      details: "An easy to make appetizer",
      desc: "Pot stickers, also known as dumplings, are a beloved Asian dish. They feature flavorful fillings like ground pork, cabbage, and aromatic seasonings encased in a delicate wrapper. What sets them apart is the unique cooking method, combining pan-frying for a crispy bottom and steaming for a juicy interior. These savory bites are celebrated for their exquisite taste and culinary artistry.",
      instructions:
        "1. Place the shrimp in the work bowl of a food processor, and process until the shrimp are finely ground. Set aside in a large bowl. Working in batches, process the ground beef to a fine grind, and set aside with the shrimp. Combine the shrimp and ground beef with ginger, shallot, green onions, Napa cabbage, soy sauce, sesame oil, salt, pepper and white sugar. Mix the ingredients until thoroughly combined.\n2. To fill the pot stickers, place a wrapper on a work surface in front of you, and place a scant teaspoon of filling in the center. With a wet finger, dampen the edges of the wrapper. Fold the dough into a Half Moon shape, and closing the filling, and press and seal to remove extra air and tightly seal the edges together. It’s nice to hold several small pleats in the top half of the wrapper for a traditional look before you seal the filling. Refrigerate the filled wrappers on a parchment-lined baking sheet while you finish filling and sealing the pot stickers.\n3. Heat the oil in a large nonstick skillet with a lid over medium heat. Place pot stickers into the hot oil, flat sides down, without crowding, and let fry until the bottoms are golden brown, 1-2 minutes. Turn the dumplings over and pour the water over them. Cover the pan with a lid and let the dumplings steam until the water has nearly evaporated and the dumplings have begun to fry in oil again, 5-7 minutes. Uncover the skillet and let the pot stickers cook until all the water is evaporated and the wrapper has shrunk down tightly onto the filling, another 2-3 minutes.",
      imageUrl:
        "https://www.spoonforkbacon.com/wp-content/uploads/2020/07/potsticker-recipe-card.jpg",
      image2Url:
        "https://hips.hearstapps.com/hmg-prod/images/20190905-potstickers-ehg-1399-jpg-1569007378.jpg?crop=1xw:0.8433382137628112xh;center,top",
      image3Url:
        "https://www.elmundoeats.com/wp-content/uploads/2022/02/RC-crispy-bottoms-chicken-and-shrimp-potstickers-in-a-plate-view-from-top.jpg",
      tags: ["chinese"],
      ingredients: [
        { name: "ground pork", measurement: "454g" },
        { name: "shredded nappa cabbage", measurement: "120g" },
        { name: "chopped green onions", measurement: "45g" },
        { name: "chopped red pepper", measurement: "20g" },
        { name: "chopped green pepper", measurement: "20g" },
        { name: "minced ginger", measurement: "5g" },
        { name: "soy sauce", measurement: "20ml" },
        { name: "sesame oil", measurement: "5ml" },
        { name: "crushed red pepper flakes", measurement: "1g" },
        { name: "dumpling/wonton wrappers", measurement: "90" },
        { name: "water", measurement: "30ml" },
        { name: "canola oil", measurement: "15ml" },
      ],
    },
    {
      name: "Chinese Chicken Wings",
      details: "Quick and easy chicken wing recipe",
      desc: "Savor the savory delight of our Chinese Chicken Wings, where soy sauce, brown sugar, and garlic powder combine to create an irresistible glaze. These wings, perfectly caramelized and tender, are a taste sensation that's perfect as an appetizer or main course, promising a flavorful, finger-licking experience.",
      instructions:
        "1. Stir together soy sauce, brown sugar, and garlic powder in a saucepan over medium heat. Cook and stir until sugar has dissolved. Remove from heat and allow to cool.\n2. Place chicken wings in a large bowl. Pour soy sauce mixture over wings and toss to coat evenly. Cover the bowl with plastic wrap. Allow chicken to marinate in the refrigerator for 8 hours to overnight.\n3. Preheat oven to 350 degrees F\n4. Pour chicken wings and marinate into a 9x13-inch baking dish. Cover the baking dish with aluminum foil.\n5. Bake in the preheated oven until thoroughly hot, about 45 minutes. Remove foil and bake for 15 minutes. Serve hot.",
      imageUrl:
        "https://www.allrecipes.com/thmb/l7LdfiDDRYaufO8JRPw-wqnLR2w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/903661-a2187c57b7634f46a8c15a9367503e85.jpg",
      image2Url:
        "https://www.jocooks.com/wp-content/uploads/2012/06/sticky-chinese-chicken-wings-1-12.jpg",
      image3Url:
        "https://www.kitchensanctuary.com/wp-content/uploads/2016/06/Crispy-Chicken-Wings-with-Sticky-Asian-Glaze-square-FS.jpg",
      tags: ["chinese", "easy"],
      ingredients: [
        { name: "soy sauce", measurement: "480ml" },
        { name: "brown sugar", measurement: "400g" },
        { name: "garlic powder", measurement: "20g" },
        { name: "chicken wings", measurement: "5lbs" },
      ],
    },
    {
      name: "Lo Mein Noodles",
      details: "A classic you can make at home",
      desc: "Savor our Lo Mein Noodles, a delightful dish where tender spaghetti meets a sweet and savory sauce of low-sodium soy sauce, teriyaki sauce, honey, and a hint of ginger. As you enjoy the interplay of textures and flavors from colorful vegetables like celery, carrots, sweet onions, and green onions, each bite is a delightful adventure. Whether as a quick weeknight dinner or a flavorful side dish, it's a dish designed to satisfy your cravings.",
      instructions:
        "1. Gather all ingredients\n2. Bring a large pot of lightly salted water to a boil. Cook spaghetti in boiling water, stirring occasionally, until tender yet form to the bite, about 12 minutes; drain, then rinse with cold water to cool.\n3. Meanwhile whisk together soy sauce, teriyaki sauce, honey, and ginger in a small bowl; Set aside.\n4. Heat oil in a large skillet or wok over high heat. Cook and stir celery, carrots, onion, and green onions in hot oil until slightly tender, 5 to 7 minutes\n5. Add spaghetti and soy sauce mixture. Cook, stirring frequently, until heated through, about 5 minutes",
      imageUrl:
        "https://recipetineats.com/wp-content/uploads/2019/11/Lo-Mein_5.jpg",
      image2Url:
        "https://www.healthygffamily.com/wp-content/uploads/2019/12/A516112C-3492-4BB4-852C-D51B22C49232-scaled.jpg",
      image3Url:
        "https://eatwithclarity.com/wp-content/uploads/2021/02/vegetable-lo-mein-2.jpg",
      tags: ["chinese"],
      ingredients: [
        { name: "spaghetti", measurement: "8oz" },
        { name: "low-sodium soy sauce", measurement: "45ml" },
        { name: "teriyaki sauce", measurement: "30ml" },
        { name: "honey", measurement: "30ml" },
        { name: "ground ginger", measurement: "1g" },
        { name: "vegetable oil", measurement: "30ml" },
        { name: "sliced celery", measurement: "90g" },
        { name: "carrots cut in batons", measurement: "180g" },
        { name: "sliced Spanish onion", measurement: "125g" },
        { name: "sliced green onions", measurement: "10g" },
      ],
    },
    {
      name: "Honey Sesame Chicken",
      details: "Juicy fried chicken in a sweet honey sauce",
      desc: "Savor our Honey Sesame Chicken – tender, crispy-coated chicken meets a perfect balance of sweet and savory in a luscious honey-based sauce with a hint of heat. It's a delightful contrast of textures and flavors, topped with toasted sesame seeds, perfect for weeknight dinners or special indulgences, satisfying your homemade takeout cravings.",
      instructions:
        "1. Mix honey, tomato paste, apple cider vinegar, Sriracha sauce, and sesame oil together in a medium bowl.\n2. Combine cold water, cornstarch, and half teaspoon salt in a bowl; Mix well. Add to honey sauce mixture and mix well. Set aside until needed.\n3. Sprinkle quarter teaspoon salt and quarter teaspoon garlic powder over chicken.\n4. Whisk egg in a large bowl. Add remaining salt and garlic powder and mix well. Mix in flour. Combine water and cornstarch in a bowl; Add to egg mixture and mix well. Add avocado oil and baking powder; Mix well.\n5. Pour 3 inches of peanut oil into the bottom of a wide, deep pot and heat to 325 degrees F.\n6. Place half of the chicken pieces into the batter mixture and turn to coat. Scoop tablespoonfuls of chicken and batter into the hot oil. Do not crowd the chicken. Fry in batches until chicken pieces are golden brown and no longer pink in the center, about one minute per side. Transfer to a paper towel-lined plate.\n7. Pour honey sauce mixture into a large skillet. Bring to a simmer over medium heat, 3 to 4 minutes. Add all chicken pieces to the sauce; turn to coat. Sprinkle on sesame seeds.",
      imageUrl:
        "https://www.allrecipes.com/thmb/oE73fctX0vcBzf4DfXwr3X4SHN0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/image-1-1-76adc48842d944adb74706e062f17502.jpg",
      image2Url:
        "https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg",
      image3Url:
        "https://christieathome.com/wp-content/uploads/2021/02/Honey-Sesame-Chicken-Updated-5.jpg",
      tags: ["chinese"],
      ingredients: [
        { name: "raw honey", measurement: "113g" },
        { name: "tomato paste", measurement: "45g" },
        { name: "apple cider vinegar", measurement: "15ml" },
        { name: "Sriracha sauce", measurement: "15ml" },
        { name: "Sesame oil", measurement: "5ml" },
        { name: "Cold water", measurement: "120ml" },
        { name: "Cornstarch", measurement: "15g" },
        { name: "Salt", measurement: "3g" },
        { name: "Salt for chicken", measurement: "3g" },
        { name: "Garlic powder for chicken", measurement: "2g" },
        {
          name: "Skinless, boneless chicken breast cut into 1in pieces",
          measurement: "454g",
        },
        { name: "All-purpose flour", measurement: "90g" },
        { name: "Cold water", measurement: "120ml" },
        { name: "Cornstarch", measurement: "90g" },
        { name: "Avocado oil", measurement: "30ml" },
        { name: "Baking powder", measurement: "3g" },
        { name: "Peanut oil for frying", measurement: "1pt" },
        { name: "Toasted sesame seeds", measurement: "3g" },
      ],
    },
    {
      name: "Sesame Beef",
      details: "A stir-fry perfect for a quick meal",
      desc: "Sesame Beef is a delightful dish where tender round steak is marinated in a savory mix of soy sauce, white sugar, and garlic. Stir-fried to perfection, it boasts a sweet and savory caramelized glaze, topped with green onions and toasted sesame seeds. A quick and easy weeknight dinner that brings Asian flavors to your table.",
      instructions:
        "1. Mix together sugar, oil, soy sauce, green onions, and garlic in a large bowl; Set marinade aside.\n2. Cut steak into strips and add to marinade; Stir to coat. Cover the bowl and place in the refrigerator, 30 minutes to overnight.\n3. Cook steak with marinade in a wok or frying pan over medium-high heat, stirring occasionally, until browned, about 5 minutes. Add sesame seeds; Cook for two more minutes.",
      imageUrl:
        "https://omnivorescookbook.com/wp-content/uploads/2021/10/210217_Sesame-Beef_550.jpg",
      image2Url:
        "https://i0.wp.com/chefsavvy.com/wp-content/uploads/super-easy-sesame-beef.jpg?resize=665%2C876&ssl=1",
      image3Url:
        "https://www.jocooks.com/wp-content/uploads/2022/07/crispy-sticky-beef-1-9.jpg",
      tags: ["chinese", "easy"],
      ingredients: [
        { name: "white sugar", measurement: "50g" },
        { name: "vegetable oil", measurement: "60ml" },
        { name: "soy sauce", measurement: "60ml" },
        { name: "chopped green onions", measurement: "30g" },
        { name: "minced garlic", measurement: "4g" },
        { name: "round steak", measurement: "454g" },
        { name: "sesame seeds", measurement: "15g" },
      ],
    },
    {
      name: "Char Siu – Chinese BBQ Pork",
      details: "You might never eat another type of pork again",
      desc: "Char Siu is a beloved Chinese dish featuring succulent roasted pork with a signature sweet and savory red glaze. Achieved through a flavorful marinade of soy sauce, honey, ketchup, brown sugar, and aromatic seasonings, the marinated pork tenderloins are roasted to perfection. Char Siu is a versatile delicacy, ideal as a sandwich filling, noodle topping, or a standalone dish that embodies the essence of Chinese cuisine with its harmonious blend of textures and flavors.",
      instructions:
        "1. Gather all ingredients\n2. Stir soy sauce, honey, ketchup, brown sugar, rice wine, hoisin sauce, red bean curd, and five spice powder together in a saucepan over medium-low heat. Cook and stir until just combined and slightly warm, two to three minutes.\n3. Meanwhile, slice each pork tenderloin lengthwise into 1 1/2 to 2-inch thick strips. Place pork strips in a large, resealable plastic bag.\n4. Pour marinade into the bag with the pork. Squeeze air from the bag, seal, and turn the bag a few times until pork is well coated. Marinate in the refrigerator, 2 hours to overnight.\n5. When ready to cook, Preheat a charcoal grill for medium-high heat and lightly oil the grate.\n6. Remove pork from marinade and shake to remove excess liquid. Set aside the remaining marinade for basting.\n7. Rake the hot coals into two equal piles on opposite sides of the charcoal grate. Add a small container of water to the grate. Place pork strips in the center of the grate for indirect cooking.\n8. Cook pork over indirect heat, turning regularly and basting as desired, until an instant-read thermometer inserted into the center reads at least 145 degrees Fahrenheit, 30 minutes or longer.\n9. Serve hot and enjoy!",
      imageUrl:
        "https://www.allrecipes.com/thmb/JCd36E33E9XFck8e1ZhYysLKM8c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/1060446-char-siu-chinese-bbq-pork-Sherri-4x3-1-27eec08a49ea4922ac3440c35bfc6e1b.jpg",
      image2Url:
        "https://omnivorescookbook.com/wp-content/uploads/2022/09/220908_Air-Fryer-Char-Siu-Pork_550.jpg",
      image3Url:
        "https://keepingitrelle.com/wp-content/uploads/2022/02/Char-Siu-Pork-15-scaled.jpg",
      tags: ["chinese"],
      ingredients: [
        { name: "soy sauce", measurement: "120ml" },
        { name: "honey", measurement: "80g" },
        { name: "ketchup", measurement: "80g" },
        { name: "brown sugar", measurement: "80g" },
        { name: "chinese rice wine", measurement: "60ml" },
        { name: "hoisin sauce", measurement: "30g" },
        { name: "red bean curd", measurement: "30g" },
        { name: "Chinese five spice powder", measurement: "5g" },
        { name: "Pork Tenderloin", measurement: "908g" },
      ],
    },
    {
      name: "Ma Po Tofu",
      details: "It’s tofu but it’s not vegetarian",
      desc: "Ma Po Tofu, a beloved Szechuan dish, is a spicy revelation. Soft tofu cubes are infused with fiery flavors from a mix of ground pork, ginger, garlic, and an array of sauces. The key to this dish's magic is the Szechuan peppercorns, which provide a numbing sensation to balance the spicy heat. With a fragrant chicken broth and garnished with sliced green onions, Ma Po Tofu is a culinary adventure that showcases the bold essence of Szechuan cuisine.",
      instructions:
        "1. In a small bowl, combine ground pork, sherry, and 1 teaspoon cornstarch; set aside.\n2. In a separate bowl, combine black beans, chile paste, cayenne pepper, soy sauce, garlic, and ginger; set aside.\n3. Heat a large skillet over medium heat. If pork is lean, add 1 tablespoon oil. Cook pork until evenly browned. Stir in black bean mixture, tofu, and peas. Pour in chicken broth and bring to a boil. Stir in dissolved cornstarch and cook until thickened.",
      imageUrl:
        "https://omnivorescookbook.com/wp-content/uploads/2022/05/220510_Mapo-Tofu_550.jpg",
      image2Url:
        "https://hips.hearstapps.com/hmg-prod/images/mapo-tofu-2-jpg-1642115176.jpg?crop=1xw:1xh;center,top&resize=1200:*",
      image3Url:
        "https://www.wenthere8this.com/wp-content/uploads/2017/09/mapo-tofu-recipe-7.jpg",
      tags: ["chinese"],
      ingredients: [
        { name: "ground pork", measurement: "180g" },
        { name: "vegetable oil", measurement: "30ml" },
        { name: "minced garlic", measurement: "3g" },
        { name: "minced ginger", measurement: "3g" },
        { name: "soft tofu cut into ½in cubes", measurement: "100g" },
        { name: "chicken broth", measurement: "125ml" },
        { name: "soy sauce", measurement: "5ml" },
        { name: "sugar", measurement: "3g" },
        { name: "chili bean paste", measurement: "3g" },
        { name: "black bean sauce", measurement: "2g" },
        { name: "cornstarch", measurement: "3g" },
        { name: "water", measurement: "5ml" },
        { name: "Szechuan peppercorns", measurement: "3g" },
        { name: "sliced green onions", measurement: "3g" },
      ],
    },
    {
      name: "Honey Walnut Shrimp",
      details:
        "Crispy battered shrimp are tossed in a creamy sauce and topped with sugar-coated walnuts.",
      desc: "Honey Walnut Shrimp is an indulgent dish where large, tender shrimp are fried to perfection with a delicate, crunchy coating. They're then generously coated in a rich, sweet, and creamy sauce made from honey, mayonnaise, and sweetened condensed milk. Lightly candied walnuts add the perfect contrast of textures. This Chinese-American favorite perfectly balances the flavors of the sea with a touch of sweetness, creating an unforgettable dining experience.",
      instructions:
        "1. Stir together water and sugar in a small saucepan over high heat. Bring to a boil and add walnuts. Boil for two minutes, then drain and place walnuts on a cookie sheet to dry.\n2. Whip egg whites in a medium bowl until foamy. Stir in mochiko until it has a pasty consistency.\n3. Heat oil in a heavy deep skillet over medium-high heat.\n4. Dip shrimp in mochiko batter, then fry in batches in hot oil until golden brown, about 5 minutes. Remove with a slotted spoon and drain on paper towels.\n5. Stir together mayonnaise, honey, and sweetened condensed milk in a medium serving bowl. Add fried shrimp and toss to coat with sauce. Sprinkle candied walnuts on top and serve.",
      imageUrl:
        "https://bellyfull.net/wp-content/uploads/2021/07/Honey-Walnut-Shrimp-blog-2.jpg",
      image2Url:
        "https://tatyanaseverydayfood.com/wp-content/uploads/2014/04/Honey-Walnut-Shrimp-recipe.jpg",
      image3Url:
        "https://tornadoughalli.com/wp-content/uploads/2021/07/HONEY-WALNUT-SHRIMP-2-2.jpg",
      tags: ["chinese"],
      ingredients: [
        { name: "water", measurement: "240ml" },
        { name: "white sugar", measurement: "133g" },
        { name: "walnuts", measurement: "60g" },
        { name: "mochiko", measurement: "128g" },
        { name: "vegetable oil for frying", measurement: "240ml" },
        { name: "peeled and deveined large shrimp", measurement: "454g" },
        { name: "mayonnaise", measurement: "60g" },
        { name: "honey", measurement: "30g" },
        { name: "sweetened condensed milk", measurement: "15g" },
      ],
    },
    {
      name: "Steamed Fish With Ginger",
      details:
        "Tender and fragrant halibut fillet kissed by fresh ginger and savory soy sauces",
      desc: "Steamed fish with ginger is a delicate and aromatic dish featuring tender halibut fillet, gently steamed to perfection with the essence of fresh ginger, green onions, and soy sauces, creating a harmonious symphony of flavors.",
      instructions:
        "1. Pat halibut dry with paper towels. Rub both sides of fillet with salt. Scatter the ginger over the top of the fish and place onto a heat-proof ceramic dish.\n2. Place into a bamboo steamer set over several inches of gently boiling water and cover. Gently steam for 10-12 minutes.\n3. Pour accumulated water out of the dish and sprinkle the fillet with green onion. Drizzle both soy sauces over the surface of the fish.\n4. Heat peanut and sesame oils in a small skillet over medium-high heat until they begin to smoke. When the oil is hot, carefully pour on top of the halibut fillet. The very hot oil will cause the green onions and water on top of the fish to pop and splatter all over; be careful. Garnish with cilantro sprigs and serve immediately.",
      imageUrl:
        "https://thewoksoflife.com/wp-content/uploads/2020/12/cantonese-steamed-fish-14.jpg",
      image2Url:
        "https://img.delicious.com.au/yxtfSpzD/del/2015/10/chinese-steamed-fish-with-ginger-15230-1.jpg",
      image3Url:
        "https://casuallypeckish.com/wp-content/uploads/2021/03/Chinese-steamed-fish-1.jpg",
      tags: ["chinese"],
      ingredients: [
        { name: "halibut fillet", measurement: "454g" },
        { name: "kosher salt", measurement: "5g" },
        { name: "minced garlic", measurement: "5g" },
        { name: "sliced green onion", measurement: "15g" },
        { name: "dark soy sauce", measurement: "15ml" },
        { name: "light soy sauce", measurement: "15ml" },
        { name: "peanut oil", measurement: "15ml" },
        { name: "toasted sesame oil", measurement: "10ml" },
        { name: "fresh cilantro sprigs", measurement: "7g" },
      ],
    },
    {
      name: "Scallion Pancakes",
      details:
        "Crispy, savory and bursting with green onions, they’re so delicious you won’t want to share!",
      desc: "Scallion pancakes are savory, crispy delights that showcase the perfect blend of chewy and flaky textures. The dough, made with bread flour and boiling water, yields a tender interior, while the green onions and seasoning create a flavorful, savory burst in every bite. Pan fried to a golden crisp with a hint of vegetable oil, these pancakes are a delicious and satisfying treat that's adored in Chinese cuisine.",
      instructions:
        "1. Use a fork to mix flour and boiling water in a large bowl. Knead dough into a ball. Cover bowl with plastic wrap; Let dough rest for 30 to 60 minutes.\n2. Evenly divide dough into 16 pieces. Roll each piece into a 1/4-inch-thick circle. Brush each circle with oil, season with salt and pepper, and sprinkle with about one teaspoon of green onions. Roll up, cigar-style; coil each pancake and pinch open ends together to form a disc. Roll each circle flat to about 1/4 inch thickness.\n3. Heat 2 teaspoons oil in a large skillet. Fry cakes until golden brown, about two minutes on each side. Add more oil between batches if necessary.",
      imageUrl:
        "https://www.chinasichuanfood.com/wp-content/uploads/2018/10/scallion-pancake-steps-39.webp",
      image2Url:
        "https://www.seriouseats.com/thmb/pSgKgm8cI4f8OotIu9xihcpkvWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/31.scallion-pancakes-beauty-shot-5219b2b53f51496199fde8fc7582c92b.jpg",
      image3Url:
        "https://nomnompaleo.com/wp-content/uploads/2018/03/800ScallionPancakes00aaDSC_1742b-800x1200.jpg",
      tags: ["chinese", "easy"],
      ingredients: [
        { name: "bread flour", measurement: "360g" },
        { name: "boiling water", measurement: "295ml" },
        { name: "vegetable oil", measurement: "30ml" },
        { name: "salt", measurement: "2g" },
        { name: "pepper", measurement: "2g" },
        { name: "chopped green onions", measurement: "120g" },
        { name: "vegetable oil for cooking", measurement: "10ml" },
      ],
    },
    {
      name: "Fried Rice",
      details:
        "Turning last night's dinner into today's delicacy – FRIED RICE!",
      desc: "Fried rice is a timeless classic in Asian cuisine, offering a symphony of flavors and textures in every bite. This dish transforms leftover white rice into a fragrant, savory masterpiece. The combination of vegetables, scrambled eggs, and a blend of soy and sesame sauces creates a harmonious balance of umami and rich, nutty flavors that make fried rice a beloved comfort food.",
      instructions:
        "1. Assemble all ingredients.\n2. Place carrots in a small saucepan and cover with water. Bring to a low boil and cook for 3-5 minutes. Stir in peas, then immediately drain in a colander.\n3. Heat a wok over high heat. Pour in vegetable oil, then stir in carrots, peas, and garlic; Cook for about 30 seconds. Add eggs; Stir quickly to scramble eggs with vegetables.\n4. Stir in cooked rice. Add soy sauce and toss rice to coat. Drizzle with sesame oil and toss again.\n5. Serve hot and enjoy!",
      imageUrl:
        "https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg",
      image2Url:
        "https://www.marionskitchen.com/wp-content/uploads/2021/06/How-to-Cook-Chinese-Fried-Rice-2.jpg",
      image3Url:
        "https://www.easypeasyfoodie.com/wp-content/uploads/2022/05/Easy-Peasy-Egg-Fried-Rice-Hero-Shot-2.jpg",
      tags: ["chinese", "easy"],
      ingredients: [
        { name: "chopped baby carrots", measurement: "87g" },
        { name: "frozen green peas", measurement: "60g" },
        { name: "vegetable oil", measurement: "30ml" },
        { name: "minced garlic", measurement: "5g" },
        { name: "large eggs", measurement: "2" },
        { name: "leftover cooked white rice", measurement: "540g" },
        { name: "soy sauce", measurement: "15ml" },
        { name: "sesame oil", measurement: "10ml" },
      ],
    },
    {
      name: "Peanut Butter Kiss Cookies",
      details:
        "Melt-in-your-mouth peanut butter goodness topped with a sweet chocolate kiss!",
      desc: "Peanut Butter Kiss Cookies are the epitome of simple, delicious comfort. These cookies boast a perfect balance of sweet and nutty, with a peanut butter base that’s soft and chewy, and a sweet chocolate kiss nestled in the center. Baked to golden perfection, they are a delightful treat that captures a homemade essence.",
      instructions:
        "1. Preheat oven to 350 degrees F. Cream peanut butter and sugar until light and fluffy. Beat in egg and vanilla.\n2. Roll into 1 ¼ in balls. Place 2in apart on ungreased baking sheets. Bake until tops are slightly cracked, 10 to 12 minutes. Immediately press 1 chocolate kiss into the center of each cookie. Cool for 5 minutes before removing from pans to wire racks.",
      imageUrl:
        "https://static01.nyt.com/images/2015/11/24/dining/24COOKING-PEANUTBUTTERBLOSSOMS2/24COOKING-PEANUTBUTTERBLOSSOMS2-superJumbo.jpg",
      image2Url:
        "https://www.allrecipes.com/thmb/g6PeY-B1CpW6nnMfenC-SUIgF7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9920-peanut-blossoms-VAT-hero-4x3-e92f5e03faf54c99941806825da4e143.jpg",
      image3Url:
        "https://chocolatewithgrace.com/wp-content/uploads/2017/11/Peanut-Blossom-Cookies-3-1-of-1.jpg",
      tags: ["dessert", "easy"],
      ingredients: [
        { name: "peanut butter", measurement: "240g" },
        { name: "sugar", measurement: "200g" },
        { name: "large egg", measurement: "1" },
        { name: "vanilla extract", measurement: "5g" },
        { name: "milk chocolate kisses", measurement: "30" },
      ],
    },
    {
      name: "Pecan Caramel Candies",
      details: "A salty, sweet and nutty indulgence",
      desc: "Pecan caramel candies are a harmonious blend of sweet and salty with a pretzel base, Rolo caramel center and toasted pecan topping. It’s a bite-sized delight that’s perfect for any occasion or a quick, satisfying treat.",
      instructions:
        "1. Preheat oven to 250 degrees F. Place pretzels 1in apart on foil-lined baking sheets. Top each with a Rolo candy.\n2. Bake 3-4 minutes or until candies are softened. Immediately top with pecans, pressing to spread candy into the pretzel. Let stand until set.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pecan-Caramel-Candies_EXPS_SDDJ18_24166_B08_03_3b-6.jpg",
      image2Url:
        "https://houseofnasheats.com/wp-content/uploads/2021/12/Chocolate-Pecan-Turtle-Clusters-19.jpg",
      image3Url:
        "https://www.allrecipes.com/thmb/4n6Dbbbk8Xi5A21H_HnjNfXhQUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2782425-Pecan-Carmel-Clusters-CoOkInGnUt-4x3-1-aa6888b0e4944958a578a8715644cba0.jpg",
      tags: ["dessert", "easy"],
      ingredients: [
        { name: "pretzels", measurement: "54" },
        { name: "Rolo candies", measurement: "54" },
        { name: "Pecan halves", measurement: "54" },
      ],
    },
    {
      name: "Mango Sorbet",
      details:
        "A tropical burst of frozen bliss that transports you to paradise.",
      desc: "Mango sorbet is a luscious and refreshing tropical delight, perfect for indulging in the sweet, sun-kissed flavors of ripe mangoes. The combination of slightly thawed mango chunks, passion fruit juice, and a touch of sugar results in a velvety, naturally sweet sorbet that’s pure fruit and pure pleasure. With each scoop, you’ll experience a taste of the tropics, making it the ideal treat to cool down on a warm day or enjoy as a guilt-free dessert.",
      instructions:
        "1. Place all ingredients in a blender; cover and process until smooth. Serve immediately. If desired, for a firmer texture, cover and freeze for at least 3 hours.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2019/10/Quick-Mango-Passion-Fruit-Sorbet_EXPS_TOHFM20_238674_B09_20_3b-4.jpg?fit=700%2C1024",
      image2Url:
        "https://www.chelseasmessyapron.com/wp-content/uploads/2014/07/Mango-Sorbet-1.jpg",
      image3Url:
        "https://www.deliciousmagazine.co.uk/wp-content/uploads/2017/10/mango-sorbet.jpg",
      tags: ["dessert", "easy"],
      ingredients: [
        { name: "frozen mango chunks", measurement: "454g" },
        { name: "passion fruit juice", measurement: "120ml" },
        { name: "sugar", measurement: "25g" },
      ],
    },
    {
      name: "Chocolate Dipped Strawberry Meringue Roses",
      details: "A special rose for your special someone",
      desc: "Chocolate dipped strawberry meringue roses are an elegant blend of real freeze-dried strawberries and strawberry gelatin, forming delicate, rose-shaped meringues. These edible works of art are dipped in luscious bittersweet chocolate, creating a delightful treat that's a feast for the eyes and the taste buds. Perfect as a gift, dessert, or a sweet indulgence, they're sure to captivate anyone lucky enough to enjoy them.",
      instructions:
        "1. Place egg whites in a large bowl; let stand at room temperature for 30 minutes. Preheat the oven to 225 degrees F.\n2. Place sugar and strawberries in a food processor; process until powdery. Add gelatin; pulse to blend.\n3. Beat egg whites on medium speed until foamy, adding vanilla if desired. Gradually add the gelatin mixture, one tablespoon at a time, beating on high after each addition until the sugar is dissolved. Continue beating until stiff glossy peaks form.\n4. Cut a small hole in the tip of a pastry bag; insert a #1M star tip. Transfer meringue to the bag. Pipe 2-inch roses 1 1/2 inches apart onto parchment-lined baking sheets.\n5. Bake until set and dry, 40 to 45 minutes. Turn off the oven; do not open the oven door. Leave meringues in the oven for 1 1/2 hours. Remove from the oven; cool completely on baking sheets.\n6. Remove meringues from paper. Dip bottoms into melted chocolate; allow excess to drip off. Place on waxed paper; let stand until set, about 45 minutes. Store in an airtight container at room temperature.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Chocolate-Dipped-Strawberry-Meringue-Roses_exps157081_SD143204D12_04_1bC_RMS-12.jpg?fit=700%2C1024",
      image2Url:
        "https://lh5.ggpht.com/_wuO2B9fNK30/TUxqjKFAk9I/AAAAAAAAAn8/jHkW7shHhmQ/249edited_thumb%5B4%5D.jpg?imgmax=800",
      image3Url:
        "https://www.culinary-cool.com/wp-content/uploads/2021/02/Chocolate-Strawberry-Meringues-4-500x375.jpg",
      tags: ["dessert"],
      ingredients: [
        { name: "egg whites", measurement: "90g" },
        { name: "sugar", measurement: "50g" },
        { name: "freeze-dried strawberries", measurement: "25g" },
        { name: "strawberry gelatin", measurement: "85g" },
        { name: "vanilla extract", measurement: "2.5g" },
        { name: "60% Cacao Chocolate Chips", measurement: "180g" },
      ],
    },
    {
      name: "Grilled Honey Balsamic Glazed Fruit",
      details: "A masterful balance of flavors",
      desc: "Grilled Honey Balsamic Glazed Fruit transforms fresh peaches or nectarines into a sweet and tangy masterpiece. With a glaze of balsamic vinegar and honey, the fruit is grilled to perfection, creating a sensational flavor burst. Enjoy it as a delightful dessert or pair it with vanilla ice cream for a refreshingly simple yet unforgettable experience.",
      instructions:
        "1. In a small saucepan, combine vinegar, honey, and salt; cook and stir over low heat until blended, 2 to 3 minutes. Reserve 1/3 cup mixture for brushing Peaches.\n2. Bring the remaining mixture to a boil over medium heat; cook and stir just until the mixture begins to thicken slightly, do not overcook, 4 to 6 minutes. Remove from heat.\n3. Brush Peaches with some of the reserved balsamic mixture. Grill, covered, on a greased rack over medium heat until caramelized, brushing occasionally with the remaining reserved balsamic mixture, 6 to 8 minutes on each side. Serve with glaze and, if desired, ice cream.",
      imageUrl:
        "https://hallmark.brightspotcdn.com/dims4/default/abab0fb/2147483647/strip/true/crop/2500x1404+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fd8%2F39%2F0cb9c4837d5dae979a1fdd47f3a0%2Fhome-family-grilled-honey-balsamic-glazed-fruit-and-ice-cream.jpg",
      image2Url:
        "https://whiteonricecouple.com/recipe/images/Grilled-Peaches-Recipe-3.jpg",
      image3Url:
        "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2OGMDDGYJII6XDEHVVXSPEMMPA.jpg",
      tags: ["dessert", "easy"],
      ingredients: [
        { name: "balsamic vinegar", measurement: "120ml" },
        { name: "honey", measurement: "120ml" },
        { name: "salt", measurement: "1g" },
        { name: "halved and pitted peaches", measurement: "6" },
      ],
    },
    {
      name: "Cherry Chocolate Pudgy Pie",
      details: "A new type of campfire treat",
      desc: "Cherry chocolate pudgy pie is a campfire treat featuring cherry pie filling, semi-sweet chocolate chips, and chopped almonds tucked between slices of white bread. Toasted over an open flame, it turns into a warm and gooey delight that's perfect for satisfying your sweet cravings while camping or by the fire.",
      instructions:
        "1. Place one slice of bread in a greased sandwich iron. Spread with pie filling; top with almonds, chocolate chips, and the remaining bread slice. Close the iron.\n2. Cook over a hot campfire until golden brown and heated through, 3 to 6 minutes, turning occasionally.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Chocolate-Pudgy-Pie_EXPS_BDSMZ17_112477_D03_02_2b-4.jpg?fit=700%2C1024",
      image2Url:
        "https://www.cookiedoughandovenmitt.com/wp-content/uploads/2018/08/cherry-mountain-pie-1-photo-500x500.jpg",
      image3Url:
        "https://contenthub.kraftheinz.com/api/public/content/3b92cfa16cce4064ad014c4ab700e3d2?v=5292ecaa",
      tags: ["easy", "dessert"],
      ingredients: [
        { name: "cherry pie filling", measurement: "45g" },
        { name: "chopped almonds", measurement: "10g" },
        { name: "semisweet chocolate chips", measurement: "14g" },
        { name: "white bread", measurement: "2 slices" },
      ],
    },
    {
      name: "Mocha Pecan Ice Cream Bonbons",
      details: "Pecans and mocha - why would you want anything else?",
      desc: "Mocha pecan ice cream bonbons are a delightful treat that marries the best of sweet and savory. It all starts with rich vanilla ice cream, which is taken to the next level with the addition of toasted pecans and a hint of mocha from coffee granules. These flavorful morsels are then dipped in a luxurious semi-sweet chocolate coating. The result is a bite-size delight that's both indulgent and satisfying. Whether enjoyed on a warm summer day or during a cozy winter evening, these bonbons are the perfect fusion of flavors and textures, offering a little piece of joy in every bite.",
      instructions:
        "1. Line a 15 by 10 by 1-inch baking pan with waxed paper; Place in a freezer to keep cold. Place pecans in a shallow bowl.\n2. Working quickly, scoop ice cream with a melon baller to make three-quarter inch balls; Immediately roll in pecans. Place on a prepared pan; Freeze for at least one hour or until firm.\n3. In a microwave, melt chocolate chips and butter; Stir until smooth. Stir in coffee granules until dissolved; Cool completely.\n4. Working quickly and in batches, use a toothpick to dip ice cream balls into chocolate mixture; Allow excess to drip off. Place on a waxed paper-lined pan; Remove the toothpick. Return to the freezer; Freeze until set. For longer storage, transfer bonbons to a covered freezer container and return to the freezer.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Mocha-Pecan-Ice-Cream-Bonbons_exps4803_NBC143387B01_14_6b_RMS.jpg?fit=700%2C1024",
      image2Url:
        "https://www.letseatcake.com/wp-content/uploads/2017/07/Ice-Cream-Bon-Bons-4-600x498.jpg",
      image3Url:
        "https://dinnerthendessert.com/wp-content/uploads/2022/02/Ice-Cream-Bon-Bons-7-1x1-1.jpg",
      tags: ["dessert"],
      ingredients: [
        { name: "cubed butter", measurement: "113g" },
        { name: "Instant coffee granules", measurement: "10g" },
        { name: "Chopped toasted pecans", measurement: "220g" },
        { name: "Vanilla ice cream", measurement: "946ml" },
        { name: "Semi-sweet chocolate chips", measurement: "360g" },
      ],
    },
    {
      name: "Caramelized Baked Custards",
      details: "Kind of like a crème brulee but with another name",
      desc: "Caramelized baked custards are a luxurious dessert that's both silky and indulgent. This exquisite treat is made with a base of heavy whipping cream and a touch of Irish cream liqueur, creating a decadent backdrop for the main event sweet, caramelized goodness. As they bake, the custard transforms into a velvety, creamy masterpiece that's sure to captivate your senses. The finishing touch is a dash of vanilla extract, enhancing the overall flavor profile. Whether enjoyed as a stand-alone dessert or as the grand finale to a special meal, these custards are a sumptuous experience that embodies the essence of sweet luxury.",
      instructions:
        "1. Preheat oven to 325 degrees. In a saucepan, heat cream and liqueur until bubbles form around sides of the pan; Remove from heat. In a large bowl, whisk eggs, egg yolks, and three-quarter cup sugar until blended but not foamy. Slowly stir in the hot cream mixture. Stir in vanilla.\n2. Place 6 6oz broiler-safe ramekins in a baking pan large enough to hold them without touching. Pour cream mixture into ramekins. Place the pan on the oven rack; Add very hot water to the pan within half an inch of the tops of ramekins.\n3. Bake 20 to 25 minutes or until a knife inserted in the center comes out clean; Centers will still be soft. Immediately remove ramekins from the water bath to a wire rack; cool for 10 minutes, refrigerate until cold.\n4. To caramelize the topping with a kitchen torch, sprinkle custards evenly with the remaining sugar. Hold the torch flame about two inches above the custard surface and rotate it slowly until the sugar is evenly caramelized. Serve immediately or refrigerate for up to one hour.\n5. To caramelize the topping in a broiler, place ramekins on a baking sheet; Let them stand at room temperature for 15 minutes. Preheat the broiler. Sprinkle custards evenly with the remaining sugar. Broil 3-4 inches from the heat for 5 to 7 minutes or until the sugar is caramelized. Serve immediately or refrigerate for up to one hour.",
      imageUrl:
        "https://static01.nyt.com/images/2017/12/13/dining/15COOKING-CREME-BRULEE1/15COOKING-CREME-BRULEE1-mobileMasterAt3x-v2.jpg",
      image2Url:
        "https://sallysbakingaddiction.com/wp-content/uploads/2018/07/best-creme-brulee-recipe-4.jpg",
      image3Url:
        "https://www.allrecipes.com/thmb/URIYqea1Fkf0BiqnCspQ8riWvP0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19165-creme-brulee-DDMFS-4x3-87812f93c6bf43829e4f68dc598e7563.jpg",
      tags: ["dessert", "easy"],
      ingredients: [
        { name: "heavy whipping cream", measurement: "473g" },
        { name: "Irish cream liqueur", measurement: "59g" },
        { name: "Whole eggs", measurement: "137g" },
        { name: "Egg yolks", measurement: "82g" },
        { name: "Sugar", measurement: "180g" },
        { name: "Vanilla extract", measurement: "5g" },
      ],
    },
    {
      name: "Lemon Crisp Cookies",
      details: "Like biting into a crunchy lemon",
      desc: "Lemon crisp cookies are a delightful dessert that effortlessly combines the zesty and refreshing taste of lemons with a satisfying crunch. The recipe is incredibly easy, featuring a lemon cake mix for that burst of citrus flavor, along with melted butter, a lightly beaten egg, crisp rice cereal for the delightful crunch, and grated lemon zest to enhance the lemony aroma and taste. After mixing and shaping the dough, you'll enjoy the aroma of freshly baked cookies in no time. These cookies are perfect for any occasion, from afternoon tea to sweet treats for family and friends. Try them for a delightful taste of lemony, crispy bliss, and you won't be disappointed!",
      instructions:
        "1. Preheat the oven to 350 degrees. In a large bowl, combine all the ingredients. Shape into 1-inch balls. Place 2 inches apart on ungreased baking sheets.\n2. Bake for 10-12 minutes or until set. Cool for 1 minute; remove from the pan to a wire rack to cool completely.",
      imageUrl:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Lemon-Crisp-Cookies_exps8616_CMT2426390D09_07_3b_RMS.jpg?fit=700%2C1024",
      image2Url:
        "https://www.livewellbakeoften.com/wp-content/uploads/2020/07/Lemon-Cookies-7-500x500.jpg",
      image3Url:
        "https://www.cookingclassy.com/wp-content/uploads/2014/06/lemon-crinkle-cookies3+srgb..jpg",
      tags: ["dessert", "easy"],
      ingredients: [
        { name: "Lemon Cake Mix", measurement: "432g" },
        { name: "Crisp Rice Cereal", measurement: "30g" },
        { name: "Melted butter", measurement: "113g" },
        { name: "Beaten egg", measurement: "50g" },
        { name: "Lemon zest", measurement: "2g" },
      ],
    },
    {
      name: "Candied Almond Affogato",
      details: "A truly elegant dessert",
      desc: "The candied almond affogato is an elegant dessert that combines a symphony of flavors and textures. It begins with a generous scoop of creamy vanilla gelato, which slowly melts as it mingles with a rich, freshly brewed espresso or coarsely ground coffee. The real twist comes from the crunchy candied almonds, adding a delightful contrast of sweetness and nuttiness. A touch of amaretto liqueur enhances the almond notes, while crushed amaretti cookies provide a satisfying crunch. This dessert is a captivating blend of warm and cold, sweet and bitter, and smooth and crunchy, creating a sensory experience that will leave you craving another bite. It's a sophisticated treat that's both simple to prepare and guaranteed to impress.",
      instructions:
        "1. Line a small baking sheet with parchment paper, and set aside. Cook almonds and sugar in a medium-sized nonstick skillet over medium-high, stirring constantly using a heat-proof rubber spatula, until sugar melts, browns, and coats almonds, 5 to 6 minutes. Scrape almond mixture onto the prepared baking sheet, and quickly spread into an even layer. Let cool completely, about 15 minutes. Break candied almonds into small shards, and set aside until ready to use.\n2. Place coffee in a miniature French press coffee maker; set aside. Pour water into a kettle and bring to a boil over high. Remove the kettle from heat, and let cool 30 seconds. Pour the remaining water over coffee in the French press. Place the lid on the French press but do not plunge. Let steep for 4 minutes. Press down on the plunger using steady and even pressure.\n3. Divide gelato evenly among 4 chilled small shallow bowls or glasses. Slowly pour 3 tablespoons coffee and 1 ½ teaspoons amaretto over gelato in each bowl. Top evenly with crushed cookies and the desired amount of candied almonds. Serve immediately. Remaining candied almonds can be stored in an airtight container at room temperature for up to 2 weeks.",
      imageUrl:
        "https://www.foodandwine.com/thmb/3c9F_orac_iLt7eGWo440K8s3zI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/almond-affogato-FT-RECIPE1121-0dd7cafd1e8c496097adec7470a3a064.jpg",
      image2Url:
        "https://www.recipetineats.com/wp-content/uploads/2023/06/Affogato_0-SQ.jpg",
      image3Url:
        "https://www.recipetineats.com/wp-content/uploads/2023/06/Affogato-high-pour-shot.jpg",
      tags: ["dessert"],
      ingredients: [
        { name: "sliced almonds", measurement: "58g" },
        { name: "granulated sugar", measurement: "38g" },
        { name: "pre-ground dark roast coffee beans", measurement: "24g" },
        {
          name: "fresh coarsely ground dark roast coffee beans",
          measurement: "24g",
        },
        { name: "water", measurement: "240g" },
        { name: "vanilla gelato", measurement: "473g" },
        { name: "amaretto", measurement: "30g" },
        { name: "amaretti cookies", measurement: "8" },
      ],
    },
    {
      name: "Potato Gnocchi with Butter and Cheese",
      details:
        "Like little pillows in your mouth you won't want to stop eating them",
      desc: "This potato gnocchi with butter and cheese is a comforting Italian classic. Light and fluffy potato dumplings, enriched with egg yolks and flour, are boiled to perfection and tossed in a creamy sauce of unsalted butter. The dish is elevated with the addition of freshly grated Parmigiano-Reggiano cheese and a hint of nutmeg, creating a harmonious balance of flavors. It's a heartwarming and indulgent dish that captures the essence of Italian comfort food.",
      instructions:
        "1. Gather the ingredients\n2. Preheat the oven to 350 degrees. Place potatoes directly on the middle rack in the preheated oven. Bake until very tender when pierced with a paring knife, one hour and 15 minutes to one hour and 30 minutes.\n3. Carefully cut potatoes in half lengthwise; Let's stand until cool enough to handle, about 20 minutes\n4. Using a pairing knife, peel potatoes and discard skins.\n5. Press potatoes through a potato ricer\n6. Then place onto a clean work surface; Spread in an even layer. Let cool until almost room temperature, about 8 minutes\n7. Drizzle egg yolk evenly over potatoes\n8. Sprinkle salt and ½ cup of the flour evenly over potatoes and egg yolk\n9. Using a bench scraper or a rubber spatula, very gently fold mixture over onto itself several times, gradually folding in the remaining ½ cup flour just until all the flour is incorporated, and the dough comes together in a mass. Do not knead or overwork.\n10. Line a baking sheet with parchment paper and lightly dust with flour; set aside. Clean the work surface and lightly dust with flour. Divide the dough evenly into 4 pieces, about 5 ¼ ounces each\n11. Roll 1 dough piece into a 3/4-inch thick rope, about 9 inches long\n12. Cut the rope crosswise into ¾-inch long gnocchi pieces\n13. Roll each piece against tines of a fork to make ridges; Transfer to the prepared baking sheet. Repeat the process with the remaining 3 dough pieces.\n14. Bring salted water to a boil in a four-quart stockpot over high. Add half of the gnocchi to the boiling water and gently stir once. Cook until gnocchi rises to the surface, about two minutes, and then gently boil one more minute, reducing heat as necessary to maintain a gentle boil.\n15. While the gnocchi cooks, melt three tablespoons of the butter in a large skillet over medium-high. Using a slotted spoon, transfer the cooked gnocchi to the skillet; Add 3 tablespoons of gnocchi cooking liquid.\n16. Cook, stirring constantly, until a creamy and loose butter sauce forms and coats the gnocchi, about one minute. Repeat with the remaining gnocchi and three tablespoons of butter. Sprinkle each serving with grated cheese and nutmeg. Serve immediately.\n17. Remove from the heat and season with salt and pepper to taste; Place in two serving bowls.",
      imageUrl:
        "https://www.allrecipes.com/thmb/livq9te5Dql48O2KSMIzQQ37wWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/164888-gnocchi-with-sage-butter-sauce-ddmfs-3x4-eed41f5a4e1c49c581292c7f8d221728.jpg",
      image2Url:
        "https://cravinghomecooked.com/wp-content/uploads/2020/02/garlic-parmesan-butter-gnocchi-1-14.jpg",
      image3Url:
        "https://therecipecritic.com/wp-content/uploads/2021/03/friedgnocchi2.jpg",
      tags: ["italian"],
      ingredients: [
        { name: "baking potatoes", measurement: "2lbs" },
        { name: "egg yolks", measurement: "36g" },
        { name: "kosher salt", measurement: "5g" },
        { name: "all-purpose flour", measurement: "120g" },
        { name: "unsalted butter", measurement: "84g" },
        { name: "freshly ground black pepper", measurement: "3g" },
        { name: "freshly grated Parmigiano-Reggiano", measurement: "10g" },
        { name: "freshly grated nutmeg", measurement: "1g" },
      ],
    },
    {
      name: "Basil Pesto",
      details: "An incredibly versatile spread",
      desc: "This basil pesto recipe combines the fresh essence of basil with the nutty richness of pine nuts and Parmigiano-Reggiano cheese, bound together with smooth extra-virgin olive oil. Aromatic garlic and a touch of kosher salt add depth to this versatile and flavorful sauce, perfect for enhancing pasta, sandwiches, or as a delectable dip. It's a celebration of the vibrant flavors of the Mediterranean, condensed into a single jar of homemade goodness.",
      instructions:
        "1. Toast pine nuts in a small skillet over medium, stirring frequently, until golden, 5 minutes. Transfer nuts to the bowl of a food processor to cool.\n2. Pulse nuts with basil, garlic, and cheese until blended, scraping down the sides of the bowl as needed, 5 pulses. With the machine running, slowly pour in olive oil, and puree until almost smooth. Season with salt and store in an airtight container in the refrigerator for up to five days.",
      imageUrl:
        "https://sallysbakingaddiction.com/wp-content/uploads/2020/07/pesto.jpg",
      image2Url:
        "https://theviewfromgreatisland.com/wp-content/uploads/2022/08/basil-pesto-Genovese-3132-August-28-2022-2.jpg",
      image3Url:
        "https://www.wholesomeyum.com/wp-content/uploads/2019/05/wholesomeyum-Basil-Pesto-Recipe-4.jpg",
      tags: ["easy", "italian"],
      ingredients: [
        { name: "pine nuts", measurement: "20g" },
        { name: "basil leaves", measurement: "60g" },
        { name: "garlic cloves", measurement: "6g" },
        { name: "Parmigiano-Reggiano", measurement: "50g" },
        { name: "olive oil", measurement: "120g" },
        { name: "kosher salt", measurement: "6g" },
      ],
    },
    {
      name: "Florentine Butter Chicken",
      details: "The name speaks for itself",
      desc: "Florentine butter chicken combines tender, pan-seared chicken breasts with a luscious blend of butter and zesty lemon juice. Coated in flour, egg, and seasoning, the chicken is sautéed in a mixture of cold salted butter and olive oil until golden. The result is a delightful balance of savory and citrusy flavors that make for a deliciously indulgent meal.",
      instructions:
        "1. Place beaten egg in a shallow bowl or pie plate. Spread flour in a separate shallow bowl or pie plate. Season chicken with salt and pepper. Working with 1 breast at a time, dip chicken in egg, letting any excess drip back into the bowl, then dredge in flour, shaking off excess.\n2. Melt ¼ cup of butter with oil in a 10-inch stainless steel skillet over medium-high and cook, swirling occasionally until milk solids begin to sink to the bottom of the skillet and start to brown, 4-5 mins. Add chicken, rounded sides down, and cook, swirling the skillet occasionally, until golden and add the remaining 6 tablespoons of butter. Tilt the skillet toward you so butter pools and cook, basting the chicken often, until the chicken is just cooked through and golden brown, 4-5 mins.\n3. Remove from heat, and carefully pour in lemon juice. Serve immediately.",
      imageUrl:
        "https://www.foodandwine.com/thmb/hnX1o7f0bk3YDirPvL7WfWWX6aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/florentine-butter-chicken-ft-recipe0919-3fef0bddd6614a70b2fe450c11298acb.jpg",
      image2Url:
        "https://www.halfbakedharvest.com/wp-content/uploads/2020/06/20-Minute-Florentine-Butter-Chicken-with-Burst-Cherry-Tomatoes-4-700x1050.jpg",
      image3Url:
        "https://i0.wp.com/kellyscleankitchen.com/wp-content/uploads/2023/06/Butter-Chicken-3.jpg?fit=1000%2C664&ssl=1",
      tags: ["italian"],
      ingredients: [
        { name: "beaten egg", measurement: "50g" },
        { name: "all-purpose flour", measurement: "30g" },
        {
          name: "boneless, skinless chicken breast, lightly pounded to ¾-inch thickness",
          measurement: "198g",
        },
        { name: "kosher salt", measurement: "6g" },
        { name: "ground pepper", measurement: "2g" },
        { name: "cubed butter", measurement: "142g" },
        { name: "olive oil", measurement: "36g" },
        { name: "lemon juice", measurement: "60g" },
      ],
    },
    {
      name: "Beef Ragu",
      details: "Let grandma know, there’s a new Ragu in town",
      desc: "This beef ragu is a robust and comforting Italian classic. Succulent chunks of chuck roast are seared and then simmered with onions, garlic, and a medley of spices, creating a rich, flavorful sauce. Enhanced with tomato paste, red wine, and balsamic vinegar, the dish is slow-cooked to tender perfection, producing a hearty ragu that pairs beautifully with various starches. It's a timeless recipe that offers a warm and satisfying dining experience.",
      instructions:
        "1. In a large stock pot over medium heat, heat 1 tablespoon oil. Season chuck roast with salt and pepper and sear, in batches if needed, until browned on all sides, 10 minutes. Remove into a large bowl.\n2. Heat remaining oil, still over medium heat. Add onion and cook until soft, 6 minutes. Add garlic, fennel seeds, and red pepper flakes and cook until fragrant, 1 minute more.\n3. Add tomato paste and cook until it is darkened in color, 1 to 2 minutes more. Deglaze pot with wine, scraping any brown bits up at the bottom of your pot with a wooden spoon.\n4. Add whole peeled tomatoes, water, thyme, bay leaf, balsamic vinegar, and seared pot roast and season with salt and pepper. Stir to combine and reduce heat to low. Cover and simmer, stirring occasionally, until meat easily shreds, 2 to 2 1/2 hours. Use a wooden spoon to break up tomatoes and meat, and remove bay leaf. Serve over your favorite pasta or polenta. Top with Parmesan and parsley before serving.",
      imageUrl:
        "https://www.thecookierookie.com/wp-content/uploads/2022/10/Crockpot-Beef-Ragu-3.jpg",
      image2Url:
        "https://www.allrecipes.com/thmb/90oy1fgwpNe6nHJWoEkb4glYLuY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beef-ragu-mfs-4x3-21-ffa2731b8afd4758a8021e023edacbb2.jpg",
      image3Url:
        "https://www.theburntbuttertable.com/wp-content/uploads/2022/12/beef-ragu-recipe-4.jpg",
      tags: ["italian"],
      ingredients: [
        { name: "olive oil", measurement: "30g" },
        { name: "chuck roast cut into 2in cubes", measurement: "907g" },
        { name: "kosher salt", measurement: "5g" },
        { name: "ground black pepper", measurement: "5g" },
        { name: "chopped Spanish onion", measurement: "115g" },
        { name: "thinly sliced garlic cloves", measurement: "15g" },
        { name: "fennel seeds", measurement: "1g" },
        { name: "red pepper flakes", measurement: "1g" },
        { name: "tomato paste", measurement: "30g" },
        { name: "red wine", measurement: "60g" },
        { name: "whole peeled tomatoes", measurement: "794g" },
        { name: "water", measurement: "60ml" },
        { name: "thyme", measurement: "3 sprigs" },
        { name: "bay leaf", measurement: "1" },
        { name: "balsamic vinegar", measurement: "10g" },
      ],
    },
    {
      name: "Skillet Eggplant Parm",
      details: "It’s vegetarian but it’s not light",
      desc: "Skillet eggplant parm is a delightful Italian classic. It features golden-seared eggplant slices, layered with marinara sauce, mozzarella, Parmesan, fresh basil, and crispy panko bread crumbs, creating a satisfying medley of flavors and textures. Topped with fresh basil, it's a simple yet delicious twist on the traditional eggplant Parmesan, perfect for any occasion.",
      instructions:
        "1. Preheat the oven to 400°. Heat ¼ cup oil in a large, oven-safe skillet (about 12 inches) over medium-high.\n2. Working in three batches, add eggplant in a single layer and season with salt and pepper. Cook until golden brown on both sides, flipping halfway through, about 4 minutes per side (you may need to adjust the heat between medium and medium-high as you go). Transfer to a plate. Repeat with remaining eggplant, using ¼ cup oil per batch as needed. Remove skillet from heat.\n3. Add 1 cup marinara to the skillet, scraping up any bits stuck to the bottom. Arrange half the eggplant in a single layer and top with half the mozzarella and ¼ cup Parmesan. Top with remaining eggplant, dollop with remaining ½ cup marinara, and top with remaining ½ cup mozzarella, ¼ cup Parmesan, and basil leaves.\n4. In a small bowl, mix panko and remaining ¼ cup Parmesan with remaining 2 tablespoons of oil. Season with salt and pepper and over the top of the skillet. Bake until bubbling and breadcrumbs are golden brown, 10 to 12 minutes. Serve hot with more fresh basil leaves, if you like.",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/skillet-eggplant-parm1-1650313891.jpg?crop=0.798x:0.712xh;0.0816xw,0.179xh&resize=980:*",
      image2Url:
        "https://dishingouthealth.com/wp-content/uploads/2021/10/SkilletEggplantParmesan_Square.jpg",
      image3Url:
        "https://dishingouthealth.com/wp-content/uploads/2021/10/SkilletEggplantParmesan_Styled1.jpg",
      tags: ["italian"],
      ingredients: [
        { name: "olive oil", measurement: "177g" },
        { name: "eggplants", measurement: "2" },
        { name: "kosher salt", measurement: "5g" },
        { name: "ground black pepper", measurement: "5g" },
        { name: "marinara sauce", measurement: "360g" },
        { name: "shredded mozzarella", measurement: "170g" },
        { name: "parmesan", measurement: "85g" },
        { name: "basil leaves for garnish", measurement: "10g" },
        { name: "panko bread crumbs", measurement: "75g" },
      ],
    },
    {
      name: "Italian Meatballs",
      details: "You will never want another meatball again",
      desc: "Italian meatballs are a delightful combination of ground beef, pork, and Italian sausage, enriched with breadcrumbs soaked in milk, onions, garlic, eggs, Parmesan cheese, and parsley. Seasoned with care, seared to perfection, and simmered in marinara sauce, these savory meatballs are a satisfying Italian classic. Top with extra Parmesan and parsley for a flavorful, family-favorite meal.",
      instructions:
        "1. In a small bowl, mix breadcrumbs and milk until combined. Let sit 15 minutes.\n2. In a large bowl, using your hands, combine beef, pork, sausage, onion, and garlic; season with salt and pepper. Gently stir in bread crumb mixture, eggs, Parmesan, and parsley until just combined. Form beef mixture into 1 1/2-inch balls.\n3. In a large, high-sided skillet over medium heat, heat oil. Working in batches, sear meatballs on all sides to develop a crust, about 2 minutes per side. Transfer to a large bowl or plate.\n4. In the same skillet over medium-low heat, bring sauce to a simmer, then return meatballs to the skillet. Cover and simmer until meatballs are cooked through, about 8 minutes more.\n5. Top meatballs with more Parmesan and parsley.",
      imageUrl:
        "https://familystylefood.com/wp-content/uploads/2020/06/meatballs-3.jpg",
      image2Url:
        "https://www.simplyrecipes.com/thmb/kO2yxG-lT4gNjwLAREAbrspEsgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__italian-meatballs-horiz-c-1800-e83b24e913364fd6b867805335961d65.jpg",
      image3Url: "",
      tags: ["italian"],
      ingredients: [
        { name: "panko breadcrumbs", measurement: "70g" },
        { name: "whole milk", measurement: "120g" },
        { name: "ground beef", measurement: "454g" },
        { name: "ground pork", measurement: "227g" },
        { name: "Italian sausage casing removed", measurement: "227g" },
        { name: "Chopped Spanish onion", measurement: "115g" },
        { name: "Minced garlic", measurement: "9g" },
        { name: "Salt", measurement: "to taste" },
        { name: "Pepper", measurement: "to taste" },
        { name: "Beaten eggs", measurement: "2" },
        { name: "Parmesan", measurement: "100g" },
        { name: "Chopped parsley", measurement: "10g" },
        { name: "Olive oil", measurement: "30g" },
        { name: "Marinara sauce", measurement: "907g" },
      ],
    },
    {
      name: "Burrata Salad",
      details:
        "Join the salad shindig and let your taste buds dance with this burrata beauty",
      desc: "Burrata salad is a delicious showcase of fresh tomatoes, adorned with shallots, seasoned with sea salt, black pepper, and drizzled with olive oil and red wine vinegar. Topped with creamy burrata, panko crumbs, basil, and chives, it's a delightful and elegant dish, perfect for summer.",
      instructions:
        "1. On a rimmed baking sheet, toss tomatoes and shallot; season with 1 teaspoon salt and 1 teaspoon pepper. Drizzle oil and vinegar over. Let sit until tomatoes have released their liquid and shallots are softened, about 30 minutes.\n2. In a small skillet over low heat, toast panko, stirring occasionally, until golden brown, about 2 minutes. Transfer to a small bowl.\n3. Layer tomatoes on a large platter. Spoon shallot and juices over the top. Sprinkle with panko. Arrange burrata in the center of tomatoes and crack open with your hands. Sprinkle with basil, chives, salt, and pepper. Serve with bread alongside.",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/burrata-salad3-1654284047.jpg?crop=1.00xw:0.667xh;0,0.200xh&resize=768:*",
      image2Url:
        "https://natashaskitchen.com/wp-content/uploads/2021/08/Burrata-Salad-3-1-728x1092.jpg",
      image3Url:
        "https://cdn.loveandlemons.com/wp-content/uploads/2019/07/burrata-recipe.jpg",
      tags: ["italian", "easy"],
      ingredients: [
        { name: "sliced heirloom tomatoes", measurement: "1361g" },
        { name: "chopped shallot", measurement: "80g" },
        { name: "flaky sea salt", measurement: "to taste" },
        { name: "ground black pepper", measurement: "to taste" },
        { name: "olive oil", measurement: "28g" },
        { name: "red wine vinegar", measurement: "30g" },
        { name: "panko breadcrumbs", measurement: "40g" },
        { name: "burrata balls drained and room temp", measurement: "226g" },
        { name: "chopped basil", measurement: "4g" },
        { name: "sliced chives", measurement: "4g" },
      ],
    },
    {
      name: "Spaghetti Carbonara",
      details: "Like a cozy hug from grandma",
      desc: "Spaghetti carbonara is a quintessential Italian pasta dish, combining crispy pancetta, al dente spaghetti, and a creamy sauce made from egg yolks, cheese, and a generous dash of black pepper. It's a simple yet indulgent recipe that's a flavorful taste of Italy's culinary tradition.",
      instructions:
        "1. In a medium skillet over medium-low heat, cook pancetta, stirring occasionally, until golden brown and crispy, 20 to 25 minutes. Transfer pancetta to a paper towel-lined plate.\n2. Meanwhile, in a large pot, combine salt and 10 cups of water and bring to a boil. Cook spaghetti, stirring occasionally, until al dente, 8 to 10 minutes; reserve 1/2 cup pasta water.\n3. While pasta cooks, in a large heatproof bowl, whisk egg yolks, egg, and cheese until just combined.\n4. Immediately transfer spaghetti to egg mixture. Add pancetta and 1/4 cup pasta water and stir, adding 2 to 4 tablespoons more pasta water if the sauce seems too thick, until cheese is melted, and sauce is smooth; season with pepper.",
      imageUrl:
        "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457.jpg",
      image2Url:
        "https://www.spendwithpennies.com/wp-content/uploads/2023/04/1200-Spaghetti-Carbonara-2-SpendWithPennies.jpg",
      image3Url:
        "https://www.recipetineats.com/wp-content/uploads/2023/01/Carbonara_6a.jpg?w=500&h=375&crop=1",
      tags: ["italian", "easy"],
      ingredients: [
        { name: "pancetta cut in lardons", measurement: "340g" },
        { name: "kosher salt", measurement: "18g" },
        { name: "spaghetti", measurement: "1lb" },
        { name: "egg yolks", measurement: "93g" },
        { name: "egg", measurement: "1" },
        { name: "grated pecorino Romano", measurement: "113g" },
        { name: "ground black pepper", measurement: "to taste" },
      ],
    },
    {
      name: "Chicken Alfredo",
      details:
        "Who needs a magic wand when you can have a fork and a creamy pasta?",
      desc: "Chicken alfredo is a creamy Italian favorite, featuring sautéed chicken breasts, fettuccine, and a luxurious sauce made from chicken broth, milk, Parmesan, and cream. It's an easy yet indulgent dish, sure to satisfy your comfort food cravings.",
      instructions:
        "1. In a large skillet over medium-high heat, heat oil. Add chicken; season with salt and pepper. Cook, turning occasionally, until golden brown and cooked through, about 8 minutes per side. Transfer to a cutting board. Let rest 10 minutes, then slice.\n2. In the same skillet over medium heat, combine broth, milk, and garlic; season with salt and pepper. Bring to a simmer. Add fettuccine and cook, tossing occasionally, until barely al dente, about 10 minutes.\n3. Stir in Parmesan and cream. Bring to a simmer and cook, stirring frequently, until sauce thickens and pasta is al dente, 2 to 3 minutes.\n4. Remove from heat and stir in chicken. Top with parsley.",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/delish-221130-perfect-chicken-alfredo-0689-eb-1670449996.jpg?crop=1.00xw:0.737xh;0,0.134xh&resize=768:*",
      image2Url:
        "https://hips.hearstapps.com/hmg-prod/images/chicken-alfredo-index-64ee1026c82a9.jpg?crop=0.9994472084024323xw:1xh;center,top&resize=1200:*",
      image3Url:
        "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4-768x1024.jpg",
      tags: ["italian", "easy"],
      ingredients: [
        { name: "olive oil", measurement: "30g" },
        { name: "boneless skinless chicken breast", measurement: "454g" },
        { name: "kosher salt", measurement: "to taste" },
        { name: "ground black pepper", measurement: "to taste" },
        { name: "low sodium chicken broth", measurement: "480g" },
        { name: "whole milk", measurement: "480g" },
        { name: "chopped garlic", measurement: "6g" },
        { name: "fettuccine", measurement: "227g" },
        { name: "parmesan", measurement: "85g" },
        { name: "heavy cream", measurement: "120g" },
        { name: "chopped parsley", measurement: "10g" },
      ],
    },
    {
      name: "Grilled Cheese",
      details: "Nostalgia in every bite",
      desc: "Grilled cheese is an American staple that has been around since 1920. It’s a hot sandwich made with buttered toast and originally filled with Yellow American cheese, but is today more commonly made with other varieties of cheeses or a combination of many.",
      instructions:
        "1. Butter the toast by spreading the butter on one side of each slice of bread.\n2. Heat a skillet on medium-low heat, approximately 275 degrees, immediately add 2 slices of bread with the butter side down.\n3. Add the cheese on one slice of the bread and then place the other side of the bread, buttered side out, on top of the cheese.\n4. Brown the toast by continuing to flip the sandwich from side to side until the cheese is melted; low heat is necessary.\n5. Cut diagonally and serve.",
      imageUrl:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese.jpg",
      image2Url:
        "https://hips.hearstapps.com/hmg-prod/images/grilled-cheese-horizontal-jpg-1522266016.jpg?crop=0.669xw:1.00xh;0.204xw,0&resize=1200:*",
      image3Url:
        "https://static01.nyt.com/images/2021/08/30/dining/as-grilled-cheese-sandwich-on-the-grill/as-grilled-cheese-sandwich-on-the-grill-videoSixteenByNineJumbo1600.jpg",
      tags: ["sandwich", "easy"],
      ingredients: [
        { name: "sliced white bread", measurement: "2" },
        { name: "butter", measurement: "to taste" },
        { name: "yellow American cheese", measurement: "2 to 3 slices" },
      ],
    },
    {
      name: "Banh Mi",
      details: "Flavors that will make you book a trip to Vietnam",
      desc: "Banh mi is a vibrant Vietnamese sandwich. It's filled with marinated chicken, fresh vegetables, and creamy mayo, all in a crusty baguette. A symphony of flavors and textures awaits!",
      instructions:
        "1. Mince the garlic.\n2. Peel the carrot and chop it into matchstick pieces.\n3. Peel and slice the cucumber into ribbons.\n4. Pick the cilantro leaves off the stems.\n5. Slice the green chilies.\n6. Mix the sugar, rice wine vinegar, and salt with the hot water until the sugar and salt have dissolved.\n7. Pour the mixture over the carrots and let sit to pickle for 1 hour.\n8. Chop the chicken thigh meat into bite-sized pieces and place them in a large bowl.\n9. Mix the minced garlic, sesame oil, honey, hoisin sauce, and soy sauce, and pour it over the chicken.\n10. Refrigerate chicken for 15 mins.\n11. Heat a frying pan over medium-high and sauté the marinated chicken until cooked through, about 10 minutes.\n12. Drain the pickled carrots.\n13. Slice open the baguette and scoop out some of the soft bread inside to create more room for the sandwich fillings.\n14. Spread mayonnaise onto both sides of the baguette, then sprinkle it with Maggi Seasoning.\n15. Place the cooked chicken inside the bread followed by carrots, cucumber, cilantro, and chili peppers.\n16. Slice the bánh mì in half to make two servings and enjoy!",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/banh-mi-with-grilled-pork1-1663331872.jpg?crop=0.683xw:1.00xh;0.317xw,0&resize=1200:*",
      image2Url:
        "https://omnivorescookbook.com/wp-content/uploads/2020/03/1912_Leftover-Ham-Banh-Mi_550.jpg",
      image3Url:
        "https://www.allrecipes.com/thmb/HTJHVC_LYKmXaMF54dhe2gZQkNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332-cfb4d2e149e7476ab2a2b4030c543f1b.jpg",
      tags: ["sandwich"],
      ingredients: [
        { name: "garlic cloves", measurement: "6g" },
        { name: "carrot", measurement: "70g" },
        { name: "cucumber", measurement: "150g" },
        { name: "cilantro", measurement: "16g" },
        { name: "green chili peppers", measurement: "30g" },
        { name: "sugar", measurement: "50g" },
        { name: "rice wine vinegar", measurement: "30g" },
        { name: "salt", measurement: "18g" },
        { name: "hot water", measurement: "240g" },
        { name: "boneless skinless chicken thighs", measurement: "340g" },
        { name: "sesame oil", measurement: "22g" },
        { name: "honey", measurement: "21g" },
        { name: "hoisin sauce", measurement: "18g" },
        { name: "soy sauce", measurement: "18g" },
        { name: "baguette", measurement: "1" },
        { name: "mayonnaise", measurement: "45g" },
        { name: "Maggi seasoning", measurement: "5g" },
      ],
    },
    {
      name: "BLT",
      details: "An incredibly well-balanced sandwich",
      desc: "The classic BLT sandwich is a timeless favorite. Crispy bacon, ripe tomatoes, crisp lettuce, and creamy mayonnaise, perfectly balanced and satisfying.",
      instructions:
        "1. Wash lettuce, dry, and slice into thin shreds. Slice tomatoes into thick slices.\n2. Heat a large skillet over medium-high and add the bacon in a single layer. Cook, turning occasionally, until crisp. Place the bacon on a paper towel-lined plate and set aside.\n3. Place the bread in a toaster and toast until lightly browned, butter if desired.\n4. Spread each slice of bread with one tablespoon of mayonnaise.\n5. Top with bacon, tomatoes, and lettuce. Season with salt and pepper to taste.\n6. Cut in half and serve.",
      imageUrl:
        "https://ohsweetbasil.com/wp-content/uploads/How-to-make-the-best-BLT-recipe-4-scaled.jpg",
      image2Url:
        "https://www.jocooks.com/wp-content/uploads/2023/02/blt-sandwiches-1-13.jpg",
      image3Url:
        "https://www.spendwithpennies.com/wp-content/uploads/2020/04/1200-BLT-Sandwich-Recipe-105.jpg",
      tags: ["sandwich", "easy"],
      ingredients: [
        { name: "sliced white bread", measurement: "2" },
        { name: "thick-cut bacon", measurement: "170g" },
        { name: "sliced tomatoes", measurement: "454g" },
        { name: "lettuce leaves", measurement: "60g" },
        { name: "mayonnaise", measurement: "56g" },
        { name: "salt", measurement: "to taste" },
        { name: "pepper", measurement: "to taste" },
      ],
    },
    {
      name: "Lobster Roll",
      details: "Don’t be shellfish, try a lobster roll!",
      desc: "Lobster rolls, a cherished New England classic, trace their origins to the 19th century. These delightful treats consist of sweet lobster meat, a dollop of mayo, and seasonings tucked into a toasty bun. A symbol of summer, they're particularly popular in Maine, where lobster fishing thrives. Lobster rolls are often served at cozy seaside shacks, making them a coastal dining staple. With their succulent, buttery flavor, lobster rolls promise a taste of ocean bliss in every bite.",
      instructions:
        "1. Drain lobster and pat dry excess moisture off with a paper towel. If needed, cut lobster meat into smaller pieces.\n2. Add diced celery, mayo, lemon zest and juice, chives, a dash of hot sauce, and a little pinch of kosher salt and freshly cracked black pepper to a bowl and stir to combine. Set aside.\n3. Add butter to a skillet over medium heat. Add already cooked lobster meat to the pan and toss to coat in butter. Cook until meat is warmed, about two minutes. Strain meat from butter and set aside.\n4. Wipe the skillet clean and set it over medium heat. Add the remaining 2 tablespoons of butter and melt. Dip buns in melted butter on flat sides and toast until golden.\n5. Place a lettuce leaf on top of the bottom bun and then 1/4 of the lobster mixture. Top with a sprinkle of fresh chives and the top bun. Serve immediately.",
      imageUrl:
        "https://thissillygirlskitchen.com/wp-content/uploads/2021/07/set-1-Lobster-Rolls-11-2.jpg",
      image2Url:
        "https://www.dinneratthezoo.com/wp-content/uploads/2019/12/lobster-roll-5.jpg",
      image3Url:
        "https://www.butterbeready.com/wp-content/uploads/2023/07/DK6A2864.jpg",
      tags: ["sandwich", "easy"],
      ingredients: [
        { name: "cooked lobster meat", measurement: "454g" },
        { name: "mayonnaise", measurement: "45g" },
        { name: "diced celery", measurement: "40g" },
        { name: "lemon zest", measurement: "3g" },
        { name: "lemon juice", measurement: "15g" },
        { name: "chopped chives", measurement: "2g" },
        { name: "hot sauce", measurement: "to taste" },
        { name: "kosher salt", measurement: "2g" },
        { name: "ground black pepper", measurement: "2g" },
        { name: "butter", measurement: "56g" },
        { name: "New England Style Buns", measurement: "2" },
        { name: "lettuce leaves", measurement: "2" },
      ],
    },
    {
      name: "Cheeseburger",
      details: "The best burger you will ever eat.",
      desc: "The bacon cheeseburger is an iconic American creation, with its roots dating back to the 1920s. Today, it's a beloved classic, with Americans consuming an astounding 50 billion burgers annually, a significant portion of which are bacon cheeseburgers. This indulgent delight combines cheddar cheese, bacon, and a perfectly cooked patty, creating a mouthwatering experience that's hard to resist.",
      instructions:
        "1. Grill 2 beef patties on an oiled plancha or cast iron at 400-450 degrees Fahrenheit. For a more rare cook, we will only look to sear one side of the patties and then flip it once, add cheese, leave for 10 seconds and stack on top of each other and put to rest on a rack.\n2. While patties rest, we will slice brioche bun down the middle horizontally and toast the flat sides. When bread is toasted, add garlic aioli to the flat side of the bottom bun, add diced red onions, and then pickle slices.\n3. Mount rested patties over the pickle slices and top off with the top bun.",
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/2_MtVXCMozqToOhO5g3g6aPGm9U=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15951938/AuChevalBareBones.jpg",
      image2Url:
        "https://i0.wp.com/www.whiskiedwanderlust.com/wp-content/uploads/2015/10/Burger-Au-Cheval-Chicago.jpg?resize=400%2C600&ssl=1",
      image3Url:
        "https://thisurbankitchen.files.wordpress.com/2013/04/17293_4778695552458_1875488885_n.jpg",
      tags: ["sandwich"],
      ingredients: [
        { name: "brioche bun", measurement: "1pc" },
        { name: "beef burger patties", measurement: "2 4oz/ea" },
        { name: "garlic aioli", measurement: "6g" },
        { name: "diced red onion", measurement: "6g" },
        { name: "sliced pickles", measurement: "6g" },
        { name: "yellow American cheese slices", measurement: "2" },
        { name: "salt", measurement: "to taste" },
        { name: "pepper", measurement: "to taste" },
      ],
    },
    {
      name: "Fried Chicken Sandwich",
      details: "It’s a cluckin' delight!",
      desc: "The fried chicken sandwich is an iconic American fast-food classic, with a history deeply embedded in the culture of comfort food. It's widely popular, with billions of sandwiches consumed annually. Known for its crispy, well-seasoned chicken, fresh toppings, and a soft bun, this sandwich is a beloved favorite nationwide.",
      instructions:
        "1. Combine the pickle juice and water in a ziplock bag. Add the chicken breast halves and marinate for 30 minutes.\n2. Make the Chick-fil-A sauce by combining mayonnaise, Dijon mustard, yellow mustard, BBQ sauce, honey, garlic powder, paprika, and lemon juice in a bowl. Mix well and set aside.\n3. Next, in a large bowl mix the breading ingredients together: flour, powdered sugar, paprika, black pepper, chili powder, salt, and baking powder.\n4. In another bowl mix the milk, and egg.\n5. Add 2 to 3 cups of oil to a large saucepan and heat oil to about 350 degrees Fahrenheit.\n6. Dip the marinated chicken into the egg mixture, and then coat in the flour breading mixture. Now double dip by repeating this step and dipping that same chicken tender back into the egg mixture and then back into the flour again.\n7. Place chicken in hot oil and fry for three to four minutes on each side. Remove to a paper towel to dry.\n8. Toast the sandwich buns. Grab the sauce and spread it on both sides of the buns. Top with lettuce, cheese, and crispy chicken.",
      imageUrl:
        "https://grillinwithdad.com/wp-content/uploads/2022/12/Classic-Fried-Chicken-Sandwich-scaled.jpg",
      image2Url:
        "https://somethingaboutsandwiches.com/wp-content/uploads/2021/03/fried-chicken-sandwich.jpg",
      image3Url:
        "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/cfeptjrd/5f10c20f-5f19-42d2-b7d4-ea62d403ab1c.jpg",
      tags: ["sandwich"],
      ingredients: [
        { name: "halved chicken breast", measurement: "454g" },
        { name: "pickle juice", measurement: "120g" },
        { name: "water", measurement: "60g" },
        { name: "milk", measurement: "120g" },
        { name: "egg", measurement: "50g" },
        { name: "oil for frying", measurement: "500g" },
        { name: "brioche buns", measurement: "4" },
        {
          name: "pickle, lettuce, tomato, cheese slices",
          measurement: "to taste",
        },
        { name: "all-purpose flour", measurement: "120g" },
        { name: "powdered sugar", measurement: "30g" },
        { name: "paprika", measurement: "2g" },
        { name: "ground black pepper", measurement: "3g" },
        { name: "chili powder", measurement: "2g" },
        { name: "salt", measurement: "2g" },
        { name: "baking powder", measurement: "2g" },
        { name: "cayenne pepper powder", measurement: "3g" },
        { name: "mayonnaise", measurement: "115g" },
        { name: "Dijon mustard", measurement: "5g" },
        { name: "yellow mustard", measurement: "15g" },
        { name: "barbecue sauce", measurement: "30g" },
        { name: "honey", measurement: "30g" },
        { name: "garlic powder", measurement: "2g" },
        { name: "paprika", measurement: "2g" },
        { name: "lemon juice", measurement: "5g" },
      ],
    },
    {
      name: "Cuban Sandwich",
      details: "You don’t have to go to Miami for a Cuban anymore",
      desc: "The Cuban sandwich, also known as the 'Cubano,' is a culinary delight with a rich history. This iconic sandwich originates from Cuban immigrant communities in Florida, particularly in the city of Tampa. It has become a beloved staple in Cuban cuisine and American fast food alike. The classic Cuban sandwich features a perfect balance of flavors and textures, with tender roasted pork, smoked ham, Swiss cheese, pickles, and mustard, all sandwiched between crispy Cuban bread. Its unique blend of ingredients, pressed to perfection, creates a harmonious taste that continues to captivate palates across the United States.",
      instructions:
        "1. Preheat the oven to 375 degrees and line a rimmed baking sheet with foil.\n2. Place the pork tenderloin on the prepared baking sheet. In a small bowl, whisk the olive oil, orange juice, lime juice, garlic cloves, oregano, and cumin together and pour over the pork.\n3. Cook for 30 to 40 minutes or until the meat reaches an internal temperature of 145 degrees. Thinly slice the meat and set aside.\n4. Slice each loaf of bread in half lengthwise and then cut it into four equal parts.\n5. Begin layering the ingredients by adding half of the cheese to the bottom layer of the sandwich bread. Top with the smoked ham, sliced pork, and pickles. Place remaining cheese on top. Spread mustard on the top piece of bread and place on the sandwich.\n6. Melt the butter in a skillet or griddle over medium heat. Add the sandwiches and set a heavy skillet, such as an iron skillet, on top of the sandwiches to press them down. Once toasted, flip the sandwich and repeat.",
      imageUrl:
        "https://bellyfull.net/wp-content/uploads/2023/05/Cuban-Sandwich-blog-2.jpg",
      image2Url:
        "https://www.southernliving.com/thmb/rE9GZxMh1uYyHKjdFk2ux3Bld0U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CubanSandwich_Beauty_SEO52_3240-5daaee08b62c48a29a925ed2b7ea2929.jpg",
      image3Url:
        "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/01/cuban-sandwich-1200x675.jpg",
      tags: ["sandwich"],
      ingredients: [
        { name: "pork tenderloin", measurement: "454g" },
        { name: "olive oil", measurement: "60g" },
        { name: "orange juice", measurement: "60g" },
        { name: "lime juice", measurement: "30g" },
        { name: "minced garlic", measurement: "9g" },
        { name: "dry oregano", measurement: "3g" },
        { name: "cumin", measurement: "2g" },
        { name: "Cuban bread", measurement: "2" },
        { name: "Swiss cheese", measurement: "2" },
        { name: "Smoked ham", measurement: "454g" },
        { name: "Dill pickles", measurement: "to taste" },
        { name: "Mustard", measurement: "60g" },
        { name: "Butter", measurement: "28g" },
      ],
    },
    {
      name: "Tuna Sandwich",
      details: "A quick delicious meal",
      desc: "The tuna sandwich is a classic and versatile dish with a history dating back to the early 20th century. It gained popularity as a convenient and nutritious meal option, especially during times of economic challenges and food rationing. Tuna, rich in protein, became a go-to ingredient for sandwiches, offering a satisfying and flavorful filling. Today, the tuna sandwich remains a favorite choice for a quick and delicious lunch. It has also evolved with various recipes and interpretations, from the traditional tuna salad to more gourmet versions. Whether enjoyed on slices of bread or in a roll, it's a simple yet comforting dish that continues to be a staple in many households.",
      instructions:
        "1. Put the canned tuna, mayonnaise, celery, dill pickle, Dijon mustard, chopped dill, sliced green onion, and black pepper. Mix well using a wooden spoon, breaking up the tuna so the filling becomes smooth. The pickles and celery will take a beating, which is encouraged.\n2. Divide tuna filling between 4 sandwiches. Butter bread and use two slices of lettuce per sandwich.",
      imageUrl:
        "https://www.recipetineats.com/wp-content/uploads/2023/08/Tuna-sandwich_2.jpg",
      image2Url:
        "https://workweeklunch.com/wp-content/uploads/2022/05/tuna-salad-sando-3-scaled.jpg",
      image3Url:
        "https://thehealthfulideas.com/wp-content/uploads/2022/05/Tuna-Cucumber-Sandwich-SQUARE.jpg",
      tags: ["sandwich", "easy"],
      ingredients: [
        { name: "canned tuna in oil drained", measurement: "425g" },
        { name: "mayonnaise", measurement: "190g" },
        { name: "diced celery", measurement: "115g" },
        { name: "chopped dill pickle", measurement: "75g" },
        { name: "pickle liquid", measurement: "30g" },
        { name: "Dijon mustard", measurement: "30g" },
        { name: "Chopped dill", measurement: "12g" },
        { name: "Sliced green onion", measurement: "42g" },
        { name: "Ground black pepper", measurement: "2g" },
        { name: "Butter", measurement: "68g" },
        { name: "Lettuce leaves", measurement: "2 per sandwich" },
        { name: "Sliced white bread", measurement: "2 per sandwich" },
      ],
    },
    {
      name: "Vegan Chili",
      details: "Prepare yourself for an explosion of flavor",
      desc: "Vegan chili is a flavorful and hearty dish that has become a popular and nutritious alternative to traditional meat-based chili. This recipe combines a variety of plant-based ingredients to create a delicious and satisfying meal. The use of fire-roasted diced tomatoes, pinto and black beans, and quinoa provides a rich and filling texture. The addition of chipotle adobo sauce and spices like chili powder, garlic powder, cumin, and oregano ensures a smoky and robust flavor. Vegan Worcestershire sauce adds depth, and the inclusion of vegetables such as carrots, bell peppers, and onions contributes to its nutritional profile. This chili is not only a favorite among vegans but also appeals to anyone looking for a tasty and protein-packed meatless option. It's a perfect dish for cold evenings and gatherings, and it can be customized with various toppings like avocado, vegan cheese, or sour cream. Enjoy a cruelty-free twist on a classic comfort food with this vegan chili recipe.",
      instructions:
        "1. In a blender, blend the one can of diced tomatoes, carrot peeled and chopped into a few pieces, parsley, Worcestershire sauce, and adobo sauce until fully combined.\n2. Dice the onion and green pepper. In a large pot or Dutch oven, heat the olive oil over medium high heat. Add the onion and green pepper and sauté for about 6 to 7 minutes until tender.\n3. Carefully add the blended vegetables, the second can of diced tomatoes, the crushed tomatoes, drained beans, quinoa, spices, kosher salt, and half cup water. Simmer gently for 25 to 30 minutes until the quinoa is tender and cooked through, stirring occasionally. Taste and add additional salt and adobo sauce as desired.",
      imageUrl:
        "https://cookieandkate.com/images/2015/11/best-vegetarian-chili-1-1.jpg",
      image2Url:
        "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2018/01/easy-vegan-chilli-pan-1000x1500.jpg",
      image3Url:
        "https://lovingitvegan.com/wp-content/uploads/2022/04/Vegan-Chili-13.jpg",
      tags: ["vegan"],
      ingredients: [
        { name: "fire-roasted diced tomatoes", measurement: "794g" },
        { name: "carrot", measurement: "61g" },
        { name: "parsley leaves", measurement: "60g" },
        { name: "vegan Worcestershire sauce", measurement: "30g" },
        { name: "adobo sauce", measurement: "18g" },
        { name: "Spanish onion", measurement: "200g" },
        { name: "Green bell pepper", measurement: "65g" },
        { name: "Olive oil", measurement: "28g" },
        { name: "Canned crushed tomatoes", measurement: "425g" },
        { name: "Canned pinto beans", measurement: "425g" },
        { name: "Canned black beans", measurement: "425g" },
        { name: "Dry quinoa", measurement: "90g" },
        { name: "Chili powder", measurement: "12g" },
        { name: "Garlic powder", measurement: "12g" },
        { name: "Onion powder", measurement: "4g" },
        { name: "Cumin", measurement: "4g" },
        { name: "Dry oregano", measurement: "4g" },
        { name: "Kosher salt", measurement: "9g" },
        { name: "Ground black pepper", measurement: "1g" },
      ],
    },
    {
      name: "Vegan Fajitas",
      details: "Don’t break your neck when you hear them sizzling",
      desc: "Vegan fajitas are a delightful and colorful dish that brings together an array of fresh, plant-based ingredients. This recipe offers a healthy and flavorful twist on the traditional Tex-Mex fajitas. The star of the show is the sheet pan fajita veggies, featuring a mix of white onions, bell peppers, cauliflower, and portobello mushrooms, seasoned with a blend of spices and roasted to perfection. The use of chili powder, cumin, smoked paprika, garlic powder, and onion powder adds a savory and smoky dimension to the dish. For serving, ripe avocados are mashed and seasoned with lime and salt, creating a creamy and tangy guacamole. Fresh cilantro provides a burst of herbaceous flavor, and the fajitas can be served with your choice of tortillas, whether they are flour or corn. A can of vegetarian refried beans or homemade refried beans rounds out the meal with a satisfying protein source. Vegan fajitas are a versatile, nutritious, and visually appealing option that has become a favorite in Tex-Mex cuisine, offering a vibrant and satisfying dining experience.",
      instructions:
        "1. Preheat the oven to 425 degrees Fahrenheit.\n2. Thinly slice the onion and bell peppers and chop the cauliflower into small florets. Chop the mushroom into bite-sized pieces. Add the veggies to a big bowl and toss them with the olive oil, chili powder, cumin, paprika, garlic powder, onion powder, and kosher salt.\n3. Line 2 baking sheets with parchment paper. Add the vegetables in a single layer. Roast 15 minutes, then remove the sheets, stir the veggies, and sprinkle on another half teaspoon salt spread between the trays quarter teaspoon on each. Stir again, then return to the oven and roast another 10 minutes until tender.\n4. Meanwhile, pit the avocados. Scoop out the flesh into a bowl and mash with a fork. Add the lime juice, salt, and cilantro.\n5. Heat the refried beans in a small saucepan.\n6. To serve, place the refried beans and roasted veggies in tortillas, and top with guac. If desired, char the tortillas by placing them on an open gas flame on medium for a few seconds per side, flipping with tongs, until they are slightly blackened and warm.",
      imageUrl:
        "https://www.acouplecooks.com/wp-content/uploads/2021/02/Fajita-Veggies-004.jpg",
      image2Url:
        "https://theveglife.com/wp-content/uploads/2016/06/Overhead-Skillet.jpg",
      image3Url:
        "https://jz-eats.com/wp-content/uploads/2021/08/vegetarian_fajitas-9.jpg",
      tags: ["vegan"],
      ingredients: [
        { name: "white onion", measurement: "200g" },
        { name: "bell peppers", measurement: "400g" },
        { name: "cauliflower", measurement: "700g" },
        { name: "portobello mushrooms", measurement: "100g" },
        { name: "olive oil", measurement: "28g" },
        { name: "chili powder", measurement: "8g" },
        { name: "cumin", measurement: "3g" },
        { name: "smoked paprika", measurement: "3g" },
        { name: "garlic powder", measurement: "3g" },
        { name: "onion powder", measurement: "3g" },
        { name: "kosher salt", measurement: "6g" },
        { name: "ripe avocados", measurement: "to taste" },
        { name: "lime", measurement: "to taste" },
        { name: "cilantro leaves", measurement: "to taste" },
        { name: "tortillas", measurement: "8" },
        { name: "canned refried beans", measurement: "to taste" },
      ],
    },
    {
      name: "Peanut Noodles",
      details: "You might change your mind about Italian pasta",
      desc: "Peanut noodles are a beloved dish known for their fusion of Asian flavors and creamy, nutty goodness. This recipe offers a delightful blend of chewy noodles, typically udon, soba, or rice noodles, coated in a luscious peanut sauce. The sauce combines creamy peanut butter, soy sauce or alternatives like tamari or coconut aminos, a touch of Sriracha for heat, fresh lime juice for tang, and a hint of sweet maple syrup or honey to create a harmonious balance of flavors. The addition of vegetables like thinly sliced carrots, red peppers, green onions, and snap peas brings a vibrant and crunchy texture to the dish. Garnished with fresh cilantro and optionally chopped peanuts, peanut noodles are not only a sensory delight but also a satisfying and nutritious meal. Historically, these noodles have origins in various Asian cuisines, with regional adaptations and variations, and have gained global popularity as a beloved and quick-to-prepare comfort food. Statistics show that peanut noodles are often a top choice for those seeking a flavorful and easy-to-make dish in Asian and fusion cuisine.",
      instructions:
        "1. Cook the noodles according to the package instructions. Drain and rinse under cold water.\n2. In a medium bowl, stir together the peanut butter, soy sauce, Sriracha, lime juice, maple syrup or honey, and water.\n3. In a large skillet, heat the neutral oil over high heat. Add the vegetables and half teaspoon kosher salt and sauté for 1 to 2 minutes, until just tender and lightly charred.\n4. Remove the heat. Add the cooked noodles, sauce, and the remaining half teaspoon kosher salt to the pan and stir to combine. Add 2 tablespoons or so of water and apply heat until it becomes smooth and saucy.\n5. Serve topped with torn fresh cilantro leaves, chopped peanuts, and lime wedges, if desired. The dish tastes best the day it is made, but leftovers store up to 2 days and are best reheated.",
      imageUrl:
        "https://eatwithclarity.com/wp-content/uploads/2023/06/peanut-butter-noodles-5.jpg",
      image2Url:
        "https://www.crunchycreamysweet.com/wp-content/uploads/2018/08/thai-peanut-noodles-6.jpg",
      image3Url:
        "https://therecipecritic.com/wp-content/uploads/2014/09/thaipeanutnoodles6-scaled.jpg",
      tags: ["vegan"],
      ingredients: [
        { name: "dry udon, soba or rice noodles", measurement: "340g" },
        { name: "creamy peanut butter", measurement: "96g" },
        { name: "soy sauce", measurement: "22g" },
        { name: "Sriracha", measurement: "8g" },
        { name: "lime juice", measurement: "45g" },
        { name: "maple syrup or honey", measurement: "20g" },
        { name: "water", measurement: "90g" },
        { name: "canola oil", measurement: "28g" },
        { name: "thinly sliced carrots", measurement: "150g" },
        { name: "thinly sliced red pepper", measurement: "150g" },
        { name: "thinly sliced green onions", measurement: "30g" },
        { name: "snap peas", measurement: "170g" },
        { name: "kosher salt", measurement: "6g" },
        { name: "fresh cilantro", measurement: "to taste" },
        { name: "chopped peanuts", measurement: "to taste" },
      ],
    },
    {
      name: "Vegan Meatballs",
      details: "Go argue with your grandma about these",
      desc: "Vegan meatballs are a delectable plant-based twist on the classic Italian dish, popular for their savory and satisfying flavor. This recipe replaces traditional meat with finely chopped tempeh, offering a protein-rich and nutty base. The tempeh is mixed with minced white onion, garlic, Italian breadcrumbs, and a flavorful blend of fennel seeds, dried oregano, soy sauce or tamari, olive oil, kosher salt, and black pepper. Shaped into delectable meatball morsels and baked to perfection, these vegan meatballs are then generously coated in your favorite marinara sauce. The historical evolution of meatless meatballs is tied to the growth of vegetarian and vegan diets worldwide, reflecting the demand for tasty and cruelty-free alternatives to traditional meat dishes. Statistics show that plant-based eating is on the rise, with an increasing number of people seeking delicious and sustainable alternatives. Vegan meatballs have become a versatile and beloved dish, enjoyed by vegans, vegetarians, and omnivores alike for their taste and ethical appeal.",
      instructions:
        "1. Place 1 ½ cups water into a saucepan with a steamer basket: the water surface should be right under the basket. Bring the water to a boil. Chop the tempeh into small pieces. Once boiling, add it to the steamer basket and steam it for 10 minutes while you prep the remaining ingredients.\n2. Mince the white onion. Mince the garlic. Add them to a medium bowl with the breadcrumbs, fennel seeds and dried oregano. Once the tempeh is cooked, remove it from the steamer and add it to the bowl with the breadcrumbs. Stir in the soy sauce or tamari and 1 tablespoon of the olive oil and mix. Once the tempeh cools slightly, use your fingers to mash it together into a uniform dough.\n3. Use your fingers to form the dough into golf-ball sized balls, about 13 to 14 total, placing them on a plate.\n4. Heat the remaining 3 tablespoons olive oil in a non-stick large skillet over medium high heat. Add the meatballs and cook, turning them occasionally with chopsticks, until lightly browned on all sides, about 5 to 6 minutes. Reduce the heat to medium if it starts to smoke.\n5. Once cooked, you can remove the meatballs from a pan and refrigerate up to 5 days until serving if you’d like. Or serve immediately: turn off the heat and add the marinara sauce to the pan beware of spitting. Simmer for about 1 minute until warm, then top with chopped basil or parsley and serve. Store leftovers refrigerated without sauce for 5 days, or allow to cool then freeze in a freezer-safe container for up to 3 months.",
      imageUrl:
        "https://www.connoisseurusveg.com/wp-content/uploads/2022/03/vegan-meatballs-sq-3.jpg",
      image2Url:
        "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/02/moroccan-inspired-vegan-meatballs-portion-800x1200.jpg",
      image3Url:
        "https://www.wearesovegan.com/wp-content/uploads/2017/10/SV_MightyMeatballs_H1.jpg",
      tags: ["vegan", "italian"],
      ingredients: [
        { name: "tampeh", measurement: "227g" },
        { name: "minced white onion", measurement: "30g" },
        { name: "minced garlic", measurement: "10g" },
        { name: "Italian breadcrumbs", measurement: "60g" },
        { name: "Fennel seeds", measurement: "2g" },
        { name: "Dried oregano", measurement: "4g" },
        { name: "Soy sauce or tamari", measurement: "22g" },
        { name: "Olive oil", measurement: "56g" },
        { name: "Kosher salt", measurement: "6g" },
      ],
    },
    {
      name: "Vegan Broccoli Soup",
      details: "For a cozy Sunday evening",
      desc: "Vegan broccoli soup is a comforting and nutritious dish, renowned for its creamy texture and vibrant green color. This recipe transforms humble ingredients into a delicious and wholesome soup. It features the earthy flavors of Yukon gold potatoes, aromatic onions and garlic, and the rich creaminess of raw cashews. The addition of broccoli, carrots, and a blend of dried thyme and dill creates a balanced and herbaceous taste. This soup, often made with vegetable broth, is a testament to the rise of plant-based eating, reflecting an increasing awareness of the environmental and health benefits of vegan cuisine. Statistics indicate that the popularity of plant-based diets continues to grow globally, with an increasing number of people incorporating more plant-based meals into their lifestyles. Vegan broccoli soup's origins can be traced to the longstanding tradition of vegetable soups, adapted and refined over time to suit modern tastes and dietary preferences. This vegan version is a warm and nourishing bowl of goodness that appeals to a wide range of palates and dietary requirements, making it a staple in many kitchens.",
      instructions:
        "1. Dice the onion and mince the garlic. Peel the potatoes and cut them into bite-sized chunks.\n2. In a large pot or Dutch oven, heat the olive oil over medium high heat. Add the onion and saute for 5 minutes. Add the garlic and saute for 1 minute. Add the vegetable broth, cashews and potatoes and ½ teaspoon kosher salt and bring to a boil. Reduce to a rapid simmer and simmer about 15 minutes until the potatoes are tender and falling apart when poked with a fork.\n3. Meanwhile, run the frozen broccoli under hot water to thaw it. Chop it into smaller florets as necessary. All packages are different, so make small bite-sized florets the size you’d like for a soup. You can chop the broccoli stems off and keep them in the soup as well. Place the broccoli in a bowl and mix it with quarter teaspoon kosher salt and black pepper to taste. Peel and grate the carrot into long strips.\n4. When the potatoes are tender, use a ladle to transfer everything to a blender. Add the thyme, dill, white wine vinegar, Dijon mustard and another quarter teaspoon kosher salt. Hold the top tight and blend everything for a minute or two until fully creamy.\n5. Pour the creamy soup back into the pot and add the broccoli and carrot. Simmer about 5 more minutes until the broccoli is cooked through. Taste and add additional salt as necessary.",
      imageUrl:
        "https://eatplant-based.com/wp-content/uploads/2020/03/Vegan-Broccoli-Cheddar-Soup_1904.jpg",
      image2Url:
        "https://plantifullybasedblog.com/wp-content/uploads/2021/10/1-min-5-819x1024.jpg",
      image3Url:
        "https://eatthegains.com/wp-content/uploads/2020/01/Vegan-Broccoli-Cheese-Soup-7-1.jpg",
      tags: ["vegan"],
      ingredients: [
        { name: "Spanish onion", measurement: "200g" },
        { name: "Garlic cloves", measurement: "12g" },
        { name: "Yukon gold potatoes", measurement: "2lbs" },
        { name: "Olive oil", measurement: "42g" },
        { name: "Vegetable broth", measurement: "500g" },
        { name: "Raw unsalted cashews", measurement: "75g" },
        { name: "Kosher salt", measurement: "6g" },
        { name: "Frozen broccoli florets", measurement: "1lb" },
        { name: "Carrot", measurement: "72g" },
        { name: "Dry thyme", measurement: "2g" },
        { name: "Dried dill", measurement: "2g" },
        { name: "White wine vinegar", measurement: "10g" },
        { name: "Dijon mustard", measurement: "5g" },
      ],
    },
    {
      name: "Vegan Loaded Baked Potatoes",
      details: "Think of all the ways you could load it!",
      desc: "Vegan loaded baked potatoes are a hearty and flavorful dish that has evolved from the classic loaded baked potato, often associated with American comfort food. In this plant-based version, russet potatoes are baked to perfection and then generously topped with a medley of ingredients. These toppings include pico de gallo, which is a fresh and zesty salsa, canned black beans, and sweet corn for a delightful burst of flavor and texture. Guacamole adds a creamy and rich element to the dish. Vegan loaded baked potatoes reflect the growing interest in plant-based diets, which have been on the rise for various reasons, including concerns about health, animal welfare, and environmental sustainability. Statistics reveal that the adoption of plant-based diets continues to grow globally, with an increasing number of people incorporating more plant-based meals into their lifestyles. This vegan twist on a classic comfort food offers a delicious and satisfying option for those looking to enjoy a flavorful and cruelty-free meal.",
      instructions:
        "1. Preheat oven to 425 degrees.\n2. Scrub the potatoes and pierce them all over with a fork. Rub each potato with olive oil. Place the potatoes directly on oven rack with a tray on the rack below to catch any dripping oil. Bake 20 minutes and flip with tongs. Bake an additional 25 minutes and check for tenderness with a fork. The fork should easily pierce the potato to the center. If not tender, continue baking, up to 15 minutes more depending on the size of the potato.\n3. Meanwhile, drain and rinse the black beans and mix them with kosher salt. Drain or thaw the corn. Chop the cilantro.\n4. When the potatoes are done, open the tops with a fork and top with the pico de gallo, seasoned black beans, corn, guacamole, cheddar cheese, cilantro, and sour cream. Enjoy!",
      imageUrl:
        "https://www.lavenderandmacarons.com/wp-content/uploads/2022/12/vegan-baked-potatoes-loaded-with-mushrooms-spinach.jpg",
      image2Url:
        "https://zardyplants.com/wp-content/uploads/2022/02/Vegan-Loaded-Baked-Potatoes-03.jpg",
      image3Url:
        "https://idahopotato.com/uploads/media/Overloaded%20Vegan%20Baked%20Potato.jpg",
      tags: ["vegan"],
      ingredients: [
        { name: "russet potatoes", measurement: "4" },
        { name: "olive oil", measurement: "14g" },
        { name: "pico de gallo", measurement: "360g" },
        { name: "canned black beans", measurement: "425g" },
        { name: "kosher salt", measurement: "2g" },
        { name: "canned corn", measurement: "160g" },
        { name: "guacamole", measurement: "240g" },
      ],
    },
    {
      name: "Tofu Stir Fry",
      details: "Is stir fry the same as chop suey?",
      desc: "Tofu stir fry is a versatile and beloved dish that has its roots in Asian culinary traditions, particularly in China and Southeast Asia. This recipe offers a vibrant and nutritious combination of ingredients, featuring fresh broccoli, red bell pepper, shiitake mushrooms optional, green onions, and tofu. The stir fry sauce, which blends soy sauce, rice vinegar, miso paste, and other seasonings, provides a savory and umami-rich flavor. Tofu, often used as a meat substitute, adds a protein-packed element to the dish. Stir-frying, a cooking technique that quickly sears the ingredients in a hot wok or pan, has a rich history dating back to ancient China, and it remains a popular method for preparing vibrant and colorful dishes. Statistics reveal that tofu and plant-based stir fry recipes have seen increased popularity, in line with the global trend of people adopting vegetarian and vegan diets for health and environmental reasons. Tofu stir fry is not only a delicious option but also a symbol of the diverse and evolving world of plant-based cooking.",
      instructions:
        "1. If serving with rice, start rice first.\n2. Whisk together the stir fry sauce ingredients in a medium bowl, or make the sauce in advance and refrigerate until cooking.\n3. Chop the broccoli into florets. Thinly slice the pepper. Remove the shiitake stems and thinly slice them, if using. Thinly slice the green onion. Peel and grate the ginger.\n4. Cut the tofu into bite-sized pieces 1-inch squares, three eighths-inch thick and pat it dry with a towel. Add 2 tablespoons sesame oil to a large non-stick pan and add the tofu cubes and a few pinches kosher salt. Turn on the heat to medium-high. Cook 5 to 6 minutes until lightly browned on the bottom.\n5. Briefly remove the pan from the heat to reduce spitting. Flip the tofu with chopsticks or tongs. Return the heat to medium-high and cook 5 to 6 minutes until browned. Remove the tofu to a bowl and set it aside.\n6. Add the remaining 1 tablespoon oil to the skillet. Add the broccoli, pepper, and shiitake mushrooms and two pinches salt and cook 6 to 7 minutes until just starting to brown on edges, stirring occasionally. In the last minute, add 1 tablespoon water and allow the vegetables to steam.\n7. Turn down the heat to low. Add the green onion and ginger and cook 1 minute. Turn off the heat. Add the tofu and sauce and stir until the sauce thickens. Garnish with sesame seeds if desired. Serve immediately. Store leftovers up to 3 days refrigerated.",
      imageUrl:
        "https://www.skinnytaste.com/wp-content/uploads/2021/09/Tofu-Stir-Fry-8.jpg",
      image2Url:
        "https://simpleveganblog.com/wp-content/uploads/2023/01/easy-tofu-stir-fry-square.jpg",
      image3Url:
        "https://rainbowplantlife.com/wp-content/uploads/2023/01/tofu-stir-fry-cover-photo-1-of-1.jpg",
      tags: ["vegan"],
      ingredients: [
        { name: "soy sauce", measurement: "60g" },
        { name: "water", measurement: "90g" },
        { name: "rice vinegar", measurement: "15g" },
        { name: "sugar", measurement: "25g" },
        { name: "yellow or white miso paste", measurement: "18g" },
        { name: "cornstarch", measurement: "6g" },
        { name: "garlic powder", measurement: "1g" },
        { name: "fresh broccoli", measurement: "1.5lbs" },
        { name: "red bell pepper", measurement: "120g" },
        { name: "shiitake mushrooms", measurement: "113g" },
        { name: "green onions", measurement: "30g" },
        { name: "grated ginger", measurement: "12g" },
        { name: "firm or extra firm tofu", measurement: "396g" },
        { name: "sesame oil", measurement: "42g" },
        { name: "kosher salt", measurement: "to taste" },
        { name: "sesame seeds", measurement: "to taste" },
      ],
    },
    {
      name: "BBQ Tofu",
      details:
        "Makes you not feel as bad about eating so much sauce when its coating Tofu",
      desc: "Easy BBQ tofu is a delicious and versatile dish that showcases the plant-based potential of tofu. Tofu, often hailed as a meat substitute in vegetarian and vegan cuisine, is the star of this recipe. It's marinated in a flavorful mixture of BBQ sauce, soy sauce, and, if you desire, some spicy chili garlic sauce for an extra kick. The art of cooking tofu can be traced back to ancient China, where it has been consumed for centuries. In recent years, the global trend towards plant-based diets has resulted in an increased demand for tofu and tofu-based recipes, such as this BBQ tofu. Statistics indicate a significant rise in plant-based eating, driven by health, environmental, and ethical considerations. This easy BBQ tofu recipe not only provides a tasty and satisfying meal but also contributes to the growing repertoire of delicious and cruelty-free options for those looking to reduce their meat consumption.",
      instructions:
        "1. Cut the tofu into large cubes about 1.5″ x 2″ and pat it dry with a towel.\n2. Add the oil to a non-stick pan and add the tofu cubes and a few pinches kosher salt. Turn on the heat to medium-high. Cook 5 to 6 minutes until lightly browned on the bottom.\n3. Briefly remove the pan from the heat to reduce spitting. Flip the tofu with chopsticks or tongs. Return the heat to medium-high and cook additional 5 to 6 minutes until browned.\n4. Meanwhile, stir together the BBQ sauce, soy sauce and chili garlic sauce.\n5. Briefly remove the pan from the heat again and drizzle with the sauce. Return to low heat and cook 4 minutes, turning occasionally, until sauce is thickened. Serve immediately.",
      imageUrl:
        "https://www.acouplecooks.com/wp-content/uploads/2021/06/BBQ-Tofu-003.jpg",
      image2Url:
        "https://www.rabbitandwolves.com/wp-content/uploads/2019/02/Korean-BBQ-Tofu0563.jpg",
      image3Url:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/bbq-tofu.jpg",
      tags: ["vegan", "bbq"],
      ingredients: [
        { name: "firm or extra firm tofu", measurement: "397g" },
        { name: "canola oil", measurement: "28g" },
        { name: "kosher salt", measurement: "to taste" },
        { name: "BBQ Sauce", measurement: "225g" },
        { name: "Soy sauce", measurement: "30g" },
        { name: "Chili garlic sauce", measurement: "8g" },
      ],
    },
    {
      name: "Coconut Tofu Curry",
      details: "So good it’ll make you limbo",
      desc: "Coconut tofu curry is a delectable and aromatic dish that showcases the vibrant flavors of Southeast Asian cuisine. This recipe, inspired by the rich culinary traditions of Thailand and its neighboring countries, combines extra firm tofu with a medley of vegetables like red bell pepper, green beans, and bamboo shoots. The Thai red curry paste adds an authentic and spicy kick, while the creamy full-fat coconut milk provides a luscious and balanced base. Tofu, known for its versatility, is a staple in plant-based diets, and its usage in recipes like this has contributed to the global popularity of tofu. The rise of plant-based eating is evident in the statistical increase in tofu consumption and the demand for diverse vegan and vegetarian options. Coconut tofu curry is a flavorful and satisfying choice for those seeking to explore the wonders of plant-based cuisine while enjoying a rich history of culinary traditions.",
      instructions:
        "1. Start the jasmine rice.\n2. Pat the tofu dry with a towel. Cut it into large cubes about half inch x 1 inch. Melt 2 tablespoons coconut oil in a large non-stick skillet over medium-high heat. Add the tofu cubes and quarter teaspoon kosher salt, and cook 5 to 6 minutes until lightly browned on the bottom. Briefly remove the pan from the heat to reduce spitting and flip the tofu with a spatula. Return the heat to medium-high and cook another 5 to 6 minutes until browned. Remove the tofu to a bowl and set aside.\n3. While the tofu cooks, mine the onion and garlic and thinly slice the bell pepper.\n4. In the same skillet, heat the remaining 2 tablespoons oil over medium heat. Add the onion and sauté for 5 minutes, until it is translucent. Add the garlic, red pepper, and green beans and sauté for 3 minutes.\n5. Add the bamboo shoots, red curry paste, coconut milk, brown sugar, soy sauce, lime juice, half teaspoon kosher salt, and Sambal oelek if you choose to use it. Bring to a simmer. Once simmering, add the tofu and cook about 5 to 8 minutes until the sauce is thickened and the veggies are tender. Taste and add additional Sambal oelek to your desired spice level.\n6. To serve, spoon the tofu and sauce over rice. Store refrigerated for up to 3 days.",
      imageUrl:
        "https://www.yayforfood.com/wp-content/uploads/one-pan-tofu-coconut-curry4-scaled-720x720.jpg",
      image2Url:
        "https://choosingchia.com/jessh-jessh/uploads/2020/03/thai-coconut-curry-tofu-6.jpg",
      image3Url:
        "https://images.getrecipekit.com/20211222153835-thaicoconutcurry-social-1.jpg?aspect_ratio=1:1&quality=90&",
      tags: ["vegan"],
      ingredients: [
        { name: "jasmine rice", measurement: "to taste" },
        { name: "extra firm tofu", measurement: "400g" },
        { name: "coconut oil", measurement: "56g" },
        { name: "kosher salt", measurement: "to taste" },
        { name: "Spanish onion", measurement: "200g" },
        { name: "Garlic cloves", measurement: "8g" },
        { name: "Red bell pepper", measurement: "120g" },
        { name: "Long green beans", measurement: "200g" },
        { name: "Canned bamboo shoots", measurement: "120g" },
        { name: "Thai red curry paste", measurement: "45g" },
        { name: "Full fat coconut milk", measurement: "425g" },
        { name: "Brown sugar", measurement: "12g" },
        { name: "Soy sauce", measurement: "30g" },
        { name: "Lime juice", measurement: "15g" },
        { name: "Sriracha", measurement: "to taste" },
      ],
    },
    {
      name: "Glazed Pork Chops",
      details: "Getting hungry typing this in",
      desc: "Glazed pork chops are a classic and mouthwatering dish with a history rooted in traditional American cuisine. This recipe combines the savory goodness of bone-in pork loin chops with a delectable glaze made from ketchup, brown sugar, white vinegar, orange juice, Worcestershire sauce, and minced garlic. The addition of dried rosemary brings an aromatic and earthy flavor to the dish. Pork chops have been a staple in American households for generations, and the concept of glazed meat dates back centuries. The popularity of this dish is reflected in statistics showing the consistent consumption of pork in the United States and beyond. With a perfect blend of sweet and tangy flavors, glazed pork chops offer a timeless culinary experience that continues to be enjoyed by families and food enthusiasts alike.",
      instructions:
        "1. In a small bowl, mix the first seven ingredients. Pour three quarter cup marinade into a large bowl. Add pork chops; turn to coat. Cover and refrigerate 8 hours or overnight. Cover and refrigerate remaining marinade.\n2. Drain pork, discarding marinade in bowl. Lightly grease the grill rack.\n3. Grill pork, covered, over medium heat or broil 4 in. from heat until a thermometer reads 145°, 4-6 minutes on each side; brush generously with remaining marinade during the last 3 minutes. Let stand 5 minutes before serving.",
      imageUrl:
        "https://kalynskitchen.com/wp-content/uploads/2016/05/2-550-pork-chops-balsamic-kalynskitchen-1.jpg",
      image2Url:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/hoisin-glazed-pork-chops-9.jpg?w=960&h=720&q=82&fm=jpg&fit=crop&dm=1603458849&s=039031ccdb75e4b67095c2e30f974383",
      image3Url:
        "https://www.budgetbytes.com/wp-content/uploads/2010/08/Glazed-Pork-Chops-Vs.jpg",
      tags: ["bbq"],
      ingredients: [
        { name: "Ketchup", measurement: "122g" },
        { name: "Brown sugar", measurement: "55g" },
        { name: "White vinegar", measurement: "59g" },
        { name: "Orange juice", measurement: "59g" },
        { name: "Worcestershire sauce", measurement: "59g" },
        { name: "Minced garlic", measurement: "6g" },
        { name: "Bone-in pork loin chops 7oz", measurement: "8" },
        { name: "Crushed dried rosemary", measurement: "2g" },
      ],
    },
    {
      name: "BBQ Picnic Chicken",
      details: "You BBQ this at home THEN you go on a picnic.",
      desc: "BBQ picnic chicken is a beloved American dish known for its delectable blend of flavors and a history deeply rooted in the country's culinary traditions. The dish is characterized by tender and flavorful chicken pieces marinated in a rich sauce made from ingredients like ketchup, brown sugar, chili sauce, Worcestershire sauce, mustard, and a touch of hot pepper sauce. Often enjoyed at picnics and outdoor gatherings, this recipe has its origins in the long-standing tradition of outdoor barbecues in the United States, dating back to the colonial period. Statistics reveal that barbecues and outdoor gatherings continue to be a popular way for people to come together and enjoy this classic dish. BBQ picnic chicken is a testament to the enduring popularity of American barbecue and remains a staple at family gatherings, picnics, and cookouts, delighting taste buds and bringing people together.",
      instructions:
        "1. In a large saucepan, sauté garlic in butter until tender. Add the next 8 ingredients. Bring to a boil, stirring constantly. Remove from the heat; set aside.\n2. On a lightly greased grill rack, grill chicken, covered, over medium heat for 30 minutes, turning occasionally. Baste with sauce. Grill 15 minutes longer or until a thermometer reaches 170°, basting and turning several times.",
      imageUrl:
        "https://www.mooshujenne.com/wp-content/uploads/2022/05/BBQPicnicChicken13-1024x682.jpg",
      image2Url:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/7/2/FNM_070111-WN-Dinners-033_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597758947.jpeg",
      image3Url:
        "https://i.pinimg.com/originals/1a/e5/10/1ae51071c8a744a23eb4b39044faa61c.jpg",
      tags: ["bbq"],
      ingredients: [
        { name: "garlic cloves", measurement: "6g" },
        { name: "butter", measurement: "9g" },
        { name: "ketchup", measurement: "245g" },
        { name: "brown sugar", measurement: "55g" },
        { name: "chili sauce", measurement: "60g" },
        { name: "Worcestershire sauce", measurement: "30g" },
        { name: "Celery seed", measurement: "8g" },
        { name: "Prepared mustard", measurement: "15g" },
        { name: "Salt", measurement: "3g" },
        { name: "Hot pepper sauce", measurement: "2g" },
        { name: "Broiler, fryer chickens 4lbs each", measurement: "2" },
      ],
    },
    {
      name: "Baby Back Ribs",
      details: "BABY GOT BACK",
      desc: "Baby back ribs are a beloved American dish with roots in the country's long-standing love for barbecue. This recipe showcases the flavors of pork baby back ribs, which are tender and succulent pieces of meat. Ribs have a storied history in American cuisine, with barbecues and grilling traditions dating back to the earliest days of the nation. The method of cooking ribs low and slow, often on outdoor grills, has become an integral part of American food culture. The combination of barbecue sauce, plum sauce, and a dash of hot pepper sauce adds a sweet and spicy kick to these ribs. Statistics reveal that barbecues and grilling remain a significant part of American culinary traditions, with people across the country and around the world indulging in the pleasures of well-prepared ribs. Baby back ribs continue to be a popular choice for those seeking the quintessential barbecue experience.",
      instructions:
        "1. Place the ribs in a 5-qt. slow cooker. Add the water, onion, celery, 1 teaspoon garlic and peppercorns. Cover and cook on low for 6 hours or until meat is tender.\n2. In a small saucepan, combine the barbecue sauce, plum sauce, hot pepper sauce and remaining garlic. Cook and stir over medium heat for 5 minutes or until heated through. Remove ribs. Discard cooking juices and vegetables.\n3. Brush ribs with sauce. Grill, covered, on an oiled rack over medium-low heat for 8-10 minutes or until browned, turning and basting occasionally with remaining sauce.",
      imageUrl:
        "https://www.onceuponachef.com/images/2022/06/baby-back-ribs-18.jpg",
      image2Url:
        "https://howtofeedaloon.com/wp-content/uploads/2019/01/Ribs-Final-Feature.jpg",
      image3Url:
        "https://www.allrecipes.com/thmb/I2ENWJQG1mb2b5OSXPqQudzlzJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/220987-Baked-BBQ-Baby-Back-Ribs-mfs-041-77a42b0ce0f0424e9aeec2b22664f1aa.jpg",
      tags: ["bbq"],
      ingredients: [
        { name: "Pork baby back ribs", measurement: "2.5lbs" },
        { name: "Water", measurement: "1185g" },
        { name: "Sliced Spanish onion", measurement: "200g" },
        { name: "Celery", measurement: "100g" },
        { name: "Minced garlic", measurement: "9g" },
        { name: "Whole black peppercorns", measurement: "3g" },
        { name: "BBQ sauce", measurement: "122g" },
        { name: "Plum sauce", measurement: "61g" },
        { name: "Hot pepper sauce", measurement: "1g" },
      ],
    },
    {
      name: "Whiskey Pineapple Chicken",
      details:
        "Let the smoky allure of whiskey meet the tropical embrace of the pineapple",
      desc: "Whiskey pineapple chicken is a flavorful and bold dish that marries the smoky essence of whiskey with the tropical sweetness of pineapple, showcasing a fusion of diverse culinary influences. The concept of cooking with whiskey, often referred to as 'bourbon chicken,' has historical roots in American whiskey culture and the creative use of spirits in cooking. Pineapple, on the other hand, brings a touch of the tropics to this dish, with a history steeped in its global popularity as a fruit that symbolizes hospitality and warmth. The statistics reveal a continuous growth in the use of alcoholic ingredients in cooking, with whiskey being a key player in many contemporary recipes. This dish combines these ingredients with chicken, creating a succulent and aromatic experience. With a smoky and sweet flavor profile, whiskey pineapple chicken is a captivating choice for those who appreciate bold and diverse culinary traditions.",
      instructions:
        "1. Whisk together bourbon, pineapple juice, hoisin sauce, ginger, 1 tablespoon pepper, Worcestershire sauce, garlic and 1 teaspoon salt until blended. Place chicken in a shallow dish. Add half the marinade; turn to coat. Cover and refrigerate overnight, turning occasionally. Cover and refrigerate remaining marinade.\n2. Drain chicken, discarding the marinade. Grill chicken, covered, on a greased grill rack over medium-high direct heat until a thermometer reads 170°, 5-6 minutes on each side.\n3. Meanwhile, toss pepper and onion slices in oil and remaining 2 teaspoons salt and 1 tablespoon pepper. Grill vegetables, turning frequently, until soft, 5-7 minutes. In a small saucepan on the grill, cook reserved marinade over medium heat, stirring occasionally, until slightly thickened, about 10 minutes. Chop grilled pepper and onion. Sprinkle over chicken; serve with sauce.",
      imageUrl:
        "https://everydaygoodthinking.ca/wp-content/uploads/2015/05/grilled-bourbon-chicken-31.jpg",
      image2Url:
        "https://dinnerthendessert.com/wp-content/uploads/2017/11/Easy-Bourbon-Chicken-3.jpg",
      image3Url:
        "https://grillinwithdad.com/wp-content/uploads/2023/03/Bourbon-chicken-lollipops-1024x1024.jpg",
      tags: ["bbq"],
      ingredients: [
        { name: "Bourbon", measurement: "474g" },
        { name: "Unsweetened pineapple juice", measurement: "480g" },
        { name: "Hoisin sauce", measurement: "240g" },
        { name: "Minced gingerroot", measurement: "15g" },
        { name: "Coarse pepper", measurement: "13g" },
        { name: "Worcestershire sauce", measurement: "20g" },
        { name: "Minced garlic", measurement: "32g" },
        { name: "Kosher salt", measurement: "18g" },
        { name: "Boneless skinless chicken thighs", measurement: "2268g" },
        { name: "Sliced sweet red pepper", measurement: "150g" },
        { name: "Sliced Spanish onion", measurement: "160g" },
        { name: "Olive oil", measurement: "28g" },
      ],
    },
    {
      name: "Texas BBQ Brisket",
      details: "You don’t need a smoker to make some brisket",
      desc: "Easy Texas-style brisket is a cherished dish with deep roots in the culinary heritage of the Lone Star State. The method of slow-cooking beef brisket, often seasoned with a blend of spices and sauces, is a time-honored tradition in Texas barbecue. This recipe features a savory rub that includes brown sugar, salt, onion and garlic powder, mustard, smoked paprika, and pepper, enhancing the flavor of the brisket. The use of liquid smoke and Worcestershire sauce further adds a smoky and umami-rich depth to the meat. Texas is renowned for its barbecue culture, with historical ties to the cattle ranching industry and influences from various culinary traditions. Statistical data reflects the enduring popularity of brisket in Texas and beyond, with barbecue restaurants and enthusiasts continuing to celebrate this quintessential Texan dish. Easy Texas-style brisket is a delicious tribute to the art of slow-cooked, flavorful meat that embodies the spirit of Texas barbecue.",
      instructions:
        "1. In a small bowl, combine the first 7 ingredients. With a fork or sharp knife, prick holes in briskets. Rub meat with seasoning mixture. Cover and refrigerate overnight.\n2. Preheat oven to 325°. Place briskets, fat sides up, in a roasting pan. In a small bowl, combine steak sauce, liquid smoke and Worcestershire sauce; pour over meat.\n3. Cover tightly with foil; bake 4 to 5 hours or until tender. Let stand in juices 15 minutes. To serve, thinly slice across the grain. Skim fat from pan juices; spoon over meat.",
      imageUrl:
        "https://themom100.com/wp-content/uploads/2019/06/oven-baked-beef-brisket-206.jpg",
      image2Url:
        "https://www.aspicyperspective.com/wp-content/uploads/2019/05/Texas-Style-Oven-Brisket-Recipe-7.jpg",
      image3Url:
        "https://www.willcookforsmiles.com/wp-content/uploads/2019/02/Brisket-recipe-4-1.jpg",
      tags: ["bbq", "easy"],
      ingredients: [
        { name: "Brown sugar", measurement: "26g" },
        { name: "Salt", measurement: "18g" },
        { name: "Onion powder", measurement: "8g" },
        { name: "Garlic powder", measurement: "6g" },
        { name: "Ground mustard", measurement: "8g" },
        { name: "Paprika", measurement: "8g" },
        { name: "Ground black pepper", measurement: "6g" },
        { name: "Beef Brisket 3.5lbs", measurement: "2" },
        { name: "Heinz 57 Steak Sauce", measurement: "283g" },
        { name: "Liquid smoke", measurement: "118g" },
        { name: "Worcestershire sauce", measurement: "59g" },
      ],
    },
    {
      name: "Spicy Pork Tenderloin",
      details: "Spicy pork, what’s not to like?",
      desc: "Spicy pork tenderloin is a tantalizing dish that combines the succulence of pork with a burst of flavorful spices, creating a delightful culinary experience. The use of chili powder, ground ginger, ground thyme, and pepper in this recipe adds a rich blend of seasonings, enhancing the taste of the tender pork. The practice of spicing and roasting pork has historical roots in various global cuisines, where spices and herbs were used to preserve and flavor meat. In more recent times, statistics demonstrate the enduring popularity of pork dishes, including tenderloin preparations, in many countries. Pork is celebrated for its versatility and the ability to adapt to a wide range of flavor profiles. Spicy pork tenderloin exemplifies the timeless appeal of savory and spicy meats, offering a zesty and aromatic twist on traditional pork recipes.",
      instructions:
        "1. Combine chili powder, salt, and ground ginger, rub over tenderloins. Cover and refrigerate for 2 to 4 hours.\n2. Grill, covered over medium to hot indirect heat for 25 to 40 minutes or until a thermometer reads 160 degrees Fahrenheit.",
      imageUrl:
        "https://www.jocooks.com/wp-content/uploads/2012/12/cajun-honey-pork-tenderloin-1-16.jpg",
      image2Url:
        "https://www.foodandwine.com/thmb/F0UuasTmlVVZXCX299meNy6o_8w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201307-xl-spice-roasted-pork-tenderloin-2000-fc50e44251324150af17ed8faf248963.jpg",
      image3Url:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps832_GIT2919402B01_04_2bC_RMS.jpg?fit=700,700",
      tags: ["bbq", "easy"],
      ingredients: [
        { name: "Chili Powder", measurement: "8 to 24g" },
        { name: "Salt", measurement: "6g" },
        { name: "Ground ginger", measurement: "1g" },
        { name: "Ground thyme", measurement: "1g" },
        { name: "Ground black pepper", measurement: "1g" },
        { name: "Pork Tenderloin 1lb", measurement: "2" },
      ],
    },
    {
      name: "Soy Sesame Asparagus",
      details: "A great side for your BBQ!",
      desc: "Soy sesame asparagus is a delectable and savory dish that transforms fresh asparagus into a flavorful culinary delight. This recipe combines the umami richness of toasted sesame oil and soy sauce with the aromatic essence of garlic and a hint of brown sugar to create a mouthwatering glaze for the tender asparagus. Asparagus, known for its versatility and nutritional value, has been enjoyed since ancient times, with historical records of its consumption dating back to the Roman Empire. As a popular side dish or appetizer, soy sesame asparagus showcases the enduring appeal of fresh and seasonal vegetables. Statistics show that the consumption of asparagus has remained steady, reflecting its consistent presence on dining tables. Whether enjoyed as a side or a standalone dish, soy sesame asparagus is a delicious example of how simple ingredients can elevate the flavors of everyday greens, providing a delightful culinary experience.",
      instructions:
        "1. Preheat the grill to 500 degrees Fahrenheit.\n2. In a bowl, mix sesame oil, soy sauce, garlic, and brown sugar. Place asparagus in the bowl, and toss to coat.\n3. Lightly oil a fine-mesh grill grate. Place asparagus on the grate and cook for 8 minutes, until tender but firm. Garnish with sesame seeds to serve.",
      imageUrl:
        "https://therecipecritic.com/wp-content/uploads/2019/06/grilledasparagus.jpg",
      image2Url:
        "https://www.wellplated.com/wp-content/uploads/2021/03/Healthy-Grilled-Asparagus.jpg",
      image3Url:
        "https://www.wholesomeyum.com/wp-content/uploads/2021/06/wholesomeyum-How-To-Grill-Asparagus-Easy-Grilled-Aspragus-Recipe-15.jpg",
      tags: ["bbq", "easy"],
      ingredients: [
        { name: "Sesame oil", measurement: "14g" },
        { name: "Soy sauce", measurement: "15g" },
        { name: "Minced garlic", measurement: "9g" },
        { name: "Brown sugar", measurement: "4g" },
        { name: "Asparagus", measurement: "1.5lbs" },
        { name: "Toasted sesame seeds", measurement: "18g" },
      ],
    },
    {
      name: "Grilled Brussels Sprouts",
      details: "You’re going to be the side master at the next BBQ!",
      desc: "Grilled Brussels sprouts are a delightful and healthy dish that elevates this often-underappreciated vegetable to new heights. This recipe takes fresh Brussels sprouts, cuts them in half, and enhances their flavor with a mixture of melted butter, garlic powder, cracked black pepper, and a pinch of seasoned salt, providing a savory and zesty taste. Brussels sprouts have a rich history dating back to ancient Rome, and their consumption continues to grow worldwide, fueled by a resurgence in vegetable-centric diets. The grilling method adds a smoky and slightly charred dimension to these greens, while a squeeze of fresh lime juice imparts a tangy brightness. Grilled Brussels sprouts are an excellent side dish that demonstrates how a simple preparation can turn a humble vegetable into a culinary delight, appealing to both veggie lovers and newcomers to this green gem.",
      instructions:
        "1. Preheat an outdoor grill for 400 degrees Fahrenheit and lightly oil the grates.\n2. Brush butter over Brussels sprouts and season with garlic powder, black pepper, and seasoned salt.\n3. Place sprouts on the preheated grill and cook until tender and grill marks appear, about 10 minutes. Squeeze lime juice over sprouts before removing from the grill.",
      imageUrl:
        "https://www.slenderkitchen.com/sites/default/files/styles/gsd-1x1/public/recipe_images/grilled-brussels-sprouts-6.jpg",
      image2Url:
        "https://www.wellplated.com/wp-content/uploads/2017/08/Crispy-Oven-Roasted-Brussels-Sprouts.jpg",
      image3Url:
        "https://www.wellplated.com/wp-content/uploads/2019/08/Roasted-Brussels-with-Garlic-Easy.jpg",
      tags: ["bbq", "easy"],
      ingredients: [
        { name: "Melted butter", measurement: "28g" },
        { name: "Halved Brussels sprouts", measurement: "454g" },
        { name: "Garlic powder", measurement: "5g" },
        { name: "Coarse black pepper", measurement: "5g" },
        { name: "Salt", measurement: "2g" },
        { name: "Lime", measurement: "to taste" },
      ],
    },
    {
      name: "Corn Bread",
      details: "Who doesn’t love corn bread?",
      desc: "Cornbread is a beloved American staple, celebrated for its hearty and comforting qualities. This classic recipe combines fine cornmeal and all-purpose flour, creating a textural balance that yields a tender yet slightly crumbly texture. The addition of baking powder, baking soda, and a touch of salt ensures that this quick bread rises to perfection while offering a hint of savory contrast. Melted butter, brown sugar, honey, and a farm-fresh egg work together to provide a delightful sweetness and richness, beautifully complemented by the tangy notes of buttermilk. Cornbread's roots trace back to Native American and early American history, and it has evolved into a versatile dish enjoyed in countless ways, from complementing chili to serving as a standalone treat. Statistics reveal that cornbread remains a favorite in American households, embodying the timeless charm of traditional comfort foods that warm both the heart and soul.",
      instructions:
        "1. Preheat oven to 400 degrees Fahrenheit. Grease and lightly flour a 9in square baking pan. Set aside.\n2. Whisk the cornmeal, flour, baking powder, baking soda, and salt together in a large bowl. Set aside. In a medium bowl, whisk the melted butter, brown sugar and honey together until completely smooth and thick. Then, whisk in the egg until combined. Finally, whisk in the buttermilk. Pour the wet ingredients into the dry ingredients and whisk until combined. Avoid over-mixing.\n3. Pour batter into prepared baking pan. Bake for 20 minutes or until golden brown on top and the center is cooked through. Use a toothpick to test. Edges should be crispy at this point. Allow to slightly cool before slicing and serving. Serve cornbread with butter, honey, jam, or whatever you like.",
      imageUrl:
        "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2022/08/Jiffy-Mexican-Cornbread-08.jpg",
      image2Url:
        "https://www.inspiredtaste.net/wp-content/uploads/2023/06/Homemade-Cornbread-Recipe-Video.jpg",
      image3Url:
        "https://www.culinaryhill.com/wp-content/uploads/2021/01/Cornbread-Culinary-Hill-1200x800-1-1.jpg",
      tags: ["bbq"],
      ingredients: [
        { name: "Fine cornmeal", measurement: "120g" },
        { name: "All-purpose flour", measurement: "125g" },
        { name: "Baking powder", measurement: "5g" },
        { name: "Baking soda", measurement: "3g" },
        { name: "Salt", measurement: "1g" },
        {
          name: "Unsalted butter melted and slightly cooled",
          measurement: "113g",
        },
        { name: "Brown sugar", measurement: "67g" },
        { name: "Honey", measurement: "42g" },
        { name: "Egg", measurement: "1" },
        { name: "Buttermilk", measurement: "240g" },
      ],
    },
    {
      name: "Grilled Salmon",
      details: "You’re going to be the guy that brings salmon to a BBQ",
      desc: "Grilled salmon is a culinary delight known for its savory flavors and health benefits, as well as a rich history in the world of seafood cuisine. This recipe combines the sweet and smoky elements of brown sugar and liquid smoke, harmonizing with the gentle seasoning of sea salt, lemon-pepper seasoning, and seasoned salt to enhance the flavor of the salmon. Salmon has been a seafood staple for centuries, with historical records dating back to ancient civilizations like the Greeks and Romans. In more recent times, salmon has remained a popular choice among health-conscious individuals, thanks to its omega-3 fatty acids and protein content. Statistics indicate a consistent and growing consumption of salmon, as it remains a popular choice on restaurant menus and home kitchens alike. Grilled salmon showcases the timelessness of seafood as a culinary centerpiece, offering a delicious and nutritious dining experience for all occasions.",
      instructions:
        "1. Preheat an outdoor grill for medium heat and lightly oil the grate.\n2. Mix brown sugar, sea salt, lemon pepper seasoning, and seasoned salt together in a container. Coat halved salmon fillets with seasoning mixture. Place salmon on two to four aluminum foil sheets; Drizzle with olive oil and liquid smoke. Fold the tops of pieces of foil together, leaving the sides open. Tent the foil for heat circulation.\n3. Place foil packets on the preheated grill and cook until salmon is easily flaked with a fork, 15 to 25 minutes, opening foil during the last five minutes to lightly brown.",
      imageUrl:
        "https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-final-2.jpg",
      image2Url:
        "https://www.lecremedelacrumb.com/wp-content/uploads/2019/08/cajun-honey-butter-grilled-salmon-2.jpg",
      image3Url:
        "https://evuecezehrh.exactdn.com/wp-content/uploads/2021/09/best-damn-george-foreman-grill-salmon-feature.jpg",
      tags: ["bbq", "seafood"],
      ingredients: [
        { name: "Brown sugar", measurement: "300g" },
        { name: "Sea salt", measurement: "6g" },
        { name: "Lemon pepper seasoning", measurement: "5g" },
        { name: "Seasoned salt", measurement: "5g" },
        { name: "Salmon fillets 1lb", measurement: "2" },
        { name: "Olive oil", measurement: "120g" },
        { name: "Liquid smoke", measurement: "5ml" },
      ],
    },
    {
      name: "Lemon Garlic Shrimp",
      details: "You got lemon, you got garlic, you got shrimp, you’re good.",
      desc: "Lemon garlic shrimp is a delectable Mediterranean dish that celebrates the flavors of the sea. This recipe combines the pungent notes of minced garlic with the richness of extra-virgin olive oil, providing a base of bold flavors. Lemon juice, parsley, kosher salt, and pepper further enhance the dish with a burst of freshness and zest. The Mediterranean region has a long history of seafood consumption, with dishes like this one reflecting the culinary traditions that have evolved over centuries. Statistics reveal the enduring popularity of shrimp, a widely enjoyed and versatile seafood, making it a staple in many global cuisines. Lemon garlic shrimp offers a taste of the Mediterranean's timeless culinary heritage and is appreciated for its simple yet vibrant flavors that pair perfectly with a variety of side dishes.",
      instructions:
        "1. Place garlic and oil in a small skillet and cook over medium heat until fragrant, about 1 minute. Add lemon juice, parsley, salt, and pepper. Toss with shrimp in a large bowl. Chill until ready to serve.",
      imageUrl:
        "https://www.wholesomeyum.com/wp-content/uploads/2022/01/wholesomeyum-Lemon-Garlic-Butter-Shrimp-Recipe-19.jpg",
      image2Url:
        "https://www.killingthyme.net/wp-content/uploads/2020/05/lemon-garlic-butter-shrimp.jpg",
      image3Url:
        "https://www.wellplated.com/wp-content/uploads/2019/05/Garlic-Butter-Shrimp-recipe.jpg",
      tags: ["easy", "mediterranean"],
      ingredients: [
        { name: "Minced garlic", measurement: "45g" },
        { name: "Olive oil", measurement: "28g" },
        { name: "Lemon juice", measurement: "60ml" },
        { name: "Minced parsley", measurement: "15g" },
        { name: "Kosher salt", measurement: "3g" },
        { name: "Ground pepper", measurement: "2g" },
        { name: "Cooked shrimp", measurement: "1.25lbs" },
      ],
    },
    {
      name: "Fig and Goat Cheese Salad",
      details: "A sweet and savory appetizer",
      desc: "Fig and goat cheese salad is a delightful ensemble of flavors and textures that draws inspiration from Mediterranean cuisine. This light and vibrant salad brings together mixed salad greens, dried figs, and crumbled fresh goat cheese, creating a harmonious balance of sweet and savory. Slivered almonds, toasted to perfection, add a delightful crunch to every bite. The dressing, made with extra-virgin olive oil, balsamic vinegar, honey, and a pinch of salt, lends a depth of flavor that complements the ingredients. Historical records suggest that figs have been cultivated and consumed for thousands of years, with the Mediterranean region being a historical hub for fig production. Statistical data shows a consistent appreciation for salads, with their popularity growing as people seek fresh and nutritious meal options. Fig and goat cheese salad embodies the essence of Mediterranean cuisine, where simple, high-quality ingredients come together to create a wholesome and palate-pleasing experience.",
      instructions:
        "1. Combine greens, figs, goat cheese, and almonds in a medium bowl. Stir together oil, vinegar, honey, salt, and pepper.\n2. Just before serving, drizzle the dressing over the salad and toss.",
      imageUrl:
        "https://stripedspatula.com/wp-content/uploads/2018/06/fig-salad-2.jpg",
      image2Url:
        "https://www.simplyleb.com/wp-content/uploads/Fig-and-Goat-Cheese-Salad-7.jpg",
      image3Url:
        "https://georgieeats.co.uk/wp-content/uploads/2018/09/IMG_2657.jpg",
      tags: ["easy", "mediterranean"],
      ingredients: [
        { name: "Mixed greens salad mix", measurement: "60g" },
        { name: "Dried figs, stemmed and sliced", measurement: "100g" },
        { name: "Crumbled fresh goat cheese", measurement: "28g" },
        { name: "Toasted almonds", measurement: "12g" },
        { name: "Olive oil", measurement: "8g" },
        { name: "Balsamic vinegar", measurement: "12g" },
        { name: "Honey", measurement: "3g" },
        { name: "Salt", measurement: "to taste" },
        { name: "Ground black pepper", measurement: "to taste" },
      ],
    },
    {
      name: "Tomato and Artichoke Gnocchi",
      details:
        "The fat and richness of the gnocchi balanced by the acid of the artichokes and tomatoes",
      desc: "Tomato and artichoke gnocchi is a flavorful and hearty Italian-inspired dish that combines soft potato dumplings with a vibrant medley of ingredients. This recipe showcases the delicious interplay of shelf-stable gnocchi, red bell peppers, chickpeas, diced tomatoes, and chopped artichoke hearts. The result is a delightful blend of textures and tastes, with the added zest of Kalamata olives and a touch of oregano. Ground pepper and red-wine vinegar provide a zesty and tangy finishing touch. Gnocchi, a beloved Italian pasta variation, has a history dating back to Roman times and is a testament to the enduring popularity of pasta in Italian cuisine. Statistical data reveals that Italian dishes, such as gnocchi, have consistently garnered favor worldwide. Tomato and artichoke gnocchi embodies the comfort and simplicity of Italian cooking, offering a satisfying and well-balanced meal for all to enjoy.",
      instructions:
        "1. Heat 1 tablespoon oil in a large nonstick skillet over medium-high heat. Add gnocchi and cook, stirring often, until plumped and starting to brown, about 5 minutes. Transfer to a bowl and cover to keep warm.\n2. Reduce heat to medium. Add the remaining 1 tablespoon oil and onion to the pan. Cook, stirring occasionally, until starting to brown, 2 to 3 minutes. Add bell pepper; cook, stirring occasionally, until crisp-tender, about 3 minutes. Add garlic and oregano; cook, stirring, for 30 seconds. Add chickpeas, tomatoes, and artichokes; cook, stirring, until hot, about 3 minutes. Stir in olives, vinegar, pepper, and the gnocchi. Sprinkle with oregano, if desired.",
      imageUrl:
        "https://www.eatingwell.com/thmb/z-BHmGsUsQL20Zsb7TKjscolEls=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3749546-8313f88901464d8196fbe654ac33a0a9.jpg",
      image2Url:
        "https://cdn.jwplayer.com/v2/media/Pfmn7gAJ/poster.jpg?width=720",
      image3Url:
        "https://allyscooking.com/wp-content/uploads/2017/01/gnocchi-1.12.17-9.jpg",
      tags: ["mediterranean"],
      ingredients: [
        { name: "Olive oil", measurement: "28g" },
        { name: "Shelf stable gnocchi", measurement: "454g" },
        { name: "Sliced Spanish onion", measurement: "100g" },
        { name: "Diced red bell pepper", measurement: "150g" },
        { name: "Thinly sliced garlic", measurement: "16g" },
        { name: "Chopped oregano", measurement: "2g" },
        { name: "Chickpeas", measurement: "425g" },
        { name: "Diced tomatoes", measurement: "400g" },
        { name: "Chopped artichoke hearts", measurement: "255g" },
        { name: "Pitted and sliced Kalamata olives", measurement: "40g" },
        { name: "Red wine vinegar", measurement: "15g" },
        { name: "Ground black pepper", measurement: "1g" },
      ],
    },
    {
      name: "Paella",
      details:
        "Send your friends on a trip to Valencia with this Paella recipe",
      desc: "Paella, a celebrated Spanish dish originating from the Valencia region, is a vibrant and colorful culinary masterpiece known for its exquisite blend of flavors and ingredients. This traditional recipe combines the aromatic trinity of onion, garlic, and tomatoes, sautéed in olive oil, to create a fragrant base. The addition of smoked paprika, red pepper flakes, and saffron infuses the dish with depth and warmth. Paella has a rich history dating back to the 18th century, with its origins in the rice fields of Valencia, and it has since become a symbol of Spanish cuisine. Statistical data highlights its worldwide popularity, with countless variations and adaptations served across the globe. This beloved dish typically includes an array of proteins, from shrimp to chicken and mussels, and is cooked with short-grain rice to achieve its signature texture. Garnished with lemon wedges and parsley, paella embodies the heart and soul of Spanish cooking, offering a communal and flavorful experience for all who savor it.",
      instructions:
        "1. Mince the onion. Mince the garlic. Finely chop the tomatoes, removing the cores but keeping the seeds with their juices.\n2. Measure out all the remaining ingredients before you start. The cooking process goes fast.\n3. Dry the shrimp and add it to a bowl with half teaspoon smoked paprika and quarter teaspoon kosher salt. In your largest skillet or a four serving paella pan, heat one tablespoon olive oil over medium heat. Add the shrimp and sauté until it is just barely opaque, about one to two minutes per side. Remove the shrimp and set it aside.\n4. In the same pan, heat 3 tablespoons olive oil on medium heat. Sauté the onion and garlic until just translucent, about 3 minutes, stirring frequently. Add the chopped tomatoes, the remaining one teaspoon smoked paprika and red pepper flakes, and cook until the tomatoes have broken down and most of the liquid is evaporated, about 5 minutes. Stir in the stock, saffron, and one and a quarter teaspoon kosher salt. Sprinkle the rice evenly across the broth and tap the pan with a spoon to evenly spread the rice. Bring it to a medium simmer and cook without stirring until liquid is absorbed, about 18 to 22 minutes.\n5. If your pan is large enough to span multiple burners on your stove top, adjust the heat on each burner so you achieve a steady medium simmer. Rotate the pan every few minutes for an even cook.\n6. When the top of the rice is beginning to show through the liquid, press the artichokes and peas lightly into the rice. Add the strips of red pepper over the top.\n7. In the last few minutes, carefully watch the Paella and rotate the pan more frequently. As the Paella finishes, you'll see the steam start to slow down as the water cooks out. If desired, peek at the bottom of the pan by using a knife to scrape back the rice; you shouldn't see any standing water. The sound will start to change from a simmer to a crackle. This indicates the crust is forming. Let the crackling continue for about two minutes before removing from the heat. If you smell any burning, remove immediately.\n8. When the Paella is done, add the shrimp to the top of the Paella and squeeze the lemon wedges onto the top of the pan. Sprinkle with a pinch or two of kosher salt and add the parsley, if using. Serve with additional lemon wedges.",
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2018/06/Oven-paella-5d16b06.jpg?resize=768,574",
      image2Url:
        "https://houseofnasheats.com/wp-content/uploads/2023/08/Mixed-Paella-Recipe-1.jpg",
      image3Url:
        "https://images.squarespace-cdn.com/content/v1/5d8ca6452d89533d477b5ef5/1662738028082-81TNAVPP5UAIYXJBGUUF/Paella.png",
      tags: ["mediterranean"],
      ingredients: [
        { name: "Spanish onion", measurement: "150g" },
        { name: "Garlic cloves", measurement: "18g" },
        { name: "Roma or plum tomatoes", measurement: "360g" },
        { name: "Olive oil", measurement: "56g" },
        { name: "Shrimp peeled and deveined", measurement: "227g" },
        { name: "Smoked paprika", measurement: "3g" },
        { name: "Red pepper flakes", measurement: "1g" },
        { name: "Saffron", measurement: "1g" },
        { name: "Kosher salt", measurement: "9g" },
        { name: "Seafood or vegetable stock", measurement: "720ml" },
        { name: "Bomba or arborio rice", measurement: "300g" },
        { name: "Frozen peas", measurement: "32g" },
        { name: "Artichoke hearts", measurement: "85g" },
        { name: "Roasted red bell peppers", measurement: "180g" },
      ],
    },
    {
      name: "Quinoa Tabbouleh",
      details: "A refreshing side with a long history",
      desc: "Quinoa tabbouleh is a modern twist on a classic Middle Eastern salad that beautifully marries fresh and nutritious ingredients. This refreshing dish combines fluffy quinoa with finely chopped parsley, a hint of mint, green onions, and ripe tomatoes for a harmonious blend of textures and flavors. The addition of English cucumber provides a crisp contrast, while a zesty dressing of lemon juice, olive oil, kosher salt, and black pepper ties it all together. Tabbouleh has deep-rooted historical origins in the Levantine region, and its timeless appeal has earned it a place on tables worldwide. Statistical data reflects the growing appreciation for healthier, plant-based dishes like quinoa tabbouleh, which brings together the traditional essence of Middle Eastern cuisine and contemporary dietary preferences. This dish offers a fresh, vibrant, and light salad that is perfect for warm weather or as a side to many meals.",
      instructions:
        "1. Rinse the quinoa using a fine mesh strainer, then drain it completely. Place it in a saucepan with two cups of water and a quarter teaspoon of kosher salt. Bring to a boil, then reduce the heat to low. Cover the pot and simmer where the water is just bubbling for about 17 to 20 minutes, until the water has been completely absorbed. Turn off the heat and let it sit with the lid on to steam for 5 minutes, then fluff the quinoa with a fork.\n2. To cool the quinoa quickly, spread it on a baking sheet and place it in the freezer for two to three minutes until it reaches room temperature.\n3. Finally, chop the parsley and mint. Thinly slice the green onions. Finely chop the tomato, removing the core and the seeds. Finely chop the cucumber.\n4. Juice the lemon and whisk it together with the olive oil. In a large bowl, toss the quinoa and vegetables with the dressing, kosher salt, and pepper. Taste and adjust flavors as necessary. Serve immediately or refrigerate for three to four days.",
      imageUrl:
        "https://assets.epicurious.com/photos/54b0b5bec6a78d1a4a60b208/1:1/w_2560%2Cc_limit/395939_quinoa-tabbouleh_1x1.jpg",
      image2Url:
        "https://www.acouplecooks.com/wp-content/uploads/2020/09/Quinoa-Tabbouleh-001.jpg",
      image3Url:
        "https://www.simplyquinoa.com/wp-content/uploads/2015/06/quinoa-tabbouleh-salad-3-1.jpg",
      tags: ["easy", "mediterranean"],
      ingredients: [
        { name: "Dry quinoa", measurement: "185g" },
        { name: "Chopped parsley", measurement: "160g" },
        { name: "Chopped fresh mint", measurement: "7g" },
        { name: "Green onions", measurement: "90g" },
        { name: "Tomatoes, seeded and chopped", measurement: "240g" },
        { name: "English cucumber", measurement: "75g" },
        { name: "Lemon juice", measurement: "90ml" },
        { name: "Olive oil", measurement: "56g" },
        { name: "Kosher salt", measurement: "3g" },
        { name: "Ground black pepper", measurement: "to taste" },
      ],
    },
    {
      name: "Pan Seared Scallops",
      details: "The bacon of the ocean",
      desc: "Pan-seared scallops represent a culinary delight that highlights the sweet and delicate flavors of these ocean treasures. This dish involves perfectly cooking sea scallops to achieve a golden sear, enhancing their natural brininess. Scallops have been part of human cuisine for centuries, with historical records indicating their consumption in various coastal cultures. In modern times, scallops continue to be a popular seafood choice, appreciated for their exquisite taste and versatility. Statistics reveal a consistent demand for scallops in the global seafood market. Pan-seared scallops are typically seasoned with a touch of kosher salt and cooked in a mixture of neutral oil and salted butter to create a beautifully caramelized crust. Served with lemon wedges for a burst of citrus freshness, this dish epitomizes the timeless appeal of seafood delicacies, providing a gourmet dining experience with minimal effort.",
      instructions:
        "1. Thaw scallops if frozen.\n2. Brine the scallops: In a shallow dish, mix four cups of room temperature water and two tablespoons of kosher salt. Place the scallops in the water and wait for 10 minutes.\n3. Remove the scallops and dry thoroughly. Lightly season with kosher salt.\n4. Heat the oil in a large skillet over high heat. If using a medium skillet, cook the scallops in two batches. Once the oil is hot, add the scallops and cook without turning for two to three minutes, until an even brown crust forms on the bottom.\n5. Flip scallops with tongs. Cook an additional 2 to 3 minutes on the other side, until a crust forms on the bottom and the center of the scallops is almost opaque.\n6. Turn off the heat and add the butter. When it melts, spoon the melted butter over the scallops and serve with a squeeze of lemon.",
      imageUrl:
        "https://www.wellseasonedstudio.com/wp-content/uploads/2020/06/Pan-seared-scallops-12.jpg",
      image2Url:
        "https://www.fifteenspatulas.com/wp-content/uploads/2014/06/Seared-Scallops-Fifteen-Spatulas-3.jpg",
      image3Url:
        "https://www.wholesomeyum.com/wp-content/uploads/2021/08/wholesomeyum-Pan-Seared-Scallops-Recipe-With-Garlic-Butter-14.jpg",
      tags: ["easy", "mediterranean"],
      ingredients: [
        { name: "Sea scallops", measurement: "1lb" },
        { name: "Kosher salt", measurement: "to taste" },
        { name: "Canola oil", measurement: "28g" },
        { name: "Salted butter", measurement: "14g" },
        { name: "Lemon wedges for serving", measurement: "to taste" },
      ],
    },
    {
      name: "Classic Gazpacho",
      details: "Because who wouldn’t want a cold soup",
      desc: "Classic gazpacho is a beloved Spanish cold soup renowned for its refreshing and vibrant flavors. This timeless recipe brings together a medley of fresh, quality ingredients. Ripe tomatoes, cucumbers, and red bell peppers form the core of this dish, reflecting its origins in the Andalusian region of Spain. Historical records suggest that gazpacho has roots dating back centuries, with variations evolving over time. It has become an iconic representation of the Mediterranean diet, known for its healthy and invigorating qualities. Statistical data underscores its enduring popularity, especially during the warm summer months when a chilled, tomato-based soup is particularly appealing. This dish is typically enhanced with shallots, garlic, olive oil, sherry vinegar, kosher salt, and a hint of smoked paprika. Gazpacho's appeal lies in its simplicity, relying on the natural flavors of its ingredients, and it remains a favorite among those who appreciate the art of Spanish cuisine.",
      instructions:
        "1. Place all ingredients in a blender, blend until smooth. Taste and adjust salt as needed.\n2. Refrigerate until cold, about 2 hours or up to 3 days.\n3. Serve topped with additional chopped veggies, a drizzle of olive oil, and toasted bread.",
      imageUrl:
        "https://www.acouplecooks.com/wp-content/uploads/2021/07/Gazpacho-002s.jpg",
      image2Url:
        "https://rosannaetc.com/wp-content/uploads/2020/07/Classic-gazpacho-500x500.jpeg",
      image3Url:
        "https://www.acouplecooks.com/wp-content/uploads/2021/07/Gazpacho-015.jpg",
      tags: ["easy", "mediterranean"],
      ingredients: [
        {
          name: "Ripe quality tomatoes, cored and roughly chopped",
          measurement: "2lbs",
        },
        { name: "Cucumber, peeled and roughly chopped", measurement: "70g" },
        { name: "Red bell pepper, roughly chopped", measurement: "70g" },
        { name: "Minced shallot", measurement: "15g" },
        { name: "Garlic", measurement: "3g" },
        { name: "Olive oil", measurement: "56g" },
        { name: "Sherry vinegar", measurement: "30g" },
        { name: "Kosher salt", measurement: "4g" },
        { name: "Smoked paprika", measurement: "1g" },
      ],
    },
    {
      name: "Hummus",
      details: "You know we had to have a hummus recipe!",
      desc: "Hummus, a creamy and versatile Middle Eastern dip, has made its way into kitchens and hearts around the world. This beloved dish has a storied history dating back to ancient Egypt and is rooted in the rich culinary traditions of the Middle East. Over the years, it has become a symbol of the region's cuisine and a staple of many households. Hummus is primarily made from chickpeas, tahini, lemon juice, garlic, and a touch of salt. Its popularity has surged globally, with statistics highlighting its prominence in international cuisine. With its healthy and plant-based ingredients, hummus has gained widespread recognition as a nutritious and flavorful spread or dip. Whether as a snack, appetizer, or accompaniment to a variety of dishes, hummus continues to captivate the palates of people from diverse backgrounds, uniting them through a shared love for its delectable simplicity.",
      instructions:
        "1. Peel the garlic. Drain the chickpeas into a liquid measuring cup. Juice the lemon.\n2. Add the garlic to the bowl of a food processor and process until finely chopped. Add chickpeas, lemon juice, tahini, kosher salt, and two tablespoons of water from the chickpea can. Puree for 30 seconds, then scrape down the bowl. Taste. If necessary, add one to two tablespoons of chickpea water. Puree for one to two minutes to come to a creamy consistency. Store refrigerated for seven to 10 days.",
      imageUrl:
        "https://www.inspiredtaste.net/wp-content/uploads/2019/07/The-Best-Homemade-Hummus-Recipe-1200.jpg",
      image2Url:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/08/Hummus-main-1.jpg",
      image3Url:
        "https://hips.hearstapps.com/hmg-prod/images/hummus-index-6463bace4bba5.jpeg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
      tags: ["easy", "mediterranean"],
      ingredients: [
        { name: "Garlic cloves", measurement: "3g" },
        { name: "Canned chickpeas", measurement: "425g" },
        { name: "Lemon juice", measurement: "56g" },
        { name: "Tahini", measurement: "63g" },
        { name: "Kosher salt", measurement: "5g" },
      ],
    },
    {
      name: "Baked Tilapia",
      details: "A delicious and light way to enjoy a popular fish",
      desc: "Baked tilapia is a delightful dish that showcases the natural flavors of this mild and versatile fish. With origins in various coastal regions, including the Mediterranean and North America, the history of tilapia as a culinary delight spans centuries. In recent years, tilapia has become one of the most farmed fish globally, making it widely accessible and sustainable. This particular recipe combines tilapia with an array of vibrant ingredients, including cherry tomatoes, shallots, garlic, lemon, and feta cheese. Statistical data highlights the increasing popularity of tilapia as a nutritious source of protein. The dish is seasoned with Italian herbs, smoked paprika, and capers for an exciting flavor profile. Baking the fish with these elements creates a harmonious combination of textures and tastes. Finished with fresh herbs and a dash of freshly ground black pepper, baked tilapia is a testament to the versatility of this beloved fish and its ability to adapt to diverse culinary traditions.",
      instructions:
        "1. Preheat oven to 425 degrees Fahrenheit.\n2. Chop tomatoes, shallot, garlic, and lemon as noted above.\n3. Place the chopped vegetables and lemon slices in the bottom of a 9 by 13 baking dish and mix with one tablespoon olive oil, a quarter teaspoon of salt, and fresh ground black pepper. Crumble the feta cheese into rough chunks and add it to the pan, tossing gently to combine.\n4. Pat the tilapia dry. Rub it with 1 tablespoon olive oil and half a teaspoon kosher salt, split between the fillets. Place it on top of the vegetables and feta in the pan. Sprinkle both fillets with the Italian seasoning and a few grinds of fresh ground black pepper, then add the red pepper flakes and smoked paprika. Sprinkle the capers over the top.\n5. Place the pan in the oven and bake for 20 to 25 minutes, until the fish is flaky, and the internal temperature is 140 degrees Fahrenheit when measured with a food thermometer. Garnish with chopped parsley and remove the lemon slices when serving.",
      imageUrl:
        "https://thealmondeater.com/wp-content/uploads/2023/04/baked-tilapia_web-6.jpg",
      image2Url:
        "https://www.wholesomeyum.com/wp-content/uploads/2021/09/wholesomeyum-Lemon-Butter-Baked-Tilapia-Recipe-14.jpg",
      image3Url:
        "https://diethood.com/wp-content/uploads/2020/10/Garlic-Butter-Baked-Tilapia-5.jpg",
      tags: ["mediterranean"],
      ingredients: [
        { name: "Halved cherry tomatoes", measurement: "284g" },
        { name: "Sliced shallot", measurement: "120g" },
        { name: "Minced garlic", measurement: "9g" },
        { name: "Thinly sliced lemon", measurement: "100g" },
        { name: "Olive oil", measurement: "28g" },
        { name: "Kosher salt", measurement: "5g" },
        { name: "Feta cheese", measurement: "113g" },
        { name: "Tilapia", measurement: "1.5lb" },
        { name: "Italian seasoning", measurement: "6g" },
        { name: "Red pepper flakes", measurement: "1g" },
        { name: "Smoked paprika", measurement: "2g" },
        { name: "Drained capers", measurement: "24g" },
        { name: "Ground black pepper", measurement: "to taste" },
      ],
    },
    {
      name: "Baba Ganoush",
      details: "A classic Mediterranean side dish!",
      desc: "Baba ganoush, a classic Middle Eastern dip, has been enjoyed for centuries and boasts deep historical roots in the Mediterranean and Levantine regions. The dish's name itself has various historical origins, but its appeal has remained timeless. Made primarily from roasted eggplant, tahini, lemon juice, garlic, and spices, baba ganoush has evolved to be a global favorite. The statistical data indicates a growing appreciation for Mediterranean cuisine, with baba ganoush often taking center stage as a symbol of healthy and flavorful eating. The dish is garnished with various toppings such as olive oil, chopped walnuts, pomegranate seeds, parsley leaves, and smoked paprika, adding texture and visual appeal. Baba ganoush's enduring popularity is a testament to its delicious simplicity and its role in bringing people together through the shared enjoyment of rich, smoky flavors.",
      instructions:
        "1. Preheat oven to 450 degrees Fahrenheit. Line a baking sheet with aluminum foil or parchment paper. Poke the eggplant all over with a fork to speed up the cooking process and put it on the prepared baking sheet. Bake for 30 minutes or until the eggplant is easily pierced with a knife. Remove from the oven and let cool.\n2. Once the eggplant is cool enough to handle, slice the eggplant in half and scrape out the insides into a food processor fitted with the blade attachment, removing as many large portions of seeds as you can. Add tahini, lemon juice, garlic, parsley, salt, cumin, and smoked paprika. Process until smooth, about 30 seconds. With the motor running, pour in the olive oil and process for another 30 seconds or until light and fluffy.\n3. Transfer the dip to a serving bowl and top with desired toppings. Serve with pita chips or bread.",
      imageUrl:
        "https://www.simplyrecipes.com/thmb/HMIn0Vh0HIyBOzV43Wv1FKNDQYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__07__Baba-Ganoush-LEAD-4a-bb45a735e742476e8c305d8962f220c1.jpg",
      image2Url:
        "https://www.seriouseats.com/thmb/nhgfDG68_YXD-qz-0b1C9L45lmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__02__20140225-baba-ganoush-recipe-food-lab-vegan-primary-3-30d3fa6c920a4c3dafce66e140a35905.jpg",
      image3Url:
        "https://littleferrarokitchen.com/wp-content/uploads/2023/06/authentic-baba-ganoush-dip.jpg.jpg",
      tags: ["easy", "mediterranean"],
      ingredients: [
        { name: "Eggplant", measurement: "2lbs" },
        { name: "Tahini", measurement: "45g" },
        { name: "Lemon juice", measurement: "45ml" },
        { name: "Minced garlic", measurement: "6g" },
        { name: "Parsley", measurement: "2g" },
        { name: "Kosher salt", measurement: "5g" },
        { name: "Cumin", measurement: "1g" },
        { name: "Smoked paprika", measurement: "1g" },
        { name: "Olive oil", measurement: "28g" },
      ],
    },
    {
      name: "Chicken Curry",
      details: "More depth of flavor than a 7 layer dip",
      desc: "Chicken curry, a culinary gem renowned for its rich and aromatic flavors, has a storied history rooted in the diverse regions of South Asia. Historical records indicate that variations of curry dishes have been enjoyed for centuries, evolving through the influences of various cultures. In the modern era, chicken curry has gained widespread popularity, both in its countries of origin and around the world. Statistical data reveals that it consistently ranks among the most consumed curry dishes globally. This recipe combines tender pieces of chicken with a fragrant blend of spices, including coriander, cumin, turmeric, and garam masala. The dish is simmered in a flavorful tomato and onion-based sauce, providing a harmonious balance of tastes and textures. Garnished with freshly chopped coriander, chicken curry is a testament to the enduring appeal of South Asian cuisine and its ability to unite people through the love of its complex and savory flavors.",
      instructions:
        "1. Gather the ingredients.\n2. Heat the oil in a deep skillet over medium heat and fry the onions until golden brown. Remove from the oil with a slotted spoon and drain on paper towels. Turn off heat, keeping oil in the pan.\n3. Grind the onions into a smooth paste in a food processor. Remove to a bowl and set aside.\n4. In the food processor, grind the tomatoes, garlic paste, and ginger paste together into a smooth paste.\n5. Heat the oil in the skillet again and add the onion paste. Fry for 2 to 3 minutes. Add the tomato paste and all the spices; coriander, cumin, turmeric, and red chili and garam masala powders. Mix well.\n6. Fry the masala until the oil begins to separate from it.\n7. Add the chicken to the masala and brown well, about 8 minutes.\n8. Add one and a half cups of hot water to the chicken, simmer, and cover. Cook until the chicken is tender, about 15 minutes.\n9. Garnish with chopped coriander and serve with hot chapatis, naans, or basmati rice.",
      imageUrl:
        "https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg",
      image2Url:
        "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=0.665xw:0.998xh;0.139xw,0.00240xh&resize=1200:*",
      image3Url:
        "https://www.177milkstreet.com/assets/site/Recipes/Hyderabadi-Chicken-Curry.jpg",
      tags: ["indian"],
      ingredients: [
        { name: "Canola or sunflower oil", measurement: "60g" },
        { name: "Spanish onion sliced thin", measurement: "300g" },
        { name: "Diced tomatoes", measurement: "400g" },
        { name: "Garlic paste", measurement: "30g" },
        { name: "Ginger paste", measurement: "15g" },
        { name: "Coriander powder", measurement: "5g" },
        { name: "Cumin powder", measurement: "3g" },
        { name: "Turmeric powder", measurement: "2g" },
        { name: "Red chili powder", measurement: "2g" },
        { name: "Garam masala", measurement: "5g" },
        {
          name: "Chicken pieces of your choice, skin removed",
          measurement: "2.25lbs",
        },
        { name: "Hot water", measurement: "360ml" },
      ],
    },
    {
      name: "Roasted Eggplant and Potatoes",
      details: "A very traditional dish perfected throughout generations",
      desc: "Baingan Aaloo Ki Subji, a classic North Indian dish, reflects the deep culinary heritage of the Indian subcontinent. Historical accounts indicate that this dish has been enjoyed for generations, with its origins traced back to regional variations of home-cooked meals. This vegetarian delight has gained worldwide recognition for its flavorful and satisfying qualities. Statistics highlight the enduring popularity of traditional Indian cuisine and the widespread appreciation for Baingan Aaloo Ki Subji in modern times. The dish combines roasted eggplants, potatoes, and a blend of aromatic spices, including cumin, coriander, and turmeric. It's known for its diverse regional adaptations, making it a beloved staple across India. Garnished with fresh coriander, this dish exemplifies the rich tapestry of Indian cooking and continues to be a beloved representation of its culinary traditions.",
      instructions:
        "1. Gather the ingredients.\n2. Prepare the eggplants by washing, patting dry, and cutting into quarters.\n3. Soak the eggplant in warm water.\n4. In a deep pan, heat the cooking oil on a medium flame until it is hot.\n5. Add the cumin seeds and fry them until they no longer splutter.\n6. Add the onions and fry them until they are slightly soft and translucent.\n7. Then, add the diced eggplant and the potato cubes, stir and mix well. Sauté it for about 2 minutes.\n8. Add the coriander powder, cumin powder, turmeric powder, the red chili powder, and the chopped tomato. Stir to mix everything well and then sauté for another 2 to 3 minutes.\n9. Sprinkle water on top of the vegetables and stir everything to mix well.\n10. Cover the dish and cook it until the vegetables are almost done. Check occasionally and stir to prevent burning or sticking to the bottom of the pan.\n11. When nearly cooked, remove the cover from the dish and stir.\n12. Cook until both the potatoes and the eggplant are soft and cooked throughout. This is meant to be a dryish dish so cook off any extra water that may be present in it.\n13. When done, turn off the heat and then garnish with chopped, fresh coriander leaves. Serve with hot chapatis and a daal dish if you like. A spicy, tangy pickle also tastes great with this delicious subji. You can even add raita if you wish.",
      imageUrl:
        "https://ministryofcurry.com/wp-content/uploads/2022/11/Aloo-Baingan-3.jpg",
      image2Url:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/aloo-baingan-recipe.jpg",
      image3Url:
        "https://greenbowl2soul.com/wp-content/uploads/2019/05/aloo-baingan-1-500x500.jpg",
      tags: ["indian"],
      ingredients: [
        { name: "Eggplant cut into 2in chunks", measurement: "400g" },
        { name: "Canola oil", measurement: "42g" },
        { name: "Cumin seeds", measurement: "3g" },
        { name: "Finely chopped onion", measurement: "200g" },
        { name: "Potatoes cut into 1in pieces", measurement: "400g" },
        { name: "Ground coriander", measurement: "3g" },
        { name: "Ground cumin", measurement: "3g" },
        { name: "Turmeric powder", measurement: "1g" },
        { name: "Chili powder", measurement: "1g" },
        { name: "Tomatoes cut into 1in cubes", measurement: "400g" },
        { name: "Kosher salt", measurement: "to taste" },
      ],
    },
    {
      name: "Bhajias",
      details: "An Indian street snack!",
      desc: "Bhajias, a beloved Indian snack, have a rich culinary history that can be traced back to the Indian subcontinent. These delectable fritters have been savored for centuries, with historical accounts showcasing the diversity of regional variations and ingredients used in their preparation. Bhajias, often associated with street food culture in India, have become a globally recognized and cherished dish. Statistical data underscores the enduring popularity of Indian street food, and bhajias are celebrated for their flavorful and crispy profile. The dish typically consists of vegetables like cauliflower, onion, potato, and spinach, as well as the addition of paneer for a delightful twist. The batter, seasoned with spices like red chili powder, turmeric, and carom seeds, lends a burst of flavor to the fried goodness. Bhajias, served hot and crispy, continue to be an emblem of Indian culinary traditions and a testament to the universality of delicious street snacks.",
      instructions:
        "1. Gather the ingredients.\n2. Mix the gram flour and all the spices with a little water at a time in a bowl, to make a thick batter, slightly thicker than pancake batter. Add salt to taste.\n3. If using cauliflower, separate the florets into bite-sized pieces. The potatoes and onions should be thinly sliced. Trim the stems off the spinach leaves. Cube the paneer into 1-inch cubes.\n4. Preheat oil and reduce the flame to medium. This will allow the bhajias to cook well both on the outside and inside.\n5. Coat the vegetables well with batter, and then deep fry till golden.\n6. Drain on paper towels and serve with tamarind chutney or tomato ketchup.",
      imageUrl:
        "https://www.sanjanafeasts.co.uk/wp-content/uploads/2019/12/Crispy-Potato-Bhajia-recipe.jpg",
      image2Url:
        "https://3.bp.blogspot.com/-elGixg0HhHU/T5LMGbpzDAI/AAAAAAAADMY/vF5WvYYKL-Q/s1600/IMG_6544.jpg",
      image3Url:
        "https://africanbites.com/wp-content/uploads/2015/03/IMG_3870.jpg",
      tags: ["indian", "easy"],
      ingredients: [
        { name: "Bengal gram flour", measurement: "125g" },
        { name: "Red chili powder", measurement: "1g" },
        { name: "Asafoetida", measurement: "2g" },
        { name: "Turmeric", measurement: "1g" },
        { name: "Thymol seeds", measurement: "5g" },
        { name: "Salt", measurement: "to taste" },
        { name: "Cauliflower", measurement: "600g" },
        { name: "Red onion", measurement: "150g" },
        { name: "Potato", measurement: "150g" },
        { name: "Spinach", measurement: "30g" },
        { name: "Paneer", measurement: "170 to 225" },
        { name: "Vegetable oil", measurement: "720ml" },
      ],
    },
    {
      name: "South Indian Lemon Rice",
      details: "An amazing side dish, rich in flavor and history!",
      desc: "South Indian lemon rice, known as 'Chitranna' in the region, is a vibrant and tangy dish that represents the culinary diversity of South India. Its history can be traced back to traditional South Indian cuisine, where rice is a staple. This dish, often prepared with leftover rice, is celebrated for its zesty and refreshing flavor. Statistical data underscores the popularity of lemon rice, as it is commonly prepared in South Indian households and cherished as a quick and flavorful meal. The preparation includes tempering with mustard seeds, curry leaves, and green chiles, which impart a distinct South Indian flavor. The addition of lemon juice, along with roasted peanuts, adds a delightful contrast and texture to the dish. South Indian lemon rice is a testament to the diversity and versatility of South Indian cuisine, known for its vibrant flavors and widespread appreciation.",
      instructions:
        "1. Gather the ingredients.\n2. In a large, dry skillet or saucepan, gently toast the coriander seeds over medium-low heat until fragrant, about 1 minute. Coarsely grind the seeds into a powder. Set aside.\n3. Heat the oil in the same pan on medium heat until it shimmers. Add the mustard seeds, curry leaves, and green chiles. Fry the mixture until the splattering stops.\n4. Add the ginger and peanuts. Fry the mixture until fragrant, about 1 minute more.\n5. Stir the turmeric powder and turn off the burner.\n6. Add the lemon juice and mix well.\n7. Add the rice, toasted coriander powder, and salt to taste. Mix thoroughly. Serve and enjoy.",
      imageUrl:
        "https://www.thespruceeats.com/thmb/8dNjMiMn_hXG7zUec9MPbrZkoOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/south-indian-lemon-rice-1957723-hero-02-18047e2504ad42fa96817e047c075ac3.jpg",
      image2Url:
        "https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe.jpg",
      image3Url:
        "https://www.thespruceeats.com/thmb/8dNjMiMn_hXG7zUec9MPbrZkoOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/south-indian-lemon-rice-1957723-hero-02-18047e2504ad42fa96817e047c075ac3.jpg",
      tags: ["indian"],
      ingredients: [
        { name: "Coriander seeds", measurement: "2g" },
        { name: "Canola oil", measurement: "28g" },
        { name: "Mustard seeds", measurement: "2g" },
        { name: "Curry leaves", measurement: "3" },
        { name: "Green chiles slit lengthwise", measurement: "20g" },
        { name: "Grated ginger", measurement: "10g" },
        { name: "Roasted unsalted peanuts", measurement: "65g" },
        { name: "Turmeric powder", measurement: "2g" },
        { name: "Lemon juice", measurement: "80ml" },
        { name: "Basmati rice", measurement: "400g" },
        { name: "Salt", measurement: "to taste" },
      ],
    },
    {
      name: "Prawn Masala",
      details: "The hands down best way to eat prawns",
      desc: "Prawn Masala, a delightful and aromatic seafood dish, is a testament to the rich and diverse culinary heritage of Indian cuisine. This delectable recipe showcases the use of prawns, a popular and cherished ingredient along India's vast coastline. Historical records indicate the widespread consumption of seafood in Indian coastal regions, with recipes like Prawn Masala evolving over time. Statistical data highlights the enduring popularity of seafood dishes in India. The preparation involves marinating prawns in a flavorful blend of garlic paste, cilantro, green chilies, lemon juice, and cooking oil. The prawns are then cooked in a fragrant gravy consisting of onions, tomatoes, and an array of aromatic spices such as coriander, cumin, turmeric, and garam masala. Prawn Masala is renowned for its complex and well-balanced flavors, and it continues to be a beloved representation of India's seafood culinary traditions.",
      instructions:
        "1. Gather the ingredients.\n2. In a blender, combine all of the marinade ingredients—garlic paste, cilantro, chilies, lemon juice, and oil—and grind until it's a smooth paste.\n3. In a large, non-metallic bowl, place the prawns and pour the marinade over them. Mix to coat all the prawns well.\n4. Cover the bowl and store in the refrigerator to marinate while you make the gravy.\n5. Gather the ingredients for the gravy; canola oil, Spanish onions, garlic paste, ginger paste, diced tomatoes, coriander, cumin, turmeric, red chili powder, garam masala, salt, and boiling water.\n6. In a heavy-bottomed pan, heat 4 tablespoons of cooking oil over medium heat.\n7. When the cooking oil is hot, add the chopped onions. Sautee until the onions begin to turn pale golden brown color.\n8. Add the garlic and ginger pastes and sauté for 1 minute.\n9. Add the tomatoes, all the powdered spices—coriander, cumin, turmeric, chili, and garam masala, and salt to taste. Mix well.\n10. Sauté the masala (onion-tomato-spice mixture) until the oil begins to separate from it. This can take up to 10 minutes.\n11. Put the prepared masala into the food processor and grind into a smooth paste (do not add water). Remove and place in a separate container.\n12. Using the same frying pan as before, turn the heat on medium.\n13. Once it is hot, add the prawns and marinade and sauté until the prawns just begin to turn opaque.\n14. Add the prepared masala and boiling water. Stir well.\n15. Cook for 1 to 2 minutes and turn off the heat.\n16. Garnish with chopped cilantro.",
      imageUrl:
        "https://kitchenmai.com/wp-content/uploads/2020/09/coconut_prawn_masala_blog.jpg",
      image2Url:
        "https://www.yummytummyaarthi.com/wp-content/uploads/2013/12/1-8.jpg",
      image3Url:
        "https://www.sainsburysmagazine.co.uk/media/7386/download/2_PrawnCurry.jpg?v=1",
      tags: ["indian"],
      ingredients: [
        { name: "Garlic paste for marinade", measurement: "15g" },
        { name: "Cilantro for marinade", measurement: "120g" },
        { name: "Green chilies for marinade", measurement: "20g" },
        { name: "Lemon juice for marinade", measurement: "15ml" },
        { name: "Canola oil for marinade", measurement: "14g" },
        { name: "Canola oil for gravy", measurement: "56g" },
        { name: "Chopped Spanish onion for gravy", measurement: "300g" },
        { name: "Garlic paste for gravy", measurement: "30g" },
        { name: "Ginger paste for gravy", measurement: "15g" },
        { name: "Diced tomatoes for gravy", measurement: "300g" },
        { name: "Coriander for gravy", measurement: "4g" },
        { name: "Cumin for gravy", measurement: "2g" },
        { name: "Turmeric for gravy", measurement: "1g" },
        { name: "Chili powder for gravy", measurement: "1g" },
        { name: "Garam masala for gravy", measurement: "4g" },
        { name: "Salt for gravy", measurement: "to taste" },
        { name: "Boiling water for gravy", measurement: "60ml" },
      ],
    },
    {
      name: "Butter Chicken",
      details: "It’s exactly as good as the name leads you to think",
      desc: "Butter Chicken, a beloved and iconic dish of Indian cuisine, has a storied history dating back to the mid-20th century in Delhi, India. Also known as 'Murgh Makhani,' it is celebrated for its rich and creamy tomato-based sauce, combined with tender pieces of chicken. This dish has become a staple in Indian restaurants worldwide and has earned its place as one of the most recognized and cherished Indian recipes. Statistical data underlines the global popularity of Butter Chicken, with its creamy, spiced, and tomato-infused sauce delighting palates across diverse cultures. The preparation typically involves marinating chicken in a mixture of lemon juice, olive oil, and spices before cooking it in a flavorful gravy with onions, garlic, ginger, butter, and tomato puree. The addition of heavy cream gives it a luscious, velvety texture. Served with fragrant basmati rice, Butter Chicken stands as a symbol of Indian culinary excellence and cultural exchange.",
      instructions:
        "1. Gather the ingredients.\n2. In a medium bowl, place the chicken pieces and add the lemon juice, 1 tablespoon of olive oil, and 2 teaspoons curry powder.\n3. Toss to coat the chicken, cover, and set aside.\n4. In a heavy skillet over medium heat, warm up the remaining olive oil with one tablespoon of butter.\n5. Add the onion, garlic, and ginger and sauté for one minute.\n6. Add the remaining curry powder and remaining butter. Stir well.\n7. Add the pepper, salt, and tomato puree. Mix well and simmer for 5 minutes, stirring frequently.\n8. Stir in the skillet the marinated chicken pieces with their juices.\n9. Bring the chicken to a boil, then reduce the heat and simmer for about 11 to 15 minutes until the chicken is thoroughly cooked to 165 F as tested with an instant-read thermometer.\n10. Stir in the heavy cream and mix. Cook for one more minute.\n11. Turn off the heat and let the chicken rest for 2 to 5 minutes.\n12. Serve the chicken over basmati rice.",
      imageUrl:
        "https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg",
      image2Url:
        "https://littlespicejar.com/wp-content/uploads/2016/02/Finger-Lickin-Butter-Chicken-14-720x720.jpg",
      image3Url:
        "https://cravinghomecooked.com/wp-content/uploads/2020/06/butter-chicken-1.jpg",
      tags: ["indian"],
      ingredients: [
        { name: "Boneless chicken breast", measurement: "907g" },
        { name: "Lemon juice", measurement: "30g" },
        { name: "Olive oil", measurement: "28g" },
        { name: "Curry powder", measurement: "6g" },
        { name: "Thinly sliced Spanish onion", measurement: "150g" },
        { name: "Minced garlic", measurement: "9g" },
        { name: "Chopped ginger", measurement: "10g" },
        { name: "Butter", measurement: "42g" },
        { name: "Ground white pepper", measurement: "0.5g" },
        { name: "Salt", measurement: "3g" },
        { name: "Tomato puree", measurement: "480g" },
        { name: "Heavy cream", measurement: "120g" },
        { name: "Basmati rice", measurement: "555g" },
      ],
    },
    {
      name: "Sada Roti",
      details: "A carb really is the ultimate side",
      desc: "Sada Roti, a traditional flatbread hailing from the Caribbean, particularly Trinidad and Tobago, is not only a culinary staple but also a symbol of cultural heritage. This unleavened, simple bread has its roots in Indian cuisine, reflecting the historical migration of indentured laborers from the Indian subcontinent to the Caribbean. Sada Roti, known for its minimal ingredients, is made from a dough of all-purpose flour, water, baking powder, salt, and a touch of vegetable oil or ghee. The dough is rolled out and cooked on a hot griddle or tava, resulting in a soft, slightly chewy bread that perfectly complements various Caribbean dishes, such as curries and stews. Over time, it has become a cherished part of Trinidadian and Tobagonian cuisine, reflecting the multicultural tapestry of the islands and the enduring impact of Indian culinary traditions on Caribbean food culture.",
      instructions:
        "1. Gather the ingredients.\n2. In a large bowl, thoroughly mix the flour, baking powder, salt, and sugar.\n3. Add 1 tablespoon of oil, or ghee if using, and mix it into the flour.\n4. Add just enough water to knead and make a dough. Start with 3/4 cup of water and knead the dough, adding a little bit more water at a time if you deem it necessary. Not all flours are alike, and not all doughs need the same amounts of water. The dough needs to be soft and pliable, and you'll get that after a few minutes of kneading, between 4 and 8.\n5. Form a ball with the dough and rub some of the remaining oil on top to prevent the dough from forming a skin. Cover and let rest for 30 minutes.\n6. Heat a cast iron griddle, pan, or tawah if you have one, over medium heat.\n7. Cut the dough into 4 equal pieces. Cover the rest of the dough as you work with one piece at a time.\n8. Lightly flour your work surface and rolling pin.\n9. Form one piece of the dough into a ball, then flatten it into a disk. Roll it out into a 5-inch circle of about 1/4 inch thickness.\n10. Transfer the dough disc to the heated griddle or pan and lower the heat to medium-low. Let cook on one side until the roti puffs up.\n11. Flip the roti and cook the other side for 1 or 2 minutes. Remove roti from the pan and wrap loosely in a clean kitchen towel, or any flour-bag type of fabric.\n12. Repeat the process with the remaining pieces of dough. Serve warm.",
      imageUrl:
        "https://www.thespruceeats.com/thmb/zlk6PmbAGmDBvvtM2Uj7G7sgAc0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sada-roti-2138052-Hero_01-c121ed4e32cd4224a358c7096a068650.jpg",
      image2Url:
        "https://metemgee.com/wp-content/uploads/2023/04/Inflated-sada-roti.jpg",
      image3Url:
        "https://www.shutterstock.com/shutterstock/photos/2301393851/display_1500/stock-photo-chapati-also-known-as-roti-rooti-rotli-rotta-safati-shabaati-phulka-chapo-sada-roti-poli-2301393851.jpg",
      tags: ["indian"],
      ingredients: [
        { name: "All-purpose flour", measurement: "360g" },
        { name: "Baking powder", measurement: "12g" },
        { name: "Salt", measurement: "6g" },
        { name: "Granulated sugar", measurement: "4g" },
        { name: "Canola oil or ghee", measurement: "21g" },
        { name: "Warm water", measurement: "296g" },
      ],
    },
    {
      name: "Kadhi",
      details: "A tasty sauce to pair without just about anything!",
      desc: "Kadhi, a classic Indian dish known for its comforting and tangy flavors, has a rich historical and cultural significance. Hailing from the diverse regional cuisines of India, Kadhi's recipe can vary from one region to another, with each version offering a unique twist on this beloved dish. The core of Kadhi typically includes a mixture of yogurt and besan (gram flour), creating a creamy and flavorful base. The addition of spices like cumin seeds, green chilies, and aromatic curry leaves imparts depth to the dish. Kadhi is not only popular in homes across India but has also made its mark globally, thanks to its delicious combination of sour and spicy notes. The dish's statistical prominence is highlighted by its presence in countless Indian households and restaurants, where it's often served with rice or steamed rice cakes (dhokla). Kadhi stands as a testament to India's culinary diversity, and its variations reflect the country's rich gastronomic tapestry.",
      instructions:
        "1. Gather the ingredients.\n2. Heat a griddle over medium heat. When hot, add the cumin seeds and dry roast until they are slightly fragrant and start to darken in color. Set aside to cool.\n3. Combine the grated coconut, green chilies, and toasted cumin seeds in a food processor and grind to a smooth paste.\n4. In a bowl, whisk the yogurt until smooth; add the water and stir to blend well.\n5. Add the coconut-spice paste and salt to taste and stir well.\n6. Transfer the mixture to a heavy-bottomed pan and heat slowly over medium heat. Stir occasionally to prevent the mixture from sticking to the pan or scorching.\n7. Meanwhile, heat the vegetable oil or ghee in a small pan over medium heat; add the dry red chilies, cumin seeds, and curry leaves. Be very careful to avoid getting burned as the chilies, seeds, and leaves will cause the oil to splutter. Cook until the spluttering stops.\n8. Just before the yogurt mixture comes to a boil, turn off the heat and add the oil, chilies, seeds, and leaves.\n9. Spoon into a large bowl or individual bowls and garnish with freshly chopped coriander.",
      imageUrl:
        "https://static.toiimg.com/thumb/89721602.cms?imgsize=75354&width=800&height=800",
      image2Url:
        "https://shwetainthekitchen.com/wp-content/uploads/2020/10/IMG_9683.jpg",
      image3Url:
        "https://www.flourandspiceblog.com/wp-content/uploads/2023/03/IMG_2162.jpg",
      tags: ["indian"],
      ingredients: [
        { name: "Cumin seeds", measurement: "24g" },
        { name: "Grated coconut", measurement: "250g" },
        { name: "Tangy plain yogurt", measurement: "720g" },
        { name: "Water", measurement: "240g" },
        { name: "Salt", measurement: "1g" },
        { name: "Canola oil", measurement: "42g" },
        { name: "Dry red chilies", measurement: "6g" },
        { name: "Curry leaves", measurement: "10" },
      ],
    },
    {
      name: "Pesto Salmon",
      details: "Take an entire salmon and just bathe it in this pesto",
      desc: "Pesto Salmon, a delectable fusion of flavors, beautifully combines the richness of salmon with the vibrant essence of basil pesto. This dish showcases the versatility of salmon, a prized seafood known for its heart-healthy omega-3 fatty acids. The salmon fillets, seasoned with kosher salt and freshly ground black pepper, are brushed with olive oil and then generously coated with basil pesto, which brings forth the aromatic intensity of fresh basil, garlic, pine nuts, and Parmesan cheese. The addition of toasted and chopped pine nuts not only contributes a delightful crunch but also enhances the nutty notes of the dish. The grates of lemon zest add a refreshing and zesty touch. Pesto Salmon is more than a delightful meal; it's a testament to the culinary artistry of combining flavors and celebrating the Mediterranean influence on contemporary cuisine. In terms of statistics, salmon is among the most widely consumed fish globally, and its enduring popularity is a testament to its exceptional taste and nutritional value.",
      instructions:
        "1. Preheat the oven to 325 degrees Fahrenheit.\n2. While the oven preheats, in a shallow dish stir together 4 cups room temperature water and 3 tablespoons kosher salt until it dissolves. Place the salmon in the water and wait for 15 minutes.\n3.  Rub the bottom of a baking dish with olive oil. Pat each piece of salmon dry and place it on the pan. Sprinkle the salmon with eighth teaspoon kosher salt  for each of the 4 fillets and fresh ground pepper. Cover pan with foil and bake the salmon for 10 minutes. Then remove the foil bake again for 3 to 6 minutes, depending on thickness, until just tender and pink at the center. A 1-inch thick fillet should cook in about 15 minutes total.\n4. When the salmon is done, spoon the pesto over the salmon. Sprinkle it with chopped pine nuts and if desired, a bit of lemon zest. Serve immediately.",
      imageUrl:
        "https://www.acouplecooks.com/wp-content/uploads/2020/08/Pesto-Salmon-013.jpg",
      image2Url:
        "https://cookingwithmammac.com/wp-content/uploads/2018/07/1200-Baked-Pesto-Salmon-Recipe-Photo.jpg",
      image3Url:
        "https://sailorbailey.com/wp-content/uploads/2023/03/Salmon-Pesto-Pasta2.jpg",
      tags: ["seafood", "italian"],
      ingredients: [
        { name: "Salmon Filet", measurement: "680g" },
        { name: "Olive oil for brushing", measurement: "2g" },
        { name: "Kosher salt", measurement: "3g" },
        { name: "Ground black pepper", measurement: "1g" },
        { name: "Basil pesto", measurement: "60g" },
        { name: "Toasted and chopped pine nuts", measurement: "12g" },
        { name: "Lemon zest", measurement: "1g" },
      ],
    },
    {
      name: "Scallop Pasta with Lemon and Herbs",
      details: "A perfect summer pasta",
      desc: "Scallop Pasta with Lemon and Herbs is a delightful culinary creation that harmoniously combines the briny goodness of sea scallops with the fresh and zesty notes of lemon and fragrant herbs. Linguine or your preferred long pasta variety serves as the perfect canvas for this exquisite dish, ensuring that every bite is filled with flavor and texture. The sea scallops, cooked to tender perfection, create a delectable contrast to the al dente pasta. The sauce, composed of salted butter, lemon zest, minced garlic, and a blend of fresh herbs, infuses every element of this dish with aromatic charm. Baby greens, such as spinach or kale, contribute a touch of verdant elegance. Grated Parmesan cheese, if desired, adds a final layer of richness. Scallop Pasta with Lemon and Herbs is not just a culinary delight; it's a celebration of seafood and herb-infused simplicity that brings the taste of the ocean to your plate.",
      instructions:
        "1. Thaw the scallops, if frozen\n2. Start a pot of well salted water to a boil. Boil the pasta until it is just al dente. Start tasting a few minutes before the package recommends: you want it to be tender but still a little firm on the inside; usually around 7 to 8 minutes. Drain the pasta.\n3. Meanwhile, in a shallow dish, mix 4 cups room temperature water and 2 tablespoons kosher salt. Place the scallops in the water and wait for 10 minutes.\n4. Remove the scallops and dry thoroughly. Lightly season with a several pinches kosher salt. Heat the oil in a large skillet over high heat. If using a medium skillet, cook the scallops in two batches. Once the oil is hot, add the scallops and cook without turning for 2 to 3 minutes,  until an even brown crust clearly forms on bottom.\n5. Flip scallops with tongs. Cook additional 2 to 3 minutes on the other side, until a crust just forms on bottom and the center of the scallop is almost opaque. Remove the scallops from the skillet to a plate and turn off the heat.\n6. Turn on the heat to low. Add the butter and allow it to melt. Add the lemon zest, minced garlic and chopped herbs. Scrape the bottom of the pan with a spatula to release flavor from any browned bits stuck to the pan. Cook 1 minute until fragrant, adjusting the heat so the garlic is just sizzling but so it doesn’t brown.\n7. Add the milk, pasta, kosher salt, and greens and return the heat to medium; cook until greens are wilted. Return the scallops to the pan and cook for a few seconds until just warm. Add lots of fresh ground black pepper. Taste and add additional salt if necessary. Serve with drizzle of olive oil and if desired, grated Parmesan cheese.",
      imageUrl:
        "https://whatsgabycooking.com/wp-content/uploads/2023/03/WGC-__-Lemon-Garlic-Scallop-Pasta-2.jpg",
      image2Url:
        "https://www.acouplecooks.com/wp-content/uploads/2020/09/Scallop-Pasta-005.jpg",
      image3Url:
        "https://static01.nyt.com/images/2019/02/04/dining/ch-pasta-with-scallops-tomatoes-and-herbs/ch-pasta-with-scallops-tomatoes-and-herbs-videoSixteenByNineJumbo1600-v2.jpg",
      tags: ["seafood"],
      ingredients: [
        { name: "Linguine noodles", measurement: "226g" },
        { name: "Sea scallops", measurement: "1lb" },
        { name: "Kosher salt", measurement: "to taste" },
        { name: "Canola oil", measurement: "30g" },
        { name: "Salted butter", measurement: "56g" },
        { name: "Lemon zest", measurement: "6g" },
        { name: "Minced garlic", measurement: "6g" },
        { name: "Fine herbs", measurement: "6g" },
        { name: "Whole milk", measurement: "120g" },
        { name: "Spinach", measurement: "30g" },
        { name: "Kosher salt for sauce", measurement: "2g" },
        { name: "Ground black pepper", measurement: "to taste" },
        { name: "Grated parmesan", measurement: "to taste" },
      ],
    },
    {
      name: "Shrimp Burger",
      details: "For your pescatarian homie",
      desc: "A shrimp burger is a delectable seafood delight, combining the sweet and succulent flavors of shrimp with an array of aromatic seasonings. In this recipe, 1 1/2 pounds of tender shrimp are blended with ingredients like white onion, fresh parsley, and a harmonious mix of spices, including smoked paprika, garlic powder, and cumin. The result is a flavorful patty that's seared to perfection in olive oil, creating a crispy exterior while preserving the juicy interior. Served with your choice of condiments, such as mustard sauce, tartar sauce, or remoulade, this shrimp burger is a culinary masterpiece that offers a taste of the sea with each satisfying bite.",
      instructions:
        "1. Remove all shells from the shrimp, rinse it, and pat it dry.\n2. In a food processor, pulse the onion and garlic several times until minced. Add the shrimp, parsley, salt, paprika, garlic powder, onion powder, dried thyme, fennel, cumin, and cayenne. Pulse 15 to 20 times until ground, but not pureed. Form the mixture into 4 patties and place them on a plate or in a sealed container. Refrigerate 15 minutes to allow them to set.\n3. In a large, heavy bottomed, skillet, heat the olive oil over medium high heat. Cook 4 to 5 minutes per side until browned and interior temperature reaches 145°F. Alternatively, brush the patties with olive oil and grill on direct medium-high heat for 3 to 4 minutes per side and interior temperature reach 145°F.\n4. Serve on burger bun with lettuce, tomato and onion slices, along with mustard sauce, tartar sauce or remoulade.",
      imageUrl:
        "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2022-03_Shrimp-Burger%2F2022-03-16_ATK-0434",
      image2Url:
        "https://www.thespruceeats.com/thmb/DWtzSvrnd5yW5UA1dPMd8W_AeVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shrimp-burgers-4800594-hero-68c49a8421fe425182ab485347007eac.jpg",
      image3Url:
        "https://static01.nyt.com/images/2017/07/19/dining/19COOKING-BURGER2/19COOKING-BURGER2-superJumbo.jpg",
      tags: ["seafood", "sandwich"],
      ingredients: [
        { name: "Shrimp", measurement: "680g" },
        { name: "Spanish onion", measurement: "28g" },
        { name: "Garlic clove", measurement: "5g" },
        { name: "Parsley", measurement: "20g" },
        { name: "Kosher salt", measurement: "4g" },
        { name: "Smoked paprika", measurement: "5g" },
        { name: "Garlic powder", measurement: "4g" },
        { name: "Onion powder", measurement: "4g" },
        { name: "Dry thyme", measurement: "2g" },
        { name: "Fennel Seed", measurement: "1g" },
        { name: "Cumin", measurement: "1g" },
        { name: "Cayenne", measurement: "1g" },
        { name: "Olive oil", measurement: "42g" },
      ],
    },
    {
      name: "Fish Sticks",
      details: "Who doesn’t love a good fish stick, right?",
      desc: "Sea bass fish sticks, a delightful twist on the classic fish stick, blend culinary influences from various cultures. While the exact origins of fish sticks are debated, their popularity surged in the mid-20th century when they became a convenient and beloved fast-food option. This recipe elevates the concept with sea bass, a firm and flavorful fish, and an accompanying aioli featuring tarragon, lime, and garlic. The use of sea bass adds a touch of luxury to this nostalgic dish, making it a favorite in seafood cuisine. Statistically, the consumption of fish and seafood continues to rise, reflecting a growing trend toward healthier eating habits, as fish is a source of lean protein and essential nutrients. The aioli, with its mix of Mediterranean and contemporary flavors, showcases how culinary traditions evolve over time to create unique and satisfying dishes.",
      instructions:
        "1. To make the garlic-infused olive oil, add the two peeled, lightly crushed garlic cloves to the olive oil in a small saucepan and simmer on very low heat. Be very careful not to let the garlic get brown. Turn off the flame after just a few minutes and let the garlic sit in the oil until it softens. Let cool before making the aioli.\n2. Add egg yolks, the cooled cooked garlic cloves, lime juice, lime zest, tarragon, salt, and pepper to a blender. Blend until smooth.\n3. With the blender running, slowly add the vegetable oil and garlic-infused olive oil. The aioli will be thick and creamy and a lovely light green. Adjust seasoning and citrus to your taste.\n4. Heat your oil. Fry fish sticks in approximately 4 inches of oil in a heavy sauté or saucepan at 375 degrees Fahrenheit.\n5. Cut your fish into pieces, dip in egg, and then in panko.\n6. Carefully drop your fish sticks into hot oil and fry until golden brown. Remove and place on a paper towel-lined plate to absorb any extra oil. Add additional salt if you like directly after they come out of the oil.\n7. Serve with aioli as a dipping sauce.",
      imageUrl:
        "https://images.food52.com/eKq6do-PewR-8Xuew4OPr82Km2c=/965x643/filters:format(webp)/e6140a68-5fc6-4ee9-a94e-a1d4cf811e0f--food52_02-21-12-8375.jpg",
      image2Url:
        "https://www.crunchycreamysweet.com/wp-content/uploads/2019/04/homemade-fish-sticks-3A-500x500.jpg",
      image3Url:
        "https://www.recipetineats.com/wp-content/uploads/2020/01/Fish-Fingers_5.jpg?w=500&h=375&crop=1",
      tags: ["seafood"],
      ingredients: [
        { name: "Frozen calamari tubes", measurement: "1lb" },
        { name: "Kosher salt", measurement: "to taste" },
        { name: "Skim milk", measurement: "118ml" },
        { name: "All-purpose flour", measurement: "180g" },
        { name: "Cornstarch", measurement: "40g" },
        { name: "Baking powder", measurement: "2g" },
        { name: "Dry oregano", measurement: "2g" },
        { name: "Black pepper", measurement: "1g" },
        { name: "Cayenne pepper", measurement: "1g" },
        { name: "Grape seed oil", measurement: "as needed" },
      ],
    },
    {
      name: "Blackened Shrimp",
      details: "A quick and delicious game day snack",
      desc: "Blackened shrimp is a popular dish in Cajun and Creole cuisine, hailing from the Southern United States, particularly Louisiana. This spicy and flavorful recipe reflects the rich culinary heritage of the region, blending French, Spanish, African, and Native American influences. The use of ingredients like smoked paprika, garlic, and cayenne pepper adds depth and heat to the dish. In terms of statistics, seafood, including shrimp, is a significant part of Louisiana's economy, with the state being one of the leading shrimp producers in the United States. Historically, blackening as a cooking technique gained popularity in the 1980s, largely attributed to the famed Chef Paul Prudhomme. This method involves heavily seasoning the shrimp, then searing them in a hot skillet to create a crispy, flavorful crust, resulting in a delectable and culturally significant dish.",
      instructions:
        "1. Thaw the shrimp. Then pat the shrimp dry with a clean towel or paper towel.\n2. Place the shrimp in a bowl and drizzle with olive oil to coat. Sprinkle with seasonings. Mix with your hands to combine.\n3. Preheat a grill to medium-high heat 375 to 450 degrees. Place the shrimp directly on the grates and grill for 1 to 2 minutes per side until bright pink and cooked through.\n4. Heat 2 tablespoons butter or olive oil in a large cast iron skillet or stainless steel skillet over high heat. Add the shrimp in 2 batches, making sure they are in a single layer. Cook 2 minutes on one side until lightly charred, then turn with tongs and cook another 20 seconds until opaque. For the second batch, add a bit of olive oil if necessary to coat the bottom of the pan.\n5. Squeeze with fresh lemon juice from several wedges of the lemon, to taste. Serve immediately.",
      imageUrl:
        "https://saltandbaker.com/wp-content/uploads/2022/02/blackened-shrimp-square.jpg",
      image2Url:
        "https://www.jocooks.com/wp-content/uploads/2019/01/blackened-shrimp-1-500x500.jpg",
      image3Url:
        "https://keviniscooking.com/wp-content/uploads/2020/12/Blackened-Shrimp-square.jpg",
      tags: ["seafood"],
      ingredients: [
        { name: "Smoked paprika", measurement: "28g" },
        { name: "Onion powder", measurement: "14g" },
        { name: "Garlic powder", measurement: "14g" },
        { name: "Dry oregano", measurement: "7g" },
        { name: "Ground black pepper", measurement: "5g" },
        { name: "Celery seed", measurement: "5g" },
        { name: "Kosher salt", measurement: "5g" },
        { name: "Allspice", measurement: "2g" },
        { name: "Cloves", measurement: "1g" },
        { name: "Cayenne", measurement: "1g" },
        { name: "Shrimp peeled and deveined", measurement: "1lb" },
        { name: "Olive oil", measurement: "14g" },
      ],
    },
    {
      name: "Pan Fried Cod",
      details: "A delicious cod recipe perfect for a date night at home",
      desc: "Pan-fried cod is a classic seafood dish that's both simple to prepare and full of flavor. This recipe features 680 grams of cod fillets seasoned with smoked paprika, garlic powder, onion powder, celery seed, and kosher salt. The fish is then pan-fried to a golden-brown perfection in a combination of 14 grams of butter and 28 grams of olive oil. A finishing touch of 15 grams of lemon juice and a garnish of finely chopped Italian parsley adds a burst of freshness to this delectable meal. With historical roots in traditional European cuisine, cod dishes have been enjoyed for centuries, and this recipe continues to be a beloved favorite for seafood enthusiasts.",
      instructions:
        "1. In a small bowl, combine the smoked paprika, garlic powder, onion powder, celery seed, and kosher salt. Pat the cod dry and sprinkle all sides with the seasoning.\n2. Heat a large skillet over medium high heat and add the butter and olive oil. When butter is melted, add the cod and cook for 2 minutes.\n3. Flip the cod and pour the lemon juice over the fish. Cook an additional 1 to 2 minutes until the cod is tender and starts to flake when you prick it with a fork. Remove from the heat and sprinkle with the parsley. Serve immediately, drizzled with the juices from the pan.",
      imageUrl:
        "https://cookingwithmammac.com/wp-content/uploads/2023/05/1200-Pan-Seared-Cod-Loin-Photo.jpg",
      image2Url:
        "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2018/05/pan-fried-cod-5.jpg",
      image3Url:
        "https://www.lemonblossoms.com/wp-content/uploads/2022/09/Pan-Seared-Cod-S3.jpg",
      tags: ["seafood"],
      ingredients: [
        { name: "Cod", measurement: "680g" },
        { name: "Smoked paprika", measurement: "2g" },
        { name: "Garlic powder", measurement: "1g" },
        { name: "Onion powder", measurement: "1g" },
        { name: "Celery seed", measurement: "0.5g" },
        { name: "Kosher salt", measurement: "4g" },
        { name: "Butter", measurement: "14g" },
        { name: "Olive oil", measurement: "28g" },
        { name: "Lemon juice", measurement: "15g" },
      ],
    },
    {
      name: "Swordfish with Lemon and Capers",
      details: "You won't ever need another swordfish recipe",
      desc: "This easy swordfish recipe is a true culinary delight that celebrates the delicious flavors of fresh swordfish. The dish is prepared by seasoning 1 1/2 pounds of swordfish steaks with a blend of garlic powder, onion powder, celery seed, and kosher salt. The fish is then seared to perfection in a combination of olive oil and butter, creating a delightful crispy exterior. A flavorful sauce made with minced garlic, capers, and zesty lemon juice adds a burst of freshness to the dish. Served with lemon wedges for an extra pop of citrus, this swordfish recipe is a testament to the simplicity and charm of seafood cuisine, making it a delightful and culturally cherished dish.",
      instructions:
        "1. In a small bowl, combine the garlic powder, onion powder, celery seed, and kosher salt. Pat the swordfish dry and sprinkle all sides with the seasoning.\n2. Heat a large skillet over medium high heat and add the olive oil. Add the fillets and cook for 2 to 3 minutes per side, until browned and internal temperature reaches 145°F.\n3. Remove the swordfish steaks to a plate and reduce temperature to very low. Add the butter, garlic and capers cook until garlic is lightly browned, scraping the bottom of the pan while it cooks.\n4. Stir in lemon juice and drizzle over the fish. Serve immediately. Store leftovers up to 2 days refrigerated.",
      imageUrl:
        "https://365barrington.com/wp-content/uploads/2019/07/Heinens_swordfish_piccata_tableanddish-3575.jpg",
      image2Url:
        "https://images.food52.com/wBr1UDdSZwMIXa5AYPBajbLG_do=/1200x1200/8ae6da8d-1c12-45ac-a53b-00144af47a08--food52_05-14-13-2489.jpg",
      image3Url:
        "https://www.sippitysup.com/wp-content/uploads/2017/07/SwordfishWEB.jpg",
      tags: ["seafood"],
      ingredients: [
        { name: "Swordfish", measurement: "680g" },
        { name: "Garlic powder", measurement: "2g" },
        { name: "Onion powder", measurement: "2g" },
        { name: "Celery seed", measurement: "1g" },
        { name: "Kosher salt", measurement: "6g" },
        { name: "Olive oil", measurement: "42g" },
        { name: "Butter", measurement: "14g" },
        { name: "Garlic clove", measurement: "6g" },
        { name: "Capers", measurement: "14g" },
        { name: "Lemon juice", measurement: "15g" },
      ],
    },
    {
      name: "Fried Calamari",
      details: "The ultimate appetizer",
      desc: "Fried calamari, a beloved dish in Mediterranean and seafood cuisines, has a rich culinary history. Calamari, meaning 'squid' in Italian, is often prepared as crispy, golden rings and tentacles. While the exact origins of fried calamari are debated, it's widely appreciated in Southern European and Mediterranean cultures, with Greece and Italy being particularly known for their variations of this appetizing treat. Statistically, seafood consumption continues to be popular worldwide, offering a source of lean protein and essential nutrients. This dish is often served as an appetizer or snack, accompanied by lemon wedges and a dipping sauce. Its crispy texture and savory flavor make it a favorite among seafood enthusiasts, offering a delightful blend of cultural traditions and culinary creativity.",
      instructions:
        "1. Slice the calamari tubes into ¾-inch thick rings\n2. In a medium bowl, stir 1 teaspoon Diamond Crystal kosher salt in ½ cup milk\n3. Add the calamari rings to the milk mixture and refrigerate for 30 minutes.\n4. In a large bowl, whisk together the flour, cornstarch, baking powder, oregano, black pepper, and cayenne\n5. Prepare a large colander and set it on top of a large bowl. Using a pair of tongs, take a portion of the calamari rings shake off excess milk and toss the calamari in the flour mixture. Toss the calamari to coat evenly. Put the coated calamari in the colander. Repeat with the rest of the calamari.\n6. Turn your oven on a low 150 degrees F. Prepare a large sheet pan and set a wire rack on top. Top the wire rack with paper towel.\n7. Heat 4 inches of grape seed oil in a small cooking pot to somewhere between 350 and 365 degrees F. To test your oil, drop one calamari ring, many bubbles will form around it and the calamari will begin to float.\n8. Once your oil is ready, using a pair of tongs, gently add some of the calamari in and fry for about 3 minutes or until golden brown. Remove the calamari from the oil and arrange it on the paper towel on top of your prepared wire rack. Immediately season with kosher salt, then transfer to your warm oven to keep warm while you work on the rest. Repeat until you have fried all the calamari\n9. Transfer the fried calamari to a serving plate and finish with a squeeze of lemon juice",
      imageUrl:
        "https://www.dinneratthezoo.com/wp-content/uploads/2019/11/fried-calamari-67.jpg",
      image2Url:
        "https://www.themediterraneandish.com/wp-content/uploads/2021/02/fried-calamari-recipe-7.jpg",
      image3Url:
        "https://basilandbubbly.com/wp-content/uploads/2021/04/fried-calamari-6.jpg",
      tags: ["easy", "mediterranean", "seafood"],
      ingredients: [
        { name: "Frozen calamari tubes", measurement: "1 lb" },
        { name: "Kosher salt", measurement: "to taste" },
        { name: "Skim milk", measurement: "118 ml" },
        { name: "All-purpose flour", measurement: "180 g" },
        { name: "Cornstarch", measurement: "40 g" },
        { name: "Baking powder", measurement: "2 g" },
        { name: "Dry oregano", measurement: "2 g" },
        { name: "Black pepper", measurement: "1 g" },
        { name: "Cayenne pepper", measurement: "1 g" },
        { name: "Grapeseed oil", measurement: "as needed" },
      ],
    },
  ];

  for (const recipeData of recipesData) {
    // Create the recipe without specifying tags
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

    // Create or upsert the tags and associate them with the recipe
    for (const tagName of recipeData.tags) {
      const tag = await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName },
      });

      await prisma.recipetags.create({
        data: {
          tagId: tag.id,
          recipeId: recipe.id,
        },
      });
    }

    // Create or upsert the ingredients and associate them with the recipe
    for (const ingredientData of recipeData.ingredients) {
      const ingredient = await prisma.ingredient.upsert({
        where: { name: ingredientData.name },
        update: {},
        create: { name: ingredientData.name },
      });

      await prisma.ingredient_recipe.create({
        data: {
          ingredientId: ingredient.id,
          recipeId: recipe.id,
          measurement: ingredientData.measurement,
        },
      });
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
