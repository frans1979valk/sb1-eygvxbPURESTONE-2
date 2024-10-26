import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/config/i18n';
import { defaultImages } from '@/config/images';
import LanguageToggle from '../components/LanguageToggle';
import Navigation from '../components/Navigation';
import ImageSlider from '../components/ImageSlider';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';
import Footer from '../components/Footer';
import AdminButton from '../components/AdminButton';

export default function Homepage() {
  const { language } = useLanguage();
  const t = translations[language];

  if (!t) return null; // Prevent render if translations aren't loaded

  return (
    <div className="min-h-screen bg-stone-50">
      <LanguageToggle />
      <Navigation />
      <ImageSlider images={defaultImages} />
      <Features content={t.features} />
      <Newsletter content={t.newsletter} />
      <Social content={t.social} />
      <Footer content={t.footer} />
      <AdminButton />
    </div>
  );
}