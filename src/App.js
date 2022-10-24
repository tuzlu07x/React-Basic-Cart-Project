import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import products from "./products.json"
import Product from './components/Product';
import Header from './components/Header';

function App() {
  const [money, setMoney] = useState(100)
  const [basket,setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
    let findProduct = products.find(product => product.id === item.id)
      return acc + (item.amount * findProduct.price)
    },0))
  },[basket])

  return (
   <div>
    <Header total={total} money={money} />
    {products.map(product => (
        <Product total={total} money={money} key={product.id} basket={basket} setBasket={setBasket} product={product} />
    ))}
   </div>
  );
}

export default App;
