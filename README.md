# 🎮 FPS — Frontenders Programando Sin Dormir

_"Explora, colecciona y organiza tu universo de videojuegos favorito."_

---

## 📖 Descripción

Este proyecto forma parte de un ejercicio del bootcamp de desarrollo web en **Factoría F5**. El reto es construir una **Single Page Application (SPA)** con **Vue.js** para la gestión de una colección de videojuegos consumiendo la API de [MMOBomb](https://www.mmobomb.com/api1/games).

La aplicación permite el **registro y login de usuarios** con dos roles (`customer` y `admin`). Los usuarios `customer` pueden gestionar su lista de **favoritos** (CRUD completo + sistema de valoración por estrellas), modificar su perfil (cambiar contraseña y avatar subido a **Firebase Storage**) y acceder a un **dashboard personal**. Los administradores pueden gestionar el estado de los usuarios (permitir/restringir acceso) y configurar videojuegos destacados en la homepage.

La aplicación es **responsive**, tiene **paginación**, **filtros por género** y **búsqueda por nombre**, y está testeada con Vitest y Playwright.

Desarrollado con **Vue 3 (Composition API)**, **Vue Router**, **Pinia**, **SASS con BEM**, **Firebase** (Auth, Firestore, Storage) y gestión del proyecto con **Jira**.

---

## 🔍 Análisis

Antes de comenzar el desarrollo analicé los requisitos funcionales e identifiqué las funcionalidades principales:

- Autenticación y roles: registro, login, persistencia de sesión (Pinia/localStorage) y rutas protegidas según rol
- Homepage dinámica: listado de videojuegos desde la API de MMOBomb con paginación, filtro por género y búsqueda por nombre
- Catálogo: vista completa de juegos con buscador, filtro por género y paginación
- Sección de destacados: gestionada por el administrador, visible para todos los visitantes
- Detalle de juego: vista individual con información ampliada, plataformas y juegos similares
- Gestión de favoritos (CRUD + Rating): usuarios `customer` pueden añadir/eliminar/editar/valorar juegos favoritos, e incluso crear nuevos favoritos personalizados
- Dashboard de usuario: perfil con cambio de contraseña y subida de avatar a Firebase Storage
- Dashboard de admin: listado de usuarios con posibilidad de cambiar estado (acceso permitido/restringido) y gestión de destacados
- Tests unitarios con Vitest y tests E2E con Playwright

---

## 🎨 Identidad visual

Antes de empezar a programar definimos la identidad visual del proyecto.

**Nombre:** FPS — acrónimo de *Frontenders Programando Sin Dormir*. Refleja el espíritu del proyecto: gamer, nocturno y con humor.

**Concepto:** Interfaz oscura estilo gaming — fondo casi negro con acentos de púrpura y cian, efectos de aurora animada y tipografía técnica. Estética de producto digital moderno.

**Paleta de color:**

| Nombre | HEX |
|:---|:---:|
| Fondo principal | `#030308` |
| Surface — tarjetas y paneles | `rgba(10,10,24,0.75)` |
| Púrpura — color principal de marca | `#a855f7` |
| Púrpura oscuro — hover y gradientes | `#7c3aed` |
| Cian — color secundario / acciones | `#22d3ee` |
| Naranja — acento / badges destacados | `#f97316` |
| Texto principal | `#f1f5f9` |
| Texto apagado | `#94a3b8` |
| Verde — estado permitido | `#4ade80` |
| Rojo — estado restringido / errores | `#ef4444` |
| Amarillo — valoración estrellas | `#fbbf24` |

**Tipografías:**
- **Syne** (Display) — títulos y headings, estilo bold y técnico
- **DM Sans** (Body) — textos de cuerpo, legible y moderna
- **Space Mono** (Mono) — etiquetas, badges, navegación y código

---

## 📐 Planificación

Proyecto gestionado con **Jira** bajo metodología **Scrum** — **2 Sprints de 2 semanas** (4 semanas totales).

📸 Capturas de Jira:

| 📋 Backlog | 🗂️ Tablero |
|:---:|:---:|
| *pendiente* | *pendiente* |

| 📅 Cronograma Sprint 1 | 📅 Cronograma Sprint 2 |
|:---:|:---:|
| *pendiente* | *pendiente* |

---

## 🗂️ Estructura del proyecto

- **`index.html`** — punto de entrada de la SPA
- **`main.js`** — inicializa Vue, router y store
- **`package.json`** — dependencias y scripts del proyecto
- **`vite.config.js`** — configuración de Vite
- **`.env`** — variables de entorno (Firebase), no se sube a GitHub
- **`src/`** — carpeta principal del código fuente
  - **`App.vue`** — componente raíz
  - **`api/`** — servicios de API
    - **`games-api.js`** — llamadas a la API de juegos (MMOBomb)
    - **`firebase.js`** — configuración y servicios de Firebase (Auth, Firestore, Storage)
  - **`assets/`** — recursos estáticos
    - **`styles/`** — estilos modulados con SASS y BEM
      - **`main.scss`** — punto de entrada, solo @import
      - **`base/`** — `_variables.scss`, `_reset.scss`, `_typography.scss`, `_animations.scss`
      - **`layouts/`** — `_header.scss`, `_footer.scss`
      - **`components/`** — `_button.scss`, `_card.scss`, `_bento.scss`, `_section-label.scss`, `_pagination.scss`
      - **`views/`** — `_home.scss`, `_dashboard.scss`
    - **`imgs/`** — imágenes y avatares por defecto
  - **`components/`** — componentes Vue reutilizables
    - **`common/`** — `TheHeader.vue`, `TheFooter.vue`, `AppAurora.vue`, `AppLoader.vue`, `AppPagination.vue`
    - **`items/`** — `ItemCard.vue`, `ItemList.vue`, `ItemFilters.vue`
    - **`favorites/`** — `FavoriteCard.vue`, `FavoriteForm.vue`, `RatingStars.vue`
  - **`layouts/`** — `MainLayout.vue`, `DashboardLayout.vue`
  - **`router/`** — `index.js` (definición de rutas y guardias de autenticación)
  - **`stores/`** — stores de Pinia
    - **`auth.js`** — autenticación, roles, sesión
    - **`favorites.js`** — gestión de favoritos (CRUD, rating)
    - **`items.js`** — listado, paginación, filtros, destacados
    - **`admin.js`** — gestión de usuarios y destacados (solo admin)
  - **`utils/`** — funciones utilitarias puras
    - **`rating-utils.js`** — lógica del sistema de valoración
    - **`rating-utils.test.js`** — tests unitarios con Vitest (TDD)
  - **`composables/`** — composables de Vue
    - **`use-games.js`** — lógica reutilizable de juegos
    - **`use-auth.js`** — lógica reutilizable de autenticación
  - **`views/`** — páginas completas
    - **`HomePage.vue`**
    - **`CatalogPage.vue`**
    - **`DestacadosPage.vue`**
    - **`GameDetailPage.vue`**
    - **`LoginPage.vue`**
    - **`RegisterPage.vue`**
    - **`FavoritesPage.vue`**
    - **`UserDashboard.vue`**
    - **`AdminDashboard.vue`**
  - **`e2e/`** — tests E2E con Playwright
    - **`login.spec.js`**
    - **`register.spec.js`**
    - **`favorites.spec.js`**
    - **`admin.spec.js`**

---

## ♿ Accesibilidad

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`
- Roles ARIA en componentes dinámicos (modales, pestañas, rating de estrellas)
- Atributos `alt` en todas las imágenes (avatares, elementos, etc.)
- Navegación por teclado en filtros, paginación y formularios
- Contraste WCAG 2.1 AA
- `aria-live` para anunciar cambios de lista, errores de carga o actualizaciones de favoritos
- Clase `.visually-hidden` para labels accesibles no visibles

---

## 🗺️ Userflow

Diseñado en FigJam antes del desarrollo para mapear las rutas de usuario, administrador y visitante.

🔗 Ver userflow en FigJam → *pendiente*

📸 Captura:

*pendiente*

**Ruta visitante:**
Home → Catálogo (filtro/búsqueda/paginación) → Detalle de juego → (botón de favorito bloqueado) → Login/Register

**Ruta principal (customer):**
Home → Login → Catálogo → Detalle → Añadir a favoritos → Dashboard de usuario → Gestionar favoritos (CRUD + rating) → Perfil (cambiar avatar/contraseña) → Logout

**Ruta principal (admin):**
Home → Login (admin) → Admin Dashboard → Gestionar usuarios (permitir/restringir) → Gestionar destacados → Logout

---

## 🎨 Prototipo y diseño

### Prototipo interactivo · HTML

El prototipo completo de la aplicación está desarrollado en HTML/CSS/JavaScript puro con navegación funcional entre **todas las vistas**: Homepage, Catálogo, Destacados, Detalle de juego, Login, Register, Dashboard de usuario y Dashboard de admin.

**Vistas incluidas:**

| Vista | Descripción |
|:---|:---|
| 🏠 Homepage | Hero con "Juego del mes", sección bento de destacados y catálogo (2 filas × 5 columnas) |
| 🗂️ Catálogo | 20 juegos en grid de 5 columnas con búsqueda y filtros |
| ⚡ Destacados | Card hero principal + grid de 9 destacados |
| 🎮 Detalle de juego | Banner, descripción, stats (jugadores, valoración), capturas y juegos similares |
| 🔐 Login | Formulario de acceso + botón de demo admin |
| 📝 Register | Formulario de registro |
| 👤 Dashboard de usuario | Perfil (avatar picker + Firebase + cambio de contraseña) + Mis Favoritos (CRUD + rating) |
| ⚙️ Dashboard de admin | Gestión de usuarios + Favoritos globales + Perfil + Destacados y Juego del mes |

🔗 Ver prototipo → *pendiente*

### Mockups y Wireframes

🔗 Ver en Figma → *pendiente*

---

## 👤 Historias de usuario y criterios de aceptación

---

### HU-01 — Homepage con hero, buscador y sección de destacados

- **Como** visitante
- **Quiero** ver una homepage con el hero de la app, un buscador rápido y una sección de juegos destacados
- **Para** entender de qué trata la app y acceder al contenido destacado

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Carga de la homepage**
  - **Dado** que accedo a la raíz de la app
  - **Cuando** la página termina de cargar
  - **Entonces** veo el hero con el logo FPS, el tagline y los botones "Ver Catálogo" y "Ver Destacados"
- **Escenario 2: Sección de destacados visible**
  - **Dado** que estoy en la homepage
  - **Cuando** bajo por la página
  - **Entonces** veo la sección "Destacados" con los juegos configurados por el admin en formato bento grid (1 tarjeta grande + 2 pequeñas)
- **Escenario 3: Destacado del mes en el hero**
  - **Dado** que el admin ha configurado un "Juego del mes"
  - **Cuando** cargo la homepage
  - **Entonces** ese juego aparece destacado visualmente en el hero de la sección de destacados

</details>

---

### HU-02 — Catálogo de juegos con búsqueda, filtro y paginación

- **Como** visitante
- **Quiero** explorar el catálogo completo de videojuegos gratuitos con búsqueda, filtro por género y paginación
- **Para** encontrar juegos de mi interés rápidamente

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Carga del catálogo**
  - **Dado** que accedo a `/catalogo`
  - **Cuando** la página termina de cargar
  - **Entonces** veo la cuadrícula de juegos con imagen, título, género, descripción y plataformas
- **Escenario 2: Filtro por género**
  - **Dado** que estoy en el catálogo
  - **Cuando** selecciono un género en el desplegable
  - **Entonces** el listado se actualiza mostrando solo juegos de ese género y la paginación se reinicia a la página 1
- **Escenario 3: Búsqueda por nombre**
  - **Dado** que estoy en el catálogo
  - **Cuando** escribo al menos 2 caracteres en el buscador
  - **Entonces** el listado se filtra en tiempo real y se muestra un estado vacío si no hay resultados
- **Escenario 4: Paginación funcional**
  - **Dado** que hay más juegos de los que caben en pantalla
  - **Cuando** hago clic en un número de página o en los botones de navegación
  - **Entonces** se muestran los juegos correspondientes a esa página

</details>

---

### HU-03 — Detalle de un juego

- **Como** visitante
- **Quiero** ver la página de detalle de un juego
- **Para** obtener información completa antes de añadirlo a favoritos

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Ver detalle**
  - **Dado** que estoy en el catálogo o en destacados
  - **Cuando** hago clic en una tarjeta de juego
  - **Entonces** navego a la vista de detalle con banner, título, género, descripción larga, plataformas, capturas y juegos similares
- **Escenario 2: Botón de favorito bloqueado para visitantes**
  - **Dado** que no estoy logueado
  - **Cuando** veo el panel lateral del detalle
  - **Entonces** el botón "Añadir a favoritos" aparece bloqueado con el texto "Inicia sesión para guardar"
- **Escenario 3: Navegación con breadcrumb**
  - **Dado** que estoy en la vista de detalle
  - **Cuando** hago clic en "Catálogo" en el breadcrumb
  - **Entonces** vuelvo al catálogo

</details>

---

### HU-04 — Registro de nuevos usuarios

- **Como** usuario nuevo
- **Quiero** registrarme con email y contraseña
- **Para** crear mi cuenta y acceder a la funcionalidad de favoritos

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Registro exitoso**
  - **Dado** que estoy en `/register`
  - **Cuando** introduzco un email válido, una contraseña de al menos 6 caracteres, confirmo la contraseña y envío el formulario
  - **Entonces** se crea mi cuenta en Firebase Auth con rol `customer` y soy redirigido a la homepage logueado
- **Escenario 2: Email ya registrado**
  - **Dado** que intento registrarme con un email ya existente
  - **Cuando** envío el formulario
  - **Entonces** veo un mensaje de error "El email ya está registrado"
- **Escenario 3: Enlace a login**
  - **Dado** que estoy en el formulario de registro
  - **Cuando** hago clic en "Inicia sesión"
  - **Entonces** navego a `/login`

</details>

---

### HU-05 — Login de usuarios

- **Como** usuario registrado
- **Quiero** iniciar sesión con mis credenciales
- **Para** acceder a mis favoritos y dashboard

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Login exitoso como customer**
  - **Dado** que estoy en `/login`
  - **Cuando** introduzco email y contraseña correctos de un usuario `customer`
  - **Entonces** accedo a la homepage y el header muestra mi nombre de usuario
- **Escenario 2: Login exitoso como admin**
  - **Dado** que estoy en `/login`
  - **Cuando** introduzco las credenciales de un usuario `admin`
  - **Entonces** soy redirigido al Admin Dashboard
- **Escenario 3: Credenciales incorrectas**
  - **Dado** que introduzco credenciales incorrectas
  - **Cuando** envío el formulario
  - **Entonces** veo un mensaje de error "Email o contraseña inválidos"

</details>

---

### HU-06 — Persistencia de sesión

- **Como** sistema
- **Quiero** persistir la sesión del usuario
- **Para** que no tenga que loguearse en cada visita

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Sesión activa al recargar**
  - **Dado** que un usuario ha iniciado sesión y recarga o cierra el navegador
  - **Cuando** vuelve a abrir la aplicación
  - **Entonces** sigue autenticado y puede acceder directamente a rutas protegidas

</details>

---

### HU-07 — Header con información de sesión y logout

- **Como** usuario logueado
- **Quiero** ver mi nombre y rol en el header y poder cerrar sesión
- **Para** saber que estoy autenticado y salir cuando quiera

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Información visible en header público**
  - **Dado** que soy un usuario autenticado en una vista pública
  - **Cuando** miro la barra de navegación
  - **Entonces** veo mi nombre de usuario y el botón de acceso al dashboard
- **Escenario 2: Logout funcional**
  - **Dado** que estoy logueado
  - **Cuando** hago clic en "Cerrar sesión"
  - **Entonces** se borra la sesión y soy redirigido a la homepage como visitante

</details>

---

### HU-08 — Añadir juego a favoritos desde el detalle

- **Como** usuario customer logueado
- **Quiero** añadir un juego a mis favoritos desde su página de detalle
- **Para** guardarlo y gestionarlo después

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Añadir favorito**
  - **Dado** que estoy en la vista de detalle de un juego y estoy logueado como customer
  - **Cuando** hago clic en el botón "Añadir a favoritos"
  - **Entonces** el juego se guarda en Firestore y aparece un mensaje de confirmación
- **Escenario 2: No duplicar favoritos**
  - **Dado** que ya tengo ese juego en favoritos
  - **Cuando** vuelvo a su página de detalle
  - **Entonces** el botón muestra "Ya en favoritos" y no permite añadirlo de nuevo

</details>

---

### HU-09 — Ver y gestionar mis favoritos

- **Como** usuario customer
- **Quiero** acceder a mi sección "Mis Favoritos" en el dashboard
- **Para** ver todos mis juegos guardados con su valoración y notas

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Acceso correcto**
  - **Dado** que soy un customer logueado
  - **Cuando** accedo a la sección "Mis Favoritos" del dashboard
  - **Entonces** veo el contador de juegos guardados y la cuadrícula con todas mis tarjetas de favoritos
- **Escenario 2: Acceso denegado sin login**
  - **Dado** que intento acceder al dashboard sin estar logueado
  - **Entonces** soy redirigido a `/login`

</details>

---

### HU-10 — Eliminar un favorito

- **Como** usuario customer
- **Quiero** eliminar un juego de mis favoritos
- **Para** mantener mi lista organizada

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Eliminar favorito**
  - **Dado** que estoy en "Mis Favoritos"
  - **Cuando** hago clic en el botón "Eliminar" de una tarjeta
  - **Entonces** aparece un diálogo de confirmación y, si confirmo, la tarjeta desaparece y se elimina de Firestore

</details>

---

### HU-11 — Editar notas de un favorito

- **Como** usuario customer
- **Quiero** editar las notas de texto de un favorito
- **Para** añadir mis impresiones sobre el juego

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Editar notas**
  - **Dado** que estoy en "Mis Favoritos"
  - **Cuando** hago clic en "Editar" de una tarjeta y modifico el texto
  - **Entonces** los cambios se guardan en Firestore y se reflejan en la tarjeta

</details>

---

### HU-12 — Valorar un favorito con estrellas (1–5)

- **Como** usuario customer
- **Quiero** puntuar mis juegos favoritos con estrellas
- **Para** recordar cuáles me han gustado más

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Valorar con estrellas**
  - **Dado** que estoy en "Mis Favoritos" y veo una tarjeta
  - **Cuando** hago clic en la tercera estrella
  - **Entonces** las tres primeras estrellas se iluminan en amarillo, la valoración se guarda en Firestore y persiste al recargar

</details>

---

### HU-13 — Añadir nuevo juego personalizado a favoritos

- **Como** usuario customer
- **Quiero** crear un nuevo favorito personalizado desde cero
- **Para** añadir juegos que no están en la API

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Crear favorito personalizado**
  - **Dado** que estoy en "Mis Favoritos"
  - **Cuando** hago clic en "+ Añadir nuevo juego" y completo título, género y notas
  - **Entonces** el nuevo favorito aparece en mi cuadrícula y se almacena en Firestore con `isCustom: true`

</details>

---

### HU-14 — Perfil de usuario: cambiar avatar y contraseña

- **Como** usuario customer
- **Quiero** gestionar mi perfil: cambiar mi avatar y mi contraseña
- **Para** personalizar mi cuenta

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Elegir avatar del picker**
  - **Dado** que estoy en la sección "Perfil" de mi dashboard
  - **Cuando** hago clic en uno de los avatares del picker
  - **Entonces** el avatar se actualiza visualmente en el perfil y en el sidebar
- **Escenario 2: Subir avatar a Firebase Storage**
  - **Dado** que estoy en la sección "Perfil"
  - **Cuando** selecciono una imagen (JPG/PNG)
  - **Entonces** la imagen se sube a Firebase Storage, la URL se guarda en Firestore y el avatar se actualiza
- **Escenario 3: Cambiar contraseña**
  - **Dado** que estoy en la sección "Perfil"
  - **Cuando** introduzco la contraseña actual, la nueva y la confirmación
  - **Entonces** la contraseña se actualiza en Firebase Auth y recibo un mensaje de éxito

</details>

---

### HU-15 — Dashboard admin: gestión de usuarios

- **Como** usuario admin
- **Quiero** ver y gestionar todos los usuarios registrados
- **Para** controlar el acceso a la plataforma

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Ver tabla de usuarios**
  - **Dado** que soy admin y estoy en "Gestión de usuarios"
  - **Cuando** cargo la sección
  - **Entonces** veo una tabla con avatar, nombre, correo, estado y botón de acción por usuario
- **Escenario 2: Acceso denegado a customer**
  - **Dado** que un usuario con rol `customer` intenta acceder a `/admin`
  - **Entonces** es redirigido a `/dashboard`

</details>

---

### HU-16 — Dashboard admin: cambiar estado de usuarios

- **Como** usuario admin
- **Quiero** cambiar el estado de un usuario entre "Permitido" y "Restringido"
- **Para** controlar quién puede iniciar sesión

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Restringir acceso**
  - **Dado** que un usuario tiene estado "Permitido"
  - **Cuando** hago clic en "Restringir"
  - **Entonces** el badge cambia a "Restringido" y ese usuario no puede iniciar sesión
- **Escenario 2: Permitir acceso**
  - **Dado** que un usuario tiene estado "Restringido"
  - **Cuando** hago clic en "Permitir"
  - **Entonces** el badge cambia a "Permitido"

</details>

---

### HU-17 — Dashboard admin: ver favoritos de todos los usuarios

- **Como** usuario admin
- **Quiero** ver una tabla con todos los favoritos de todos los usuarios
- **Para** tener visibilidad del contenido guardado en la plataforma

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Ver tabla de favoritos**
  - **Dado** que soy admin y accedo a la sección "Favoritos"
  - **Cuando** cargo la sección
  - **Entonces** veo una tabla con usuario, juego, género, valoración, fecha y botón de eliminar
- **Escenario 2: Eliminar un favorito**
  - **Dado** que veo un favorito en la tabla
  - **Cuando** hago clic en "Eliminar"
  - **Entonces** el registro desaparece y se elimina de Firestore

</details>

---

### HU-18 — Dashboard admin: gestionar destacados y juego del mes

- **Como** usuario admin
- **Quiero** gestionar qué juegos aparecen en la sección de destacados y cuál es el "Juego del mes"
- **Para** curar el contenido que ven todos los visitantes en la homepage

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Seleccionar juego del mes**
  - **Dado** que soy admin y estoy en "Destacados"
  - **Cuando** marco un juego como "Juego del mes"
  - **Entonces** ese juego aparece como destacado principal en el hero de la homepage
- **Escenario 2: Gestionar juegos activos**
  - **Dado** que estoy en la sección de destacados
  - **Cuando** activo o desactivo juegos
  - **Entonces** los cambios se guardan en Firestore y la sección "Destacados" se actualiza

</details>

---

### HU-19 — Dashboard admin: perfil propio

- **Como** usuario admin
- **Quiero** poder cambiar mi avatar y contraseña desde mi perfil
- **Para** gestionar mis datos de administrador

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Cambiar avatar**
  - **Dado** que soy admin y estoy en "Perfil"
  - **Cuando** selecciono un avatar del picker o subo uno desde Firebase Storage
  - **Entonces** el avatar se actualiza en el sidebar y en el header
- **Escenario 2: Cambiar contraseña**
  - **Dado** que estoy en "Perfil"
  - **Cuando** introduzco la contraseña actual, la nueva y la confirmación
  - **Entonces** la contraseña se actualiza en Firebase Auth y recibo un mensaje de éxito

</details>

---

## 🧪 Tests

### Vitest — Tests unitarios

| Test | Resultado |
|:---|:---:|
| `getActiveCount`: devuelve hovered cuando hay hover |
| `getActiveCount`: devuelve rating cuando no hay hover |
| `getActiveCount`: devuelve 0 cuando ambos son 0 |
| `isStarActive`: estrella activa dentro del rango |
| `isStarActive`: estrella inactiva fuera del rango |
| `isStarHovered`: hover activo cuando no es readonly |
| `isStarHovered`: hover inactivo cuando es readonly |

📸 Captura — todos los tests en verde: *pendiente*

### Playwright — Tests E2E

| Test | Resultado |
|:---|:---:|
| Usuario puede registrarse correctamente |
| Login con credenciales válidas redirige a homepage |
| Usuario no logueado NO puede acceder a `/favoritos` |
| Customer puede añadir y eliminar un favorito |
| Customer puede valorar un favorito con estrellas |
| Admin puede cambiar el estado de un usuario |

📸 Captura — todos los tests en verde: *pendiente*

---

## 📋 Planificación de commits

Los commits siguen **Conventional Commits** y se realizan de forma **atómica** — cada commit representa un único cambio lógico. El flujo habitual por feature es: estructura → estilos → lógica → test.

```
feat: add LoginPage base template structure
style: add login page scoped styles
feat: add login form validation logic
test: add validateEmail unit tests (RED phase)
feat: implement validateEmail function (GREEN phase)
refactor: simplify validateEmail with regex
```
> 📝 El historial completo de commits se irá completando durante el desarrollo y quedará reflejado en el repositorio de GitHub.
---

## 🛠️ Tecnologías

- **Git & GitHub** — control de versiones con GitFlow
- **Jira** — gestión del proyecto y planificación de sprints
- **Figma & Stitch** — diseño y prototipado
- **VS Code** — editor de código
- **Vue.js 3 (Composition API)** — framework principal SPA
- **Vue Router** — enrutamiento y protección de rutas
- **Pinia** — gestión de estado global
- **Vite** — bundler
- **SASS** — preprocesador CSS (BEM + mobile-first)
- **Firebase** — Auth, Firestore, Storage
- **Vitest** — tests unitarios (TDD)
- **Playwright** — tests E2E
- **Conventional Commits** — mensajes de commit
- **GitHub Pages** — despliegue

---

## 🚀 Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/FactoriaF5-Asturias/project-p5-digital-academy-team1-the-univers-of-things.git

# 2. Entrar en la carpeta
cd project-p5-digital-academy-team1-the-univers-of-things

# 3. Instalar dependencias
npm install

# 4. Configurar variables de entorno
# Crea un archivo .env en la raíz con tus credenciales de Firebase:
# VITE_FIREBASE_API_KEY=...
# VITE_FIREBASE_AUTH_DOMAIN=...
# VITE_FIREBASE_PROJECT_ID=...
# VITE_FIREBASE_STORAGE_BUCKET=...
# VITE_FIREBASE_MESSAGING_SENDER_ID=...
# VITE_FIREBASE_APP_ID=...

# 5. Iniciar el servidor de desarrollo
npm run dev

# 6. Ejecutar tests unitarios
npm run test

# 7. Ejecutar tests E2E
npx playwright test
```

---

## 🕹️ Equipo

----------

**[Jennifer Sánchez Requejo](https://github.com/Jennydev-25)**

**[Nombre](https://github.com/usuario)**

**[Nombre](https://github.com/usuario)**

**[Nombre](https://github.com/usuario)**

----------

_Proyecto desarrollado en el bootcamp de desarrollo web **Factoría F5**._