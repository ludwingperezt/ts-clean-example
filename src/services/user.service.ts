/**
 * Servicios (lógica de negocio)
 */
import UserModel from "../model/user.schema";
import { UserInterface } from "../types/user.type";

/**
 * Registrar un usuario
 * @param user R
 * @returns 
 */
const registerUser = async (user: UserInterface) => {
    const response = await UserModel.create(user)
    return response
}

/**
 * Obtener datos de un usuario.
 * @param email 
 * @returns 
 */
const getDetailUser = async (email:string) => {
    const response = await UserModel.findOne({email})
    return response
}

export { registerUser, getDetailUser }