let currentQuestion = 0;
const questions = [
  {
    text: "Sinonim Kata Mortalitas = ......",
    options: [
      "A. Angka kematian",
      "B. Angka kelahiran",
      "C. Sebangsa hewan",
      "D. Gerak",
      "E. Pukulan",
    ],
    correct: "A",
    explanation: `Berdasarkan Kamus Besar Bahasa Indonesia (KBBI), mortalitas adalah:
<ul>
  <li>Kodrat bahwa setiap manusia pada akhirnya harus meninggal dunia.</li>
  <li>Angka rata-rata kematian penduduk di suatu daerah atau wilayah.</li>
  <li>Proporsi kematian akibat penyakit tertentu.</li>
  <li>Kematian.</li>
</ul>`,
  },
  {
    text: "Sinonim Kata Fertilitas = ......",
    options: [
      "A. Angka kematian",
      "B. Angka kelahiran",
      "C. Sebangsa hewan",
      "D. Gerak",
      "E. Pukulan",
    ],
    correct: "B",
    explanation: "Fertilitas berarti angka kelahiran dalam suatu populasi.",
  },
];

function renderQuestion() {
  const questionNumberEl = document.getElementById("question-number");
  const questionTextEl = document.getElementById("question-text");
  const optionsEl = document.getElementById("options");
  const explanationEl = document.getElementById("explanation");

  questionNumberEl.textContent = currentQuestion + 1;
  questionTextEl.textContent = questions[currentQuestion].text;

  // Render options
  optionsEl.innerHTML = "";
  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.onclick = () => selectAnswer(String.fromCharCode(65 + index));
    optionsEl.appendChild(button);
  });

  // Hide explanation
  explanationEl.classList.add("hidden");
}

function selectAnswer(selected) {
  const explanationEl = document.getElementById("explanation");
  const explanationTextEl = document.getElementById("explanation-text");

  const isCorrect = selected === questions[currentQuestion].correct;
  explanationTextEl.innerHTML = isCorrect
    ? `Benar! ${questions[currentQuestion].explanation}`
    : `Salah! ${questions[currentQuestion].explanation}`;

  explanationEl.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    alert("Tes selesai!");
  }
}

// Initialize quiz
renderQuestion();
