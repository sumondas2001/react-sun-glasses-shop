import { useLoaderData } from "react-router-dom";

import HomeBanner from "./HomeBanner/HomeBanner";
import ShowProducts from "../components/ShowProducts/ShowProducts";
import About from "./About";



const Home = () => {
     const data = useLoaderData();

     return (
          <div>
               <HomeBanner></HomeBanner>
               <ShowProducts name={'New Arrivals'} data={data.slice(0, 5)}></ShowProducts>
               <ShowProducts name={'Top Rated'} data={data.slice(5, 10)}></ShowProducts>
               <ShowProducts name={'Top Sailing'} data={data.slice(12, 20)}></ShowProducts>
               <About></About>
          </div >
     );
};

export default Home;