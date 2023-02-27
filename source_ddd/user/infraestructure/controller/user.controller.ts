/**
 * Esta clase recibe peticiones que llegan a la API y retorna las respuestas
 * recibidas de los casos de uso (lógica de negocio).
 */
import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {
    constructor(private userUseCase: UserUseCase) {
        // Se hace un bind para poder usar el objeto como "this". Esto es una forma de hacerlo
        // la otra sería convertir la función a una arrow function, como se hizo con insertAction.
        this.getAction.bind(this)
    }

    public async getAction(req: Request, res: Response) {
        const {query} = req
        const {uuid} = query
        const qUuid = uuid?.toString() || ''
        const user = await this.userUseCase.getDetail(qUuid)
        res.send({user})
    }

    public insertAction = async ({body}: Request, res: Response) => {
        const user = await this.userUseCase.registerUser(body)
        res.send({user})
    }
}