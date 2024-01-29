import axios from 'axios';
import useSWR from 'swr';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useData = (url: string) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default useData;
