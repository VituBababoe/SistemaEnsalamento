const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Agendamento = sequelize.define('Agendamento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    professor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    disciplina: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sala: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    turno: {
        type: DataTypes.STRING,
        allowNull: false,
          isIn: {
            args: [['MANHA', 'TARDE', 'NOITE']]
            }
    },
})

module.exports = Agendamento;