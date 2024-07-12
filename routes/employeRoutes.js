const express = require("express")
const router = express.Router();
const controller = require('../controllers/employeController')

router.post("/registeremployes", controller.registerEmploye);
router.get("/getEmploye",controller.getEmploye);

module.exports = router;

