import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useCategory from "../hooks/useCategory";
import useFilter from "../hooks/useFilter";

function Product() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  
  const perPage = 10

  const { allCategory } = useCategory();
  const { showProduct, length } = useFilter(selectCategory, searchText, currentPage, perPage);

  useEffect(()=>{
    setCurrentPage(1)
  },[selectCategory, searchText])
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
        <div >
          <span>Page : </span>
          <input className="p-1" type="number" min={1} max={Math.ceil(length/perPage)} value={currentPage} onChange={e=>setCurrentPage(+e.target.value)} />
          <span> Of {Math.ceil(length/perPage)}</span>
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
          <p>{length}</p>
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
