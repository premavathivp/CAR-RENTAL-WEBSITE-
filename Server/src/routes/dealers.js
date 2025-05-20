const express=require('express');
const router=express.Router();

const dealerController=require('../controller/dealerController')

router.post('/login',dealerController.login);
router.get('/list', dealerController.getAllDealers);
router.get('/list/:id',dealerController.getDealerById);
router.patch('/list/:id',dealerController.updateDealer);
router.delete('/list/:id',dealerController.deleteDealerById);
router.post('/logout',dealerController.logout);

module.exports=router;
