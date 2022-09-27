const Users = require("../models/user");

const getusers = async (req, res) => {
  try {
    const users = await Users.findById(req.params.UsersId);

    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};
const getuser = async (req, res) => {
  try {
    const user = await Users.find();

    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

// const register = async (req, res) => {

 

//   try {
//     const user = new Users({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       profilePhoto: req.body.profilePhoto,
//     });
  

  
//     const olduser = await Users.findOne({ email: req.body.email });
//     if (olduser) {
//       return res.status(409).send("user email already exist");
//     }

//     const saveduser = await user.save();
//     res.send(saveduser);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };


const register = async (req,res)=>{
  try{
    const {name,email,password,profilePhoto}=req.body;

    //validate
    if(!(name && email && password && profilePhoto)){
      res.status(400).send("all inputs is required");

    }
    const olduser =await Users.findOne({email});
    if(olduser){
      return res.status(409).send("User Already Exist")
    }

    encryptedPassword =await bcrypt.hash(password, 10);


    const user = await Users.create({
      name,
      email:email.toLoweCase(),
      password:encryptedPassword,
      profilePhoto
    });
    res.status(201).json(user);
  }catch (err) {
    console.log(err);
}
}


const userupdate = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profilePhoto: req.body.profilePhoto,
    };

    const updateduser = await Users.findByIdAndUpdate(
      { _id: req.params.userId },
      user
    );
    res.json(updateduser);
  } catch (error) {
    res.json({ message: error });
  }
};

const deleteuser = async (req, res) => {
  try {
    const removeuser = await Users.findByIdAndDelete(req.params.registrationId);

    res.json(removeuser);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getusers,
  getuser,
  register,
  userupdate,
  deleteuser,
};
