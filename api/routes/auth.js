import express from "express"
import { register } from "../controllers/auth.js"
import { login } from "../controllers/auth.js"
import { logout } from "../controllers/auth.js"

 const router = express.Router()
  
router.post("/register", register)
router.post("/login", logout)
router.post("/logout", login)

export default router 