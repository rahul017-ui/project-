const Registration = require("../models/user");


const getusers = async (req, res) => {
  try {
    const users = await Registration.findById(req.params.registrationId);

    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};
const getuser = async (req, res) => {
  try {
    const user = await Registration.find();

    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

const createuser = async (req, res) => {
  try {
    const user = new Registration({
      name: req.body.name,
      email: req.body.email,
      password:req.body.password,
      profilePhoto:req.body.profilePhoto

    });
    const eml = await Registration.findOne({ email: req.body.email });
    if (eml) {
      return res.status(409).send("user email already exist");
    }

    const saveduser = await user.save();
    res.send(saveduser);
  } catch (error) {
    res.status(400).send(error);
  }
};


const userupdate = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password:req.body.password,
      profilePhoto:req.body.profilePhoto
    };

    const updateduser = await Registration.findByIdAndUpdate(
      { _id: req.params.registrationId },
      user
    );
    res.json(updateduser);
  } catch (error) {
    res.json({ message: error });
  }
};


const deleteuser = async (req, res) => {
  try {
    const removeuser = await Registration.findByIdAndDelete(req.params.registrationId);

    res.json(removeuser);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getusers,
  getuser,
  createuser,
  userupdate,
  deleteuser,
};
