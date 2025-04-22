import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();

// Configurar CORS
server.use(cors());

// Middlewares
server.use(middlewares);
server.use(router);

// Iniciar servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server (TypeScript) corriendo en http://localhost:${PORT}`);
});