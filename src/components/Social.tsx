import { Instagram, Facebook, ShoppingBag } from 'lucide-react';
import { socialConfig } from '@/config/social';

interface SocialProps {
  content: {
    title: string;
    description: string;
  };
}

interface SocialIconProps {
  platform: string;
  url: string;
  Icon: any;
}

const SocialIcon = ({ platform, url, Icon }: SocialIconProps) => {
  if (!url) return null;
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-stone-800 hover:text-stone-600 transition-colors"
      aria-label={`Visit our ${platform} page`}
    >
      <Icon className="h-8 w-8" />
    </a>
  );
};

export default function Social({ content }: SocialProps) {
  const socialIcons = [
    { platform: 'Instagram', url: socialConfig.instagram, Icon: Instagram },
    { platform: 'Facebook', url: socialConfig.facebook, Icon: Facebook },
    { platform: 'Etsy', url: socialConfig.etsy, Icon: ShoppingBag },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif mb-6">{content.title}</h2>
        <p className="text-stone-600 mb-8">{content.description}</p>
        <div className="flex justify-center gap-6">
          {socialIcons.map((social) => (
            <SocialIcon
              key={social.platform}
              platform={social.platform}
              url={social.url}
              Icon={social.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}