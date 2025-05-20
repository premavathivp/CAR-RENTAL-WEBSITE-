const express =  require("express");
const app = express();

const PORT = 3000;

const memberRoutes=require('./src/routes/members');

 const adminRoutes=require('./src/routes/admins');

 const dealerRoutes=require('./src/routes/dealers');

 const carRoutes=require('./src/routes/cars');

 const bookingRoutes=require('./src/routes/bookings');

app.use('/api/members',memberRoutes);
app.use('/api/admins',adminRoutes);
 app.use('/api/dealers',dealerRoutes);
 app.use('/api/cars',carRoutes);
 app.use('/api/bookings',bookingRoutes);

 const connectDB=require('./src/config/db');
 connectDB();

app.listen(PORT, () => {
    console.log(`Welcome to Car Rental Website!`);
    console.log(`Server Listening on http://localhost/${PORT}`);
});