
const usePasswordService = () => {
    const validatePasswordCriteria = (password: string) => {

        if(password.length < 6 || password.length > 16){
            return false;
        }else{return true}

    }

    return {
        validatePasswordCriteria
    }
}
export default usePasswordService;