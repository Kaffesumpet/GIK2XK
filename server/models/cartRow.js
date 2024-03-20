module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cartRow",
    {
      cartRowId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    { underscored: true }
  );
};

/**
 * Objektet CartRow måste existera då den har AMOUNT
 * Då antager jag också att en combosit inte ska skapas då vi gärna har en ID tillsammans med Amount?
 */
