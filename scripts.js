// Fonction pour créer des cœurs animés
function createHearts(num = 10) {
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.left = Math.random() * 90 + 'vw';
        heart.style.animationDuration = (1 + Math.random() * 1.5) + 's';
        heart.style.fontSize = (15 + Math.random() * 10) + 'px';
        heart.textContent = '💖';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

// Crée des cœurs en continu
setInterval(() => createHearts(20), 500);

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
    { q: "Quand on se verra, quelle activité j'aimerais qu’on fasse ensemble ?", a: ["Faire du parachute 🪂", "Rien 😢", "Aller aux jeux dans un parc d’attraction 🎢"], correct: 0 },
    { q: "Est‑ce que tu m’offriras un bouquet de fleurs le jour où on se verra ?", a: ["Non ", "Non une seule fleur ca suffit 🌷", "Oui, un très beau bouquet 💐"], correct: 2 }
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
                if (parseInt(e.target.dataset.index) === q.correct) {
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

    // Positions pour chaque image (tu peux ajuster selon ton goût)
    const positions = [
        { top: "10%", left: "5%" },   // coin en haut à gauche
        { top: "10%", left: "70%" },  // coin en haut à droite
        { top: "50%", left: "5%" },   // coin en bas à gauche
        { top: "70%", left: "70%" },  // coin en bas à droite
        { top: "5%", left: "70%" },  // centre
        { top: "40%", left: "70%" },   // milieu droit
        { top: "10%", left: "5%" },   // coin en haut à gauche
        { top: "10%", left: "70%" },  // coin en haut à droite
        { top: "50%", left: "5%" },   // coin en bas à gauche
        { top: "70%", left: "70%" },  // coin en bas à droite
        { top: "5%", left: "70%" },  // centre
        { top: "40%", left: "70%" },   // milieu droit
        { top: "10%", left: "5%" },   // coin en haut à gauche
        { top: "10%", left: "70%" },  // coin en haut à droite
        { top: "50%", left: "5%" },   // coin en bas à gauche
        { top: "70%", left: "70%" },  // coin en bas à droite
        { top: "5%", left: "70%" },  // centre
        { top: "40%", left: "70%" },   // milieu droit
        ];

    document.querySelectorAll(".giftBtn1, .giftBtn2, .giftBtn3").forEach(btn => {
        btn.addEventListener("click", () => {
            page1.classList.remove("active");
            finalPage.classList.add("active");

            let index = 0;
            finalImage.src = images[index];
            finalImage.style.position = "absolute"; // nécessaire pour placer l'image
            finalImage.style.top = positions[index].top;
            finalImage.style.left = positions[index].left;

            // Boucle infinie
            setInterval(() => {
                index = (index + 1) % images.length;
                finalImage.src = images[index];
                finalImage.style.top = positions[index].top;
                finalImage.style.left = positions[index].left;
            }, 1000);
        });
    });
});
