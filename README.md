# Vivela Icon Font Generator

Generador de IconFonts para los proyectos móviles o web de Vivela.

## Requisitos

- Node.js >= 14

## Cómo usar

### Básico

Instalar las dependencias

```bash
// vivela-icon-font-generator

npm install
```

Luego crear la siguiente carpeta `vivela-icon-font-generator/resources/svg-icons`. La carpeta `svg-icons` contendrá nuestras imágenes en formato `.svg`.


Para generar los iconos se debe correr el siguiente comando

```bash
// vivela-icon-font-generator

npm run vivela-icons:generate
```

La nueva fuente será creada con el nombre: `VivelaIcons.ttf`. Se encontrará en la siguiente dirección `vivela-icon-font-generator/icon-fonts` y adicionalmente se mostrará una tabla en consola con el nombre de los iconos y su correspondiente `ligature` para su uso en la web o aplicaciones móviles

### Argumentos

Actualmente el script recibe un argumento, para poder crear sub categorías de la fuente:

```bash
// vivela-icon-font-generator

npm run vivela-icons:generate regular
```

Para que este argumento funcione correctamente se deberá crear dentro de la carpeta `svg-icons`, una carpeta llamada `regular` o cualquier otro nombre que coincida con el argumento.

El resultado de será una fuente con el nombre: `VivelaIcons-Regular.ttf`

## Recomendaciones

### Iconos SVG
Procurar que los iconos esten en formato SVG y tengan las mismas medidas (24x24, 36x36, etc).

### Tipos de Iconos
Se recomienda tener más de un tipo de iconos para fines de diseño (regular, solid, duotone, etc).


## License
[MIT](https://choosealicense.com/licenses/mit/)