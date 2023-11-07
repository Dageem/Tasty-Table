const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/recipetags', async (req, res, next) => {
<<<<<<< Updated upstream
    // try {
    //   const recipetags = await prisma.recipetags.findMany({
    //     include: {
    //       tag: true,
    //     },
    //   });
    //   res.json(recipetags);
    // } catch (error) {
    //   console.error('Error fetching recipetags:', error);
    //   res.status(500).json({ error: 'Internal server error' });
    // }
    try{
        const allTags = await prisma.Tag.findMany();
        res.send(allTags)
    }catch(err){
        next(err)
=======
  try {
      const recipetags = await prisma.recipetags.findMany({
          include: {
              tag: true,
          },
      });
      res.send(recipetags);
  } catch (error) {
      console.error('Error fetching recipetags:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

  router.get('/popular', async (req, res, next) => {
    try {
      const popularTags = await prisma.$queryRaw`
        SELECT t.name, COUNT(rt."tagId")::bigint AS count
        FROM "Tag" t
        LEFT JOIN "Recipetags" rt ON t.id = rt."tagId"
        GROUP BY t.name;
      `;
  
      const result = popularTags
        .filter((row) => row.count > 0)
        .map((row) => ({
          name: row.name,
          count: Number(row.count),
        }));
  
      res.send(result);
    } catch (error) {
      console.error('Error fetching popular tags:', error);
      res.status(500).json({ error: 'Internal server error' });
>>>>>>> Stashed changes
    }
  })

module.exports = router;