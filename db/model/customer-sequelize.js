module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        customerNumber: {
            field: 'customer_number',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            field: 'first_name',
            type: DataTypes.STRING
        },
        lastName: {
            field: 'last_name',
            type: DataTypes.STRING
        },
        birthDate: {
            field: 'birth_date',
            type: DataTypes.DATE
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        phoneNumber: {
            field: 'phone_number',
            type: DataTypes.STRING
        },
        phoneType: {
            field: 'phone_type',
            type: DataTypes.STRING
        }
    }, {
            tableName: 'customer',
            timestamps: false
        });

    return Customer;
};
