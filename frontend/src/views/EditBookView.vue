<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import type { Book } from '../shared/book.interface'

const route = useRoute()
const router = useRouter()
const book = ref<Book>({
  id: 0,
  title: '',
  author: '',
  genre: '',
  year: '',
  ISBN: '',
  price: 0,
  stock: 0,
})
const loading = ref(true)
const error = ref<string | null>(null)
const API_URL = import.meta.env.VITE_API_URL

// Obtener libro al cargar
onMounted(async () => {
  try {
    const response = await axios.get<Book>(`${API_URL}/books/${route.params.id}`)
    book.value = response.data
  } catch (err) {
    router.push('/')
  } finally {
    loading.value = false
  }
})

// Actualizar con PATCH (solo envía campos modificados)
const updateBook = async () => {
  try {
    const { id, ...bookToUpdate } = book.value
    bookToUpdate.price = Number(bookToUpdate.price)
    bookToUpdate.stock = Number(bookToUpdate.stock)

    await axios.patch(`${API_URL}/books/${id}`, bookToUpdate)

    await Swal.fire({
      title: '¡Actualizado!',
      text: 'El libro se actualizó correctamente',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    })

    router.push(`/`)
  } catch (err) {
    if (axios.isAxiosError(err)) {
      Swal.fire(
        'Error',
        err.response?.data?.message?.join('<br>') || 'Error desconocido al actualizar',
        'error',
      )
    } else {
      console.error('Error inesperado:', err)
      Swal.fire('Error', 'Error inesperado', 'error')
    }
  }
}
</script>

<template>
  <div class="edit-container">
    <div v-if="loading" class="loading">Cargando...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else class="edit-form">
      <h1>
        Editar Libro <span>#{{ book.id }}</span>
      </h1>

      <form @submit.prevent="updateBook">
        <div class="form-group">
          <label>Título*</label>
          <input v-model="book.title" type="text" required />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Autor*</label>
            <input v-model="book.author" type="text" required />
          </div>

          <div class="form-group">
            <label>Género*</label>
            <input v-model="book.genre" type="text" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Año*</label>
            <input v-model="book.year" type="text" required />
          </div>

          <div class="form-group">
            <label>Stock*</label>
            <input v-model.number="book.stock" type="number" min="0" required />
          </div>
        </div>

        <div class="form-group">
          <label>ISBN*</label>
          <input v-model="book.ISBN" type="text" required />
        </div>

        <div class="form-group">
          <label>Precio*</label>
          <input v-model.number="book.price" type="number" step="0.01" min="0" required />
        </div>

        <div class="form-actions">
          <button type="button" @click="router.push('/')" class="cancel-btn">Cancelar</button>
          <button type="submit" class="save-btn">Guardar Cambios</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.edit-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.loading,
.error {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

h1 span {
  color: #7f8c8d;
  font-weight: normal;
}

.edit-form {
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
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.save-btn {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.save-btn:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

.cancel-btn {
  background: white;
  color: #4a5568;
  padding: 0.75rem 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.cancel-btn:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}
</style>
