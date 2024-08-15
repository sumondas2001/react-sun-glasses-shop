import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const Social = () => {
     const navigate = useNavigate();
     const { googleLogin, gitHubLogin } = useContext(AuthContext);
     const handelGoogleLogin = () => {
          googleLogin()
               .then(() => {

                    toast.success('Login Successfully !');
                    navigate("/")

               })
               .catch(error => {
                    toast.error(error.message);
               })
     }
     const handelGitHubLogin = () => {
          gitHubLogin()
               .then(() => {

                    toast.success('Login Successfully !');
                    navigate("/")

               })
               .catch(error => {
                    toast.error(error.message);
               })
     }
     return (
          <div>
               <div>
                    <h1 className="text-center text-xl font-medium mt-4 mb-4">continue with</h1>
                    <button onClick={handelGoogleLogin} className="bg-blue-800 font-medium py-2 mr-2 px-2 rounded  ">Google</button>
                    <button
                         onClick={handelGitHubLogin}
                         className="bg-red-600 font-medium py-2 mr-2 px-2 rounded    ">Github</button>
                    <button className="bg-slate-900 py-2 mr-2 px-2 rounded font-medium  ">Twitter</button>
                    <button className="bg-pink-800 py-2 mr-2 px-2 rounded font-medium  ">Facebook</button>
               </div>
          </div>
     );
};

export default Social;