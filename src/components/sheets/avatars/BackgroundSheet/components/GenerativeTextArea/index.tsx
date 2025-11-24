import { type FC, useState, useRef, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { BackArrow } from '@/components/icons/BackArrow';
import { ForwardArrow } from '@/components/icons/ForwardArrow';
import { Regenerate } from '@/components/icons/Regenerate';

interface GenerativeTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  onRegenerate: () => void;
  isRegenerating?: boolean;
  placeholder?: string;
  label?: string;
}

export const GenerativeTextArea: FC<GenerativeTextAreaProps> = ({
  value,
  onChange,
  onRegenerate,
  isRegenerating = false,
  placeholder = 'Describe your idea...',
  label = 'Background idea',
}) => {
  const [history, setHistory] = useState<string[]>([value]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isUndoRedoAction = useRef<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
      textareaRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!isUndoRedoAction.current && value !== history[currentIndex]) {
      const newHistory = history.slice(0, currentIndex + 1);
      newHistory.push(value);
      setHistory(newHistory);
      setCurrentIndex(newHistory.length - 1);
    }
  }, [value]);

  const handleRegenerate = () => {
    onRegenerate();
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      isUndoRedoAction.current = true;

      const newIndex = currentIndex - 1;

      setCurrentIndex(newIndex);
      onChange(history[newIndex]);

      isUndoRedoAction.current = false;
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      isUndoRedoAction.current = true;
      
      const newIndex = currentIndex + 1;

      setCurrentIndex(newIndex);
      onChange(history[newIndex]);

      isUndoRedoAction.current = false;
    }
  };

  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  return (
    <div>
      <h3 className="text-base font-semibold mb-4">{label}</h3>
      <div className="relative bg-white border border-gray-200 rounded-xl p-4">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pb-12"
          placeholder={placeholder}
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRegenerate}
            disabled={isRegenerating}
            className="text-green-600 hover:text-green-700 hover:bg-green-50 px-2 -ml-1"
          >
            <Regenerate className="'w-4 h-4" />
            {isRegenerating ? 'Regenerating...' : 'Regenerate'}
          </Button>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleUndo}
              disabled={!canUndo}
              className="w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-transparent disabled:opacity-30"
            >
              <BackArrow className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRedo}
              disabled={!canRedo}
              className="w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-transparent disabled:opacity-30"
            >
              <ForwardArrow className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
