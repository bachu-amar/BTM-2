// import mongoose from "mongoose";
import validator = require("validator");
// const studentSchema = new mongoose.Schema({
//   training_center: String,
//   medium: String,
//   firstname: String,
//   lastname: String,
//   gender: String,
//   DOB: Date,
//   fathername: String,
//   mothername: String,
//   Aadhar: {
//     type: Number,
//     validate: {
//       validator: function (v) {
//         // Check if the mobile number is exactly 10 digits
//         return /^\d{12}$/.test(v.toString());
//       },
//       message: "Mobile number must have exactly 10 digits.",
//     },
//   },
//   email: {
//     type: String,
//     validate: {
//       validator: validator.isEmail,
//       message: "Please Provide a valid email",
//     },
//     //   unique: true,
//   },
//   address: String,
//   nationality: String,
//   church_membership: String,
//   pastor: String,
//   mobile_number: {
//     type: Number,
//     required: [true, "Please Provide a phone number"],
//     unique: true,
//     validate: {
//       validator: function (v) {
//         // Check if the mobile number is exactly 10 digits
//         return /^\d{10}$/.test(v.toString());
//       },
//       message: "Mobile number must have exactly 10 digits.",
//     },
//   },
//   education_qualification: String,
//   occupation: String,
//   blood_group: String,
//   Emg_number: {
//     type: Number,
//     required: [true, "Please Provide a phone number"],
//     unique: true,
//     validate: {
//       validator: function (v) {
//         // Check if the mobile number is exactly 10 digits
//         return /^\d{10}$/.test(v.toString());
//       },
//       message: "Mobile number must have exactly 10 digits.",
//     },
//   },
// });
// const Student = mongoose.model("student", studentSchema);
// export default Student;

const mongoose = require("mongoose");



const studentSchema = new mongoose.Schema({
  // studentId: String, 
  _id:String,
  nextId: Number,
  training_center: String,
  medium: String,
  firstName: String,
  lastName: String,
  gender: String,
  blood_group: String,
  DOB: Date,
  soOrdo: String,
  aadhar: {
    data: Buffer, // Store image data as Buffer
    contentType: String, // Store content type, e.g., 'image/jpeg'
  },
  email: {
        type: String,
        validate: {
          validator: validator.isEmail,
          message: "Please Provide a valid email",
          unique: true,
        }, 
      },
  address: String,
  nationality: String,
  education: String,
  church_membership: String,
  paster_name: String,
  mobile: Number,
  alt_number: Number,
  educational_qulification: String,
  occupation: String,
  ssc: {
    data: Buffer, // Store image data as Buffer
    contentType: String, // Store content type, e.g., 'image/jpeg'
  },
  image: {
    data: Buffer, // Store image data as Buffer
    contentType: String, // Store content type, e.g., 'image/jpeg'
  },
  sign: {
    data: Buffer, // Store image data as Buffer
    contentType: String, // Store content type, e.g., 'image/jpeg'
  },
  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending",
  },

  // ... other fields
});

const Student = mongoose.model("studen", studentSchema);
export default Student;
