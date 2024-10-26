export interface SiteContent {
  siteName: string;
  siteDescription: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    success: string;
  };
  social: {
    title: string;
    description: string;
  };
  footer: {
    contact: string;
    rights: string;
  };
}

export const defaultContent: SiteContent = {
  siteName: "PureStone Design",
  siteDescription: "Handgemaakte natuurstenen producten",
  hero: {
    title: "Natuurlijke Schoonheid, Met de Hand Gemaakt",
    subtitle: "Ontdek onze collectie handgemaakte sieraden, unieke dankbaarheidsstenen en gepersonaliseerde schatten",
    cta: "Ontvang 10% Korting op je Eerste Bestelling"
  },
  features: {
    title: "Waarom Kiezen voor PureStone Design",
    items: [
      {
        title: "Handgemaakt Vakmanschap",
        description: "Elk stuk wordt zorgvuldig met de hand vervaardigd voor uniek karakter en superieure kwaliteit"
      },
      {
        title: "Persoonlijke Touch",
        description: "Voeg betekenis toe aan je stuk met persoonlijke gravures, waardoor elk item echt van jou wordt"
      },
      {
        title: "Wereldwijde Verzending",
        description: "We leveren onze natuurstenen creaties aan deuren over de hele wereld"
      }
    ]
  },
  newsletter: {
    title: "Ontvang 10% Korting op je Eerste Bestelling",
    description: "Word lid van onze community en ontvang exclusieve aanbiedingen, behind-the-scenes content en een speciale korting op je eerste aankoop",
    placeholder: "Vul je e-mailadres in",
    button: "Aanmelden",
    success: "Controleer je e-mail voor je 10% kortingscode."
  },
  social: {
    title: "Achter de Schermen",
    description: "Volg ons op social media en ontdek het vakmanschap achter elk stuk"
  },
  footer: {
    contact: "Neem Contact Op",
    rights: "Alle rechten voorbehouden"
  }
};