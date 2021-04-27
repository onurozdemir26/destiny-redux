import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table, Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }
    addToCart = (product) => {
        this.props.actions.addToCart({quantity : 1, product})
        alertify.success(product.productName + "Sepete Eklendi")
    }

    render() {
        return (
            <div>
                <h5>
                    <Badge color="warning">
                        Ürünler
                    </Badge>
                    <Badge color="success">
                        {this.props.currentCategory.categoryName}
                    </Badge>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ürün İsmi</th>
                                <th>Adet Fiyatı</th>
                                <th>Birim Sayısı</th>
                                <th>Stoktaki Birimler</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(product =>(
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>@{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <td>
                                    <Button color="success" onClick={() => this.addToCart(product)}>
                                        Ekle
                                    </Button>
                                </td>
                            </tr>
                            ))}
                            
                            
                        </tbody>
                    </Table>
                </h5>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart:bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
