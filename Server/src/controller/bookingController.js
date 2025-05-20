const bookings=require('../model/bookingModel'); 

const login=(req,res)=>{
    res.send('login');
};

const getAllBookings = async(req,res) =>{
    const bookingList=await bookings.find({});
    res.status(200).json(bookingList);
};
const getBookingById=async(req,res)=>{
    const bookingList=await bookings.findById(req.params.id);
    res.status(200).json(bookingList);
};

const logout=(req,res)=>{
    res.send('logout successfully');
};
const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ message: 'Booking canceled successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error while cancelling booking' });
  }
};

module.exports={
    login,
    getAllBookings,
    getBookingById,
    cancelBooking,
    logout
}