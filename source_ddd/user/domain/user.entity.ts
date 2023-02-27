/**
 * Esta es una clase para el negocio.
 */

export interface UserEntity {
    name: string
    email: string
    uuid: string // Este debe ser un ID generado por el negocio, NO DEBE SER el ID generado por mongo
    description: string
}