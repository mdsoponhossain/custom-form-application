import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firbase";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            console.log(currentUser)
        })
    }, [])



    const handleSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleUpdateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const handleLogout = ()=>{
        return signOut(auth);
    }
    const handleSignIn =(email,password)=>{
      return  signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {
        handleSignup,
        handleUpdateUser,
        currentUser,
        handleLogout,
        handleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;