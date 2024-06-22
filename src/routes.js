const {insertHandler, readAllPesanan, searchPesanan} = require('./handler-pesanan');





const routes = [
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => h.view('index'),
    },
    {
        method: 'POST',
        path: '/insertProduk',
        handler: insertHandler,
      },
      {
        method: 'GET',
        path: '/register',
        handler: (request, h) => h.view('input'),
      },
      {
        method: 'GET',
        path: '/ReadPesanan',
        handler: async (request, h) => {
          try {
              const order = await readAllPesanan();
              console.log('Data pesanan yang akan dirender:', order);
              return h.view('lihat_data', { order });
          } catch (error) {
              console.error('Error saat merender data pesanan:', error);
              return h.response('Gagal mengambil data pesanan').code(500);
          }
      }
      },
      {
        method: 'GET',
        path: '/cari-pesanan',
        handler: async (request, h) => {
            const searchQuery = request.query.q; // Mengambil query parameter 'q'
            try {
                const pesanan = await searchPesanan(searchQuery);
                console.log('Rendering search results:', pesanan);
                return h.view('lihat_data', { pesanan });
            } catch (error) {
                console.error('Error searching data pesanan:', error);
                return h.response('Gagal mencari data pesanan').code(500);
           }
         }
      },
      {
        method: 'GET',
        path: '/style',
        handler: (request, h) => h.view('style'),
      },
      {
        method: 'GET',
        path: '/css/{param*}',
        handler: {
            directory: {
                path: 'views',
                index: false,
                listing: true
            }
        }
      },
      {
          method: 'GET',
          path: '/{param*}',
          handler: {
              directory: {
                  path: 'views',
                  index: ['index.html']
              }
          }
      },
    
     
    ];
    module.exports = routes;