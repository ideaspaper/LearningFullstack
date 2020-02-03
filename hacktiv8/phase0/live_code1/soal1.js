/**

 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
   *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 * false jika bukan merupakan pelajar
    *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 * Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 * Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
   *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
   *
    *
    */

// Your algorithm/pseudocode here

/*
INIT nama as USER_INPUT
INIT tahunLahir as USER_INPUT
INIT statusPelajar as USER_INPUT
INIT hargaDasar as 25000
INIT hargaAkhir as 0
INIT umur as YEAR_NOW - tahunLahir


IF umur > 120
  DISPLAY 'Invalid Age'
  CLOSE PROGRAM
ELSE
  IF umur < 2
    SET hargaAkhir as 0
  IF umur >= 2 AND umur <= 10
    SET hargaAkhir as hargaDasar
  IF umur >= 11 AND umur <= 18
    IF statusPelajar EQUAL FALSE
      SET hargaAkhir as hargaDasar * 1.5
    ELSE
      SET hargaAkhir as hargaDasar * 1.25
  IF umur >= 19
    IF statusPelajar EQUAL FALSE
      SET hargaAkhir as hargaDasar * 2
    ELSE
      SET hargaAkhir as hargaDasar * 1.5
DISPLAY name
DISPLAY hargaAkhir
CLOSE PROGRAM
*/