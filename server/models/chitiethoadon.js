import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class chitiethoadon extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    mahd: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hoadon',
        key: 'mahd'
      }
    },
    maphong: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'phong',
        key: 'maphong'
      }
    },
    dongia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ngaydat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'chitiethoadon',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chitiethoadon_pkey",
        unique: true,
        fields: [
          { name: "mahd" },
          { name: "maphong" },
        ]
      },
    ]
  });
  }
}
