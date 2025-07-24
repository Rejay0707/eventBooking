import User from "../model/userModel.js"
import { hashPassword, comparePassword, generateToken } from '../service/authService.js';

export const register = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ msg: 'User already exists' });

  const hashed = await hashPassword(password);

  const newUser = await User.create({
    name,
    email,
    password: hashed,
    isAdmin  // ✅ allow setting admin if passed
  });

  const token = generateToken(newUser);
  res.status(201).json({
    token,
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin
    }
  });
};


export const login = async (req, res) => {

  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User not found' });

  const match = await comparePassword(password, user.password);
  if (!match) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = generateToken(user);
  res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
};

