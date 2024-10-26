import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  CheckCircle2,
  Globe,
  Server,
  Mail,
  Database,
  Settings,
  AlertCircle
} from 'lucide-react';
import { defaultContent } from '@/config/content';

interface ConfigStep {
  title: string;
  fields: {
    key: string;
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
    helpText?: string;
  }[];
}

const templates = [
  {
    id: 'purestone',
    name: 'PureStone Design Template',
    description: 'Template voor handgemaakte natuurstenen producten en sieraden',
    demoContent: defaultContent
  },
  {
    id: 'custom',
    name: 'Lege Template',
    description: 'Begin met een lege template die je volledig zelf kunt aanpassen',
    demoContent: {
      ...defaultContent,
      siteName: '',
      siteDescription: '',
      hero: {
        title: '',
        subtitle: '',
        cta: ''
      },
      features: {
        title: '',
        items: [
          { title: '', description: '' },
          { title: '', description: '' },
          { title: '', description: '' }
        ]
      }
    }
  }
];

const configSteps: ConfigStep[] = [
  {
    title: 'Template Keuze',
    fields: [
      {
        key: 'template',
        label: 'Kies je template',
        type: 'radio',
        placeholder: 'Selecteer een template',
        required: true,
        helpText: 'Je kunt later alle content aanpassen in het admin dashboard'
      }
    ]
  },
  {
    title: 'Website Instellingen',
    fields: [
      {
        key: 'siteName',
        label: 'Website Naam',
        type: 'text',
        placeholder: 'Mijn Website',
        required: true,
        helpText: 'De naam van je website'
      },
      {
        key: 'siteDescription',
        label: 'Website Beschrijving',
        type: 'text',
        placeholder: 'Een korte beschrijving van je website',
        required: true,
        helpText: 'Wordt gebruikt voor SEO en meta tags'
      }
    ]
  },
  {
    title: 'Domain Instellingen',
    fields: [
      {
        key: 'domainName',
        label: 'Domeinnaam',
        type: 'text',
        placeholder: 'mijnwebsite.nl',
        required: true,
        helpText: 'Je domeinnaam zonder www'
      },
      {
        key: 'wwwRedirect',
        label: 'WWW Redirect',
        type: 'select',
        placeholder: 'Selecteer redirect voorkeur',
        helpText: 'Hoe moet www.mijnwebsite.nl worden afgehandeld'
      }
    ]
  },
  {
    title: 'DNS Records',
    fields: [
      {
        key: 'aRecord',
        label: 'A Record',
        type: 'text',
        placeholder: '123.45.67.89',
        required: true,
        helpText: 'Wijs je domein naar dit IP-adres'
      },
      {
        key: 'cnameRecord',
        label: 'CNAME Record',
        type: 'text',
        placeholder: 'www.mijnwebsite.nl',
        helpText: 'Stel www subdomein in om naar je hoofddomein te verwijzen'
      }
    ]
  }
];

const dnsProviderInstructions = {
  transip: {
    title: 'TransIP DNS Configuratie',
    steps: [
      'Log in op je TransIP controlepaneel',
      'Ga naar de "Domeinen" sectie',
      'Selecteer je domeinnaam',
      'Klik op "DNS-instellingen"',
      'Voeg de volgende records toe:',
      '- A Record: Wijs @ naar het server IP',
      '- CNAME: Wijs www naar @',
      '- MX: Voeg mailserver records toe',
      '- TXT: Voeg SPF record toe voor email beveiliging'
    ]
  }
};

export default function InstallWizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState<Record<string, string>>({});
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = templates.find(t => t.id === templateId);
    if (template) {
      // Save template content to localStorage
      localStorage.setItem('siteContent', JSON.stringify(template.demoContent));
    }
  };

  const handleNext = () => {
    if (currentStep < configSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Save final configuration
      localStorage.setItem('siteConfig', JSON.stringify(config));
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const isStepValid = () => {
    if (currentStep === 0) {
      return selectedTemplate !== '';
    }
    const currentFields = configSteps[currentStep].fields;
    return currentFields.every(field => 
      !field.required || (config[field.key] && config[field.key].trim() !== '')
    );
  };

  const renderTemplateSelection = () => (
    <RadioGroup
      value={selectedTemplate}
      onValueChange={handleTemplateSelect}
      className="grid gap-4"
    >
      {templates.map(template => (
        <div key={template.id} className="flex items-start space-x-3">
          <RadioGroupItem value={template.id} id={template.id} />
          <Label htmlFor={template.id} className="grid gap-1 cursor-pointer">
            <span className="font-medium">{template.name}</span>
            <span className="text-sm text-stone-500">{template.description}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-6 w-6" />
              Installatie Wizard
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isComplete ? (
              <>
                <div className="flex items-center mb-8">
                  {configSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="flex items-center"
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          index <= currentStep
                            ? 'bg-stone-800 text-white'
                            : 'bg-stone-200'
                        }`}
                      >
                        {index + 1}
                      </div>
                      {index < configSteps.length - 1 && (
                        <div
                          className={`w-16 h-1 ${
                            index < currentStep
                              ? 'bg-stone-800'
                              : 'bg-stone-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-serif mb-4">
                    {configSteps[currentStep].title}
                  </h2>
                  <div className="space-y-4">
                    {currentStep === 0 ? (
                      renderTemplateSelection()
                    ) : (
                      configSteps[currentStep].fields.map(field => (
                        <div key={field.key}>
                          <label className="block text-sm font-medium mb-1">
                            {field.label}
                            {field.required && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </label>
                          <Input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={config[field.key] || ''}
                            onChange={e => handleInputChange(field.key, e.target.value)}
                            className="mb-1"
                          />
                          {field.helpText && (
                            <p className="text-sm text-stone-500">{field.helpText}</p>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    Vorige
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                  >
                    {currentStep === configSteps.length - 1 ? 'Voltooien' : 'Volgende'}
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-serif mb-4">Installatie Voltooid!</h2>
                <p className="text-stone-600 mb-8">
                  Je configuratie is opgeslagen. Volg de DNS provider instructies hieronder.
                </p>

                <Tabs defaultValue="transip" className="w-full">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="transip" className="flex-1">TransIP</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="transip">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {dnsProviderInstructions.transip.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal pl-4 space-y-2">
                          {dnsProviderInstructions.transip.steps.map((step, index) => (
                            <li key={index} className="text-stone-600">{step}</li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="mt-8">
                  <Button onClick={() => navigate('/admin/dashboard')}>
                    Ga naar Dashboard
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {!isComplete && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-900">Hulp Nodig?</h3>
                <p className="text-sm text-blue-700">
                  Als je hulp nodig hebt bij de domein configuratie, neem dan contact op met ons
                  support team of raadpleeg de documentatie van je domein provider.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}