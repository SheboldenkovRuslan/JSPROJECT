const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Employee = sequelize.define('employee', {
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    patronymic: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone_number: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'employee',
    timestamps: false
});

module.exports = Employee;