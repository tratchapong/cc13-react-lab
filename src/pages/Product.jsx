import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [showProduct, setShowProduct] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8000/products");
    setAllProducts(res.data);
    setShowProduct(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const genAllCategory = useMemo(
    () =>
      allProducts.reduce(
        (a, c) => (a.includes(c.category.name) ? a : [...a, c.category.name]),
        []
      ),
    [allProducts]
  );

  useEffect(() => {
    setAllCategory(genAllCategory);
  }, [allProducts, genAllCategory]);

  const hdlFilterChange = useMemo(
    () =>
      allProducts.filter(
        (el) =>
          (selectCategory === "All" || el.category.name === selectCategory) &&
          (searchText.trim() === "" ||
            el.title.toLowerCase().includes(searchText.toLowerCase()))
      ),
    [selectCategory, searchText, allProducts]
  );

  useEffect(() => {
    setShowProduct(hdlFilterChange);
  }, [selectCategory, searchText, allProducts, hdlFilterChange]);

  return (
    <>
      <div className="flex gap-3 py-3 px-8 items-baseline">
        <div className="flex gap-3 flex-grow-[1] justify-start items-baseline">
          <p>Search :</p>
          <input
            className="flex-grow p-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="flex  gap-3 flex-grow-[1] justify-end">
          <select
            className="px-3"
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          >
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
