//const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const {DataTypes, Op} = require('sequelize');
const {insertproduk, Pesanan} = require('../models/pesanan');

async function insertHandler(request, h) {
  try {
    const {jenis_produk, nama_produk, harga, deskripsi} = request.payload;

  
    // Insert user baru
    await insertproduk(jenis_produk, nama_produk, harga, deskripsi);
    

   
        // Proses registrasi sukses
    
        // Mengarahkan pengguna ke halaman lihat data pesanan
        return h.redirect('/ReadPesanan').code(302); // Pengalihan sementara (302)
    } catch (error) {
        console.error(error);
        return h.response('Internal Server Error').code(500);
    }


    }

// Fungsi untuk membaca semua data pesanan
async function readAllPesanan() {
    try {
        const pesanans = await Pesanan.findAll();
        console.log('Pesanans:', pesanans);
        return pesanans;
    } catch (error) {
        console.error('Error membaca data pesanan:', error);
        throw error;
    }
}




/*

// Fungsi untuk mengupdate data pasien berdasarkan ID
async function updatePasienById(id, newData) {
  try {
      // Melakukan update data pasien dengan menggunakan metode update()
      const result = await Pasien.update(newData, {
          where: { id_pasien: id }
      });

      // Jika berhasil, result akan berisi jumlah baris yang terpengaruh oleh operasi update
      if (result[0] > 0) {
          console.log(`Data pasien dengan ID ${id} berhasil diupdate.`);
          return result; // Mengembalikan hasil operasi update
      } else {
          console.log(`Data pasien dengan ID ${id} tidak ditemukan.`);
          return null;
      }
  } catch (error) {
      console.error('Error mengupdate data pasien:', error);
      throw error; // Melemparkan kesalahan
  }
}



updatePasienById(idPasienToUpdate, newData)
  .then(result => {
      // Lakukan sesuatu dengan hasil operasi update, jika diperlukan
      console.log('Hasil operasi update:', result);
  })
  .catch(error => {
      // Lakukan penanganan kesalahan, jika diperlukan
      console.error('Gagal melakukan update data pasien:', error);
  });
  */

  //handle pencarian
  const searchPesanan = async (searchQuery) => {
    try {
        const pesanan = await Pesanan.findAll({
            where: {
                nama_pesanan: {
                    [Op.like]: `%${searchQuery}%`
                }
            }
        });
        console.log('Hasil Pencarian:', pesanan);
        return JSON.parse(JSON.stringify(pesanan));
    } catch (error) {
        console.error('Error mencari data pesanan:', error);
        throw error;
    }
};



module.exports = {insertHandler, readAllPesanan, searchPesanan};

