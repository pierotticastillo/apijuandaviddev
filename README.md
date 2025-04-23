# 📚 BookStore App - Gestión de Libros

Aplicación completa para gestión de libros con frontend en Vue 3 y backend con **NestJS** y **PostgreSQL**.

## 🚀 Características Principales

- **CRUD completo** de libros
- **Interfaz moderna** con Vue 3 Composition API
- **Backend con NestJS** y **PostgreSQL**
- **Diseño responsive**
- **Validaciones** de formularios

## 🖼️ Capturas de Pantalla

![List books View](/screenshots/listbooks.png)

---

![Edit books View](/screenshots/editbooks.png)

---

![New books View](/screenshots/newbooks.png)

## 🛠️ Tecnologías Utilizadas

### Frontend

![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Backend

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-20232A?style=for-the-badge&logo=typeorm&logoColor=white)

### Herramientas

![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Swal](https://img.shields.io/badge/SweetAlert-1f6dcf?style=for-the-badge&logo=sweetalert&logoColor=white)

## ⚙️ Configuración

### Requisitos

- Node.js v16+
- pnpm
- PostgreSQL

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/pierotticastillo/apijuandaviddev

# Moverse a la carpeta del frontend
cd frontend

# Instalar dependencias
pnpm install

# Moverse a la carpeta del backend
cd ..
cd backend

# Instalar dependencias
pnpm install

# Crear base de datos en PostgreSQL (si no está creada):
# Asegúrate de tener PostgreSQL corriendo y crear la base de datos 'bookstore'
# Puedes hacerlo con el siguiente comando SQL en PostgreSQL:
# CREATE DATABASE bookstore;

# Iniciar el backend (NestJS)
pnpm run start:dev

# Iniciar frontend
pnpm run dev
```
## Estructura Completa del Proyecto `apijuandavidev`

```
apijuandavidev/
├── backend/
│   ├── src/
│   │   ├── books/
│   │   │   ├── dto/
│   │   │   │   ├── create-book.dto.ts       # DTO para crear un libro
│   │   │   │   ├── update-book.dto.ts       # DTO para actualizar un libro
│   │   │   ├── entities/
│   │   │   │   ├── book.entity.ts           # Entidad de libro
│   │   │   ├── books.controller.ts          # Controlador de libros
│   │   │   ├── books.module.ts              # Módulo de libros
│   │   │   ├── books.service.ts             # Servicio de lógica de negocio de libros
│   │   └── app.module.ts                    # Configuración principal de NestJS
│   ├── .env                                 # Variables de entorno para el backend (PostgreSQL, etc.)
│   ├── package.json                         # Dependencias y scripts del backend
│   ├── tsconfig.json                        # Configuración de TypeScript del backend
│   └── README.md                            # Instrucciones y documentación del backend
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── logo.png                     # Archivos estáticos como imágenes
│   │   ├── components/
│   │   │   ├── BookItem.vue                 # Componente para mostrar un libro individual
│   │   │   ├── Navbar.vue                   # Componente de navegación
│   │   ├── views/
│   │   │   ├── BooksView.vue                # Vista para el listado de libros
│   │   │   ├── BookEdit.vue                 # Formulario para editar libros
│   │   │   ├── BookNew.vue                  # Formulario para agregar libros
│   │   ├── router/
│   │   │   ├── index.ts                     # Configuración de las rutas de la aplicación
│   │   ├── store/
│   │   │   ├── books.ts                     # Estado global relacionado con libros (Vuex/Pinia)
│   │   ├── App.vue                          # Componente raíz de la aplicación
│   │   ├── main.ts                          # Punto de entrada principal de la aplicación frontend
│   │   └── styles/
│   │       ├── global.css                   # Estilos globales de la aplicación
│   ├── public/
│   │   ├── index.html                       # Archivo HTML principal
│   │   ├── favicon.ico                      # Icono de la aplicación
│   ├── .env                                 # Variables de entorno para el frontend
│   ├── package.json                         # Dependencias y scripts del frontend
│   ├── tsconfig.json                        # Configuración de TypeScript del frontend
│   └── README.md                            # Instrucciones y documentación del frontend
└── README.md                                # Documentación general del proyecto
```

## 📝 Endpoints API

| Método | Endpoint   | Descripción              |
| ------ | ---------- | ------------------------ |
| GET    | /books     | Obtener todos los libros |
| GET    | /books/:id | Obtener un libro         |
| POST   | /books     | Crear nuevo libro        |
| PATCH  | /books/:id | Actualizar libro         |
| DELETE | /books/:id | Eliminar libro           |

## 🌟 Contribución

1. Haz fork del proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 🙏 Agradecimientos


[![YouTube Channel](https://img.shields.io/badge/📺_JuanDavidDev-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@juandavid_dev)

Este proyecto fue desarrollado como parte de mi aprendizaje con el excelente material educativo del canal **JuanDavidDev**.  
Aprecio profundamente el contenido de calidad que comparte con la comunidad de desarrollo.

> *"Dar crédito no resta mérito, sino que muestra integridad profesional"*

## 📄 Licencia

MIT © [PIEROTTI CASTILLO, Enrique Alejandro](https://github.com/pierotticastillo)