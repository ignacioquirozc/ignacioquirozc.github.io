# Ignacio Quiroz — Academic Website v7 (EN / ES)

Sitio estático bilingüe listo para GitHub Pages. No requiere npm, servidor, compilación ni servicios de traducción.

## Archivos clave

- `index.html`: contenido y marcadores de traducción (`data-i18n`).
- `translations.js`: diccionarios EN/ES (incluye texto biográfico, secciones, navegación y metadatos).
- `script.js`: selección de idioma, persistencia en `localStorage`, menú móvil y animaciones.
- `styles.css`: diseño responsive v6 + selector EN/ES.
- `images/`: fotografía, `files/`: CV descargable.

## Publicar

Subir **el contenido interno** de esta carpeta (no la carpeta ni un ZIP) a la raíz de `ignacioquirozc/ignacioquirozc.github.io`, rama `main`. Reemplazar los archivos existentes y **añadir `translations.js`**. Confirmar el commit. La web se actualiza desde GitHub Pages.

Abrir `https://ignacioquirozc.github.io/?v=7`. Para escoger el idioma desde una URL: `?lang=es` o `?lang=en`. El idioma seleccionado queda guardado en el navegador.

## Editar traducciones

Buscar un fragmento de texto en `index.html` y localizar su `data-i18n` asociado. En `translations.js`, editar la entrada correspondiente tanto en `en` como en `es`. Los títulos oficiales de papers y charlas y los nombres propios se mantienen en el idioma original.

Las traducciones se cargan mediante `translations.js` para que la vista local `file://` funcione incluso sin servidor. No se utiliza Google Translate ni llamadas externas.

Versión: **7.0.0**.

## v9 (November 2026)
- Added year 2026 to the Mi galaxia me habló second-place recognition in English and Spanish.
- Updated downloadable academic CV to reflect the award year.
