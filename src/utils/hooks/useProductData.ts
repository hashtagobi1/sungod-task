import { ProductData } from '../types/ProductData';
import useData from './useData';

interface ProductDataProps {
  data: ProductData;
  isLoading: boolean;
  isError: Error;
}
const useProductData = (url: string): ProductDataProps => {
  return {
    ...useData(url),
  };
};
export default useProductData;
