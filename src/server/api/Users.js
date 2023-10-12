const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const { checkAuthenticated } = require("../middleware/auth");

// get all users
router.get("/", async (req, res, next) => {
    try {
      const allUsers = await prisma.user.findMany();
      res.send(allUsers);
    } catch (err) {
      next(err);
    }
  });

// get user by ID
router.get("/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json(user);
    } catch (err) {
        next(err);
    }
  });



// update a user grabbed by id
router.put("/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const updatedUserData = req.body;
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updatedUserData,
      });
  
      res.json(updatedUser);
    } catch (err) {
        next(err);
    }
  });

// delete a user grabbed by id
router.delete("/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      await prisma.user.delete({
        where: { id: userId },
      });
  
      res.status(204).json({ message: "User deleted successfully" });
    } catch (err) {
        next(err)
    }
  });

//recipe post by user?
// router.post("/:id", async (req, res) => {

// }) 

module.exports = router;
