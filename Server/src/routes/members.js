const express = require('express');
const router = express.Router();
const memberController = require('../controller/memberController');

router.post('/login', memberController.login);
router.get('/list/:id', memberController.getMemberById);
router.post('/logout', memberController.logout);

module.exports = router;














// const express=require('express');
// const router=express.Router();

// const memberController=require('../controller/memberController')

// router.post('/login',memberController.login);
// router.get('/list', memberController.getAllMembers);
// router.get('/list/:id',memberController.getMemberById);
// router.post('/list/',memberController.createMember);
// router.patch('/list/:id',memberController.updateMember);
// router.delete('/list/:id',memberController.deleteMemberById);
// router.post('/logout',memberController.logout);
// router.get('/activity/:id', memberController.getMemberActivity);


// module.exports=router;
