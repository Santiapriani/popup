var makanan = {
    namaDepan : "nasi",
    namaBelakang : "goreng",

    tampilkan : function () {
        console.log(`Nama ${this.namaDepan} ${this.namaBelakang}`); 
    }
}

console.log(makanan.namaDepan)
makanan.tampilkan()