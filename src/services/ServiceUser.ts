import { useAuthAPI, useUserAPI } from "../providers/ClientIntegradorAPI"
import IRequestLoginUser from "../shared/types/RequestLoginUser"
import IUserModifyData from "../shared/types/RequestModifyUserData";
import IRequestRegisterUser from "../shared/types/RequestRegisterUser"


const useUserService = () => {
    const UserAPI = useUserAPI();
    const getAllDataFromUser = (userId: string) => UserAPI.get('/'+userId)
    const updateDataFromUser = (request: IUserModifyData) => UserAPI.put('',request)

    return {
        getAllDataFromUser,
        updateDataFromUser
    }
}
export default useUserService;