import { Button } from '@/components/ui/button';

interface HeroProps {
  t: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1506806732259-39c2d0026d71?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white pt-20">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-stone-100">
          {t.subtitle}
        </p>
        <Button
          size="lg"
          className="bg-stone-800 hover:bg-stone-700 text-white"
          onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t.cta}
        </Button>
      </div>
    </section>
  );
}