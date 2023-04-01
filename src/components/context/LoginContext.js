import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })

    const tryLogin = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
    }
    
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