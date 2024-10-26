import { Gem, Globe, Pencil } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeaturesProps {
  content: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

const icons = [Gem, Pencil, Globe];

export default function Features({ content }: FeaturesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-16">{content.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card key={feature.title} className="border-stone-200">
                <CardHeader>
                  <Icon className="h-12 w-12 text-stone-700 mb-4" />
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}