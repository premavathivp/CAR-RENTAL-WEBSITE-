const express=require('express');
const router=express.Router();

const adminController=require('../controller/adminController')

router.post('/login',adminController.login);
router.get('/list', adminController.getAllAdmin);
router.get('/list/:id',adminController.getAdminById);
router.post('/logout',adminController.logout);

module.exports=router;
