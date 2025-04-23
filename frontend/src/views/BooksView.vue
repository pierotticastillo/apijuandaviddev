<script setup lang="ts">
import type { Book } from '../shared/book.interface'
import axios from 'axios'
import Swal from 'sweetalert2'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const books = ref<Book[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const apiUrl = import.meta.env.VITE_API_URL

const fetchBooks = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await axios.get<Book[]>(`${apiUrl}/books`)
    books.value = response.data
      .map((book) => ({
        ...book,
        price: typeof book.price === 'string' ? parseFloat(book.price) : book.price,
        year: typeof book.year === 'string' ? parseInt(book.year) : book.year,
        stock: typeof book.stock === 'string' ? parseInt(book.stock) : book.stock,
      }))
      .sort((a, b) => a.id - b.id)
  } catch (err) {
    error.value = 'Error al cargar los libros'
    Swal.fire({
      title: 'Error',
      text: error.value,
      icon: 'error',
    })
  } finally {
    loading.value = false
  }
}

const deleteBook = async (id: number, title: string) => {
  const result = await Swal.fire({
    title: `¿Eliminar "${title}"?`,
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  })

  if (result.isConfirmed) {
    try {
      await axios.delete(`${apiUrl}/books/${id}`) // Usa apiUrl aquí también
      books.value = books.value.filter((book) => book.id !== id)
      Swal.fire({
        title: '¡Eliminado!',
        text: `"${title}" ha sido eliminado correctamente.`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      })
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo eliminar el libro.',
        icon: 'error',
      })
    }
  }
}

const formatPrice = (price: number | string) => {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price
  return isNaN(numericPrice) ? 'N/A' : `$${numericPrice.toFixed(2)}`
}

onMounted(() => {
  fetchBooks()
})
</script>

<template>
  <div class="book-list-container">
    <div v-if="loading">Cargando libros...</div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <div v-else>
      <table class="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Género</th>
            <th>Año</th>
            <th>ISBN</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.genre }}</td>
            <td>{{ book.year }}</td>
            <td>{{ book.ISBN }}</td>
            <td>{{ formatPrice(book.price) }}</td>
            <td>{{ book.stock }}</td>
            <td class="actions">
              <router-link :to="`/editbooks/${book.id}`" class="edit-btn"> Editar </router-link>
              <button @click="deleteBook(book.id ?? 0, book.title)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.book-list-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.search-box {
  display: flex;
  gap: 1rem;
}

.search-input {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 250px;
}

.add-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #45a049;
}

.loading-indicator {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.error-message {
  color: #d32f2f;
  padding: 1rem;
  background-color: #fde0e0;
  border-radius: 4px;
  margin: 1rem 0;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
}

.book-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.book-table th {
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #ddd;
}

.book-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.book-table tr:hover {
  background-color: #f9f9f9;
}

.low-stock {
  color: #d32f2f;
  font-weight: bold;
}

.actions a {
  text-decoration: none; /* Quita el subrayado */
}

.edit-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.edit-btn:hover {
  background-color: #2563eb;
  transform: translateY(-1px);
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #da190b;
}

.actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.actions button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
}

.actions button:first-child {
  background-color: #3b82f6;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.actions button:first-child:hover {
  background-color: #2563eb;
  transform: translateY(-1px);
}

.actions button:last-child {
  background-color: #ef4444;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.actions button:last-child:hover {
  background-color: #dc2626;
  transform: translateY(-1px);
}

/* Efectos al hacer clic */
.actions button:active {
  transform: translateY(0);
}

/* Iconos opcionales (requiere incluir un paquete de iconos como FontAwesome) */
.actions button i {
  margin-right: 0.5rem;
  font-size: 0.9em;
}
</style>
