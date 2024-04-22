import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//que carga variables de entorno desde un archivo .env en process.env, 
//facilitando la configuración del entorno.
import cardRoutes from '../ultimamodi/routes/cards.js';

//carga variables de entorno de env para process env
dotenv.config();

//instala express
const app = express();
const PORT = process.env.PORT || 3000;

//conexion con mongo
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

  //parsea en formato json
app.use(express.json());

//maneja las rutas que comienzan po card
app.use('/cards', cardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//xporta la instancia de la exxpress
export default app;
