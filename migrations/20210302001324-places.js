'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [ queryInterface.addColumn(
      'MyTrips',
      'placeURL',
       Sequelize.STRING
     ),
    queryInterface.addColumn(
     'MyTrips',
     'photo',
     Sequelize.STRING
  )];
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MyTrips');
  }
};
