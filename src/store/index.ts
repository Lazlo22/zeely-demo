import { create } from 'zustand';

import { createAvatarSlice } from './avatarSlice';
import type { StoreState } from '@/types/store';

export const useStore = create<StoreState>()((...set) => ({
  ...createAvatarSlice(...set),
}));
