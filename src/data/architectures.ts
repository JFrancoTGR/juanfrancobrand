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
    name: 'Automatización comercial',
    label: 'Solución / 01',
    caption:
      'Centralizo prospectos de campañas publicitarias, sitios web y WhatsApp. Automatizo su registro, clasificación, asignación y primeros contactos, manteniendo la información disponible para dar continuidad al seguimiento comercial.',
    nodes: [
      {
        eyebrow: 'Captación',
        title: 'Meta · Google · Web',
      },
      {
        eyebrow: 'Gestión comercial',
        title: 'CRM · Reglas · Asignación',
      },
      {
        eyebrow: 'Seguimiento',
        title: 'WhatsApp · Asesores',
      },
    ],
  },
  {
    id: 'sincronizacion',
    name: 'Integración de sistemas',
    label: 'Solución / 02',
    caption:
      'Conecto plataformas comerciales y administrativas para sincronizar información y estados. Implemento reglas de negocio, validaciones y mecanismos de recuperación que permiten mantener la operación coordinada.',
    nodes: [
      {
        eyebrow: 'Gestión comercial',
        title: 'CRM',
      },
      {
        eyebrow: 'Capa de integración',
        title: 'API · Middleware',
      },
      {
        eyebrow: 'Administración',
        title: 'ERP · Sistemas internos',
      },
    ],
  },
  {
    id: 'conversacion',
    name: 'Atención automatizada',
    label: 'Solución / 03',
    caption:
      'Integro conversaciones de WhatsApp con procesos comerciales. Automatizo mensajes, seguimientos y respuestas según eventos del CRM, permitiendo que la atención humana continúe cuando sea necesario.',
    nodes: [
      {
        eyebrow: 'Comunicación',
        title: 'WhatsApp Business API',
      },
      {
        eyebrow: 'Automatización',
        title: 'Eventos · Plantillas · Reglas',
      },
      {
        eyebrow: 'Atención',
        title: 'CRM · Asesor · Historial',
      },
    ],
  },
];
