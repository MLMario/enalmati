# Rediseño de enalmati.com: feedback y requerimientos

Este documento junta cada punto de feedback con lo que hay que cambiar y la respuesta de Carolyn (fundadora de En Almati) a los requerimientos que le pedimos. Sus respuestas van casi textuales, con la ortografía corregida. Úsalas como fuente del contenido de la web: se pueden editar para que se lean mejor, pero no hay que inventar datos que ella no dio.

Contexto general del proyecto: `01-contexto-proyecto.md`.

---

## Parte A: feedback inicial

### A1. Propuesta de valor clara en 2 segundos

**Feedback:** Al entrar no queda claro qué ofrece En Almati, a quién ni por qué debería importarle. La primera pantalla tiene que responder eso en segundos.

**Respuesta de Carolyn: propuesta de valor**
> Ayudamos a las empresas a cuidar de las personas que las hacen crecer, a través de programas de bienestar integral que combinan salud física y mental, bienestar emocional, educación financiera y desarrollo personal. Diseñamos experiencias y talleres a medida, adaptados a las necesidades de cada organización y sus equipos.

**Para construir:** Es demasiado largo para un titular. Sacar de aquí un titular corto (por ejemplo, la idea "cuidar de las personas que hacen crecer a tu empresa") y usar el resto como subtítulo.

### A2. Beneficios para la empresa

**Feedback:** No hay ninguna sección que explique qué gana una empresa con contratar a En Almati.

**Respuesta de Carolyn**

| Beneficio | Descripción |
|---|---|
| Bienestar emocional | Herramientas para gestionar el estrés y favorecer el equilibrio emocional. |
| Enfoque y energía | Espacios para recuperar la concentración, la claridad mental y la vitalidad durante la jornada. |
| Bienestar físico | Prácticas que promueven el movimiento y ayudan a contrarrestar las molestias asociadas al trabajo sedentario. |
| Desarrollo personal | Herramientas para fortalecer el autoconocimiento, la inteligencia emocional y la toma de decisiones. |
| Bienestar financiero | Conocimientos prácticos para mejorar la relación con el dinero y tomar decisiones financieras más informadas. |
| Gestión sencilla para RR. HH. | Programas a medida, coordinación integral y seguimiento de las actividades, sin añadir complejidad operativa al equipo. |

### A3. Proceso "1, 2, 3, así de fácil"

**Feedback:** No se explica cómo funciona contratar el servicio. Hay que mostrarlo en pocos pasos simples.

**Respuesta de Carolyn**
1. Nos escribes por WhatsApp y conversamos sobre lo que tu equipo necesita según su situación actual.
2. Te enviamos una propuesta a tu medida y definimos lugar, fecha y hora.
3. Brindamos el servicio.
4. *(Opcional)* Recogemos el feedback del equipo para ver qué les pareció.

### A4. Ventaja comparativa

**Feedback:** No queda claro qué diferencia a En Almati de otras opciones de bienestar corporativo.

**Respuesta de Carolyn**
- **Bienestar integral en un solo lugar:** integramos bienestar físico y mental, salud emocional, educación financiera y desarrollo personal en una propuesta que aborda distintas necesidades de los colaboradores.
- **Del evento puntual a una cultura de bienestar:** no nos limitamos a una actividad de team building al año. Diseñamos programas y experiencias a lo largo del año que invitan a los equipos a hacer una pausa, reconectar consigo mismos y cultivar hábitos de bienestar de forma continua.
- **Experiencias curadas con atención a la calidad:** cada propuesta refleja la esencia de En Almati. Trabajo con profesionales especializados, elegidos por su experiencia y calidad humana, y cuido personalmente cada detalle para ofrecer experiencias coherentes, cuidadas y adaptadas a cada organización.
- **Una perspectiva internacional del bienestar:** mi experiencia viviendo en Tailandia e Indonesia durante dos años enriqueció mi visión del bienestar y me acercó a distintas prácticas que hoy inspiran la propuesta de En Almati.
- **Programas adaptados a cada organización:** cada empresa y cada equipo tienen necesidades distintas. Por eso diseñamos propuestas a medida, considerando los objetivos de la organización, las características de sus colaboradores y la experiencia que se busca ofrecer.

### A5. Contacto por WhatsApp y respuesta rápida

**Feedback:** Contactar por email es de las peores opciones. Cuanto más rápido se responde a un lead, más probable es convertirlo en cliente. WhatsApp tiene que ser el canal principal y la respuesta tiene que llegar en minutos.

**Respuesta de Carolyn**
- Número: **+51 996 134 087**
- Confirmó el número y se comprometió a responder rápido, idealmente en minutos.

---

## Parte B: revisión de la página

