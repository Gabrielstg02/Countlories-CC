"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Menus", [
      {
        name: "Ayam Goreng",
        label: "ayam_goreng",
        kkal: 221,
        description: `<p>Ayam goreng adalah hidangan populer di banyak negara di seluruh dunia, termasuk Indonesia. Hidangan ini terdiri dari potongan ayam yang digoreng hingga kulitnya menjadi renyah dan berwarna kecokelatan, sementara dagingnya tetap juicy dan lezat di dalamnya.</p>

        <p>Proses memasak ayam goreng dimulai dengan membersihkan dan memotong ayam menjadi potongan-potongan yang sesuai. Potongan ayam kemudian dibumbui dengan campuran rempah-rempah seperti garam, merica, bawang putih, dan bumbu-bumbu lainnya. Selain itu, beberapa resep ayam goreng khas Indonesia juga menggunakan bumbu rempah tradisional seperti kunyit, ketumbar, atau serai untuk memberikan aroma dan rasa yang khas.</p>
        
        <p>Ayam kemudian digoreng dalam minyak panas hingga matang dan berkulit renyah. Teknik penggorengan yang baik akan menciptakan kulit ayam yang garing, renyah, dan berwarna kecokelatan yang menambahkan cita rasa khusus pada hidangan.</p>
        
        <p>Ayam goreng sering disajikan dengan nasi putih hangat, lalapan segar seperti mentimun dan tomat, serta sambal sebagai pelengkapnya. Hidangan ini bisa disantap sebagai hidangan utama dalam makanan sehari-hari, dalam hidangan nasi goreng, atau sebagai hidangan di berbagai acara dan perayaan.</p>
        
        <p>Ayam goreng adalah hidangan yang terkenal karena rasanya yang gurih dan lezat. Tekstur kulit ayam yang renyah dan daging ayam yang juicy dan lembut menjadikannya hidangan yang disukai oleh banyak orang. Variasi dalam bumbu dan rempah-rempah yang digunakan juga memberikan keunikan dalam cita rasa ayam goreng dari berbagai daerah.</p>
        
        <p>Ayam goreng adalah hidangan yang sering dijumpai di restoran, warung makan, atau di rumah-rumah sebagai hidangan favorit keluarga. Rasanya yang enak dan proses memasak yang relatif sederhana menjadikan ayam goreng sebagai salah satu hidangan yang populer dan disukai secara luas.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ayam Pop",
        label: "ayam_pop",
        kkal: 265,
        description: `<p>Ayam pop adalah hidangan khas dari Jawa Tengah, Indonesia. Hidangan ini terdiri dari potongan-potongan ayam yang digoreng hingga kulitnya menjadi renyah dan berwarna kecokelatan, namun tetap memiliki daging yang lembut dan juicy di dalamnya.</p>

        <p>Proses memasak ayam pop dimulai dengan membersihkan dan memotong ayam menjadi potongan-potongan yang sesuai. Potongan ayam kemudian dibumbui dengan campuran rempah-rempah seperti bawang putih, merica, garam, dan bumbu-bumbu lainnya sesuai dengan selera. Ayam kemudian digoreng dalam minyak panas hingga matang dan berkulit renyah.</p>
        
        <p>Ayam pop memiliki ciri khas kulit ayam yang kering, renyah, dan berwarna kecokelatan. Meskipun kulitnya yang renyah, daging ayam di dalamnya tetap lembut dan juicy. Hal ini karena proses penggorengan yang tepat sehingga menjaga kelembutan daging ayam.</p>
        
        <p>Ayam pop sering disajikan dengan nasi putih hangat dan pelengkap seperti sambal, acar, atau sayuran rebus. Rasanya yang gurih, renyah di luar, dan lembut di dalam menjadikannya hidangan yang populer di kalangan pecinta masakan Indonesia.</p>
        
        <p>Hidangan ayam pop memiliki rasa yang lezat dan kaya rempah. Tekstur kulit ayam yang renyah dan daging yang juicy menciptakan kombinasi yang sempurna. Hidangan ini bisa dinikmati sebagai hidangan utama dalam makanan sehari-hari atau sebagai hidangan istimewa pada acara-acara khusus.</p>
        
        <p>Ayam pop merupakan salah satu hidangan yang mencerminkan keanekaragaman kuliner Indonesia dan menjadi favorit di berbagai daerah. Rasanya yang lezat dan proses memasaknya yang sederhana menjadikan ayam pop sebagai hidangan yang populer dan sering dicari oleh pecinta masakan Indonesia.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Daging Rendang",
        label: "daging_rendang",
        kkal: 238,
        description: `<p>Daging rendang adalah hidangan khas Indonesia, khususnya dari daerah Minangkabau, Sumatra Barat. Hidangan ini terkenal karena proses memasak yang lama dan penggunaan berbagai rempah-rempah yang kaya.</p>

        <p>Dalam pembuatan daging rendang, potongan daging sapi yang biasanya menggunakan potongan daging yang berlemak dan berurat, seperti daging sandung lamur atau daging sapi bagian pinggul, dimasak dalam campuran rempah-rempah yang khas. Beberapa rempah-rempah yang sering digunakan dalam rendang antara lain adalah cabai merah, bawang merah, bawang putih, serai, lengkuas, jahe, daun jeruk, kayu manis, dan kelapa parut.</p>
        
        <p>Proses memasak rendang melibatkan pemasakan yang lambat dan perlahan dalam campuran bumbu dan santan kelapa. Dalam proses ini, daging dan bumbu dimasak dalam waktu yang cukup lama hingga daging menjadi empuk, rempah-rempah meresap, dan kuah menyusut hingga mengental. Proses memasak yang lambat dan penggunaan berbagai rempah-rempah tersebut memberikan cita rasa yang kaya, kompleks, dan gurih pada daging rendang.</p>
        
        <p>Daging rendang memiliki cita rasa yang unik dengan perpaduan rasa pedas, gurih, manis, dan rempah-rempah yang khas. Daging yang dimasak dalam rendang menjadi empuk, lezat, dan memiliki tekstur yang kenyal karena penggunaan santan yang kental dan proses pemasakan yang lama.</p>
        
        <p>Rendang biasanya disajikan sebagai hidangan utama dalam makanan Indonesia dan sering dihidangkan dengan nasi putih hangat. Hidangan ini juga menjadi hidangan istimewa pada acara-acara tertentu seperti perayaan atau acara keluarga.</p>
        
        <p>Daging rendang adalah hidangan yang populer dan dihargai oleh banyak orang karena kelezatannya yang khas dan proses memasak yang melibatkan perpaduan rempah-rempah yang kompleks. Hidangan ini juga menjadi salah satu ikon kuliner Indonesia yang terkenal di dunia.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dendeng Batokok",
        label: "dendeng_batokok",
        kkal: 250,
        description: `<p>Dendeng batokok adalah hidangan daging asap kering yang berasal dari Minangkabau, Sumatra Barat, Indonesia. Hidangan ini terbuat dari daging sapi yang diiris tipis dan diolah dengan cara diasap dan dikeringkan hingga menjadi keripik daging yang renyah dan gurih.</p>

        <p>Proses pembuatan dendeng batokok dimulai dengan memotong daging sapi menjadi irisan tipis dan merendamnya dalam bumbu marinasi yang terdiri dari campuran kecap manis, garam, bawang putih, merica, dan bumbu-bumbu lainnya sesuai dengan selera. Setelah direndam, irisan daging diangin-anginkan atau dikeringkan sebentar sebelum proses pengasapan.</p>
        
        <p>Daging sapi yang telah direndam kemudian diasap menggunakan kayu bakar atau arang dalam waktu yang cukup lama, sehingga mendapatkan aroma asap yang khas. Setelah proses pengasapan, irisan daging dikeringkan hingga menjadi keripik daging yang kering, renyah, dan memiliki rasa yang kaya.</p>
        
        <p>Dendeng batokok sering disajikan sebagai makanan ringan atau camilan yang nikmat. Hidangan ini dapat dinikmati secara langsung, digunakan sebagai tambahan dalam hidangan mie atau nasi goreng, atau dijadikan sebagai lauk pendamping dalam hidangan utama.</p>
        
        <p>Dendeng batokok memiliki cita rasa yang gurih, manis, asin, dan memiliki aroma yang khas karena proses pengasapannya. Tekstur keripik daging yang renyah dan daging yang sedikit kenyal membuatnya menjadi camilan yang populer di kalangan pecinta makanan Indonesia.</p>
        
        <p>Hidangan dendeng batokok merupakan salah satu contoh kuliner tradisional Minangkabau yang kaya akan rasa dan budaya. Rasanya yang khas dan kelezatannya membuatnya menjadi hidangan yang populer dan dicari oleh banyak orang yang ingin mencicipi kelezatan makanan khas Sumatra Barat.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gulai Ikan",
        label: "gulai_ikan",
        kkal: 106,
        description: `<p>Gulai ikan adalah hidangan yang terdiri dari potongan ikan yang dimasak dalam kuah gulai yang kaya rempah-rempah dan santan. Hidangan ini merupakan salah satu hidangan khas Indonesia dan dapat ditemukan dalam berbagai variasi dan gaya memasak di seluruh nusantara.</p>

        <p>Proses memasak gulai ikan dimulai dengan memilih ikan segar dan membersihkannya. Ikan kemudian dipotong menjadi potongan-potongan yang sesuai dan dibumbui dengan garam dan air jeruk nipis untuk menghilangkan bau amisnya. Setelah itu, potongan ikan ditumis dengan bumbu-bumbu seperti bawang merah, bawang putih, jahe, lengkuas, serai, cabai, dan rempah-rempah lainnya sesuai selera.</p>
        
        <p>Setelah bumbu-bumbu matang, santan ditambahkan ke dalam tumisan dan diaduk hingga merata. Potongan ikan kemudian dimasukkan ke dalam kuah gulai dan dimasak hingga ikan matang dan meresap dengan rasa rempah yang kaya.</p>
        
        <p>Gulai ikan biasanya memiliki tekstur lembut dan cita rasa yang kaya dan lezat. Kuah gulai umumnya berwarna kekuningan atau kecokelatan karena penggunaan rempah-rempah seperti kunyit, lengkuas, dan cabai. Gulai ikan sering disajikan dengan nasi putih hangat sebagai hidangan utama dalam makanan Indonesia.</p>
        
        <p>Berdasarkan variasi dan budaya regional, ada banyak jenis gulai ikan yang berbeda, seperti gulai ikan mas, gulai ikan patin, gulai ikan kakap, dan lain-lain. Setiap varietas memiliki karakteristik dan bumbu khas yang membedakannya.</p>
        
        <p>Gulai ikan adalah hidangan yang lezat dan populer di Indonesia, dan dihargai karena kelezatan dan kekayaan rempah-rempahnya. Hidangan ini mencerminkan keanekaragaman budaya kuliner Indonesia serta penggunaan rempah-rempah yang khas dalam masakan tradisional.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gulai Tambusu",
        label: "gulai_tambusu",
        kkal: 0,
        description: `<p>Gulai tambusu adalah makanan khas dari Minang.Makanan ini terbuat dari bahan utama usus sapi. Usus sapi tersebut di dalamnya diberi isian telur dan tahu. Selanjutnya bahan utama itu dimasak dengan aneka bumbu, rempah-rempah, dan santan. Gulai tambusu termasuk hidangan berkuah yang kuahnya berasal dari santan kelapa.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gulai Tunjang",
        label: "gulai_tunjang",
        kkal: 61,
        description: `Gulai tunjang adalah hidangan tradisional yang berasal dari Minangkabau, Sumatra Barat, Indonesia. Hidangan ini terkenal karena menggunakan bahan utama berupa tulang kaki atau kaki sapi yang dimasak dengan bumbu rempah-rempah yang kaya dan kental.

        Proses pembuatan gulai tunjang dimulai dengan merebus kaki sapi hingga empuk dan dagingnya terlepas dari tulangnya. Setelah itu, kaki sapi dipotong menjadi potongan kecil dan dimasak dalam kuah gulai yang kaya rempah-rempah.
        
        Bumbu gulai tunjang terdiri dari campuran rempah-rempah seperti lengkuas, kunyit, jahe, bawang merah, bawang putih, serai, daun jeruk, cabai, dan rempah lainnya. Bumbu-bumbu ini dihaluskan atau diolah menjadi pasta, kemudian ditumis dengan minyak kelapa untuk mengeluarkan aroma dan rasa yang khas.
        
        Setelah bumbu tumis matang, potongan kaki sapi dimasukkan ke dalam bumbu dan kuah gulai. Proses memasak dilanjutkan dengan merebus kembali dan membiarkan semua bumbu meresap ke dalam daging dan tulang sapi, menciptakan rasa yang kaya dan lezat.
        
        Gulai tunjang biasanya memiliki cita rasa yang kaya, pedas, dan rempah-rempah yang khas. Hidangan ini sering disajikan dengan nasi putih hangat, roti, atau ketupat, serta ditambahkan dengan lalapan seperti daun singkong atau daun kemangi untuk menyempurnakan rasanya.
        
        Gulai tunjang merupakan hidangan yang membutuhkan waktu dan kesabaran dalam proses memasaknya. Namun, hasilnya adalah hidangan yang lezat dan menggugah selera, dengan daging yang empuk dan tulang yang lepas dari daging, sehingga membuatnya menjadi hidangan yang disukai oleh pecinta masakan Minangkabau.`,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lele Goreng",
        label: "lele_goreng",
        kkal: 105,
        description: `<p>Lele goreng adalah hidangan yang terdiri dari ikan lele yang digoreng hingga renyah di luar namun tetap juicy dan lembut di dalamnya. Hidangan ini populer dalam kuliner Indonesia dan merupakan salah satu hidangan favorit di banyak restoran dan warung makan.</p>

        <p>Proses memasak lele goreng dimulai dengan membersihkan ikan lele dan mengeringkannya. Ikan lele kemudian dibumbui dengan campuran rempah-rempah seperti garam, merica, bawang putih, dan bumbu-bumbu lainnya. Setelah itu, ikan lele digoreng dalam minyak panas hingga berwarna kecokelatan dan renyah di luar, sementara tetap lembut dan juicy di dalamnya.</p>
        
        <p>Lele goreng sering disajikan dengan pelengkap seperti nasi putih, sambal, atau lalapan seperti mentimun dan tomat. Rasanya yang gurih, renyah di luar, dan lembut di dalam membuatnya menjadi hidangan yang sangat nikmat dan disukai oleh banyak orang.</p>
        
        <p>Selain kelezatannya, lele goreng juga mengandung nutrisi penting. Lele adalah sumber protein yang baik, serta mengandung asam lemak omega-3, vitamin D, dan mineral seperti selenium dan fosfor. Ini menjadikannya pilihan yang baik untuk mendapatkan asupan nutrisi yang seimbang.</p>
        
        <p>Lele goreng adalah hidangan yang cocok untuk dinikmati dalam berbagai kesempatan, baik sebagai hidangan utama dalam makan siang atau makan malam, maupun sebagai hidangan pelengkap dalam menu makanan Indonesia. Kombinasi cita rasa yang gurih, tekstur yang renyah, dan kandungan gizi yang bermanfaat menjadikan lele goreng sebagai hidangan yang populer dan terus diminati.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi",
        label: "nasi",
        kkal: 252,
        description: `<p>Nasi adalah makanan pokok yang sangat penting dalam banyak budaya di seluruh dunia, terutama di Asia. Nasi merupakan biji-bijian dari tanaman padi yang diolah dan dimasak menjadi hidangan yang lezat dan bergizi.</p>

        <p>Proses produksi nasi dimulai dengan menanam, panen, dan menggiling padi. Setelah itu, padi dapat diolah dengan berbagai cara, seperti merebus, mengukus, atau menggunakan alat khusus seperti rice cooker. Hasil akhirnya adalah butiran nasi yang lembut, beraroma harum, dan memiliki tekstur yang kenyal.</p>
        
        <p>Nasi sering disajikan sebagai lauk pendamping atau dasar dalam hidangan utama. Banyak hidangan seperti nasi goreng, nasi kuning, nasi putih, nasi biryani, dan sushi menggunakan nasi sebagai komponen utama. Nasi juga dapat disajikan dengan berbagai hidangan seperti daging, ikan, sayuran, atau hidangan berkuah.</p>
        
        <p>Kelezatan nasi tidak hanya berasal dari rasanya yang netral dan komplementer terhadap hidangan lainnya, tetapi juga dari kemampuannya untuk menyerap cita rasa dan saus yang digunakan dalam hidangan. Hal ini menjadikan nasi sebagai pendamping yang serbaguna untuk hidangan berbagai budaya dan masakan.</p>
        
        <p>Selain sebagai sumber karbohidrat yang penting, nasi juga mengandung sejumlah nutrisi seperti vitamin B, serat, dan mineral seperti zat besi dan magnesium. Nasi juga rendah lemak dan bebas gluten, menjadikannya pilihan yang populer di berbagai pola makan.</p>
        
        <p>Nasi memiliki peran kultural yang kuat dan sering menjadi simbol kesuburan, kelimpahan, dan persatuan dalam banyak masyarakat. Cara memasak, menyajikan, dan mengonsumsi nasi dapat bervariasi dari satu budaya ke budaya lainnya.</p>
        
        <p>Nasi adalah makanan yang mendalam maknanya dan menjadi bagian penting dalam hidangan di berbagai belahan dunia. Rasanya yang lezat, teksturnya yang kenyal, serta peran budaya dan gizi yang dimilikinya menjadikannya sebagai makanan yang dicintai dan dikonsumsi oleh banyak orang di seluruh dunia.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tahu Goreng",
        label: "tahu_goreng",
        kkal: 35,
        description: `<p>Tahu goreng adalah hidangan yang terdiri dari tahu yang digoreng hingga renyah di luar namun tetap lembut di dalamnya. Hidangan ini populer dalam kuliner Indonesia dan dapat ditemukan dalam berbagai variasi dan gaya memasak.</p>

        <p>Proses pembuatan tahu goreng dimulai dengan memotong tahu menjadi potongan-potongan kecil atau membelahnya menjadi dua bagian tipis. Tahu kemudian bisa direndam dalam bumbu atau saus untuk memberikan rasa tambahan sebelum digoreng. Setelah itu, tahu digoreng dalam minyak panas hingga berwarna kecokelatan dan renyah di luar.</p>
        
        <p>Tahu goreng sering disajikan dengan pelengkap seperti saus kacang, saus pedas, atau saus kecap. Hidangan ini dapat dijadikan lauk pendamping dalam nasi goreng, mi goreng, atau sebagai makanan ringan yang lezat.</p>
        
        <p>Tahu, bahan utama dalam tahu goreng, adalah produk kedelai yang kaya akan protein nabati, serat, dan nutrisi lainnya. Dengan menggoreng tahu, hidangan ini menghasilkan tekstur yang lembut di dalam dan lapisan luar yang garing. Tahu goreng juga dapat disesuaikan dengan selera masing-masing, baik dengan menambahkan bumbu khusus pada tahu sebelum digoreng atau dengan menyajikannya dengan saus atau tambahan lainnya.</p>
        
        <p>Tahu goreng adalah hidangan yang populer dan banyak disukai oleh banyak orang karena rasanya yang gurih dan teksturnya yang menarik. Hidangan ini tidak hanya cocok untuk vegetarian, tetapi juga merupakan pilihan yang sehat dan bergizi bagi siapa pun yang menginginkan hidangan yang lezat dan bernutrisi.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Telur Dadar Goreng",
        label: "telur_dadar_goreng",
        kkal: 153,
        description: `<p>Telur dadar goreng adalah hidangan yang terdiri dari telur yang dikocok bersama bumbu-bumbu dan digoreng hingga matang. Hidangan ini sederhana namun lezat dan sering menjadi bagian dari menu sarapan atau makanan ringan di banyak budaya di seluruh dunia.</p>

        <p>Untuk membuat telur dadar goreng, telur dipecahkan dan dikocok bersama dengan garam, merica, dan bumbu lainnya sesuai selera. Kemudian, campuran telur ini digoreng di atas wajan dengan sedikit minyak atau mentega hingga matang. Proses ini menghasilkan selembar telur dadar yang tipis dan lembut.</p>
        
        <p>Telur dadar goreng bisa disajikan dengan berbagai cara. Beberapa orang menyukai telur dadar yang simpel, tanpa tambahan bahan lainnya. Namun, Anda juga dapat menambahkan irisan bawang hijau, daun peterseli, keju parut, potongan sayuran, atau daging cincang ke dalam adonan telur sebelum digoreng untuk memberikan variasi rasa dan tekstur.</p>
        
        <p>Telur dadar goreng sering disajikan dengan nasi hangat, roti panggang, atau bagian dari menu sarapan lengkap dengan lauk pendamping seperti sosis, bacon, atau ham. Rasanya yang lezat, serta tekstur lembut dan padat dari telur dadar, menjadikannya hidangan yang memuaskan dan mudah disesuaikan dengan selera individu.</p>
        
        <p>Selain enak, telur dadar goreng juga merupakan sumber protein yang baik dan mengandung nutrisi penting seperti vitamin A, vitamin B12, zat besi, dan selenium. Ini menjadikannya pilihan makanan yang bergizi untuk memulai hari atau sebagai camilan yang menyenangkan.</p>
        
        <p>Telur dadar goreng adalah hidangan yang sederhana namun serbaguna, cocok untuk dinikmati dalam berbagai kesempatan. Kelezatan dan kemudahannya dalam persiapan menjadikannya sebagai salah satu hidangan favorit di meja makan banyak orang di seluruh dunia.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Telur Mata Sapi Goreng",
        label: "telur_matasapi_goreng",
        kkal: 120,
        description: `<p>Telur Mata sapi goreng adalah hidangan yang terdiri dari telur yang digoreng dengan kuning telur yang masih setengah matang, sehingga terlihat seperti &quot;mata sapi&quot; yang belum sepenuhnya matang. Hidangan ini populer di berbagai negara dan sering disajikan sebagai lauk pendamping dalam menu sarapan atau makan siang.</p>

        <p>Proses memasak telur Mata sapi goreng dimulai dengan memanaskan sedikit minyak di atas wajan anti lengket. Setelah minyak panas, telur pecah di atas wajan, tetapi kuning telur tidak dipecahkan. Telur kemudian digoreng dengan api sedang hingga putih telur matang dengan kuning telur yang masih setengah matang.</p>
        
        <p>Hasilnya adalah telur dengan putih telur yang padat dan kuning telur yang lembut dan sedikit berair di bagian tengahnya. Saat disajikan, telur Mata sapi goreng biasanya diberi sedikit garam, merica, atau rempah-rempah lainnya sesuai selera.</p>
        
        <p>Hidangan telur Mata sapi goreng sering dihidangkan dengan nasi hangat atau roti panggang sebagai lauk pendamping. Rasanya yang lezat, dengan kombinasi tekstur lembut dan kenyal dari kuning telur yang setengah matang dan putih telur yang matang, menjadikannya pilihan yang populer bagi pecinta telur.</p>
        
        <p>Selain enak, telur Mata sapi goreng juga merupakan sumber protein yang baik dan mengandung sejumlah vitamin dan mineral seperti vitamin B12, vitamin D, selenium, dan zat besi.</p>
        
        <p>Telur Mata sapi goreng adalah hidangan yang sederhana namun menggugah selera. Kelembutan kuning telur yang masih setengah matang dan tekstur putih telur yang matang membuatnya menjadi hidangan yang nikmat untuk dinikmati kapan pun Anda menginginkan hidangan telur yang berbeda dan menarik.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Telur Rebus Balado",
        label: "telur_rebus_balado",
        kkal: 237,
        description: `<p>Telur rebus balado adalah hidangan yang terdiri dari telur rebus yang disajikan dengan saus balado yang pedas dan beraroma menggugah selera. Proses memasak telur rebus balado dimulai dengan merebus telur hingga matang, kemudian dikupas kulitnya dan disajikan dengan saus balado yang khas.</p>

        <p>Saus balado, yang berasal dari Padang, Sumatra Barat, adalah campuran bumbu pedas yang terbuat dari cabai merah, bawang merah, bawang putih, dan beberapa bahan tambahan seperti tomat, gula, dan garam. Bumbu-bumbu ini dihaluskan atau diolah menjadi pasta dan kemudian digoreng dalam minyak hingga menghasilkan saus kental yang merah dan beraroma menggugah selera.</p>
        
        <p>Telur rebus yang digunakan dalam hidangan ini biasanya dimasak hingga kuning telur matang sempurna dan putih telur yang kenyal. Setelah dikupas kulitnya, telur rebus tersebut disajikan dengan dituangi saus balado yang pedas dan sedikit asam. Kombinasi antara kelezatan telur rebus yang lembut dengan rasa pedas dan nikmatnya saus balado menciptakan harmoni cita rasa yang menarik.</p>
        
        <p>Hidangan telur rebus balado sering disajikan sebagai lauk pendamping nasi dalam hidangan utama. Rasanya yang pedas, gurih, dan sedikit asam menjadikannya pasangan yang sempurna dengan nasi hangat. Selain itu, telur rebus balado juga bisa dijadikan sebagai makanan ringan atau pelengkap dalam acara-acara khusus.</p>
        
        <p>Selain menawarkan rasa yang lezat, telur rebus balado juga mengandung nutrisi penting. Telur sendiri merupakan sumber protein yang baik, serta mengandung vitamin dan mineral esensial seperti vitamin B12, vitamin D, dan selenium.</p>
        
        <p>Dengan cita rasa yang pedas dan lezat, serta kandungan nutrisi yang bermanfaat, telur rebus balado menjadi salah satu hidangan favorit bagi pecinta masakan pedas dan merupakan contoh yang menggambarkan kekayaan kuliner Indonesia.</p>
        `,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tempe Goreng",
        label: "tempe_goreng",
        kkal: 192,
        description: `<p>Tempe goreng adalah hidangan yang populer dan lezat dalam kuliner Indonesia. Dalam pembuatan tempe goreng, tempe yang terbuat dari fermentasi kedelai digoreng hingga berwarna kecokelatan dan renyah di luar, namun tetap lembut di dalamnya.</p>

        <p>Proses penggorengan tempe ini memberikan aroma yang menggugah selera dan tekstur yang menyenangkan saat dikunyah. Ketika digigit, Anda akan merasakan perpaduan antara kelembutan tempe yang masih kenyal di dalamnya dengan lapisan luar yang renyah dan garing.</p>
        
        <p>Tempe goreng memiliki citarasa yang khas, umumnya gurih dengan sentuhan manis dan sedikit rasa kecap yang terasa di dalamnya. Bumbu dan rempah-rempah seperti bawang putih, merica, dan garam sering digunakan untuk memberikan kelezatan tambahan pada tempe goreng.</p>
        
        <p>Hidangan ini sering disajikan sebagai lauk pendamping nasi, atau dapat pula dijadikan sebagai makanan ringan yang nikmat. Tempe goreng seringkali dihidangkan dengan sambal atau saus pedas sebagai pelengkap, sehingga memberikan rasa pedas yang menyegarkan.</p>
        
        <p>Selain enak, tempe goreng juga memiliki nilai gizi yang tinggi. Tempe itu sendiri adalah sumber protein nabati yang baik, rendah lemak, dan kaya akan serat. Ini menjadikannya sebagai pilihan makanan yang sehat dan bergizi.</p>
        
        <p>Dengan cita rasa yang lezat, tekstur yang renyah, serta manfaat kesehatan yang terkandung di dalamnya, tempe goreng telah menjadi hidangan yang sangat disukai dan terkenal di Indonesia, dan juga semakin dikenal di dunia internasional sebagai salah satu makanan Indonesia yang khas.</p>`,
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
