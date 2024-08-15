import { Link, useNavigate } from "react-router-dom";
import Social from "../components/Social/Social";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
     const { createUser } = useContext(AuthContext);
     const navigate = useNavigate();

     const handelCreateSubmit = (event) => {
          event.preventDefault();
          // get field value 
          // const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;

          // validation
          if (password.length < 6) {
               toast.error("Password should be at least 6 characters ")
          }
          // create a new User

          createUser(email, password)
               .then(() => {

                    toast.success('Login Successfully !');
                    navigate("/")

               })
               .catch(error => {
                    toast.error(error.message);
               })
     }
     return (
          <div className="hero bg-slate-900  min-h-screen">
               <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Register now!</h1>
                         <p className="py-6">
                              Provident cupiditate voluptatem et in. Quaerat fugiat <br />ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                    </div>
                    <div className="card bg-base-100   w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelCreateSubmit} className="card-body  ">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text"> Full Name</span>
                                   </label>
                                   <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Image Url</span>
                                   </label>
                                   <input type="text" placeholder="Image" className="input input-bordered" />

                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="password" className="input input-bordered" name="password" required />

                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Register</button>
                              </div>
                              <div className="flex justify-between mt-2">
                                   <h1 className="font-medium">Have An Account ?</h1>
                                   <Link to={"/login"} className="hover:underline" >Please Login</Link>
                              </div>
                              <Social></Social>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;