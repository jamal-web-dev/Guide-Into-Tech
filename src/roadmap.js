const roadmaps = {
  webDevelopment: {
    label: "Web Development",
    tagline: "Build websites and web applications from scratch.",
    phases: [
      {
        title: "Phase 1: HTML & CSS",
        duration: "4–6 weeks",
        topics: [
          "HTML structure & semantic tags",
          "Forms, inputs & validation",
          "CSS selectors & specificity",
          "Box model & positioning",
          "Flexbox & CSS Grid",
          "Responsive design & media queries",
          "CSS variables & custom properties",
          "Basic transitions & hover effects"
        ],
        tools: ["VS Code", "Chrome DevTools", "CodePen"],
        resources: ["freeCodeCamp HTML/CSS", "MDN Web Docs", "The Odin Project"],
        project: "Build a fully responsive multi-section personal portfolio website",
        outcome: "You can build and style multi-page static websites that look good on all screen sizes"
      },
      {
        title: "Phase 2: JavaScript",
        duration: "6–8 weeks",
        topics: [
          "Variables, data types & operators",
          "Functions, scope & closures",
          "Arrays, objects & destructuring",
          "Loops, conditionals & error handling",
          "DOM selection & manipulation",
          "Events & event listeners",
          "Fetch API, promises & async/await",
          "localStorage & JSON",
          "ES6+ features (arrow functions, spread, modules)"
        ],
        tools: ["Chrome DevTools Console", "Node.js", "VS Code"],
        resources: ["javascript.info", "freeCodeCamp JS", "Eloquent JavaScript (free online)"],
        project: "Build a weather app using the OpenWeather API with search, saved cities, and a 5-day forecast",
        outcome: "You can make any web page fully interactive and pull live data from external APIs"
      },
      {
        title: "Phase 3: React",
        duration: "6–8 weeks",
        topics: [
          "JSX syntax & rendering",
          "Functional components & props",
          "useState & useEffect hooks",
          "Conditional rendering & lists",
          "React Router v6 (multi-page apps)",
          "Context API for global state",
          "Custom hooks",
          "Fetching & displaying API data",
          "Component composition patterns"
        ],
        tools: ["Vite", "React DevTools", "npm / pnpm"],
        resources: ["React official docs (react.dev)", "Scrimba React Course", "Bob Ziroll's React course"],
        project: "Build a multi-page movie or book search app with filtering, routing, and a favourites list",
        outcome: "You can build fully interactive multi-page UIs with React"
      },
      {
        title: "Phase 4: Backend & Databases",
        duration: "5–6 weeks",
        topics: [
          "Node.js runtime & core modules",
          "Express.js routing & middleware",
          "RESTful API design principles",
          "MongoDB with Mongoose (NoSQL)",
          "SQL basics with PostgreSQL",
          "JWT authentication & sessions",
          "Environment variables & .env",
          "CORS, error handling & validation",
          "Connecting a React frontend to a Node API"
        ],
        tools: ["Postman", "MongoDB Atlas", "pgAdmin", "dotenv"],
        resources: ["The Odin Project Node path", "MongoDB University (free)", "Express.js docs"],
        project: "Build a full-stack app (e.g. expense tracker or blog) with a REST API, database, and user authentication",
        outcome: "You can build and deploy full-stack applications that store and retrieve real data"
      },
      {
        title: "Phase 5: Git, Deployment & Performance",
        duration: "3–4 weeks",
        topics: [
          "Git workflow: branches, commits, PRs",
          "GitHub collaboration & code review",
          "Deploying frontend apps (Vercel / Netlify)",
          "Deploying backend APIs (Render / Railway)",
          "Environment variables in production",
          "Lighthouse performance audits",
          "Core Web Vitals basics",
          "Accessibility fundamentals (WCAG)",
          "Basic SEO for web apps"
        ],
        tools: ["Git", "GitHub", "Vercel", "Netlify", "Lighthouse"],
        resources: ["GitHub Learning Lab", "web.dev performance guides", "A11Y Project"],
        project: "Deploy your full-stack project, score 90+ on Lighthouse, and set up a CI workflow with GitHub Actions",
        outcome: "You can ship production-ready projects to the web and maintain code with a team"
      },
      {
        title: "Phase 6: Job Preparation",
        duration: "3–4 weeks",
        topics: [
          "Writing a developer resume & cover letter",
          "GitHub profile & README optimization",
          "JavaScript interview questions (closures, hoisting, async)",
          "React interview questions (reconciliation, hooks rules)",
          "Algorithm basics (arrays, strings, hashmaps)",
          "System design concepts for junior roles",
          "Behavioural interview prep (STAR method)",
          "Networking: LinkedIn & developer communities"
        ],
        tools: ["LeetCode", "LinkedIn", "Glassdoor"],
        resources: ["Tech Interview Handbook (free)", "Blind 75 LeetCode list", "Frontend Interview Handbook"],
        project: "Solve 20 LeetCode easy/medium problems, do 3 mock interviews, and finalize 3 portfolio projects",
        outcome: "You are ready to apply and interview for junior / entry-level developer positions"
      }
    ]
  },

  uiux: {
    label: "UI/UX Design",
    tagline: "Design digital products people love to use.",
    phases: [
      {
        title: "Phase 1: Design Fundamentals",
        duration: "3–4 weeks",
        topics: [
          "Visual hierarchy & layout principles",
          "Color theory & color psychology",
          "Typography: choosing & pairing fonts",
          "Spacing, alignment & the 8px grid",
          "Contrast & accessibility basics",
          "Gestalt principles (proximity, similarity, closure)",
          "Design inspiration & trend awareness",
          "Analysing & critiquing existing designs"
        ],
        tools: ["Figma (free)", "Coolors.co", "Google Fonts", "Dribbble"],
        resources: ["Refactoring UI (book)", "Google Material Design docs", "Nielsen Norman Group articles"],
        project: "Pick 3 real apps with poor UX, redesign one screen each, and document what you improved and why",
        outcome: "You can identify good vs bad design decisions and explain the visual principles behind them"
      },
      {
        title: "Phase 2: Figma Mastery",
        duration: "4–6 weeks",
        topics: [
          "Figma workspace, layers & pages",
          "Frames, groups & sections",
          "Auto layout (padding, gap, direction)",
          "Components & variants",
          "Color styles, text styles & effects",
          "Prototyping & interactive transitions",
          "Boolean operations & vector editing",
          "Grids, columns & layout guides",
          "Inspecting & exporting assets"
        ],
        tools: ["Figma", "FigJam", "Figma Community"],
        resources: ["Figma's official YouTube tutorials", "Designcode.io", "Figma Community templates"],
        project: "Design a complete mobile app (8+ screens) with a working prototype that links all flows",
        outcome: "You can design polished, interactive prototypes in Figma that developers can build from"
      },
      {
        title: "Phase 3: UX Research & Strategy",
        duration: "4–5 weeks",
        topics: [
          "User research methods (interviews, surveys, observation)",
          "Writing a research plan",
          "Synthesising research with affinity mapping",
          "Personas & jobs-to-be-done",
          "User journey & experience mapping",
          "Competitive & comparative analysis",
          "Information architecture & card sorting",
          "Task flows & user flows",
          "Usability testing & heuristic evaluation"
        ],
        tools: ["FigJam", "Maze (free tier)", "Google Forms", "Notion"],
        resources: ["Just Enough Research (book)", "NN/g UX Research articles", "UX Collective (blog)"],
        project: "Conduct 3 user interviews for a problem you want to solve, synthesize findings, and produce a UX research report with personas and journey map",
        outcome: "You can back every design decision with real user data instead of assumptions"
      },
      {
        title: "Phase 4: Design Systems & Handoff",
        duration: "3–4 weeks",
        topics: [
          "Atomic design methodology (atoms → organisms)",
          "Building a reusable component library",
          "Design tokens (color, spacing, typography)",
          "WCAG 2.1 accessibility guidelines",
          "Colour contrast ratios & testing",
          "Motion design & micro-interactions",
          "Figma Dev Mode & developer handoff",
          "Writing design specifications & annotations",
          "Version control for design files"
        ],
        tools: ["Figma", "WebAIM Contrast Checker", "Zeplin (optional)"],
        resources: ["Brad Frost's Atomic Design (free online)", "Figma design system tutorials", "A11Y Project"],
        project: "Build a complete design system in Figma with 20+ components, full documentation, and accessibility annotations",
        outcome: "You can create scalable design systems that developers can implement without ambiguity"
      },
      {
        title: "Phase 5: Case Studies & Portfolio",
        duration: "3–4 weeks",
        topics: [
          "What makes a strong UX case study",
          "Structuring your narrative: problem → research → design → test → result",
          "Writing clearly about your process",
          "Metrics & measuring design impact",
          "Setting up a portfolio website",
          "Presenting designs to stakeholders",
          "Giving and receiving design critique",
          "Building a personal brand as a designer"
        ],
        tools: ["Framer or Webflow for portfolio", "Notion", "Loom (video walkthroughs)"],
        resources: ["UX Portfolio Formula", "Bestfolios.com for inspiration", "UX Collective portfolio guides"],
        project: "Write 2–3 end-to-end case studies covering your full design process and publish them on a portfolio site",
        outcome: "You have a polished portfolio that demonstrates your thinking process, not just your visual output"
      },
      {
        title: "Phase 6: Job Preparation",
        duration: "3–4 weeks",
        topics: [
          "UI/UX job titles & what they mean (Product Designer, UX Researcher, etc.)",
          "Portfolio review: what hiring managers look for",
          "Design challenge prep (take-home & whiteboard)",
          "Walking through your case studies confidently",
          "Soft skills: collaboration with engineers & PMs",
          "Salary research & negotiation",
          "Freelancing vs in-house career paths",
          "Building your network: communities & events"
        ],
        tools: ["LinkedIn", "Dribbble", "Behance"],
        resources: ["UX Design Institute career guides", "Memorisely interview prep", "ADPList mentorship (free)"],
        project: "Apply to 10 roles, complete 2 take-home design challenges, and get feedback from at least one ADPList mentor",
        outcome: "You are ready to interview confidently for junior UI/UX designer or product designer roles"
      }
    ]
  },

  cybersecurity: {
    label: "Cybersecurity",
    tagline: "Protect systems, networks, and data from threats.",
    phases: [
      {
        title: "Phase 1: Networking Foundations",
        duration: "4–5 weeks",
        topics: [
          "OSI model (all 7 layers) & TCP/IP",
          "IP addressing, subnetting & CIDR",
          "DNS, DHCP, HTTP/S & common ports",
          "ARP, MAC addressing & layer 2",
          "Routing & switching concepts",
          "VLANs & network segmentation",
          "Firewalls, NAT & proxy servers",
          "Packet structure & reading captures"
        ],
        tools: ["Wireshark", "Cisco Packet Tracer (free)", "VirtualBox"],
        resources: ["Professor Messer CompTIA Network+ (free YouTube)", "NetworkChuck YouTube", "TryHackMe Pre-Security path"],
        project: "Set up a virtual home lab with 2+ VMs, capture and analyse traffic between them using Wireshark",
        outcome: "You understand exactly how data travels across networks and can read raw packet captures"
      },
      {
        title: "Phase 2: Linux & Command Line",
        duration: "4–5 weeks",
        topics: [
          "Linux distributions (Kali, Ubuntu)",
          "File system navigation & structure",
          "File permissions, ownership & chmod",
          "User & group management",
          "Process management (ps, top, kill)",
          "Networking commands (ping, netstat, ss, curl, wget)",
          "Bash scripting: variables, loops, conditionals",
          "Cron jobs & task scheduling",
          "Package managers (apt) & software installation"
        ],
        tools: ["Kali Linux", "Ubuntu via VirtualBox or WSL2", "Terminal"],
        resources: ["OverTheWire: Bandit", "Linux Journey (linuxjourney.com)", "TryHackMe Linux Fundamentals rooms"],
        project: "Complete all 34 OverTheWire Bandit levels and write up the methodology used for each",
        outcome: "You are fully comfortable working from the command line in a Linux environment"
      },
      {
        title: "Phase 3: Security Concepts & Attacks",
        duration: "5–6 weeks",
        topics: [
          "CIA Triad & core security principles",
          "Threat actors, APTs & attack categories",
          "Malware types (viruses, ransomware, rootkits, RATs)",
          "Social engineering & phishing tactics",
          "Password attacks (brute force, credential stuffing, rainbow tables)",
          "SQL injection, XSS & CSRF explained",
          "Cryptography: symmetric, asymmetric & hashing",
          "PKI, TLS certificates & HTTPS",
          "Vulnerability scanning with Nmap & Nessus Essentials"
        ],
        tools: ["Nmap", "OWASP WebGoat", "Burp Suite Community", "VirusTotal"],
        resources: ["TryHackMe 'Introduction to Cyber Security' path", "OWASP Top 10", "CompTIA Security+ study guide (Mike Chapple)"],
        project: "Deploy DVWA or Metasploitable in your lab, exploit it using the techniques studied, and write a vulnerability report",
        outcome: "You understand the most common attack vectors and how defenders detect and mitigate them"
      },
      {
        title: "Phase 4: Ethical Hacking",
        duration: "5–6 weeks",
        topics: [
          "Penetration testing methodology (recon, scan, exploit, post-exploit, report)",
          "OSINT techniques & passive reconnaissance",
          "Active scanning & service enumeration",
          "Exploitation with Metasploit",
          "Privilege escalation (Linux & Windows)",
          "Web application hacking (Burp Suite workflow)",
          "Password cracking (Hashcat, John the Ripper)",
          "CTF challenge methodology",
          "Writing professional pentest reports"
        ],
        tools: ["Burp Suite", "Metasploit", "Hashcat", "Gobuster", "enum4linux"],
        resources: ["TryHackMe Jr Penetration Tester path", "HackTheBox Starting Point", "TCM Security Practical Ethical Hacking course"],
        project: "Root 10 machines on TryHackMe or HackTheBox and produce a professional pentest report for one of them",
        outcome: "You can conduct a structured penetration test and document findings in a professional format"
      },
      {
        title: "Phase 5: Certifications & Specialisation",
        duration: "4–6 weeks",
        topics: [
          "CompTIA Security+ exam domains in depth",
          "Incident response lifecycle (NIST framework)",
          "SIEM tools & log analysis (Splunk basics)",
          "Threat intelligence & IOCs",
          "SOC analyst daily workflow",
          "Cloud security fundamentals (AWS / Azure)",
          "Compliance frameworks overview (GDPR, ISO 27001, NIST)",
          "Security policy & risk management basics"
        ],
        tools: ["Splunk Free (SIEM)", "AWS Free Tier", "Security+ practice exam tools"],
        resources: ["Professor Messer Security+ (free)", "CompTIA CertMaster Practice", "Cybrary SOC Analyst course"],
        project: "Score 85%+ on a full CompTIA Security+ practice exam and document your home lab setup as a portfolio piece",
        outcome: "You are prepared to sit the CompTIA Security+ exam and work in a SOC environment"
      },
      {
        title: "Phase 6: Job Preparation",
        duration: "3–4 weeks",
        topics: [
          "Cybersecurity job roles explained (SOC Analyst, Pentester, Blue Team, GRC)",
          "Writing a security-focused resume",
          "LinkedIn & professional presence in the security community",
          "Bug bounty hunting: platforms, scope & responsible disclosure",
          "CTF competitions for skill demonstration",
          "Entry-level salary expectations by role",
          "Common interview questions for security roles",
          "Career progression: certifications roadmap (CEH, OSCP, CISSP)"
        ],
        tools: ["HackerOne", "Bugcrowd", "CTFtime.org"],
        resources: ["TCM Security career roadmap", "r/netsec & r/AskNetsec", "Cybersecurity Career Guide (SANS)"],
        project: "Submit your first valid bug bounty report on HackerOne or complete a full CTF competition and write a public writeup",
        outcome: "You are ready to apply for entry-level SOC analyst, junior pentester, or security analyst positions"
      }
    ]
  },

  digitalMarketing: {
    label: "Digital Marketing",
    tagline: "Grow businesses online through strategy and content.",
    phases: [
      {
        title: "Phase 1: Marketing Foundations",
        duration: "3–4 weeks",
        topics: [
          "What digital marketing is & how channels connect",
          "PESO model (Paid, Earned, Shared, Owned media)",
          "Customer journey & marketing funnel (TOFU/MOFU/BOFU)",
          "Buyer personas & target audience research",
          "Brand identity: voice, tone & positioning",
          "SMART goal setting for marketing",
          "Competitor analysis & market research",
          "Value proposition development"
        ],
        tools: ["Google Trends", "SimilarWeb (free)", "Canva"],
        resources: ["HubSpot Academy Marketing Fundamentals (free cert)", "Google Digital Garage (free cert)", "Seth Godin's blog"],
        project: "Write a full marketing audit for a real local business: identify their audience, channels, strengths, and 3 clear improvement opportunities",
        outcome: "You can analyse any business's marketing strategy and identify where the gaps are"
      },
      {
        title: "Phase 2: SEO & Content Marketing",
        duration: "4–5 weeks",
        topics: [
          "How search engines crawl, index & rank",
          "Keyword research: intent, volume & difficulty",
          "On-page SEO (title tags, meta descriptions, headings, internal links)",
          "Technical SEO basics (site speed, mobile, crawlability)",
          "Off-page SEO & backlink strategy",
          "Content strategy & editorial calendars",
          "Writing SEO-optimized long-form content",
          "Google Search Console setup & insights",
          "Google Analytics 4: traffic sources & behaviour"
        ],
        tools: ["Google Search Console", "Ubersuggest or Ahrefs Free", "Yoast SEO", "Google Analytics 4"],
        resources: ["Ahrefs SEO course (free)", "Moz Beginner's Guide to SEO", "HubSpot Content Marketing certification"],
        project: "Create a 3-month content plan for a niche, publish 5 SEO-optimized articles, and track rankings after 4 weeks",
        outcome: "You can research keywords, plan content, and create articles that rank in Google"
      },
      {
        title: "Phase 3: Paid Advertising",
        duration: "4–5 weeks",
        topics: [
          "Google Ads structure: campaigns, ad groups & keywords",
          "Match types, negative keywords & Quality Score",
          "Search, Display & Shopping campaigns",
          "Bidding strategies (manual CPC vs tROAS vs tCPA)",
          "Meta Ads Manager: objectives & campaign structure",
          "Facebook & Instagram audience targeting",
          "Custom audiences, lookalikes & retargeting",
          "Writing ad copy that converts",
          "A/B testing creatives & audiences",
          "Reading & acting on ad performance reports"
        ],
        tools: ["Google Ads", "Meta Ads Manager", "Google Tag Manager"],
        resources: ["Google Skillshop (free Google Ads cert)", "Meta Blueprint (free cert)", "HubSpot Ads certification"],
        project: "Run a real Google Ads or Meta Ads campaign with a £10–£20 budget, optimise it mid-flight, and write a performance report",
        outcome: "You can set up, launch, and optimise paid campaigns on Google and Meta"
      },
      {
        title: "Phase 4: Social Media & Email Marketing",
        duration: "3–4 weeks",
        topics: [
          "Platform strategy: Instagram, LinkedIn, TikTok & X",
          "Content pillars & consistent posting systems",
          "Scheduling, batching & repurposing content",
          "Community management & engagement tactics",
          "Influencer marketing & partnerships basics",
          "Email list building with lead magnets",
          "Writing welcome sequences & nurture flows",
          "Subject line optimisation & deliverability",
          "Open rates, CTR & A/B testing emails"
        ],
        tools: ["Mailchimp (free tier)", "Buffer or Later", "Canva", "Notion for content planning"],
        resources: ["Mailchimp Academy", "ConvertKit learning resources", "Later's social media blog"],
        project: "Build an email list using a lead magnet, then send an automated 5-email welcome sequence and report on the results",
        outcome: "You can grow an audience via social media and convert followers into an engaged email list"
      },
      {
        title: "Phase 5: Analytics & Conversion Optimisation",
        duration: "3–4 weeks",
        topics: [
          "Google Analytics 4 deep dive (events, conversions, audiences, funnels)",
          "UTM parameters & campaign tracking",
          "Conversion rate optimisation (CRO) principles",
          "Heatmaps, scroll maps & session recordings",
          "Landing page best practices",
          "Attribution models (last click, linear, data-driven)",
          "Building marketing dashboards",
          "Presenting data & insights to stakeholders",
          "KPIs for each marketing channel"
        ],
        tools: ["Google Analytics 4", "Hotjar (free tier)", "Looker Studio (free)"],
        resources: ["Google Analytics Academy (free cert)", "CXL Institute free courses", "Hotjar UX guides"],
        project: "Build a live Looker Studio dashboard tracking traffic, conversion, and ROI for a real or sample business, and present your findings",
        outcome: "You can measure every stage of a marketing funnel and make data-driven decisions to improve it"
      },
      {
        title: "Phase 6: Portfolio & Career",
        duration: "3–4 weeks",
        topics: [
          "Building a digital marketing portfolio with results",
          "Writing case studies: show the data, not just the work",
          "Freelancing: pricing, proposals & client management",
          "Finding clients on Upwork, LinkedIn & direct outreach",
          "In-house roles vs agency vs freelance comparison",
          "Common interview questions & campaigns to discuss",
          "Staying current: newsletters, podcasts & communities",
          "Specialisation options: SEO, Paid, Email, Content, Social"
        ],
        tools: ["LinkedIn", "Upwork", "Personal website (Webflow or Notion)"],
        resources: ["Digital Marketing Institute career guides", "Marketing Brew newsletter", "r/digital_marketing"],
        project: "Land one paid or pro bono marketing project, deliver measurable results, and document it as a case study",
        outcome: "You are ready to apply for marketing coordinator, SEO specialist, or paid media analyst roles — or start freelancing"
      }
    ]
  },

  dataAnalyst: {
    label: "Data Analysis",
    tagline: "Turn raw data into insights that drive decisions.",
    phases: [
      {
        title: "Phase 1: Spreadsheet Mastery",
        duration: "3–4 weeks",
        topics: [
          "Excel & Google Sheets navigation & shortcuts",
          "Core formulas (SUM, AVERAGE, COUNT, IF, IFERROR)",
          "Lookup functions (VLOOKUP, HLOOKUP, INDEX-MATCH, XLOOKUP)",
          "Absolute vs relative cell references",
          "Data validation & dropdown lists",
          "PivotTables & PivotCharts",
          "Conditional formatting",
          "Data cleaning in spreadsheets (deduplication, trim, text functions)",
          "Named ranges & structured tables",
          "Basic statistical functions (STDEV, CORREL, PERCENTILE)"
        ],
        tools: ["Microsoft Excel", "Google Sheets"],
        resources: ["ExcelJet.net", "Chandoo.org", "Kaggle Spreadsheet course"],
        project: "Download a real sales dataset from Kaggle, clean it, create 3 pivot summaries answering business questions, and build a one-page dashboard",
        outcome: "You can clean, analyse, and visualise structured data in spreadsheets without writing code"
      },
      {
        title: "Phase 2: SQL",
        duration: "4–5 weeks",
        topics: [
          "Database concepts: tables, primary keys & foreign keys",
          "SELECT, WHERE, ORDER BY & LIMIT",
          "Aggregate functions: COUNT, SUM, AVG, MIN, MAX",
          "GROUP BY & HAVING",
          "INNER, LEFT, RIGHT & FULL JOINs",
          "Subqueries & nested queries",
          "CTEs (WITH clause) for readable queries",
          "Window functions: ROW_NUMBER, RANK, LAG, LEAD",
          "Data types, NULL handling & COALESCE",
          "Query optimisation basics (indexes & EXPLAIN)"
        ],
        tools: ["DB Browser for SQLite", "PostgreSQL + pgAdmin", "Mode Analytics (free) or BigQuery Sandbox"],
        resources: ["SQLZoo (interactive)", "Mode SQL Tutorial", "W3Schools SQL reference"],
        project: "Write 15+ queries against a public dataset (e.g. Stack Overflow or NYC taxi trips) that answer real business questions, covering JOINs, CTEs, and window functions",
        outcome: "You can extract, join, and aggregate data from any relational database"
      },
      {
        title: "Phase 3: Python for Data",
        duration: "5–6 weeks",
        topics: [
          "Python basics: variables, loops, functions, list comprehensions",
          "NumPy: arrays, vectorised operations & broadcasting",
          "Pandas: Series & DataFrames",
          "Reading CSV, Excel & JSON files",
          "Filtering, sorting & grouping with Pandas",
          "Merging, joining & reshaping DataFrames",
          "Handling missing values & duplicates",
          "String & datetime manipulation",
          "Exploratory data analysis (EDA) workflow",
          "Descriptive statistics with Pandas"
        ],
        tools: ["Jupyter Notebook or Google Colab", "Anaconda / pip", "VS Code with Python extension"],
        resources: ["Kaggle Learn: Python & Pandas (free)", "Corey Schafer Python tutorials (YouTube)", "Python for Data Analysis — Wes McKinney (book)"],
        project: "Complete a full EDA on a Kaggle dataset: load, clean, explore, identify patterns, and summarise 5 key business insights in a Jupyter notebook",
        outcome: "You can write Python to analyse any dataset, clean messy data, and surface meaningful insights"
      },
      {
        title: "Phase 4: Data Visualisation",
        duration: "3–4 weeks",
        topics: [
          "Principles of data visualisation (choosing the right chart type)",
          "Colour palettes, accessibility & chart clutter",
          "Matplotlib: figures, axes, chart types & customisation",
          "Seaborn: statistical visualisations",
          "Plotly: interactive charts",
          "Tableau Desktop: interface & connecting data sources",
          "Calculated fields & Tableau LOD expressions",
          "Tableau dashboards & stories",
          "Power BI basics: data model, relationships & DAX intro",
          "Storytelling with data: structure & narrative"
        ],
        tools: ["Tableau Public (free)", "Power BI Desktop (free)", "Matplotlib / Seaborn / Plotly"],
        resources: ["Storytelling with Data — Cole Knaflic (book)", "Tableau Public tutorials", "Microsoft Power BI learning path"],
        project: "Build a public Tableau or Power BI dashboard on a dataset you find interesting — include at least 5 charts, filters, and a written narrative of insights",
        outcome: "You can turn raw numbers into clear, compelling visual stories that non-technical stakeholders can understand"
      },
      {
        title: "Phase 5: Statistics & Business Analytics",
        duration: "4–5 weeks",
        topics: [
          "Descriptive statistics: mean, median, mode, standard deviation, skew",
          "Probability fundamentals",
          "Normal, binomial & Poisson distributions",
          "Hypothesis testing: t-test, chi-square, p-values",
          "Correlation vs causation",
          "A/B test design & sample size calculation",
          "Linear regression: interpretation & assumptions",
          "Cohort analysis & retention analysis",
          "Funnel analysis & conversion tracking",
          "Intro to machine learning concepts (no coding)"
        ],
        tools: ["Python (scipy, statsmodels, sklearn)", "Google Colab"],
        resources: ["StatQuest with Josh Starmer (YouTube)", "Khan Academy Statistics", "Practical Statistics for Data Scientists (book)"],
        project: "Design, simulate, and analyse an A/B test using Python — calculate significance, interpret results, and write a recommendation for stakeholders",
        outcome: "You can apply statistical thinking to real business problems and avoid common analytical pitfalls"
      },
      {
        title: "Phase 6: Portfolio & Job Preparation",
        duration: "3–4 weeks",
        topics: [
          "Building a data portfolio on GitHub",
          "Writing strong project READMEs with context & methodology",
          "SQL interview questions (window functions, optimisation, writing complex queries)",
          "Python interview questions (Pandas, data structures)",
          "Case study interviews: structured problem-solving approach",
          "Business acumen: translating data to decisions",
          "Resume for data analyst roles",
          "LinkedIn optimisation & cold outreach",
          "Common tools employers expect (Excel, SQL, Python, Tableau/Power BI)"
        ],
        tools: ["GitHub", "LinkedIn", "StrataScratch", "LeetCode (Database section)"],
        resources: ["Ace the Data Science Interview (book)", "StrataScratch practice problems", "Data Interview Questions (datainterviewqs.com)"],
        project: "Solve 30 SQL problems on StrataScratch, publish your 3 best analysis projects on GitHub, and write a case study walkthrough of your favourite one",
        outcome: "You are ready to interview and land an entry-level data analyst position"
      }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const result = JSON.parse(localStorage.getItem("techPathResult"));

  if (!result) {
    window.location.replace("quiz.html");
    return;
  }

  const careerKey = result.bestMatch.career;
  const data = roadmaps[careerKey] || roadmaps.webDevelopment;

  const name = localStorage.getItem("userName");
  const titleEl = document.getElementById("roadmapTitle");
  const badgeEl = document.querySelector(".roadmap_hero .badge");

  titleEl.textContent = name ? `${name}'s ${data.label} Roadmap` : `${data.label} Roadmap`;
  if (name && badgeEl) badgeEl.textContent = `${name}'s Learning Roadmap`;

  document.getElementById("roadmapTagline").textContent = data.tagline;
  document.title = `${data.label} Roadmap — Guide Into Tech`;

  const container = document.getElementById("phasesContainer");

  data.phases.forEach((phase, i) => {
    const card = document.createElement("div");
    card.className = "phase_card";
    card.style.animationDelay = `${i * 0.1}s`;

    const topicsHTML = phase.topics.map(t => `<li>${t}</li>`).join("");
    const toolsHTML = phase.tools.map(t => `<span class="meta_tag">${t}</span>`).join("");
    const resourcesHTML = phase.resources.map(r => `<span class="meta_tag">${r}</span>`).join("");

    card.innerHTML = `
      <div class="phase_header">
        <span class="phase_number">${i + 1}</span>
        <div>
          <h3>${phase.title}</h3>
          <span class="phase_duration">${phase.duration}</span>
        </div>
      </div>
      <ul class="phase_topics">${topicsHTML}</ul>
      <div class="phase_meta">
        <div class="phase_meta_row">
          <span class="meta_label">🛠 Tools</span>
          <div class="meta_tags">${toolsHTML}</div>
        </div>
        <div class="phase_meta_row">
          <span class="meta_label">📚 Resources</span>
          <div class="meta_tags">${resourcesHTML}</div>
        </div>
      </div>
      <div class="phase_project">
        <span class="project_label">Milestone Project</span>
        <p>${phase.project}</p>
      </div>
      <div class="phase_outcome">
        <span class="outcome_label">✓ Outcome</span>
        <p>${phase.outcome}</p>
      </div>
    `;

    container.appendChild(card);

    if (i < data.phases.length - 1) {
      const connector = document.createElement("div");
      connector.className = "phase_connector";
      container.appendChild(connector);
    }
  });
});
