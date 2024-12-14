// // script.js

// // Contoh data untuk pembahasan (bisa diganti sesuai soal)
// const pembahasanData = [
//   {
//     nomor: 1,
//     jawabanBenar: "A",
//     penjelasan:
//       "Jawaban A benar karena mortalitas berarti 'angka kematian'. Pilihan lain tidak sesuai dengan konteks makna.",
//   },
//   {
//     nomor: 2,
//     jawabanBenar: "B",
//     penjelasan:
//       "Jawaban B benar karena sesuai dengan definisi istilah dalam soal.",
//   },
// ];

// // Fungsi untuk mengupdate pembahasan
// let currentIndex = 0;

// function updatePembahasan() {
//   const currentData = pembahasanData[currentIndex];
//   document.getElementById("soal-nomor").textContent = currentData.nomor;
//   document.getElementById("jawaban-benar").textContent =
//     currentData.jawabanBenar;
//   document.getElementById("penjelasan-text").textContent =
//     currentData.penjelasan;
// }

// // Event listener untuk tombol "Lanjut"
// document.getElementById("lanjut-button").addEventListener("click", () => {
//   currentIndex++;
//   if (currentIndex < pembahasanData.length) {
//     updatePembahasan();
//   } else {
//     alert("Semua soal selesai!");
//     // Di sini Anda bisa mengarahkan pengguna ke halaman lain
//   }
// });

// // Inisialisasi pertama
// updatePembahasan();

// // scripts.js
// document.getElementById("next-button").addEventListener("click", function () {
//   // Logika untuk melanjutkan ke soal berikutnya
//   alert("Melanjutkan ke soal berikutnya...");
//   // Anda bisa mengganti alert dengan logika yang sesuai untuk memuat soal baru.
// });

// scripts.js
// scripts.js
// scripts.js

// scripts.js
// Data soal, jawaban, dan penjelasan
let currentQuestionIndex = 0; // Untuk melacak nomor soal yang sedang ditampilkan

// Data pertanyaan, jawaban, dan penjelasan
const questions = [
  {
    questionText: "Sinonim Kata", // Ubah hanya bagian ini
    mortalitasText: "Mortalitas = ......", // Menambahkan Mortalitas di bawah "Sinonim Kata"
    options: {
      A: "Angka kematian",
      B: "Angka kelahiran",
      C: "Sebangsa hewan",
      D: "Gerak",
      E: "Pukulan",
    },
    correctAnswer: "A",
    explanation: `Berdasarkan Kamus Besar Bahasa Indonesia (KBBI), mortalitas adalah:
Kodrat bahwa setiap manusia pada akhirnya harus meninggal dunia.
Angka rata-rata kematian penduduk di suatu daerah atau wilayah.
Proporsi kematian akibat penyakit tertentu.
Kematian.`,
  },
  // Anda bisa menambahkan lebih banyak pertanyaan di sini
  {
    questionText: "Sinonim Kata",
    mortalitasText: "Vital = ......",
    options: {
      A: "Penting",
      B: "Lama",
      C: "Patah",
      D: "Kecil",
      E: "Tinggi",
    },
    correctAnswer: "A",
    explanation:
      "Vital berarti sangat penting atau esensial. Jadi sinonim yang tepat adalah penting.",
  },

  {
    questionText: "Sinonim Kata",
    mortalitasText: "Nuansa = ......",
    options: {
      A: "Irama",
      B: "Kelangsungan",
      C: "Keseimbangan",
      D: "Perbedaan berat",
      E: "Perbedaan unsur makna",
    },
    correctAnswer: "E",
    explanation: `Nuansa artinya (n) perbedaan yang sangat halus (tentang suara, warna, makna, dan sebagainya; kebenaran, kewaspadaan, atau kemampuan menyatukan adanya pergeseran yang sangat kecil; bernuansa (v) memiliki nuansa.`,
  },

  {
    questionText: "Sinonim Kata",
    mortalitasText: "Andal = ......",
    options: {
      A: "Bebal",
      B: "Terbelakang",
      C: "Dampak",
      D: "Lingkungan",
      E: "Tangguh",
    },
    correctAnswer: "E",
    explanation: `Kata andal berarti dapat dipercaya; terjamin kesanggupannya; kekuatannya; atau kemampuannya. Jadi, sinonim kata andal adalah tangguh, yang berarti sukar dikalahkan; kuat.
`,
  },

  {
    questionText: "Sinonim Kata",
    mortalitasText: "Baku = ......",
    options: {
      A: "Perkiraan",
      B: "Standar",
      C: "Umum",
      D: "Normal",
      E: "Asli",
    },
    correctAnswer: "B",
    explanation: `Kata baku berarti pokok; utama; tolak ukur yang berlaku. Jadi, sinonim dari kata baku adalah standar, yang berarti ukuran tertentu yang dipakai sebagai patokan.`,
  },
];

function displayQuestion() {
  // Ambil pertanyaan saat ini
  const currentQuestion = questions[currentQuestionIndex];

  // Update konten soal
  document.getElementById("question-number").textContent =
    currentQuestionIndex + 1;
  document.getElementById("question-text").textContent =
    currentQuestion.questionText;
  document.getElementById("mortalitas-text").textContent =
    currentQuestion.mortalitasText;

  // Hapus pilihan yang lama
  const optionsContainer = document.querySelector(".options");
  optionsContainer.innerHTML = "";

  // Tambahkan pilihan jawaban
  for (const option in currentQuestion.options) {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = `${option}. ${currentQuestion.options[option]}`;
    button.onclick = () => answerQuestion(option);
    optionsContainer.appendChild(button);
  }
}

function answerQuestion(selectedAnswer) {
  // Tampilkan penjelasan setelah memilih jawaban
  const currentQuestion = questions[currentQuestionIndex];

  // Menampilkan penjelasan dan jawaban yang benar
  document.getElementById("discussion-container").style.display = "block";
  document.getElementById("question-container").style.display = "none";
  document.getElementById("discussion-number").textContent =
    currentQuestionIndex + 1;
  document.getElementById("correct-answer").textContent =
    currentQuestion.correctAnswer;
  document.getElementById("explanation").textContent =
    currentQuestion.explanation;
}

// function nextQuestion() {
//   currentQuestionIndex++;

//   if (currentQuestionIndex < questions.length) {
//     displayQuestion();
//     document.getElementById("discussion-container").style.display = "none";
//     document.getElementById("question-container").style.display = "block";
//   } else {
//     // Jika sudah sampai akhir soal, bisa menunjukkan halaman selesai atau semacamnya
//     alert("Quiz selesai!");
//   }
// }

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById("discussion-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
  } else {
    // Jika sudah sampai akhir soal, arahkan ke home page
    window.location.href = "StatsPage.html"; // Ganti "index.html" dengan URL home page Anda
  }
}

// Inisialisasi dengan soal pertama
displayQuestion();
