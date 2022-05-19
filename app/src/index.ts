import compression from "compression"
import cors from "cors"
import express from 'express'

import routerV1 from './routes/v1'

const app = express()

app.use(cors())
app.use(compression())

app.use('/v1/', routerV1)

const port: number = Number(process.env.PORT) || 3000

app.listen(port, () => {
  console.info(`Server listen on port ${port}`)
})
