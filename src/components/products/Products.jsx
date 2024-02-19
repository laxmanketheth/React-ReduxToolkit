import { useState } from 'react'
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import TopNavbar from '../topNavbar/TopNavbar'
import { useDispatch } from 'react-redux';
// import { add } from '../../store/cartSlice'
import { Link } from 'react-router-dom'
// import { Nav } from 'react-bootstrap'

const Products = () => {

    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    // const addToCart = (product) => {
    //     dispatch(add(product))
    // }

    return (
        <>
            <TopNavbar />
            <h2 className='text-center'>Shop your favourite Products</h2>
            <div className="row">
                {products && products.map((product) => (
                    <div className="col-md-3 text-center mb-4" key={product.id}>
                        <Card className='h-100' style={{ width: '18rem', alignItems: 'center' }}>
                            <Card.Img variant="top" src={product.image} style={{ width: '120px', height: '140px' }} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                {/* <Card.Text>{product.description}</Card.Text> */}
                                <Card.Title>$ {product.price}</Card.Title>
                                {/* <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button> */}
                           
                            
                            <Link to={`/product/${product.id}`}>
                            <Button variant="primary" >View Product</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Products
