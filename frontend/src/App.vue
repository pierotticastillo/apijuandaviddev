<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/newbooks">New Books</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  background-color: #1f2937; /* gris oscuro */
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  gap: 1rem;
}

a {
  color: #f9fafb;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

a:hover {
  background-color: #374151; /* hover gris más oscuro */
}

.router-link-active {
  background-color: #4b5563;
}
</style>
