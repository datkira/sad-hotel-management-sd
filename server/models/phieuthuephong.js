import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class phieuthuephong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maphieu: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    makh: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'khachhang',
        key: 'makh'
      }
    },
    nhanvienlapphieu: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    },
    maphong: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'phong',
        key: 'maphong'
      }
    },
    ngaynhanphong: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ngaylapphieu: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'phieuthuephong',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "phieuthuephong_pkey",
        unique: true,
        fields: [
          { name: "maphieu" },
        ]
      },
    ]
  });
  }
}
