module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50], // Bo
        },
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50], // Ek
        },
      },
      email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true,
        validate: {
          len: [4, 255],
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          len: [12, 128], // https://support.microsoft.com/en-us/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb
        },
      },
    },
    { underscored: true }
  );
};
