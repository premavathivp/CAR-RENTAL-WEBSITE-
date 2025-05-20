


// controller/memberController.js
const members = [
  { id: '1', name: 'Alice', email: 'alice@example.com', createdAt: new Date() },
  { id: '2', name: 'Bob', email: 'bob@example.com', createdAt: new Date() },
];

exports.getMemberById = (req, res) => {
  const member = members.find(m => m.id === req.params.id);
  if (!member) return res.status(404).json({ error: 'Member not found' });
  res.json(member);
};

exports.login = (req, res) => {
  // Simulate login
  const { id } = req.body;
  res.json({ message: 'Logged in', memberId: id });
};

exports.logout = (req, res) => {
  res.json({ message: 'Logged out' });
};














































































// const members=require('../model/memberModel'); 

// const login=(req,res)=>{
//     res.send('login');
// };

// const createMember=async(req,res)=>{
//     try{
//         const newMember=new members(req.body);
//         const savedMember=await newMember.save();
//         res.status(201).json(savedMember);
//     }catch(error){
//         res.status(500).json(error);
    
//     }
// };

// const getAllMembers = async(req,res) =>{
//     const memberList=await members.find({});
//     res.status(200).json(memberList);
// };

// const getMemberById=async(req,res)=>{
//     const memberList=await members.findById(req.params.id);
//     res.status(200).json(memberList);
// };

// const updateMember=async(req,res)=>{
//     try{
//         const updatedMember=await members.findByIdAndUpdate(req.params.id,req.body,{new:true});
//         res.status(200).send(updatedMember);
//     }catch(error){
//         res.status(500).send(error);
//     }
// };

// const deleteMemberById=async(req,res)=>{
//     try{
//         const deletedMember=await members.findByIdAndDelete(req.params.id);
//         res.status(200).send("Deleted Successfully");
       
//     }catch(error){
//         res.status(500).send(error);

//     }
// };

// const logout=(req,res)=>{
//     res.send('logout successfully');
// };

// module.exports={
//    login,
//    createMember,
//    getAllMembers,
//    getMemberById,
//    updateMember,
//    deleteMemberById,
//    logout

// }