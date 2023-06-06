// Ejecuta las migraciones
import { sequelize } from "./conexion.js";
import Post from "../Models/Post.js";
import User from '../Models/User.js'

const migrations = async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexión establecida correctamente');
  
      const result = await sequelize.sync();
      console.log('Migraciones ejecutadas correctamente:', result);
    } catch (error) {
      console.error('Error al ejecutar las migraciones:', error);
    } finally {
      // Cierra la conexión a la base de datos
      await sequelize.close();
      console.log('Conexión cerrada');
    }
  };
  

migrations();