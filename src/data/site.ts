export const site = {
  name: 'Juan Franco',
  fullName: 'Juan Antonio Franco Madrid',
  title: 'Juan Franco — Desarrollo, sistemas y automatización',
  description:
    'Desarrollo de software, integración de sistemas y automatización. Perfil profesional y consultoría técnica independiente.',
  email: 'hola@juanfrancoconsultor.com',
  location: 'Ciudad de México',
  role: 'Full-Stack Developer',
  specialties: 'Integración de sistemas & automatización',
  // No publicar enlaces sociales hasta verificar el perfil definitivo.
  linkedIn: null as string | null,
} as const;

export const navigation = [
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Stack', href: '#stack' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Contacto', href: '#contacto' },
] as const;
