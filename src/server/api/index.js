const express = require('express');
const router = express.Router();

router.use("/recipe", require("./recipe"))
router.use("/users", require("./Users"))


module.exports = router;