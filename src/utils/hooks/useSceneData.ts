import { SceneData } from './../types/SceneData';
import useData from './useData';
interface SceneDataProps {
  data: SceneData[];
  isLoading: boolean;
  isError: Error;
}
const useSceneData = (url: string): SceneDataProps => {
  return {
    ...useData(url),
  };
};
export default useSceneData;
