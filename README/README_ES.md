# Historia de Mini SNS

Este proyecto es un **curso de 16 días** en el que los estudiantes aprendieron y aplicaron progresivamente tecnologías como HTML, CSS, JavaScript, Node.js, Express, EJS y Bootstrap para construir un **Proyecto Mini SNS**.  
Cada paso introduce nuevos conceptos y tecnologías, permitiendo a los estudiantes comprender el flujo general del desarrollo web a través de la práctica.

> **Nota**: Este repositorio contiene solo el **proyecto final Mini SNS** como resultado del proceso de aprendizaje. Los ejemplos o archivos de práctica utilizados durante el curso no están incluidos.

---

## Selección de Idioma

- [한국어](./README_KR.md)
- [English](../README.md)

---

## Resumen del Curso

- **Objetivo**: Aprender a construir una aplicación SNS completa comenzando desde un sitio web estático, avanzando a servidores dinámicos, integración de bases de datos y autenticación de usuarios.
- **Enfoque**: Agregar nuevas características y tecnologías diariamente, enfocándose en el desarrollo práctico del proyecto.
- **Tecnologías Utilizadas**:
  - **HTML/CSS**: Estructura básica y diseño del sitio web.
  - **JavaScript**: Implementación de características dinámicas.
  - **Node.js & Express**: Desarrollo de servidores y diseño de API.
  - **EJS**: Renderizado dinámico utilizando un motor de plantillas.
  - **MongoDB**: Integración y gestión de bases de datos.
  - **Bootstrap**: Diseño de interfaz de usuario y mejora de la experiencia del usuario.

---

## Explicación del Proceso

Este proyecto se llevó a cabo aprendiendo nuevas tecnologías diariamente y aplicándolas progresivamente al Proyecto Mini SNS.  
Sin embargo, no todos los DÍAS resultaron en cambios directos en el proyecto. Algunos DÍAS se centraron en aprender nuevas tecnologías o en revisar y profundizar el contenido aprendido previamente.

Por ejemplo:

- **DÍA1** y **DÍA2** se centraron en aprender los conceptos básicos de HTML y CSS.  
  Durante este proceso, los estudiantes construyeron una comprensión de la estructura básica y el diseño del sitio web, lo que les permitió comenzar el Proyecto Mini SNS desde el **DÍA3**.
- **DÍA3** utilizó el conocimiento de los DÍA1 y DÍA2 para crear la versión inicial del Proyecto Mini SNS, que se basó en HTML estático.

Este enfoque alternado de aprendizaje y práctica permitió a los estudiantes aplicar lo que aprendieron en un entorno práctico, haciendo del proyecto una experiencia de aprendizaje práctica.

---

## Resumen

El progreso desde el `DÍA3` hasta el `DÍA16` es el siguiente:

- **DÍA3**: Versión inicial del Proyecto Mini SNS basada en HTML estático.
- **DÍA4**: Se agregaron estilos CSS para mejorar el diseño.
- **DÍA8**: Se implementó la funcionalidad de agregar/eliminar comentarios utilizando JavaScript.
- **DÍA10**: Se construyó un servidor utilizando Node.js y Express.js.
- **DÍA11**: Se agregó la gestión de sesiones y la autenticación de usuarios.
- **DÍA12**: Se introdujo el motor de plantillas EJS para renderizado dinámico.
- **DÍA14**: Se integró MongoDB para la gestión de publicaciones basadas en bases de datos.
- **DÍA15**: Se agregó la funcionalidad de gestión de amigos.
- **DÍA16**: Se mejoró la interfaz de usuario, se agregaron "me gusta" y comentarios, y se implementó el cifrado de contraseñas.

---

## DÍA3

- **Detalles**: La fase inicial del proyecto, donde se creó la estructura básica del sitio web utilizando HTML.
- **Características**: Una versión inicial del Proyecto Mini SNS basada en HTML estático.
- **Archivos Clave**:
  - `index.html`: La página principal con enlaces a "Write a Post" y "View Posts."
  - `write.html`: Un formulario simple para escribir publicaciones.
  - `posts.html`: Una página estática que muestra una lista de publicaciones.
