import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Input } from 'react-daisyui';
import IUserData from '../shared/types/ResponseUserData';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useUserService from '../services/ServiceUser';
import IUserModifyData from '../shared/types/RequestModifyUserData';
import usePasswordService from '../services/PasswordService';
import { NavbarApp } from '../components/NavbarApp';
import { FooterCopyright } from '../components/FooterCopyright';
import Alerts from '../components/Alerts';

export const ProfileScreen: React.FC<any> = () => {

    function alertContext(type: string) {
        setVisible(true);
        setAlert(type);
    }

    const authUser = useAuthUser<IUserData>()
    const [alert, setAlert] = useState('');
    const [error, setError] = useState<string>('');
    const [visible, setVisible] = useState(false);
    const isAuthenticated = useIsAuthenticated()
    const { updateDataFromUser, getAllDataFromUser } = useUserService();
    const { validatePasswordCriteria } = usePasswordService();
    const [user, setUser] = useState<IUserData>({
        userId: authUser?.userId || '',
        name: '',
        email: ''
    });
    const [userConfirm, setUserConfirm] = useState<IUserModifyData>({
        userId: authUser?.userId || '',
        name: '',
        email: '',
        password: '',
        newPassword: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [isAlterPass, setIsAlterPass] = useState(false);
    const [inputClass, setInputClass] = useState('btn-disabled lg:text-2xl md:text-xl text-sm btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600');
    const handleEdit = () => {
        setIsEditing(true);
        setInputClass('lg:text-2xl md:text-xl text-sm btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600'); // Atualiza a classe do input
    };

    const handleAlterPass = () => {
        setIsAlterPass(!isAlterPass);
        setInputClass('lg:text-2xl md:text-xl text-sm btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600'); // Atualiza a classe do input
    };

    const handleSave = async () => {
        setVisible(false)
        if (!isAlterPass) {
            console.log("n alterei a senha")
            setUserConfirm({ userId: user.userId, name: user.name, email: user.email, password: userConfirm.password, newPassword: '' });
            if (!userConfirm.password || !validatePasswordCriteria(userConfirm.password)) {
                setError("Senha atual inválida ou incorreta. Preencha sua senha atual para confirmar alterações.")
                alertContext('error');
                setVisible(true)
            }
        } else {
            console.log("alterei a senha")
            if (userConfirm.newPassword != '' &&
                validatePasswordCriteria(userConfirm.newPassword)) {
                setUserConfirm({ userId: user.userId, name: user.name, email: user.email, password: userConfirm.password, newPassword: userConfirm.newPassword });
            } else {
                console.log("fiz nadaaaana senha nova")
                return
            }
        }

        if (validatePasswordCriteria(userConfirm.password)) {
            console.log("obj a ser modificado " + userConfirm);
            setIsEditing(false);
            setInputClass('btn-disabled lg:text-2xl md:text-xl text-sm btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600'); // Atualiza a classe do input
            console.log(userConfirm);

            await updateDataFromUser(
                userConfirm
            ).then((response) => {
                setUserConfirm({
                    userId: '',
                    name: '',
                    email: '',
                    password: '',
                    newPassword: '',
                });
                setError("Dados salvos com sucesso!")
                alertContext('success');
                setVisible(true)
                console.log("atualização realizada com sucesso")
            }).catch((error) => {
                console.log(error)
                console.log("atualização realizada com erro")
                setError("Dados inválidos para alteração.")
                alertContext('error');
                setVisible(true)
            })
        }
    };

    const handleCancel = () => {
        setVisible(false)
        console.log(user);
        setIsEditing(false);
        setInputClass('btn-disabled lg:text-2xl md:text-xl text-sm btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600'); // Atualiza a classe do input
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        console.log('verificando se usuario autenticado')
        if (isAuthenticated() && user.email != null) {
            console.log('carregando perfil do usuario')
            getAllDataFromUser(authUser!.userId)
                .then((response) => {
                    setUser(response.data)
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                })
        }
    }, [])

    return (
        <><div className='w-screen'><NavbarApp /></div><div className='h-screen w-screen lg:flex lg:flex-col lg:overflow-auto'>
            <div className='h-full w-full justify-center flex flex-col items-center'>
                <div className="avatar online placeholder items-center ">
                    <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <span className="text-xl ">{user?.name.charAt(0).concat(user.name.charAt(user.name.length - 1))}</span>
                    </div>
                </div>
                <div className='bg-base-300 p-9 bg-opacity-90 rounded-lg w-11/12 lg:w-1/2 md:w-2/3 max-w-4xl'>
                    {visible && Alerts(alert, error)}
                    <div className='animate-bounce font-extrabold text-base font-sans boboca text-center pt-4 lg:pb-3'>
                        <p className='lg:text-3xl md:text-3xl text-2xl'></p>
                    </div>
                    <label className=''>Nome</label>
                    <div className='flex component-preview py-4 font-sans'>
                        <Input
                            name='name'
                            onChange={handleChange}
                            disabled={!isEditing}
                            value={user?.name}
                            className={inputClass} />
                    </div>
                    <label className=''>Email</label>
                    <div className='flex component-preview py-4 font-sans'>
                        <Input
                            name='email'
                            onChange={handleChange}
                            disabled={!isEditing}
                            value={user?.email}
                            className={inputClass} />
                    </div>
                    {isEditing && (
                        <>
                            <label className='text-pink-600 font-bold'>Confirme sua senha atual para qualquer alteração</label>
                            <div className='flex component-preview py-4 font-sans'>
                                <Input
                                    name='password'
                                    type='password'
                                    onChange={(e) => setUserConfirm({ ...user, newPassword: userConfirm.newPassword, password: e.target.value })}
                                    disabled={!isEditing}
                                    placeholder={'***********'}
                                    className={inputClass} />
                            </div>
                            <div className='flex component-preview py-4 font-sans'>
                                <label className='text-white font-bold text-lg'>Quer alterar sua senha?</label>
                                <div className='pl-5'>
                                    <input name='checkAlterPass' onChange={handleAlterPass} type="checkbox" className="checkbox checkbox-lg" />
                                </div>
                            </div>
                            {isAlterPass && (<>

                                <div className='flex component-preview py-4 font-sans'>
                                    <label className='text-orange font-bold text-sm'>Lembre-se de preencher também sua senha atual para alterar a senha.</label>
                                </div>
                                <label className='text-pink-600 font-bold'>Digite sua nova senha</label>
                                <div className='flex component-preview py-4 font-sans'>
                                    <Input
                                        name='newPassword'
                                        type='password'
                                        onChange={(e) => setUserConfirm({ ...user, password: userConfirm.password, newPassword: e.target.value })}
                                        disabled={!isEditing}
                                        placeholder={'***********'}
                                        className={inputClass} />
                                </div>
                            </>)}

                        </>
                    )}
                    <div className='inline-grid lg:grid-flow-col justify-stretch w-full items-center space-y-1 lg:space-y-0 lg:space-x-3'>
                        {!isEditing && <button onClick={handleEdit}
                            className='btn w-full text-base text-white bg-lime-500 btn-active font-bold lg:text-xl font-mono normal-case'
                        >Alterar dados</button>}
                        {isEditing && <button onClick={handleSave}
                            className='btn w-full text-base text-white bg-lime-500 btn-active font-bold lg:text-xl font-mono normal-case'
                        >Salvar</button>}
                        {isEditing && <button onClick={handleCancel}
                            className='btn w-full text-base text-white bg-red-500 btn-active font-bold lg:text-xl font-mono normal-case'
                        >Cancelar</button>}
                    </div>
                </div>
            </div>
        </div>
            <div className='w-screen bottom-0 bg-base-100'>
                <FooterCopyright />
            </div></>

    );
}