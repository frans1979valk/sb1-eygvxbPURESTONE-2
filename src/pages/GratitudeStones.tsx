import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/config/i18n';
import Navigation from '@/components/Navigation';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function GratitudeStones() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <main className="pt-24">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif mb-6">{t.gratitude.title}</h1>
          <p className="text-lg text-stone-600 mb-8">{t.gratitude.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {t.gratitude.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif mb-6">{t.gratitude.process.title}</h2>
            <ol className="space-y-4">
              {t.gratitude.process.steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-serif text-xl text-stone-400">{index + 1}.</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <Newsletter t={t.newsletter} />
      <Footer t={t.footer} />
    </div>
  );
}