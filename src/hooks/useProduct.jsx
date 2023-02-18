import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useProduct() {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8000/products");
    setAllProducts(res.data);
  };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return {allProducts}
}
