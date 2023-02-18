import { useEffect, useMemo, useState } from "react";
import useProduct from "./useProduct";

export default function useFilter(selectCategory, searchText, currentPage, perPage) {
  const [showProduct, setShowProduct] = useState([]);
  const [length, setLength] = useState(0)

  const { allProducts } = useProduct();

  const hdlFilterChange = useMemo(
    () =>{
      const filterResult = allProducts.filter(
        (el) =>
          (selectCategory === "All" || el.category.name === selectCategory) &&
          (searchText.trim() === "" ||
            el.title.toLowerCase().includes(searchText.toLowerCase()))
      )
      setLength(filterResult.length)
      return filterResult
    }
      ,[selectCategory, searchText, allProducts]
  );

  useEffect(() => {
    setShowProduct(hdlFilterChange.slice((currentPage-1)*perPage, currentPage*perPage));
  }, [selectCategory, searchText, allProducts, hdlFilterChange, currentPage,perPage]);

  return { showProduct, length };
}
