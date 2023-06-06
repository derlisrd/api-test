import { DataTypes } from 'sequelize';
import {sequelize} from '../Database/conexion.js'

const Category = sequelize.define('categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },{
    
  });

export default Category