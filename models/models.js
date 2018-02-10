module.exports = function(sequelize, DataTypes) {

    var Renter = sequelize.define("Renter", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        request_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        request_status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contractor_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        scheduled_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });
    return Renter;
};