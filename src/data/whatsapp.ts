// Pre-filled WhatsApp messages, one per CTA. Source: research/02 §B2 (D-002).
// Every button on the site must use waLink() with one of these keys.
import { WHATSAPP_NUMBER } from './contact.ts';

export const WHATSAPP_MESSAGES = {
  general: 'Hola En Almati, quiero saber más sobre sus programas de bienestar para mi empresa.',
  sesionPiloto: 'Hola En Almati, me interesa una sesión piloto para mi equipo de __ personas.',
  sesionTrimestral: 'Hola En Almati, me interesa el programa trimestral de sesiones para mi equipo de __ personas.',
  sesionSemestral: 'Hola En Almati, me interesa el programa semestral de sesiones para mi equipo de __ personas.',
  tallerPiloto: 'Hola En Almati, me interesa un taller piloto para mi equipo de __ personas.',
  tallerTrimestral: 'Hola En Almati, me interesa el programa trimestral de talleres para mi equipo de __ personas.',
  tallerSemestral: 'Hola En Almati, me interesa el programa semestral de talleres para mi equipo de __ personas.',
  aMedida: 'Hola En Almati, quiero armar un programa a medida para mi equipo.',
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

export function waLink(key: WhatsAppMessageKey): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES[key])}`;
}
