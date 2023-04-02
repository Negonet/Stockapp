import { useContext, useState } from "react"
import { auth } from "../../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginContext } from "../context/LoginContext";

export const Clientes = () => {

    const { user, logout } = useContext(LoginContext)
    const [ values, setValues ] = useState({
        email: '',
        password: ''
    })
    
    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    return (
        <div>
            <div className=" h-30 max-sm:mt-[40px] my-[50px] items-center bg-slate-50 mx-auto rounded-lg max-sm:w-[330px] max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg max-sm:text-base font-mono text-center text-3xl">Clientes</h2>
            </div>
            <div className="mb-[100px] max-sm:mb-20 max-sm:mt-[10px] max-sm:mx-[10px] bg-[url('/public/imgs/bg-01.jpg')] h-fit-content rounded-lg sm:w-[1000px] mx-auto bg-no-repeat bg-cover bg-center">

                <div className="grid sm:grid-cols-2 mx-auto sm:max-w-[1000px] max-sm:h-[600px] h-[550px] max-sm:max-w-[900px] sm:mt-[40px] place-items-center">
                    <div className="sm:col-start-1 my-[20px] sm:my-[40px] mx-0 sm:w-[300px] max-sm:w-[250px] max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
                        <div className="p-2">
                            <p className="hidden"></p>
                            <div className="font-bold text-gray-700 items-center flex justify-center text-xl mb-2">
                                <h4 className="text-gray-100">Acceso a Clientes</h4>
                            </div>
                            <p className="text-gray-200 text-base">Usuario: <strong>{user.email}</strong></p>
                            
                            <div className="flex flex-col items-center justify-center mb-5">
                                <button onClick={logout} className="bg-slate-700 py-[2px] px-[5px] mt-4 mx-[10px] border-[0.1px] border-gray-500 rounded-md text-gray-400 shadow-lg hover:bg-slate-600 hover:text-white ease-in-out duration-300">
                                    Salir
                                </button>
                            </div>
                            <hr className="h-1 mx-auto mt-1 mb-1 bg-gray-200 border-0 rounded"/>
                        </div>
                    </div>
                    <div className="sm:col-start-2 my-[20px] sm:my-[40px] mx-0 sm:w-[300px] max-sm:w-[250px] max-h-fit bg-white/10 border-[0.1px] border-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">
                        <div className="p-2">
                            <h2 className="mt-1 text-white font-lobster text-3xl text-center">Usuario nuevo</h2>
                            <form  onSubmit={handleSubmit} className="max-w-[500px] sm:mt-10 flex flex-col items-center justify-center max-sm:h-[200px]">
                                <input
                                    value={values.email}
                                    type={'text'}
                                    onChange={handleInputChange}
                                    className="block py-1 text-white bg-gray-700 rounded-md max-sm:w-[230px] w-[250px] m-3 sm:m-5 placeholder:text-center"
                                    placeholder=' Usuario o e-mail'
                                    name='email'
                                    />
                                <input
                                    value={values.password}
                                    type={'password'}
                                    onChange={handleInputChange}
                                    className="block py-1 text-white bg-gray-700 rounded-md max-sm:w-[230px] w-[250px] m-3 sm:m-5 placeholder:text-center"
                                    placeholder=' Contraseña'
                                    name='password'
                                    />

                                <button type="submit" onClick={register} className="efecto mt-3 max-sm:mt-2 px-4 py-1 rounded-md hover:bg-green-600 hover:text-gray-100 border-[0.5px] border-gray-800 duration-500 bg-slate-200 mx-auto">
                                    Crear usuario
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

