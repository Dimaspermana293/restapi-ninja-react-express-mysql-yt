# REST API + Ninja CRUD - MERN Stack Project
![BK-REST API + CRUD MERN](https://github.com/user-attachments/assets/426a2548-184d-47f6-83b2-53ccd7af25cd)

## Deskripsi
Proyek ini adalah implementasi REST API + CRUD menggunakan MERN Stack (React, Node, Express) dan MySQL sebagai basis datanya. Proyek ini dibuat sebagai studi kasus untuk mengelola data Ninja yang meliputi Nama, Klan, Jurus, dan Asal.

## Tutorial Backend
https://youtu.be/Nt_Ax-4TNA4?si=7mUU_4B-uitFZQi4

## Fitur
- Membuat, Membaca, Mengupdate, dan Menghapus data Ninja.
- Field Ninja: Nama, Klan, Jurus, dan Asal.

## Spesifikasi Database
- Nama Database: **db_ninja**
- **id** (INT) (PK) (AI) (NN)
- **nama** (VARCHAR 100) (NN)
- **klan** (VARCHAR 100) (NN)
- **jurus** (VARCHAR 100) (NN)
- **asal** (VARCHAR 100) (NN)

## Teknologi yang Digunakan
- **Frontend:** React, Axios, React Router DOM
- **Backend:** Node.js, Express.js, MySQL
- **Database:** MySQL

## Instalasi

### Backend
1. Clone repository ini.
   ```bash
   git clone https://github.com/Dimaspermana293/restapi-ninja-react-express-mysql-yt
3. Navigasi ke direktori backend.
4. Install dependencies dengan menjalankan:
   ```bash
   npm install express nodemon mysql2 cors
5. Jalankan server backend.
   ```bash
   npm start

## Frontend
1. Navigasi ke direktori frontend.
2. Install dependencies dengan menjalankan:
   ```bash
    npm install axios react-router-dom
3. Jalankan aplikasi frontend dengan:
    ```bash
    npm run dev

## Struktur Proyek
- **Backend:** Berisi semua kode untuk server API dan Database.
- **Frontend:** Berisi kode React untuk antarmuka pengguna dan komunikasi dengan API.
