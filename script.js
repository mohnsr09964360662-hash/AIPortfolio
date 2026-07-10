const translations = {
    en: {
        navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects",
        greeting: "Hello, World! I am", specializing: "Specializing in",
        heroDesc: "AI Engineering student with 3+ years of hands-on experience in machine learning, computer vision, deep learning, and full-stack mobile development. Driven by innovation and turning ideas into real-world products.",
        viewWork: "View My Work", contactMe: "Let's Talk",
        about: "About", me: "Me", aboutTitle: "Transforming Ideas into Intelligent Systems",
        aboutP1: "I am a passionate AI Engineering student and ML Researcher. My expertise spans building end-to-end AI-powered systems, from autonomous vehicles to intelligent chatbots and real-time vision pipelines.",
        aboutP2: "As an experienced trainer and educator, I have a proven track record in teaching programming and AI concepts to youth and university students, blending entrepreneurial thinking with deep technical knowledge.",
        statYears: "Years Exp", statProjects: "Major Projects", statStudents: "Students Trained",
        tech: "Tech", stack: "Stack", skillLang: "Languages", skillAI: "AI & Machine Learning", skillDev: "App & Game Dev",
        featured: "Featured", projects: "Projects", filterAll: "All",
        proj1Title: "Self-Driving Car", proj1Desc: "Fully autonomous vehicle capable of lane detection, road sign recognition, intersection handling, and path planning using computer vision.",
        proj2Title: "Intelligent Sports Club", proj2Desc: "Full-featured sports club app with member management, AI-powered progress tracking, workout recommendation engine, and real-time chat.",
        proj3Title: "CV Body Measurement", proj3Desc: "Real-time body measurement estimation via camera using pose detection. Fused with NLP expert system to generate personalized diet plans.",
        proj4Title: "Age Recognition System", proj4Desc: "Facial analysis system combining computer vision and an expert system to estimate age ranges using feature extraction and rule-based reasoning.",
        proj5Title: "RASA Sports Chatbot", proj5Desc: "Conversational AI assistant for gym environments covering workouts, nutrition, and health guidance with custom NLU pipelines.",
        proj6Title: "Unity 6 Game Development", proj6Desc: "Developed 3 fully functional games: Subway Runner (endless), FPS Tactical Shooter, and Monster Chase (adventure with AI enemies).",
        proj7Title: "Professional Websites + AI Bot", proj7Desc: "Designed and deployed fully functional professional websites integrated with automated customer service bots.",
        proj8Title: "Zoo Management System", proj8Desc: "Desktop application managing enclosures, clinic, and warehouses with full MySQL database schema and OOP architecture.",
        initiate: "Initiate", connection: "Connection", contactHead: "Let's Build the Future Together", contactText: "I'm currently open for new opportunities. Whether you have a question, a project idea, or just want to discuss AI, my inbox is open.",
        yourName: "Your Name", yourEmail: "Your Email", messageData: "Message Data", transmitMsg: "Transmit Message",
        typingTexts: ["Machine Learning", "Computer Vision", "Flutter Development", "NLP", "Expert Systems", "Game Dev"]
    },
    ar: {
        navHome: "الرئيسية", navAbout: "من أنا", navSkills: "مهاراتي", navProjects: "أعمالي",
        greeting: "أهلاً بالعالم! أنا", specializing: "متخصص في",
        heroDesc: "طالب هندسة ذكاء اصطناعي بخبرة تزيد عن 3 سنوات في تعلم الآلة، الرؤية الحاسوبية، والتعلم العميق، بالإضافة إلى تطوير تطبيقات الموبايل المتكاملة. أسعى دائماً لتحويل الأفكار المبتكرة إلى منتجات حقيقية.",
        viewWork: "شاهد أعمالي", contactMe: "لنتواصل",
        about: "عن", me: "نفسي", aboutTitle: "تحويل الأفكار إلى أنظمة ذكية",
        aboutP1: "أنا طالب شغوف بهندسة الذكاء الاصطناعي وباحث في تعلم الآلة. خبرتي تغطي بناء أنظمة متكاملة تعتمد على الذكاء الاصطناعي، بدءاً من السيارات ذاتية القيادة إلى روبوتات المحادثة الذكية وأنظمة الرؤية الحاسوبية بالزمن الحقيقي.",
        aboutP2: "كمدرب ومعلم ذو خبرة، لدي سجل حافل في تدريس مفاهيم البرمجة والذكاء الاصطناعي للشباب وطلاب الجامعات، حيث أدمج بين التفكير الريادي والمعرفة التقنية العميقة.",
        statYears: "سنوات خبرة", statProjects: "مشاريع ضخمة", statStudents: "طلاب دربتهم",
        tech: "المهارات", stack: "التقنية", skillLang: "لغات البرمجة", skillAI: "الذكاء الاصطناعي", skillDev: "تطوير التطبيقات والألعاب",
        featured: "أبرز", projects: "المشاريع", filterAll: "الكل",
        proj1Title: "السيارة ذاتية القيادة", proj1Desc: "سيارة ذاتية القيادة بالكامل قادرة على اكتشاف المسار، التعرف على اللوحات المرورية، وتخطيط المسار باستخدام الرؤية الحاسوبية.",
        proj2Title: "تطبيق النادي الرياضي الذكي", proj2Desc: "تطبيق متكامل للنادي الرياضي يشمل إدارة الأعضاء، تتبع التقدم بالذكاء الاصطناعي، نظام توصية للتمارين، ومحادثة فورية.",
        proj3Title: "نظام قياس الجسم بالرؤية الحاسوبية", proj3Desc: "تقدير قياسات الجسم بالزمن الحقيقي عبر الكاميرا. مدمج مع نظام خبير لغوي لتوليد خطط غذائية مخصصة.",
        proj4Title: "نظام التعرف على العمر", proj4Desc: "نظام تحليل الوجه يدمج بين الرؤية الحاسوبية والأنظمة الخبيرة لتقدير الفئات العمرية باستخدام استخراج الميزات وقواعد المنطق.",
        proj5Title: "شات بوت رياضي بـ RASA", proj5Desc: "مساعد ذكاء اصطناعي للمحادثة في بيئة النوادي الرياضية يغطي التمارين، التغذية، والتوجيه الصحي بنماذج NLU مخصصة.",
        proj6Title: "تطوير ألعاب Unity 6", proj6Desc: "طورت 3 ألعاب متكاملة: Subway Runner (ركض لا نهائي)، FPS (تصويب تكتيكي)، و Monster Chase (مغامرة مع أعداء بذكاء اصطناعي).",
        proj7Title: "مواقع احترافية + بوت ذكي", proj7Desc: "تصميم ونشر مواقع ويب احترافية متكاملة مع بوتات خدمة عملاء مؤتمتة وتوليدية.",
        proj8Title: "نظام إدارة حديقة الحيوان", proj8Desc: "تطبيق مكتبي لإدارة الأقسام والعيادة والمستودعات بهيكلية OOP وقاعدة بيانات MySQL متكاملة.",
        initiate: "ابدأ", connection: "التواصل", contactHead: "لنبنِ المستقبل معاً", contactText: "أنا متاح دائماً للفرص الجديدة. سواء كان لديك سؤال، فكرة مشروع، أو ترغب فقط في النقاش حول الذكاء الاصطناعي، يمكنك مراسلتي.",
        yourName: "الاسم", yourEmail: "البريد الإلكتروني", messageData: "الرسالة", transmitMsg: "إرسال الرسالة",
        typingTexts: ["تعلم الآلة", "الرؤية الحاسوبية", "تطوير تطبيقات Flutter", "معالجة اللغات الطبيعية", "الأنظمة الخبيرة", "تطوير الألعاب"]
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // Update simple translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update button text
    const langBtn = document.getElementById('langToggle');
    langBtn.textContent = lang === 'ar' ? 'English' : 'عربي';

    // Restart Typing effect
    texts = translations[lang].typingTexts;
    count = 0; index = 0; currentText = ""; letter = ""; isDeleting = false;
}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'ar' : 'en');
});


// =============== MOBILE NAVIGATION ===============
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// =============== TYPING EFFECT ===============
let texts = translations['en'].typingTexts;
let count = 0, index = 0, currentText = "", letter = "", isDeleting = false;
const typingDelay = 100, erasingDelay = 50, newTextDelay = 2000;
const typingTextElement = document.querySelector('.typing-text');

function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    typingTextElement.textContent = letter;

    let typeSpeed = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (texts.length) setTimeout(type, newTextDelay + 250);
});

// =============== SCROLL REVEAL ANIMATION ===============
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); 

// =============== COUNTER ANIMATION ===============
const counters = document.querySelectorAll('.counter');
let started = false;
function animateCounters() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;
    const elementTop = aboutSection.getBoundingClientRect().top;
    
    if (elementTop < window.innerHeight && !started) {
        counters.forEach(counter => {
            counter.innerText = '0';
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                const increment = target / 30;
                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 40);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
        started = true;
    }
}
window.addEventListener("scroll", animateCounters);

// =============== PORTFOLIO FILTERING ===============
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.classList.contains(filterValue)) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
});
