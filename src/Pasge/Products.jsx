import { useLoaderData } from "react-router-dom";
import ShowProducts from "../components/ShowProducts/ShowProducts";

const Products = () => {

     const data = useLoaderData([])
     // console.log(data)
     return (
          <div>
               <div>
                    <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />

                    <ShowProducts name={'Featured Products'} data={data}></ShowProducts>

               </div>
          </div >
     );
};

export default Products;