const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/ProgramActions");

router.get("/", browse);

module.exports = router;
