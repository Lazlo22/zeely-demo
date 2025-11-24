export interface Avatar {
  id: string;
  name: string;
  url: string;
}

export interface AvatarSlice {
  items: Avatar[];
  loading: boolean;
  sheetOpen: boolean;
  defaultBackgroundId: string | null;
  addItem: (item: Omit<Avatar, 'id'>) => Promise<void>;
  setSheetOpen: (open: boolean) => void;
  setDefaultBackground: (id: string) => void;
}