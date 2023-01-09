import 'dotenv/config'
import express from 'express'

import './database/config.js'
import authRouter from './routes/auth.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use('/api', authRouter)


app.listen(PORT, () => console.log('Server up on port', PORT))
