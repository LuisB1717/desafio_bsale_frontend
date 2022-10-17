# Bienvenido al respositorio frontend de la app store

## Descripción 

Este proyecto es una app web frontend vanilla que consume una api hecha con express.js, con los datos almacenados en MySQL.

## Uso 

En en frontend de app store tiene un apartado para la lista de los productos por filtro de categoría, también se puede buscar el producto por su nombre.

## Despliegue

Al ser una aplicación vanilla no necesita configuración extra para desplegarse a un servidor, es suficiente tener los archivos en una carpeta estática.

Solamento necesitamos establecer la url de la api de producción en el archivo config.js.


```js
const config = {
  API_URL: "https://pg.skrin.cloud/api",
};
```

Este repositorio será clonado o copiado en un servidor estático para su despliegue.

