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
      .send({ token, user: { userId: user.id, username: user.username, image: user.image!=="null"?user.image:null } });
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

    res.send({ token, user: { userId: user.id, username: user.username, image: user.image!=="null"?user.image:null } });
  } catch (err) {
    next(err);
  }
});

router.put("/edit", require('./middleware'), async (req, res,next)=>{
  try{
      const user = await  prisma.user.update({
          where: {id:req.user.id},
          data: req.body
      })
//i removed admin: user.admin, from under this and it didnt break
      res.send({userId:user.id, username: user.username, image: user.image!=="null"?user.image:null})

  } catch(err){
      next(err)
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

router.put("/edit", async (req, res, next) => {
  if (!req.user) {
    return res.send({});
  }
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    res.send(user);
  } catch (err) {
    next(err)
  }
})

module.exports = router;
