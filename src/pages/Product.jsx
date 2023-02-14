import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Product() {
  const [allProducts, setAllProducts] = useState([])

  useEffect( ()=>{
    axios.get('http://localhost:8000/products').then( res=> {
      setAllProducts(res.data)
    })
  },[])
  return (
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allProducts.map(el => (
            <ProductCard key={el.id} item={el}/>
          ))}
        </div>
      </div>
  );
}

export default Product;
