import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

/**
 * Los casos de uso son operaciones a nivel de negocio.
 */
export class UserUseCase {
    
    // Lo que se hace aquí en el constructor es una inyección de dependencias
    constructor(private readonly userRepository:UserRepository) {
        this.registerUser.bind(this)
    }

    public async registerUser({name, email, description}: {name:string, email:string, description:string}) {
        const userValue = new UserValue({name, email, description})
        const userCreated = await this.userRepository.registerUser(userValue)
        return userCreated
    }

    public getDetail = async (uuid:string) => {
        const user = await this.userRepository.findUserById(uuid)
        return user
    }

}