### B1. Hablarle a la empresa

**Hoy:** "Aquí el amor propio es una práctica de tu día a día", "Regálate este momento" y "Date tiempo para lo que te hace bien" le hablan a una persona. El botón principal ("Servicios") abre un menú en vez de invitar a escribir.

**Cambio:** Titular pensado para Recursos Humanos o gerencia, basado en la propuesta de valor (A1), con WhatsApp como botón principal. La frase de cierre también tiene que hablarle a la empresa.

### B2. Todos los botones a WhatsApp

**Hoy:** "Empezar aquí", "Quiero este programa", "Armar mi programa", "Agendar taller", "Diseñemos tu programa" y "Escríbenos" abren un email genérico, y no se sabe qué plan le interesó a la persona.

**Cambio:** Cada botón abre `https://wa.me/51996134087?text=...` con un mensaje según el plan. El email queda solo en el pie de página.

Mensajes sugeridos (codificar con URL encoding):

| Botón | Mensaje predefinido |
|---|---|
| Principal o general | Hola En Almati, quiero saber más sobre sus programas de bienestar para mi empresa. |
| Sesión piloto | Hola En Almati, me interesa una sesión piloto para mi equipo de __ personas. |
| Programa trimestral de sesiones | Hola En Almati, me interesa el programa trimestral de sesiones para mi equipo de __ personas. |
| Programa semestral de sesiones | Hola En Almati, me interesa el programa semestral de sesiones para mi equipo de __ personas. |
| Taller piloto | Hola En Almati, me interesa un taller piloto para mi equipo de __ personas. |
| Programa trimestral de talleres | Hola En Almati, me interesa el programa trimestral de talleres para mi equipo de __ personas. |
| Programa semestral de talleres | Hola En Almati, me interesa el programa semestral de talleres para mi equipo de __ personas. |
| Programa a medida | Hola En Almati, quiero armar un programa a medida para mi equipo. |

### B3. Tres beneficios por práctica, escritos para los trabajadores

**Hoy:** Cada práctica tiene 5 beneficios en lenguaje técnico ("activa el sistema nervioso parasimpático").

**Cambio:** Máximo 3 por práctica, escritos para la persona que la vive.

**Respuesta de Carolyn** (textos finales aprobados)

**Breathwork**
- Una pausa para reducir el estrés percibido y recuperar la calma.
- Técnicas de respiración para favorecer la claridad mental y la regulación emocional.
- Herramientas prácticas que puedes incorporar a tu rutina para afrontar momentos de presión.

**Sound healing**
- Un espacio de relajación profunda para hacer una pausa y desconectar del ritmo cotidiano.
- Una experiencia sensorial que invita a soltar tensiones y aquietar la mente.
- Un momento para descansar, reconectar contigo y retomar el día con una sensación de calma.

**Yin yoga**
- Estiramientos sostenidos para trabajar la flexibilidad y la movilidad.
- Una oportunidad para aliviar la sensación de rigidez tras muchas horas sentado.
- Una práctica pausada que combina cuerpo, respiración y atención plena para favorecer la relajación.

**Inmersión en hielo**
- Sales con más energía.
- Reduces la inflamación y el dolor muscular.
- Entrenas tu mente para manejar mejor la presión.

Los talleres (salud mental y arteterapia, mindfulness y presencia, bienestar financiero, crecimiento personal e inteligencia emocional) mantienen las descripciones de la web actual. No se pidieron beneficios para ellos.

### B4. Información práctica y preguntas frecuentes

**Hoy:** La web no dice cuánto dura, para cuántas personas es, dónde se hace, qué pone la empresa ni cuánto cuesta. La inmersión en hielo va a generar dudas de seguridad en Recursos Humanos.

**Cambio:** Una sección corta de información práctica y preguntas frecuentes.

**Respuesta de Carolyn: logística**

| Dato | Valor |
|---|---|
| Duración de una sesión | 60 min |
| Duración de un taller | 90 min |
| Grupo mínimo | 10 personas (en las preguntas frecuentes escribió 8; ver nota) |
| Grupo máximo | 30 personas |
| Dónde | En la oficina de la empresa, en un espacio externo o virtual |
| Qué pone la empresa | Solo una sala libre; En Almati se encarga de todo lo demás |

**Respuesta de Carolyn: precios**
- No mostrar precios.
- Motivo: varían mucho según el número de personas, la ubicación y si hay que contratar un espacio externo o es interno.

**Respuesta de Carolyn: inmersión en hielo**
- **Contraindicaciones:** personas con problemas cardíacos o circulatorios, hipertensión, embarazo, enfermedades autoinmunes o crónicas, sensibilidad extrema al frío (como Raynaud) o que tomen ciertos medicamentos.
- **Equipo (tinas, hielo):** lo lleva En Almati.

