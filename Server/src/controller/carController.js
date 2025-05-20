const cars=require('../model/carModel'); 

const createCar=async(req,res)=>{
    try{
        const newCar=new cars(req.body);
        const savedCar=await newCar.save();
        res.status(201).json(savedCar);
    }catch(error){
        res.status(500).json(error);
    
    }
};

const getAllCars = async(req,res) =>{
    const carList=await cars.find({});
    res.status(200).json(carList);
};

const getCarById=async(req,res)=>{
    const carList=await cars.findById(req.params.id);
    res.status(200).json(carList);
};

const updateCar=async(req,res)=>{
    try{
        const updatedCar=await cars.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).send(updatedCar);
    }catch(error){
        res.status(500).send(error);
    }
};

const deleteCarById=async(req,res)=>{
    try{
        const deletedCar=await cars.findByIdAndDelete(req.params.id);
        res.status(200).send("Deleted Successfully");
       
    }catch(error){
        res.status(500).send(error);

    }
};

module.exports={
   createCar,
   getAllCars,
   getCarById,
   updateCar,
   deleteCarById
   
}
