import { Router } from "express";
const router = Router()

import * as authController from '../controllers/auth.controller'

router.post('/signup')
router.post('/signin')
export default router