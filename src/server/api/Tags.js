const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async (req,res,next)=>{
    try{
        const alltag= await prisma.tag.findMany();
        res.send(alltag)
    }catch(err){
        next(err)
    }
})

module.exports = router;