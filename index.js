require('dotenv').config()
const express = require("express")
const routes = require('./routes')
const connectdb = require("./db/connectdb")
const cors = require("cors")


const app = express()

connectdb()
app.use(cors())
app.use(express.json())

app.use("/",routes)

const port = process.env.PORT || 8000

app.listen(port)