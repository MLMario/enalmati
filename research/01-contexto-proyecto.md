# Rediseño de enalmati.com: contexto del proyecto

## Resumen

En Almati es un negocio de bienestar integral para empresas, con base en Lima, Perú. Lo fundó Carolyn Roque Lastarria. Ofrece sesiones vivenciales (breathwork, sound healing, yin yoga e inmersión en hielo) y talleres de desarrollo (salud mental y arteterapia, mindfulness, bienestar financiero, e inteligencia emocional y crecimiento personal). Se contratan como piloto, como programa trimestral o semestral, o como programa a medida.

La web actual (https://enalmati.com) es bonita, pero no convierte: no deja claro qué ofrece, a quién ni por qué, le habla a una persona en vez de a una empresa y lleva los contactos a un email genérico.

## Objetivo

Rediseñar la web para que una empresa (Recursos Humanos o gerencia) entienda en segundos qué ofrece En Almati, por qué le conviene y cómo empezar, y que **escriba por WhatsApp**. El indicador de éxito es más conversaciones iniciadas por WhatsApp.

## Qué vamos a hacer

1. Reescribir el contenido para un cliente empresa, usando las respuestas de Carolyn (ver `02-feedback-y-requerimientos.md`).
2. Reestructurar la página con este orden de secciones:
   1. Titular con la propuesta de valor y botón de WhatsApp
   2. Beneficios para la empresa
   3. Servicios: sesiones y talleres, con 3 beneficios por práctica
   4. Cómo funciona (proceso de 3 o 4 pasos)
   5. Programas (piloto, trimestral, semestral, a medida)
   6. Por qué En Almati (ventaja comparativa)
   7. Quiénes somos (bio de Carolyn)
   8. Preguntas frecuentes
   9. Llamado final a WhatsApp
3. Llevar todos los botones a WhatsApp, cada uno con un mensaje ya escrito según el plan o servicio.

## Alcance

**Sí entra**
- Rediseño visual y de contenido de la web.
- Botones con enlaces `wa.me` y mensajes predefinidos.

**No entra**
- Agenda, calendario o reservas en línea. Carolyn tendría que configurarlos y mantenerlos ella, así que queda fuera.
- Formularios que envíen datos a un backend o a un email.
- Precios en la web: Carolyn decidió no mostrarlos.
- Retiros (Bali, Ko Pha Ngan, Cusco): se sacan de la página.

## Restricciones y decisiones tomadas

| Tema | Decisión |
|---|---|
| Cliente principal | Empresas (B2B). La web le habla a Recursos Humanos o gerencia. |
| Canal de contacto | WhatsApp **+51 996 134 087** (`https://wa.me/51996134087`). Carolyn se comprometió a responder en minutos. |
| Email | `info@enalmati.com` se mantiene solo en el pie de página. |
| Testimonios y resultados | No existen. No inventarlos ni usar frases como "Más elegido" sin respaldo. |
| Fotos | No hay fotos de sesiones reales. Usar las imágenes actuales o recursos genéricos. Sin retrato de Carolyn. |
| Especialistas | No se nombran. Carolyn los elige según disponibilidad y responde por la calidad. |
| Precios | No se muestran. La pregunta frecuente de precio dice que depende del formato y del tamaño del equipo, y promete una propuesta en 24 horas. |
| Hosting | Netlify, administrado por quien hace el rediseño (no hace falta pedirle accesos a Carolyn). |

## Estado actual de la web (octubre 2026)

- Hoy es una página de una sola pantalla con secciones que se abren por ancla (`#vision`, `#sesiones`, `#talleres`, `#proximamente`). Desde la portada solo se ven el titular y el pie de página; el resto aparece al abrir el menú "Servicios".
- Titular actual: "Aquí el amor propio es una práctica de tu día a día." / "Regálate este momento." Tiene una animación de respiración ("Inhala").
- Hay un selector de idioma ES/EN.
- Los planes de sesiones son "Conócenos" (1 mes, 1 sesión), "Trimestral" (3 sesiones) y "Semestral" (6 sesiones). Los de talleres son "Piloto", "Programa trimestral" y "Programa semestral". Además hay un botón "Diseñemos tu programa" para combinar ambos.
- Los botones de los planes y "Escríbenos" abren `mailto:info@enalmati.com?subject=Quiero conocer En Almati`. Solo existe un enlace de WhatsApp, con el mensaje "Hola En Almati, quiero saber más sobre sus programas de bienestar corporativo".
- Identidad visual actual: verde bosque, dorado y un acento magenta, con tipografía serif en los titulares. Puede mantenerse como base de la marca.
- El pie de página no tiene enlaces a redes sociales.

## Pendiente de decidir

Estos puntos salieron en la revisión, pero no se acordó todavía si entran:

1. **Portada vacía.** Pasar todo a una sola página larga con scroll. Es lo que propone la estructura de arriba y es lo que más pesa en la conversión, pero hay que confirmarlo.
2. **Simplificar los planes.** Hoy hay 6 tarjetas con nombres distintos ("Conócenos" y "Piloto" para lo mismo). La propuesta es unificar los nombres y combinar sesiones y talleres en una sola sección.
3. **Afirmaciones sin respaldo.** "Más elegido", "Técnica comprobada" y "Resultados desde la primera sesión" no tienen evidencia.
4. **Redes sociales** en el pie de página (por ejemplo, LinkedIn).
5. **Versión en inglés.** El selector ES/EN existe, pero todo el contenido nuevo está en español. Hay que decidir si se traduce o si se quita el selector.
6. **Tamaño de grupo.** En la logística Carolyn puso un mínimo de 10 personas, pero en la pregunta frecuente escribió "8 a 30". Hay que confirmar cuál vale.
7. **Base técnica.** Falta confirmar con qué está hecha la web actual (HTML estático, framework, constructor de páginas) antes de empezar a construir.
