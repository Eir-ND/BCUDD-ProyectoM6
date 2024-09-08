# PROYECTO 6: Aplicación Backend con Autenticación.

## Descripción

Este proyecto consiste en construir una aplicación `backend` que se enfoca principalmente en la autenticación y autorización de usuarios mediante tokens, aplicando también medidas de seguridad como encriptación de contraseña.

Además se utiliza `MongoDB` y `Mongoose` para la persistencia de datos. Se construye un modelo de usuario y de "producto" para la interacción de las acciones `CRUD` en la base de datos, permitiendo la lectura de datos de manera abierta y controlando la escritura mediante el acceso de usuario y autenticación.

## Link en producción

Puede ir a la app en producción mediante el siguiente [LINK](https://bcudd-proyectom6.onrender.com/api-doc) o realizar la instalación mediante el siguiente item.

## Instalación y configuración

Para acceder a este proyecto, es necesario:

- Clonar este repositorio
- Acceder a esta carpeta a través de la terminal
- Realizar la instalación de dependencias por la terminal con el siguiente comando:

```
$ npm install
```

- Asegúrate de tener un archivo `.env` con las variables de entorno con la siguiente estructura:

```
PORT=3000
MONGODB_URI=<MongoDBConnectionString>
URL_BASE=/api
SERVER_URL=http://localhost:
SECRET=<SECRET>
```

- Ejecutar el proyecto con el `script` de `dev`

```
$ npm run dev
```

### Endpoints para Usuario:

Registrar un usuario

- `/api/user/register`

Iniciar sesión de usuario

- `/api/user/login`

Verificar el token de usuario

- `/api/user/verifytoken`

Actualizar información de usuario

- `/api/user/update`

### Endpoints para Producto:

Leer todos los productos

- `/api/product/readall`

Leer producto por ID

- `/api/product/readone/:id`

Crear un producto

- `/api/product/create`

Actualizar datos de producto por ID

- `/api/product/update/:id`

Eliminar un producto

- `/api/product/delete/:id`

## Requerimientos del proyecto.

APLICACION DE SERVICIOS CRUD

- Implementar autenticación y autorización en tu aplicación.
- Crear dos modelos, uno para el Usuario y otro para el Producto.
- Implementar operaciones CRUD para el modelo del Producto.
- Utilizar MongoDB y Mongoose para gestionar la base de datos.

DOCUMENTACIÓN DE LA API (OPCIONAL)

- Documentar todos los `endpoints` utilizando `Swagger` y `OpenAPI`

DESPLIEGUE (OPCIONAL)

- Crear una URL de producción para este proyecto, a través de render.com
