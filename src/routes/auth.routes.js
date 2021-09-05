import { Router } from "express";
const router = Router()

import * as authCtr from '../controllers/auth.controller'

router.post('/signup',authCtr.signup)
router.post('/signin',authCtr.signin)
export default router;