/**
 * Rutas del recurso /user
 * 
 * Mapeo entre rutas y métodos con las funciones correspondientes
 * de los controllers.
 */
import { Router } from "express";
import { insertUser, getUser } from "../controller/user.controller";

const route = Router()

route.post("/user", insertUser)

route.get("/user", getUser)

export default route