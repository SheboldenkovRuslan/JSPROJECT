const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pharmacy', 'postgres', '1q1q1q1q1q', {
    host: 'docker_api_server-master-postgres-1',
    dialect: 'postgres',
});

module.exports = sequelize;