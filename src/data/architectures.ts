// El explorador consume escenarios, no contiene copy hardcodeado en su controlador.
export interface ArchitectureScenario {
  id: string;
  name: string;
  label: string;
  caption: string;
  nodes: readonly { eyebrow: string; title: string }[];
}

export const architectures: readonly ArchitectureScenario[] = [
  {
    id: 'captacion',
    name: 'Captación',
    label: 'Patrón / 01',
    caption:
      'Registrar el contexto de cada solicitud, normalizar su información y activar las siguientes acciones sin perder trazabilidad.',
    nodes: [
      { eyebrow: 'Puntos de contacto', title: 'Web · Formulario · WhatsApp' },
      { eyebrow: 'Capa de proceso', title: 'Validación / Eventos' },
      { eyebrow: 'Seguimiento', title: 'CRM / Equipo comercial' },
    ],
  },
  {
    id: 'sincronizacion',
    name: 'Integración',
    label: 'Patrón / 02',
    caption:
      'Conectar sistemas diferentes manteniendo consistencia de datos, reglas de negocio y procesos de recuperación ante errores.',
    nodes: [
      { eyebrow: 'Aplicaciones', title: 'Sistema A' },
      { eyebrow: 'Capa de conexión', title: 'API / Middleware' },
      { eyebrow: 'Operación', title: 'Sistema B' },
    ],
  },
  {
    id: 'conversacion',
    name: 'Comunicación',
    label: 'Patrón / 03',
    caption:
      'Integrar conversaciones con procesos internos y permitir continuidad entre automatización y atención humana, sin depender de un proveedor único.',
    nodes: [
      { eyebrow: 'Interacción', title: 'WhatsApp Business API' },
      { eyebrow: 'Orquestación', title: 'Reglas / Webhooks' },
      { eyebrow: 'Continuidad', title: 'CRM / Atención humana' },
    ],
  },
];
