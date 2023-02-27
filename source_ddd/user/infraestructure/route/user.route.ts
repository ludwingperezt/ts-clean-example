/**
 * Definición de rutas.
 * 
 * En este archivo es que se hace la creación de los objetos de implementación
 * de repositorios, casos de uso y controladores, para luego mapear a las
 * rutas correspondientes.
 * 
 * Para hacer el mapeo de rutas se puede usar la librería inversify:
 * https://inversify.io/
 * para hacer IoC (inversion of control) automáticamente.
 */
import { Router } from "express";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.controller";
import { MongoRepository } from "../repository/mongo.repository";

const route = Router()

/**
 * Antes se debe iniciar el repository
 */
const mongoRepo = new MongoRepository();

/**
 * Iniciar casos de uso
 */
const useCases = new UserUseCase(mongoRepo);

/**
 * Iniciar los controllers
 */
const userController = new UserController(useCases);

/**
 * Iniciar el enrutamiento
 */
route.post("/user", userController.insertAction)
route.get("/user", userController.getAction)

export default route