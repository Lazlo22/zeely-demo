import { type FC } from 'react';

import { Button } from '@/components/ui/button';
import { useStore } from '@/store';
import { Generate } from '@/components/icons/Generate';

export const ChangeBackgroundButton: FC = () => {
  const setSheetOpen = useStore((state) => state.setSheetOpen);

  return (
    <Button variant="outline" size="lg" className='font-bold' onClick={() => setSheetOpen(true)}>
      <Generate className='size-4' />
      Change Background
    </Button>
  );
}
