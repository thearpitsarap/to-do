const express = require('express')
const { connectDB } = require('./src/utils/connection')
const { TaskModel1 } = require("./src/utils/models/schema")
const { userModel } = require("./src/utils/models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {validateToken} = require('./src/validateToken')

let app = express();
app.use(express.json())
connectDB();
const access_token_sec = "Arpit"
app.listen("3000", () => {
    console.log("Server Started")
})

app.post("/register", async (req, res) => {
    const {name,email,password} = req.body;
    const userExists = await userModel.findOne({ email });

    if (userExists) {
        res.status(404).json({ Message: "User Exists" })
    }
    const hashPassword = await bcrypt.hash(password,10);
    const user = await userModel.create({
        name,
        email,
        password: hashPassword
    })
    res.status(200).json({ Message: "Registered Successfully" })
})

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const emailExists = await userModel.findOne({email})
    if(emailExists && (await bcrypt.compare(password,emailExists.password))){
        const accessToken = jwt.sign({
            user:{
                username:emailExists.name,
                email:emailExists.email,
                id:emailExists.id
            }
        },
        access_token_sec,
        {expiresIn:"15m"});
        res.status(200).json({accessToken})
    }
    else{
        res.status(401).json({message:"Error"})
    }
})

app.get("/current",validateToken,(req, res) => {
    res.json(req.user)
})

app.get("/", validateToken, async (req, res) => {
    const contact = await TaskModel1.find({user_id:req.user.id});
    res.status(200).json(contact)
})

app.get("/:id",validateToken, async (req, res) => {
    const id = req.params.id;
    const contact = await TaskModel1.findById(id);
    res.status(200).json(contact)
})

app.post("/", validateToken,async (req, res) => {
    try {
        const name = req.body.name;
        const contact = await TaskModel1.create({
            name,
            user_id:req.user.id
        });
        res.status(201).json(contact)
    } catch (err) {
        console.log(err)
    }
})

app.put("/:id",validateToken, async (req, res) => {
    const id = req.params.id
    const contact = await TaskModel1.findById(id);
    const update = await TaskModel1.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    res.status(200).json(contact)
})

app.delete("/:id",validateToken, async (req, res) => {
    const id = req.params.id
    const contact = await TaskModel1.findOneAndDelete(id);
    res.status(200).json(contact)
})