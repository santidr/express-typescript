import express from 'express'
import dotenv from 'dotenv'

import diaryRouter from './routes/diaries'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/diaries', diaryRouter)

app.get('/ping', (_req, res) => {
    console.log('Someone pinged here!! - ' + new Date().toLocaleDateString())
    res.send('Pong!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})