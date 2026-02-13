// Fonction pour créer des cœurs animés
function createHearts(num = 10) {
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.left = Math.random() * 90 + 'vw';
        heart.style.animationDuration = (3+ Math.random() *3) + 's';
        heart.style.fontSize = (15 + Math.random() * 10) + 'px';
        heart.textContent = '💖';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    }
}

// Crée des cœurs en continu
setInterval(() => createHearts(5), 1000);

// Gestion des pages
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Page 1
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

yesBtn.addEventListener('click', () => showPage('page2'));
noBtn.addEventListener('click', () => {
    message.textContent = "are you sure 😡?think again baby🥺";
    const noBtn = document.getElementById('noBtn');


});

// Page 2
document.getElementById('gameBtn').addEventListener('click', () => {
    startQuiz();
    showPage('quizPage');
});

// Quiz
const quizQuestions = [
    { q: "Si un jour on avait un animal de compagnie, ce serait…", a: ["serpent 🐍", "Un chat paresseux qui dormirait tout le temps 🐱", "tortue 🐢"], correct: 1 },
    { q: "Qui est le plus romantique ?", a: ["Toi 😌", "Moi ", "Les deux 🫶"], correct: 0 },
    { q: "Qu’est-ce qui te manque le plus chez moi ?", a: ["Ton sourire", "Ton regard ", "Tes calins"], correct: -1 } ,
    { q: "Quand on se verra, quelle activité j'aimerais qu’on fasse ensemble ?", a: ["Faire du parachute 🪂", "aucune 😢", "rester a la maison"], correct: 0 },
    { q: "Quand on se dispute (rarement hein 😅), qui fait le premier pas ?", a: ["Moi", "Toi😌", "Personne"], correct: 1 },
    { q: "Est‑ce que tu m’offriras un bouquet de fleurs le jour où on se verra ?", a: ["Non ", "ca seraa ton dernier 😭 ", "Oui, un joli bouquet 💐"], correct: 2 },
    { q: "Qui tu aimes le plus ?", a: ["moi", "ta copine ", "encore moi😌 "], correct: -1 } 
   ];

function startQuiz() {
    const container = document.getElementById('quizContainer');
    const quizMessage = document.getElementById('quizMessage');
    container.innerHTML = '';
    quizMessage.textContent = '';
    let index = 0;

    function showQuestion() {
        quizMessage.textContent = '';
        if (index >= quizQuestions.length) {
            askDate();
            return;
        }
        const q = quizQuestions[index];
        container.innerHTML = `<h2>${q.q}</h2>` +
            q.a.map((ans, i) => `<button class="quizAnswer" data-index="${i}">${ans}</button>`).join('<br>');

        document.querySelectorAll('.quizAnswer').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (q.correct === -1 || parseInt(e.target.dataset.index) === q.correct) {

                    index++;
                    showQuestion();
                } else {
                    quizMessage.textContent = "Noop Vous avez raté la bonne réponse.😄";
                }
            });
        });
    }

    showQuestion();
}

// Date du premier rendez-vous
function askDate() {
    const container = document.getElementById('quizContainer');
    const quizMessage = document.getElementById('quizMessage');
    container.innerHTML = `<h2>Entrez la date de notre premier rendez-vous (ex: 14/02/2023)</h2>
        <input type="text" id="dateInput" placeholder="JJ/MM/AAAA">
        <button id="submitDate">Valider</button>`;
    quizMessage.textContent = '';
    document.getElementById('submitDate').addEventListener('click', () => {
        const date = document.getElementById('dateInput').value;
        if (date === "26/08/2025") {
            showPage('giftPage');
        } else {
            quizMessage.textContent = "Dommage, vous avez raté votre cadeau 😢";
        }
    });
}

// Choix du cadeau
document.querySelectorAll('.giftBtn1, .giftBtn2, .giftBtn3').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const imgSrc = e.target.dataset.img;
        document.getElementById('finalImage').src = imgSrc;
        showPage('finalPage');
    });
});
document.addEventListener('DOMContentLoaded', () => {
// Musique
const bgMusic = document.getElementById('bgMusic');
const yesBtn = document.getElementById('yesBtn'); // Définition du bouton YES

// Effet confettis/cœurs
function launchConfetti() {
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.textContent = Math.random() > 0.5 ? '💖' : '🎉';
        confetti.style.left = Math.random() * 90 + 'vw';
        confetti.style.top = '50vh';
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000);
    }
}

// Quand il clique sur YES → musique + confettis + page2
yesBtn.addEventListener('click', () => {
    bgMusic.currentTime = 0;       // remet la musique au début
    bgMusic.play().catch(() => {}); // lance la musique

    launchConfetti();   // effet confettis/cœurs
    showPage('page2');  // passer à la page 2

    yesBtn.style.display = 'none'; // cacher le bouton après clic
});
//

// Diaporama en boucle des 6 photos quand on clique sur n'importe quel cadeau
      const finalPage = document.getElementById("finalPage");
    const page1 = document.getElementById("page1");
    const finalImage = document.getElementById("finalImage");

    const images = [
        "img/photo1.jpg",
        "img/photo2.jpg",
        "img/photo3.jpg",
        "img/photo4.jpg",
        "img/photo5.jpg",
        "img/photo6.jpg",
        "img/photo7.jpg",
        "img/photo8.jpg",
        "img/photo10.jpg",
        "img/photo11.jpg",
        "img/photo12.jpg",
        "img/photo13.jpg",
        "img/photo14.jpg",
        "img/photo15.jpg",
        "img/photo16.jpg",
        "img/photo17.jpg",
        "img/photo19.jpg",
        "img/photo20.jpg"
    ];

    document.querySelectorAll(".giftBtn1, .giftBtn2, .giftBtn3").forEach(btn => {
    btn.addEventListener("click", () => {
        page1.classList.remove("active");
        finalPage.classList.add("active");

        let index = 0;
        finalImage.src = images[index];
        finalImage.style.animation = "popInPhoto 0.6s ease-out";

        // Si un interval existait déjà, on le nettoie
        if (window.sliderInterval) clearInterval(window.sliderInterval);

        // Boucle diaporama
        window.sliderInterval = setInterval(() => {
            index = (index + 1) % images.length;

            // Reset animation pour relancer l'effet petit -> grand
            finalImage.style.animation = "none";
            finalImage.offsetHeight; // force reflow pour relancer animation
            finalImage.src = images[index];
            finalImage.style.animation = "popInPhoto 0.6s ease-out";
        }, 1500); // 1,5 seconde par photo
    });
});

    });



