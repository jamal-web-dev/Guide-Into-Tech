document.addEventListener("DOMContentLoaded", () => {

  const result = JSON.parse(localStorage.getItem("techPathResult"));

  const careerTitle = document.getElementById("careerTitle");
  const compatibilityScore = document.getElementById("compatibilityScore");
  const careerMeaning = document.getElementById("careerExplanation");
  const recommendedPath = document.getElementById("recommendedPath");
  const altPaths = document.getElementById("altPaths");


  const best = result.bestMatch;
  careerTitle.textContent = careerLabels[best.career];
  recommendedPath.textContent = careerLabels[best.career];

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
   careerMeaning.textContent = "";
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


});
const careerLabels = {
  webDevelopment: "Web Development",
  uiux: "UI/UX Design",
  cybersecurity: "Cybersecurity",
  digitalMarketing: "Digital Marketing",
  dataAnalyst: "Data Analyst"
};