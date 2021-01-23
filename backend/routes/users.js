import express from "express"
const router = express.Router()
import {authUser, getUserProfile, registerUser, updateUserProfile} from "../controllers/usersController.js"
import { protect } from "../middleware/auth.js"


router.post('/', registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/profile').put(protect, updateUserProfile)


export default router