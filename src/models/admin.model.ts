import mongoose from 'mongoose';
 
const adminSchema = new mongoose.Schema({
    fullname:String, 
    mobile:Number, 
    email:String, 
    password:String,
    role: {
        type: String,
        // enum: ["Admin"],
        default: "Admin",
      },
});

const Admin = mongoose.model('admin', adminSchema);
export default Admin

