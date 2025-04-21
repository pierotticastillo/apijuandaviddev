# 📚 Fake API de Libros con JSON Server

Este proyecto utiliza [JSON Server](https://github.com/typicode/json-server) para simular una API RESTful utilizando un archivo local `db.json`. Es ideal para practicar desarrollo frontend sin necesidad de una base de datos real.

---

## 🚀 Cómo iniciar el servidor

1. Asegúrate de tener **Node.js** instalado.

2. Instala JSON Server de manera global (opcional, pero recomendado):

   ```bash
   npm install -g json-server
   ```

3. Ejecuta el servidor con el siguiente comando:

   ```bash
   json-server db.json
   ```

4. Si no deseas instalar JSON Server globalmente, puedes usar el siguiente comando con `npx`:

   ```bash
   npx json-server db.json
   ```

5. Aparecerá algo como lo siguiente:

   ```bash
   JSON Server started on PORT :3000

   Press CTRL-C to stop

   Watching db.json...

   ♡( ◡‿◡ )
   ```

---

## 🌐 Endpoints disponibles

### 📖 Obtener todos los libros

```bash
GET: http://localhost:3000/books
```

### 📖 Obtener un libro por ID

```bash
GET: http://localhost:3000/books/{id}
```

### ➕ Crear un nuevo libro

```bash
POST: http://localhost:3000/books
```

#### 📦 Body (JSON):

```json
{
  "id": "6",
  "title": "Brave New World",
  "author": "Aldous Huxley",
  "genre": "Science fiction",
  "year": "1932",
  "ISBN": "9780060850524",
  "price": 16.99,
  "stock": 14
}
```

⚠️ **Nota:** El campo `id` se asigna automáticamente si no lo incluyes.

---

### 📝 Actualizar parcialmente un libro existente

```bash
PATCH: http://localhost:3000/books/{id}
```

#### 📦 Body (JSON):

Solo indica el campo que deseas modificar, por ejemplo:

```json
{
  "price": 17.99
}
```

---

### 🗑️ Eliminar un libro

```bash
DELETE: http://localhost:3000/books/{id}
```

---

## 🔧 Tips adicionales

- Los datos se recargan automáticamente cuando modificas `db.json`.
- Puedes realizar peticiones **GET**, **POST**, **PUT**, **PATCH** y **DELETE**.
- Es ideal para probar integraciones con frameworks como **Angular**, **React**, **Vue**, o herramientas como **Postman**.

---

## 🛑 Cómo detener el servidor

- Presiona `Ctrl + C` en la terminal donde está corriendo.

---

## 📦 Requisitos

- Node.js (versión 14 o superior).
- Acceso a una terminal.