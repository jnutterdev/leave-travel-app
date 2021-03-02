'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyTrips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MyTrips.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  };
  MyTrips.init({
    placeId: DataTypes.STRING,
    place: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    reservations: DataTypes.STRING,
    travelDates: DataTypes.STRING,
    photo: DataTypes.STRING,
    placeURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MyTrips',
  });
  return MyTrips;
};