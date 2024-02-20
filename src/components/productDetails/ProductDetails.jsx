import React, { useEffect, useState } from 'react'
import './ProductDetails.css';
import { useLocation } from 'react-router-dom';
import TopNavbar from '../topNavbar/TopNavbar';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const ProductDetails = () => {

    const location = useLocation() //this hook gives us various properties including
    // the pathname property that represents the current URL path
    const id = location.pathname.split("/")[2] //we are splitting the current url wioth "/"splitter and 
    //getting the id out of it
    // console.log(id);
    const [singleProduct, setSingleProduct] = useState()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [])
    // console.log(singleProduct);

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            add(singleProduct)   
        )
    };

    // const addToCart = () => {
    //     dispatch(
    //         add({...singleProduct,quantity})
            
    //     )
    // };

    // const increaseQuantity = () => {
    //     setQuantity(quantity + 1)
    //     //  dispatch(add(quantity))
    // };
    // const decreaseQuantity = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1)
    //     }
    // }

    return (
        <>  
            <TopNavbar />
            <div className='container parentbox'>
                <div className="row">
                    <div className="col-md-12 innerbox">
                      <div className="imgContainer">
                        <img src={singleProduct?.image} alt="product Image" />
                        </div>
                       
                        <h5>{singleProduct?.title}</h5>
                        <p className='price'>$ {singleProduct?.price}</p>
                        <p >Rating : {singleProduct?.rating.rate}</p>
                        <p className='description'>{singleProduct?.description}</p>

                        {/* <div className="quantity-control-div">
                            <RemoveCircleOutlineIcon onClick={decreaseQuantity} />
                            <span className='quantity' >{quantity}</span>
                            <AddCircleOutlineIcon onClick={increaseQuantity} />
                        </div> */}

                        <Button className= 'btn'   onClick={addToCart}>
                            Add to Cart
                            </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails
