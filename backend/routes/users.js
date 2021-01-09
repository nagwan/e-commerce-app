import express from "express"
const router = express.Router()
import {authUser, getUserProfile} from "../controllers/usersController.js"
import { protect } from "../middleware/auth.js"

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)



export default router