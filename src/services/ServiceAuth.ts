import { useAuthAPI } from "../providers/ClientIntegradorAPI"
import IRequestConfirmationRegisterUser from "../shared/types/RequestConfirmationRegisterUser";
import IRequestLoginUser from "../shared/types/RequestLoginUser"
import IRequestRegisterUser from "../shared/types/RequestRegisterUser"


const useAuthService = () => {
    const AuthAPI = useAuthAPI();
    const userLogin = (requestLogin: IRequestLoginUser) => AuthAPI.post('/login', requestLogin);
    const userRegister = (requestRegister: IRequestRegisterUser) => AuthAPI.post('/register', requestRegister)
    const userConfirmationRegister = (requestConfirmationRegister: IRequestConfirmationRegisterUser) => AuthAPI.post('/confirmation', requestConfirmationRegister)

    return {
        userLogin,
        userRegister,
        userConfirmationRegister
    }
}
export default useAuthService;