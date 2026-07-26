(function () {
'use strict';


var EMAIL = 'Zoyasayeedaahmed05@gmail.com', PHONE = '+91 93804 28285';
var LINKEDIN = 'https://www.linkedin.com/in/zoya-sayeeda-ahmed-709389340';

var T = {
  en: {
    dir: 'ltr', label: 'English', tag: 'EN', htmlLang: 'en',
    name: 'Zoya Sayeeda Ahmed',
    role: 'AI Engineer & UI/UX Designer',
    loc: 'Bengaluru, India',
    tagline: 'Great systems should feel invisible.',
    intro: "I'm a third-year AI and Machine Learning student in Bengaluru. I build real-time computer vision systems, and I design the interfaces people actually touch. A well-tuned model and a well-composed layout solve the same problem: making something complicated feel effortless.",
    sec: { about: 'About', work: 'Selected work', skills: 'What I work with', edu: 'Education', speak: 'Speaking & organising', art: 'Art practice', contact: 'Get in touch' },
    projects: [
      { t: 'Smart Alert System for Night Truck Drivers', k: 'Computer vision · Safety', b: [
        'Real-time driver attentiveness tracking built with OpenCV and MediaPipe.',
        'Low-latency alerts computed from eye-closure metrics to catch micro-sleep early.',
        'Tuned for real fleet conditions: dashboard glare, night driving, no false alarms.'] },
      { t: 'Opportune — Internship Discovery Platform', k: 'UI/UX · Hackathon winner', b: [
        'A web portal for university students to search and map technical internships.',
        'Responsive pathways and student profiles built on a Figma design system.',
        'Awarded the top cash prize at a regional hackathon.'] },
      { t: 'F1 Tenth-Scale Autonomous Racing', k: 'Algorithmic planning', b: [
        'Perception, path planning and real-time control in a single pipeline.',
        'OpenCV sensor processing for boundary tracking and obstacle avoidance.',
        'Faster lap times without giving up safety constraints.'] },
      { t: 'Nuturemite Landing Page', k: 'Freelance UI/UX · Magaminds IT', b: [
        'A user-centred landing page designed end to end in Figma.',
        'Clean visual hierarchy and functional UX workflows for a high-fidelity model.'] }
    ],
    skills: [
      { g: 'Design', i: ['Figma', 'Wireframing', 'Information architecture', 'User research', 'Design systems'] },
      { g: 'AI / ML', i: ['OpenCV', 'MediaPipe', 'NumPy', 'Pandas', 'Scikit-Learn'] },
      { g: 'Code', i: ['Python', 'SQL', 'HTML5', 'CSS3'] },
      { g: 'Tools', i: ['Git & GitHub', 'Postman', 'REST APIs'] }
    ],
    edu: [
      { y: '2023 — 2027', t: 'B.E. Artificial Intelligence & Machine Learning', d: 'Ghousia College of Engineering, Bengaluru. Object-oriented programming, database management (SQL), software engineering principles.' },
      { y: '2021 — 2022', t: 'Pre-University Course', d: 'Holy Spirit College, India.' }
    ],
    certs: ['IBM — Enterprise Design Thinking Practitioner', 'Hackathon Winner, 1st place — Opportune', 'AI Beyond Coding workshop', 'FreeCodeCamp — Basic Python Programming'],
    speak: 'Committee Lead for a 24-hour regional hackathon with 50+ interdisciplinary teams. Emcee at Hackatron, and co-host of college fest stage events.',
    art: 'Hand-painted Islamic calligraphy, custom painted apparel, and pen-and-ink character sketches. I take a limited number of commissions alongside client and academic work.',
    cta: 'Email me',
    fields: { email: 'Email', phone: 'Phone', location: 'Location', status: 'Status', linkedin: 'LinkedIn' },
    status: 'Graduating 2027 · open to roles',
    mq: { pause: 'Stop the scrolling banner', play: 'Restart the scrolling banner' },
    pick: 'Choose a language',
    hint: 'Scroll: the same portfolio, redesigned once per decade.',
    start: 'Start in 1960 ↓',
    eraNote: {
      1960: 'Mainframe terminal. Green phosphor, 80 columns, no images at all.',
      1984: 'The first graphical interface. One bit deep: black or white, nothing between.',
      1996: 'The early web. Times New Roman, tiled backgrounds, underlined links and a visitor counter.',
      2007: 'Web 2.0. Glossy gradients, rounded corners, and everything in beta.',
      2015: 'Flat design. Colour blocks, thin type, every shadow removed.',
      2026: 'Now.'
    }
  },

  kn: {
    dir: 'ltr', label: 'ಕನ್ನಡ', tag: 'KN', htmlLang: 'kn',
    name: 'ಝೋಯಾ ಸಯೀದಾ ಅಹಮದ್',
    role: 'ಎಐ ಇಂಜಿನಿಯರ್ ಮತ್ತು ಯುಐ/ಯುಎಕ್ಸ್ ಡಿಸೈನರ್',
    loc: 'ಬೆಂಗಳೂರು, ಭಾರತ',
    tagline: 'ಉತ್ತಮ ವ್ಯವಸ್ಥೆಗಳು ಕಣ್ಣಿಗೆ ಬೀಳಬಾರದು.',
    intro: 'ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಎಐ ಮತ್ತು ಮಶೀನ್ ಲರ್ನಿಂಗ್‌ನ ಮೂರನೇ ವರ್ಷದ ವಿದ್ಯಾರ್ಥಿನಿ. ನಾನು ರಿಯಲ್-ಟೈಮ್ ಕಂಪ್ಯೂಟರ್ ವಿಷನ್ ವ್ಯವಸ್ಥೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇನೆ ಮತ್ತು ಜನರು ನಿಜವಾಗಿಯೂ ಬಳಸುವ ಇಂಟರ್‌ಫೇಸ್‌ಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸುತ್ತೇನೆ. ಚೆನ್ನಾಗಿ ಟ್ಯೂನ್ ಮಾಡಿದ ಮಾದರಿ ಮತ್ತು ಚೆನ್ನಾಗಿ ರಚಿಸಿದ ಲೇಔಟ್ ಒಂದೇ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸುತ್ತವೆ: ಸಂಕೀರ್ಣವಾದದ್ದನ್ನು ಸುಲಭವಾಗಿಸುವುದು.',
    sec: { about: 'ಪರಿಚಯ', work: 'ಆಯ್ದ ಕೆಲಸ', skills: 'ನನ್ನ ಕೌಶಲ್ಯಗಳು', edu: 'ಶಿಕ್ಷಣ', speak: 'ವೇದಿಕೆ ಮತ್ತು ಸಂಘಟನೆ', art: 'ಕಲೆ', contact: 'ಸಂಪರ್ಕಿಸಿ' },
    projects: [
      { t: 'ರಾತ್ರಿ ಟ್ರಕ್ ಚಾಲಕರಿಗಾಗಿ ಸ್ಮಾರ್ಟ್ ಅಲರ್ಟ್ ವ್ಯವಸ್ಥೆ', k: 'ಕಂಪ್ಯೂಟರ್ ವಿಷನ್ · ಸುರಕ್ಷತೆ', b: [
        'OpenCV ಮತ್ತು MediaPipe ಬಳಸಿ ನಿರ್ಮಿಸಿದ ರಿಯಲ್-ಟೈಮ್ ಚಾಲಕ ಎಚ್ಚರಿಕೆ ಟ್ರ್ಯಾಕಿಂಗ್.',
        'ಕಣ್ಣು ಮುಚ್ಚುವ ಮಾಪನಗಳಿಂದ ಕಡಿಮೆ-ವಿಳಂಬದ ಎಚ್ಚರಿಕೆಗಳು, ನಿದ್ರೆಯನ್ನು ಮೊದಲೇ ಗುರುತಿಸಲು.',
        'ನಿಜವಾದ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಹೊಂದಿಸಲಾಗಿದೆ: ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರಜ್ವಲ, ರಾತ್ರಿ ಚಾಲನೆ, ಸುಳ್ಳು ಎಚ್ಚರಿಕೆ ಇಲ್ಲ.'] },
      { t: 'Opportune — ಇಂಟರ್ನ್‌ಶಿಪ್ ಹುಡುಕಾಟ ವೇದಿಕೆ', k: 'ಯುಐ/ಯುಎಕ್ಸ್ · ಹ್ಯಾಕಥಾನ್ ವಿಜೇತೆ', b: [
        'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಾಂತ್ರಿಕ ಇಂಟರ್ನ್‌ಶಿಪ್ ಹುಡುಕಲು ವೆಬ್ ಪೋರ್ಟಲ್.',
        'Figma ವಿನ್ಯಾಸ ವ್ಯವಸ್ಥೆಯ ಮೇಲೆ ನಿರ್ಮಿಸಿದ ರೆಸ್ಪಾನ್ಸಿವ್ ಪಥಗಳು ಮತ್ತು ಪ್ರೊಫೈಲ್‌ಗಳು.',
        'ಪ್ರಾದೇಶಿಕ ಹ್ಯಾಕಥಾನ್‌ನಲ್ಲಿ ಪ್ರಥಮ ಬಹುಮಾನ.'] },
      { t: 'F1 ಹತ್ತನೇ-ಪ್ರಮಾಣದ ಸ್ವಾಯತ್ತ ರೇಸಿಂಗ್', k: 'ಅಲ್ಗಾರಿದಮಿಕ್ ಯೋಜನೆ', b: [
        'ಗ್ರಹಿಕೆ, ಪಥ ಯೋಜನೆ ಮತ್ತು ರಿಯಲ್-ಟೈಮ್ ನಿಯಂತ್ರಣ ಒಂದೇ ಪೈಪ್‌ಲೈನ್‌ನಲ್ಲಿ.',
        'ಗಡಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಅಡಚಣೆ ತಪ್ಪಿಸಲು OpenCV ಸಂವೇದಕ ಸಂಸ್ಕರಣೆ.',
        'ಸುರಕ್ಷತೆಯನ್ನು ಬಿಟ್ಟುಕೊಡದೆ ವೇಗದ ಲ್ಯಾಪ್ ಸಮಯ.'] },
      { t: 'Nuturemite ಲ್ಯಾಂಡಿಂಗ್ ಪುಟ', k: 'ಫ್ರೀಲಾನ್ಸ್ ಯುಐ/ಯುಎಕ್ಸ್ · Magaminds IT', b: [
        'Figma ನಲ್ಲಿ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಬಳಕೆದಾರ-ಕೇಂದ್ರಿತ ಲ್ಯಾಂಡಿಂಗ್ ಪುಟ.',
        'ಸ್ಪಷ್ಟ ದೃಶ್ಯ ಶ್ರೇಣಿ ಮತ್ತು ಕಾರ್ಯಾತ್ಮಕ ಯುಎಕ್ಸ್ ಕಾರ್ಯಹರಿವು.'] }
    ],
    skills: [
      { g: 'ವಿನ್ಯಾಸ', i: ['Figma', 'ವೈರ್‌ಫ್ರೇಮಿಂಗ್', 'ಮಾಹಿತಿ ವಿನ್ಯಾಸ', 'ಬಳಕೆದಾರ ಸಂಶೋಧನೆ', 'ಡಿಸೈನ್ ಸಿಸ್ಟಂ'] },
      { g: 'ಎಐ / ಎಂಎಲ್', i: ['OpenCV', 'MediaPipe', 'NumPy', 'Pandas', 'Scikit-Learn'] },
      { g: 'ಕೋಡ್', i: ['Python', 'SQL', 'HTML5', 'CSS3'] },
      { g: 'ಉಪಕರಣಗಳು', i: ['Git & GitHub', 'Postman', 'REST API'] }
    ],
    edu: [
      { y: '2023 — 2027', t: 'ಬಿ.ಇ. ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ಮಶೀನ್ ಲರ್ನಿಂಗ್', d: 'ಘೌಸಿಯಾ ಕಾಲೇಜ್ ಆಫ್ ಎಂಜಿನಿಯರಿಂಗ್, ಬೆಂಗಳೂರು. ಆಬ್ಜೆಕ್ಟ್-ಓರಿಯೆಂಟೆಡ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್, ಡೇಟಾಬೇಸ್ ನಿರ್ವಹಣೆ (SQL), ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರಿಂಗ್ ತತ್ವಗಳು.' },
      { y: '2021 — 2022', t: 'ಪ್ರಿ-ಯೂನಿವರ್ಸಿಟಿ ಕೋರ್ಸ್', d: 'ಹೋಲಿ ಸ್ಪಿರಿಟ್ ಕಾಲೇಜ್, ಭಾರತ.' }
    ],
    certs: ['IBM — ಎಂಟರ್‌ಪ್ರೈಸ್ ಡಿಸೈನ್ ಥಿಂಕಿಂಗ್ ಪ್ರಾಕ್ಟೀಷನರ್', 'ಹ್ಯಾಕಥಾನ್ ವಿಜೇತೆ, ಪ್ರಥಮ ಸ್ಥಾನ — Opportune', 'AI Beyond Coding ಕಾರ್ಯಾಗಾರ', 'FreeCodeCamp — ಮೂಲ ಪೈಥಾನ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್'],
    speak: '50+ ಅಂತರ-ಶಿಸ್ತೀಯ ತಂಡಗಳ 24-ಗಂಟೆಗಳ ಪ್ರಾದೇಶಿಕ ಹ್ಯಾಕಥಾನ್‌ನ ಸಂಘಟನಾ ಸಮಿತಿ ಮುಖ್ಯಸ್ಥೆ. Hackatron ನಲ್ಲಿ ನಿರೂಪಣೆ, ಮತ್ತು ಕಾಲೇಜು ಉತ್ಸವದ ವೇದಿಕೆ ಕಾರ್ಯಕ್ರಮಗಳ ಸಹ-ನಿರೂಪಣೆ.',
    art: 'ಕೈಯಿಂದ ಬಿಡಿಸಿದ ಇಸ್ಲಾಮಿಕ್ ಕ್ಯಾಲಿಗ್ರಫಿ, ಕೈಯಿಂದ ಬಣ್ಣ ಹಚ್ಚಿದ ಉಡುಪುಗಳು, ಮತ್ತು ಪೆನ್-ಇಂಕ್ ಪಾತ್ರ ಚಿತ್ರಗಳು. ಕ್ಲೈಂಟ್ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಕೆಲಸದ ಜೊತೆಗೆ ನಾನು ಸೀಮಿತ ಸಂಖ್ಯೆಯ ಕಮಿಷನ್‌ಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತೇನೆ.',
    cta: 'ನನಗೆ ಇಮೇಲ್ ಮಾಡಿ',
    fields: { email: 'ಇಮೇಲ್', phone: 'ದೂರವಾಣಿ', location: 'ಸ್ಥಳ', status: 'ಸ್ಥಿತಿ', linkedin: 'LinkedIn' },
    status: '2027 ರಲ್ಲಿ ಪದವಿ · ಅವಕಾಶಗಳಿಗೆ ಮುಕ್ತ',
    mq: { pause: 'ಚಲಿಸುವ ಪಟ್ಟಿಯನ್ನು ನಿಲ್ಲಿಸಿ', play: 'ಚಲಿಸುವ ಪಟ್ಟಿಯನ್ನು ಪುನಃ ಆರಂಭಿಸಿ' },
    pick: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',
    hint: 'ಸ್ಕ್ರಾಲ್ ಮಾಡಿ: ಅದೇ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ, ಪ್ರತಿ ದಶಕದಲ್ಲೂ ಹೊಸ ವಿನ್ಯಾಸ.',
    start: '1960 ರಿಂದ ಪ್ರಾರಂಭಿಸಿ ↓',
    eraNote: {
      1960: 'ಮೇನ್‌ಫ್ರೇಮ್ ಟರ್ಮಿನಲ್. ಹಸಿರು ಫಾಸ್ಫರ್, 80 ಕಾಲಮ್, ಯಾವುದೇ ಚಿತ್ರಗಳಿಲ್ಲ.',
      1984: 'ಮೊದಲ ಗ್ರಾಫಿಕಲ್ ಇಂಟರ್‌ಫೇಸ್. ಒಂದೇ ಬಿಟ್: ಕಪ್ಪು ಅಥವಾ ಬಿಳಿ.',
      1996: 'ಆರಂಭಿಕ ವೆಬ್. Times New Roman, ಟೈಲ್ ಹಿನ್ನೆಲೆ, ಅಡಿಗೆರೆಯ ಕೊಂಡಿಗಳು ಮತ್ತು ಭೇಟಿ ಎಣಿಕೆ.',
      2007: 'ವೆಬ್ 2.0. ಹೊಳಪಿನ ಗ್ರೇಡಿಯಂಟ್, ದುಂಡಗಿನ ಮೂಲೆಗಳು, ಎಲ್ಲವೂ ಬೀಟಾದಲ್ಲಿ.',
      2015: 'ಫ್ಲಾಟ್ ವಿನ್ಯಾಸ. ಬಣ್ಣದ ಬ್ಲಾಕ್‌ಗಳು, ತೆಳು ಅಕ್ಷರಗಳು, ಎಲ್ಲಾ ನೆರಳುಗಳೂ ಮಾಯ.',
      2026: 'ಈಗ.'
    }
  },

  hi: {
    dir: 'ltr', label: 'हिन्दी', tag: 'HI', htmlLang: 'hi',
    name: 'ज़ोया सईदा अहमद',
    role: 'एआई इंजीनियर और यूआई/यूएक्स डिज़ाइनर',
    loc: 'बेंगलुरु, भारत',
    tagline: 'अच्छे सिस्टम दिखाई नहीं देने चाहिए।',
    intro: 'मैं बेंगलुरु में एआई और मशीन लर्निंग की तीसरे वर्ष की छात्रा हूँ। मैं रीयल-टाइम कंप्यूटर विज़न सिस्टम बनाती हूँ और वे इंटरफ़ेस डिज़ाइन करती हूँ जिन्हें लोग रोज़ इस्तेमाल करते हैं। एक अच्छी तरह ट्यून किया गया मॉडल और एक अच्छा लेआउट एक ही समस्या हल करते हैं: किसी जटिल चीज़ को आसान बनाना।',
    sec: { about: 'परिचय', work: 'चुने हुए काम', skills: 'मेरे कौशल', edu: 'शिक्षा', speak: 'मंच और आयोजन', art: 'कला', contact: 'संपर्क करें' },
    projects: [
      { t: 'रात में ट्रक चालकों के लिए स्मार्ट अलर्ट सिस्टम', k: 'कंप्यूटर विज़न · सुरक्षा', b: [
        'OpenCV और MediaPipe से बना रीयल-टाइम चालक सतर्कता ट्रैकिंग सिस्टम।',
        'आँख बंद होने के मापों से कम-विलंब अलर्ट, ताकि झपकी समय रहते पकड़ी जाए।',
        'असली परिस्थितियों के लिए तैयार: डैशबोर्ड की चमक, रात की ड्राइविंग, कोई झूठा अलार्म नहीं।'] },
      { t: 'Opportune — इंटर्नशिप खोज प्लेटफ़ॉर्म', k: 'यूआई/यूएक्स · हैकाथॉन विजेता', b: [
        'छात्रों के लिए तकनीकी इंटर्नशिप खोजने और देखने का वेब पोर्टल।',
        'Figma डिज़ाइन सिस्टम पर बने रिस्पॉन्सिव पाथवे और छात्र प्रोफ़ाइल।',
        'क्षेत्रीय हैकाथॉन में प्रथम नकद पुरस्कार।'] },
      { t: 'F1 दसवें पैमाने की स्वायत्त रेसिंग', k: 'एल्गोरिदमिक प्लानिंग', b: [
        'परसेप्शन, पाथ प्लानिंग और रीयल-टाइम कंट्रोल एक ही पाइपलाइन में।',
        'बाउंड्री ट्रैकिंग और बाधा से बचाव के लिए OpenCV सेंसर प्रोसेसिंग।',
        'सुरक्षा से समझौता किए बिना तेज़ लैप टाइम।'] },
      { t: 'Nuturemite लैंडिंग पेज', k: 'फ्रीलांस यूआई/यूएक्स · Magaminds IT', b: [
        'Figma में शुरू से अंत तक डिज़ाइन किया गया यूज़र-केंद्रित लैंडिंग पेज।',
        'साफ़ विज़ुअल पदानुक्रम और कार्यात्मक यूएक्स वर्कफ़्लो।'] }
    ],
    skills: [
      { g: 'डिज़ाइन', i: ['Figma', 'वायरफ़्रेमिंग', 'सूचना वास्तुकला', 'यूज़र रिसर्च', 'डिज़ाइन सिस्टम'] },
      { g: 'एआई / एमएल', i: ['OpenCV', 'MediaPipe', 'NumPy', 'Pandas', 'Scikit-Learn'] },
      { g: 'कोड', i: ['Python', 'SQL', 'HTML5', 'CSS3'] },
      { g: 'टूल्स', i: ['Git & GitHub', 'Postman', 'REST API'] }
    ],
    edu: [
      { y: '2023 — 2027', t: 'बी.ई. आर्टिफ़िशियल इंटेलिजेंस और मशीन लर्निंग', d: 'घौसिया कॉलेज ऑफ़ इंजीनियरिंग, बेंगलुरु। ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग, डेटाबेस प्रबंधन (SQL), सॉफ़्टवेयर इंजीनियरिंग सिद्धांत।' },
      { y: '2021 — 2022', t: 'प्री-यूनिवर्सिटी कोर्स', d: 'होली स्पिरिट कॉलेज, भारत।' }
    ],
    certs: ['IBM — एंटरप्राइज़ डिज़ाइन थिंकिंग प्रैक्टिशनर', 'हैकाथॉन विजेता, प्रथम स्थान — Opportune', 'AI Beyond Coding कार्यशाला', 'FreeCodeCamp — बेसिक पायथन प्रोग्रामिंग'],
    speak: '50+ अंतर-विषयक टीमों वाले 24-घंटे के क्षेत्रीय हैकाथॉन की आयोजन समिति प्रमुख। Hackatron में मंच संचालन, और कॉलेज फ़ेस्ट के कार्यक्रमों की सह-मेज़बानी।',
    art: 'हाथ से बनाई इस्लामी सुलेखन कला, हाथ से पेंट किए कपड़े, और पेन-एंड-इंक कैरेक्टर स्केच। क्लाइंट और शैक्षणिक काम के साथ-साथ मैं सीमित संख्या में कमीशन लेती हूँ।',
    cta: 'मुझे ईमेल करें',
    fields: { email: 'ईमेल', phone: 'फ़ोन', location: 'स्थान', status: 'स्थिति', linkedin: 'LinkedIn' },
    status: '2027 में स्नातक · अवसरों के लिए उपलब्ध',
    mq: { pause: 'चलती पट्टी रोकें', play: 'चलती पट्टी फिर चालू करें' },
    pick: 'भाषा चुनें',
    hint: 'स्क्रॉल करें: वही पोर्टफ़ोलियो, हर दशक में नया डिज़ाइन।',
    start: '1960 से शुरू करें ↓',
    eraNote: {
      1960: 'मेनफ़्रेम टर्मिनल। हरा फ़ॉस्फ़र, 80 कॉलम, कोई तस्वीर नहीं।',
      1984: 'पहला ग्राफ़िकल इंटरफ़ेस। सिर्फ़ एक बिट: काला या सफ़ेद।',
      1996: 'शुरुआती वेब। Times New Roman, टाइल वाला बैकग्राउंड, रेखांकित लिंक और विज़िटर काउंटर।',
      2007: 'वेब 2.0। चमकदार ग्रेडिएंट, गोल कोने, और सब कुछ बीटा में।',
      2015: 'फ़्लैट डिज़ाइन। रंगों के ब्लॉक, पतले अक्षर, सारी परछाइयाँ हटा दी गईं।',
      2026: 'अब।'
    }
  },

  ar: {
    dir: 'rtl', label: 'العربية', tag: 'AR', htmlLang: 'ar',
    name: 'زويا سعيدة أحمد',
    role: 'مهندسة ذكاء اصطناعي ومصمّمة واجهات المستخدم',
    loc: 'بنغالورو، الهند',
    tagline: 'الأنظمة الجيدة لا يُفترض أن تُلاحَظ.',
    intro: 'أنا طالبة في السنة الثالثة في الذكاء الاصطناعي وتعلّم الآلة في بنغالورو. أبني أنظمة رؤية حاسوبية تعمل في الزمن الحقيقي، وأصمّم الواجهات التي يستخدمها الناس فعلاً. النموذج المضبوط جيداً والتصميم المرتّب يحلّان المشكلة نفسها: جعل الشيء المعقّد يبدو سهلاً.',
    sec: { about: 'نبذة', work: 'أعمال مختارة', skills: 'مهاراتي', edu: 'التعليم', speak: 'التقديم والتنظيم', art: 'الفن', contact: 'تواصلي معي' },
    projects: [
      { t: 'نظام تنبيه ذكي لسائقي الشاحنات الليليين', k: 'رؤية حاسوبية · السلامة', b: [
        'تتبّع انتباه السائق في الزمن الحقيقي باستخدام OpenCV و MediaPipe.',
        'تنبيهات سريعة تُحسب من قياسات إغلاق العين لالتقاط النعاس مبكراً.',
        'مضبوط لظروف حقيقية: وهج لوحة القيادة، القيادة الليلية، دون إنذارات كاذبة.'] },
      { t: 'Opportune — منصّة للبحث عن التدريب', k: 'واجهات المستخدم · فائزة بهاكاثون', b: [
        'بوّابة إلكترونية تتيح لطلبة الجامعات البحث عن فرص التدريب التقني.',
        'مسارات وملفات شخصية متجاوبة مبنية على نظام تصميم في Figma.',
        'الجائزة النقدية الأولى في هاكاثون إقليمي.'] },
      { t: 'سباق ذاتي القيادة بمقياس F1 العُشري', k: 'تخطيط خوارزمي', b: [
        'الإدراك وتخطيط المسار والتحكّم اللحظي في مسار واحد.',
        'معالجة بيانات المستشعرات بـ OpenCV لتتبّع الحدود وتفادي العوائق.',
        'أزمنة لفّات أسرع دون التنازل عن قيود السلامة.'] },
      { t: 'صفحة هبوط Nuturemite', k: 'عمل حرّ · Magaminds IT', b: [
        'صفحة هبوط تتمحور حول المستخدم، صُمّمت بالكامل في Figma.',
        'تسلسل بصري واضح ومسارات تجربة مستخدم عملية.'] }
    ],
    skills: [
      { g: 'التصميم', i: ['Figma', 'المخططات الأولية', 'هندسة المعلومات', 'أبحاث المستخدم', 'أنظمة التصميم'] },
      { g: 'الذكاء الاصطناعي', i: ['OpenCV', 'MediaPipe', 'NumPy', 'Pandas', 'Scikit-Learn'] },
      { g: 'البرمجة', i: ['Python', 'SQL', 'HTML5', 'CSS3'] },
      { g: 'الأدوات', i: ['Git & GitHub', 'Postman', 'REST API'] }
    ],
    edu: [
      { y: '2023 — 2027', t: 'بكالوريوس هندسة — الذكاء الاصطناعي وتعلّم الآلة', d: 'كلية غوثية للهندسة، بنغالورو. البرمجة كائنية التوجّه، إدارة قواعد البيانات (SQL)، مبادئ هندسة البرمجيات.' },
      { y: '2021 — 2022', t: 'المرحلة ما قبل الجامعية', d: 'كلية هولي سبيريت، الهند.' }
    ],
    certs: ['IBM — ممارِسة التفكير التصميمي المؤسسي', 'فائزة بالمركز الأول في هاكاثون — Opportune', 'ورشة AI Beyond Coding', 'FreeCodeCamp — أساسيات برمجة بايثون'],
    speak: 'رئيسة اللجنة المنظِّمة لهاكاثون إقليمي مدّته ٢٤ ساعة بمشاركة أكثر من ٥٠ فريقاً متعدّد التخصّصات. مقدِّمة في Hackatron، ومشاركة في تقديم فعاليات مهرجان الكلية.',
    art: 'خط عربي إسلامي مرسوم باليد، وملابس مطليّة يدوياً، ورسومات شخصيات بالحبر. أقبل عدداً محدوداً من الأعمال المطلوبة إلى جانب العمل الدراسي وعمل العملاء.',
    cta: 'راسليني',
    fields: { email: 'البريد الإلكتروني', phone: 'الهاتف', location: 'الموقع', status: 'الحالة', linkedin: 'LinkedIn' },
    status: 'التخرّج في ٢٠٢٧ · متاحة للفرص',
    mq: { pause: 'إيقاف الشريط المتحرك', play: 'إعادة تشغيل الشريط المتحرك' },
    pick: 'اختر اللغة',
    hint: 'مرّر: المحفظة نفسها، بتصميم جديد كل عقد.',
    start: '↓ ابدأ من ١٩٦٠',
    eraNote: {
      1960: 'طرفية حاسوب مركزي. فوسفور أخضر، ٨٠ عموداً، بلا صور على الإطلاق.',
      1984: 'أول واجهة رسومية. بت واحد: أسود أو أبيض، لا شيء بينهما.',
      1996: 'الويب المبكّر. خط Times New Roman، خلفيات مبلّطة، روابط تحتها خط، وعدّاد زوّار.',
      2007: 'ويب ٢٫٠. تدرّجات لامعة، زوايا دائرية، وكل شيء في نسخة تجريبية.',
      2015: 'التصميم المسطّح. كتل لونية، خطوط رفيعة، وإزالة كل الظلال.',
      2026: 'الآن.'
    }
  }
};


/* Alt text and captions for the six real photographs, per language.
   Alt text describes what is actually in the frame; captions are short labels. */
var PHOTOS = {
  en: {
    backToStart: "Back to the start",
    terminal: {"node":"TERMINAL 1 OF 1","connected":"CONNECTED","noRaster":"NO RASTER DISPLAY ON THIS LINE","eof":"END OF FILE"},
    endOf: "End of {year}",
    egg: {"bsodTitle":"A problem has been detected","bsodBody":"Windows has been shut down to prevent damage to your computer. The problem appears to be caused by too many pop-up windows.","postDone":"Booting from hard disk...", "label":"Do not press this button", "dismiss":"Click anywhere to go back", "told":"You were told not to press it.", "prize":"Click here to claim your prize. There is no prize.", "toolbar":"It comes with four other toolbars.", "slow":"It is not. This is a joke from 2007.", "flat":"Flat design intensifies.", "regen":"Regenerating this portfolio…", "regenDone":"Some things are still made by hand."},
    resume: 'Download résumé',
    terminalNote: 'This terminal has no raster display. Photographs are rendered as character art.',
    bitNote: 'Photographs are dithered to one bit: black or white, nothing between.',
    visitors: 'You are visitor number',
    bestViewed: 'Best viewed in Netscape Navigator 3.0 at 800×600',
    alt: {
      hero: 'Zoya Sayeeda Ahmed in a burgundy abaya and lilac hijab, resting her chin on her hand.',
      art1: 'A hand-painted wall clock: gold Arabic calligraphy on a deep red ring, with Arabic numerals.',
      art2: 'A cream hoodie hand-painted with a red flaming heart wrapped in barbed wire, lettered "Survive".',
      art3: 'A pen-and-ink character sketch in a spiral notebook, with green ink foliage.',
      stage1: 'Co-hosting a college fest stage event from the podium, microphone in hand.',
      stage2: 'Speaking into the microphone at Hackatron, Ghousia College of Engineering.'
    },
    cap: { hero: 'Bengaluru', art1: 'Calligraphy clock', art2: 'Hand-painted hoodie',
           art3: 'Pen and ink', stage1: 'College fest', stage2: 'Hackatron' }
  },
  kn: {
    backToStart: "ಆರಂಭಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    terminal: {"node":"ಟರ್ಮಿನಲ್ 1 / 1","connected":"ಸಂಪರ್ಕವಾಗಿದೆ","noRaster":"ಈ ಸಾಧನದಲ್ಲಿ ಚಿತ್ರ ಪ್ರದರ್ಶನ ಇಲ್ಲ","eof":"ಕಡತದ ಅಂತ್ಯ"},
    endOf: "{year} ರ ಕೊನೆ",
    egg: {"bsodTitle":"ಸಮಸ್ಯೆ ಪತ್ತೆಯಾಗಿದೆ","bsodBody":"ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್‌ಗೆ ಹಾನಿ ತಡೆಯಲು Windows ಅನ್ನು ಸ್ಥಗಿತಗೊಳಿಸಲಾಗಿದೆ. ಹಲವಾರು ಪಾಪ್-ಅಪ್ ವಿಂಡೋಗಳು ಇದಕ್ಕೆ ಕಾರಣ ಎಂದು ತೋರುತ್ತದೆ.","postDone":"ಹಾರ್ಡ್ ಡಿಸ್ಕ್‌ನಿಂದ ಬೂಟ್ ಆಗುತ್ತಿದೆ...", "label":"ಈ ಬಟನ್ ಒತ್ತಬೇಡಿ", "dismiss":"ಹಿಂತಿರುಗಲು ಎಲ್ಲಿಯಾದರೂ ಕ್ಲಿಕ್ ಮಾಡಿ", "told":"ಒತ್ತಬೇಡಿ ಎಂದು ಹೇಳಲಾಗಿತ್ತು.", "prize":"ಬಹುಮಾನ ಪಡೆಯಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ. ಬಹುಮಾನ ಇಲ್ಲ.", "toolbar":"ಇದರೊಂದಿಗೆ ಇನ್ನೂ ನಾಲ್ಕು ಟೂಲ್‌ಬಾರ್‌ಗಳು ಬರುತ್ತವೆ.", "slow":"ಇಲ್ಲ. ಇದು 2007 ರ ತಮಾಷೆ.", "flat":"ಫ್ಲಾಟ್ ವಿನ್ಯಾಸ ಇನ್ನಷ್ಟು ಚಪ್ಪಟೆ.", "regen":"ಈ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಮರುಸೃಷ್ಟಿಯಾಗುತ್ತಿದೆ…", "regenDone":"ಕೆಲವು ವಿಷಯಗಳು ಈಗಲೂ ಕೈಯಿಂದಲೇ ಆಗುತ್ತವೆ."},
    resume: 'ರೆಸ್ಯೂಮೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    terminalNote: 'ಈ ಟರ್ಮಿನಲ್‌ನಲ್ಲಿ ಚಿತ್ರ ಪ್ರದರ್ಶನ ಸಾಧ್ಯವಿಲ್ಲ. ಛಾಯಾಚಿತ್ರಗಳನ್ನು ಅಕ್ಷರ ಕಲೆಯಾಗಿ ತೋರಿಸಲಾಗಿದೆ.',
    bitNote: 'ಛಾಯಾಚಿತ್ರಗಳು ಒಂದೇ ಬಿಟ್‌ಗೆ ಪರಿವರ್ತಿತ: ಕಪ್ಪು ಅಥವಾ ಬಿಳಿ, ನಡುವೆ ಏನೂ ಇಲ್ಲ.',
    visitors: 'ನೀವು ಭೇಟಿ ನೀಡಿದವರ ಸಂಖ್ಯೆ',
    bestViewed: 'Netscape Navigator 3.0 ನಲ್ಲಿ 800×600 ರಲ್ಲಿ ಉತ್ತಮವಾಗಿ ಕಾಣುತ್ತದೆ',
    alt: {
      hero: 'ಝೋಯಾ ಸಯೀದಾ ಅಹಮದ್, ಗಾಢ ಕೆಂಪು ಅಬಾಯಾ ಮತ್ತು ತಿಳಿ ನೇರಳೆ ಹಿಜಾಬ್‌ನಲ್ಲಿ, ಕೈಮೇಲೆ ಗಲ್ಲ ಇಟ್ಟುಕೊಂಡಿದ್ದಾರೆ.',
      art1: 'ಕೈಯಿಂದ ಬಿಡಿಸಿದ ಗೋಡೆ ಗಡಿಯಾರ: ಗಾಢ ಕೆಂಪು ವರ್ತುಲದ ಮೇಲೆ ಚಿನ್ನದ ಬಣ್ಣದ ಅರಬಿ ಕ್ಯಾಲಿಗ್ರಫಿ ಮತ್ತು ಅರಬಿ ಅಂಕಿಗಳು.',
      art2: 'ಕೆಂಪು ಜ್ವಾಲೆಯ ಹೃದಯವನ್ನು ಕೈಯಿಂದ ಬಿಡಿಸಿದ ಕ್ರೀಮ್ ಬಣ್ಣದ ಹೂಡಿ, "Survive" ಎಂದು ಬರೆಯಲಾಗಿದೆ.',
      art3: 'ಸ್ಪೈರಲ್ ನೋಟ್‌ಬುಕ್‌ನಲ್ಲಿ ಪೆನ್-ಇಂಕ್ ಪಾತ್ರ ಚಿತ್ರ, ಹಸಿರು ಶಾಯಿಯ ಎಲೆಗಳೊಂದಿಗೆ.',
      stage1: 'ಕಾಲೇಜು ಉತ್ಸವದ ವೇದಿಕೆ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಸಹ-ನಿರೂಪಣೆ, ಕೈಯಲ್ಲಿ ಮೈಕ್.',
      stage2: 'ಘೌಸಿಯಾ ಕಾಲೇಜ್ ಆಫ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನ Hackatron ನಲ್ಲಿ ಮೈಕ್‌ನಲ್ಲಿ ಮಾತನಾಡುತ್ತಿರುವುದು.'
    },
    cap: { hero: 'ಬೆಂಗಳೂರು', art1: 'ಕ್ಯಾಲಿಗ್ರಫಿ ಗಡಿಯಾರ', art2: 'ಕೈಯಿಂದ ಬಣ್ಣ ಹಚ್ಚಿದ ಹೂಡಿ',
           art3: 'ಪೆನ್ ಮತ್ತು ಶಾಯಿ', stage1: 'ಕಾಲೇಜು ಉತ್ಸವ', stage2: 'Hackatron' }
  },
  hi: {
    backToStart: "शुरुआत पर वापस",
    terminal: {"node":"टर्मिनल 1 / 1","connected":"कनेक्ट हो गया","noRaster":"इस लाइन पर तस्वीर नहीं दिख सकती","eof":"फ़ाइल समाप्त"},
    endOf: "{year} यहीं समाप्त",
    egg: {"bsodTitle":"एक समस्या पाई गई है","bsodBody":"आपके कंप्यूटर को नुकसान से बचाने के लिए Windows बंद कर दिया गया है। समस्या का कारण बहुत ज़्यादा पॉप-अप विंडो लगती हैं।","postDone":"हार्ड डिस्क से बूट हो रहा है...", "label":"यह बटन मत दबाइए", "dismiss":"वापस जाने के लिए कहीं भी क्लिक करें", "told":"आपसे कहा था कि मत दबाइए।", "prize":"इनाम पाने के लिए यहाँ क्लिक करें। कोई इनाम नहीं है।", "toolbar":"इसके साथ चार और टूलबार आते हैं।", "slow":"नहीं है। यह 2007 का मज़ाक है।", "flat":"फ़्लैट डिज़ाइन और भी फ़्लैट।", "regen":"यह पोर्टफ़ोलियो फिर से बन रहा है…", "regenDone":"कुछ चीज़ें आज भी हाथ से बनती हैं।"},
    resume: 'रेज़्यूमे डाउनलोड करें',
    terminalNote: 'इस टर्मिनल पर तस्वीर नहीं दिख सकती। फ़ोटो को अक्षर-कला में बदला गया है।',
    bitNote: 'तस्वीरें एक बिट में बदली गईं: काला या सफ़ेद, बीच में कुछ नहीं।',
    visitors: 'आप इस पेज पर आने वाले नंबर हैं',
    bestViewed: 'Netscape Navigator 3.0 में 800×600 पर सर्वोत्तम',
    alt: {
      hero: 'ज़ोया सईदा अहमद, मैरून अबाया और हल्के बैंगनी हिजाब में, हाथ पर ठोड़ी टिकाए हुए।',
      art1: 'हाथ से बनी दीवार घड़ी: गहरे लाल घेरे पर सुनहरी अरबी सुलेखन और अरबी अंक।',
      art2: 'क्रीम रंग का हुडी जिस पर लाल जलता हुआ दिल और "Survive" हाथ से पेंट किया गया है।',
      art3: 'स्पाइरल नोटबुक में पेन-एंड-इंक कैरेक्टर स्केच, हरी स्याही की पत्तियों के साथ।',
      stage1: 'कॉलेज फ़ेस्ट के मंच पर सह-मेज़बानी, हाथ में माइक।',
      stage2: 'घौसिया कॉलेज ऑफ़ इंजीनियरिंग के Hackatron में माइक पर बोलते हुए।'
    },
    cap: { hero: 'बेंगलुरु', art1: 'सुलेखन घड़ी', art2: 'हाथ से पेंट हुडी',
           art3: 'पेन और स्याही', stage1: 'कॉलेज फ़ेस्ट', stage2: 'Hackatron' }
  },
  ar: {
    backToStart: "العودة إلى البداية",
    terminal: {"node":"الطرفية ١ من ١","connected":"تم الاتصال","noRaster":"لا يوجد عرض للصور على هذا الخط","eof":"نهاية الملف"},
    endOf: "نهاية {year}",
    egg: {"bsodTitle":"تم اكتشاف مشكلة","bsodBody":"تم إيقاف Windows لمنع تلف جهازك. يبدو أن سبب المشكلة هو كثرة النوافذ المنبثقة.","postDone":"الإقلاع من القرص الصلب...", "label":"لا تضغط هذا الزر", "dismiss":"انقر في أي مكان للعودة", "told":"قيل لك ألا تضغطه.", "prize":"انقر هنا لاستلام جائزتك. لا توجد جائزة.", "toolbar":"يأتي معه أربعة أشرطة أدوات أخرى.", "slow":"ليس كذلك. هذه مزحة من عام ٢٠٠٧.", "flat":"التصميم المسطّح يزداد تسطّحاً.", "regen":"إعادة توليد هذه المحفظة…", "regenDone":"بعض الأشياء ما زالت تُصنع باليد."},
    resume: 'تحميل السيرة الذاتية',
    terminalNote: 'هذه الطرفية لا تعرض الصور. الصور معروضة كفنّ حروف.',
    bitNote: 'الصور محوّلة إلى بت واحد: أسود أو أبيض، لا شيء بينهما.',
    visitors: 'أنت الزائر رقم',
    bestViewed: 'يُفضّل عرضه في Netscape Navigator 3.0 بدقة ٨٠٠×٦٠٠',
    alt: {
      hero: 'زويا سعيدة أحمد بعباءة عنّابية وحجاب بنفسجي فاتح، تسند ذقنها على يدها.',
      art1: 'ساعة حائط مرسومة يدوياً: خط عربي ذهبي على حلقة حمراء داكنة بأرقام عربية.',
      art2: 'هودي كريمي مرسوم يدوياً بقلب ملتهب أحمر محاط بأسلاك شائكة، وكلمة "Survive".',
      art3: 'رسم شخصية بالحبر في دفتر لولبي، مع أوراق بالحبر الأخضر.',
      stage1: 'تقديم مشترك لفعالية على مسرح مهرجان الكلية، والميكروفون في اليد.',
      stage2: 'التحدّث في الميكروفون في Hackatron بكلية غوثية للهندسة.'
    },
    cap: { hero: 'بنغالورو', art1: 'ساعة بالخط العربي', art2: 'هودي مرسوم يدوياً',
           art3: 'قلم وحبر', stage1: 'مهرجان الكلية', stage2: 'Hackatron' }
  }
};

/* ════════════════ HELPERS ════════════════ */
var esc = function (s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
};
var li = function (arr) { return arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join(''); };
var stamp = function (t, year) {
  return '<p class="era__stamp"><span>' + year + '</span>' +
         '<span class="era__note">' + esc(t.eraNote[year]) + '</span></p>';
};
/* The three art pieces and two stage photographs, in source order. */
var ART = ['art1', 'art2', 'art3'];
var STAGE = ['stage1', 'stage2'];
var FILE = { hero: 'hero-photo.jpg', art1: 'art-1.jpg', art2: 'art-2.jpg',
             art3: 'art-3.jpg', stage1: 'stage-1.jpg', stage2: 'stage-2.jpg' };
/* A square headshot crop, for the round and square avatar slots. Cropping the
   file beats guessing an object-position against a wide scene. */
var PORTRAIT = 'portrait.jpg';
/* Intrinsic sizes, emitted as width/height so the browser reserves the box
   before a lazy image arrives. Without these the page reflows as you scroll. */
var SIZE = {
  hero: [1500, 2000], portrait: [700, 700],
  art1: [720, 1280], art2: [1080, 1281], art3: [1080, 1520],
  stage1: [1080, 1920], stage2: [1080, 1906],
  dhero: [300, 364], dart1: [280, 311], dart2: [280, 301],
  dart3: [280, 394], dstage1: [280, 281], dstage2: [280, 329]
};
var dim = function (key) {
  var s = SIZE[key];
  return s ? ' width="' + s[0] + '" height="' + s[1] + '"' : '';
};

/* Survives a language re-render, so pausing the banner sticks. */
var mqPaused = false;

/* ════════════════ ERA TEMPLATES ════════════════ */
var TPL = {

  /* ── 1960 · mainframe terminal ── */
  1960: function (t) {
    var p = t.ph;
    /* A command line, then the block it printed. No images anywhere: this
       display had no raster capability at all. */
    var cmd = function (c) { return '<p class="cmd">ZSA:/&gt; <b>' + c + '</b></p>'; };
    return '<div class="crt-sweep" aria-hidden="true"></div>' +
    stamp(t, 1960) +
    '<div class="logon">' +
      '<h1>' + esc(t.name) + ' &middot; ' + esc(p.terminal.node) + '</h1>' +
      '<p class="spec">110 BAUD &middot; TELETYPE MODEL 33 &middot; 7-BIT ASCII</p>' +
      '<p class="spec">LOGON: ZSA.1960</p>' +
      '<p><span class="conn">&#9658; ' + esc(p.terminal.connected) + '</span></p>' +
      '<p class="hint">[ ' + esc(p.terminal.noRaster) + ' ]</p>' +
    '</div>' +
    cmd('TYPE ABOUT.TXT') +
    '<div class="t-box"><h2>' + esc(t.sec.about) + '</h2>' +
      '<dl class="t-kv">' +
        '<dt>' + esc(t.fields.status) + '</dt><dd>' + esc(t.role) + '</dd>' +
        '<dt>' + esc(t.fields.location) + '</dt><dd>' + esc(t.loc) + '</dd>' +
      '</dl>' +
      '<p style="margin-top:.9rem">' + esc(t.tagline) + '</p>' +
      '<p style="margin-top:.9rem" class="t-cursor">' + esc(t.intro) + '</p>' +
    '</div>' +
    cmd('LIST WORK.DAT') +
    '<div class="t-box"><h2>' + esc(t.sec.work) + '</h2>' +
      t.projects.map(function (pr, n) {
        return '<div class="t-rec"><b>[' + String(n + 1).padStart(2, '0') + '] ' + esc(pr.t) + '</b>' +
               '<i>' + esc(pr.k) + '</i><ul>' + li(pr.b) + '</ul></div>';
      }).join('') +
    '</div>' +
    cmd('LIST SKILLS.DAT') +
    '<div class="t-box"><h2>' + esc(t.sec.skills) + '</h2>' +
      t.skills.map(function (s) {
        return '<div class="t-rec"><b>' + esc(s.g) + '</b><i>' + esc(s.i.join('  ·  ')) + '</i></div>';
      }).join('') +
    '</div>' +
    cmd('LIST EDU.DAT') +
    '<div class="t-box"><h2>' + esc(t.sec.edu) + '</h2>' +
      t.edu.map(function (e) {
        return '<div class="t-rec"><b>' + esc(e.y) + '  ' + esc(e.t) + '</b><i>' + esc(e.d) + '</i></div>';
      }).join('') + '<ul>' + li(t.certs) + '</ul>' +
    '</div>' +
    cmd('TYPE SPEAKING.TXT') +
    '<div class="t-box"><h2>' + esc(t.sec.speak) + '</h2><p>' + esc(t.speak) + '</p></div>' +
    cmd('TYPE ART.TXT') +
    '<div class="t-box"><h2>' + esc(t.sec.art) + '</h2><p>' + esc(t.art) + '</p></div>' +
    cmd('TYPE CONTACT.TXT') +
    '<div class="t-box"><h2>' + esc(t.sec.contact) + '</h2>' +
      '<dl class="t-kv">' +
        '<dt>' + esc(t.fields.email) + '</dt><dd><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></dd>' +
        '<dt>' + esc(t.fields.phone) + '</dt><dd>' + PHONE + '</dd>' +
        '<dt>' + esc(t.fields.linkedin) + '</dt><dd><a href="' + LINKEDIN + '">/zoya-sayeeda-ahmed</a></dd>' +
        '<dt>' + esc(p.resume) + '</dt><dd><a href="resume.pdf" download>resume.pdf</a></dd>' +
      '</dl></div>' +
    '<p class="eof">' + esc(p.terminal.eof) + '</p>';
  },

  /* ── 1984 · one-bit graphical interface ── */
  1984: function (t) {
    var p = t.ph;
    var win = function (title, body, cls) {
      return '<div class="w ' + (cls || '') + '"><div class="w__bar"><span class="w__close"></span>' +
             '<span class="w__title">' + esc(title) + '</span></div>' +
             '<div class="w__body">' + body + '</div></div>';
    };
    var bmp = function (key) {
      return '<figure class="bmp"><img src="dither/' + key + '.png" alt="' + esc(p.alt[key]) +
             '" loading="lazy"' + dim('d' + key) + '><figcaption>' + esc(p.cap[key]) + '</figcaption></figure>';
    };
    return stamp(t, 1984) +
      win(t.name,
        '<div class="w-hero">' +
        '<div><h1>' + esc(t.role) + '</h1><p style="margin-top:.6rem">' + esc(t.tagline) + '</p>' +
        '<p style="margin-top:.6rem">' + esc(t.loc) + '</p>' +
        '<p style="margin-top:.8rem"><a href="resume.pdf" download>' + esc(p.resume) + '</a></p></div>' +
        '<div>' + bmp('hero') + '</div></div>') +
      win(t.sec.about, '<p>' + esc(t.intro) + '</p><p style="margin-top:.7rem;font-size:.72rem">' + esc(p.bitNote) + '</p>') +
      win(t.sec.work, t.projects.map(function (pr) {
        return '<div style="margin-bottom:1.1rem"><h3>' + esc(pr.t) + '</h3>' +
               '<p style="margin-bottom:.35rem">' + esc(pr.k) + '</p><ul>' + li(pr.b) + '</ul></div>';
      }).join('')) +
      win(t.sec.skills, t.skills.map(function (s) {
        return '<div><h3>' + esc(s.g) + '</h3><ul>' + li(s.i) + '</ul></div>';
      }).join(''), 'w--split') +
      win(t.sec.edu, t.edu.map(function (e) {
        return '<div style="margin-bottom:.8rem"><h3>' + esc(e.t) + '</h3><p>' + esc(e.y) + '</p><p>' + esc(e.d) + '</p></div>';
      }).join('') + '<ul>' + li(t.certs) + '</ul>') +
      win(t.sec.speak, '<p style="grid-column:1/-1">' + esc(t.speak) + '</p>' + STAGE.map(bmp).join(''), 'w--split') +
      win(t.sec.art, '<p style="grid-column:1/-1">' + esc(t.art) + '</p>' + ART.map(bmp).join(''), 'w--split') +
      win(t.sec.contact,
        '<dl><dt>' + esc(t.fields.email) + '</dt><dd><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></dd>' +
        '<dt>' + esc(t.fields.phone) + '</dt><dd>' + PHONE + '</dd>' +
        '<dt>' + esc(t.fields.status) + '</dt><dd>' + esc(t.status) + '</dd></dl>');
  },

  /* ── 1996 · the early web ── */
  1996: function (t) {
    var p = t.ph;
    var snap = function (key) {
      return '<figure class="snap"><img src="' + FILE[key] + '" alt="' + esc(p.alt[key]) +
             '" loading="lazy"' + dim(key) + '><figcaption>' + esc(p.cap[key]) + '</figcaption></figure>';
    };
    return stamp(t, 1996) +
    '<div class="mq-wrap"><div class="marquee"><span>' + esc(t.name) + ' &nbsp;***&nbsp; ' + esc(t.role) +
      ' &nbsp;***&nbsp; ' + esc(t.tagline) + ' &nbsp;***&nbsp; ' + esc(t.loc) + '</span></div>' +
      '<button type="button" class="mq-btn" data-mq aria-pressed="' + (mqPaused ? 'true' : 'false') + '" ' +
      'aria-label="' + esc(mqPaused ? t.mq.play : t.mq.pause) + '">' + (mqPaused ? '▶' : '❚❚') + '</button></div>' +
    '<div class="w96 c">' +
      '<h1>' + esc(t.name) + '</h1><hr>' +
      '<p><b>' + esc(t.role) + '</b><span class="new">NEW!</span></p>' +
      '<p><i>' + esc(t.tagline) + '</i></p>' +
      '<p style="margin-top:.8rem"><a href="mailto:' + EMAIL + '">' + esc(t.cta) + '</a> &nbsp;|&nbsp; ' +
        '<a href="resume.pdf" download>' + esc(p.resume) + '</a></p>' +
    '</div>' +
    '<div class="w96"><h2>' + esc(t.sec.about) + '</h2>' +
      '<figure class="snap portrait"><img src="' + FILE.hero + '" alt="' + esc(p.alt.hero) + '" loading="lazy"' + dim('hero') + '>' +
      '<figcaption>' + esc(p.cap.hero) + '</figcaption></figure>' +
      '<p>' + esc(t.intro) + '</p><div style="clear:both"></div></div>' +
    '<div class="w96"><h2>' + esc(t.sec.work) + '</h2>' +
      t.projects.map(function (pr, n) {
        return '<h3>' + esc(pr.t) + (n === 1 ? '<span class="new">NEW!</span>' : '') + '</h3>' +
               '<p><i>' + esc(pr.k) + '</i></p><ul>' + li(pr.b) + '</ul>' +
               (n < t.projects.length - 1 ? '<hr>' : '');
      }).join('') +
    '</div>' +
    '<div class="w96"><h2>' + esc(t.sec.skills) + '</h2><table><tbody>' +
      t.skills.map(function (s) {
        return '<tr><td class="lbl">' + esc(s.g) + '</td><td>' + esc(s.i.join(', ')) + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
    '<div class="w96"><h2>' + esc(t.sec.edu) + '</h2><table><tbody>' +
      t.edu.map(function (e) {
        return '<tr><td class="lbl">' + esc(e.y) + '</td><td><b>' + esc(e.t) + '</b><br>' + esc(e.d) + '</td></tr>';
      }).join('') + '</tbody></table><hr><ul>' + li(t.certs) + '</ul></div>' +
    '<div class="w96"><h2>' + esc(t.sec.speak) + '</h2><p>' + esc(t.speak) + '</p>' +
      '<div class="snaps" style="margin-top:1rem">' + STAGE.map(snap).join('') + '</div></div>' +
    '<div class="w96"><h2>' + esc(t.sec.art) + '</h2><p>' + esc(t.art) + '</p>' +
      '<div class="snaps" style="margin-top:1rem">' + ART.map(snap).join('') + '</div></div>' +
    '<div class="w96"><h2>' + esc(t.sec.contact) + '</h2><table><tbody>' +
      '<tr><td class="lbl">' + esc(t.fields.email) + '</td><td><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></td></tr>' +
      '<tr><td class="lbl">' + esc(t.fields.phone) + '</td><td>' + PHONE + '</td></tr>' +
      '<tr><td class="lbl">' + esc(t.fields.linkedin) + '</td><td><a href="' + LINKEDIN + '">' + esc(t.fields.linkedin) + '</a></td></tr>' +
      '</tbody></table></div>' +
    '<div class="w96 c"><p>' + esc(p.visitors) + '</p><p class="counter">00013827</p>' +
      '<hr><p style="font-size:.8rem">' + esc(p.bestViewed) + '</p></div>';
  },

  /* ── 2007 · Web 2.0 ── */
  2007: function (t) {
    var p = t.ph;
    var shot = function (key) {
      return '<figure class="shot"><img src="' + FILE[key] + '" alt="' + esc(p.alt[key]) +
             '" loading="lazy"' + dim(key) + '><figcaption>' + esc(p.cap[key]) + '</figcaption></figure>';
    };
    return stamp(t, 2007) +
    '<div class="pod"><div class="hero2007">' +
      '<figure class="avatar"><img src="' + PORTRAIT + '" alt="' + esc(p.alt.hero) + '" loading="lazy"' + dim('portrait') + '></figure>' +
      '<div><h1>' + esc(t.name) + '<span class="tag2">beta</span></h1>' +
      '<p style="font-size:1.15rem;margin-top:.6rem"><b>' + esc(t.role) + '</b> · ' + esc(t.loc) + '</p>' +
      '<p style="margin-top:.5rem"><i>' + esc(t.tagline) + '</i></p>' +
      '<p style="margin-top:1.2rem"><a class="glossbtn" href="mailto:' + EMAIL + '">' + esc(t.cta) + '</a>' +
      ' <a class="glossbtn" href="resume.pdf" download>' + esc(p.resume) + '</a></p></div>' +
    '</div></div>' +
    '<div class="pod"><h2>' + esc(t.sec.about) + '</h2><p>' + esc(t.intro) + '</p></div>' +
    '<div class="grid-2">' +
      t.projects.map(function (pr) {
        return '<div class="pod"><h3>' + esc(pr.t) + '</h3>' +
               '<p style="color:#655A5E;font-size:.82rem;margin:.15rem 0 .6rem">' + esc(pr.k) + '</p>' +
               '<ul>' + li(pr.b) + '</ul></div>';
      }).join('') +
    '</div>' +
    '<div class="pod"><h2>' + esc(t.sec.skills) + '</h2><div class="cloud">' +
      t.skills.reduce(function (acc, s) { return acc.concat(s.i); }, []).map(function (x, n) {
        var size = 0.85 + ((n * 7) % 5) * 0.16;
        return '<span style="font-size:' + size.toFixed(2) + 'rem">' + esc(x) + '</span>';
      }).join('') +
    '</div></div>' +
    '<div class="pod"><h2>' + esc(t.sec.edu) + '</h2>' +
      t.edu.map(function (e) {
        return '<div style="margin-bottom:.9rem"><h3>' + esc(e.t) + '</h3>' +
               '<p style="color:#655A5E;font-size:.82rem">' + esc(e.y) + '</p><p>' + esc(e.d) + '</p></div>';
      }).join('') + '<ul>' + li(t.certs) + '</ul></div>' +
    '<div class="pod"><h2>' + esc(t.sec.speak) + '</h2><p>' + esc(t.speak) + '</p>' +
      '<div class="shots">' + STAGE.map(shot).join('') + '</div></div>' +
    '<div class="pod"><h2>' + esc(t.sec.art) + '</h2><p>' + esc(t.art) + '</p>' +
      '<div class="shots">' + ART.map(shot).join('') + '</div></div>' +
    '<div class="pod"><h2>' + esc(t.sec.contact) + '</h2><dl>' +
      '<div><dt>' + esc(t.fields.email) + '</dt><dd><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></dd></div>' +
      '<div><dt>' + esc(t.fields.phone) + '</dt><dd>' + PHONE + '</dd></div>' +
      '<div><dt>' + esc(t.fields.location) + '</dt><dd>' + esc(t.loc) + '</dd></div>' +
      '<div><dt>' + esc(t.fields.status) + '</dt><dd>' + esc(t.status) + '</dd></div>' +
    '</dl></div>';
  },

  /* ── 2015 · flat ── */
  2015: function (t) {
    var p = t.ph;
    var card = function (key, extra) {
      return '<div class="card15"><img class="flat-img" src="' + FILE[key] + '" alt="' + esc(p.alt[key]) +
             '" loading="lazy"' + dim(key) + '><h3>' + esc(p.cap[key]) + '</h3>' + (extra || '') + '</div>';
    };
    return '<div class="hero15"><div class="era__in">' +
        stamp(t, 2015) +
        '<img class="av15" src="' + PORTRAIT + '" alt="' + esc(p.alt.hero) + '" width="132" height="132">' +
        '<h1>' + esc(t.name) + '</h1>' +
        '<p style="font-size:1.15rem">' + esc(t.role) + '</p>' +
        '<p>' + esc(t.tagline) + '</p>' +
        '<a class="ghost" href="mailto:' + EMAIL + '">' + esc(t.cta) + '</a>' +
        '<a class="ghost" href="resume.pdf" download>' + esc(p.resume) + '</a>' +
      '</div></div>' +
      '<div class="band"><div class="era__in">' +
        '<h2>' + esc(t.sec.about) + '</h2><p class="lede">' + esc(t.intro) + '</p>' +
      '</div></div>' +
      '<div class="band band--alt"><div class="era__in">' +
        '<h2>' + esc(t.sec.work) + '</h2><p class="lede">' + esc(t.loc) + '</p>' +
        '<div class="grid15">' + t.projects.map(function (pr) {
          return '<div class="card15"><p class="kind">' + esc(pr.k) + '</p><h3>' + esc(pr.t) + '</h3>' +
                 '<ul style="margin-top:.6rem">' + li(pr.b) + '</ul></div>';
        }).join('') + '</div>' +
      '</div></div>' +
      '<div class="band"><div class="era__in">' +
        '<h2>' + esc(t.sec.skills) + '</h2><div class="grid15">' +
        t.skills.map(function (s) {
          return '<div class="card15"><h3>' + esc(s.g) + '</h3><ul style="margin-top:.5rem">' + li(s.i) + '</ul></div>';
        }).join('') + '</div>' +
      '</div></div>' +
      '<div class="band band--alt"><div class="era__in">' +
        '<h2>' + esc(t.sec.edu) + '</h2><div class="grid15">' +
        t.edu.map(function (e) {
          return '<div class="card15"><p class="kind">' + esc(e.y) + '</p><h3>' + esc(e.t) + '</h3>' +
                 '<p style="margin-top:.4rem">' + esc(e.d) + '</p></div>';
        }).join('') +
        '<div class="card15"><p class="kind">+</p><ul style="margin-top:.5rem">' + li(t.certs) + '</ul></div>' +
        '</div>' +
      '</div></div>' +
      '<div class="band"><div class="era__in">' +
        '<h2>' + esc(t.sec.speak) + '</h2><p class="lede">' + esc(t.speak) + '</p>' +
        '<div class="grid15">' + STAGE.map(function (k) { return card(k); }).join('') + '</div>' +
      '</div></div>' +
      '<div class="band band--alt"><div class="era__in">' +
        '<h2>' + esc(t.sec.art) + '</h2><p class="lede">' + esc(t.art) + '</p>' +
        '<div class="grid15">' + ART.map(function (k) { return card(k); }).join('') + '</div>' +
      '</div></div>' +
      '<div class="band band--dark"><div class="era__in">' +
        '<h2>' + esc(t.sec.contact) + '</h2><dl style="margin-top:1.5rem">' +
        '<div><dt>' + esc(t.fields.email) + '</dt><dd><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></dd></div>' +
        '<div><dt>' + esc(t.fields.phone) + '</dt><dd>' + PHONE + '</dd></div>' +
        '<div><dt>' + esc(t.fields.location) + '</dt><dd>' + esc(t.loc) + '</dd></div>' +
        '<div><dt>' + esc(t.fields.status) + '</dt><dd>' + esc(t.status) + '</dd></div>' +
      '</dl></div></div>';
  },

  /* ── 2026 · now ── */
  2026: function (t) {
    var p = t.ph;
    var gal = function (keys) {
      return '<div class="gal">' + keys.map(function (k) {
        return '<figure><img src="' + FILE[k] + '" alt="' + esc(p.alt[k]) + '" loading="lazy"' + dim(k) + '>' +
               '<figcaption>' + esc(p.cap[k]) + '</figcaption></figure>';
      }).join('') + '</div>';
    };
    return stamp(t, 2026) +
    '<div class="grp"><div class="hero26">' +
      '<div><h1>' + esc(t.name) + '</h1>' +
      '<p class="lede26">' + esc(t.role) + '. ' + esc(t.tagline) + '</p>' +
      '<p style="margin-top:1.3rem;max-width:60ch">' + esc(t.intro) + '</p>' +
      '<a class="cta" href="mailto:' + EMAIL + '">' + esc(t.cta) + '</a>' +
      '<a class="cta2" href="resume.pdf" download>' + esc(p.resume) + '</a></div>' +
      '<img src="' + FILE.hero + '" alt="' + esc(p.alt.hero) + '" width="600" height="750">' +
    '</div></div>' +
    '<div class="grp"><h2>' + esc(t.sec.work) + '</h2>' +
      t.projects.map(function (pr) {
        return '<div class="row"><p class="kind">' + esc(pr.k) + '</p>' +
               '<div><h3>' + esc(pr.t) + '</h3><ul>' + li(pr.b) + '</ul></div></div>';
      }).join('') +
    '</div>' +
    '<div class="grp"><h2>' + esc(t.sec.skills) + '</h2>' +
      t.skills.map(function (s) {
        return '<div class="row"><p class="kind">' + esc(s.g) + '</p>' +
               '<div><ul class="chips">' + li(s.i) + '</ul></div></div>';
      }).join('') +
    '</div>' +
    '<div class="grp"><h2>' + esc(t.sec.edu) + '</h2>' +
      t.edu.map(function (e) {
        return '<div class="row"><p class="kind">' + esc(e.y) + '</p>' +
               '<div><h3>' + esc(e.t) + '</h3><p style="margin-top:.4rem">' + esc(e.d) + '</p></div></div>';
      }).join('') +
      '<div class="row"><p class="kind">+</p><div><ul>' + li(t.certs) + '</ul></div></div>' +
    '</div>' +
    '<div class="grp"><h2>' + esc(t.sec.speak) + '</h2><p>' + esc(t.speak) + '</p>' + gal(STAGE) + '</div>' +
    '<div class="grp"><h2>' + esc(t.sec.art) + '</h2><p>' + esc(t.art) + '</p>' + gal(ART) + '</div>' +
    '<div class="grp"><h2>' + esc(t.sec.contact) + '</h2><dl>' +
      '<div><dt>' + esc(t.fields.email) + '</dt><dd><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></dd></div>' +
      '<div><dt>' + esc(t.fields.phone) + '</dt><dd><a href="tel:+919380428285">' + PHONE + '</a></dd></div>' +
      '<div><dt>' + esc(t.fields.linkedin) + '</dt><dd><a href="' + LINKEDIN + '" target="_blank" rel="noopener">/zoya-sayeeda-ahmed</a></dd></div>' +
      '<div><dt>' + esc(t.fields.status) + '</dt><dd>' + esc(t.status) + '</dd></div>' +
    '</dl></div>';
  }
};

/* ════════════════ RENDER ════════════════ */
var YEARS = [1960, 1984, 1996, 2007, 2015, 2026];
var root = document.documentElement;
var current = 'en';

function render(code) {
  var base = T[code];
  if (!base) return;
  current = code;
  var t = Object.assign({}, base, { ph: PHOTOS[code] || PHOTOS.en });

  root.lang = t.htmlLang;
  root.dir = 'ltr';   /* chrome stays LTR; only the content blocks flip */

  YEARS.forEach(function (y) {
    var sec = document.getElementById('e' + y);
    var host = y === 2015 ? sec : sec.querySelector('.era__in');
    host.innerHTML = TPL[y](t);
    Array.prototype.forEach.call(sec.children, function () {});
    var stale = sec.querySelectorAll('.egg-slot, .jump');
    Array.prototype.forEach.call(stale, function (n) { if (n.parentNode === sec) n.parentNode.removeChild(n); });
    sec.insertAdjacentHTML('beforeend',
      '<div class="egg-slot"><button type="button" class="dnp" data-egg="' + y + '">' +
      esc(t.ph.egg.label) + '</button></div>' + jumpBar(t, y));
    sec.setAttribute('dir', t.dir);
    sec.setAttribute('lang', t.htmlLang);
  });

  document.getElementById('g-name').textContent = t.name;
  document.getElementById('g-role').textContent = t.role;
  document.getElementById('g-pick').textContent = t.pick;
  document.getElementById('g-hint').textContent = t.hint;
  document.getElementById('g-down').textContent = t.start;
  document.getElementById('g-cv').textContent = t.ph.resume;
  document.getElementById('g-photo').alt = t.ph.alt.hero;
  var gate = document.getElementById('gate');
  gate.setAttribute('dir', t.dir);
  gate.setAttribute('lang', t.htmlLang);

  document.querySelectorAll('.langbar button, .gate__langs button').forEach(function (b) {
    b.setAttribute('aria-pressed', b.dataset.lang === code ? 'true' : 'false');
  });

  try { localStorage.setItem('zsa-lang', code); } catch (e) {}
}

function buildSwitch(host, full) {
  host.innerHTML = Object.keys(T).map(function (code) {
    return '<button type="button" data-lang="' + code + '" aria-pressed="false" lang="' + T[code].htmlLang + '">' +
           esc(full ? T[code].label : T[code].tag) + '</button>';
  }).join('');
  host.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-lang]');
    if (!b) return;
    var keep = window.scrollY;
    render(b.dataset.lang);
    window.scrollTo(0, keep);   /* switching language must not throw away your place */
  });
}
buildSwitch(document.getElementById('langbar-top'), false);
buildSwitch(document.getElementById('langbar-gate'), true);

var saved = null;
try { saved = localStorage.getItem('zsa-lang'); } catch (e) {}
render(saved && T[saved] ? saved : 'en');

/* Marquee stop control. Delegated, so it survives a language re-render. */
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-mq]');
  if (!b) return;
  mqPaused = !mqPaused;
  document.getElementById('e1996').classList.toggle('mq-paused', mqPaused);
  var t = T[current];
  b.setAttribute('aria-pressed', mqPaused ? 'true' : 'false');
  b.setAttribute('aria-label', mqPaused ? t.mq.play : t.mq.pause);
  b.textContent = mqPaused ? '▶' : '❚❚';
});

