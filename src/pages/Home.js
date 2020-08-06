import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProductToCart} from '../actions/action';

import './Home.css'

class Home extends Component {
    render() {
        const products = this.props.products;
        return (
            <div className="homeContainer">
                    {products.map(item => 
                    <div className="product" key={item.id}>
                        <li >
                            <img src={item.img}/>
                            <h4>{item.title}</h4>
                            <h3>{`Rp. ${item.price.toLocaleString()}`}</h3>
                            <p>{item.description}</p>
                            <button onClick={this.props.addProductToCart.bind(this , item)} className="buttons" >Add To Cart</button>
                        </li>
                    </div>
                    )}
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
        addProductToCart: product => dispatch(addProductToCart(product))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);