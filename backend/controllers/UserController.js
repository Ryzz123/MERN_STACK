import User from "../models/UserModel.js";

// buat sebuah controller untuk folder routes
// ambil data user
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ambil data users by id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// masukan data user
export const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const insertUser = await user.save();
    res.status(201).json(insertUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update data user
export const updateUser = async (req, res) => {
  try {
    const updateUser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// untuk delete user
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
