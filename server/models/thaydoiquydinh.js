import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class thaydoiquydinh extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    mabangthaydoi: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    manv: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    },
    ngaythaydoi: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'thaydoiquydinh',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "thaydoiquydinh_pkey",
        unique: true,
        fields: [
          { name: "mabangthaydoi" },
        ]
      },
    ]
  });
  }
}
