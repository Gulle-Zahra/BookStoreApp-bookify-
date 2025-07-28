import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';

export const signUp = async(req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user =await  User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password before saving
    const HashedPassword=await bcrypt.hash(password,10)
    const userCreated = new User({ fullname:fullname, email:email, password:HashedPassword });
     await userCreated.save();
    return res.status(201).json({message:"User created successfully",user: { id: userCreated._id, fullname: userCreated.fullname, email: userCreated.email } });
  } catch (error) {
    console.error("Error in signUp:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async(req, res) => {
  try {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user){
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if(!user || !isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      else{
        return res.status(200).json({ message: "Login successful", user: { id:user.id, fullname: user.fullname, email: user.email} });
      }
    }
    
  } catch (error) {
    console.log("error",error)
    res.status(500).json({ message: "Internal server error" });
    
  }
}