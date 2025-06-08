import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import postsRouter from './routes/posts.routes.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(cors())

app.use('/api/v1', postsRouter)

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`)
})
