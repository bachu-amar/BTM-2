import Student from "@/models/student.models";
import Payment from "@/models/payment.model";
import mongoose from "mongoose";

// const mongoose = require("mongoose");

// let Numbers = [];

// // async function getNextSequenceValue(documentType) {
// //   const sequence = await Student.findByIdAndUpdate(
// //     documentType,
// //     { $inc: { nextId: 1 } },
// //     { new: true, upsert: true }
// //   );

// //   return sequence.nextId;
// // }
// async function getNextSequenceValue() {
//     // Get the current date in YYYYMMDD format
//     const date_ob = new Date();
//     const year = date_ob.getFullYear();
//     const month = String(date_ob.getMonth() + 1).padStart(2, '0'); // Ensure two-digit month
//     const day = String(date_ob.getDate()).padStart(2, '0'); // Ensure two-digit day
//     const currentDate = `${year}${month}${day}`;

//     // Find the latest student with the same date prefix
//     const latestStudent = await Student.findOne(
//       { studentId: { $regex: `^BTM_${currentDate}` } },
//       {},
//       { sort: { studentId: -1 } } // Sort by studentId in descending order
//     );

//     let nextNumber = 1;

//     if (latestStudent) {
//       // Extract the sequential number from the latest student ID and increment it
//       const match = latestStudent.studentId.match(/\d+$/);
//       if (match) {
//         nextNumber = Number(match[0]) + 1;
//       }
//     }

//     // Create the new student ID with the incremented number
//     const newStudentId = `BTM_${currentDate}${String(nextNumber).padStart(2, '0')}`;

//     return newStudentId;
//   }

// export const sub = async (req, res) => {
//   const {
//     training_center,
//     medium,
//     firstName,
//     lastName,
//     gender,
//     blood_group,
//     DOB,
//     soOrdo,
//     email,
//     address,
//     nationality,
//     education,
//     church_membership,
//     paster_name,
//     mobile,
//     alt_number,
//     educational_qualification,
//     occupation,
//   } = req.body;
//   const image = req.files["image"][0];
//   const sign = req.files["sign"][0];
//   const ssc = req.files["ssc"][0];
//   const aadhar = req.files["aadhar"][0];
//   try {
//     // const userId = await getNextSequenceValue("Studen");

//     // console.log(studentId)
//     // Create a new user instance with the data
//     const newStudentId = await getNextSequenceValue();
//     const user = new Student({
//         studentId: newStudentId,
//         // _id:sId+userId,
//       training_center,
//       medium,
//       firstName,
//       lastName,
//       gender,
//       blood_group,
//       DOB,
//       soOrdo,
//       aadhar: {
//         data: aadhar.buffer, // Store the binary data of the image
//         contentType: aadhar.mimetype, // Store the content type (e.g., 'image/jpeg')
//       },
//       email,
//       address,
//       nationality,
//       education,
//       church_membership,
//       paster_name,
//       mobile,
//       alt_number,
//       educational_qualification,
//       occupation,
//       ssc: {
//         data: ssc.buffer, // Store the binary data of the image
//         contentType: ssc.mimetype, // Store the content type (e.g., 'image/jpeg')
//       },

//       image: {
//         data: image.buffer, // Store the binary data of the image
//         contentType: image.mimetype, // Store the content type (e.g., 'image/jpeg')
//       },
//       sign: {
//         data: sign.buffer, // Store the binary data of the image
//         contentType: sign.mimetype, // Store the content type (e.g., 'image/jpeg')
//       },
//     });
//     // Save the user to the database

//     await user.save();
//     // const generatedstudentid = user.studentId;
//     // console.log(generatedstudentid)
//     res.status(200).json(user.generatedstudentid);
//   } catch (error) {
//     res.status(500).send("Error uploading user data or image.");
//   }
// };

let date_ob = new Date();
let Numbers = [];
// let a = 1
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

let id = "BTM_" + year + month + date + "00";

async function getNextSequenceValue(documentType) {
  const sequence = await Student.findByIdAndUpdate(
    documentType,
    { $inc: { nextId: 1 } },
    { new: true, upsert: true }
  );

  return sequence.nextId;
}

