import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  siteName?: string;
}

export default function Navigation({ siteName = "PureStone Design" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <div className="relative w-48">
            <div 
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, #E5E5E5 0%, #D4D4D4 100%)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            />
            <h1 className="relative text-center font-serif text-xl tracking-wider">
              {siteName.split(' ')[0]}
              <span className="block text-sm tracking-widest">
                {siteName.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
}