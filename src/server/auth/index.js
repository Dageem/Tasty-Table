const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  const salt_rounds = 5;

  const hashedPassword = await bcrypt.hash(req.body.password, salt_rounds);

  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
        admin: "user"
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT);

    res
      .status(201)
      .send({ token, user: { userId: user.id, username: user.username, image: user.image!=="null"?user.image:null, password: user.password!=="null"? user.password : null } });
      console.log('response payload: ', user)
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.body.username },
    });

    if (!user) {
      return res.status(401).send("Invalid Login");
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);

    if (!isValid) {
      return res.status(401).send("Invalid Login");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT);

    res.send({ token, user: { userId: user.id, username: user.username, image: user.image!=="null"?user.image:null, password: user.password!=="null"? user.password : null } });
    console.log('response payload: ', user)
  } catch (err) {
    next(err);
  }
});

// router.put("/edit", require('./middleware'), async (req, res,next)=>{
//   try{
//       const user = await  prisma.user.update({
//           where: {id:req.user.id},
//           data: req.body
//       })
// //i removed admin: user.admin, from under this and it didnt break
//       res.send({userId:user.id, username: user.username, image: user.image!=="null"?user.image:null, password: user.password})

//   } catch(err){
//       next(err)
//   }
// });



router.put("/edit", require('./middleware'), async (req, res) => {
  const saltRounds = 5;
  const { currentPassword, newPassword, image } = req.body;
  const userId = req.user.id;

  try {
      const user = await prisma.user.findUnique({ where: { id: userId } });

      // Update password if currentPassword and newPassword are provided
      if (currentPassword && newPassword) {
          const isValid = await bcrypt.compare(currentPassword, user.password);
          if (!isValid) {
              return res.status(401).send("Current password is incorrect.");
          }

          const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
          await prisma.user.update({
              where: { id: userId },
              data: { password: hashedNewPassword }
          });
      }

      // Update image if provided
      if (image) {
          await prisma.user.update({
              where: { id: userId },
              data: { image: image }
          });
      }

      const updatedUser = await prisma.user.findUnique({ where: { id: userId } });

      const token = jwt.sign({ id: updatedUser.id }, process.env.JWT);
      res.send({ 
          token, 
          user: { 
              userId: updatedUser.id, 
              username: updatedUser.username, 
              image: updatedUser.image !== "null" ? updatedUser.image : null,
              password: updatedUser.password !== "null" ? updatedUser.password : null 
          } 
      });

  } catch (error) {
      console.error(error);
      res.status(500).send("Error updating user profile.");
  }
});




router.get("/me", async (req, res, next) => {
  if (!req.user) {
    return res.send({});
  }
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
