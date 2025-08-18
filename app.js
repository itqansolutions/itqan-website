/* =========================
   Page transitions (internal links)
   ========================= */
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-link]');
  if (!a) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin) return; // external
  e.preventDefault();
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.add('active');
  setTimeout(() => { location.href = a.href; }, 420);
});

/* =========================
   i18n (EN/AR)
   ========================= */
const i18n = {
  en: {
    // Nav + Hero + Intro
    'nav.home':'Home','nav.about':'About','nav.services':'Services','nav.portfolio':'Portfolio','nav.blog':'Blog','nav.contact':'Contact',
    'cta.quote':'Request a Quote','hero.discover':'Discover Services','hero.contact':'Get in Touch',
    'intro.title':'Built for results, not just deliverables.',
    'intro.text':'End-to-end delivery from development, POS systems, and websites to digital marketing and growth strategies.',

    // Services
    'services.title':'Our Services',
    'services.dev.title':'Software Development',
    'services.dev.desc':'Custom systems tailored to your business needs.',
    'services.pos.title':'POS Systems',
    'services.pos.desc':'Offline/online, bilingual, secure POS for retail & restaurants.',
    'services.web.title':'Websites & eCommerce',
    'services.web.desc':'Modern, responsive, SEO-friendly websites.',
    'services.mobile.title':'Mobile Apps',
    'services.mobile.desc':'iOS & Android apps with smooth user experience.',
    'services.marketing.title':'Digital Marketing',
    'services.marketing.desc':'Social media, campaigns, and online growth strategies.',
    'services.branding.title':'Branding & Design',
    'services.branding.desc':'Logos, identity, and professional visuals.',

    // POS Spotlight
    'pos.title':'POS Spotlight',
    'pos.li1':'Bilingual (EN/AR) + RTL',
    'pos.li2':'Reports, Returns, Discounts, COGS',
    'pos.li3':'Offline-first, secure licensing',
    'pos.cta':'See POS Demo',

    // Testimonials
    'testimonials.title':'What Our Clients Say',
    'testimonials.t1.text':'“Itqan’s POS transformed our sales process, easy to use and reliable.”',
    'testimonials.t1.author':'— Ahmed, Retail Owner',
    'testimonials.t2.text':'“The website and marketing boosted our leads by 40% in 3 months.”',
    'testimonials.t2.author':'— Sara, Marketing Manager',
    'testimonials.t3.text':'“Professional, bilingual support made all the difference for our business.”',
    'testimonials.t3.author':'— Omar, Restaurant Owner',

    // Blog
    'blog.latest':'Latest Blog Posts',
    'blog.readmore':'Read More',
    'blog.p1.title':'How POS Systems Transform Retail',
    'blog.p1.desc':'Discover how modern POS systems improve efficiency, reporting, and customer experience.',
    'blog.p2.title':'Why Every Business Needs a Website',
    'blog.p2.desc':'Your website is your business card. Learn how to make it effective and engaging.',
    'blog.p3.title':'Digital Marketing Trends 2025',
    'blog.p3.desc':'Stay ahead with the latest strategies in social media and digital advertising.',  
    //Blog PAge
 "blog.title": "Our Blog",
    "blog.subtitle": "Insights, trends, and updates from Itqan Solutions",
    "read.more": "Read More",

    "post1.title": "Why Every Business Needs a POS System in 2025",
    "post1.snippet": "From seamless inventory tracking to real-time sales reports, discover how modern POS can transform your operations.",

    "post2.title": "Digital Marketing Trends You Can’t Ignore",
    "post2.snippet": "AI-driven ads, personalized content, and cross-platform growth — here’s what will dominate 2025.",

    "post3.title": "From Retail to Restaurants: The Future of Smart POS",
    "post3.snippet": "How POS is evolving to serve both shops and restaurants with tailored solutions.",

'about.title':'About Itqan Solutions',
'about.subtitle':'We build software, POS, websites, and growth engines with precision.',
'about.ch1':'5+ Years','about.ch2':'Bilingual (EN/AR)','about.ch3':'End-to-End Delivery',
'about.values':'Our Principles',
'about.v1.t':'Quality','about.v1.d':'Clean code, clear process, measurable results.',
'about.v2.t':'Speed','about.v2.d':'Ship fast with no compromise on reliability.',
'about.v3.t':'Support','about.v3.d':'Bilingual support and long-term partnership.',
'services.lead':'Software, POS, websites, mobile apps, marketing, and branding.',
'services.cta':'Start a Project',
'portfolio.title':'Selected Projects',
'portfolio.lead':'A glimpse of software, POS, websites, and campaigns we delivered.',
'portfolio.p1.t':'Retail POS — Multi-branch','portfolio.p1.d':'Offline-first POS with Arabic/English UI, inventory & reports.',
'portfolio.p2.t':'Restaurant POS — Kitchen & Tables','portfolio.p2.d':'Tables, kitchen display, returns/discounts, COGS.',
'portfolio.p3.t':'Company Website — SEO Ready','portfolio.p3.d':'Modern, bilingual, high performance & SEO structure.',
'contact.title':'Get in Touch','contact.lead':'Tell us about your project. We reply within 24 hours.',
'contact.info':'Contact Info',
'contact.form.title':'Send a Message','contact.form.name':'Name','contact.form.email':'Email','contact.form.phone':'Phone','contact.form.msg':'Message','contact.form.send':'Send',

	  
    // Footer
    'footer.follow':'Follow Us',
    'footer.copy':'© {year} Itqan Solutions. All rights reserved.'
  },

  ar: {
    // Nav + Hero + Intro
    'nav.home':'الرئيسية','nav.about':'من نحن','nav.services':'الخدمات','nav.portfolio':'أعمالنا','nav.blog':'المدونة','nav.contact':'اتصل بنا',
    'cta.quote':'اطلب عرض سعر','hero.discover':'استعرض الخدمات','hero.contact':'تواصل معنا',
    'intro.title':'نبني من أجل النتائج، لا مجرد التسليمات.',
    'intro.text':'حلول متكاملة من التطوير وأنظمة نقاط البيع إلى المواقع واستراتيجيات التسويق والنمو.',

    // Services
    'services.title':'خدماتنا',
    'services.dev.title':'تطوير البرمجيات',
    'services.dev.desc':'أنظمة مخصّصة حسب احتياج عملك.',
    'services.pos.title':'أنظمة نقاط البيع (POS)',
    'services.pos.desc':'أونلاين/أوفلاين، ثنائي اللغة وآمن لتجارة التجزئة والمطاعم.',
    'services.web.title':'المواقع والتجارة الإلكترونية',
    'services.web.desc':'مواقع عصرية سريعة ومتوافقة مع SEO.',
    'services.mobile.title':'تطبيقات الموبايل',
    'services.mobile.desc':'تجربة استخدام سلسة على iOS وAndroid.',
    'services.marketing.title':'التسويق الرقمي',
    'services.marketing.desc':'سوشيال ميديا، حملات، واستراتيجيات نمو عبر الإنترنت.',
    'services.branding.title':'الهوية والتصميم',
    'services.branding.desc':'شعارات وهوية بصرية وتصميمات احترافية.',

    // POS Spotlight
    'pos.title':'نظام نقاط البيع (POS)',
    'pos.li1':'ثنائي اللغة (عربي/إنجليزي) + دعم RTL',
    'pos.li2':'تقارير، مرتجعات، خصومات، وتكلفة البضاعة المباعة',
    'pos.li3':'يعمل أوفلاين مع ترخيص آمن',
    'pos.cta':'شاهد تجربة POS',

    // Testimonials
    'testimonials.title':'آراء عملائنا',
    'testimonials.t1.text':'"حلول Itqan لنقاط البيع حسّنت عملية المبيعات — سهلة وموثوقة."',
    'testimonials.t1.author':'— أحمد، صاحب متجر',
    'testimonials.t2.text':'"الموقع والتسويق زودوا عدد العملاء المحتملين 40% خلال 3 شهور."',
    'testimonials.t2.author':'— سارة، مديرة تسويق',
    'testimonials.t3.text':'"الدعم ثنائي اللغة أحدث فارقًا حقيقيًا في أعمالنا."',
    'testimonials.t3.author':'— عمر، صاحب مطعم',

    // Blog
    'blog.latest':'أحدث المقالات',
    'blog.readmore':'اقرأ المزيد',
    'blog.p1.title':'كيف تغيّر أنظمة نقاط البيع تجارة التجزئة',
    'blog.p1.desc':'تعرّف كيف تحسّن أنظمة POS الحديثة الكفاءة والتقارير وتجربة العملاء.',
    'blog.p2.title':'لماذا يحتاج كل عمل إلى موقع إلكتروني',
    'blog.p2.desc':'موقعك هو بطاقتك التعريفية — تعلّم كيف تجعله فعّالًا وجذابًا.',
    'blog.p3.title':'اتجاهات التسويق الرقمي 2025',
    'blog.p3.desc':'ابقَ متقدمًا بأحدث استراتيجيات السوشيال والإعلانات الرقمية.',
	//Blog Page 
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.portfolio": "أعمالنا",
    "nav.blog": "المدوّنة",
    "nav.contact": "اتصل بنا",

    "blog.title": "مدوّنتنا",
    "blog.subtitle": "رؤى، اتجاهات، وتحديثات من إتقان سوليوشنز",
    "read.more": "اقرأ المزيد",

    "post1.title": "لماذا تحتاج كل شركة إلى نظام POS في 2025",
    "post1.snippet": "من تتبع المخزون بسهولة إلى تقارير المبيعات الفورية، اكتشف كيف يمكن لنظام POS الحديث أن يغيّر عملك.",

    "post2.title": "اتجاهات التسويق الرقمي التي لا يمكنك تجاهلها",
    "post2.snippet": "الإعلانات المدعومة بالذكاء الاصطناعي، المحتوى المخصص، والنمو عبر المنصات — هذه أبرز ملامح 2025.",

    "post3.title": "من التجزئة إلى المطاعم: مستقبل أنظمة POS الذكية",
    "post3.snippet": "كيف تتطور أنظمة POS لتخدم المتاجر والمطاعم بحلول مخصصة.",
'about.title':'عن إتقان سوليوشنز',
'about.subtitle':'نبني البرمجيات وPOS والمواقع ومحركات النمو بإتقان.',
'about.ch1':'+5 سنوات','about.ch2':'ثنائي اللغة (ع/EN)','about.ch3':'تسليم شامل',
'about.values':'مبادئنا',
'about.v1.t':'الجودة','about.v1.d':'كود نظيف، عملية واضحة، نتائج قابلة للقياس.',
'about.v2.t':'السرعة','about.v2.d':'نطلق بسرعة دون المساس بالاعتمادية.',
'about.v3.t':'الدعم','about.v3.d':'دعم ثنائي اللغة وشراكة طويلة الأمد.',
'services.lead':'برمجيات، نقاط بيع، مواقع، تطبيقات موبايل، تسويق وهوية.',
'services.cta':'ابدأ مشروعك',
'portfolio.title':'أعمال مختارة',
'portfolio.lead':'نظرة على مشاريع البرمجيات والـPOS والمواقع والحملات التي نفذناها.',
'portfolio.p1.t':'POS تجارة التجزئة — فروع متعددة','portfolio.p1.d':'POS يعمل أوفلاين بواجهة عربية/إنجليزية، مخزون وتقارير.',
'portfolio.p2.t':'POS مطاعم — المطبخ والطاولات','portfolio.p2.d':'طاولات، شاشة مطبخ، مرتجعات/خصومات، COGS.',
'portfolio.p3.t':'موقع شركة — جاهز للسيو','portfolio.p3.d':'موقع عصري ثنائي اللغة، أداء عالٍ وبنية SEO.',
'contact.title':'تواصل معنا','contact.lead':'احكلنا عن مشروعك — نرد خلال 24 ساعة.',
'contact.info':'بيانات التواصل',
'contact.form.title':'أرسل رسالة','contact.form.name':'الاسم','contact.form.email':'البريد','contact.form.phone':'الهاتف','contact.form.msg':'الرسالة','contact.form.send':'إرسال',

    // Footer
    'footer.follow':'تابعنا',
    'footer.copy':'© {year} Itqan Solutions. جميع الحقوق محفوظة.'
  }
};

