const express = require('express')
require("dotenv").config()
const axios = require('axios')
const cors = require("cors")
port = process.env.PORT 


const app = express()
app.use(cors({credentials: true, origin: 'http://127.0.0.1:5173'}));
app.use(express.json())


app.get('/budgets', (req, res) => {
        res.json("hi")
})

app.post('/budgets', (req, res) => {
        if(req) {
                console.log(req.body)
                res.end("succes")

        }else {
                res.end("error no body in request")
        }
})
app.listen(port, () => console.log(`server running on ${port}`))







