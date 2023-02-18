import { useEffect, useMemo, useState } from 'react'
import useProduct from './useProduct';

export default function useFilter(selectCategory, searchText) {
  const [showProduct, setShowProduct] = useState([]);
  
  const {allProducts} = useProduct()

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

  return {showProduct}
}
