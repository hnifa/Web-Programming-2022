function tiket(){
    //inputan
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var jam = document.getElementById('jam').value;
    var tujuan = document.getElementById('tujuan').value;
    var tiket = document.getElementById('tiket').value;
    //logika
    var number = /^[0-9]+$/;
    if (nama == "") {
        document.getElementById('nama').focus();
        return false;
    }
    else if (email == "") {
        document.getElementById('email').focus();
        return false;
    }
    else if  (jam == "") {
        document.getElementById('jam').focus();
        return false;
    }
    else if (tujuan == "") {
        document.getElementById('tujuan').focus();
        return false;
    }
    else if (tiket == "" && !jumlah.match(number)) {
        document.getElementById('tiket').focus();
        return false;
    } 
    else {
        document.getElementById('hasil').innerHTML = 'TIKET'
        document.getElementById("hasil_nama").innerHTML = "Nama : " + nama;
        document.getElementById("hasil_email").innerHTML = "Email : " + email;
        document.getElementById("hasil_jam").innerHTML = "Jam Keberangkatan : " + jam;
        document.getElementById("hasil_tujuan").innerHTML = "Tujuan Keberangkatan : " + tujuan;
        document.getElementById("hasil_tiket").innerHTML = "Jumlah tiket : " + tiket;
        return false;
    }
}