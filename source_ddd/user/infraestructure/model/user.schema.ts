import {Schema, model} from "mongoose"
import { UserEntity } from "../../domain/user.entity"

// Esto fue correcto??
const UserSchema = new Schema<UserEntity>(
    {
        name: {type: String},
        email: {type: String, unique:true},
        uuid: {type: String, unique:true},
        description: {type:String}
    },
    {
        timestamps: true,
        versionKey: false
    })

const UserModel = model("users", UserSchema)

export default UserModel