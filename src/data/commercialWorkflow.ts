export interface CommercialWorkflowStep {
  id: string;
  label: string;
  headline: string;
  context: string;
  automation: string;
  human: string;
  technology: string;
  outcome: string;
}

export const commercialWorkflow: readonly CommercialWorkflowStep[] = [
  {
    id: 'captacion',
    label: 'Captación',

    headline: 'Cada oportunidad comienza en un canal diferente.',

    context:
      'Los prospectos llegan desde campañas publicitarias, sitios web, formularios y canales de mensajería.',

    automation:
      'Identificar el origen de cada solicitud y activar automáticamente el proceso de recepción de información.',

    human:
      'Definir los canales, objetivos comerciales y criterios de captación.',

    technology: 'Meta Business Platform · Google · Web · WhatsApp',

    outcome: 'Solicitudes identificadas desde su origen.',
  },

  {
    id: 'registro',
    label: 'Registro',

    headline: 'La información se centraliza desde el primer momento.',

    context:
      'Cada contacto genera información que debe estar disponible para los equipos y sistemas involucrados.',

    automation:
      'Crear o actualizar contactos, normalizar datos, identificar duplicados y conservar información de origen.',

    human:
      'Definir los datos necesarios y las políticas de tratamiento de información.',

    technology: 'CRM · APIs REST · Webhooks',

    outcome: 'Información organizada y disponible para continuar.',
  },

  {
    id: 'clasificacion',
    label: 'Clasificación',

    headline: 'No todas las oportunidades necesitan el mismo recorrido.',

    context:
      'Cada prospecto puede tener diferentes intereses, necesidades, niveles de prioridad o características.',

    automation:
      'Clasificar contactos mediante reglas de negocio, campos personalizados y condiciones de entrada.',

    human: 'Establecer criterios comerciales, segmentos y prioridades.',

    technology: 'CRM · Reglas de negocio · Automatizaciones',

    outcome: 'Oportunidades organizadas según su contexto.',
  },

  {
    id: 'asignacion',
    label: 'Asignación',

    headline: 'Cada oportunidad llega al equipo adecuado.',

    context:
      'Los contactos deben distribuirse correctamente para evitar retrasos, duplicidades y pérdida de continuidad.',

    automation:
      'Asignar responsables según reglas comerciales, proyectos, equipos o disponibilidad y generar notificaciones.',

    human: 'Supervisar la distribución y atender situaciones excepcionales.',

    technology: 'CRM · Workflows · Notificaciones',

    outcome: 'Responsables definidos y procesos coordinados.',
  },

  {
    id: 'contacto',
    label: 'Contacto',

    headline: 'La primera interacción no tiene que esperar.',

    context:
      'La velocidad de respuesta y la continuidad de la conversación son elementos importantes del proceso comercial.',

    automation:
      'Activar mensajes autorizados, notificaciones y secuencias de bienvenida según el canal, horario y contexto.',

    human:
      'Continuar conversaciones, resolver dudas y ofrecer atención personalizada.',

    technology: 'WhatsApp Business API · CRM · Plantillas',

    outcome: 'Primer contacto oportuno y trazable.',
  },

  {
    id: 'seguimiento',
    label: 'Seguimiento',

    headline: 'Las oportunidades necesitan continuidad.',

    context:
      'Los procesos comerciales pueden extenderse durante días o semanas y requieren diferentes acciones de seguimiento.',

    automation:
      'Programar recordatorios, ejecutar secuencias de comunicación y actualizar estados según eventos comerciales.',

    human:
      'Evaluar respuestas, realizar llamadas, preparar propuestas y negociar.',

    technology: 'CRM · WhatsApp Business API · Automatizaciones',

    outcome: 'Seguimiento organizado y menor dependencia de tareas manuales.',
  },

  {
    id: 'conversion',
    label: 'Conversión',

    headline: 'El cierre también forma parte del sistema.',

    context:
      'Cuando una oportunidad avanza o se concreta, diferentes áreas necesitan conocer el resultado.',

    automation:
      'Sincronizar estados comerciales, actualizar sistemas administrativos y alimentar reportes de resultados.',

    human:
      'Confirmar acuerdos, cerrar operaciones y validar información administrativa.',

    technology: 'CRM · ERP · Integraciones · Analítica',

    outcome: 'Información comercial conectada con la operación.',
  },
];
