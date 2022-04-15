import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class phong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maphong: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    maloaiphong: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'loaiphong',
        key: 'maloaiphong'
      }
    },
    ten: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tinhtrang: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gia: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phong',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "phong_pkey",
        unique: true,
        fields: [
          { name: "maphong" },
        ]
      },
    ]
  });
  }
}
