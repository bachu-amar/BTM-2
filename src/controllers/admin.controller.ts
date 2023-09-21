import Admin from "@/models/admin.model";
import Student from "@/models/student.models"

export const createAdmin =async (req, res) => {
  const {fullname,mobile,email,password } = req.body;
  try {
   const admin = new Admin({
    fullname,mobile,email,password
   });
   await admin.save();
   res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Not Register" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during login' });
  } 
};

export const updateStudent = async (req, res) => {
  // const { id } = req.body;
  // try {
  //   const user = await Student.findOne({ _id: id });
  //   // const user = await Student.findByIdAndUpdate({ _id: req.params.Student_id });
   
  //   console.log(user)

  //   if (!user) {
  //     return res.status(404).json({ message: 'User not found' });
  //   }

  //   if (user.status === 'pending') {
  //     user.status = 'Approved';
  //     await user.save();

  //     res.status(200).json({ message: 'User status updated to Approved' });
  //   } else {
  //     res.status(400).json({ message: 'Invalid operation: User is not in Pending status' });
  //   }
  const { id } = req.body;

  try {
    const student = await Student.findByIdAndUpdate(id, {
      status: "Approved",
    });

    if (!student) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User status updated to Approved" });
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getallstudents = async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({message: "Not getting all students"});
  }
};
