// PERBAIKAN: Menambahkan tanda sama dengan (=) untuk memasukkan elemen tombol ke dalam variabel
const tombolSapa = document.getElementById('sapaan');

/* 
  PERBAIKAN: 
  1. Penulisan 'addEventlistener' diubah menjadi 'addEventListener' (huruf 'L' besar).
  2. Jenis event diubah dari 'Click me' menjadi 'click' (karena event standar klik pada JavaScript adalah 'click').
*/
tombolSapa.addEventListener('click', function() {
    // Menampilkan pesan pop-up saat tombol diklik
    alert('selamat datang di aku saya');
});