export const sub = async (req, res) => {
  const {
    training_center,
    medium,
    firstName,
    lastName,
    gender,
    blood_group,
    DOB,
    soOrdo,
    email,
    address,
    nationality,
    education,
    church_membership,
    paster_name,
    mobile,
    alt_number,
    educational_qualification,
    occupation,
  } = req.body;

  const image = req.files["image"][0];
  const sign = req.files["sign"][0];
  const ssc = req.files["ssc"][0];
  const aadhar = req.files["aadhar"][0];

  const existingUser = await Student.findOne({ mobile });
  if (existingUser) {
    return res.status(409).json("User with this mobile number already exists");
  }

  const existingUsermail = await Student.findOne({ email });
  if (existingUsermail) {
    return res.status(409).json("User with this email number already exists");
  }

  // const existingUseraadhar = await Student.findOne({ email });
  // if (existingUsermail) {
  //   return res.status(409).json("User with this mobile number already exists");
  // }
  
  try {
    const userId = await getNextSequenceValue("Student");
    // Create a new user instance with the data
    const user = new Student({
      _id: id + userId,
      training_center,
      medium,
      firstName,
      lastName,
      gender,
      blood_group,
      DOB,
      soOrdo,
      aadhar: {
        data: aadhar.buffer, // Store the binary data of the image
        contentType: aadhar.mimetype, // Store the content type (e.g., 'image/jpeg')
      },
      email,
      address,
      nationality,
      education,
      church_membership,
      paster_name,
      mobile,
      alt_number,
      educational_qualification,
      occupation,
      ssc: {
        data: ssc.buffer, // Store the binary data of the image
        contentType: ssc.mimetype, // Store the content type (e.g., 'image/jpeg')
      },

      image: {
        data: image.buffer, // Store the binary data of the image
        contentType: image.mimetype, // Store the content type (e.g., 'image/jpeg')
      },
      sign: {
        data: sign.buffer, // Store the binary data of the image
        contentType: sign.mimetype, // Store the content type (e.g., 'image/jpeg')
      },
    });

    // Save the user to the database
    await user.save();

    res.status(200).json(user._id);
  } catch (error) {
    res.status(500).send("Error uploading user data or image.");
  }
};


export const studebyId = async (req, res) => {
  const { mobileNumnber } = req.body;
  try {
    const student = await Student.findOne({ mobile: mobileNumnber });

    if (student) {
      return res.status(200).json(student);
    } else {
      return res.status(404).json("Student not found"); // Handle the case where no student is found
    }
  } catch (error) {
    res.status(400).json("student not found");
  }
};


export const payments = async (req, res) => {
  const image = req.files["image"][0];
  const { mobile } = req.body;
  try {
    const user = new Payment({
      image: {
        data: image.buffer, // Store the binary data of the image
        contentType: image.mimetype, // Store the content type (e.g., 'image/jpeg')
      },
      mobile,
    });
    await user.save();

    res.status(200).json("Files uploaded successfully");
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "An error occurred while fetching." });
  }
};

export const images = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findById(id);
    if (!payment) {
      return res.status(404).json({ error: "Image not found" });
    }
    // Send the image data as a response
    res.set("Content-Type", payment.image.contentType);
    res.send(payment.image.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the image" });
  }
};

export const use_images = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Student.findById(id); // Fetch all users and select only the 'image' field
    if (!user) {
      return res.status(404).json({ error: "No user found" });
    }
    const image = {
      contentType: user.image.contentType,
      data: user.image.data,
    };
    const ssc = {
      contentType: user.ssc.contentType,
      data: user.ssc.data,
    };
    const aadhar = {
      contentType: user.aadhar.contentType,
      data: user.aadhar.data,
    };
    const sign = {
      contentType: user.sign.contentType,
      data: user.sign.data,
    };
    const images_result = {
      image: image,
      ssc: ssc,
      aadhar: aadhar,
      sign: sign,
      user,
    };
    //   console.log(images_result)
    res.set("Content-Type", user.ssc.contentType);
    console.log(user.ssc.data);
    res.json(user.ssc);
    // res.status(200).json(images_result)
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the image" });
  }
};
