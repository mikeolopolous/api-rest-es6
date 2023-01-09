import 'dotenv/config'
import express from 'express'

import './database/config.js'

const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  console.log("On fire")
  res.json({ ok: true })
})

app.listen(PORT, () => console.log('Server up on port', PORT))
