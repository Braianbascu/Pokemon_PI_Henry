const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    stroke:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    defending:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed:{
      type: DataTypes.STRING,
    },
    height:{
      type: DataTypes.STRING,
    },
    weight:{
      type: DataTypes.STRING,
    }, 
  },
  {timestamps: false}
  );
};
