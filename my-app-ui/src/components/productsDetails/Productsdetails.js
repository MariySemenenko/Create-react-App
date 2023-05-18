
import PropTypes from 'prop-types'; //щоб стандартизувати наші пропси

function ProductsDateils ({name, type, price}) {
// const productName = props.name;
const totalPrice = price * 1.2;

if (!name || !type) {
    return (
        <span>Product is empty</span>
    )
}
 if (!price) {
    return '';
 }
    return (
        <div>
           <>I am products.</> 
           <>My name is: {name}. </> 
           <>My name is type: {type}. </>
           <>This price: {totalPrice}. </>
        </div>
    )
}

ProductsDateils.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number.isRequired,
  };

export default ProductsDateils;