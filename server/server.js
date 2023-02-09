const express = require('express')
const app = express()

require("dotenv").config()

port = process.env.PORT 



app.get("/api", (req, res) => {
        res.json({})
})

app.listen(port, ()=> console.lo