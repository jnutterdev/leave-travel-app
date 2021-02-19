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
      // define association here
    }
  };
  MyTrips.init({
    placeId: DataTypes.STRING,
    place: DataTypes.STRING,
    userID: DataTypes.STRING,
    reservations: DataTypes.STRING,
    travelDates: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MyTrips',
  });
  return MyTrips;
};