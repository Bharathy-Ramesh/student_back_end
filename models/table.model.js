const db = require('../configuration/config');
const DataTypes = db.dataTypes;
const Staffs = db.sequelize.define('Teachers', {
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    } 
});
module.exports = Staffs;