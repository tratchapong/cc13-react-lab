import { useEffect, useMemo, useState } from 'react'
import useProduct from './useProduct';

export default function useCategory() {
  const [allCategory, setAllCategory] = useState([]);

  const {allProducts} = useProduct()
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

  return {allCategory}
}
