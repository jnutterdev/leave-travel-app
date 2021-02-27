'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('MyTrips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placeId: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.STRING
        onDelete: 'CASCADE',
        references: {
                model: 'User',
                key: 'id',
                as: 'userID'
        }
      },
      reservations: {
        type: Sequelize.STRING
      },
      travelDates: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MyTrips');
  }
};