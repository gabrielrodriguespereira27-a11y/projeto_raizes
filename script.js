// =====================
// DADOS DO PROJETO
// =====================

const diagnosticos = [
{
icon:"🌾",
title:"Erosão",
text:"Remove a camada fértil do solo e reduz a produtividade."
},
{
icon:"🚜",
title:"Compactação",
text:"Dificulta a infiltração de água e o crescimento das raízes."
},
{
icon:"🧪",
title:"Perda de Nutrientes",
text:"Reduz a fertilidade e exige maior uso de insumos."
},
{
icon:"🐝",
title:"Perda de Biodiversidade",
text:"Afeta o equilíbrio ecológico e a polinização."
}
];

const indicadores = [
{
numero:95,
titulo:"Dos Alimentos",
texto:"Dependem diretamente do solo."
},
{
numero:33,
titulo:"Solos Degradados",
texto:"No planeta apresentam algum grau de degradação."
},
{
numero:20,
titulo:"Mais Matéria Orgânica",
texto:"Pode ser obtida com práticas regenerativas."
}
];

const solucoes = [
{
icon:"🌱",
title:"Plantio Direto",
text:"Protege o solo contra erosão e conserva umidade."
},
{
icon:"🌿",
title:"Cobertura Vegetal",
text:"Mantém nutrientes e protege contra impactos da chuva."
},
{
icon:"🐄",
title:"Integração Lavoura-Pecuária",
text:"Melhora fertilidade e aproveitamento da área."
},
{
icon:"💧",
title:"Captação de Água",
text:"Aumenta a resiliência em períodos secos."
}
];

// =====================
// CARDS
// =====================

function renderCards(data, container){

document.getElementById(container).innerHTML =
data.map(item => `
<div class="card">
<h3>${item.icon} ${item.title}</h3>
<p>${item.text}</p>
</div>
`).join("");

}

renderCards(diagnosticos,"diagnosticCards");
renderCards(solucoes,"solutionsGrid");

// =====================
// DASHBOARD
// =====================

document.getElementById("indicators").innerHTML =
indicadores.map(item => `
<div class="indicator">
<h3 data-target="${item.numero}">0</h3>
<h4>${item.titulo}</h4>
<p>${item.texto}</p>
</div>
`).join("");

function animateCounters(){

document.querySelectorAll(".indicator h3")
.forEach(counter=>{

const target = +counter.dataset.target;

let current = 0;

const increment = target / 50;

const update = ()=>{

current += increment;

if(current >= target){
counter.innerText = target + "%";
return;
}

counter.innerText =
Math.floor(current) + "%";

requestAnimationFrame(update);

};

update();

});

}

animateCounters();

// =====================
// TABS
// =====================

const tabs = {

ambiental:
"Recuperação da biodiversidade, melhoria da qualidade da água e aumento da fertilidade do solo.",

social:
"Fortalecimento das comunidades rurais e geração de oportunidades sustentáveis.",

economico:
"Redução de custos, maior produtividade e aumento da rentabilidade.",

educacional:
"Formação de cidadãos conscientes sobre sustentabilidade."
};

const tabContent =
document.getElementById("tabContent");

tabContent.innerHTML =
tabs.ambiental;

document.querySelectorAll(".tab")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelectorAll(".tab")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

tabContent.innerHTML =
tabs[btn.dataset.tab];

});

});

// =====================
// SIMULADOR
// =====================

document
.getElementById("simulateBtn")
.addEventListener("click",()=>{

let total = 0;

if(document.getElementById("cobertura").checked)
total += 35;

if(document.getElementById("plantioDireto").checked)
total += 30;

if(document.getElementById("integracao").checked)
total += 35;

document.getElementById("simulationResult")
.innerHTML =
`🌱 Saúde do Solo: ${total}%`;

});

// =====================
// CARROSSEL
// =====================