/* ════════════════ ROUTING ════════════════
   One decade at a time. The switcher is the only way between them, and the
   hash keeps them linkable and back-button friendly. */
var onViewChange = null;
var railLinks = Array.prototype.slice.call(document.querySelectorAll('#rail a'));
var gateEl = document.getElementById('gate');
var themeMeta = document.querySelector('meta[name=theme-color]');

function showView(name, push) {
  var isGate = name === 'gate';
  gateEl.classList.toggle('is-active', isGate);
  YEARS.forEach(function (y) {
    document.getElementById('e' + y).classList.toggle('is-active', String(y) === name);
  });
  railLinks.forEach(function (a) {
    a.setAttribute('aria-current', a.getAttribute('href') === '#' + name ? 'true' : 'false');
  });
  var active = isGate ? gateEl : document.getElementById('e' + name);
  if (!active) return;
  themeMeta.setAttribute('content', getComputedStyle(active).backgroundColor);
  if (push) {
    if (location.hash !== '#' + name) history.pushState({ v: name }, '', '#' + name);
    window.scrollTo(0, 0);
    active.setAttribute('tabindex', '-1');
    active.focus({ preventScroll: true });
  }
  if (typeof onViewChange === 'function') onViewChange(name);
}

function viewFromHash() {
  var h = (location.hash || '').replace('#', '');
  if (h === 'gate' || YEARS.indexOf(parseInt(h, 10)) > -1) return h;
  return 'gate';
}

