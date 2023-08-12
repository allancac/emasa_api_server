'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      nomeUsuario: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      sobrenome: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      foto: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,

      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      perfil: {
        type: DataTypes.ENUM('vendedor', 'gerente', 'administrador'),
        allowNull: true,
      },
      createdAt:{
        type: DataTypes.DATE,
        allownull: false
      },
      updatedAt:{
        type: DataTypes.DATE,
        allownull: false
      }

    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('usuarios');
  }
};
