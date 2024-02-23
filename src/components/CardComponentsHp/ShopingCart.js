import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
//my-app\src\components\CardComponents\shoppingCart.css
function ShoppingCart({
    visibilty,
    products,
    onProductRemove,
    onClose,

}) {
    return (
        <div
            className="modal"
            style={{
                display: visibilty
                    ? "block"
                    : "none",
            }}>
            <div className="shoppingCart">
                <div className="header">
                    <h2>Booking cart</h2>
                    <button
                        className="btn close-btn"
                        onClick={onClose}>
                        <AiFillCloseCircle
                            size={30}
                        />
                    </button>
                </div>
                <div className="cart-products">
                    {products.length === 0 && (
                        <span className="empty-text">
                            Your List is
                            currently empty
                        </span>
                    )}
                    {products.map((product) => (
                        <div
                            className="cart-product"
                            key={product.id}>
                            <img
                                src={
                                    product.image
                                }
                                alt={product.name}
                            />
                            <div className="product-info">
                                <h3>
                                    {product.name}
                                </h3>
                                <span className="product-price">
                                    {product.price}
                                    $
                                </span>
                            </div>

                            <button
                                className="btn remove-btn"
                                onClick={() =>
                                    onProductRemove(
                                        product
                                    )
                                }>
                                <RiDeleteBin6Line
                                    size={20}
                                />
                            </button>
                        </div>
                    ))}
                    {/* <Button LinkComponent={Link}
                        to="/orders" variant="contained">

                        Proceed to checkout
                    </Button> */}
                    <Button LinkComponent={Link}
                        to="/vendorHp" variant="contained">

                        Proceed to checkout
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;