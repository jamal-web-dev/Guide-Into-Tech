// QUESTIONS 
const questions = [

  {
    step: "Step 1 of 8",

    title: "Which activity sounds most satisfying to you?",

    description:
      "Choose the activity that naturally attracts you the most.",

    options: [
      {
        value: "create",
        title: "🎨 Creating Things",
        desc: "Building websites, apps, or digital products people can use."
      },

      {
        value: "solve",
        title: "⚙️ Solving Problems",
        desc: "Working through technical challenges and complex systems."
      },

      {
        value: "analyze",
        title: "📊 Discovering Insights",
        desc: "Finding patterns and making sense of information."
      }
    ]
  },

  {
    step: "Step 2 of 8",

    title: "When learning something new, what excites you most?",

    description:
      "Think about what keeps you motivated while learning.",

    options: [
      {
        value: "results",
        title: "🚀 Seeing Results Quickly",
        desc: "I enjoy building things and seeing them come alive."
      },

      {
        value: "understanding",
        title: "🧠 Understanding How Things Work",
        desc: "I enjoy learning the mechanics behind systems."
      },

      {
        value: "meaning",
        title: "🔍 Finding Meaning",
        desc: "I enjoy discovering insights and useful information."
      }
    ]
  },

  {
    step: "Step 3 of 8",

    title: "How do you feel about mathematics?",

    description:
      "There is no right or wrong answer here.",

    options: [
      {
        value: "love_math",
        title: "📐 I Enjoy Mathematics",
        desc: "I don't mind calculations and analytical thinking."
      },

      {
        value: "okay_math",
        title: "📘 I'm Comfortable With Basic Math",
        desc: "I can work with numbers but prefer practical work."
      },

      {
        value: "avoid_math",
        title: "🎨 I'd Rather Avoid Math",
        desc: "I prefer creative or user-focused work."
      }
    ]
  },

  {
    step: "Step 4 of 8",

    title: "Which task sounds more enjoyable?",

    description:
      "Choose the activity you would happily spend hours doing.",

    options: [
      {
        value: "design",
        title: "✨ Designing an App",
        desc: "Creating beautiful and easy-to-use interfaces."
      },

      {
        value: "build",
        title: "🛠 Building the Engine",
        desc: "Making sure everything works behind the scenes."
      },

      {
        value: "investigate",
        title: "🔒 Investigating Issues",
        desc: "Finding problems, vulnerabilities, and solutions."
      }
    ]
  },

  {
    step: "Step 5 of 8",

    title: "What frustrates you the least?",

    description:
      "Every tech career has challenges. Which one bothers you least?",

    options: [
      {
        value: "design_iterations",
        title: "🎨 Improving Designs Repeatedly",
        desc: "Tweaking layouts and visuals until they feel right."
      },

      {
        value: "debugging",
        title: "🐞 Debugging Problems",
        desc: "Spending hours fixing technical issues."
      },

      {
        value: "reviewing_data",
        title: "📈 Reviewing Information",
        desc: "Analyzing large amounts of data and reports."
      }
    ]
  },

  {
    step: "Step 6 of 8",

    title: "How would you prefer to spend most of your workday?",

    description:
      "Imagine your ideal day in a tech career.",

    options: [
      {
        value: "creating",
        title: "🚀 Creating and Building",
        desc: "Turning ideas into products people can use."
      },

      {
        value: "optimizing",
        title: "⚙️ Solving and Optimizing",
        desc: "Improving systems and fixing technical challenges."
      },

      {
        value: "researching",
        title: "🔍 Researching and Analyzing",
        desc: "Studying information and making recommendations."
      }
    ]
  },

  {
    step: "Step 7 of 8",

    title: "How much time can you dedicate to learning each week?",

    description:
      "This helps us estimate your learning timeline.",

    options: [
      {
        value: "low_time",
        title: "⏱ Less Than 5 Hours",
        desc: "Learning at a relaxed pace."
      },

      {
        value: "medium_time",
        title: "📚 5–15 Hours",
        desc: "Consistent weekly progress."
      },

      {
        value: "high_time",
        title: "🔥 More Than 15 Hours",
        desc: "Fast-track learning journey."
      }
    ]
  },

  {
    step: "Step 8 of 8",

    title: "How quickly do you usually learn new skills?",

    description:
      "Choose the option that best describes you.",

    options: [
      {
        value: "fast",
        title: "🚀 Fast Learner",
        desc: "I usually pick things up quickly."
      },

      {
        value: "average",
        title: "📘 Moderate Learner",
        desc: "I learn steadily through practice."
      },

      {
        value: "slow",
        title: "🎯 Deep Learner",
        desc: "I prefer mastering concepts before moving on."
      }
    ]
  }

];

const stepText = document.getElementById("stepText");
const title = document.getElementById("questionTitle");
const description = document.getElementById("questionDescription");
const optionsContainer = document.getElementById("optionsContainer");
const progressFill = document.getElementById("progressFill");
const continueBtn = document.getElementById("continueBtn");

