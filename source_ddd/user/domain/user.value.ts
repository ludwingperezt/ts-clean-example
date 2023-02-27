import { v4 as uuid } from "uuid"
import { UserEntity } from "./user.entity";

/**
 * Esta clase mapea los datos que representan la entidad.
 */
export class UserValue implements UserEntity {
    name: string;
    email: string;
    uuid: string;
    description: string;

    constructor({name, email, description}: {name: string, email:string, description?:string}) {
        this.email = email
        this.name = name
        // Ejemplo de uso de nullish coalescing operator: 
        // https://mariusschulz.com/blog/nullish-coalescing-the-operator-in-typescript
        this.description = description ?? 'No description'
        this.uuid = uuid()
    }
}