import { Router } from 'express';
import { sub, images, payments, use_images ,studebyId} from '@controllers/student.controller';


const express = require('express');
const multer = require('multer');

const router = Router();

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/api/users', upload.fields([{ name: 'image' }, { name: 'sign' }, { name: 'ssc' }, { name: 'aadhar' }]), sub)

router.get('/getall/:id',images)

router.post('/payment', upload.fields([{ name: 'image' }]), payments)

router.get('/get/:id',use_images)
router.get('/student',studebyId)

export default router;