const langBtn = document.getElementById('langToggle');
function applyLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir  = (lang==='ar') ? 'rtl' : 'ltr';
  if (langBtn) langBtn.textContent = (lang==='ar') ? 'EN' : 'AR';
  const dict = i18n[lang];
  const year = new Date().getFullYear();

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if (!dict[k]) return;
    const val = (k === 'footer.copy')
      ? dict[k].replace('{year}', year)
      : dict[k];
    el.textContent = val;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);
});

if (langBtn) {
  langBtn.addEventListener('click', () => {
    const next = document.documentElement.lang === 'en' ? 'ar' : 'en';
    applyLang(next);
    localStorage.setItem('lang', next);
  });
}

/* =========================
   Intersection Observer: reveal on scroll
   ========================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

/* =========================
   Auto assign reveal-left/right per row (grids)
   ========================= */
function getColsCount(gridEl) {
  const style = window.getComputedStyle(gridEl);
  const cols = style.getPropertyValue('grid-template-columns');
  if (!cols) return 1;
  return cols.split(' ').filter(Boolean).length;
}

function autoRevealForGrid(gridSelector, itemSelector) {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;

  const items = Array.from(grid.querySelectorAll(itemSelector));
  const cols = getColsCount(grid) || 1;

  items.forEach(el => el.classList.remove('reveal', 'reveal-left', 'reveal-right', 'is-visible'));

  items.forEach((el, i) => {
    const colIndex = i % cols;
    if (cols === 1) {
      el.classList.add('reveal');
    } else if (cols === 2) {
      el.classList.add(colIndex === 0 ? 'reveal-left' : 'reveal-right');
    } else {
      el.classList.add(colIndex === 0 ? 'reveal-left' : (colIndex === cols-1 ? 'reveal-right' : 'reveal'));
    }
    observer.observe(el);
  });
}

