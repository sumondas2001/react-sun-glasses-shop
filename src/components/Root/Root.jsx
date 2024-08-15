import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";



const Root = () => {
     return (
          <div>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
               <Toaster />
          </div>
     );
};

export default Root;