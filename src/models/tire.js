module.exports = (sequelize, DataTypes) => {
  const tire = sequelize.define(
    'tire',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      front_width: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      front_aspect: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      front_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      front_wheel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rear_width: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rear_aspect: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rear_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rear_wheel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false },
  );

  //모델 관계도
  tire.associate = function (models) {
    models.tire.belongsTo(models.user, {
      foreignKey: {
        name: 'writer',
        allowNull: false,
      },
      onUpdate: 'CASCADE',
    });
  };
  return tire;
};
