# Icon Font Generator

Generador de IconFonts.

## Requisitos

- Node.js >= 14

## Cómo usar

### Básico

Instalar las dependencias

```bash
// icon-font-generator

npm install
```

Luego crear la siguiente carpeta `icon-font-generator/resources/svg-icons`. La carpeta `svg-icons` contendrá nuestras imágenes en formato `.svg`.


Para generar los iconos se debe correr el siguiente comando

```bash
// icon-font-generator

npm run icons:generate
```

La nueva fuente se encontrará en la siguiente dirección `icon-font-generator/icon-fonts` y adicionalmente se mostrará una tabla en consola con el nombre de los iconos y su correspondiente `ligature` para su uso

### Argumentos

Actualmente el script recibe un argumento, para poder crear sub categorías de la fuente:

```bash
// icon-font-generator

npm run icons:generate regular
```

Para que este argumento funcione correctamente se deberá crear dentro de la carpeta `svg-icons`, una carpeta llamada `regular` o cualquier otro nombre que coincida con el argumento.

El resultado de será una fuente con el nombre: `Icons-Regular.ttf`

## Recomendaciones

### Iconos SVG
Procurar que los iconos esten en formato SVG y tengan las mismas medidas (24x24, 36x36, etc).

### Tipos de Iconos
Se recomienda tener más de un tipo de iconos para fines de diseño (regular, solid, duotone, etc).