let currentStep = 0;
let answers = {};

let careerScores = {

  webDevelopment: 0,

  uiux: 0,

  cybersecurity: 0,

  digitalMarketing: 0,

  dataAnalyst: 0

};

const scoreMap = {

  create: {
    webDevelopment: 3,
    uiux: 3
  },

  solve: {
    cybersecurity: 3,
    webDevelopment: 2
  },

  analyze: {
    dataAnalyst: 3,
    digitalMarketing: 2
  },

  results: {
    webDevelopment: 3,
    uiux: 2
  },

  understanding: {
    cybersecurity: 3,
    dataAnalyst: 2
  },

  meaning: {
    dataAnalyst: 3,
    digitalMarketing: 2
  },

  love_math: {
    dataAnalyst: 3,
    cybersecurity: 2
  },

  okay_math: {
    webDevelopment: 2,
    digitalMarketing: 2
  },

  avoid_math: {
    uiux: 3,
    digitalMarketing: 2
  },

  design: {
    uiux: 4,
    webDevelopment: 2
  },

  build: {
    webDevelopment: 4,
    cybersecurity: 2
  },

  investigate: {
    cybersecurity: 4,
    dataAnalyst: 1
  },

  design_iterations: {
    uiux: 4
  },

  debugging: {
    webDevelopment: 3,
    cybersecurity: 3
  },

  reviewing_data: {
    dataAnalyst: 4,
    digitalMarketing: 2
  },

  creating: {
    webDevelopment: 3,
    uiux: 3
  },

  optimizing: {
    cybersecurity: 3,
    webDevelopment: 2
  },

  researching: {
    dataAnalyst: 3,
    digitalMarketing: 2
  }

};

function calculateCareerScores() {
  Object.values(answers).forEach(answer => {
    const scores = scoreMap[answer];
    if (!scores) return;
    Object.keys(scores).forEach(career => {
      careerScores[career] += scores[career];
    });

  });

}

function getCareerRanking() {
  const careers = Object.entries(careerScores);
  careers.sort((a, b) => b[1] - a[1]);
  return careers;
}

function renderQuestion() {
  const question =
  questions[currentStep];

  stepText.textContent =
  question.step;

  title.textContent =
  question.title;

  description.textContent =
  question.description;

  progressFill.style.width =
  `${((currentStep + 1) / questions.length) * 100}%`;

  optionsContainer.innerHTML = "";

  continueBtn.disabled = true;

  question.options.forEach((option) => {

    const card =
    document.createElement("div");
    card.classList.add("option_card");

    card.innerHTML = `
      <h3>${option.title}</h3>
      <p>${option.desc}</p>
    `;

    card.addEventListener("click", () => {

      document
      .querySelectorAll(".option_card")
      .forEach(card => {
        card.classList.remove("selected");
      });

      card.classList.add("selected");

      answers[currentStep] =
      option.value;

      continueBtn.disabled = false;

    });

    optionsContainer.appendChild(card);

  });

}

continueBtn.addEventListener("click", () => {
  currentStep++;

  if(currentStep < questions.length){
    renderQuestion();
  }else{
    calculateCareerScores();
    const ranking = getCareerRanking();

    const bestMatch = ranking[0];
    const secondMatch = ranking[1];
    const thirdMatch = ranking[2];

    // console.log(careerScores);
    // console.log(ranking);

    const resultData = {
      bestMatch: {
        career: bestMatch[0],
        score: bestMatch[1]
      },

      secondMatch: {
        career: secondMatch[0],
        score: secondMatch[1]
      },

      thirdMatch: {
        career: thirdMatch[0],
        score: thirdMatch[1]
      },

      allScores: careerScores,
      answers

    };
    saveToLocalStorage(resultData);
    // localStorage.setItem("techPathResult", JSON.stringify(resultData));

    startProcessing();
  }

});

renderQuestion();

function saveToLocalStorage(data){
  localStorage.setItem("techPathResult", JSON.stringify(data));
}

// PROCESSING ANSWER

const processingSection = document.getElementById("processingSection");
const processingText = document.getElementById("processingText");
const quizSection = document.querySelector(".quiz_section");
const startBtn = document.querySelector(".start_btn");
const discoveryHero = document.querySelector(".discovery_hero");

function startProcessing(){

  quizSection.style.display = "none";

  processingSection.classList.add(
    "active"
  );

  const messages = [

    "Analyzing your responses...",

    "Mapping your interests...",

    "Matching career paths...",

    "Building your roadmap...",

    "Finalizing recommendations..."

  ];

  let index = 0;

  const interval = setInterval(() => {

    index++;

    if(index < messages.length){

      processingText.textContent =
      messages[index];

    }

  }, 1200);

  setTimeout(() => {

    clearInterval(interval);

    window.location.href = "../pages/result.html"
    console.log(
      "READY FOR RESULTS PAGE"
    );

  }, 6500);

}

startBtn.addEventListener("click", ()=>{
  discoveryHero.style.display = "none";
  quizSection.style.display = "block";
})