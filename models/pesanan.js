const connection = require('../db-config/connect');
const {DataTypes} = require('sequelize');
const mysql = require('mysql2/promise');
const { type } = require('@hapi/joi/lib/extend');

const dbConnection = connection.connect;

const Pesanan = dbConnection.define('pesanan', {
      id_pesanan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jenis_produk: {
          type: DataTypes.STRING
      },
      nama_produk : {
        type: DataTypes.STRING
      },
      harga : {
        type:  DataTypes.INTEGER
      },
      deskripsi : {
        type : DataTypes.STRING
      },

      
      buy_date: {
        type: DataTypes.DATE,
        allowNull: false, // Pastikan ini tidak null
        defaultValue: DataTypes.NOW // Default ke waktu sekarang
      }
},
{
    freezeTablename: true,
    timestamps: false
});


  // Insert pesanan baru
  const insertproduk = async (jenis_produk, nama_produk, harga, deskripsi) => {
    try {
      const newUser = await Pesanan.create({ jenis_produk, nama_produk, harga, deskripsi });
      console.log('User inserted:', newUser.toJSON());
    } catch (error) {
      console.error('Error inserting user:', error.message);
      throw error;
    }
  };

  // Read pasien by id_pasien
const getPasienById = async (id_pasien) => {
  try {
    const pasien = await Pasien.findByPk(id_pasien);
    return pasien;
  } catch (error) {
    console.error('Error fetching pasien:', error.message);
    throw error;
  }
};


  


module.exports = { Pesanan, insertproduk, getPasienById};
