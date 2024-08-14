import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './ProductDetails.module.css';
import FeaturedProuducts from '../FeaturedProuducts/FeaturedProuducts';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';




export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null)
  let { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (id) {
        getProductDetails(id);
    }
}, [id]);

async function getProductDetails(id) {
    try {
        let { data } = await axios.get(`http://localhost:4000/data/${id}`);
        setProductDetails(data);
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}
  return<>
    <div className="row align-items-center py-3">
    <div className="col-md-4">
    <Slider {...settings}>
    {/* {productDetails?.img.map((img)=> <img src={img}/>)} */}
    {Array.isArray(productDetails?.image) ? (
              productDetails?.image.map((img, index) => (
                <img key={index} src={img} alt={`Product ${index}`} className='w-100 cursor-pointer' />
              ))
            ) : (
              <img src={productDetails?.image} alt="Product" className='w-100 cursor-pointer' />
            )}
    
    </Slider>

    </div>
    <div className="col-md-8">
      <h3>{productDetails?.title}</h3>
      <p className="text-muted p-2">{productDetails?.subtitle}</p>

      <div className="d-flex justify-content-between">
        <span className='text-muted'>{productDetails?.price} EGP</span>
        <span>
          <i className="fas fa-star rating-color"></i>
          {productDetails?.raitingAvg}
        </span>
      </div>

      <button className='btn bg-main text-white w-100'> + Add</button>
    </div>
    </div>
  </>
}

