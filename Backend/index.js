const express = require('express')
const cors = require('cors')
const config = require('./util/config')
const mongoDbConnect = require('./util/mongoDb')
const app = express()
const loginRouter = require('./controllers/login')
const registerRouter = require('./controllers/register')




app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api/login', loginRouter)
app.use('/api/register', registerRouter)

app.listen(config.PORT,()=>{`Listening on ${config.PORT}`})