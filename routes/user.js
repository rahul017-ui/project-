const router = require("express").Router();
const userController = require('../controllers/user');

router.post("/register", userController.register);
// router.post("/login", userController.createuser);
router.get("/:userId", userController.getusers);
router.get("/", userController.getuser);
router.put("/updateuser/:userId", userController.userupdate);
router.delete("/deleteUser/:userId", userController.deleteuser);

module.exports = router;
