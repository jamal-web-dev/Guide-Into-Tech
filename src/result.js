document.addEventListener("DOMContentLoaded", () => {

  const result = JSON.parse(localStorage.getItem("techPathResult"));

  const careerTitle = document.getElementById("careerTitle");
  const compatibilityScore = document.getElementById("compatibilityScore");
  const careerMeaning = document.getElementById("careerExplanation");
  const whyRecommendedPath = document.getElementById("career_explanation");
  const altPaths = document.getElementById("altPaths");

  const learningSpeed = document.getElementById("learningSpeed");
  const weeklyHours = document.getElementById("weeklyHours");
  const timeline = document.getElementById("timeline");

  const careerLabels = {
      webDevelopment: "Web Development",
      uiux: "UI/UX Design",
      cybersecurity: "Cybersecurity",
      digitalMarketing: "Digital Marketing",
      dataAnalyst: "Data Analyst"
  };

  const best = result.bestMatch;

  careerTitle.textContent = careerLabels[best.career];
  // recommendedPath.textContent = careerLabels[best.career];

  compatibilityScore.textContent = `${Math.round(best.score * 5)}%`;

  altPaths.innerHTML = "";
  const second = result.secondMatch;
  const third = result.thirdMatch;

  const altList = [second, third];
  altList.forEach(item => {
    const p = document.createElement("p");
    p.textContent = careerLabels[item.career];
    altPaths.appendChild(p);
  });

  //  careerMeaning.textContent = "";
  const explanations = {
    webDevelopment:
      "Web Developers build websites and web applications that users interact with every day.",

    uiux:
      "UI/UX Designers focus on how digital products look and feel, making them easy and enjoyable to use.",

    cybersecurity:
      "Cybersecurity experts protect systems, networks, and applications from digital attacks.",

    digitalMarketing:
      "Digital Marketers help businesses grow online through content, ads, and social media.",

    dataAnalyst:
      "Data Analysts collect and interpret data to help businesses make better decisions."
  };
  careerMeaning.textContent = explanations[best.career];

  const skillsMap = {
    webDevelopment: ["HTML", "CSS", "JavaScript", "React"],
    uiux: ["Figma", "Wireframing", "User Research", "Prototyping"],
    cybersecurity: ["Networking", "Linux", "Ethical Hacking", "Security Tools"],
    digitalMarketing: ["SEO", "Content Creation", "Ads", "Analytics"],
    dataAnalyst: ["Excel", "SQL", "Python", "Data Visualization"]
  };

  const skillsGrid = document.querySelector(".skills_grid");
  skillsGrid.innerHTML = "";

  skillsMap[best.career].forEach(skill => {
    const div = document.createElement("div");
    div.classList.add("skill");
    div.textContent = skill;
    skillsGrid.appendChild(div);
  });

  // console.log(result);

    
  const speedMap = {
    fast: "Fast Learner",
    average: "Moderate Learner",
    slow: "Deep Learner"
  };
  learningSpeed.textContent = speedMap[result.answers[7]];

  const hoursMap = {
    low_time: "Less than 5 hrs/week",
    medium_time: "5–15 hrs/week",
    high_time: "15+ hrs/week"
  };
  weeklyHours.textContent = hoursMap[result.answers[6]];

  function getTimeline(time, speed){
    if(time === "high_time" && speed === "fast"){
      return "4–6 Months";
    }
    if(time === "high_time"){
      return "6–8 Months";
    }
    if(time === "medium_time" && speed === "fast"){
      return "6–8 Months";
    }
    if(time === "medium_time"){
      return "8–12 Months";
    }
    if(time === "low_time"){
      return "12–18 Months";
    }

    return "8–12 Months";
  }
  timeline.textContent = getTimeline(
    result.answers[6],
    result.answers[7]
  );

  const reasonMap = {
    webDevelopment:
    "Your answers show that you enjoy creating things, seeing results quickly, and turning ideas into products people can use.",

    uiux:
    "Your answers suggest strong creative tendencies and an interest in designing experiences that people enjoy using.",

    cybersecurity:
    "Your answers indicate curiosity, investigation skills, and a strong interest in solving technical problems.",

    digitalMarketing:
    "Your answers show interest in communication, strategy, and understanding what motivates people.",

    dataAnalyst:
    "Your answers suggest analytical thinking, pattern recognition, and a desire to understand information deeply."
  };
  
  whyRecommendedPath.textContent = reasonMap[best.career];

});

