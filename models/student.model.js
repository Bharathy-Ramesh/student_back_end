const db = require('../configuration/config');
const Assessment = require('./assessment.model');
const DataTypes = db.dataTypes;
const Students = db.sequelize.define('Students', {
    reg_id: {
        type: DataTypes.STRING,
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
    class: {
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
Students.associate = () => {
    Students.hasMany(Assessment, { foreignKey: 'reg_id', targetKey: 'reg_id' });
}

module.exports = Students;