import Elysia from "elysia";
import RegistrarUsuario from '../core/usuario/service/RegistrarUsuario'

export default class ResgistrarUsuarioController {

    constructor(
        readonly servidor: Elysia, 
        readonly casoDeUso: RegistrarUsuario
    ) {
        servidor.post('/usuario', async ({body}) => {
            const { nome, email, senha } = body as any

            await casoDeUso.executar({ nome, email, senha})

        })
    }
}