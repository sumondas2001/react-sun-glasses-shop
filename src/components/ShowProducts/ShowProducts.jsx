
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import PropTypes from 'prop-types';
const ShowProducts = ({ data, name }) => {
     return (
          <>

               <h1 className="text-3xl text-red-600 font-bold px-10 mt-4">{name}</h1>

               < div className="grid grid-cols-5 m-10   gap-6" >
                    {data.map((item) => <SingleProductCard key={item.id} item={item} ></SingleProductCard>)}
               </ div>
          </>
     )
};


ShowProducts.propTypes = {
     data: PropTypes.object,
     name: PropTypes.string
}
export default ShowProducts;