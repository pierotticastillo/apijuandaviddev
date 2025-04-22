# 📚 BookStore App - Gestión de Libros

Aplicación completa para gestión de libros con frontend en Vue 3 y backend con json-server.

## 🚀 Características Principales

- **CRUD completo** de libros
- **Interfaz moderna** con Vue 3 Composition API
- **Backend mock** con json-server
- **Diseño responsive**
- **Validaciones** de formularios

## 🖼️ Capturas de Pantalla

![List books View](/screenshots/listbooks.png)

---
![Edit books View](/screenshots/editbooks.png) |

---
![New books View](/screenshots/newbooks.png) |

## 🛠️ Tecnologías Utilizadas

### Frontend

![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Backend (Mock)

![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

## ⚙️ Configuración

### Requisitos

- Node.js v16+
- pnpm

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/pierotticastillo/bookstore-app.git

# Instalar dependencias
pnpm install

# Iniciar backend (json-server)
pnpm run backend

# Iniciar frontend
pnpm run dev
```

## Estructura de Archivos

```
bookstore-app/
├── backend/
│   ├── db.json         # Base de datos JSON
│   └── server.js       # Configuración del servidor
├── src/
│   ├── views/
│   │   ├── BooksView.vue   # Listado
│   │   └── BookEdit.vue    # Edición
│   └── router.js       # Configuración de rutas
└── README.md
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

---
