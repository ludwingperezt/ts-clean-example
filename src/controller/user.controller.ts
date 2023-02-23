import { registerUser, getDetailUser } from "../services/user.service";
import { Request, Response } from "express";


const getUser = async (req: Request, res: Response) => {
    const {query} = req
    const {email} = query
    const qEmail = email?.toString() || ''
    const user = await getDetailUser(qEmail)
    res.send({user})
}

const insertUser = async (req: Request, res: Response) => {
    const {body} = req
    const user = await registerUser(body)
    res.send({user})
}

export { getUser, insertUser }