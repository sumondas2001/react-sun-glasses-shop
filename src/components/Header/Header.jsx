import { Link, NavLink } from "react-router-dom";


const Header = () => {
     const navLink = <>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/products"}>Products</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/blog"}>Blog</NavLink></li>



     </>
     return (
          <div className="navbar bg-slate-800 justify-between px-20 text-xl font-bold mb-10 py-4 ">
               <div className="navbar-start">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                              </svg>
                         </div>
                         <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              {navLink}

                         </ul>
                    </div>
                    <Link to={"/"} className=" text-4xl font-bold text-red-500">Glasses</Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                         {navLink}


                    </ul>
               </div>
               <div>

                    <NavLink to={"/login"}>
                         <button>Login</button>
                    </NavLink>

               </div>

          </div>
     );
};

export default Header;