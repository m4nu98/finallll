import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  // Esquema del usuario
  nombre: String,
  email: String,
  password: String
});

const RegistroUsuario = mongoose.model('RegistroUsuario', usuarioSchema);

export default RegistroUsuario;
