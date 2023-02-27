/**
 * Funciones de conexión con la base de datos.
 */
import { connect } from "mongoose";
import "dotenv/config"

const DB_URI = `${process.env.DB_URI}`

const dbInit = async () => {
    await connect(DB_URI)
    console.log("DB conectada")
}

export default dbInit 