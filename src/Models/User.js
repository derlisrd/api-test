import { DataTypes } from 'sequelize';
import {sequelize} from '../Database/conexion.js'

const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },{
    
  });

export default User