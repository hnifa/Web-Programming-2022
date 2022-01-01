function hitung(){
    //ambil inputan
    var uang = document.getElementById("jumlah_uang").value;
    var valas = document.getElementById("jenis_valas").value;
    
    //mata uang
    var dollar_us = document.getElementById('dollar_us').value;
    var dollar_singapore = document.getElementById('dollar_singapore').value;
    var ringgit_malaysia = document.getElementById('ringgit_malaysia').value;
    var yen_jepang = document.getElementById('yen_jepang').value;
    var euro = document.getElementById('euro').value;
    var riyal_arab = document.getElementById('riyal_arab').value;

    //hasil rupiah
    var rupiah = 0;
    if(valas == "Dollar US"){
        rupiah = uang * 9915;
        document.getElementById('rupiah').value = rupiah;
    }
    else if(valas == "Dollar Singapore"){
        rupiah = uang * 13472;
        document.getElementById('rupiah').value = rupiah;
    }
    else if(valas == "Ringgit Malaysia"){
        rupiah = uang * 874;
        document.getElementById('rupiah').value = rupiah;
    }
    else if(valas == "Yen Jepang"){
        rupiah = uang * 120;
        document.getElementById('rupiah').value = rupiah;
    }
    else if(valas == "Euro"){
        rupiah = uang * 15888;
        document.getElementById('rupiah').value = rupiah;
    }
    else{
        rupiah = uang * 3592;
        document.getElementById('rupiah').value = rupiah;
    }
    let area_hasil = document.getElementById("rupiah");
    area_hasil.innerHTML = rupiah
}