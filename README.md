# Headers-Convert

**Headers-Convert** adalah aplikasi berbasis web yang memungkinkan pengguna untuk mengonversi header HTTP yang biasa digunakan dalam permintaan API atau konfigurasi server ke dalam format objek header yang lebih mudah dibaca dan digunakan dalam kode. Aplikasi ini dibangun menggunakan HTML, CSS, JavaScript untuk antarmuka pengguna, dan Flask untuk backend Python.

Proyek ini dirancang untuk membantu pengembang yang bekerja dengan API atau yang perlu menangani header HTTP dalam pengkodean mereka. Dengan menggunakan aplikasi ini, Anda bisa mengonversi header HTTP mentah ke dalam objek header yang terstruktur untuk penggunaan lebih lanjut.

## Fitur
- Mengonversi header HTTP ke format objek header Python.
- Antarmuka pengguna yang responsif dan mudah digunakan.
- Dibangun dengan Flask di backend dan HTML/CSS/JS di frontend.

## Teknologi yang Digunakan
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Pustaka CSS**: Google Fonts (Montserrat)

## Cara Kerja
1. Pengguna memasukkan header HTTP dalam format baris per baris pada area input.
2. Ketika tombol "Convert Headers" ditekan, skrip JavaScript akan mengonversi input tersebut menjadi format objek header Python yang siap digunakan dalam kode.
3. Hasil konversi ditampilkan di dua kolom terpisah: satu untuk objek header Python dan satu lagi untuk hasil yang diformat.

## Cara Menjalankan

### Persyaratan
- **Python 3.x** (disarankan versi terbaru)
- **Flask** (framework web Python)

### Instalasi dan Persiapan
1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/Fajarrrrky/Headers-Convert.git
   cd Headers-Convert
   ```

2. **Jika Anda belum menginstal Flask, lakukan instalasi dengan:**
   ```bash
   pip install flask
   ```
3. **Untuk menjalankan aplikasi, gunakan perintah berikut:**
   ```bash
   python app.py
   ```
   Aplikasi akan berjalan di server lokal dan dapat diakses di http://127.0.0.1:5000/.
