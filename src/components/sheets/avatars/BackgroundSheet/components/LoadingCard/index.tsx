import { type FC, useState, useEffect } from 'react';

import { Progress } from '@/components/icons/Progress';
import { PROGRESS_UPDATE_DELAY_MS } from '@/constants/avatars';

export const LoadingCard: FC = () => {
  const [progress, setProgress] = useState<number>(25); // Magic number for progress update

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(58);
    }, PROGRESS_UPDATE_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="aspect-[2/3] bg-black rounded-2xl flex flex-col items-center justify-center text-white">
      <div className="relative w-24 h-24">
        <Progress progress={progress} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{progress}%</span>
        </div>
      </div>
      <p className="mt-4 text-sm">1 minute left</p>
    </div>
  );
}
