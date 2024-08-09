import { Link } from "react-router-dom";


const NotFound = () => {
     return (
          <div className="flex justify-center items-center h-screen ">
               <div>
                    <h1 className="text-[200px] font-black  text-center mb-10 text-sky-900 ">440</h1>
                    <h1 className="text-8xl font-bold">NOT FOUND</h1>
                    <div className="text-center">
                         <Link className="text-xl font-semibold btn-success btn mt-10 " to={"/"}> Home</Link>
                    </div>
               </div>


          </div>
     );
};

export default NotFound;