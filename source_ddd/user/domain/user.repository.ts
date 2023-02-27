/**
 * El repositorio es una capa de abstracción sobre la capa de datos.
 * 
 * Aquí se definen métodos de interacción con la capa de datos sin importar
 * qué infraestructura la soporta (Postgres, MySQL, Mongo, otra API, etc.)
 */

import { UserEntity } from "./user.entity";

export interface UserRepository {
    findUserById(uuid:string): Promise<UserEntity | null>
    registerUser(user:UserEntity): Promise<UserEntity | null>
    listUser(): Promise<UserEntity[] | null>
}