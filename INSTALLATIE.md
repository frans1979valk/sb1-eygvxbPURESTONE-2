# PureStone Design - Installatiehandleiding

## Project Overzicht

Dit is een volledig configureerbare website template gebouwd met:
- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui componenten
- React Router voor navigatie

### Hoofdfunctionaliteiten

1. **Installatie Wizard**
   - Template keuze (PureStone of leeg)
   - Basis website instellingen
   - Domain configuratie
   - DNS instellingen

2. **Admin Dashboard**
   - Content beheer
   - Afbeeldingen beheer
   - Nieuwsbrief abonnees
   - Social media links
   - SEO instellingen
   - Design aanpassingen

3. **Website Secties**
   - Hero sectie met slider
   - Features overzicht
   - Nieuwsbrief inschrijving
   - Social media integratie
   - Footer met contactgegevens

## Bekende Problemen & Oplossingen

1. **Witte pagina / Laadfouten**
   - Controleer of alle dependencies zijn geïnstalleerd
   - Verwijder node_modules en package-lock.json
   - Voer `npm install` opnieuw uit
   - Start de dev server met `npm run dev`

2. **Admin Dashboard Tabs**
   - Content tab: Website teksten aanpassen
   - Afbeeldingen tab: Slider afbeeldingen beheren
   - Social Media tab: Links en platforms beheren
   - Design tab: Kleuren en stijlen aanpassen
   - SEO tab: Meta tags en beschrijvingen

3. **Social Media Integratie**
   - Instagram
   - Facebook
   - TikTok
   - Pinterest
   - Etsy
   - Email

## Installatie Stappen

1. **Eerste Setup**
   ```bash
   npm install
   npm run dev
   ```

2. **Navigeer naar /install**
   - Volg de installatie wizard
   - Kies template (PureStone of leeg)
   - Configureer basisinstellingen

3. **Admin Toegang**
   - Standaard login:
     - Gebruikersnaam: admin
     - Wachtwoord: purestone2024
   - Wijzig dit direct na eerste login

4. **Content Beheer**
   - Ga naar /admin/dashboard
   - Gebruik de verschillende tabs om content aan te passen
   - Alle wijzigingen worden direct opgeslagen

5. **DNS Configuratie**
   - Volg de TransIP instructies in de wizard
   - Stel A-record en CNAME correct in
   - Wacht op DNS propagatie (kan 24-48 uur duren)

## Bestandsstructuur

```
src/
├── components/         # UI componenten
├── config/            # Site configuratie
├── pages/             # Hoofdpagina's
├── hooks/             # Custom React hooks
└── lib/              # Utilities

Belangrijke bestanden:
- src/config/content.ts    # Website teksten
- src/config/social.ts     # Social media config
- src/config/images.ts     # Slider afbeeldingen
- src/pages/InstallWizard  # Installatie wizard
- src/pages/AdminDashboard # Admin interface
```

## Onderhoud & Updates

1. **Content Updates**
   - Log in op het admin dashboard
   - Gebruik de content tab voor tekstuele wijzigingen
   - Gebruik de media tab voor afbeeldingen
   - Alle wijzigingen worden automatisch opgeslagen

2. **Design Aanpassingen**
   - Gebruik de design tab in het dashboard
   - Pas kleuren en stijlen aan
   - Preview wijzigingen direct

3. **SEO Optimalisatie**
   - Beheer meta tags
   - Pas pagina titels en beschrijvingen aan
   - Voeg alt teksten toe aan afbeeldingen

## Troubleshooting

Als je een wit scherm ziet:
1. Check de browser console voor errors
2. Ververs de pagina
3. Clear de localStorage met:
   ```javascript
   localStorage.clear()
   ```
4. Herstart de development server

## Support

Voor technische ondersteuning:
- Check de issues op GitHub
- Raadpleeg de documentatie
- Contact: support@purestonedesign.com