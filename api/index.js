import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.get("/test", (req,res)=>{
    res.json("It works!");
})

app.listen(8800, ()=>{
    console.log("Connected")
})