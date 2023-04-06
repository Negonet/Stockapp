import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Swal from "sweetalert2";

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })

    const tryLogin = async (values) => {
       try { await signInWithEmailAndPassword(auth, values.email, values.password);
            if(user.logged = true) {
                const Toast = Swal.mixin({
                    icon: 'sucess',
                    title: 'Acceso concedido',
                    text: '',
                    width: '300px',
                    background: 'white',
                    position: 'top-end',
                    showConfirmButton: false,
                    toast: true,
                    timer: 1000,
                    color: 'black',
                    allowEscapeKey: false,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    Toast.fire({
                      icon: 'success',
                      title: 'Sesion iniciada',
                    })
            }
            } catch  (err) {
            Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un problema',
                    text: 'Los datos de email/contraseña son incorrectos',
                    width: '300px',
                    background: 'black',
                    confirmButtonColor: 'green',
                    color: 'white',
                    allowEscapeKey: false,
                    
            }).then(() => {
                window.location='/Login';
            });
              
        
    }}
    
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser ({
                    email: null,
                    logged: false,
                    uid: null
                })
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser({
                email: user.email,
                logged: true,
                uid: user.uid
            })
            } else {
                logout()
        }
    })
    }, [])

    return (

        <LoginContext.Provider value={{
            user,
            tryLogin,
            logout
        }}>
            {children}

        </LoginContext.Provider>
    )

}