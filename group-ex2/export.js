/*
|---------Nama Kelompok-------------|
|Hendra Luntungan                   |
|Natalia Katutu                     |
|Sherren Kalalo                     |
|Anjelita Kaminang                  |
|Mia Sundah                         |
|Cherlita Patuli                    |
|-----------------------------------|
*/

/*
Dengan menggunakan module kita bisa memisahkan kode pada aplikasi kita sesuai dengan scope yang seragam sehingga 
mudah dipahami apa yang ada di dalam module tersebut. Module adalah sebuah cara bagi JavaScript untuk mengisolasi kode 
dari suatu file ke dalam sebuah file terpisah. Sehingga kode tersebut dapat digunakan berulang kali dengan cara 
di-export dari suatu file dan di-import ke file yang lainnya. Kita dapat melakukan export kode apapun pada 
JavaScript seperti string, object, array, number, hingga function.

Alasan menggunakan Module
1.Maintanability
2.Penggunaan nama variable
3.Reusable Code

Module ini tidak bisa dijalankan jika akses file .html menggunakan url direktori local, tapi kita harus
menggunakan Live Server
*/

/*
    A. Export
    'export' merupakan bagian dari module pada javaScript ES6, yang fungsinya untuk 'mengekspor' banyak hal dari suatu module, seperti variabel, objek, fungsi, ataupun primitive value.
*/

//export menggunakan spread operator untuk array
let anggota =["nat","mia","hen","enji","cher"]
console.log(anggota) //ini untuk memunculkan anggota tanpa membuatnya spread
console.log(...anggota) //ini cara untuk spread anggota 
let anggota2 = [...anggota] //ini untuk menduplikasi anggota, dan menamainya anggota 2
anggota.push("sher") //ini untuk menambah 1 string kedalam anggota
console.log(`anggota2 = ${anggota2}`) //ini untuk memastikan bahwa saat string di push ke anggota, maka anggota2 tidak akan terpengaruh

export {anggota} //export anggota

//export default
//export default ini hanya boleh terdapat satu export saja.

function aku(natal){
    console.log(`Hallo ges, it's me ${natal}!`);
}

export default aku;

// export pada Variabel
export let angka = 20;                                      // int
export let sentence = "Hello World!";                       // string


// export pada Objek
let Book = {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    penerbit: "Bentang Pustaka, Yogyakarta",
    jumlah_halaman: 529,
    tahun_terbit: 2005,
};

// export Function
function FuncBook(info_jdl, info_pnlis, info_pnrbit, info_thnTrbit, info_jmlhHal) {
    console.log(`Berikut merupakan informasi buku dengan judul ${info_jdl}. Buku ini ditulis oleh seorang penulis handal Indonesia, ${info_pnlis}. Diterbitkan oleh penerbit ${info_pnrbit} tahun ${info_thnTrbit}. Buku dengan total keseluruhan ${info_jmlhHal} halaman ini begitu digemari oleh kalangan muda Indonesia.`);
}

// Dalam proses ekspor, bisa dilakukan secara terpisah, ataupun digabung sekaligus, contohnya dibawah ini merupakan proses ekspor gabungan untuk objek dan fungsi
export {  Book, FuncBook };

// Export As

/* Fungsinya untuk memberikan 'alias' atau nama lain dari suatu variabel, fungsi, objek dan sebagainya pada module saat melakukan proses ekspor */

let angka1 = 10;
let angka2 = 20;

export { angka1 as num1, angka2 as num2};



