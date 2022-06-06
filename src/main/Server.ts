import express from 'express'
import {routes} from './routes'

const app = express()

app.use(express.json())

routes(app)

app.listen(3333, () => {
    console.log('HTTP server running!')
})