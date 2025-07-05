// Mengambil elemen dari HTML
const video = document.getElementById('video');
const snapButton = document.getElementById('snap');
const canvas = document.getElementById('canvas');
const downloadLink = document.getElementById('downloadLink');
const context = canvas.getContext('2d');

// Fungsi untuk mengakses kamera
async function startCamera() {
    try {
        // Meminta akses ke kamera video
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
        video.play();
    } catch (err) {
        console.error("Oops, terjadi kesalahan!", err);
        alert("Tidak bisa mengakses kamera. Pastikan Anda memberikan izin.");
    }
}

// Event listener untuk tombol "Ambil Foto"
snapButton.addEventListener('click', () => {
    // Menggambar frame video saat ini ke canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Mengubah gambar di canvas menjadi format data URL (PNG)
    const dataUrl = canvas.toDataURL('image/png');
    
    // Menetapkan data URL sebagai link download
    downloadLink.href = dataUrl;
    downloadLink.download = 'fotoku.png'; // Nama file saat diunduh
    
    // Tampilkan link download
    downloadLink.classList.remove('hidden');
});

// Mulai kamera saat halaman dimuat
startCamera();
