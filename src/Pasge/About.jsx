import { BsArrowRepeat } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

const About = () => {
     return (
          <div className="text-center bg-slate-800 text-white py-2 mb-20 ">
               <h1 className="text-4xl font-semibold mt-10 mb-6">About us</h1>
               <p className="text-lg font-light mb-10">We understand that glasses are more than just a visual aid; <br />
                    they are a reflection of your personality and a statement of your unique sense of style.
               </p>
               <div className="flex justify-center mb-10 ">

                    <img className="mix-blend-multiply " src="https://htmldemo.net/mandala/mandala/img/about-img.webp" alt="" />
               </div>
               <div className="flex justify-center  gap-52 mb-16">
                    <div >
                         <BsArrowRepeat className="text-center text-5xl mb-1 mx-auto" />
                         <h4 className="text-xl font-normal">30 DAYS RETURN</h4>
                    </div>
                    <div>
                         <FaShippingFast className="text-center text-5xl mb-1 mx-auto" />
                         <h4 className="text-xl font-normal">FREE SHIPPING</h4>
                    </div>
                    <div>
                         <GrSecure className="text-center text-5xl mb-1 mx-auto" />
                         <h4 className="text-xl font-normal">SECURE PAYMENT</h4>
                    </div>


               </div>
          </div>
     );
};

export default About;