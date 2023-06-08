import { DataTypes } from 'sequelize';
import {conexionDB} from '../Database/conexion.js'

const Post = conexionDB.sequelize.define('posts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },{
    
  });

export default Post