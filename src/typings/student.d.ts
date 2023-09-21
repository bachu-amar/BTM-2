export type StudentTypes={
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
  email: String,
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
}