
function Product({product, basket, setBasket}){

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        let checkBasket = basket.find(item => item.id === product.id)
        let basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        if(!checkBasket){
            checkBasket = {
                id:product.id,
                amount:0
            }
        }
            checkBasket.amount +=1
            setBasket([...basketWithoutCurrent, checkBasket])
        
    }
    const removeBasket = () => {
        let currentBasket = basket.find(item => item.id === product.id)
        let basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -=1
            if(currentBasket.amount === 0){
                setBasket([...basketWithoutCurrent])
            }else{
                setBasket([...basketWithoutCurrent,currentBasket])

            }
    }
    return (
        <div className="product">
            <h3>{product.title}</h3>
            <h3>$ {product.price}</h3>
            <div className="action">
                <button disabled={!basketItem} onClick={removeBasket}>Sell</button>
                <button onClick={addBasket}>Buy</button>
                <span className="amount">{basketItem && basketItem.amount || 0 }</span>
            </div>
            <style jsx>
                {`
                .product{
                    pedding: 10px;
                    bacground: #fff;
                    border: 1px solid #ddd;
                    margin: 20px;
                }
                `}
            </style>
        </div>
    );
  
} 
export default Product