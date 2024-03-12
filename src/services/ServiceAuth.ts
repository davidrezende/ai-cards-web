import { useAuthAPI } from "../providers/ClientIntegradorAPI"
import IRequestLoginUser from "../shared/types/RequestLoginUser"
import IRequestRegisterUser from "../shared/types/RequestRegisterUser"


const useAuthService = () => {
    const AuthAPI = useAuthAPI();
    const userLogin = (requestLogin: IRequestLoginUser) => AuthAPI.post('/login', requestLogin)
    const userRegister = (requestRegister: IRequestRegisterUser) => AuthAPI.post('/register', requestRegister)

    return {
        userLogin,
        userRegister,
    }
}
export default useAuthService;