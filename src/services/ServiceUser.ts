import { UserAPI } from "../providers/ClientIntegradorAPI"
import IRequestLoginUser from "../shared/types/RequestLoginUser"
import IRequestRegisterUser from "../shared/types/RequestRegisterUser"

const userLogin = (requestLogin: IRequestLoginUser) => UserAPI.post('/login', requestLogin)
const userRegister = (requestRegister: IRequestRegisterUser) => UserAPI.post('/register', requestRegister)

export const UserService = {
    userLogin,
    userRegister
}