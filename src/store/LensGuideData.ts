import { Option } from '@/utils/types/ProductData';
import { SceneData } from '@/utils/types/SceneData';
import { StateCreator } from 'zustand';

export type State = {
  showGuide: boolean;
  switcherView: 'scene' | 'glasses';
  lensView: 'type' | 'colour';
  allProducts?: Option[];
  currentProduct?: Option;
  allSceneInfo?: SceneData[];
  currentSceneInfo?: SceneData;
};
export type Actions = {
  setShowGuide: (value: boolean) => void;
  setSwitcherView: (value: 'scene' | 'glasses') => void;
  setLensView: (value: 'type' | 'colour') => void;
  setAllProducts: (value: Option[]) => void;
  setCurrentProduct: (value: Option) => void;
  setCurrentSceneInfo: (value: SceneData) => void;
  setAllSceneInfo: (value: SceneData[]) => void;
};

export type LensGuideSlice = State & Actions;

export const useLensGuideSlice: StateCreator<LensGuideSlice> = (set) => ({
  allSceneInfo: undefined,
  setAllSceneInfo: (value) => set({ allSceneInfo: value }),
  currentSceneInfo: undefined,
  setCurrentSceneInfo: (value) => set({ currentSceneInfo: value }),
  allProducts: [],
  currentProduct: undefined,
  setAllProducts: (value) => set({ allProducts: value }),
  setCurrentProduct: (value) => set({ currentProduct: value }),
  showGuide: true,
  setShowGuide: (state) => set({ showGuide: state }),
  switcherView: 'scene',
  setSwitcherView: (state) =>
    set({
      switcherView: state,
    }),
  lensView: 'colour',
  setLensView(state) {
    set({
      lensView: state,
    });
  },
});
