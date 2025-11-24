import type { StateCreator } from 'zustand';

import type { Avatar, AvatarSlice } from '@/types/store/avatar';

const defaultItem: Avatar = {
  id: 'default-background-1',
  name: 'Default Background',
  url: 'https://picsum.photos/200/400?random=6',
};

export const createAvatarSlice: StateCreator<AvatarSlice> = (set) => ({
  items: [defaultItem],
  loading: false,
  sheetOpen: false,
  defaultBackgroundId: defaultItem.id,
  addItem: async (item) => {
    set({ loading: true });

    // Imitation of API
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const newItem: Avatar = {
      id: crypto.randomUUID(),
      ...item,
    };

    set((state) => ({
      items: [newItem, ...state.items],
      loading: false,
    }));
  },
  setSheetOpen: (open) => set({ sheetOpen: open }),
  setDefaultBackground: (id) => set({ defaultBackgroundId: id }),
});
