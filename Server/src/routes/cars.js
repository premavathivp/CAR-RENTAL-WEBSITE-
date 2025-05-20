const express=require('express');
const router=express.Router();

const carController=require('../controller/carController')

router.get('/list', carController.getAllCars);
router.get('/list/:id',carController.getCarById);
router.post('/list/',carController.createCar);
router.patch('/list/:id',carController.updateCar);
router.delete('/list/:id',carController.deleteCarById);

module.exports=router;
