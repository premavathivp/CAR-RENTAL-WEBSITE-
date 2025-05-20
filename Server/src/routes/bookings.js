const express=require('express');
const router=express.Router();

const bookingController=require('../controller/bookingController')

router.post('/login',bookingController.login);
router.get('/list', bookingController.getAllBookings);
router.get('/list/:id',bookingController.getBookingById);
router.post('/logout',bookingController.logout);
router.delete('list/:id', bookingController.cancelBooking);

module.exports=router;