document.addEventListener('click', function (e) {
  var a = e.target.closest('a[href^="#"]');
  if (!a) return;
  var target = a.getAttribute('href').slice(1);
  if (target !== 'gate' && YEARS.indexOf(parseInt(target, 10)) < 0) return;
  e.preventDefault();
  showView(target, true);
});
window.addEventListener('popstate', function () { showView(viewFromHash(), false); window.scrollTo(0, 0); });

/* Router is live once its dependencies above are assigned. */
showView(viewFromHash(), false);

/* Sequential navigation at the foot of each decade. */
function jumpBar(t, year) {
  var i = YEARS.indexOf(year);
  var prev = i > 0 ? YEARS[i - 1] : null;
  var next = i < YEARS.length - 1 ? YEARS[i + 1] : null;
  var links = '';
  if (prev) links += '<a href="#' + prev + '">← ' + prev + '</a>';
  links += '<a href="#gate">' + esc(t.ph.backToStart) + '</a>';
  if (next) links += '<a class="jump--next" href="#' + next + '">' + next + ' →</a>';
  return '<div class="jump"><div class="jump__in">' +
    '<p class="jump__now">' + esc(t.ph.endOf).replace('{year}', year) + '</p>' +
    '<div class="jump__links">' + links + '</div></div></div>';
}

