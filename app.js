require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./config/database');

// Middleware para JSON
app.use(express.json());

// Importar rotas
const laboratorioRoutes = require('./routes/laboratorio');
const embarcacaoRoutes = require('./routes/embarcacao');
const usuarioRoutes = require('./routes/usuario');
const coletaRoutes = require('./routes/coleta');
const favoritoRoutes = require('./routes/favorito');

// Usar as rotas
app.use('/laboratorios', laboratorioRoutes);
app.use('/embarcacoes', embarcacaoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/coletas', coletaRoutes);
app.use('/favoritos', favoritoRoutes);

// Sincronizar o banco de dados
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch(err => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
