const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



router.get('/', async (req,res,next)=>{
    try{
        const allpost= await prisma.post.findMany();
        res.send(allpost)
    }catch(err){
        next(err)
    }
})

router.get('/user/:userId', async (req,res,next)=>{
    try{
        const user = await prisma.post.findMany({
                where:{
                    userId: Number(req.params.userId)
                },
            });
            res.send(user)
    }catch(err){
        next(err)
    }
})
router.post('/', async (req,res,next)=>{
      try{
        const { title, content, userId } = req.body;

        if (!title || !content || !userId) {
            return res.status(400).json({ error: "Title, content, and userId are required!" });
        }

          const createpost = await prisma.post.create({
              data:{
                title: title,
                content: content,
                userId: userId
              }
          })
          res.send(createpost)
      }catch(err){
          next(err)
      }
  });

  router.put("/:id", async (req, res, next) => {

      try {
        const updatepost = await prisma.post.update({
          where:{
            id:Number(req.params.id)
          },
          data:req.body
        })
        
        res.send(updatepost);
      } catch (error) {
        next(error);
      }
    });

    router.delete("/:id", async (req, res, next) => {

        try {
          const deletepost= await prisma.post.delete({
            where:{
              id:Number(req.params.id)
            }
          })
      
          res.send(deletepost);
        } catch (error) {
          next(error);
        }
      });
    module.exports = router;