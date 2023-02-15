//import juga sama seperti export akan tetapi value dalam tujuan variabel sesuai dengan apa yang diterima dari export..

import {
    fullName as namaLengkap,
    person as orang,
    display as tampil,
  }  from "./person.js";

  import Input, { color } from "./textInput/Textinput.js";// menampilkan hasil dari TextInput.js yang dimana berisikan pesan "Ini adalah Text Input"
  
  console.log(namaLengkap, orang);
  
  tampil(orang);
  
  Input();
  console.log(color);