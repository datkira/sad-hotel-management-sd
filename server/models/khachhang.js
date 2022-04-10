import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class khachhang extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    makh: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    maloaikh: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'loaikhachhang',
        key: 'maloaikh'
      }
    },
    tenkh: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    socccd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: "khachhang_email_key"
    },
    gioitinh: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sodienthoai: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'khachhang',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "khachhang_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "khachhang_pkey",
        unique: true,
        fields: [
          { name: "makh" },
        ]
      },
    ]
  });
  }
}
