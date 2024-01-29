import { LensGuideSlice, useLensGuideSlice } from './LensGuideData';
import { create } from 'zustand';

export const useBoundStore = create<LensGuideSlice>()((...a) => ({
  ...useLensGuideSlice(...a),
}));

export const useLensGuideState = () => {
  const showGuide = useBoundStore((state) => state.showGuide);
  const switcherView = useBoundStore((state) => state.switcherView);
  const lensView = useBoundStore((state) => state.lensView);
  const currentProduct = useBoundStore((state) => state.currentProduct);
  const allProducts = useBoundStore((state) => state.allProducts);
  const currentSceneInfo = useBoundStore((state) => state.currentSceneInfo);
  const allSceneInfo = useBoundStore((state) => state.allSceneInfo);

  return {
    showGuide,
    switcherView,
    lensView,
    currentProduct,
    allProducts,
    currentSceneInfo,
    allSceneInfo,
  };
};
export const useLensGuideActions = () => {
  const setShowGuide = useBoundStore((state) => state.setShowGuide);
  const setSwitcherView = useBoundStore((state) => state.setSwitcherView);
  const setLensView = useBoundStore((state) => state.setLensView);
  const setAllProducts = useBoundStore((state) => state.setAllProducts);
  const setCurrentProduct = useBoundStore((state) => state.setCurrentProduct);
  const setAllSceneInfo = useBoundStore((state) => state.setAllSceneInfo);
  const setCurrentSceneInfo = useBoundStore(
    (state) => state.setCurrentSceneInfo
  );

  return {
    setShowGuide,
    setSwitcherView,
    setLensView,
    setCurrentProduct,
    setAllProducts,
    setCurrentSceneInfo,
    setAllSceneInfo,
  };
};
