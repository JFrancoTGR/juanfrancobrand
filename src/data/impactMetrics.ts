export const impactMetrics = {
  lastUpdated: '18 de noviembre de 2026',

  projects: [
    {
      id: 'estrategia-urbana',
      name: 'Estrategia Urbana',
      category: 'Integraciones y automatización comercial',
      period: '09 feb — 18 nov 2026',

      metrics: [
        {
          value: 5226,
          label: 'Oportunidades registradas',
        },
        {
          value: 4754,
          label: 'Contactos distintos',
        },
        {
          value: 3977,
          label: 'Registros con API de mensajería confirmada',
        },
        {
          value: 3520,
          label: 'Registros con API ERP confirmada',
        },
        {
          value: 309,
          label: 'Registros de flujo entrante WhatsApp',
        },
      ],
    },

    {
      id: 'damex',
      name: 'Damex',
      category: 'Consultoría y arquitectura CRM',
      period: '03 may — 18 nov 2026',

      metrics: [
        {
          value: 789,
          label: 'Oportunidades del universo analizado',
        },
        {
          value: 615,
          label: 'Contactos distintos',
        },
        {
          value: 197,
          label: 'Registros identificados como migrados',
        },
      ],
    },
  ],

  sendPulse: {
    title: 'Automatización de mensajería',
    platform: 'SendPulse',
    period: 'Agosto — noviembre de 2026',

    eventsProcessed: 3319,

    templateSendRequests: 1189,
    templateSendHttp200: 1187,

    responseMedianSeconds: 1.67,
    responseP95Seconds: 2.16,
  },

  automation: {
    title: 'Procesamiento automatizado',
    date: '10 de noviembre de 2026',

    processed: 226,
    messages: 63,
    terminal: 161,
    reviews: 2,
    errors: 0,

    durationSeconds: 1494,
  },
} as const;