/* ════════════════ "DO NOT PRESS" ════════════════ */
var eggEl = document.getElementById('egg');
var eggTimer = null;

var EGGS = {
  1960: function (t) {
    var lines = ['ILLEGAL INSTRUCTION AT 0x00A4', 'CORE DUMP FOLLOWS', '0x00A4  4F 52 20 44 4F 4E 27 54',
                 '0x00AC  20 50 52 45 53 53 20 49', '0x00B4  54 20 41 47 41 49 4E 2E',
                 'PARITY CHECK 2', 'TAPE DRIVE 1 OFFLINE', 'OPERATOR INTERVENTION REQUIRED'];
    return { cls: 'egg-1960',
      html: lines.map(function (l) { return '<b>&gt; ' + esc(l) + '</b>'; }).join('') +
            '<span class="halt">SYSTEM HALTED</span>' };
  },
  1984: function (t) {
    return { cls: 'egg-1984',
      html: '<div class="box"><div class="bomb">💣</div>' +
            '<h3>Sorry, a system error occurred.</h3>' +
            '<p>' + esc(t.ph.egg.told) + '</p><p>ID = 01</p>' +
            '<span class="btn84">Restart</span></div>' };
  },
  1996: function (t) {
    return { stages: [
      { cls: 'egg-1996 is-waiting', ms: 1800,
        html: '<p class="wait">Please wait while your computer shuts down…</p>' },
      { cls: 'egg-1996',
        html: '<p class="safe">It&rsquo;s now safe to turn off<br>your computer.</p>' }
    ] };
  },
  /* Popups, then the machine gives up: blue screen, black, and a reboot into
     a fake BIOS POST. The popups causing the crash is the joke. */
  2007: function (t) {
    var pops = [
      { x: '8%',  y: '14%', bar: 'Congratulations!', b: 'You are visitor 1,000,000!', p: t.ph.egg.prize },
      { x: '46%', y: '30%', bar: 'Special offer',    b: 'Download our toolbar', p: t.ph.egg.toolbar },
      { x: '20%', y: '52%', bar: 'Alert',            b: 'Your PC may be slow', p: t.ph.egg.slow }
    ];
    return { stages: [
      { cls: 'egg-2007', ms: 2400,
        html: pops.map(function (o) {
          return '<div class="pop" style="left:' + o.x + ';top:' + o.y + '">' +
                 '<div class="pop__bar">' + esc(o.bar) + '</div>' +
                 '<div class="pop__body"><b>' + esc(o.b) + '</b>' + esc(o.p) +
                 '<div><span class="pop__btn">OK</span></div></div></div>';
        }).join('') },
      { cls: 'egg-bsod', ms: 3000,
        html: '<div class="in"><span class="stop">' + esc(t.ph.egg.bsodTitle) + '</span>' +
              '<p>' + esc(t.ph.egg.bsodBody) + '</p>' +
              '<p class="code">*** STOP: 0x0000007B (0xF78D2524, 0xC0000034, 0x00000000)<br>' +
              'TOO_MANY_POPUPS</p></div>' },
      { cls: 'egg-black', ms: 900, html: '' },
      { cls: 'egg-post',
        html: '<span class="ln"><b>ZSA BIOS (C) 2007 Ahmed Softworks, Inc.</b></span>' +
              '<span class="ln">BIOS Date: 07/26/07  Version 6.00PG</span>' +
              '<span class="ln">&nbsp;</span>' +
              '<span class="ln">Main Processor : ZSA-Core 3.0 GHz</span>' +
              '<span class="ln">Memory Test : 262144K OK</span>' +
              '<span class="ln">&nbsp;</span>' +
              '<span class="ln">' + esc(t.ph.egg.postDone) + '</span>' }
    ] };
  },
  2015: function (t) {
    return { cls: 'egg-2015',
      html: '<div><p class="big">' + esc(t.ph.egg.flat) + '</p>' +
            '<div class="rects"><i></i><i></i><i></i></div></div>' };
  },
  2026: function (t) {
    return { cls: 'egg-2026',
      html: '<div><p class="gen">' + esc(t.ph.egg.regen) + '</p>' +
            '<div class="bar"><i></i></div>' +
            '<p class="done">' + esc(t.ph.egg.regenDone) + '</p></div>' };
  }
};

