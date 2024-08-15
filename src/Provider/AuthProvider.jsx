import { createContext } from "react";
import { auth } from "../Config/FirebaseConfig";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {


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
     }




     const authentications = {
          googleLogin,
          createUser,
          signIn

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