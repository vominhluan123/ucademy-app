// store/useLessonLayoutStore.ts
import { create } from "zustand";

type LessonLayoutState = {
  isExpanded: boolean;
  toggleExpanded: () => void;
  setExpanded: (value: boolean) => void;
};

const useLessonLayoutStore = create<LessonLayoutState>((set) => ({
  isExpanded: false,
  toggleExpanded: () => set((state) => ({ isExpanded: !state.isExpanded })),
  setExpanded: (value) => set({ isExpanded: value }),
}));

export default useLessonLayoutStore;
