const db = require('../configuration/config');
const Students = require('../models/student.model');
const DataTypes = db.dataTypes;
const Assessment = db.sequelize.define('Assessment', {
    tamil: {
        type: DataTypes.INTEGER,
    },
    english: {
        type: DataTypes.STRING
    },
    mathematics: {
        type: DataTypes.STRING,
    },
    social: {
        type: DataTypes.STRING,
    },
    science: {
        type: DataTypes.STRING,
    },
    reg_id: {
        type: DataTypes.STRING,
        references: {
            model: Students,
            key: "reg_id"
        }
    },
    exam_name: {
        type: DataTypes.STRING,
    }
});
Assessment.associate = () => {
    Assessment.belongsTo(Students, {
        foreignKey: "reg_id",
        as: "register",
    });
}
module.exports = Assessment;