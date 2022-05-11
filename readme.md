## Instalar react con vite

``
yarn create vite
``

## Instalar Talwind CSS

1. yarn add tailwindcss postcss autoprefixer
2. yarn tailwindcss init -p
3. Configurar talwind.config.js 
``
module.exports = {
content: [
   "index.html",
   "./src/**/*.{html,js,jsx}"
],
theme: {
   extend: {},
},
plugins: [],
}
``
4. Agregar directivas de talwind a index.css

``
@tailwind base; 
@tailwind components;
@tailwind utilities;
``

## Routing

``
yarn add react-router-dom
``

## Formik

Para crear los formularios, usa yup para validar
``
yarn add formik yup
``

## JSON Server

Para correr json-server --watch db.json --port 4000 en la carpeta donde esta la api

* GET - Obtener datos
* POST - Enviar datos al servidor / crear datos
* PUT/PATCH - Para actualizar, se recomienda usar PUT
* DELETE - Para borrar 

### Rest API
Una Rest API cuenta con Endpoints o Urls para hacer operaciones CRUD

1. Listar todos los clientes - Petición GET /clientes
2. Obtener un solo cliente - GEt /clientes/id
3. Crear un nuevo cliente - POST /clientes
4. Editar un cliente - PUT /clientes/id
5. Borrar un cliente - DELETE /cliente/id