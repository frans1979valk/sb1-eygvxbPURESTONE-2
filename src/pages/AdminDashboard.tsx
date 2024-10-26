import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Mail, Users, Palette, Settings, Image, FileText, Type } from 'lucide-react';
import { defaultImages, type SlideImage } from '@/config/images';
import { defaultSocialConfig, type SocialConfig } from '@/config/social';
import { defaultContent, type SiteContent } from '@/config/content';

export default function AdminDashboard() {
  const { toast } = useToast();
  const [subscribers, setSubscribers] = useState<Array<{ email: string; date: string }>>([]);
  const [socialConfig, setSocialConfig] = useState<SocialConfig>(defaultSocialConfig);
  const [siteContent, setSiteContent] = useState<SiteContent>(defaultContent);
  const [colors, setColors] = useState({
    primary: '#1a1a1a',
    secondary: '#f5f5f5',
    accent: '#4a5568'
  });
  const [images, setImages] = useState<SlideImage[]>(defaultImages);
  const [newImage, setNewImage] = useState({ url: '', alt: '' });
  const [newPage, setNewPage] = useState({ title: '', slug: '', content: '' });
  const [enabledPlatforms, setEnabledPlatforms] = useState({
    instagram: true,
    facebook: true,
    tiktok: false,
    pinterest: false,
    etsy: false
  });

  useEffect(() => {
    // Load all saved data
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setSiteContent(JSON.parse(savedContent));
    }

    const savedSubscribers = localStorage.getItem('subscribers');
    if (savedSubscribers) {
      setSubscribers(JSON.parse(savedSubscribers));
    }

    const savedSocialConfig = localStorage.getItem('socialConfig');
    if (savedSocialConfig) {
      setSocialConfig(JSON.parse(savedSocialConfig));
    }

    const savedColors = localStorage.getItem('siteColors');
    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }

    const savedPlatforms = localStorage.getItem('enabledPlatforms');
    if (savedPlatforms) {
      setEnabledPlatforms(JSON.parse(savedPlatforms));
    }
  }, []);

  const handleSaveContent = () => {
    localStorage.setItem('siteContent', JSON.stringify(siteContent));
    toast({
      title: 'Content Bijgewerkt',
      description: 'De website content is succesvol opgeslagen.'
    });
  };

  // ... (previous handlers remain the same)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-serif mb-8">Website Beheer</h1>
        
        <Tabs defaultValue="content">
          <TabsList className="mb-8">
            <TabsTrigger value="content">
              <Type className="h-4 w-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="subscribers">
              <Users className="h-4 w-4 mr-2" />
              Abonnees
            </TabsTrigger>
            <TabsTrigger value="images">
              <Image className="h-4 w-4 mr-2" />
              Afbeeldingen
            </TabsTrigger>
            <TabsTrigger value="pages">
              <FileText className="h-4 w-4 mr-2" />
              Pagina's
            </TabsTrigger>
            <TabsTrigger value="design">
              <Palette className="h-4 w-4 mr-2" />
              Ontwerp
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Instellingen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Website Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Algemene Site Informatie */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Algemene Informatie</h3>
                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Website Naam</label>
                        <Input
                          value={siteContent.siteName}
                          onChange={(e) => setSiteContent(prev => ({
                            ...prev,
                            siteName: e.target.value
                          }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Website Beschrijving</label>
                        <Textarea
                          value={siteContent.siteDescription}
                          onChange={(e) => setSiteContent(prev => ({
                            ...prev,
                            siteDescription: e.target.value
                          }))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hero Sectie */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Hero Sectie</h3>
                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Titel</label>
                        <Input
                          value={siteContent.hero.title}
                          onChange={(e) => setSiteContent(prev => ({
                            ...prev,
                            hero: { ...prev.hero, title: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Subtitel</label>
                        <Textarea
                          value={siteContent.hero.subtitle}
                          onChange={(e) => setSiteContent(prev => ({
                            ...prev,
                            hero: { ...prev.hero, subtitle: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">CTA Tekst</label>
                        <Input
                          value={siteContent.hero.cta}
                          onChange={(e) => setSiteContent(prev => ({
                            ...prev,
                            hero: { ...prev.hero, cta: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Features Sectie */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Features Sectie</h3>
                    <div>
                      <label className="block text-sm font-medium mb-1">Titel</label>
                      <Input
                        value={siteContent.features.title}
                        onChange={(e) => setSiteContent(prev => ({
                          ...prev,
                          features: { ...prev.features, title: e.target.value }
                        }))}
                      />
                    </div>
                    <div className="space-y-4">
                      {siteContent.features.items.map((item, index) => (
                        <div key={index} className="grid gap-4 p-4 border rounded-lg">
                          <div>
                            <label className="block text-sm font-medium mb-1">Feature {index + 1} Titel</label>
                            <Input
                              value={item.title}
                              onChange={(e) => {
                                const newItems = [...siteContent.features.items];
                                newItems[index] = { ...item, title: e.target.value };
                                setSiteContent(prev => ({
                                  ...prev,
                                  features: { ...prev.features, items: newItems }
                                }));
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Feature {index + 1} Beschrijving</label>
                            <Textarea
                              value={item.description}
                              onChange={(e) => {
                                const newItems = [...siteContent.features.items];
                                newItems[index] = { ...item, description: e.target.value };
                                setSiteContent(prev => ({
                                  ...prev,
                                  features: { ...prev.features, items: newItems }
                                }));
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Sectie */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Nieuwsbrief Sectie</h3>
                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Titel</label>
                        <Input
                          value={siteContent.newsletter.title}
                          onChange={(e) => setSiteContent(prev => ({
                            ...prev,
                            newsletter: { ...prev.newsletter, title: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Beschrijving</label>
                        <Textarea
                          value={siteContent.newsletter.description}
                          onChange={(e) => setSiteContent(prev => ({
                            ...prev,
                            newsletter: { ...prev.newsletter, description: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleSaveContent} className="w-full">
                    Content Opslaan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ... (other TabsContent sections remain the same) */}
        </Tabs>
      </div>
    </div>
  );
}