function runAutoReveal() {
  // في حال فيه عناصر خارج الجريد مضافة يدويًا
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

  autoRevealForGrid('.services .grid', '.card');
  autoRevealForGrid('.testimonials .grid', '.t-card');
  autoRevealForGrid('.blog-highlights .grid', '.post');

  const left  = document.querySelector('.pos-spotlight .text');
  const right = document.querySelector('.pos-spotlight .visual');
  if (left)  { left.classList.remove('reveal','reveal-left','reveal-right','is-visible'); left.classList.add('reveal-left');  observer.observe(left); }
  if (right) { right.classList.remove('reveal','reveal-left','reveal-right','is-visible'); right.classList.add('reveal-right'); observer.observe(right); }
}

document.addEventListener('DOMContentLoaded', runAutoReveal);
window.addEventListener('resize', () => {
  clearTimeout(window.__revealResizeTimer);
  window.__revealResizeTimer = setTimeout(runAutoReveal, 150);
});

/* =========================
   Glow loop (every 5s)
   ========================= */
function applyGlowLoop() {
  [
    ...document.querySelectorAll('.services .card'),
    ...document.querySelectorAll('.testimonials .t-card'),
    ...document.querySelectorAll('.pos-spotlight .text'),
    ...document.querySelectorAll('.pos-spotlight .visual'),
    ...document.querySelectorAll('.blog-highlights .post')
  ].forEach((el, i) => {
    el.classList.add('glow-loop');
    el.style.animationDelay = `${(i % 6) * 0.2}s`;
  });
}
document.addEventListener('DOMContentLoaded', applyGlowLoop);

