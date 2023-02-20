/*
|---------Nama Kelompok-------------|
|1. Katutu, Natalia                 |
|2. Kalalo, Sherren                 |
|3. Kaminang, Anjelita              |
|4. Patuli, Cherlita                |
|5. Sundah, Mia                     |
|6. Luntungan, Hendra               |
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

Module ini tidak bisa dijalankan apabila akses file .html menggunakan url direktori local, tapi kita harus
menggunakan Live Server
*/

/*
    B. Import
    import juga sama seperti export akan tetapi value dalam tujuan variabel sesuai dengan apa yang diterima dari export..

    'import' juga merupakan bagian dari module pada javaScript ES6, dianggap sebagai pasangan ekspor, karena fungsinya untuk menggunakan data yang di ekspor dari module lainnya. Sama halnya dengan ekspor, import juga bisa dilakukan terpisah atau digabung.
*/

//Import Snggota
import { anggota } from "./export.js";

//Output dari anggota
console.log("Nama-nama anggota Tokyo: ",...anggota); // Output: Nama-nama anggota Tokyo:  nat mia hen enji cher sher

//Import Default
import aku from "./export.js";//menampilkan hasil export.js
aku("Nataliaaaaa");

// import variabel
import { angka, sentence, Book, FuncBook } from "./export.js";


// Output saat import (Variabel)
console.log(angka); // Output: 20
console.log(sentence); // Output: Hello World!

// Output saat import (Objek)
console.log(Book);


// Output saat import (Function)
FuncBook(Book.judul, Book.penulis, Book.penerbit, Book.tahun_terbit, Book.jumlah_halaman);


/*
    import as
    
    Sama seperti export as, kita bisa melakukan import dengan tujuan mengganti nama suatu variabel, objek, fungsi dengan menggunakan import as.
*/

// Kita ambil contoh untuk ubah import dari ekspor variabel diatas dengan menggunakan import as.

// import { angka, sentence, Book, FuncBook } from "./export.js";
// ini tanpa menggunakan import as. Kita modify code diatas menggunakan import as.

import { angka as number, sentence as kalimat, Book as objek } from "./export.js";

// Hasil dari menggunakan import aa
console.log("---USE IMPORT AS--------------------------------");
console.log(number); 
console.log(kalimat);
console.log(objek);
console.log("-------------------------------USE IMPORT AS----");

// import variabel yang di modify dengan 'as'

import {num1, num2} from "./export.js";

console.log(`Hasil jumlah dari ${num1} dan ${num2} adalah ${num1 + num2}`);

