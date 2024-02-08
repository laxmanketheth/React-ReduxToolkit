import React from 'react'
import TopNavbar from '../topNavbar/TopNavbar'
import { useSelector } from 'react-redux'
import {Card} from 'react-bootstrap'

const Cart = () => {

    const cartProducts = useSelector(state => state.cart)
  return (
    <div>
        <TopNavbar/>
      <h1 className='text-center'>here is your cart</h1>

      <div className="row">

{cartProducts && cartProducts.map((cartProducts) => (
    <div className="col-md-3 text-center mb-4" key={cartProducts.id}>
        <Card className='h-100'  style={{ width: '18rem', alignItems:'center'}}>    
            <Card.Img variant="top" src={cartProducts.image}style={{width:'120px', height:'140px'}} />
            <Card.Body>
                <Card.Title>{cartProducts.title}</Card.Title>
                {/* <Card.Text>{product.description}</Card.Text> */}
                <Card.Title>$ {cartProducts.price}</Card.Title>
            </Card.Body>
        </Card>
    </div>

))}
</div>

    </div>
  )
}

export default Cart
