export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.monicarau.com/#person",
        "name": "Mónica Rau",
        "alternateName": ["Ita Rau", "Monica Rau"],
        "url": "https://www.monicarau.com",
        "image": "https://www.monicarau.com/og-image.jpg",
        "jobTitle": "Consultora en Estrategia, Crecimiento y Transformación",
        "description": "Consultora estratégica que combina curiosidad, pensamiento estratégico, capacidad de ejecución y experiencia emprendedora. Identifica oportunidades de crecimiento donde otros ven complejidad, conecta puntos aparentemente inconexos y transforma oportunidades en iniciativas concretas con impacto real. Enfocada en crear valor sostenible: negocios que crecen, generan rentabilidad y pueden sostenerse en el tiempo.",
        "email": "hola@monicarau.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Santiago",
          "addressRegion": "Región Metropolitana",
          "addressCountry": "CL",
        },
        "sameAs": [
          "https://www.linkedin.com/in/monicarau",
        ],
        "knowsAbout": [
          "Estrategia de crecimiento empresarial",
          "Transformación organizacional",
          "Nuevos negocios y emprendimiento",
          "Business case y modelos financieros",
          "Liderazgo ejecutivo fractional",
          "Innovación corporativa",
          "Diagnóstico estratégico",
        ],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "OBS Business School / Universitat de Barcelona",
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Consultora estratégica",
          "occupationLocation": {
            "@type": "Country",
            "name": "Chile",
          },
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.monicarau.com/#business",
        "name": "Mónica Rau — Consultoría en Estrategia y Crecimiento",
        "url": "https://www.monicarau.com",
        "logo": "https://www.monicarau.com/og-image.jpg",
        "image": "https://www.monicarau.com/og-image.jpg",
        "description": "Consultoría estratégica para empresas medianas en Chile. Ayuda a equipos ejecutivos a identificar oportunidades de crecimiento, evaluar iniciativas estratégicas y convertir buenas ideas en negocios sostenibles y rentables. Especializada en diagnóstico estratégico, business case y liderazgo fractional.",
        "email": "hola@monicarau.com",
        "founder": { "@id": "https://www.monicarau.com/#person" },
        "areaServed": [
          { "@type": "Country", "name": "Chile" },
          { "@type": "AdministrativeArea", "name": "Latinoamérica" },
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Santiago",
          "addressRegion": "Región Metropolitana",
          "addressCountry": "CL",
        },
        "priceRange": "$$$$",
        "knowsAbout": [
          "Estrategia de crecimiento",
          "Transformación organizacional",
          "Nuevos negocios",
          "Liderazgo fractional",
          "Business case",
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de consultoría estratégica",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Strategic Opportunity Assessment",
                "description": "Diagnóstico estratégico para identificar dónde apostar, priorizar iniciativas y construir un roadmap ejecutivo de 90 días.",
                "provider": { "@id": "https://www.monicarau.com/#person" },
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Case & Executive Pitch Lab",
                "description": "Construcción de casos de negocio financiables con métricas, narrativa ejecutiva y plan de implementación.",
                "provider": { "@id": "https://www.monicarau.com/#person" },
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fractional Growth & Transformation Leader",
                "description": "Liderazgo ejecutivo part-time para empresas que necesitan capacidad senior en estrategia y transformación sin incorporar una gerencia full-time.",
                "provider": { "@id": "https://www.monicarau.com/#person" },
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.monicarau.com/#website",
        "url": "https://www.monicarau.com",
        "name": "Mónica Rau — Consultora en Estrategia y Crecimiento",
        "description": "Sitio oficial de Mónica Rau, consultora en estrategia, crecimiento y transformación para empresas medianas en Chile.",
        "inLanguage": "es-CL",
        "author": { "@id": "https://www.monicarau.com/#person" },
        "publisher": { "@id": "https://www.monicarau.com/#person" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.monicarau.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Con qué tipo de empresas trabaja Mónica Rau?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trabajo principalmente con empresas medianas en Chile que están enfrentando decisiones relevantes de crecimiento o transformación: empresas que necesitan nuevas fuentes de ingresos, que quieren redefinir su modelo de negocio, o que tienen iniciativas estratégicas que no avanzan al ritmo que deberían.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Qué es un Fractional Growth Leader?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Es liderazgo ejecutivo part-time: accedes a capacidad senior en estrategia, crecimiento y transformación sin el costo de una gerencia full-time. Mónica Rau trabaja directamente con el equipo ejecutivo, sin capas intermedias ni equipos junior.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Cómo es el proceso de trabajo con Mónica Rau?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende del desafío. Para empresas que necesitan claridad estratégica, comienza con un diagnóstico y roadmap. Para iniciativas que necesitan sustento financiero, desarrolla un business case completo con pitch ejecutivo. Para acompañamiento continuo, el modelo Fractional es la opción.",
            },
          },
          {
            "@type": "Question",
            "name": "¿En qué se diferencia Mónica Rau de una consultora tradicional?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trabaja directamente con los equipos ejecutivos, sin capas intermedias ni equipos junior. Combina experiencia corporativa (Walmart Chile) con la perspectiva de quien también funda y opera sus propios negocios. El trabajo no termina con una recomendación: termina cuando existe una decisión, un plan y alguien ejecutándolo.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Trabaja Mónica Rau fuera de Santiago?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Está basada en Santiago, Chile, pero trabaja con empresas en distintas ciudades y países de Latinoamérica, tanto de forma remota como presencial según el proyecto.",
            },
          },
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta contratar a Mónica Rau como consultora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los honorarios varían según el formato y alcance del proyecto. Para obtener una cotización, puede contactar directamente a hola@monicarau.com o conectar vía LinkedIn para una conversación exploratoria.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
