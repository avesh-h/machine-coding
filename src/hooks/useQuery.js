import { useEffect, useState } from "react";

const useQuery = ({ url }) => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const d = await response.json();
      console.log("resssssss", d);
      setData(d);
    })();
  }, [url]);
  return data;
};

export default useQuery;
