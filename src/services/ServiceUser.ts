import { UserAPI } from "../providers/ClientIntegradorAPI"
import IRequestLoginUser from "../shared/types/RequestLoginUser"

const userLogin = (requestLogin: IRequestLoginUser) => UserAPI.post('/login', requestLogin)

export const UserService = {
    userLogin
}