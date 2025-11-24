import { type FC, useState } from 'react';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { GenerativeTextArea } from '@/components/sheets/avatars/BackgroundSheet/components/GenerativeTextArea';
import { BackgroundsGrid } from './components/BackgroundsGrid';
import { useStore } from '@/store';
import { backgroundIdeas, REGENERATE_DELAY_MS } from '@/constants/avatars';
import { Generate } from '../../../icons/Generate';

export const AvatarBackgroundSheet: FC = () => {
  const { items, loading, addItem, sheetOpen, setSheetOpen, defaultBackgroundId, setDefaultBackground } =
    useStore();
  const [backgroundIdea, setBackgroundIdea] = useState<string>(backgroundIdeas[0]);
  const [isRegenerating, setIsRegenerating] = useState<boolean>(false);

  const handleRegenerate = () => {
    setIsRegenerating(true);

    // Get a random idea different from the current one
    const availableIdeas = backgroundIdeas.filter((idea) => idea !== backgroundIdea);
    const randomIdea = availableIdeas[Math.floor(Math.random() * availableIdeas.length)];

    // Simulate API call with animation
    setTimeout(() => {
      setBackgroundIdea(randomIdea);
      setIsRegenerating(false);
    }, REGENERATE_DELAY_MS);
  };

  const handleGenerate = async () => {
    await addItem({
      name: `Background ${items.length + 1}`,
      url: `https://picsum.photos/200/400?random=${Date.now()}`,
    });
  };

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent side="right" className="w-full sm:max-w-[600px] overflow-y-auto p-6 pt-10">
        <SheetHeader className="mb-2 p-0">
          <SheetTitle className="text-3xl font-bold">Change background</SheetTitle>
        </SheetHeader>
        <div className="space-y-6">
          <GenerativeTextArea
            value={backgroundIdea}
            onChange={setBackgroundIdea}
            onRegenerate={handleRegenerate}
            isRegenerating={isRegenerating}
            placeholder="Describe your background idea..."
            label="Background idea"
          />
          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-black hover:bg-gray-900 text-white h-14 rounded-full text-base font-medium"
          >
            <Generate className="w-4 h-4 mr-2 text-green-400" />
            {loading ? 'Generating...' : 'Generate BG for 1 credit'}
          </Button>
          <BackgroundsGrid
            items={items}
            loading={loading}
            defaultBackgroundId={defaultBackgroundId}
            onSetDefault={setDefaultBackground}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
