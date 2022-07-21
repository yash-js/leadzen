import axios from "axios";
import { useEffect, useState } from "react";

export const useHooks = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLength, setCurrentLength] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = async () => {
    const url = `https://swapi.dev/api/people/`;
    setIsLoading(true);
    try {
      const {
        data: { count, results },
      } = await axios.get(url);
      setTotal(count);
      setPeople(results);
      setCurrentLength(results.length);
      setCurrentPage(currentPage + 1);
      setIsLoading(false);
      console.log(url, results);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const fetchMore = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const url = `https://swapi.dev/api/people/?page=${currentPage}`;
      try {
        const {
          data: { count, results },
        } = await axios.get(url);
        if (results.length > 0) {
          results.map((item) => people.push(item));
          setCurrentPage(currentPage + 1);
          setCurrentLength(currentLength + results.length);
          if (currentLength === total) setHasMore(false);
          setIsLoading(false);
          console.log(url);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    fetchMore,
    people,
    total,
    isLoading,
    currentLength,
    hasMore,
  };
};
