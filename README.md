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

La API estará disponible en http://localhost:3030.

Endpoints
    GET /posts: Obtiene todos los posts.
    GET /posts/:id: Obtiene un post por su ID.
    POST /posts: Crea un nuevo post.
    PUT /posts/:id: Actualiza un post existente.
    DELETE /posts/:id: Elimina un post existente.