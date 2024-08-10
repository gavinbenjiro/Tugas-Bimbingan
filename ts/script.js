document.addEventListener('DOMContentLoaded', function () {
    // Data nilai
    var dataNilai = [
        { matkul: 'Algoritma Pemrograman', nilai: 76.82, sks: 4 },
        { matkul: 'Matematika Diskrit', nilai: 82.4, sks: 3 },
        { matkul: 'Pemodelan Basis Data', nilai: 78.56, sks: 3 },
        { matkul: 'Bahasa Indonesia', nilai: 92.03, sks: 2 },
        { matkul: 'Sistem Digital', nilai: 68.45, sks: 3 }
    ];
    var tableBody = document.getElementById('data-nilai');
    dataNilai.forEach(function (item) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(item.matkul, "</td>\n            <td>").concat(item.nilai, "</td>\n            <td>").concat(item.sks, "</td>\n        ");
        tableBody.appendChild(row);
    });
    // Fungsi untuk menghitung poin berdasarkan nilai
    function hitungIndex(nilai) {
        if (nilai > 80) {
            return 4;
        }
        else if (nilai > 70 && nilai <= 80) {
            return 3.5;
        }
        else if (nilai > 65 && nilai <= 70) {
            return 3;
        }
        else if (nilai > 60 && nilai <= 65) {
            return 2.5;
        }
        else if (nilai > 50 && nilai <= 60) {
            return 2;
        }
        else if (nilai > 40 && nilai <= 50) {
            return 1;
        }
        else {
            return 0;
        }
    }
    // Fungsi untuk menghitung IPK
    function hitungIPK(dataNilai) {
        var jumlahPoin = 0;
        var jumlahSks = 0;
        dataNilai.forEach(function (item) {
            var poin = hitungIndex(item.nilai) * item.sks;
            jumlahPoin += poin;
            jumlahSks += item.sks;
        });
        return jumlahPoin / jumlahSks;
    }
    // Menghitung dan menampilkan IPK
    var ipk = hitungIPK(dataNilai);
    var ipkTertampil = document.getElementById('data-ipk');
    ipkTertampil.textContent = ipk.toFixed(2);
    // Formulir keluhan
    var formKeluhan = document.getElementById('form-keluhan');
    formKeluhan.addEventListener('submit', function (event) {
        event.preventDefault();
        var nama = document.getElementById('nama').value;
        var email = document.getElementById('email').value;
        var nim = document.getElementById('nim').value;
        var matkul = document.getElementById('matkul').value;
        var keluhan = document.getElementById('keluhan').value;
        alert("Terimakasih... \nNama : ".concat(nama, " \nEmail : ").concat(email, " \nNIM : ").concat(nim, " \nKeluhan anda untuk mata kuliah ").concat(matkul, " berhasil dikirim!! \n\nKeluhan: ").concat(keluhan));
        formKeluhan.reset();
    });
});
