alert('selamat datang')
var coba = true;
while (coba === true) {
    var nama = prompt(`masukkan nama`)
        kelas = prompt(`masukkan kelas`)
        umur = prompt(`masukkan umur`)

    alert(`hallo ${nama}\nkelas ${kelas}\numur ${umur}`);
    coba = confirm(`coba lagi`);
}

alert('terima kasih');