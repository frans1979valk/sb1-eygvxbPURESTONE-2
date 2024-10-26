import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/80 hover:bg-white/90"
    >
      {language === 'nl' ? 'EN' : 'NL'}
    </Button>
  );
}