const casos = [

{
titulo:"Plantio Direto no Paraná",
texto:"Redução significativa da erosão e aumento da produtividade."
},

{
titulo:"Integração Lavoura-Pecuária",
texto:"Recuperação de áreas degradadas e melhoria da fertilidade."
},

{
titulo:"Cobertura Permanente",
texto:"Maior retenção de água e proteção contra erosão."
}

];

let slideAtual = 0;

const carouselTrack =
document.getElementById("carouselTrack");

function renderSlide(){

carouselTrack.innerHTML = `
<div class="slide">
<h3>${casos[slideAtual].titulo}</h3>
<p>${casos[slideAtual].texto}</p>
</div>
`;

}

renderSlide();

document.querySelector(".next")
.addEventListener("click",()=>{

slideAtual++;

if(slideAtual >= casos.length){
slideAtual = 0;
}

renderSlide();

});

document.querySelector(".prev")
.addEventListener("click",()=>{

slideAtual--;

if(slideAtual < 0){
slideAtual = casos.length - 1;
}

renderSlide();

});

// =====================
// FAQ
// =====================

const faqData = [

{
q:"O que é agricultura regenerativa?",
a:"É um conjunto de práticas que recuperam a saúde do solo e dos ecossistemas."
},

{
q:"Ela aumenta a produtividade?",
a:"Sim. Principalmente no médio e longo prazo."
},

{
q:"Ajuda no combate às mudanças climáticas?",
a:"Sim. Favorece a captura de carbono e reduz a degradação ambiental."
}

];

const faqContainer =
document.getElementById("faqContainer");

faqData.forEach(item=>{

const div =
document.createElement("div");

div.className = "faq-item";

div.innerHTML = `
<button class="faq-question">
${item.q}
</button>

<div class="faq-answer">
${item.a}
</div>
`;

faqContainer.appendChild(div);

});

document
.querySelectorAll(".faq-question")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const answer =
btn.nextElementSibling;

answer.style.display =
answer.style.display === "block"
? "none"
: "block";

});

});

// =====================
// QUIZ
// =====================

let pontos = 0;

const score =
document.getElementById("score");

document
.getElementById("startQuiz")
.addEventListener("click",()=>{

document.getElementById("quizContainer")
.innerHTML = `

<div class="card">

<h3>
Qual prática ajuda mais na recuperação do solo?
</h3>

<button class="quiz-option correct">
🌱 Cobertura Vegetal
</button>

<button class="quiz-option">
🔥 Queimada
</button>

<button class="quiz-option">
🧱 Remoção da cobertura natural
</button>

<p id="quizResult"></p>

</div>
`;

document
.querySelector(".correct")
.addEventListener("click",()=>{

pontos += 10;

score.textContent = pontos;

document
.getElementById("quizResult")
.innerHTML =
"✅ Resposta Correta!";

if(pontos >= 10){

document
.getElementById("certificate")
.style.display =
"block";

}

});

});

// =====================
// ACESSIBILIDADE
// =====================

let fontSize = 100;

document
.getElementById("increaseFont")
.addEventListener("click",()=>{

fontSize += 10;

document.body.style.fontSize =
fontSize + "%";

});

document
.getElementById("decreaseFont")
.addEventListener("click",()=>{

fontSize -= 10;

document.body.style.fontSize =
fontSize + "%";

});

document
.getElementById("contrastBtn")
.addEventListener("click",()=>{

document.body.classList
.toggle("high-contrast");

});

// =====================
// MODO ESCURO
// =====================

document
.getElementById("darkModeBtn")
.addEventListener("click",()=>{

document.body.classList
.toggle("dark-mode");

});

// =====================
// BARRA DE PROGRESSO
// =====================

window.addEventListener("scroll",()=>{

const scroll =
window.scrollY;

const height =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(scroll / height) * 100;

document.getElementById("progressBar")
.style.width =
progress + "%";

});

// =====================
// SCROLL REVEAL
// =====================

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList
.add("active");

}

});

});

document
.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el));