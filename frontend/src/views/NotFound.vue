<template>
  <div class="not-found">
    <h1>404 - Página no encontrada</h1>
    <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
    <router-link to="/" class="home-button">
      <i class="fas fa-home"></i> Volver al Inicio
    </router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-top: 1.5rem;
}

.home-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #5b7cf7, #9b68df);
}

.home-button:active {
  transform: translateY(1px);
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
</style>