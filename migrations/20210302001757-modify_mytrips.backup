'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'MyTrips',
        'photo',
        {
          type: Sequelize.STRING,
        },
      ),
      queryInterface.addColumn(
        'MyTrips',
        'placeURL',
        {
          type: Sequelize.STRING,
        },
      ),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('MyTrips', 'photo'),
      queryInterface.removeColumn('MyTrips', 'placeURL'),
    ])
  }
};
