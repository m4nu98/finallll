// server.js
import dotenv from "dotenv";
import connectDB from "./src/lib/db.js"
import express from 'express';
import RegistroUsuario from "./src/models/user.js"
import bodyParser from 'body-parser'; // Importa body-parser
import next from 'next'; 
import mongoose from 'mongoose';
import users from './src/pages/api.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Conexión a la base de datos
connectDB();

app.use(bodyParser.json());
// Ruta para manejar el registro de usuarios
app.post('/api/usuarios', async (req, res) => {
    try {
      const { nombre, email, password } = req.body;
  
      // Ejemplo: Guardar el usuario en la base de datos
      const nuevoUsuario = new RegistroUsuario({ nombre, email, password });
      await nuevoUsuario.save();
  
      // Respuesta exitosa
      res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
      console.error('Error al registrar usuario:', error); // Registra el error en la consola del servidor
      res.status(500).json({ mensaje: 'Error al registrar usuario' });
    }
  });
  
  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