/* =========================
   Magnetic Buttons
   ========================= */
function makeMagnetic(btn, intensity = 18) {
  if (!btn) return;
  btn.classList.add('magnet-active');

  function onMove(e) {
    const r = btn.getBoundingClientRect();
    const cx = (e.clientX ?? (e.touches && e.touches[0].clientX));
    const cy = (e.clientY ?? (e.touches && e.touches[0].clientY));
    const x = (cx - (r.left + r.width/2))  / (r.width/2);
    const y = (cy - (r.top  + r.height/2)) / (r.height/2);
    const clampedX = Math.max(-1, Math.min(1, x));
    const clampedY = Math.max(-1, Math.min(1, y));
    btn.style.transform = `translate(${clampedX * intensity}px, ${clampedY * intensity}px)`;
  }
  function reset() { btn.style.transform = 'translate(0,0)'; }

  btn.addEventListener('mousemove', onMove);
  btn.addEventListener('mouseleave', reset);
  btn.addEventListener('touchmove', onMove, {passive:true});
  btn.addEventListener('touchend', reset);
}

function initMagnetic(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.actions .btn, .btn-neo, .btn-ghost, .footer .btn, a.btn')
    .forEach(b => makeMagnetic(b));
}
document.addEventListener('DOMContentLoaded', initMagnetic);

