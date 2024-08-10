interface Matkul {
    matkul: string;
    nilai: number;
    sks: number;
}

document.addEventListener('DOMContentLoaded', function() {
    // Data nilai
    const dataNilai: Matkul[] = [
        { matkul: 'Algoritma Pemrograman', nilai: 76.82, sks: 4 },
        { matkul: 'Matematika Diskrit', nilai: 82.4, sks: 3 },
        { matkul: 'Pemodelan Basis Data', nilai: 78.56, sks: 3 },
        { matkul: 'Bahasa Indonesia', nilai: 92.03, sks: 2 },
        { matkul: 'Sistem Digital', nilai: 68.45, sks: 3 }
    ];

    const tableBody = document.getElementById('data-nilai') as HTMLTableSectionElement;
    dataNilai.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.matkul}</td>
            <td>${item.nilai}</td>
            <td>${item.sks}</td>
        `;
        tableBody.appendChild(row);
    });

    // Fungsi untuk menghitung poin berdasarkan nilai
    function hitungIndex(nilai: number): number {
        if (nilai > 80) {
            return 4;
        } else if (nilai > 70 && nilai <= 80) {
            return 3.5;
        } else if (nilai > 65 && nilai <= 70) {
            return 3;
        } else if (nilai > 60 && nilai <= 65) {
            return 2.5;
        } else if (nilai > 50 && nilai <= 60) {
            return 2;
        } else if (nilai > 40 && nilai <= 50) {
            return 1;
        } else {
            return 0;
        }
    }

    // Fungsi untuk menghitung IPK
    function hitungIPK(dataNilai: Matkul[]): number {
        let jumlahPoin = 0;
        let jumlahSks = 0;

        dataNilai.forEach(item => {
            const poin = hitungIndex(item.nilai) * item.sks;
            jumlahPoin += poin;
            jumlahSks += item.sks;
        });

        return jumlahPoin / jumlahSks;
    }

    // Menghitung dan menampilkan IPK
    const ipk = hitungIPK(dataNilai);
    const ipkTertampil = document.getElementById('data-ipk') as HTMLTableCellElement;
    ipkTertampil.textContent = ipk.toFixed(2);

    // Formulir keluhan
    const formKeluhan = document.getElementById('form-keluhan') as HTMLFormElement;
    formKeluhan.addEventListener('submit', function(event: Event) {
        event.preventDefault();

        const nama = (document.getElementById('nama') as HTMLInputElement).value; 
        const email = (document.getElementById('email') as HTMLInputElement).value; 
        const nim = (document.getElementById('nim') as HTMLInputElement).value; 
        const matkul = (document.getElementById('matkul') as HTMLInputElement).value; 
        const keluhan = (document.getElementById('keluhan') as HTMLTextAreaElement).value; 

        alert(`Terimakasih... \nNama : ${nama} \nEmail : ${email} \nNIM : ${nim} \nKeluhan anda untuk mata kuliah ${matkul} berhasil dikirim!! \n\nKeluhan: ${keluhan}`);

        formKeluhan.reset();
    });
});
