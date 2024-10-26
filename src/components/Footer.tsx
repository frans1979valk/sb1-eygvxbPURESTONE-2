import { Mail } from 'lucide-react';
import { socialConfig } from '@/config/social';

interface FooterProps {
  content: {
    contact: string;
    rights: string;
  };
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="py-12 bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">{content.contact}</h3>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <a href={`mailto:${socialConfig.email}`} className="hover:text-white transition-colors">
                {socialConfig.email}
              </a>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} PureStone Design. {content.rights}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}