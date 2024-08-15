import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/FirebaseConfig";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import toast from "react-hot-toast";


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true)

     // google login
     const googleLogin = () => {
          setLoading(true);
          return signInWithPopup(auth, googleProvider)
     };
     // git hub login
     const gitHubLogin = () => {
          setLoading(true);
          return signInWithPopup(auth, gitHubProvider)
     }
     // sign up
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }
     // sign in
     const signIn = (email, password) => {
          setLoading(true);
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
               setUser(user);
               setLoading(false);
          })
     }, [])




     const authentications = {
          googleLogin,
          createUser,
          signIn,
          logOut,
          user,
          loading,
          gitHubLogin

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