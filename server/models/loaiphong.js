import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class loaiphong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maloaiphong: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    tenloaiphong: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mota: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'loaiphong',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "loaiphong_pkey",
        unique: true,
        fields: [
          { name: "maloaiphong" },
        ]
      },
    ]
  });
  }
}
