import React, {Component} from 'react';
import {connect} from 'react-redux'
import {removeCartProduct, removeAllCartProduct} from '../actions/action'

import './Cart.css'

class Cart extends Component {
    render() {
        const cart = this.props.cart;
        console.log(cart.length === 0);
        return (
            <div className="cartContainer">
                {
                    cart.length > 0 ? (
                        <div className="remove">
                            <button onClick={this.props.removeAllCartProduct.bind(this , cart)} className="button2">Remove All Item</button>
                        </div>
                    ) : ''
                }
                <div className="container2">
                {
                    cart.map(item => 
                        <div className="cartProduct" key={item.id}>
                            <div className="cartContent">
                                <img src={item.img}/>
                                <h3>Product: {item.title}</h3>
                                <h3>Price: {`Rp. ${item.price.toLocaleString()}`}</h3>
                                <h3>Total Item: {item.quantity}</h3>
                                <h3>Total Amount: {item.price * item.quantity}</h3>
                                <button onClick={this.props.removeCartProduct.bind(this , item)} className="buttons">Remove Item</button>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
   
    return{
        products : state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeCartProduct: cart => dispatch(removeCartProduct(cart)),
        removeAllCartProduct: cart => dispatch(removeAllCartProduct(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);