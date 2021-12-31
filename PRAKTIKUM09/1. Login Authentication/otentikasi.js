function login(){
    //input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    //logika input
    if(username == 'ahmad2017' && password == 'integrity'){
        ket = 'Login Sukses!';
        alert(ket);
        window.open('login sukses.html');
        
    }
    else{
        ket = 'Login Gagal';
        alert(ket);
    }

}
