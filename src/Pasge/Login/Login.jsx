

const Login = () => {
     return (
          <div className="hero bg-slate-900 mb-20 min-h-screen">
               <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Login now!</h1>
                         <p className="py-6">
                              Provident cupiditate voluptatem et in. Quaerat fugiat <br />ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                    </div>
                    <div className="card bg-base-100   w-full max-w-sm shrink-0 shadow-2xl">
                         <form className="card-body  ">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Login</button>
                              </div>
                              <div className="flex justify-between mt-4">
                                   <h1 className="font-medium">New here?</h1>
                                   <a className="hover:underline" href="">Create an account</a>
                              </div>
                              <div>
                                   <h1 className="text-center text-xl font-medium mt-4 mb-4">continue with</h1>
                                   <button className="bg-blue-800 font-medium py-2 mr-2 px-2 rounded  ">Google</button>
                                   <button className="bg-red-600 font-medium py-2 mr-2 px-2 rounded    ">Github</button>
                                   <button className="bg-slate-900 py-2 mr-2 px-2 rounded font-medium  ">Twitter</button>
                                   <button className="bg-pink-800 py-2 mr-2 px-2 rounded font-medium  ">Facebook</button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Login;