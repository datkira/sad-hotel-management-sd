import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _baocaomatdosudungphong from  "./baocaomatdosudungphong.js";
import _baocaothang from  "./baocaothang.js";
import _chitiethoadon from  "./chitiethoadon.js";
import _hoadon from  "./hoadon.js";
import _khachhang from  "./khachhang.js";
import _loaikhachhang from  "./loaikhachhang.js";
import _loaiphong from  "./loaiphong.js";
import _nhanvien from  "./nhanvien.js";
import _phieuthuephong from  "./phieuthuephong.js";
import _phong from  "./phong.js";
import _thaydoiquydinh from  "./thaydoiquydinh.js";

export default function initModels(sequelize) {
  const baocaomatdosudungphong = _baocaomatdosudungphong.init(sequelize, DataTypes);
  const baocaothang = _baocaothang.init(sequelize, DataTypes);
  const chitiethoadon = _chitiethoadon.init(sequelize, DataTypes);
  const hoadon = _hoadon.init(sequelize, DataTypes);
  const khachhang = _khachhang.init(sequelize, DataTypes);
  const loaikhachhang = _loaikhachhang.init(sequelize, DataTypes);
  const loaiphong = _loaiphong.init(sequelize, DataTypes);
  const nhanvien = _nhanvien.init(sequelize, DataTypes);
  const phieuthuephong = _phieuthuephong.init(sequelize, DataTypes);
  const phong = _phong.init(sequelize, DataTypes);
  const thaydoiquydinh = _thaydoiquydinh.init(sequelize, DataTypes);

  hoadon.belongsToMany(phong, { as: 'maphong_phongs', through: chitiethoadon, foreignKey: "mahd", otherKey: "maphong" });
  phong.belongsToMany(hoadon, { as: 'mahd_hoadons', through: chitiethoadon, foreignKey: "maphong", otherKey: "mahd" });
  chitiethoadon.belongsTo(hoadon, { as: "mahd_hoadon", foreignKey: "mahd"});
  hoadon.hasMany(chitiethoadon, { as: "chitiethoadons", foreignKey: "mahd"});
  hoadon.belongsTo(khachhang, { as: "makh_khachhang", foreignKey: "makh"});
  khachhang.hasMany(hoadon, { as: "hoadons", foreignKey: "makh"});
  phieuthuephong.belongsTo(khachhang, { as: "makh_khachhang", foreignKey: "makh"});
  khachhang.hasMany(phieuthuephong, { as: "phieuthuephongs", foreignKey: "makh"});
  khachhang.belongsTo(loaikhachhang, { as: "maloaikh_loaikhachhang", foreignKey: "maloaikh"});
  loaikhachhang.hasMany(khachhang, { as: "khachhangs", foreignKey: "maloaikh"});
  phong.belongsTo(loaiphong, { as: "maloaiphong_loaiphong", foreignKey: "maloaiphong"});
  loaiphong.hasMany(phong, { as: "phongs", foreignKey: "maloaiphong"});
  baocaomatdosudungphong.belongsTo(nhanvien, { as: "manv_nhanvien", foreignKey: "manv"});
  nhanvien.hasMany(baocaomatdosudungphong, { as: "baocaomatdosudungphongs", foreignKey: "manv"});
  baocaothang.belongsTo(nhanvien, { as: "manv_nhanvien", foreignKey: "manv"});
  nhanvien.hasMany(baocaothang, { as: "baocaothangs", foreignKey: "manv"});
  hoadon.belongsTo(nhanvien, { as: "nhanvienxuathd_nhanvien", foreignKey: "nhanvienxuathd"});
  nhanvien.hasMany(hoadon, { as: "hoadons", foreignKey: "nhanvienxuathd"});
  phieuthuephong.belongsTo(nhanvien, { as: "nhanvienlapphieu_nhanvien", foreignKey: "nhanvienlapphieu"});
  nhanvien.hasMany(phieuthuephong, { as: "phieuthuephongs", foreignKey: "nhanvienlapphieu"});
  thaydoiquydinh.belongsTo(nhanvien, { as: "manv_nhanvien", foreignKey: "manv"});
  nhanvien.hasMany(thaydoiquydinh, { as: "thaydoiquydinhs", foreignKey: "manv"});
  chitiethoadon.belongsTo(phong, { as: "maphong_phong", foreignKey: "maphong"});
  phong.hasMany(chitiethoadon, { as: "chitiethoadons", foreignKey: "maphong"});
  phieuthuephong.belongsTo(phong, { as: "maphong_phong", foreignKey: "maphong"});
  phong.hasMany(phieuthuephong, { as: "phieuthuephongs", foreignKey: "maphong"});

  return {
    baocaomatdosudungphong,
    baocaothang,
    chitiethoadon,
    hoadon,
    khachhang,
    loaikhachhang,
    loaiphong,
    nhanvien,
    phieuthuephong,
    phong,
    thaydoiquydinh,
  };
}