function closeEgg() {
  clearTimeout(eggTimer);
  eggEl.hidden = true;
  eggEl.className = '';
  eggEl.innerHTML = '';
  document.body.style.overflow = '';
}

function openEgg(year) {
  var t = Object.assign({}, T[current], { ph: PHOTOS[current] || PHOTOS.en });
  var make = EGGS[year];
  if (!make) return;
  var spec = make(t);
  var stages = spec.stages || [spec];
  var paint = function (s) {
    eggEl.className = s.cls;
    eggEl.innerHTML = s.html + '<p class="egg__hint">' + esc(t.ph.egg.dismiss) + '</p>';
  };
  /* Timed sequences are motion. Under reduced motion, land on the final state
     immediately rather than marching through the stages. */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    paint(stages[stages.length - 1]);
  } else {
    var i = 0;
    var step = function () {
      paint(stages[i]);
      if (stages[i].ms && i < stages.length - 1) { i++; eggTimer = setTimeout(step, stages[i - 1].ms); }
    };
    step();
  }
  eggEl.hidden = false;
  document.body.style.overflow = 'hidden';
  eggEl.focus && eggEl.setAttribute('tabindex', '-1');
  eggEl.focus && eggEl.focus({ preventScroll: true });
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-egg]');
  if (b) { openEgg(b.getAttribute('data-egg')); return; }
  if (!eggEl.hidden && eggEl.contains(e.target)) closeEgg();
});
document.addEventListener('keydown', function (e) {
  if (!eggEl.hidden && (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); closeEgg(); }
});

