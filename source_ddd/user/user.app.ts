/**
 * Archivo principal de inicio de la aplicación DDD
 */
import express from "express"
import cors from "express"
import userRoute from "./infraestructure/route/user.route"
import dbInit from "./infraestructure/database/mongo"

const port = process.env.PORT || 3001

const app = express()
app.use(cors())

app.use(express.json())
app.use(userRoute)

dbInit().then()

app.listen(port, () => console.log(`Listo por el puerto ${port}`))