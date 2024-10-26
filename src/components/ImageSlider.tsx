import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageSliderProps {
  images: Array<{
    url: string;
    alt: string;
  }>;
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={image.url}
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="absolute inset-0 bg-black/40" />
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
        onClick={previous}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-colors',
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}