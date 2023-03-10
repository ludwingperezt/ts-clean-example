/**
 * Punto de acceso principal de la aplicación MVC
 */
import express from "express"
import cors from "express"
import userRoute from "./routes/user.route"
import dbInit from "./database/mongo"

const port = process.env.PORT || 3001

const app = express()
app.use(cors())

app.use(express.json())
app.use(userRoute)

dbInit().then()

app.listen(port, () => console.log(`Listo por el puerto ${port}`))