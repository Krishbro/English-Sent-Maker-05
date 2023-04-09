const sentences = [
  { english: 'A car hit me.', sinhala: '01. කාර් එකක් මාව හැප්පුවා.' },
  { english: 'Tell me the truth.', sinhala: '02. මට ඇත්ත කියන්න.' },
  { english: 'I accept the risk.', sinhala: '03.මම අවදානම ගන්නවා.' },
  { english: 'Call me if you need my help.', sinhala: '04. ඔයාට මගෙන් උදව් අවශ්‍යනම් මට කතා කරන්න.' },
  { english: 'Tell me about your future dream.', sinhala: '05. ඔබේ අනාගත සිහිනය ගැන මට කියන්න.' },
  { english: 'She decided to call police.', sinhala: '06. ඇය පොලිසියට කතා කරන්න තීරනය කලා.' },
  { english: 'Actually, I love my job.', sinhala: '07. ඇත්තටම මම මගේ රැකියාවට ආදරෙයි.' },
  { english: 'The principle admired his talent.', sinhala: '08. විදුහල්පතිතුමා ඇගේ දක්ශතා අගය කලා.' },
  { english: 'Actually, I feel bad for kamal.', sinhala: '09. ඇත්තටම මට කමල් ගැන දුකකයි.' },
  { english: 'I accused him of cheating.', sinhala: '10. මම ඔහුට වංචා කළ බවට චෝදනා කළා.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://krishbro.github.io/English-Sent-Maker-06/";
});
