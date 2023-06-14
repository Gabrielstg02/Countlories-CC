"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Menus", [
      {
        name: "Ayam Goreng",
        label: "ayam_goreng",
        kkal: 221,
        description:
          "<p>Ayam goreng merupakan salah satu makanan yang paling populer di dunia. Terbuat dari potongan ayam yang digoreng hingga garing, biasanya ayam goreng dikombinasikan dengan tepung sehingga rasanya menjadi lebih gurih dan crunchy. </p>",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ayam Pop",
        label: "ayam_pop",
        kkal: 265,
        description:
          "<p>Ayam pop adalah salah satu masakan yang berbahan dasar daging ayam dari provinsi Sumatra Barat. Ayam pop termasuk salah satu bentuk hidangan ayam goreng, tetapi yang membedakan ayam pop dengan ayam goreng pada umumnya adalah ayam pop memiliki warna yang masih putih pucat ketika selesai dimasak. Hal ini dikarenakan sebelum digoreng, ayam pop yang sudah diberi bumbu direbus terlebih dahulu di dalam rebusan air kelapa dan bawang putih cincang. Setelah itu, ayam baru digoreng sebentar di dalam minyak panas agar matang sempurna dan memperoleh sedikit tekstur renyah. Ayam pop biasanya dihidangkan dengan didampingi samba lado (sambal) tomat dan sayur daun singkong rebus.</p>",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Daging Rendang",
        label: "daging_rendang",
        kkal: 238,
        description: `<p><strong>Rendang</strong>&nbsp;(bahasa Minangkabau:&nbsp;<em>randang</em>) (<a href="https://id.wikipedia.org/wiki/Jawi" title="Jawi">Jawi</a>:&nbsp;<strong>رندڠ</strong>) adalah hidangan berbahan dasar daging yang dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan menggunakan&nbsp;<a href="https://id.wikipedia.org/wiki/Bumbu_dapur" title="Bumbu dapur">aneka rempah-rempah</a>&nbsp;dan&nbsp;<a href="https://id.wikipedia.org/wiki/Santan" title="Santan">santan</a>. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut&nbsp;<a href="https://id.wikipedia.org/wiki/Kalio" title="Kalio">kalio</a>, berwarna cokelat terang keemasan.</p>

        <p>Rendang dapat dijumpai di&nbsp;<a href="https://id.wikipedia.org/wiki/Rumah_Makan_Padang" title="Rumah Makan Padang">Rumah Makan Padang</a>&nbsp;di seluruh dunia. Masakan ini populer di&nbsp;<a href="https://id.wikipedia.org/wiki/Indonesia" title="Indonesia">Indonesia</a>&nbsp;dan negara-negara&nbsp;<a href="https://id.wikipedia.org/wiki/Asia_Tenggara" title="Asia Tenggara">Asia Tenggara</a>&nbsp;lainnya, seperti&nbsp;<a href="https://id.wikipedia.org/wiki/Malaysia" title="Malaysia">Malaysia</a>,&nbsp;<a href="https://id.wikipedia.org/wiki/Singapura" title="Singapura">Singapura</a>,&nbsp;<a href="https://id.wikipedia.org/wiki/Brunei" title="Brunei">Brunei</a>,&nbsp;<a href="https://id.wikipedia.org/wiki/Filipina" title="Filipina">Filipina</a>, dan&nbsp;<a href="https://id.wikipedia.org/wiki/Thailand" title="Thailand">Thailand</a>. Di daerah asalnya, Minangkabau, rendang disajikan di berbagai upacara adat dan perhelatan istimewa. Meskipun rendang merupakan&nbsp;<a href="https://id.wikipedia.org/wiki/Masakan_Padang" title="Masakan Padang">masakan tradisional Minangkabau</a>, teknik memasak serta pilihan dan penggunaan bumbu rendang berbeda-beda menurut daerah.</p>`,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "",
        label: "",
        kkal: 0,
        description: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
