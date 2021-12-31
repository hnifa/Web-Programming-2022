function hasil(){
    //menu select
    let hewan = document.getElementById('hewan').value;
    //option
    let kelinci = document.getElementById("kelinci").value;
    let kuda = document.getElementById("kuda").value;
    let merak = document.getElementById("merak").value;
    let harimau = document.getElementById("harimau").value;
    let beruangKutub = document.getElementById("beruangKutub").value;
    let flamingo = document.getElementById("flamingo").value;
    let rusa = document.getElementById("rusa").value;
    let pandaMerah = document.getElementById("pandaMerah").value;
    let kuraKura = document.getElementById("kuraKura").value;
    //hasil gambar
    let gambar = document.getElementById('gambar');

    //logika
    if(hewan == kelinci){
        alert('Ini gambar kelinci');
        gambar.src = 'img/kelinci.jpg'; 
    }
    else if(hewan == kuda){
        alert('Ini gambar kuda');
        gambar.src = 'img/kuda.jpg';
    }
    else if(hewan == beruangKutub){
        alert('Ini gambar beruang kutub');
        gambar.src = 'img/beruangKutub.jpg';
    }
    else if(hewan == flamingo){
        alert('Ini gambar flamingo');
        gambar.src = 'img/flamingo.jpg';
    }
    else if(hewan == harimau){
        alert('Ini gambar harimau');
        gambar.src = 'img/harimau.jpg';
    }
    else if(hewan == kuraKura){
        alert('Ini gambar kura-kura');
        gambar.src = 'img/kuraKura.jpg';
    }
    else if(hewan == merak){
        alert('Ini gambar merak');
        gambar.src = 'img/merak.jpg';
    }
    else if(hewan == pandaMerah){
        alert('Ini gambar panda merah');
        gambar.src = 'img/pandaMerah.jpg';
    }
    else if(hewan == rusa){
        alert('Ini gambar rusa');
        gambar.src = 'img/rusa.jpg';
    }
}
