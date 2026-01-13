import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";


export const signup = async (req, res, next) => {
  // Signup logic here
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  // Signin logic here
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email }); 
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const isPasswordCorrect = bcrypt.compareSync(password, validUser.password);
    if (!isPasswordCorrect) {
      return next(errorHandler(401, "Invalid credentials"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pwd, ...otherDetails } = validUser._doc;
    res.cookie("access_token", token, { httpOnly: true }).status(200).json(otherDetails);
    // res.cookie("access_token", token, { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60 * 1000) });

  } catch (error) {
    next(error);
  }
};