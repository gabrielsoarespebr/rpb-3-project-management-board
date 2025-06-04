import { useEffect, useState } from "react";

export const useDataFetching = (dataSource) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataSource);

        const data = await response.json();

        if (data) {
          setData(data);
        }
      } catch (e) {
        setError(e.message);
      }

      setLoading(false);
    };

    fetchData();
  }, [dataSource]);

  return [loading, data, error];
};
