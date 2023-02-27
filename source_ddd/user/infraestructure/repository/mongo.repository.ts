/**
 * Estas son implementaciones de la interfaz de acceso a datos
 * definidas en los repository de la capa de dominio.
 * 
 * La definición de una interfaz que luego es implementada en una
 * clase aparte permite desacoplar el origen de datos con su respectivo
 * tratamiento, permitiendo a los servicios o casos de uso, simplemente
 * llamar funciones de acceso a datos sin tomar en cuenta implementaciones
 * de bajo nivel.
 */
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.schema";

export class MongoRepository implements UserRepository {

    // TODO: Hacer un map del modelo de mongo a un UserEntity
    async findUserById(uuid: string): Promise<UserEntity | null> {
        const user = await UserModel.findOne({uuid})
        return user
    }

    // TODO: Hacer un map del modelo de mongo a un UserEntity
    async registerUser(user: UserEntity): Promise<UserEntity | null> {
        const newUser = await UserModel.create(user)
        return user
    }

    // TODO: Hacer un map del modelo de mongo a un UserEntity
    async listUser(): Promise<UserEntity[] | null> {
        const users = await UserModel.find()
        return users
    }
    
}