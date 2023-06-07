# API CRUD con Node.js y MySQL

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
    http://localhost:3030

## Endpoints

## Documentacion
    ```bash
    http://localhost:3030/api-docs 
    ```

### Inicia sesión con las credenciales de usuario
    
- **POST /auth/login** - Ingresa con la credenciales.
- **POST /auth/register** - Crea un nuevo usuario.

### Estructura del objeto para Usuario
El request de login y register tiene la siguiente estructura:

```json
{
  "email": "email@email.com", //requerido
  "password": "clave_muy_segura", //requerido
} 
```



Por ejemplo la API proporciona los siguientes endpoints para la tabla `posts`:

- ``Recuerda que en los endpoints se requiere incluir el JWT en el encabezado de la solicitud utilizando el formato `Authorization: Bearer {JWT}`. Esto garantiza que las solicitudes sean autenticadas y solo sean accesibles para los usuarios autenticados.``

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
 
- **Crear modelo en carpeta Models** - con el nombre del modelo en singular. Ej: Producto.js
- **Crear controllador en carpeta Controllers** - con el nombre del modelo seguido de "Controller". Ej: ProductoController.js
- **Crear ruta en carpeta Routes** - con el nombre en plural. Ej: productos.js
- **Generar verbos necesarios** - GET/POST/PUT/DELETE Tomar ejemplos de archivo ./Controller/PostController.js