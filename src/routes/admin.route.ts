import { Router } from "express";
import { createAdmin, login, updateStudent, getallstudents } from "@/controllers/admin.controller";
 
const router = Router();


router.post('/admin',createAdmin)

router.post('/admin/login',login)

router.get('/admin/update', updateStudent);

router.get('/allstudents', getallstudents)

 

export default router;
