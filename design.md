Berikut adalah desain entitas untuk sistem manajemen buku yang mencakup berbagai elemen penting, seperti buku, pengarang, penerbit, dan peminjaman buku.

### 1. **Entitas: Buku**
   - **ID_Buku** (Primary Key): ID unik untuk setiap buku
   - **Judul**: Judul buku
   - **Pengarang_ID** (Foreign Key): ID pengarang (mengacu ke entitas Pengarang)
   - **Penerbit_ID** (Foreign Key): ID penerbit (mengacu ke entitas Penerbit)
   - **Tahun_Terbit**: Tahun penerbitan buku
   - **Jumlah_Halaman**: Jumlah halaman buku
   - **Kategori**: Kategori atau genre buku (misalnya Fiksi, Non-Fiksi, Ilmiah, dll.)
   - **ISBN**: Nomor ISBN (Internasional Standard Book Number)
   - **Stok**: Jumlah buku yang tersedia

### 2. **Entitas: Pengarang**
   - **ID_Pengarang** (Primary Key): ID unik untuk pengarang
   - **Nama**: Nama lengkap pengarang
   - **Tanggal_Lahir**: Tanggal lahir pengarang
   - **Negara_Asal**: Negara asal pengarang
   - **Biografi**: Biografi singkat tentang pengarang

### 3. **Entitas: Penerbit**
   - **ID_Penerbit** (Primary Key): ID unik untuk penerbit
   - **Nama_Penerbit**: Nama penerbit
   - **Alamat**: Alamat penerbit
   - **Telepon**: Nomor telepon penerbit
   - **Email**: Email penerbit

### 4. **Entitas: Anggota (Peminjam)**
   - **ID_Anggota** (Primary Key): ID unik untuk anggota
   - **Nama_Anggota**: Nama lengkap anggota
   - **Alamat**: Alamat lengkap anggota
   - **Telepon**: Nomor telepon anggota
   - **Email**: Email anggota
   - **Tanggal_Registrasi**: Tanggal anggota terdaftar

### 5. **Entitas: Peminjaman**
   - **ID_Peminjaman** (Primary Key): ID unik untuk transaksi peminjaman
   - **ID_Anggota** (Foreign Key): ID anggota yang meminjam buku
   - **ID_Buku** (Foreign Key): ID buku yang dipinjam
   - **Tanggal_Pinjam**: Tanggal peminjaman
   - **Tanggal_Kembali**: Tanggal batas pengembalian
   - **Tanggal_Kembali_Faktual**: Tanggal aktual pengembalian buku
   - **Status**: Status peminjaman (misalnya: Dipinjam, Dikembalikan, Terlambat)
   
### 6. **Entitas: Pengembalian**
   - **ID_Pengembalian** (Primary Key): ID unik untuk transaksi pengembalian
   - **ID_Peminjaman** (Foreign Key): ID peminjaman terkait
   - **Tanggal_Pengembalian**: Tanggal buku dikembalikan
   - **Denda**: Denda yang dikenakan jika pengembalian terlambat

### Relasi antar Entitas:
- **Buku - Pengarang**: Satu pengarang bisa menulis banyak buku, dan satu buku hanya memiliki satu pengarang. Relasi ini adalah *one-to-many* dari Pengarang ke Buku.
- **Buku - Penerbit**: Satu penerbit bisa menerbitkan banyak buku, namun satu buku hanya diterbitkan oleh satu penerbit. Relasi ini adalah *one-to-many* dari Penerbit ke Buku.
- **Anggota - Peminjaman**: Satu anggota bisa meminjam banyak buku, dan satu peminjaman berkaitan dengan satu anggota. Relasi ini adalah *one-to-many* dari Anggota ke Peminjaman.
- **Buku - Peminjaman**: Satu buku bisa dipinjam oleh banyak anggota (dalam waktu yang berbeda), namun satu peminjaman hanya berlaku untuk satu buku. Relasi ini adalah *one-to-many* dari Buku ke Peminjaman.
- **Peminjaman - Pengembalian**: Satu peminjaman hanya memiliki satu pengembalian, relasi ini adalah *one-to-one* antara Peminjaman dan Pengembalian.

### Diagram Relasi (ERD)
Berikut adalah gambaran hubungan antar entitas dalam bentuk diagram ERD:

```
[Penerbit]---<Buku>---<Peminjaman>--<Anggota>
          |
    [Pengarang]---|
```

### Penjelasan:
- **Buku** terhubung dengan **Pengarang** dan **Penerbit** melalui foreign key.
- **Peminjaman** menghubungkan **Anggota** dan **Buku**.
- Setiap **Peminjaman** memiliki kemungkinan untuk memiliki satu **Pengembalian**, yang mencatat tanggal pengembalian dan denda (jika ada).

Desain ini bisa disesuaikan lagi dengan tambahan fitur seperti pengelolaan review buku, histori peminjaman, atau pengelolaan lebih lanjut dari stok buku.