**Respuesta de Carolyn: preguntas frecuentes**

**¿Qué incluye el programa y cómo empezamos?**
Ofrecemos sesiones vivenciales (breathwork, sound healing, yin yoga, inmersión en hielo) y talleres de desarrollo (salud mental y arteterapia, mindfulness, bienestar financiero, inteligencia emocional). Se puede empezar con un piloto de una sesión o taller, ver cómo responde el equipo y luego pasar a un plan trimestral o semestral. También armamos programas a medida.

**¿Cuánto cuesta?**
Depende del formato y del tamaño del equipo. Los planes trimestrales y semestrales tienen un precio por sesión menor. Te enviamos una propuesta en 24 horas según los servicios que quieras para tu equipo.

**¿Cuántas personas pueden participar y dónde se hace?**
Grupos de [8 a 30] personas por sesión. Podemos ir a su oficina, a un espacio externo o combinar según la actividad. Nosotros nos encargamos de toda la logística del taller; la empresa solo pone el espacio y convoca.

**¿Quién dicta las sesiones?**
Especialistas seleccionados por En Almati, cada uno experto en su práctica. Tú tratas con una sola persona de contacto, y nosotros nos hacemos responsables de la calidad de toda la experiencia.

**Para construir:**
- Agregar una pregunta sobre la seguridad de la inmersión en hielo, con las contraindicaciones de arriba.
- La sesión virtual aplica sobre todo a talleres, y la inmersión en hielo no puede ser virtual. Hay que confirmarlo con Carolyn antes de afirmarlo en la web.
- **Nota:** el tamaño mínimo de grupo no coincide (10 en la logística, 8 en la pregunta frecuente). Confirmar con Carolyn.

### B5. Quiénes somos

**Hoy:** La sección de misión ("Somos la presencia que tu cuerpo y mente agradecen") es abstracta y no aparece nadie.

**Cambio:** Una sección "Quiénes somos" con Carolyn, su experiencia y la ventaja comparativa (A4).

**Respuesta de Carolyn: bio**
> Soy Carolyn Roque Lastarria, fundadora de En Almati.
>
> Durante más de 15 años trabajé en el mundo corporativo, liderando proyectos de estrategia comercial y expansión. Soy ingeniera industrial, tengo un MBA y he tenido la oportunidad de trabajar, vivir y estudiar en Europa, Asia y América. Esta trayectoria me ha permitido conocer distintas culturas y formas de trabajar, y comprender de cerca los desafíos de las personas y las organizaciones.
>
> Viví dos años en el sudeste asiático, entre Tailandia e Indonesia, una experiencia que transformó mi perspectiva sobre el bienestar y su lugar en nuestra vida cotidiana. Reforzó una convicción que hoy guía mi trabajo: cómo nos sentimos influye en cómo trabajamos, cómo lideramos y cómo nos relacionamos con los demás.
>
> Así nació En Almati, con el propósito de acercar el bienestar integral a las empresas. Diseñamos programas y experiencias que abarcan el bienestar físico y mental, la salud emocional, el mindfulness, la educación financiera y el desarrollo personal, adaptados a la realidad de cada organización.
>
> Mi compromiso es que cada experiencia refleje la esencia de En Almati: calidad, profesionalismo y calidez humana. Por eso, cuido cada detalle y trabajo con profesionales especializados que comparten nuestra visión, para ofrecer propuestas significativas y alineadas con lo que cada organización necesita.
>
> Porque detrás de cada empresa hay personas. Y cuidar de ellas también es una forma de crecer. 💛

**Respuesta de Carolyn: especialistas**
- No se nombran. Se asignan según disponibilidad; Carolyn hace el filtro y elige a los mejores.

**Respuesta de Carolyn: retrato**
- No, prefiere sin foto.

**Para construir:** En la web la bio puede ir resumida (2 o 3 párrafos), con la última frase como cierre destacado. Los especialistas se presentan como un equipo curado por Carolyn, sin nombres ni fotos.

### B6. Retiros

**Hoy:** Los retiros (Bali, Ko Pha Ngan, Cusco) aparecen en el menú principal junto a la oferta para empresas, aunque son para personas.

**Cambio y respuesta de Carolyn:** sacarlos de la página, incluidos su sección, su entrada en el menú y su formulario de lista de espera.

---

## Comentarios finales de Carolyn

> Nada, ¡veamos qué tal! ¡Gracias!

## Resumen de pendientes para confirmar con Carolyn

1. El tamaño mínimo de grupo: ¿8 o 10 personas?
2. Qué servicios se pueden hacer de forma virtual.
