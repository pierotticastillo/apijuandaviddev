<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

interface Book {
  title: string
  author: string
  genre: string
  year: number | string
  ISBN: string
  price: number | string
  stock: number | string
}

const router = useRouter()
const newBook = ref<Book>({
  title: '',
  author: '',
  genre: '',
  year: '',
  ISBN: '',
  price: '',
  stock: ''
})

const validateForm = (): boolean => {
  if (!newBook.value.title.trim()) {
    Swal.fire('Error', 'El título es requerido', 'warning')
    return false
  }
  // Puedes agregar más validaciones aquí
  return true
}

const saveBook = async () => {
  if (!validateForm()) return

  try {
    // Convertir tipos numéricos
    const bookData = {
      ...newBook.value,
      year: Number(newBook.value.year),
      price: Number(newBook.value.price),
      stock: Number(newBook.value.stock)
    }

    await axios.post('http://localhost:3000/books', bookData)
    
    await Swal.fire({
      title: '¡Guardado!',
      text: 'El libro fue guardado exitosamente.',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    })
    
    router.push('/')
  } catch (error) {
    console.error('Error al guardar el libro:', error)
    Swal.fire('Error', 'No se pudo guardar el libro', 'error')
  }
}

const resetForm = () => {
  newBook.value = {
    title: '',
    author: '',
    genre: '',
    year: '',
    ISBN: '',
    price: '',
    stock: ''
  }
}
</script>

<template>
  <main>
    <h1>Agregar Nuevo Libro</h1>
    <form @submit.prevent="saveBook" class="book-form">
      <div class="form-group">
        <label>
          Título*
          <input v-model="newBook.title" type="text" required placeholder="El Principito">
        </label>
      </div>

      <div class="form-group">
        <label>
          Autor*
          <input v-model="newBook.author" type="text" required placeholder="Antoine de Saint-Exupéry">
        </label>
      </div>

      <div class="form-group">
        <label>
          Género*
          <input v-model="newBook.genre" type="text" required placeholder="Fábula">
        </label>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>
            Año*
            <input v-model="newBook.year" type="number" min="1000" max="2099" required placeholder="1943">
          </label>
        </div>

        <div class="form-group">
          <label>
            Stock*
            <input v-model="newBook.stock" type="number" min="0" required placeholder="10">
          </label>
        </div>
      </div>

      <div class="form-group">
        <label>
          ISBN*
          <input v-model="newBook.ISBN" type="text" required placeholder="978-3-16-148410-0">
        </label>
      </div>

      <div class="form-group">
        <label>
          Precio*
          <input v-model="newBook.price" type="number" step="0.01" min="0" required placeholder="19.99">
        </label>
      </div>

      <div class="form-actions">
        <button type="button" @click="resetForm" class="btn-secondary">
          Limpiar
        </button>
        <button type="submit" class="btn-primary">
          Guardar Libro
        </button>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.book-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-row .form-group {
  flex: 1;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #4a5568;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary {
  background-color: #4299e1;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #3182ce;
}

.btn-secondary {
  background-color: #e2e8f0;
  color: #4a5568;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-secondary:hover {
  background-color: #cbd5e0;
}
</style>