/* ════════════════ 2026 · generative field ════════════════ */
(function () {
  var cv = document.getElementById('field');
  var ctx = cv && cv.getContext && cv.getContext('2d');
  if (!ctx) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var host = document.getElementById('e2026');
  var W = 0, H = 0, blobs = [], running = false;
  var COLORS = ['#7B1526', '#9B1B30', '#5A0F1E', '#B4283F'];

  function seed() {
    blobs = [];
    for (var i = 0; i < 12; i++) {
      blobs.push({ x: Math.random(), y: Math.random(), r: 0.18 + Math.random() * 0.3,
        c: COLORS[i % COLORS.length], a: 0.2,
        px: Math.random() * 6.28, py: Math.random() * 6.28,
        sx: 0.00008 + Math.random() * 0.00015, sy: 0.00008 + Math.random() * 0.00015,
        ax: 0.05 + Math.random() * 0.1, ay: 0.05 + Math.random() * 0.1 });
    }
  }
  function size() {
    var d = Math.min(window.devicePixelRatio || 1, 1.5);
    var r = host.getBoundingClientRect();
    W = cv.width = Math.max(1, Math.floor(r.width * d));
    H = cv.height = Math.max(1, Math.floor(r.height * d));
  }
  function draw(ts) {
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'screen';
    var m = Math.max(W, H);
    blobs.forEach(function (b) {
      var x = (b.x + Math.sin(ts * b.sx + b.px) * b.ax) * W;
      var y = (b.y + Math.cos(ts * b.sy + b.py) * b.ay) * H;
      var rr = b.r * m;
      var g = ctx.createRadialGradient(x, y, 0, x, y, rr);
      g.addColorStop(0, b.c); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = b.a; ctx.beginPath(); ctx.arc(x, y, rr, 0, 6.2832);
      ctx.fillStyle = g; ctx.fill();
    });
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  }
  function loop(ts) { draw(ts); if (running) requestAnimationFrame(loop); }
  function start() {
    if (reduced.matches) { running = false; draw(8000); return; }
    if (running) return; running = true; requestAnimationFrame(loop);
  }
  seed(); size();
  // Only runs while 2026 is the visible page.
  onViewChange = function (name) { if (name === '2026') { size(); start(); } else { running = false; } };
  if (document.getElementById('e2026').classList.contains('is-active')) start(); else draw(8000);

  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt); rt = setTimeout(function () { size(); if (!running) draw(8000); }, 160);
  });
  reduced.addEventListener('change', function () { running = false; setTimeout(start, 20); });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) running = false; else start();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) { size(); start(); } else { running = false; }
    }, { threshold: 0 }).observe(host);
  }
})();

})();
