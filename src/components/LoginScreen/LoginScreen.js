import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { Formik } from "formik";
import * as Yup from 'yup';

const confirmLogin = Yup.object().shape({
    email: Yup.string()
                .required('Este campo es obligatorio')            
                .email('El email es invalido'),
    password: Yup.string()
                    .required('Este campo es obligatorio')
                    .min(8, '8 o mas caracteres')
})  

export const LoginScreen = () => {

    const { tryLogin } = useContext(LoginContext)
    
    const loginUser = (values) => {
        
        
        tryLogin(values)
    }

    return (

        <div className="my-[50px] max-sm:mt-[100px] max-sm:mx-[10px] bg-[url('/public/imgs/bg-02.jpg')] max sm:h-[750px] rounded-lg sm:w-[1000px] mx-auto bg-no-repeat bg-cover bg-center">
            <div className="grid items-center place-items-center justify-center max-sm:my-[0px] ms:max-h-[500px]">
                <div className="mx-auto my-10 max-sm:h-[400px] sm:h-[450px] sm:my-[150px] bg-white/5 border-[0.1px] border-gray-600 bg-opacity-80 backdrop-filter backdrop-blur-lg p-2 rounded-lg overflow-hidden shadow-lg">
                    <h2 className="mt-10 text-white font-lobster text-3xl text-center">Login</h2>
                <Formik 
                    initialValues={{
                    email: '',
                    password: ''
                    }}
                    validationSchema={confirmLogin}
                    onSubmit={loginUser}
                
                >
                    {({values, errors, handleChange, handleSubmit, isSubmitting}) => (
                        <form  onSubmit={handleSubmit} className="max-w-[500px] sm:mt-20 flex flex-col items-center justify-center max-sm:h-[350px] ">
                            <input
                                value={values.email}e
                                type={'text'}
                                onChange={handleChange}
                                className={errors.email
                                    ? "block text-red-400 border-2 border-red-500 py-1 bg-gray-700 text-center rounded-md max-sm:w-[230px] w-[300px] mx-3 sm:mx-5 sm:my-1 placeholder:text-center"
                                    : "block py-1 text-white bg-gray-700 rounded-md max-sm:w-[230px] text-center w-[300px] m-3 sm:m-5 placeholder:text-center"}
                                placeholder=' Usuario o e-mail'
                                name='email'
                            />
                                {errors.email && <p className="mt-2 mx-auto max-sm:text-xs text-sm mb-5 text-red-600"><span className="bg-slate-300 p-1 rounded-md"><span className="font-medium">Espera!</span> {errors.email}</span></p>}
                            <input
                                value={values.password}
                                type={'password'}
                                onChange={handleChange}
                                className={errors.email
                                    ? "block text-red-400 border-2 border-red-500 py-1 bg-gray-700 text-center rounded-md max-sm:w-[230px] w-[300px] mx-3 sm:mx-5 sm:my-1 placeholder:text-center"
                                    : "block py-1 text-white bg-gray-700 rounded-md max-sm:w-[230px] text-center w-[300px] m-3 sm:m-5 placeholder:text-center"}
                                placeholder=' Contraseña'
                                name='password'
                            />
                                {errors.password && <p className="mt-2 mx-auto max-sm:text-xs mb-3 text-sm text-red-600"><span className="bg-slate-300 p-1 rounded-md"><span className="font-medium">Espera!</span> {errors.password}</span></p>}

                            <button type="submit" disabled={isSubmitting} className="efecto mt-8 px-4 py-1 rounded-md hover:bg-red-500 hover:text-gray-100 border-[0.5px] border-gray-800 duration-500 bg-slate-200 mx-auto">
                                Entrar
                            </button>
                        </form>
                        )}
                </Formik>
                </div>
            </div>
        </div>
    )
}