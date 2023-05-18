import _ from 'lodash'; 
import Header from './components/header/Header';
import ProductsList from './components/productslist/Productslist';
import { Footer } from './components/footer/Footer';
import ProductsDateils from './components/productsDetails/Productsdetails';

function App() {
  const a = 2 + 3;
  const b = 3 + 4;
  const c = a + b;
  const f = _.add(c, 10); 
  return (
    <>
    <p>My first react application!</p>
      <Header />
      <ProductsList></ProductsList>
      <Footer />
      
      <p>{f}</p>
 
    </>
  );
}

export default App;
