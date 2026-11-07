// All site copy, in English and Spanish.
// Keep both languages with the same shape: components read the same keys.

export const LANGUAGES = ['es', 'en'];

export const translations = {
  en: {
    meta: {
      title: 'Digital Vortex - Business Management & Institutional Relations',
      description:
        'Digital Vortex offers minimalist business management and institutional relations solutions focused on efficiency and effectiveness in commercial relationships.',
    },

    nav: {
      links: ['What We Do', 'Who We Are', 'Success Cases'],
      menu: 'Menu',
      close: 'Close',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      siteMenu: 'Site menu',
      mainNav: 'Main navigation',
      home: 'Digital Vortex – home',
      contact: 'Contact us',
      language: 'Language',
    },

    whatWeDo: {
      title: 'What We Do',
      businessTitle: 'Business Management',
      businessText:
        'Our business management philosophy is rooted in minimalism—prioritizing what truly matters to drive performance and foster strong commercial relationships. We streamline operations by focusing only on essential elements, eliminating unnecessary complexity, and aligning every effort with clear, measurable outcomes.',
      principlesTitle: 'Core Principles:',
      principles: [
        { title: 'Clear Strategy:', text: 'Focused, intentional direction that guides all decisions and actions.' },
        { title: 'Key Relationships:', text: 'Prioritize and nurture high-impact partnerships for mutual growth.' },
        { title: 'Automation:', text: 'Leverage smart systems to reduce manual work and increase consistency.' },
        { title: 'Constant Measurement:', text: 'Track performance rigorously to stay agile and optimize continuously.' },
        { title: 'Simplicity:', text: 'Eliminate clutter—keep structures, communication, and processes lean and effective.' },
      ],
      institutionalTitle: 'Institutional Relations',
      services: [
        { name: 'Representations', description: 'Your voice before key institutions and partners.' },
        { name: 'Strategic Consulting', description: 'Clear direction and measurable results.' },
        { name: 'Real Estate Management', description: 'Assets managed end to end.' },
        { name: 'Investment Funds', description: 'Structured, transparent growth.' },
      ],
    },

    whoWeAre: {
      title: 'Who We Are',
      text:
        'We are a cross-functional team of seasoned professionals with diverse expertise and a strong track record of success. Our collaborative approach combines strategic insight, technical know-how, and real-world experience to deliver impactful solutions across industries. Proven results, agile execution, and a shared commitment to excellence define who we are.',
      roles: { alfonso: 'Co-Founder', carolina: 'General Manager' },
    },

    successCases: {
      title: 'Success Cases',
      intro:
        'Our team has led and contributed to a wide range of projects across diverse industries. Each case reflects our ability to adapt, innovate, and deliver tangible results.',
      labels: { challenge: 'Challenge', approach: 'Approach', impact: 'Impact' },
      readMore: 'Read the full story',
      readLess: 'Show less',
      cases: [
        {
          client: 'TRES60',
          tag: 'Digital transformation',
          area: 'Strategic Planning & Business Development',
          challenge: 'Align core operations with emerging digital opportunities.',
          approach: 'Strategic planning and business development initiatives.',
          impact: 'Optimized internal processes and new revenue channels.',
          story:
            "We led the strategic planning and implementation of business development initiatives to support TRES60's digital transformation journey. Our work focused on aligning their core operations with emerging digital opportunities, optimizing internal processes, and identifying new revenue channels through innovation and technology.",
        },
        {
          client: 'Codelco – El Teniente Division',
          tag: 'Mining',
          area: 'Process Optimization & Technology Implementation',
          challenge: 'Raise operational efficiency across critical functions.',
          approach: 'Process optimization strategy and targeted technologies.',
          impact: 'Streamlined workflows and fewer bottlenecks.',
          story:
            'We executed a comprehensive process optimization strategy and implemented targeted technologies to enhance operational efficiency within the El Teniente Division. The initiative streamlined key workflows, reduced bottlenecks, and supported sustainable performance improvements across critical functions.',
        },
        {
          client: 'GLOBE S.A.',
          tag: 'International expansion',
          area: 'International Business Development',
          challenge: 'Expand into new international markets.',
          approach: 'Market selection and strategic partnerships.',
          impact: 'A value proposition adapted for sustainable global growth.',
          story:
            "We supported GLOBE S.A. in designing and executing international business development strategies aimed at market expansion. Our work focused on identifying high-potential markets, building strategic partnerships, and adapting the company's value proposition to diverse global contexts, driving sustainable international growth.",
        },
        {
          client: 'ECM Ingeniería S.A.',
          tag: 'Engineering',
          area: 'Engineering Solutions & Process Management Systems',
          challenge: 'Scale technical capabilities and project execution.',
          approach: 'Advanced engineering solutions and integrated process management.',
          impact: 'Scalable systems ready for operational growth.',
          story:
            'We led the implementation of advanced engineering solutions and integrated process management systems for ECM Ingeniería S.A. The project focused on enhancing technical capabilities, improving project execution efficiency, and establishing scalable systems to support operational growth.',
        },
      ],
      institutionalTitle: 'Institutional Relations',
      institutionalText:
        'We foster strong, strategic relationships with key institutions to enhance our influence, credibility, and access to opportunities. Our approach is proactive and collaborative, ensuring alignment with public and private stakeholders, regulatory bodies, and industry groups. These relationships are essential to navigating complex environments, supporting sustainable growth, and driving long-term value.',
    },

    footer: { follow: 'Follow us' },
  },

  es: {
    meta: {
      title: 'Digital Vortex - Gestión Empresarial y Relaciones Institucionales',
      description:
        'Digital Vortex ofrece soluciones minimalistas de gestión empresarial y relaciones institucionales, enfocadas en la eficiencia y efectividad de las relaciones comerciales.',
    },

    nav: {
      links: ['Qué hacemos', 'Quiénes somos', 'Casos de éxito'],
      menu: 'Menú',
      close: 'Cerrar',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      siteMenu: 'Menú del sitio',
      mainNav: 'Navegación principal',
      home: 'Digital Vortex – inicio',
      contact: 'Contáctanos',
      language: 'Idioma',
    },

    whatWeDo: {
      title: 'Qué hacemos',
      businessTitle: 'Gestión Empresarial',
      businessText:
        'Nuestra filosofía de gestión se basa en el minimalismo: priorizar lo que realmente importa para impulsar el desempeño y construir relaciones comerciales sólidas. Simplificamos las operaciones enfocándonos solo en lo esencial, eliminando la complejidad innecesaria y alineando cada esfuerzo con resultados claros y medibles.',
      principlesTitle: 'Principios clave:',
      principles: [
        { title: 'Estrategia clara:', text: 'Una dirección enfocada e intencional que guía cada decisión y acción.' },
        { title: 'Relaciones clave:', text: 'Priorizar y cultivar alianzas de alto impacto para crecer en conjunto.' },
        { title: 'Automatización:', text: 'Usar sistemas inteligentes para reducir el trabajo manual y ganar consistencia.' },
        { title: 'Medición constante:', text: 'Seguir el desempeño con rigor para mantener la agilidad y mejorar continuamente.' },
        { title: 'Simplicidad:', text: 'Eliminar lo superfluo: estructuras, comunicación y procesos ágiles y efectivos.' },
      ],
      institutionalTitle: 'Relaciones Institucionales',
      services: [
        { name: 'Representaciones', description: 'Tu voz ante instituciones y socios clave.' },
        { name: 'Consultoría Estratégica', description: 'Dirección clara y resultados medibles.' },
        { name: 'Gestión Inmobiliaria', description: 'Activos gestionados de principio a fin.' },
        { name: 'Fondos de Inversión', description: 'Crecimiento estructurado y transparente.' },
      ],
    },

    whoWeAre: {
      title: 'Quiénes somos',
      text:
        'Somos un equipo multidisciplinario de profesionales con amplia experiencia y una sólida trayectoria. Nuestro enfoque colaborativo combina visión estratégica, conocimiento técnico y experiencia práctica para entregar soluciones de impacto en distintas industrias. Resultados comprobados, ejecución ágil y un compromiso compartido con la excelencia nos definen.',
      roles: { alfonso: 'Cofundador', carolina: 'Gerente General' },
    },

    successCases: {
      title: 'Casos de éxito',
      intro:
        'Nuestro equipo ha liderado y participado en una amplia variedad de proyectos en distintas industrias. Cada caso refleja nuestra capacidad de adaptarnos, innovar y entregar resultados concretos.',
      labels: { challenge: 'Desafío', approach: 'Enfoque', impact: 'Impacto' },
      readMore: 'Leer la historia completa',
      readLess: 'Ver menos',
      cases: [
        {
          client: 'TRES60',
          tag: 'Transformación digital',
          area: 'Planificación Estratégica y Desarrollo de Negocios',
          challenge: 'Alinear la operación con nuevas oportunidades digitales.',
          approach: 'Planificación estratégica e iniciativas de desarrollo de negocios.',
          impact: 'Procesos internos optimizados y nuevas fuentes de ingreso.',
          story:
            'Lideramos la planificación estratégica y la implementación de iniciativas de desarrollo de negocios para apoyar la transformación digital de TRES60. Nuestro trabajo se centró en alinear sus operaciones con nuevas oportunidades digitales, optimizar procesos internos e identificar nuevas fuentes de ingreso a través de la innovación y la tecnología.',
        },
        {
          client: 'Codelco – División El Teniente',
          tag: 'Minería',
          area: 'Optimización de Procesos e Implementación Tecnológica',
          challenge: 'Aumentar la eficiencia operacional en funciones críticas.',
          approach: 'Estrategia de optimización de procesos y tecnologías específicas.',
          impact: 'Flujos de trabajo simplificados y menos cuellos de botella.',
          story:
            'Ejecutamos una estrategia integral de optimización de procesos e implementamos tecnologías específicas para mejorar la eficiencia operacional de la División El Teniente. La iniciativa simplificó flujos de trabajo clave, redujo cuellos de botella y apoyó mejoras sostenibles de desempeño en funciones críticas.',
        },
        {
          client: 'GLOBE S.A.',
          tag: 'Expansión internacional',
          area: 'Desarrollo de Negocios Internacionales',
          challenge: 'Expandirse a nuevos mercados internacionales.',
          approach: 'Selección de mercados y alianzas estratégicas.',
          impact: 'Una propuesta de valor adaptada para crecer globalmente.',
          story:
            'Apoyamos a GLOBE S.A. en el diseño y ejecución de estrategias de desarrollo de negocios internacionales orientadas a la expansión de mercado. Nos enfocamos en identificar mercados de alto potencial, construir alianzas estratégicas y adaptar la propuesta de valor de la empresa a distintos contextos globales, impulsando un crecimiento internacional sostenible.',
        },
        {
          client: 'ECM Ingeniería S.A.',
          tag: 'Ingeniería',
          area: 'Soluciones de Ingeniería y Sistemas de Gestión de Procesos',
          challenge: 'Escalar capacidades técnicas y la ejecución de proyectos.',
          approach: 'Soluciones de ingeniería avanzada y gestión integrada de procesos.',
          impact: 'Sistemas escalables, listos para el crecimiento operacional.',
          story:
            'Lideramos la implementación de soluciones de ingeniería avanzada y sistemas integrados de gestión de procesos para ECM Ingeniería S.A. El proyecto se enfocó en fortalecer las capacidades técnicas, mejorar la eficiencia en la ejecución de proyectos y establecer sistemas escalables para sostener el crecimiento operacional.',
        },
      ],
      institutionalTitle: 'Relaciones Institucionales',
      institutionalText:
        'Cultivamos relaciones sólidas y estratégicas con instituciones clave para fortalecer nuestra influencia, credibilidad y acceso a oportunidades. Nuestro enfoque es proactivo y colaborativo, asegurando la alineación con actores públicos y privados, organismos reguladores y gremios. Estas relaciones son esenciales para desenvolverse en entornos complejos, sostener el crecimiento y generar valor a largo plazo.',
    },

    footer: { follow: 'Síguenos' },
  },
};
