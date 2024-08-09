import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
     const product = useLoaderData();
     const { price, image, name, discount, description } = product;
     console.log(product)
     return (
          <div className="flex justify-around items-center bg-slate-800  mb-20 ">
               <img src={image} alt="" />
               <div className="">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">{discount} % off</h3>
                    <h1 className="text-4xl font-semibold mb-4">{name}</h1>
                    <p className="text-lg font-normal mb-4">{description}</p>
                    <h2 className="text-2xl font-semibold mb-14"> $ {price}</h2>

                    <button className="w-96 text-white hover:bg-emerald-400 text-base font-semibold py-4 rounded-xl bg-blue-600">BUY NOW!</button>
               </div>
          </div>
     );
};

export default ProductDetails;