gp-karangarh-bilingual/
│
├── index.html
├── about.html
├── schemes.html
├── contact.html
├── style.css
├── script.js
├── content.json
├── guide-hindi.pdf  ← (आप बाद में जोड़ सकते हैं)
└── assets/
    ├── banner.jpg   ← (आपका ग्राम पंचायत भवन फोटो)
    └── emblem.png   ← (Ashoka Emblem लोगो)




<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title data-en="About - Gram Panchayat Karangarh" data-hi="हमारे बारे में - ग्राम पंचायत करणगढ़"></title>
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
</head>
<body>
<header class="sub-header">
  <img src="assets/emblem.png" class="emblem"/>
  <h1 data-en="Gram Panchayat Karangarh" data-hi="ग्राम पंचायत करणगढ़"></h1>
  <button id="langToggle">हिंदी</button>
</header>

<nav class="nav">
  <a href="index.html" data-en="Home" data-hi="होम"></a>
  <a href="about.html" data-en="About" data-hi="हमारे बारे में"></a>
  <a href="schemes.html" data-en="Schemes" data-hi="योजनाएँ"></a>
  <a href="contact.html" data-en="Contact" data-hi="संपर्क करें"></a>
</nav>

<main class="content">
  <h2 data-en="About Gram Panchayat" data-hi="ग्राम पंचायत के बारे में"></h2>
  <p data-en="Gram Panchayat Karangarh is located in Tunga Tehsil, Jaipur District, Rajasthan. It serves the local community and manages rural development schemes and civic services." 
     data-hi="ग्राम पंचायत करणगढ़ तहसील टुंगा, जिला जयपुर (राजस्थान) में स्थित है। यह स्थानीय नागरिकों की सेवा तथा ग्रामीण विकास और नागरिक सुविधाओं का प्रबंधन करती है।"></p>
</main>

<footer>© 2025 Gram Panchayat Karangarh, Jaipur | Designed & Managed by rgjaipurofficial</footer>
</body>
</html>
{
  "notices": [
    {"date": "02 Nov 2025", "text_en": "Gram Sabha Meeting on 15 Nov 2025", "text_hi": "15 नवम्बर 2025 को ग्राम सभा बैठक"},
    {"date": "01 Nov 2025", "text_en": "Swachh Bharat Cleanliness Drive", "text_hi": "स्वच्छ भारत अभियान"},
    {"date": "28 Oct 2025", "text_en": "Water Awareness Campaign", "text_hi": "जल संरक्षण जागरूकता अभियान"}
  ]
}
// Language Toggle
const toggleBtn = document.getElementById("langToggle");
let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  toggleBtn.textContent = lang === "en" ? "हिंदी" : "English";
  localStorage.setItem("lang", lang);
}
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "hi" : "en";
    setLanguage(currentLang);
  });
}
setLanguage(currentLang);

// Notices Section
fetch("content.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("noticesList");
    if (list && data.notices) {
      data.notices.forEach(n => {
        const li = document.createElement("li");
        li.textContent = `${n.date} - ${currentLang === "hi" ? n.text_hi : n.text_en}`;
        list.appendChild(li);
      });
    }
  });
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gram Panchayat Karangarh | Government of Rajasthan</title>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
</head>
<body>
  <header class="header">
    <img src="assets/emblem.png" alt="Emblem" class="emblem" />
    <div class="title">
      <h1 data-en="Gram Panchayat Karangarh" data-hi="ग्राम पंचायत करणगढ़"></h1>
      <p data-en="District Jaipur, Rajasthan" data-hi="जिला जयपुर, राजस्थान"></p>
      <span class="gov-text" data-en="Government of Rajasthan" data-hi="राजस्थान सरकार"></span>
    </div>
    <button id="langToggle">हिंदी</button>
  </header>

  <img src="assets/banner.jpg" alt="Gram Panchayat" class="banner"/>

  <nav class="nav">
    <a href="index.html" data-en="Home" data-hi="होम"></a>
    <a href="about.html" data-en="About" data-hi="हमारे बारे में"></a>
    <a href="schemes.html" data-en="Schemes" data-hi="योजनाएँ"></a>
    <a href="contact.html" data-en="Contact" data-hi="संपर्क करें"></a>
  </nav>

  <main class="content">
    <section class="notices">
      <h2 data-en="Latest Updates / Notices" data-hi="नवीनतम सूचनाएँ"></h2>
      <ul id="noticesList"></ul>
    </section>

    <section class="departments">
      <h2 data-en="Rajasthan Government Departments Links" data-hi="राजस्थान सरकार के विभागों के लिंक"></h2>
      <ul>
        <li><a href="https://panchayat.rajasthan.gov.in" target="_blank">Panchayati Raj Department</a></li>
        <li><a href="https://rural.rajasthan.gov.in" target="_blank">Rural Development</a></li>
        <li><a href="https://education.rajasthan.gov.in" target="_blank">Education Department</a></li>
        <li><a href="https://health.rajasthan.gov.in" target="_blank">Health & Family Welfare</a></li>
        <li><a href="https://revenue.rajasthan.gov.in" target="_blank">Revenue Department</a></li>
        <li><a href="https://agriculture.rajasthan.gov.in" target="_blank">Agriculture</a></li>
        <li><a href="https://police.rajasthan.gov.in" target="_blank">Police Department</a></li>
        <li><a href="https://emitra.rajasthan.gov.in" target="_blank">e-Mitra Portal</a></li>
      </ul>
    </section>
  </main>

  <footer>
    © 2025 Gram Panchayat Karangarh, Jaipur | Designed & Managed by rgjaipurofficial
  </footer>
</body>
</html>
