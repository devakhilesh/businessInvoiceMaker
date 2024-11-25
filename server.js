const express = require("express")

const cors = require("cors")
const app = express()
const path = require("path")
const fs = require("fs")
app.use(express.json())

app.use(cors())

const port = 3001 || 3000

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,"business.html"))
})

  
app.listen(port,()=>{
    console.log(`app is running on port:${port}`)
})    