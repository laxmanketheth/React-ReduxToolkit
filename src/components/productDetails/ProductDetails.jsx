import React, { useEffect, useState } from 'react'
import './ProductDetails.css';
import { useLocation } from 'react-router-dom';
import TopNavbar from '../topNavbar/TopNavbar';
import {Button} from 'react-bootstrap';


const ProductDetails = () => {

    const location = useLocation() //this hook gives us various properties including
                                  // the pathname property that represents the current URL path
    const id = location.pathname.split("/")[2] //we are splitting the current url wioth "/"splitter and 
                                               //getting the id out of it
    // console.log(id);
    const [singleProduct, setSingleProduct] = useState()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+ id)
        .then(res => res.json())
        .then(data => setSingleProduct(data))
    },[])
    console.log(singleProduct);

  return (
    <>
    <TopNavbar/>
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <img src= {singleProduct?.image} alt="product Image" />
                <p>{singleProduct?.title}</p>
                <p>$ {singleProduct?.price}</p>
                <p>Rating : {singleProduct?.rating.rate}</p>
                <p>{singleProduct?.description}</p>

            <Button>Add to Cart</Button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ProductDetails
