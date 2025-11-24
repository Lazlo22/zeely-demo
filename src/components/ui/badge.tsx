import { type FC } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: FC<BadgeProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'absolute top-3 left-3 bg-gray-100 border border-gray-300 px-3 py-1 rounded-md text-xs font-semibold text-gray-700 z-10',
        className
      )}
    >
      {children}
    </div>
  );
};
