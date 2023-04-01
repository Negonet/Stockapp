import { useContext, useState } from "react"
import { LoginContext } from "../context/LoginContext"

export const LoginScreen = () => {

    const { tryLogin } = useContext(LoginContext)
    
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
        
        tryLogin(values)
    }

    return (

        <div className="my-[50px] max-sm:mt-[100px] max-sm:mx-[10px] bg-[url('/public/imgs/bg-02.jpg')] max sm:h-[750px] rounded-lg sm:w-[1000px] mx-auto bg-no-repeat bg-cover bg-center">
            <div className="grid items-center place-items-center justify-center max-sm:my-[0px] ms:max-h-[500px]">
                <div className="mx-auto my-10 max-sm:h-[400px] sm:h-[450px] sm:my-[150px] bg-white/5 border-[0.1px] border-gray-600 bg-opacity-80 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">
                    <h2 className="mt-10 text-white font-lobster text-3xl text-center">Login</h2>

                    <form  onSubmit={handleSubmit} className="max-w-[500px] sm:mt-20 flex flex-col items-center justify-center max-sm:h-[350px] ">
                        <input
                            value={values.email}
                            type={'text'}
                            onChange={handleInputChange}
                            className="block py-1 text-white bg-gray-700 rounded-md max-sm:w-[230px] w-[300px] m-3 sm:m-5 placeholder:text-center"
                            placeholder=' Usuario o e-mail'
                            name='email'
                            />
                        <input
                            value={values.password}
                            type={'password'}
                            onChange={handleInputChange}
                            className="block py-1 text-white bg-gray-700 rounded-md max-sm:w-[230px] w-[300px] m-3 sm:m-5 placeholder:text-center"
                            placeholder=' Contraseña'
                            name='password'
                            />

                        <button type="submit" className="efecto mt-3 max-sm:mt-8 px-4 py-1 rounded-md hover:bg-red-500 hover:text-gray-100 border-[0.5px] border-gray-800 duration-500 bg-slate-200 mx-auto">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}