/* =========================
   Parallax (POS visual + Blog images)
   ========================= */
function initParallax(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const parallaxEls = new Set();

  const posImg = document.querySelector('.pos-spotlight .visual img');
  if (posImg) {
    posImg.classList.add('parallax');
    posImg.closest('.visual')?.classList.add('parallax-wrap');
    parallaxEls.add(posImg);
  }

  document.querySelectorAll('.blog-highlights .post img').forEach(img=>{
    img.classList.add('parallax');
    img.closest('.post')?.classList.add('parallax-wrap');
    parallaxEls.add(img);
  });

  if (!parallaxEls.size) return;

  const MAX_SHIFT = 18;
  const MAX_TILT  = 2;
  let ticking = false;

  function updateParallax(){
    ticking = false;
    const vh = window.innerHeight || 1;

    parallaxEls.forEach(el=>{
      const r = el.getBoundingClientRect();
      const centerY = r.top + r.height/2;
      const ratioY = ((centerY / vh) - 0.5) * 2; // -1..1
      const dy = -ratioY * MAX_SHIFT;
      const tilt = -ratioY * MAX_TILT;
      el.style.transform = `translate3d(0, ${dy}px, 0) rotateX(${tilt}deg) scale(1.02)`;
    });
  }

  function onScroll(){
    if (!ticking){
      ticking = true;
      requestAnimationFrame(updateParallax);
    }
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting){
        parallaxEls.add(e.target);
      } else {
        parallaxEls.delete(e.target);
        e.target.style.transform = 'translate3d(0,0,0)';
      }
    });
  }, {threshold: 0.05});

  parallaxEls.forEach(el=> io.observe(el));
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll, {passive:true});
  requestAnimationFrame(updateParallax);
}
document.addEventListener('DOMContentLoaded', initParallax);
// Minimal AJAX for contact form (optional)
document.addEventListener('submit', async (e)=>{
  const form = e.target.closest('form.contact-form');
  if(!form) return;
  e.preventDefault();
  const note = form.querySelector('.form-note');
  note.textContent = document.documentElement.lang === 'ar' ? 'جارٍ الإرسال…' : 'Sending…';

  try{
    const res = await fetch(form.action, {
      method:'POST',
      headers:{'Accept':'application/json'},
      body: new FormData(form)
    });
    if(res.ok){
      note.textContent = document.documentElement.lang === 'ar' ? 'تم الإرسال بنجاح. سنعاودك قريبًا.' : 'Message sent. We will get back to you soon.';
      form.reset();
    }else{
      note.textContent = document.documentElement.lang === 'ar' ? 'حدث خطأ أثناء الإرسال.' : 'Something went wrong.';
    }
  }catch(_){
    note.textContent = document.documentElement.lang === 'ar' ? 'تعذّر الاتصال بالخادم.' : 'Network error.';
  }
});

/* =========================
   iOS autoplay nudge for <video>
   ========================= */
document.addEventListener('touchstart', () => {
  const v = document.getElementById('bgVideo');
  if (v) v.play().catch(()=>{});
}, {once:true});
