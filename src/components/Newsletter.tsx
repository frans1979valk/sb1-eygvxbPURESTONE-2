import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface NewsletterProps {
  content: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    success: string;
  };
}

export default function Newsletter({ content }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get existing subscribers or initialize empty array
    const existingSubscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    
    // Add new subscriber with timestamp
    const newSubscriber = {
      email,
      date: new Date().toISOString().split('T')[0]
    };
    
    // Save updated subscribers list
    localStorage.setItem('subscribers', JSON.stringify([...existingSubscribers, newSubscriber]));
    
    toast({
      title: "Success!",
      description: content.success,
    });
    
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-24 bg-stone-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-6">{content.title}</h2>
        <p className="text-stone-600 mb-8">{content.description}</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder={content.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-stone-800 hover:bg-stone-700 text-white">
            {content.button}
          </Button>
        </form>
      </div>
    </section>
  );
}