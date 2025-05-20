const dealers=require('../model/dealerModel'); 

const login=(req,res)=>{
    res.send('login');
};

const getAllDealers = async(req,res) =>{
    const dealerList=await dealers.find({});
    res.status(200).json(dealerList);
};

const getDealerById=async(req,res)=>{
    const dealerList=await dealers.findById(req.params.id);
    res.status(200).json(dealerList);
};

const updateDealer=async(req,res)=>{
    try{
        const updatedDealer=await dealers.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).send(updatedDealer);
    }catch(error){
        res.status(500).send(error);
    }
};

const deleteDealerById=async(req,res)=>{
    try{
        const deletedDealer=await dealers.findByIdAndDelete(req.params.id);
        res.status(200).send("Deleted Successfully");
       
    }catch(error){
        res.status(500).send(error);

    }
};

const logout=(req,res)=>{
    res.send('logout successfully');
};

module.exports={
   login,
   getAllDealers,
   getDealerById,
   updateDealer,
   deleteDealerById,
   logout
}
