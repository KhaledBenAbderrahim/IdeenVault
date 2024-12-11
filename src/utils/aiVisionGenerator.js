// Mock AI vision generator
export const generateProductVision = async (idea) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Generate vision based on idea properties
  return {
    vision: `${idea.title} ist eine innovative Lösung, die darauf abzielt, ${idea.description} 
    Die Vision ist es, eine führende Position im Bereich ${idea.keywords?.join(', ')} einzunehmen 
    und nachhaltige Wertschöpfung für alle Stakeholder zu generieren.`,

    usp: `Die einzigartigen Verkaufsargumente von ${idea.shortTitle} sind:
    1. Innovative ${idea.type}-basierte Lösung
    2. Maßgeschneidert für ${idea.customer}
    3. Hohe Benutzerfreundlichkeit und Effizienz
    4. Skalierbare und zukunftssichere Architektur`,

    problemsAddressed: `${idea.shortTitle} adressiert folgende zentrale Herausforderungen:
    1. ${idea.description}
    2. Ineffizienzen im aktuellen Prozess
    3. Mangelnde Digitalisierung im Bereich ${idea.keywords?.[0]}
    4. Steigende Anforderungen an ${idea.type}-Lösungen`,

    keyFeatures: `Kernfunktionen:
    1. Intuitive Benutzeroberfläche
    2. Automatisierte Prozesse
    3. Echtzeit-Datenverarbeitung
    4. ${idea.aiInfluence ? 'KI-gestützte Analysen und Empfehlungen' : 'Fortschrittliche Analysetools'}
    5. Skalierbare Cloud-Infrastruktur`,

    targetAudience: `Primäre Zielgruppe: ${idea.customer}
    Marktgröße: ${idea.targetGroupSize} potenzielle Nutzer
    Nutzerprofile:
    1. Hauptnutzer: ${idea.customer}
    2. Sekundärnutzer: Stakeholder im ${idea.keywords?.[0]}-Umfeld
    3. Entscheidungsträger in Unternehmen`,

    technicalRequirements: `Technische Anforderungen:
    1. Plattform: ${idea.type}-Technologie
    2. MVP-Reifegrad: ${idea.mvpMaturity}
    3. ${idea.aiInfluence ? 'KI/ML-Infrastruktur' : 'Klassische Entwicklungsumgebung'}
    4. Skalierbare Cloud-Architektur
    5. Moderne Sicherheitsstandards`,

    businessModel: `Geschäftsmodell:
    1. Monetarisierung: SaaS-Modell mit flexiblen Preisplänen
    2. Markteintritt: ${idea.priority === 'Hoch' ? 'Aggressive Marktdurchdringung' : 'Schrittweise Markteinführung'}
    3. Skalierung: ${idea.attractiveness > 3 ? 'Schnelles Wachstum durch Partner' : 'Organisches Wachstum'}
    4. Umsatzströme: Abonnements, Premium-Features, Support
    5. Partnerschaften: Strategische Allianzen im ${idea.keywords?.[0]}-Sektor`
  };
};