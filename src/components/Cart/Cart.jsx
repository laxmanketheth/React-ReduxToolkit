import React from 'react'
import TopNavbar from '../topNavbar/TopNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import { remove } from '../../store/cartSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'

const Cart = () => {

    const cartProducts = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const removeFromCart = (productId) => {
        dispatch(remove(productId))
    }
    // console.log(cartProducts);

    return (
        <div>
            <TopNavbar />
            <h1 className='text-center'>here is your cart</h1>

            <div className="container">
            <div className="row">

                {cartProducts && cartProducts.map((cartProduct) => (
                    <div className="col-md-3 text-center mb-4">
                        <Card className='h-100' style={{ width: '18rem', alignItems: 'center' }}>
                            <Card.Img variant="top" src={cartProduct.image} style={{ width: '120px', height: '140px' }} />
                            <Card.Body>
                                <Card.Title>{cartProduct.title}</Card.Title>
                                {/* <Card.Text>{product.description}</Card.Text> */}
                                <Card.Title>$ {cartProduct.price}</Card.Title>
                                <Button className='removeBtn' variant="primary" onClick={() => removeFromCart(cartProduct.id)}>Remove from Cart</Button>
                           
                            </Card.Body>
                        </Card>
                    </div>

                ))}
            </div>
            </div>

        </div>
    )
}

export default Cart
