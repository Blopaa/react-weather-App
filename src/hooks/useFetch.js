import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [resp, setResp] = useState({ data: {}, loading: true });

  const fetching = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResp({ data, loading: false}));
  }, [url]);

  useEffect(() => {
    fetching();
  }, [fetching]);

  return resp;
};

export default useFetch;
