import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    mobile: Number,
    image: {
        data: Buffer, // Store image data as Buffer
        contentType: String, // Store content type, e.g., 'image/jpeg'
      },
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);
  export default  Payment;