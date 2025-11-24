import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full min-h-[160px] resize-none focus:outline-none text-sm leading-relaxed bg-transparent font-medium',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
