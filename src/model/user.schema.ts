/**
 * Definición del esquema de base de datos de usuarios.
 */
import {Schema, model} from "mongoose"

const UserSchema = new Schema(
    {
        name: {type: String},
        email: {type: String, unique:true},
        description: {type:String}
    },
    {
        timestamps: true,
        versionKey: false
    })

const UserModel = model("users", UserSchema)

export default UserModel