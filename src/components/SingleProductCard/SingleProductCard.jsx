
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SingleProductCard = ({ item }) => {

     const { price, image, name, discount, id } = item;
     // console.log(item)
     return (
          <div className="shadow-xl pt-6 shadow-blue-600/20  px-4 bg-sky-800 rounded-lg">

               {discount && <p className="text-xl font-bold text-red-500">{discount} % off</p>}
               <img src={image} alt="" />
               <h1 className="text-xl font-bold mb-4 text-white">$ {price}</h1>
               <h4 className="text-base font-medium mb-6 text-white">{name}</h4>
               <div className="text-end">
                    <Link to={`/product/${id}`} >
                         <button className="btn btn-accent text-white text-sm m-4 ">
                              DETAILS!
                         </button>
                    </Link>
               </div>
          </div>
     );

};

SingleProductCard.propTypes = {
     item: PropTypes.object,
}
export default SingleProductCard;