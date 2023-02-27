import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";
// import { registerUser, getDetailUser } from "../services/user.service";

// const getUser = async (req: Request, res: Response) => {
//     const {query} = req
//     const {email} = query
//     const qEmail = email?.toString() || ''
//     const user = await getDetailUser(qEmail)
//     res.send({user})
// }

// const insertUser = async (req: Request, res: Response) => {
//     const {body} = req
//     const user = await registerUser(body)
//     res.send({user})
// }

// export { getUser, insertUser }
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