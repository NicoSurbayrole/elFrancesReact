import {useCart} from "../../context/cart/useCart";

const Carrito = () =>{ 
    const {getAllCartProducts} = useCart()
    const cart = getAllCartProducts()
return (
    cart.map((item) => (
        <div key={item.product_id}>
            <img width={"100px"} src={item.imagUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <small>u$s{item.price}</small>
            <p>cantidad: {item.count}</p>
            <button>Eliminar</button>
        </div>
    ))
)
}

export default Carrito