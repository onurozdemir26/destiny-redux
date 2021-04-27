import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { connect } from 'react-redux';
import {Table, Button } from 'reactstrap'
import alertify from 'alertifyjs'

class cartDetail extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + "Sepetten Silindi")
    }


    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ürün İsmi</th>
                            <th>Fiyatı</th>
                            <th>Miktar</th>
                            
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.quantityPerUnit}</td>
                                
                                <td>
                                    <Button color="danger" onClick={() => this.removeFromCart(cartItem.product)}>
                                        Sil
                                    </Button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartDetail);