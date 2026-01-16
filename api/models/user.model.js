
import mongoose from "mongoose"; 
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photoURL: { type: String, default: "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" },
//   createdAt: { type: Date, default: Date.now }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;