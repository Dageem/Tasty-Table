const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/recipetags', async (req, res, next) => {
    try {
      const recipetags = await prisma.recipetags.findMany({
        include: {
          tag: true,
        },
      });
      res.json(recipetags);
    } catch (error) {
      console.error('Error fetching recipetags:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    try{
        const allTags = await prisma.Tag.findMany();
        res.send(allTags)
    }catch(err){
        next(err)
    }
  })

module.exports = router;