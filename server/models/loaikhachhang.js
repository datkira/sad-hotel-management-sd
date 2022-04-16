import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class loaikhachhang extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maloaikh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenloaikh: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'loaikhachhang',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "loaikhachhang_pkey",
        unique: true,
        fields: [
          { name: "maloaikh" },
        ]
      },
    ]
  });
  }
}
