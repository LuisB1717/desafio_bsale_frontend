# Bienvenido al respositorio frontend de la app store

## Descripción

Este proyecto es una app web frontend vanilla que consume una api hecha con express.js, con los datos almacenados en MySQL.

## Uso

En en frontend de app store actualmente cuenta con un apartado para hacer una búsqueda por el nombre del producto y también un filtro de productos por categoría.

La búsqueda de productos no depende de la categoría seleccionada, es decir que a la hora de su uso, el filtro automáticamente se seleccionará en la opción "todos".

## Despliegue

Al ser una aplicación vanilla no necesita configuración extra para desplegarse a un servidor, es suficiente tener los archivos en una carpeta estática.

Solamento necesitamos establecer la url de la api de producción en el archivo config.js.

```js
const config = {
  API_URL: "https://bsale.skrin.cloud/api",
};
```

Este repositorio será clonado o copiado en un servidor estático para su despliegue.
