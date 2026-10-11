function cekJawaban() {
    const jawaban = document.querySelector('input[name="soal"]:checked');
    const hasil = document.getElementById("hasil");

    if (!jawaban) {
        hasil.textContent = "Pilih jawaban terlebih dahulu.";
    } else if (jawaban.value === "benar") {
        hasil.textContent = "Benar! Jawaban kamu tepat.";
    } else {
        hasil.textContent = "Jawaban kurang tepat. Coba lagi.";
    }
}