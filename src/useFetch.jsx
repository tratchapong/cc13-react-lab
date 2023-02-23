import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    console.log('UseEffect...')
    if (options.url) {
      fetch(options.url)
      .then((res) => res.json())
      .then((json) => setData(json));
    }
  }, [options]);
  console.log("99999", options);
  
  return {
    data,
  };
};
