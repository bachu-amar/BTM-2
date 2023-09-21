export type PaymentTypes={
    mobile: Number,
    image: {
        data: Buffer, // Store image data as Buffer
        contentType: String, // Store content type, e.g., 'image/jpeg'
      },
}