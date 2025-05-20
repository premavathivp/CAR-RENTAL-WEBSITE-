const admins=require('../model/adminModel'); 

const login=(req,res)=>{
    res.send('login');
};

const getAllAdmin = async(req,res) =>{
    const adminList=await admins.find({});
    res.status(200).json(adminList);
};

const getAdminById=async(req,res)=>{
    const adminList=await admins.findById(req.params.id);
    res.status(200).json(adminList);
};

const logout=(req,res)=>{
    res.send('logout successfully');
};

module.exports={
   login,
   getAllAdmin,
   getAdminById,
   logout
}
