// Example of useEffect dependency (object dependency be aware..)
// resource : Mastering React's useEffect

// https://youtu.be/dH6i3GurZW8

import { useState, useMemo, useEffect } from "react";
import { useFetch } from "./useFetch";

function App() {
  const [url, setUrl] = useState(null)

// useMemo can help when use Object in useEffect dependency
  const myOptions = useMemo(()=>({url}),[url])
  // const {data} = useFetch(myOptions)
  const [data, setData] = useState(null);
  
  useEffect(() => {
    console.log('UseEffect...')
    if (myOptions.url) {
      fetch(myOptions.url)
      .then((res) => res.json())
      .then((json) => setData(json));
    }
  }, [myOptions]);

  console.log('Rendering...')
  return (
    <>
    {/* {console.log('Rendering...222')} */}
    <div className="p-4 space-y-4">
      <h1 className="text-3xl">{JSON.stringify(data)}</h1>
    </div>
    <div>
      <button onClick={()=> setUrl('/jack.json')}>Jack</button>
      <button onClick={()=> setUrl('/sally.json')}>Sally</button>
    </div>
    </>
  );
}

export default App;
