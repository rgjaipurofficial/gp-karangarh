// Bilingual toggle and small interactions
document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    departments: 'Departments',
    officials: 'Officials',
    notices: 'Notices',
    contact: 'Contact',
    welcome_en: 'Welcome to Gram Panchayat Karangarh',
    lead_en: 'Official website of Gram Panchayat Karangarh, Tehsil Tunga, District Jaipur',
    about_heading: 'About / हमारे बारे में',
    about_text_en: 'Gram Panchayat Karangarh is a local self-government body serving residents of Karangarh village in Tehsil Tunga, District Jaipur. We work for community welfare, public services, and local development.',
    address_label: 'Address:',
    email_label: 'Email:',
    phone_label: 'Phone:',
    departments_heading: 'Departments / सेवाएँ',
    dept1_en: 'Public Works / सार्वजनिक कार्य',
    dept2_en: 'Health & Sanitation / स्वास्थ्य और स्वच्छता',
    dept3_en: 'Revenue & Records / राजस्व और रिकॉर्ड',
    dept4_en: 'Education & Welfare / शिक्षा और कल्याण',
    officials_heading: 'Officials / अधिकारी',
    officials_text_en: 'List of key officials and staff (placeholder). You can replace these entries with real names, photos and posts.',
    notices_heading: 'Notices / सूचनाएँ',
    contact_heading: 'Contact / संपर्क',
    contact_text_en: 'For queries and services, contact Gram Panchayat Karangarh.',
    label_name: 'Name / नाम',
    label_email: 'Email / ईमेल',
    label_message: 'Message / संदेश',
    send: 'Send / भेजें'
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    departments: 'सेवाएँ',
    officials: 'अधिकारी',
    notices: 'सूचनाएँ',
    contact: 'संपर्क',
    welcome_en: 'Welcome to Gram Panchayat Karangarh', // heading stays same: English+Hindi shown by CSS
    lead_en: 'Official website of Gram Panchayat Karangarh, Tehsil Tunga, District Jaipur',
    about_heading: 'About / हमारे बारे में',
    about_text_en: 'ग्राम पंचायत करांगढ़ टुंग तहसील, जिला जयपुर के करांगढ़ गाँव के निवासियों की सेवा करने वाला स्थानीय स्वशासकीय निकाय है। हम सामुदायिक कल्याण, सार्वजनिक सेवाएँ और स्थानीय विकास के लिए कार्य करते हैं।',
    address_label: 'पता:',
    email_label: 'ईमेल:',
    phone_label: 'फोन:',
    departments_heading: 'सेवाएँ',
    dept1_en: 'सार्वजनिक कार्य',
    dept2_en: 'स्वास्थ्य और स्वच्छता',
    dept3_en: 'राजस्व और रिकॉर्ड',
    dept4_en: 'शिक्षा और कल्याण',
    officials_heading: 'अधिकारी',
    officials_text_en: 'मुख्य अधिकारियों और स्टाफ की सूची (नमूना)। आप इन्हें असली नाम, फोटो और पद से बदल सकते हैं।',
    notices_heading: 'सूचनाएँ',
    contact_heading: 'संपर्क',
    contact_text_en: 'प्रश्न और सेवाओं के लिए ग्राम पंचायत करांगढ़ से संपर्क करें।',
    label_name: 'नाम',
    label_email: 'ईमेल',
    label_message: 'संदेश',
    send: 'भेजें'
  }
};

let currentLang = 'en';
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  applyTranslations();
  // toggle visible Hindi blocks
  document.querySelectorAll('.hi').forEach(el => {
    el.style.display = currentLang === 'hi' ? 'block' : 'none';
  });
});

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[currentLang] && translations[currentLang][key]){
      el.textContent = translations[currentLang][key];
    }
  });
}

// initial apply
applyTranslations();
