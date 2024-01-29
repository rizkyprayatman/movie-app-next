1.a Perbedaan antara SELECT dan SELECT DISTINCT:

SELECT: untuk memilih kolom atau data dari tabel. <br>
SELECT DISTINCT: untuk memilih nilai unik dari suatu kolom, menghilangkan duplikat.
<br>

1.b. Sorting berdasarkan kolom "tanggal" secara descending:
```
SELECT * FROM nama_tabe ORDER BY tanggal DESC;
```
<br>
2.a. Perbedaan antara WHERE dan HAVING:

WHERE: untuk menyaring baris sebelum hasil agregasi (misalnya COUNT, SUM) dihitung. <br>
HAVING: Digunakan untuk menyaring hasil agregasi setelah dihitung.
<br>

2.b. Query untuk menampilkan data total lebih dari 1000 dari tabel "orders":
```
SELECT * FROM orders WHERE total > 1000;
```
<br>
3.a. Perbedaan antara INNER JOIN dan LEFT JOIN:

INNER JOIN: Menghasilkan baris hanya jika terdapat kecocokan pada kedua tabel. <br>
LEFT JOIN: Menghasilkan semua baris dari tabel di sebelah kiri dan baris yang cocok dari tabel di sebelah kanan.
<br>

3.b. Menggabungkan "customers" dan "orders" berdasarkan kolom "customer_id":
```
SELECT * FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;
```
<br>
4.a. Menghitung rata-rata kolom "harga" dalam tabel "produk": <br>

```
SELECT AVG(harga) AS rata_rata_harga FROM produk;
```
<br>
b. Query untuk jumlah total pesanan setiap pelanggan dalam tabel "orders":

```
SELECT customer_id, COUNT(order_id) AS total_pesanan
FROM orders
GROUP BY customer_id;
```
<br>
5.a. Subquery dan contoh penggunaannya:

Subquery adalah query yang tertanam di dalam query utama. Contoh:

```
SELECT nama_produk FROM produk WHERE harga > (SELECT AVG(harga) FROM produk);
```
<br>
5.b. Subquery untuk produk dengan harga tertinggi dari setiap kategori:

```
SELECT kategori, MAX(harga) AS harga_tertinggi
FROM produk
GROUP BY kategori;
```
<br>

6.a. Transaksi dalam konteks database dan contoh penggunaannya:

Transaksi adalah serangkaian perintah SQL yang dieksekusi sebagai satu kesatuan. Contoh:

```
BEGIN TRANSACTION;
-- perintah SQL
COMMIT;
```
<br>
6.b. Perbedaan antara kunci primer dan kunci asing:

Primary Key: Unik dan mengidentifikasi secara unik setiap baris dalam tabel.<br>
Foreign Key: Menunjuk ke kunci primer di tabel lain, menjadi relasi dengan table lain.

<br>
7.a. Indeks dalam database dan mengapa penting untuk optimasi query:

meningkatkan kecepatan search dan pengurutan data, serta mempercepat eksekusi query
<br>

7.b. Query efisien untuk mengambil data dari tabel dengan jutaan baris:

Gunakan indeks, hanya kolom yang diperlukan.
<br>

8.a. Risiko SQL Injection dan cara menghindarinya:

penyerangan dengan menyisipkan perintah SQL berbahaya, hindari dengan parameterized query atau prepared statement.
<br>

8.b. Enkripsi dalam konteks database dan mengapa penting:

Enkripsi melibatkan mengubah data menjadi format yang tidak dapat dibaca tanpa kunci. <br>
Penting untuk melindungi data sensitif.
<br>

9.a. Perbedaan utama antara database SQL dan NoSQL:

SQL: Tabel berbasis, skema terstruktur.
NoSQL: Struktur fleksibel, tidak memerlukan skema tetap.
<br>

9.b. Kapan memilih NoSQL daripada SQL:

Ketika memerlukan skalabilitas horizontal, atau ketika struktur data bersifat dinamis dan berubah sering. Bisnis  dari sistemnya