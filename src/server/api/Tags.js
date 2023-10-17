const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
    try {
        const tags = await prisma.tag.findMany({
            select: {
                name: true
            },
            orderBy: {
                name: 'asc'
            }
        });

        const tagNames = tags.map(tag => tag.name);

        res.json(tagNames);
    } catch (error) {
        console.error('Error fetching tag names:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;