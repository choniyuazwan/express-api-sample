module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        accountNumber: {
            field: 'account_number',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        openDate: {
            field: 'open_date',
            type: DataTypes.DATE
        },
        balance: {
            field: 'balance',
            type: DataTypes.DECIMAL
        }
    }, {
            tableName: 'account',
            timestamps: false
        });

    return Account;
};
