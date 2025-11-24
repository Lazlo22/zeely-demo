import { type FC } from 'react';

interface ProgressProps {
  progress: number;
  width?: number | string;
  height?: number | string;
}

export const Progress: FC<ProgressProps> = ({ 
  progress,
  width = 96, 
  height = 96,
}) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="transform -rotate-90" width={width} height={height}>
      <circle
        cx="48"
        cy="48"
        r="40"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
        className="text-gray-700"
      />
      <circle
        cx="48"
        cy="48"
        r="40"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        className="text-green-500 transition-all duration-1000"
      />
    </svg>
  );
};
