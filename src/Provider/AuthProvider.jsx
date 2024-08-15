import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/FirebaseConfig";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import toast from "react-hot-toast";


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);

     // google login
     const googleLogin = () => {
          return signInWithPopup(auth, googleProvider)
     }
     // sign up
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     }
     // sign in
     const signIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
     };
     // Log out
     const logOut = () => {
          signOut(auth)
               .then(() => {
                    toast.success('LogOut Successfully !');
               })
     }
     // using observer
     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               setUser(user)
          })
     }, [])
     console.log(user)



     const authentications = {
          googleLogin,
          createUser,
          signIn,
          logOut,
          user,

     }

     return (
          <AuthContext.Provider value={authentications}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;

AuthProvider.propTypes = {
     children: PropTypes.node,
}