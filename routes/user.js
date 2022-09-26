const router = require("express").Router();
const userController = require('../controllers/user');

router.post("/adduser", userController.createuser);
router.get("/:registrationId", userController.getusers);
router.get("/", userController.getuser);
router.put("/updateuser/:registrationId", userController.userupdate);
router.delete("/deleteUser/:registrationId", userController.deleteuser);

module.exports = router;
