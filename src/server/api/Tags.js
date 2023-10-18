const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/recipetags', async (req, res) => {
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
  });


module.exports = router;