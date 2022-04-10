import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class nhanvien extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    manv: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    masothue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ngaybatdau: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    hokhautt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cccd: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: "nhanvien_cccd_key"
    },
    loainv: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nhanvien',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "nhanvien_cccd_key",
        unique: true,
        fields: [
          { name: "cccd" },
        ]
      },
      {
        name: "nhanvien_pkey",
        unique: true,
        fields: [
          { name: "manv" },
        ]
      },
    ]
  });
  }
}
