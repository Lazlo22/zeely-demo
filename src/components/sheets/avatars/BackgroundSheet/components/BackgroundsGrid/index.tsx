import { type FC } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LoadingCard } from '../LoadingCard';
import type { Avatar } from '@/types/store/avatar';
import { cn } from '@/lib/utils';

interface BackgroundsGridProps {
  items: Avatar[];
  loading: boolean;
  defaultBackgroundId: string | null;
  onSetDefault: (id: string) => void;
}

export const BackgroundsGrid: FC<BackgroundsGridProps> = ({
  items,
  loading,
  defaultBackgroundId,
  onSetDefault,
}) => {
  return (
    <div className='mt-4'>
      <h3 className="text-base font-semibold mb-4">Your backgrounds</h3>
      <div className="grid grid-cols-3 gap-3">
        {loading ? <LoadingCard /> : null}
        {items.map((item) => {
          const isDefault = item.id === defaultBackgroundId;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => onSetDefault(item.id)}
              className={cn(
                'relative aspect-[2/3] rounded-2xl overflow-hidden shadow-md hover:ring-2 hover:ring-green-500 transition-all p-0 h-auto',
                isDefault && 'ring-2 ring-black'
              )}
            >
              {isDefault && <Badge>DEFAULT</Badge>}
              <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
            </Button>
          );
        })}
      </div>
    </div>
  );
}
