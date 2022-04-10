import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class baocaothang extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    mabangbaocao: {
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
    ngaylap: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'baocaothang',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "baocaothang_pkey",
        unique: true,
        fields: [
          { name: "mabangbaocao" },
        ]
      },
    ]
  });
  }
}
