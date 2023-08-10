const express = require("express");
const { loginController , registerController } = require("../controllers/userController");
// router object 
const router = express.Router()



// router object

// POST || LOGIN
router.post('/login',loginController);





// POST || REGISTER USER
router.post('/register',registerController)


// routers 






module.exports = router 