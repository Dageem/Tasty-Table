const express = require('express');
const router = express.Router();

router.use("/recipe", require("./recipe"))
router.use("/users", require("./Users"))
router.use("/post", require("./Post"))
router.use("/tags", require("./Tags"))


module.exports = router;