import { DataTypes } from 'sequelize';
import {sequelize} from '../Database/conexion.js'

const PostModel = sequelize.define('posts', {
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

export default PostModel