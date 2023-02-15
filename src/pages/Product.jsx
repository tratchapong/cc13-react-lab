import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  // const [selCategory, setSelCategory] = useState("All");
  const [showProduct, setShowProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setAllProducts(res.data);
      setShowProduct(res.data);
    });
  }, []);

  useEffect(() => {
    setAllCategory(
      allProducts.reduce((a, c) => {
        if (!a.includes(c.category.name)) a.push(c.category.name);
        return a;
      }, [])
    );
  }, [allProducts]);

  const hdlCategoryChange = (e) => {
    // setSelCategory(e.target.value)
    setShowProduct(
      allProducts.filter(
        (el) => el.category.name === e.target.value || e.target.value === "All"
      )
    );
  };

  return (
    <>
      <div className="flex gap-3 py-3 px-8 items-baseline">
        <div className="flex gap-3 flex-grow-[1] justify-start items-baseline">
          <p>Search :</p>
          <input className="flex-grow p-1" />
        </div>
        <div className="flex  gap-3 flex-grow-[1] justify-end">
          <select className="px-3" onChange={hdlCategoryChange}>
            <option value="All">All</option>
            {allCategory.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <p>{showProduct.length}</p>
        </div>
      </div>
      <div className="mx-auto max-w-2xl p-4 sm:py-  4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {showProduct.map((el) => (
            <ProductCard key={el.id} item={el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
