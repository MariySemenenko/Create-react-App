import ProductsDateils from "../productsDetails/Productsdetails"; 
 
const ProductsList = () => {
const text = 'I am productsList';

const products = [
    {id: '3', name: 'orange', type: 'apple', price: 100},
    {id: '1', name: 'milk', type: 'chery', price: 5},
    {id: '8', name: 'bread', type: 'banana', price: 10},
    {id: '5', name: 'cucumber', type: 'cocos', price: 150},

]



    return (
<>
<div>{text}</div>
<ul>
    {products.map((product) => (
        <li>
            <ProductsDateils
            key={product.id}
            name={product.name}
            type={product.type}
            price={product.price}
            />
        </li>
    ))}
</ul>

{/* 
<ProductsDateils name='milk'  />
<ProductsDateils name='bread' type='2' price={100} />
<ProductsDateils name='chocolad' type='3' price='200' />
<ProductsDateils name='energy drink' type='4' price='150' /> */}
</>
    )
}

export default ProductsList;