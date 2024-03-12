
const usePasswordService = () => {
    const validatePasswordCriteria = (password: string) => {

        if(password.length < 6 || password.length > 16){
            alert("A senha não atinge os requisitos mínimos: \n-Ter entre 6 e 16 caracteres.");
            return false;
        }else{return true}

    }

    return {
        validatePasswordCriteria
    }
}
export default usePasswordService;