import React, { useEffect, useState } from 'react'
import styles from './FeaturedProuducts.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';




export default function FeaturedProuducts() {
  const [products , setProducts] = useState([])
  async function getProduct(){
    let {data} = await axios.get(`http://localhost:4000/data`)
    setProducts(data)
  }
  //hasta5dem el component deadmount..
  useEffect(()=>{
      getProduct();
  },[])
  return<>
  <h2>hello</h2>
  <div className="row">
    {products.map((product)=>  <div key={product.id} className="col-md-2">
    <div className="product cursor-pointer px-2 py-4">
      <Link to={`/productDetails/${product.id}`}>
      <img className='w-100'  src={product.img} alt="" />
      <span className='text-main fw-bold font-sm'>{product.category.name}</span>
      <h3 className='h6 fw-bolder'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
      {/* a7na 3aizen msh kol el title hoa el ygalna la ana 3aiz awel klmtin bs 
      .split => m3a space (' ') => keda na ba2olo 7awlholi la array m3a kol space 
      fa ana keda 7awilt el string el 3andi la array 
      .slice => de bta5od goz2 mn el array fa ana ba2olo (0,2) hatli awel klmtin 
      .join m3a space(' ') => 3shan na7awelo mn array la string tani..
      */}
    <div className="d-flex justify-content-between pb-3">
      <span className='text-muted'>{product.price} EGP</span>
      <span>
        <i className='fas fa-star rating-color'></i>
        {product.raitingAvg}
      </span>
    </div>

    <button className='btn bg-main text-white w-100'> +Add</button>
    </Link>
    </div>

  </div>)}
  </div>
 
  </>
}

