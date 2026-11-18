// Fuente de contenido. Actualizar copy sin intervenir en componentes o estilos.
export const capabilities = [
  'Desarrollo Full-Stack',
  'Integración de sistemas',
  'Arquitectura CRM',
  'Automatización de procesos',
  'Infraestructura y operación',
] as const;

export const solutions = [
  {
    title: 'Automatización comercial.',
    text: 'Conecto campañas publicitarias, formularios, WhatsApp y sistemas CRM para registrar prospectos, asignar responsables, automatizar el primer contacto y coordinar su seguimiento comercial.',
  },
  {
    title: 'Integración de sistemas.',
    text: 'Conecto plataformas comerciales, administrativas y herramientas internas para sincronizar información, aplicar reglas de negocio y mantener procesos coordinados entre diferentes sistemas.',
  },
  {
    title: 'Desarrollo a medida.',
    text: 'Diseño y desarrollo aplicaciones web, herramientas internas y plataformas digitales que responden a necesidades específicas, integran información y evolucionan con cada organización.',
  },
  {
    title: 'Infraestructura y continuidad.',
    text: 'Configuro y administro servidores, bases de datos, entornos de hosting, conexiones VPN y procesos automatizados para mantener soluciones estables, seguras y sostenibles.',
  },
] as const;

export const workingMethod = [
  { title: 'Entender', detail: 'Contexto y objetivos' },
  { title: 'Diseñar', detail: 'Arquitectura y decisiones' },
  { title: 'Implementar', detail: 'Desarrollo y conexión' },
  { title: 'Evolucionar', detail: 'Medición y mejoras' },
] as const;

export const technologyGroups = [
  {
    title: 'Desarrollo',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'PHP',
      'MySQL',
      'Astro',
      'Git',
    ],
  },
  {
    title: 'Integraciones',
    tags: [
      'GoHighLevel (HighLevel)',
      'APIs REST',
      'Webhooks',
      'CAPISoft',
      'WhatsApp Business API',
      'SendPulse',
      'Google Marketing Platform',
      'Meta Business Platform',
      'N8N',
    ],
  },
  {
    title: 'Infraestructura',
    tags: [
      'Servidores',
      'Hosting',
      'VPN',
      'Dominios',
      'Despliegues',
      'Bases de datos',
      'Cronjobs',
      'Logs',
    ],
  },
] as const;

export const career = [
  'Estrategia Urbana',
  'Grupo Boletín',
  'Globalpaq',
  'AD+',
  'Gobiernos municipales',
] as const;

// Evolución profesional

export const careerEvolution = [
  {
    title: 'Diseño y comunicación visual',
    description:
      'Mi formación comenzó en el diseño, desarrollando una comprensión de la comunicación, las jerarquías visuales y la relación entre las personas y las interfaces digitales.',
  },
  {
    title: 'Interfaces y desarrollo web',
    description:
      'Esa perspectiva evolucionó hacia la programación. Pasé de diseñar experiencias digitales a construir interfaces, aplicaciones y funcionalidades con lógica de negocio propia.',
  },
  {
    title: 'Integraciones, automatización y consultoría',
    description:
      'Mi evolución hacia la arquitectura tecnológica me ha permitido diseñar e implementar integraciones entre plataformas, automatizar procesos comerciales y ofrecer consultoría especializada en CRM, flujos de trabajo y soluciones digitales.',
  },
] as const;

export const consulting = [
  {
    client: 'Damex',
    description:
      'Consultoría en automatización comercial, arquitectura CRM, diseño de workflows, integración de plataformas y flujos de captación, atención y seguimiento de prospectos.',
  },
] as const;