- **Características**: Un sitio web estático sin funcionalidad de JavaScript o backend.

---

## DÍA4

- **Detalles**: Se mejoró el diseño del sitio web utilizando CSS.
- **Características Agregadas**:
  - Se agregaron archivos CSS (`global.css`, `posts.css`, `write.css`) para el diseño básico.
  - Se aplicó diseño a `posts.html` y `write.html`.
- **Cambios**:
  - Se mejoró el diseño del HTML estático.
  - Aún no hay funcionalidad de JavaScript o backend.

---

## DÍA8

- **Detalles**: Se agregó funcionalidad dinámica utilizando JavaScript.
- **Características Agregadas**:
  - Se agregó un archivo JavaScript (`posts.js`) para implementar la funcionalidad de agregar y eliminar comentarios.
- **Cambios**:
  - Se habilitó la adición/eliminación dinámica de comentarios en `posts.html`.
  - Se actualizó el conteo de comentarios en tiempo real.

---

## DÍA10

- **Detalles**: Se construyó un servidor utilizando Node.js y Express.js.
- **Características Agregadas**:
  - Se implementó un servidor básico utilizando Node.js y Express.js.
  - Se sirvieron archivos estáticos y se manejaron rutas en `app.js`.
- **Cambios**:
  - Se pasó de un sitio web estático a una aplicación basada en servidor.
  - Se agregó registro del servidor utilizando `chalk` y `morgan`.

---

## DÍA11

- **Detalles**: Se agregó la gestión de sesiones y la autenticación de usuarios.
- **Características Agregadas**:
  - Se introdujo `express-session` para la gestión de sesiones.
  - Se implementó control de acceso basado en el estado de inicio de sesión.
- **Cambios**:
  - Se agregaron verificaciones de estado de inicio de sesión a `write.html`.
  - Se introdujo la autenticación de usuarios basada en sesiones.

---

## DÍA12

- **Detalles**: Se introdujo el motor de plantillas EJS para renderizado dinámico.
- **Características Agregadas**:
  - Se integró el motor de plantillas EJS.
  - Se agregó un directorio `views` y se separaron los archivos HTML en archivos EJS.
  - Se utilizó `express.urlencoded` para manejar datos de formularios.
- **Cambios**:
  - Se pasó de HTML estático a renderizado dinámico de plantillas.
  - Se reutilizaron plantillas con `header.ejs` y `footer.ejs`.

---

## DÍA14

- **Detalles**: Se integró MongoDB para la gestión de publicaciones basadas en bases de datos.
- **Características Agregadas**:
  - Se conectó a MongoDB utilizando Mongoose.
  - Se implementó funcionalidad para guardar y recuperar publicaciones.
- **Cambios**:
  - Se agregó un directorio `models` con una definición de modelo `Feed`.
  - Se almacenaron datos de publicaciones en la base de datos y se renderizaron dinámicamente.

---

## DÍA15

- **Detalles**: Se agregó funcionalidad para la interacción entre usuarios.
- **Características Agregadas**:
  - Se introdujo la funcionalidad de gestión de amigos (agregar amigos y ver la lista de amigos).
  - Se agregaron `friends.ejs` y rutas relacionadas.
- **Cambios**:
  - Se ampliaron las características de interacción entre usuarios.
  - Se agregó un esquema de base de datos y API para `friends`.

---

## DÍA16

- **Detalles**: Etapa final del proyecto, enfocándose en mejoras de UI y seguridad.
- **Características Agregadas**:
  - Se agregó la funcionalidad de comentarios y "me gusta".
  - Se utilizó `bcrypt` para el cifrado de contraseñas.
  - Se mejoró la interfaz de usuario utilizando Bootstrap e íconos de Bootstrap.
- **Cambios**:
  - Evolucionó hacia una aplicación SNS completa.
  - Se mejoró la experiencia del usuario (UX) y la seguridad.
  - **Más Información**:  
    El resumen detallado del proyecto del DÍA16 se puede encontrar [aquí](../DAY16/mini-sns/README.md).

---
