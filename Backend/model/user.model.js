import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    fullname:{type:String , reuired:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const User=mongoose.model("User",userSchema);

export default User;