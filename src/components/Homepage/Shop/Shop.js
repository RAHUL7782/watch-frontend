import { useDispatch, useSelector } from "react-redux";
import { qtyIncrease, qtyDecrease, proqtyDelete } from "../ProductSlice/productSlice";
// import { CiCircleRemove } from "react-icons/ci";y
import { useNavigate } from "react-router-dom";
import "../Shop/Shop.css";

const Shop = () => {
    let total = 0;
    const navigate = useNavigate();
    const cartData = useSelector((state) => state.cartSlice.cart);
    const dispatch = useDispatch();

    const increaseQuantity = (id) => {
        dispatch(qtyIncrease({ id: id }));
    }

    const decreaseQuantity = (id) => {
        dispatch(qtyDecrease({ id: id }));
    }

    const removeProduct = (id) => {
        dispatch(proqtyDelete({ id: id }));
    }

    const renderedCartItems = cartData.map((item) => {
        total += item.productPrice * item.quantity;
        return (
            <tr key={item.id}>
                <td><img src={item.productImage} width="150px" alt="Product" /></td>
                <td>{item.ProductName}</td>
                <td>{item.ProductTitle}</td>
                <td>${item.productPrice}</td>
                <td>
                    <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="quantity-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                </td>
                <td>${item.productPrice * item.quantity}</td>
                <td>
                    <button className="delete-button" onClick={() => removeProduct(item.id)}>Delete</button>
                </td>
            </tr>
        );
    });

    return (
        <div className="shop-container">
            <h1>My Shop</h1>
            <table className="cart-table">
                <thead>
                    <tr>

                        <th>Product Image</th>
                        <th>ProductName</th>
                        <th>ProductTitle</th>
                        <th>productPrice</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove product</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="7">
                            <hr size="2" color="blue" />
                        </td>
                    </tr>
                    {renderedCartItems}
                </tbody>
            </table>
            <h1 className="total-wrapper">Total: ${total}</h1>
            <br />
            <center>
                <button className="proceed-button" onClick={() => { navigate("/Buynow") }}>Proceed to Pay</button>
            </center>
        </div>
    );
}

export default Shop;
