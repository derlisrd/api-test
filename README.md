# API CRUD con Node.js

Esta es una API CRUD básica desarrollada con Node.js que utiliza Express y Sequelize para la gestión de una api

## Requisitos previos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Gestor de base de datos (MySQL)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/derlisrd/api-test.git

2. Instala la dependencia
    ```bash
    npm install

3. Configura la base de datos:

    Crea una base de datos en tu gestor de base de datos preferido.
    Renombra el archivo .env.example a .env.
    Abre el archivo .env y actualiza la configuración de la base de datos con tus propias credenciales y detalles de conexión.

4. Corre las migraciones
    ```bash
    npm run migrate

5. Corre la aplicación
    ```bash
    npm run start

6. La API estará disponible
    ```bash
    http://localhost:3030.


## Endpoints

Por ejemplo la API proporciona los siguientes endpoints para la tabla `posts`:

- ``Recuerda que en los endpoints de los posts se requiere incluir el JWT en el encabezado de la solicitud utilizando el formato `Authorization: Bearer {JWT}`. Esto garantiza que las solicitudes sean autenticadas y solo sean accesibles para los usuarios autenticados.``

    ```bash
    Authorization: Bearer {JWT}

- **GET /posts** - Obtiene todos los posts.
- **GET /posts/:id** - Obtiene un post por su ID.
- **POST /posts** - Crea un nuevo post.
- **PUT /posts/:id** - Actualiza un post existente.
- **DELETE /posts/:id** - Elimina un post por su ID.

### Estructura del objeto Post

Un objeto Post tiene la siguiente estructura:

```json
{
  "id": 1,
  "title": "Título del post", //requerido 
  "body": "Contenido del post", //requerido
  "createdAt": "2023-06-06T12:00:00.000Z",
  "updatedAt": "2023-06-06T12:00:00.000Z"
} 
```

## Creando más tablas y endpoints
 
- **Crear un modelo en la carpeta Models** - con el nombre del modelo en singular. Ej: Producto.js
- **Crear un controllador en la carpeta Controllers** - con el nombre del modelo seguido de controllador. Ej: ProductoController.js
- **Crear una ruta en la carpeta Routes** - con el nombre en plural. Ej: productos.js
- **Generar los verbos necesarios** - GET/POST/PUT/DELETE Tomar ejemplos de archivo ./Controller/PostController.js