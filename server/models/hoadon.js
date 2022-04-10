import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class hoadon extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    mahd: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    makh: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'khachhang',
        key: 'makh'
      }
    },
    nhanvienxuathd: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    },
    ngaythanhtoan: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    tongtien: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    trangthai: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hoadon',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "hoadon_pkey",
        unique: true,
        fields: [
          { name: "mahd" },
        ]
      },
    ]
  });
  }
}
