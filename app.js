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
    'nav.home': 'Home', 'nav.about': 'About', 'nav.products': 'Products', 'nav.services': 'Services', 'nav.portfolio': 'Portfolio', 'nav.blog': 'Blog', 'nav.contact': 'Contact',
    'nav.tashgheel': 'Tashgheel System',
    'nav.tashgheel.retail': 'Retail POS',
    'nav.tashgheel.services': 'Services POS',
    'nav.tashgheel.rest': 'Restaurants POS',
    'cta.quote': 'Request a Quote', 'hero.discover': 'Discover Services', 'hero.contact': 'Get in Touch',
    'intro.title': 'Built for results, not just deliverables.',
    'intro.text': 'End-to-end delivery from development, POS systems, and websites to digital marketing and growth strategies.',

    // Services
    'services.title': 'Our Services',
    'services.dev.title': 'Software Development',
    'services.dev.desc': 'Custom systems tailored to your business needs.',
    'services.pos.title': 'Tashgheel Solutions',
    'services.pos.desc': 'Offline/online, bilingual, secure POS for retail & restaurants.',
    'services.web.title': 'Websites & eCommerce',
    'services.web.desc': 'Modern, responsive, SEO-friendly websites.',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.desc': 'iOS & Android apps with smooth user experience.',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.desc': 'Social media, campaigns, and online growth strategies.',
    'services.branding.title': 'Branding & Design',
    'services.branding.desc': 'Logos, identity, and professional visuals.',

    // Tashgheel Spotlight
    'pos.title': 'Meet Tashgheel',
    'pos.desc': 'The ultimate business management suite. Works seamlessly as a **Desktop App (Offline)** or **Web App (Online)**.',

    'tashgheel.retail.t': 'Tashgheel Retail',
    'tashgheel.retail.d': 'Fashion, clothing, and retail shops.',

    'tashgheel.services.t': 'Tashgheel Services',
    'tashgheel.services.d': 'Maintenance centers and service shops.',

    'tashgheel.rest.t': 'Tashgheel Restaurants',
    'tashgheel.rest.d': 'F&B, cafes, and food service.',

    'tashgheel.manu.t': 'Tashgheel Manufacturing',
    'tashgheel.manu.d': 'Factories and production lines.',

    'pos.cta': 'See Tashgheel Demo',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.t1.text': '“Itqan’s POS transformed our sales process, easy to use and reliable.”',
    'testimonials.t1.author': '— Ahmed, Retail Owner',
    'testimonials.t2.text': '“The website and marketing boosted our leads by 40% in 3 months.”',
    'testimonials.t2.author': '— Sara, Marketing Manager',
    'testimonials.t3.text': '“Professional, bilingual support made all the difference for our business.”',
    'testimonials.t3.author': '— Omar, Restaurant Owner',

    // Blog
    'blog.latest': 'Latest Blog Posts',
    'blog.readmore': 'Read More',
    'blog.p1.title': 'How POS Systems Transform Retail',
    'blog.p1.desc': 'Discover how modern POS systems improve efficiency, reporting, and customer experience.',
    'blog.p2.title': 'Why Every Business Needs a Website',
    'blog.p2.desc': 'Your website is your business card. Learn how to make it effective and engaging.',
    'blog.p3.title': 'Digital Marketing Trends 2025',
    'blog.p3.desc': 'Stay ahead with the latest strategies in social media and digital advertising.',
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

    'about.title': 'About Itqan Solutions',
    'about.subtitle': 'We build software, POS, websites, and growth engines with precision.',
    'about.desc': 'At Itqan Solutions, we believe technology should simplify work, not complicate it. For more than five years, we have been helping businesses transform their operations through smart software, reliable POS systems, professional websites, and result-driven digital strategies. We don’t just deliver projects—we build long-term success stories.',

    'about.ch1': '5+ Years', 'about.ch2': 'Bilingual (EN/AR)', 'about.ch3': 'End-to-End Delivery',
    'about.values': 'Our Principles',
    'about.v1.t': 'Quality', 'about.v1.d': 'Clean code, structured processes, and measurable results. Everything we build is designed to be stable, scalable, and business-ready.',
    'about.v2.t': 'Speed', 'about.v2.d': 'Fast delivery with zero compromise on reliability. We respect deadlines and real business needs.',
    'about.v3.t': 'Support', 'about.v3.d': 'Bilingual support (EN/AR) and long-term partnership. We stay with our clients after launch, not just before it.',
    'services.lead': 'Software, POS, websites, mobile apps, marketing, and branding.',
    'services.cta': 'Start a Project',

    // Services Detailed Content
    'srv.why.title': 'Why Choose Itqan?',
    'srv.why.1.t': 'Local Expertise', 'srv.why.1.d': 'We understand the MENA market, RTL requirements, and local business logic.',
    'srv.why.2.t': 'Agile & Fast', 'srv.why.2.d': 'We work in sprints to deliver usable features quickly and iterate based on feedback.',
    'srv.why.3.t': 'Full Support', 'srv.why.3.d': 'Our job doesn’t end at launch. We provide training, maintenance, and scale-up support.',

    'srv.dev.feat': 'Custom ERPs, API Integrations, Automation Tools',
    'srv.pos.feat': 'Inventory, sales, CRM, and tax compliance (ZATCA/ETA).',
    'srv.web.feat': 'Landing pages, corporate sites, and high-performance e-commerce.',
    'srv.mob.feat': 'Native & Cross-platform apps (Flutter/React Native).',
    'srv.mkt.feat': 'SEO, Social Media Management, and Paid Ads (PPC).',
    'srv.brd.feat': 'Logo design, brand guidelines, and visual identity.',

    // Portfolio Extended
    'portfolio.title': 'Selected Projects',
    'portfolio.lead': 'A glimpse of software, POS, websites, and campaigns we delivered.',
    'port.feat.title': 'Featured Case Study',
    'port.feat.name': 'Tashgheel POS Ecosystem',
    'port.feat.desc': 'A complete ecosystem for retail and service businesses. Includes a desktop POS, a cloud management dashboard, and a mobile app for business owners to track sales in real-time.',
    'port.feat.tag': 'Flagship Product',

    'port.p1.t': 'Retail POS — Multi-branch', 'port.p1.d': 'Offline-first POS with Arabic/English UI, inventory & reports.', 'port.p1.tags': 'Desktop, Electron, SQLite',
    'port.p2.t': 'Restaurant POS', 'port.p2.d': 'Tables, kitchen display, returns/discounts, COGS.', 'port.p2.tags': 'Touch Screen, Printers',
    'port.p3.t': 'Company Website', 'port.p3.d': 'Modern, bilingual, high performance & SEO structure.', 'port.p3.tags': 'HTML5, CSS3, SEO',
    'port.p4.t': 'E-Commerce Platform', 'port.p4.d': 'Full online store with payment gateway integration and animated UI.', 'port.p4.tags': 'React, Node.js, Stripe',
    'port.p5.t': 'Car Service Center ERP', 'port.p5.d': 'Managing visits, technicians, spare parts, and invoicing.', 'port.p5.tags': 'Web App, Cloud',
    'port.p6.t': 'Mobile Loyalty App', 'port.p6.d': 'Customer retention app with points, rewards, and push notifications.', 'port.p6.tags': 'Flutter, iOS, Android',

    'cta.project': 'Have a similar project?',
    'contact.title': 'Get in Touch', 'contact.lead': 'Tell us about your project. We reply within 24 hours.',
    'contact.info': 'Contact Info',
    'contact.form.title': 'Send a Message', 'contact.form.name': 'Name', 'contact.form.email': 'Email', 'contact.form.phone': 'Phone', 'contact.form.msg': 'Message', 'contact.form.send': 'Send',



    // Tashgheel Retail Page
    'ret.hero.title': 'Tashgheel POS for Retail',
    'ret.hero.desc': 'A professional point of sale system designed for modern retail, combining ease of use with ERP-grade reporting.',
    'ret.cta.demo': 'Get a Demo',
    'ret.overview.title': 'Professional & Integrated',
    'ret.overview.text': 'Combines operational power with financial precision.',
    'ret.features.title': 'Key Features',
    'ret.f1.t': 'User & Role Management', 'ret.f1.d': 'Unlimited users with granular permission controls.',
    'ret.f2.t': 'Fully Customizable Receipts', 'ret.f2.d': 'Custom logo, address, language, and footer messages.',
    'ret.f3.t': 'Advanced Inventory', 'ret.f3.d': 'Track cost/sell prices, categories, and perform stock audits.',
    'ret.f4.t': 'Expense Tracking', 'ret.f4.d': 'Record daily expenses linked to employees and financial reports.',
    'ret.f5.t': 'Sales Targets', 'ret.f5.d': 'Set and track monthly targets for your sales staff.',
    'ret.f6.t': 'Secure Backup', 'ret.f6.d': 'One-click backup and restore without technical expertise.',

    'ret.rep.title': 'Enterprise-Grade Reporting',
    'ret.rep.desc': 'Insights inspired by professional ERP systems.',
    'ret.rep.l1': 'Total Sales (Cash, Visa, Mobile)',
    'ret.rep.l2': 'COGS & Net Profit Analysis',
    'ret.rep.l3': 'Sales by User, Product, or Category',
    'ret.rep.l4': 'Inventory Value & Returns Tracking',

    'ret.dep.title': 'Online & Offline Modes',
    'ret.dep.desc': 'Choose the deployment that fits your infrastructure.',
    'ret.online.t': 'Online (Web App)', 'ret.online.d': 'Ideal for multi-branch and remote access. Real-time sync.',
    'ret.offline.t': 'Offline (Desktop)', 'ret.offline.d': 'Maximum stability, no internet needed. Local data.',

    'gallery.title': 'Screenshots',

    // Tashgheel Services Page
    'srv.hero.title': 'Tashgheel Services',
    'srv.hero.desc': 'A comprehensive system designed for service centers, workshops, and car maintenance businesses.',
    'srv.overview.title': 'Professional & Organized',
    'srv.overview.text': 'Organize daily operations, track customers, and control costs with ease.',
    'srv.features.title': 'Key Features',
    'srv.f1.t': 'Visits Management', 'srv.f1.d': 'Register and track all customer visits. Search by plate, chassis, or name.',
    'srv.f2.t': 'Customers & Vehicles', 'srv.f2.d': 'Complete profile for customers and vehicles (Brand, Model, VIN, Odometer).',
    'srv.f3.t': 'Spare Parts', 'srv.f3.d': 'Track cost/sell prices and profitability. Use parts directly in visits.',
    'srv.f4.t': 'Suppliers Management', 'srv.f4.d': 'Manage supplier debts, payments (full/partial), and transaction history.',
    'srv.f5.t': 'Service Management', 'srv.f5.d': 'Add services to visits and combine with parts in a single invoice.',
    'srv.f6.t': 'Invoicing', 'srv.f6.d': 'Detailed printable invoices with discounts and breakdown.',
    'srv.f7.t': 'Appointments', 'srv.f7.d': 'Schedule next visits and print reminders on invoices.',
    'srv.f8.t': 'Staff & Technicians', 'srv.f8.d': 'Assign technicians to visits and track performance targets.',
    'srv.f9.t': 'Expense Tracking', 'srv.f9.d': 'Track operational expenses and their impact on net profit.',
    'srv.f10.t': 'Reports & Analytics', 'srv.f10.d': 'Revenue, most requested services, technician performance, and supplier balances.',
    'srv.f11.t': 'Secure Backup', 'srv.f11.d': 'Create and restore backups anytime without technical assistance.',

    'srv.dep.title': 'Deployment Options',
    'srv.dep.desc': 'Available as Online Web App or Offline Desktop App.',
    'srv.online.t': 'Online (Web App)', 'srv.online.d': 'Perfect for multi-branch management and remote access.',
    'srv.offline.t': 'Offline (Desktop)', 'srv.offline.d': 'Maximum stability without internet dependence.',


    // Footer
    'footer.follow': 'Follow Us',
    'footer.copy': '© {year} Itqan Solutions. Technology Built for Growth.',

    // New About Sections
    'about.mission.t': 'Our Mission',
    'about.mission.d': 'To empower businesses with practical, reliable, and intelligent technology that simplifies complexity, increases efficiency, and drives sustainable growth.',
    'about.vision.t': 'Our Vision',
    'about.vision.d': 'To be the leading digital transformation partner in the MENA region, recognized for innovation, trust, and real business impact.',

    'about.stats.years': 'Years Experience',
    'about.stats.projects': 'Projects Delivered',
    'about.stats.clients': 'Happy Clients',
    'about.stats.team': 'Team Members',

    'about.timeline.t': 'Our Journey',
    'about.time.1.y': '2020', 'about.time.1.t': 'Founded', 'about.time.1.d': 'Started as a focused development team with a vision to build meaningful and practical business solutions.',
    'about.time.2.y': '2022', 'about.time.2.t': 'Tashgheel POS Launch', 'about.time.2.d': 'Released our flagship POS system tailored for retail, restaurants, and manufacturing sectors.',
    'about.time.3.y': '2024', 'about.time.3.t': 'Expansion', 'about.time.3.d': 'Entered new market segments and expanded our services to include full digital transformation and marketing solutions.',
    'about.time.4.y': '2025', 'about.time.4.t': 'Innovation', 'about.time.4.d': 'Integrating AI and automation into our products to deliver smarter workflows and data-driven decisions.',
    'about.time.5.y': '2026', 'about.time.5.t': 'Scale & Intelligence', 'about.time.5.d': 'Expanding cloud infrastructure, advanced integrations, and AI-powered analytics to help businesses operate with higher efficiency and clearer insights.',

    'about.process.t': 'Our Process',
    'about.proc.1': 'Discovery – Understand your business challenges and goals',
    'about.proc.2': 'Strategy – Design the right technical and business solution',
    'about.proc.3': 'Build – Develop with precision and best practices',
    'about.proc.4': 'Launch – Deploy, train, and optimize',
    'about.proc.5': 'Growth – Continuous improvement and scaling',

    'about.tech.t': 'Technology Stack',
    'about.tech.d': 'We build with the best modern tools.',
  },

  ar: {
    // Nav + Hero + Intro
    'nav.home': 'الرئيسية', 'nav.about': 'من نحن', 'nav.products': 'منتجاتنا', 'nav.services': 'الخدمات', 'nav.portfolio': 'أعمالنا', 'nav.blog': 'المدونة', 'nav.contact': 'اتصل بنا',
    'nav.tashgheel': 'نظام تشغيل',
    'nav.tashgheel.retail': 'تشغيل ريتيل',
    'nav.tashgheel.services': 'تشغيل خدمات',
    'nav.tashgheel.rest': 'تشغيل مطاعم',
    'cta.quote': 'اطلب عرض سعر', 'hero.discover': 'استعرض الخدمات', 'hero.contact': 'تواصل معنا',
    'intro.title': 'نبني من أجل النتائج، لا مجرد التسليمات.',
    'intro.text': 'حلول متكاملة من التطوير وأنظمة نقاط البيع إلى المواقع واستراتيجيات التسويق والنمو.',

    // Services
    'services.title': 'خدماتنا',
    'services.dev.title': 'تطوير البرمجيات',
    'services.dev.desc': 'أنظمة مخصّصة حسب احتياج عملك.',
    'services.pos.title': 'حلول تشغيل',
    'services.pos.desc': 'أونلاين/أوفلاين، ثنائي اللغة وآمن لتجارة التجزئة والمطاعم.',
    'services.web.title': 'المواقع والتجارة الإلكترونية',
    'services.web.desc': 'مواقع عصرية سريعة ومتوافقة مع SEO.',
    'services.mobile.title': 'تطبيقات الموبايل',
    'services.mobile.desc': 'تجربة استخدام سلسة على iOS وAndroid.',
    'services.marketing.title': 'التسويق الرقمي',
    'services.marketing.desc': 'سوشيال ميديا، حملات، واستراتيجيات نمو عبر الإنترنت.',
    'services.branding.title': 'الهوية والتصميم',
    'services.branding.desc': 'شعارات وهوية بصرية وتصميمات احترافية.',

    // Tashgheel Spotlight
    'pos.title': 'اكتشف "تشغيل"',
    'pos.desc': 'الجناح المتكامل لإدارة أعمالك. يعمل بسلاسة **كتطبيق سطح مكتب (أوفلاين)** أو **تطبيق ويب (أونلاين)**.',

    'tashgheel.retail.t': 'تشغيل ريتيل',
    'tashgheel.retail.d': 'للملابس ومحلات التجزئة.',

    'tashgheel.services.t': 'تشغيل خدمات',
    'tashgheel.services.d': 'لمراكز الصيانة والخدمات.',

    'tashgheel.rest.t': 'تشغيل مطاعم',
    'tashgheel.rest.d': 'للمطاعم والكافيهات والأغذية.',

    'tashgheel.manu.t': 'تشغيل تصنيع',
    'tashgheel.manu.d': 'للمصانع وخطوط الإنتاج.',

    'pos.cta': 'شاهد ديمو تشغيل',

    // Testimonials
    'testimonials.title': 'آراء عملائنا',
    'testimonials.t1.text': '"حلول Itqan لنقاط البيع حسّنت عملية المبيعات — سهلة وموثوقة."',
    'testimonials.t1.author': '— أحمد، صاحب متجر',
    'testimonials.t2.text': '"الموقع والتسويق زودوا عدد العملاء المحتملين 40% خلال 3 شهور."',
    'testimonials.t2.author': '— سارة، مديرة تسويق',
    'testimonials.t3.text': '"الدعم ثنائي اللغة أحدث فارقًا حقيقيًا في أعمالنا."',
    'testimonials.t3.author': '— عمر، صاحب مطعم',

    // Blog
    'blog.latest': 'أحدث المقالات',
    'blog.readmore': 'اقرأ المزيد',
    'blog.p1.title': 'كيف تغيّر أنظمة نقاط البيع تجارة التجزئة',
    'blog.p1.desc': 'تعرّف كيف تحسّن أنظمة POS الحديثة الكفاءة والتقارير وتجربة العملاء.',
    'blog.p2.title': 'لماذا يحتاج كل عمل إلى موقع إلكتروني',
    'blog.p2.desc': 'موقعك هو بطاقتك التعريفية — تعلّم كيف تجعله فعّالًا وجذابًا.',
    'blog.p3.title': 'اتجاهات التسويق الرقمي 2025',
    'blog.p3.desc': 'ابقَ متقدمًا بأحدث استراتيجيات السوشيال والإعلانات الرقمية.',
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
    'about.title': 'عن إتقان سوليوشنز',
    'about.subtitle': 'نبني البرمجيات وPOS والمواقع ومحركات النمو بإتقان.',
    'about.desc': 'في إتقان سوليوشنز، نؤمن بأن التكنولوجيا يجب أن تسهل العمل لا أن تعقده. لأكثر من خمس سنوات، نساعد الشركات على تطوير عملياتها من خلال برمجيات ذكية، أنظمة POS موثوقة، مواقع احترافية، واستراتيجيات رقمية تركز على النتائج. نحن لا نسلم مشاريع فحسب—نحن نبني قصص نجاح طويلة الأمد.',

    'about.ch1': '+5 سنوات', 'about.ch2': 'ثنائي اللغة (ع/EN)', 'about.ch3': 'تسليم شامل',
    'about.values': 'مبادئنا',
    'about.v1.t': 'الجودة', 'about.v1.d': 'كود نظيف، عمليات منظمة، ونتائج قابلة للقياس. كل ما نبنيه مصمم ليكون مستقرًا وقابلاً للتوسع وجاهزًا للأعمال.',
    'about.v2.t': 'السرعة', 'about.v2.d': 'تسليم سريع دون أي مساومة على الاعتمادية. نحترم المواعيد واحتياجات العمل الحقيقية.',
    'about.v3.t': 'الدعم', 'about.v3.d': 'دعم ثنائي اللغة (إنجليزي/عربي) وشراكة طويلة الأمد. نبقى مع عملائنا بعد الإطلاق، ليس فقط قبله.',

    // New About Sections AR
    'about.mission.t': 'مهمتنا',
    'about.mission.d': 'تمكين الشركات من خلال تكنولوجيا عملية وموثوقة وذكية تبسط التعقيد، تزيد الكفاءة، وتدفع النمو المستدام.',
    'about.vision.t': 'رؤيتنا',
    'about.vision.d': 'أن نكون شريك التحول الرقمي الرائد في منطقة الشرق الأوسط وشمال أفريقيا، المعروفين بالابتكار، الثقة، والتأثير الحقيقي في الأعمال.',

    'about.stats.years': 'سنوات خبرة',
    'about.stats.projects': 'مشروع مُسلم',
    'about.stats.clients': 'عميل سعيد',
    'about.stats.team': 'عضو بالفريق',

    'about.timeline.t': 'رحلتنا',
    'about.time.1.y': '2020', 'about.time.1.t': 'التأسيس', 'about.time.1.d': 'البداية كفريق تطوير متخصص برؤية لبناء حلول أعمال عملية وذات مغزى.',
    'about.time.2.y': '2022', 'about.time.2.t': 'إطلاق نقاط بيع "تشغيل"', 'about.time.2.d': 'إطاق نظامنا الرائد لنقاط البيع المصمم لقطاعات التجزئة والمطاعم والتصنيع.',
    'about.time.3.y': '2024', 'about.time.3.t': 'التوسع', 'about.time.3.d': 'دخول قطاعات سوقية جديدة وتوسيع خدماتنا لتشمل التحول الرقمي الكامل وحلول التسويق.',
    'about.time.4.y': '2025', 'about.time.4.t': 'الابتكار', 'about.time.4.d': 'دمج الذكاء الاصطناعي والأتمتة في منتجاتنا لتقديم سير عمل أذكى وقرارات مبنية على البيانات.',
    'about.time.5.y': '2026', 'about.time.5.t': 'التوسع والذكاء', 'about.time.5.d': 'توسيع البنية التحتية السحابية، التكاملات المتقدمة، وتحليلات مدعومة بالذكاء الاصطناعي لمساعدة الشركات على العمل بكفاءة أعلى ورؤى أوضح.',

    'about.process.t': 'مراحل العمل',
    'about.proc.1': 'الاستكشاف – فهم تحديات عملك وأهدافك',
    'about.proc.2': 'الاستراتيجية – تصميم الحل التقني والعملي المناسب',
    'about.proc.3': 'البناء – التطوير بدقة وأفضل الممارسات',
    'about.proc.4': 'الإطلاق – النشر، التدريب، والتحسين',
    'about.proc.5': 'النمو – التحسين المستمر والتوسع',

    'about.tech.t': 'التقنيات المستخدمة',
    'about.tech.d': 'نعتمد على أحدث أدوات التكنولوجيا العالمية.',
    'services.lead': 'برمجيات، نقاط بيع، مواقع، تطبيقات موبايل، تسويق وهوية.',
    'services.cta': 'ابدأ مشروعك',

    // Services Detailed Content AR
    'srv.why.title': 'لماذا تختار إتقان؟',
    'srv.why.1.t': 'خبرة محلية', 'srv.why.1.d': 'نفهم السوق العربي، متطلبات RTL، وقواعد العمل المحلية.',
    'srv.why.2.t': 'مرونة وسرعة', 'srv.why.2.d': 'نعمل بنظام Sprints لتسليم ميزات قابلة للاستخدام بسرعة وتطويرها بناءً على الملاحظات.',
    'srv.why.3.t': 'دعم كامل', 'srv.why.3.d': 'عملنا لا ينتهي عند الإطلاق. نوفر التدريب، الصيانة، ودعم التوسع.',

    'srv.dev.feat': 'أنظمة ERP مخصصة، ربط API، وأدوات الأتمتة.',
    'srv.pos.feat': 'مخزون، مبيعات، CRM، وامتثال ضريبي كامل.',
    'srv.web.feat': 'صفحات هبوط، مواقع شركات، ومتاجر إلكترونية عالية الأداء.',
    'srv.mob.feat': 'تطبيقات أصلية ومتعددة المنصات (Flutter/React Native).',
    'srv.mkt.feat': 'SEO، إدارة وسائل التواصل، وإعلانات ممولة.',
    'srv.brd.feat': 'تصميم شعارات، هوية بصرية، وأدلة استخدام العلامة التجارية.',

    // Portfolio Extended AR
    'portfolio.title': 'أعمال مختارة',
    'portfolio.lead': 'لمحة عن البرمجيات، أنظمة POS، المواقع، والحملات التي قدمناها.',
    'port.feat.title': 'دراسة حالة مميزة',
    'port.feat.name': 'منظومة تشغيل POS',
    'port.feat.desc': 'نظام متكامل لتجارة التجزئة والخدمات. يشمل نقطة بيع لسطح المكتب، لوحة تحكم سحابية، وتطبيق موبايل لمتابعة المبيعات لحظيًا.',
    'port.feat.tag': 'المنتج الرائد',

    'port.p1.t': 'نقاط بيع تجزئة — متعدد الفروع', 'port.p1.d': 'يعمل دون إنترنت، واجهة عربية/إنجليزية، تقارير ومخزون.', 'port.p1.tags': 'Desktop, Electron, SQLite',
    'port.p2.t': 'نقاط بيع مطاعم', 'port.p2.d': 'طاولات، شاشة مطبخ، مرتجعات/خصومات، وحساب تكاليف.', 'port.p2.tags': 'Touch Screen, Printers',
    'port.p3.t': 'موقع تعريفي للشركات', 'port.p3.d': 'عصري، ثنائي اللغة، وأداء عالي متوافق مع SEO.', 'port.p3.tags': 'HTML5, CSS3, SEO',
    'port.p4.t': 'منصة تجارة إلكترونية', 'port.p4.d': 'متجر كامل بربط بوابات الدفع وواجهة تفاعلية.', 'port.p4.tags': 'React, Node.js, Stripe',
    'port.p5.t': 'نظام إدارة مراكز صيانة', 'port.p5.d': 'إدارة زيارات، فنيين، قطع غيار، وفواتير.', 'port.p5.tags': 'Web App, Cloud',
    'port.p6.t': 'تطبيق ولاء عملاء', 'port.p6.d': 'تطبيق موبايل للنقاط والمكافآت والإشعارات.', 'port.p6.tags': 'Flutter, iOS, Android',

    'cta.project': 'هل لديك مشروع مشابه؟',
    'contact.title': 'تواصل معنا', 'contact.lead': 'أخبرنا عن مشروعك. نرد خلال 24 ساعة.',
    'contact.info': 'بيانات التواصل',
    'contact.form.title': 'أرسل رسالة', 'contact.form.name': 'الاسم', 'contact.form.email': 'البريد', 'contact.form.phone': 'الهاتف', 'contact.form.msg': 'الرسالة', 'contact.form.send': 'إرسال',

    // Tashgheel Retail Page
    'ret.hero.title': 'تشغيل ريتيل (للتجزئة)',
    'ret.hero.desc': 'نظام نقاط بيع احترافي صُمم خصيصًا لتلبية احتياجات متاجر التجزئة، يجمع بين السهولة وقوة تقارير الـ ERP.',
    'ret.cta.demo': 'اطلب نسخة تجريبية',
    'ret.overview.title': 'نظام احترافي وشامل',
    'ret.overview.text': 'يجمع بين سهولة الاستخدام وقوة الإدارة المالية والتشغيلية.',
    'ret.features.title': 'المميزات الرئيسية',
    'ret.f1.t': 'إدارة المستخدمين والصلاحيات', 'ret.f1.d': 'عدد لا نهائي من المستخدمين مع تحكم دقيق في الصلاحيات.',
    'ret.f2.t': 'فواتير مخصصة بالكامل', 'ret.f2.d': 'تحكم في اللوجو، العنوان، اللغة، ورسالة التذييل.',
    'ret.f3.t': 'إدارة المخزون المتقدمة', 'ret.f3.d': 'متابعة التكلفة/البيع، التصنيفات، وجرد المخزون الفعلي.',
    'ret.f4.t': 'إدارة المصروفات', 'ret.f4.d': 'تسجيل المصروفات وربطها بالموظفين والتقارير المالية.',
    'ret.f5.t': 'تتبع أهداف المبيعات', 'ret.f5.d': 'تحديد "تارجت" شهري للبائعين ومتابعة نسبة الإنجاز.',
    'ret.f6.t': 'النسخ الاحتياطي', 'ret.f6.d': 'إنشاء واستعادة النسخة الاحتياطية بسهولة في أي وقت.',

    'ret.rep.title': 'تقارير بمستوى ERP',
    'ret.rep.desc': 'تقارير تفصيلية دقيقة لمتابعة الأرباح.',
    'ret.rep.l1': 'إجمالي المبيعات (كاش، فيزا، موبايل)',
    'ret.rep.l2': 'تحليل تكلفة البضاعة (COGS) وصافي الربح',
    'ret.rep.l3': 'المبيعات حسب المستخدم أو الصنف',
    'ret.rep.l4': 'قيمة المخزون والمرتجهات',

    'ret.dep.title': 'تعدد أنماط التشغيل',
    'ret.dep.desc': 'اختر النظام الأنسب لطبيعة عملك.',
    'ret.online.t': 'نسخة أونلاين (ويب)', 'ret.online.d': 'مثالية للفروع المتعددة والمتابعة عن بعد.',
    'ret.offline.t': 'نسخة أوفلاين (ديسك توب)', 'ret.offline.d': 'استقرار تام بدون إنترنت وحفظ البيانات محليًا.',

    'gallery.title': 'لقطات من النظام',

    // Tashgheel Services Page
    'srv.hero.title': 'تشغيل خدمات (للصيانة والورش)',
    'srv.hero.desc': 'نظام متكامل لإدارة مراكز الصيانة والخدمات وورش السيارات، يساعدك على تنظيم العمل اليومي ومتابعة العملاء.',
    'srv.overview.title': 'نظام احترافي ومنظم',
    'srv.overview.text': 'نظم العمل اليومي، تابع العملاء والمركبات، وتحكم في التكاليف بكل سهولة.',
    'srv.features.title': 'المميزات الرئيسية',
    'srv.f1.t': 'إدارة الزيارات', 'srv.f1.d': 'تسجيل ومتابعة جميع الزيارات والبحث برقم اللوحة أو الشاسيه.',
    'srv.f2.t': 'العملاء والمركبات', 'srv.f2.d': 'ملف كامل للعميل والمركبة (الموديل، العداد، رقم الشاسيه).',
    'srv.f3.t': 'قطع الغيار', 'srv.f3.d': 'تتبع التكلفة والربحية واستخدام القطع مباشرة داخل الزيارات.',
    'srv.f4.t': 'إدارة الموردين', 'srv.f4.d': 'متابعة مديونيات الموردين، سداد كلي/جزئي، وتقارير المعاملات.',
    'srv.f5.t': 'إدارة الخدمات', 'srv.f5.d': 'إضافة خدمات للزيارة ودمجها مع قطع الغيار في فاتورة واحدة.',
    'srv.f6.t': 'الفواتير والخصومات', 'srv.f6.d': 'فواتير تفصيلية قابلة للطباعة مع دعم الخصومات.',
    'srv.f7.t': 'المواعيد القادمة', 'srv.f7.d': 'تحديد مواعيد الصيانات القادمة وتذكير العميل بها.',
    'srv.f8.t': 'الموظفين والفنيين', 'srv.f8.d': 'إسناد الفنيين للزيارات ومتابعة أهداف الأداء.',
    'srv.f9.t': 'إدارة المصروفات', 'srv.f9.d': 'تسجيل المصروفات التشغيلية ومتابعة تأثيرها على الأرباح.',
    'srv.f10.t': 'التقارير والتحليلات', 'srv.f10.d': 'تقارير الإيرادات، الخدمات الأكثر طلبًا، أداء الفنيين، ومديونيات الموردين.',
    'srv.f11.t': 'النسخ الاحتياطي', 'srv.f11.d': 'حفظ واستعادة البيانات في أي وقت لضمان الأمان.',

    'srv.dep.title': 'أنماط التشغيل',
    'srv.dep.desc': 'يعمل كنظام ويب أو سطح مكتب بنفس الكفاءة.',
    'srv.online.t': 'Web Application (أونلاين)', 'srv.online.d': 'لإدارة الفروع وربط البيانات لحظيًا.',
    'srv.offline.t': 'Desktop Application (أوفلاين)', 'srv.offline.d': 'استقرار تام دون الحاجة لإنترنت.',

    // Tashgheel Restaurants
    'rst.hero.title': 'تشغيل مطاعم',
    'rst.hero.desc': 'نظام تشغيل متكامل لإدارة المطاعم، يشمل نقاط البيع، والمطبخ، والمخزون، والتكاليف.',
    'rst.overview.title': 'من المطبخ للكاشير',
    'rst.overview.text': 'تحكم في التكاليف، قلل الهدر، وارفع كفاءة التشغيل في نظام واحد.',

    'rst.features.title': 'المميزات الرئيسية',
    'rst.f1.t': 'إدارة الخامات', 'rst.f1.d': 'إضافة الخامات، ربطها بالموردين، ومتابعة مديونيات وتواريخ السداد.',
    'rst.f2.t': 'هندسة المنيو', 'rst.f2.d': 'حساب التكلفة الفعلية (Recipe Costing) ونسب الهدر لكل صنف ومقاس.',
    'rst.f3.t': 'تسعير مرن', 'rst.f3.d': 'أسعار مختلفة للصالات، التيك أواي، والدليفري، مع دعم الـ Happy Hour.',
    'rst.f4.t': 'نقاط البيع (POS)', 'rst.f4.d': 'واجهة سريعة، خصومات، وتعدد طرق الدفع في شاشة واحدة.',
    'rst.f5.t': 'إدارة الطاولات', 'rst.f5.d': 'رسم توضيحي للطاولات، دمج، نقل، وإغلاق الطاولات بسهولة.',
    'rst.f6.t': 'التحكم في الطلبات', 'rst.f6.d': 'تعديل، إلغاء، تقسيم الفواتير (Split Bill) ومتابعة حالة الطلب.',
    'rst.f7.t': 'إدارة الموظفين', 'rst.f7.d': 'صلاحيات خاصة للويتر والشيف والكاشير، مع تتبع الأداء.',
    'rst.f8.t': 'شاشة المطبخ (KDS)', 'rst.f8.d': 'عرض الطلبات لحظيًا في المطبخ وتحديث حالتها (تحضير/جاهز).',
    'rst.f9.t': 'إدارة الدليفري', 'rst.f9.d': 'قاعدة بيانات للعملاء وحفظ العناوين لسرعة الطلب.',
    'rst.f10.t': 'المخزون والهدر', 'rst.f10.d': 'خصم المكونات تلقائيًا مع البيع، وتقارير دقيقة للهدر والفاقد.',
    'rst.f11.t': 'الطباعة المتعددة', 'rst.f11.d': 'توجيه طلبات الأكل للمطبخ والمشروبات للبار تلقائيًا.',
    'rst.f12.t': 'تقارير متقدمة', 'rst.f12.d': 'تحليل الربحية، مبيعات القنوات المختلفة، وأداء الموظفين.',

    'rst.dep.title': 'خيارات التشغيل',
    'rst.dep.desc': 'اختر ما يناسبك، أونلاين أو أوفلاين.',
    'rst.online.t': 'أونلاين (ويب)', 'rst.online.d': 'للسلاسل والفروع المتعددة والمتابعة عن بعد.',
    'rst.offline.t': 'أوفلاين (ديسك توب)', 'rst.offline.d': 'استقرار وثبات 100% دون الحاجة لإنترنت.',


    // Footer
    'footer.follow': 'تابعنا',
    'footer.copy': '© {year} Itqan Solutions. جميع الحقوق محفوظة.'
  }
};

const langBtn = document.getElementById('langToggle');
function applyLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  if (langBtn) langBtn.textContent = (lang === 'ar') ? 'EN' : 'AR';
  const dict = i18n[lang];
  const year = new Date().getFullYear();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (!dict[k]) return;
    const val = (k === 'footer.copy')
      ? dict[k].replace('{year}', year)
      : dict[k];
    el.textContent = val;
  });

  // Switch images based on language
  document.querySelectorAll('[data-img-en]').forEach(el => {
    const src = (lang === 'ar' && el.getAttribute('data-img-ar'))
      ? el.getAttribute('data-img-ar')
      : el.getAttribute('data-img-en');
    el.src = src;
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
      el.classList.add(colIndex === 0 ? 'reveal-left' : (colIndex === cols - 1 ? 'reveal-right' : 'reveal'));
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

  const left = document.querySelector('.pos-spotlight .text');
  const right = document.querySelector('.pos-spotlight .visual');
  if (left) { left.classList.remove('reveal', 'reveal-left', 'reveal-right', 'is-visible'); left.classList.add('reveal-left'); observer.observe(left); }
  if (right) { right.classList.remove('reveal', 'reveal-left', 'reveal-right', 'is-visible'); right.classList.add('reveal-right'); observer.observe(right); }
}

document.addEventListener('DOMContentLoaded', runAutoReveal);
window.addEventListener('resize', () => {
  clearTimeout(window.__revealResizeTimer);
  window.__revealResizeTimer = setTimeout(runAutoReveal, 150);
});

/* =========================
   Spotlight Effect
   ========================= */
function initSpotlight() {
  const cards = document.querySelectorAll('.card, .t-card, .post');

  window.addEventListener('mousemove', (e) => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
document.addEventListener('DOMContentLoaded', initSpotlight);

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
    const x = (cx - (r.left + r.width / 2)) / (r.width / 2);
    const y = (cy - (r.top + r.height / 2)) / (r.height / 2);
    const clampedX = Math.max(-1, Math.min(1, x));
    const clampedY = Math.max(-1, Math.min(1, y));
    btn.style.transform = `translate(${clampedX * intensity}px, ${clampedY * intensity}px)`;
  }
  function reset() { btn.style.transform = 'translate(0,0)'; }

  btn.addEventListener('mousemove', onMove);
  btn.addEventListener('mouseleave', reset);
  btn.addEventListener('touchmove', onMove, { passive: true });
  btn.addEventListener('touchend', reset);
}

function initMagnetic() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.actions .btn, .btn-neo, .btn-ghost, .footer .btn, a.btn')
    .forEach(b => makeMagnetic(b));
}
document.addEventListener('DOMContentLoaded', initMagnetic);

/* =========================
   Parallax (POS visual + Blog images)
   ========================= */
function initParallax() {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const parallaxEls = new Set();

  const posImg = document.querySelector('.pos-spotlight .visual img');
  if (posImg) {
    posImg.classList.add('parallax');
    posImg.closest('.visual')?.classList.add('parallax-wrap');
    parallaxEls.add(posImg);
  }

  document.querySelectorAll('.blog-highlights .post img').forEach(img => {
    img.classList.add('parallax');
    img.closest('.post')?.classList.add('parallax-wrap');
    parallaxEls.add(img);
  });

  if (!parallaxEls.size) return;

  const MAX_SHIFT = 18;
  const MAX_TILT = 2;
  let ticking = false;

  function updateParallax() {
    ticking = false;
    const vh = window.innerHeight || 1;

    parallaxEls.forEach(el => {
      const r = el.getBoundingClientRect();
      const centerY = r.top + r.height / 2;
      const ratioY = ((centerY / vh) - 0.5) * 2; // -1..1
      const dy = -ratioY * MAX_SHIFT;
      const tilt = -ratioY * MAX_TILT;
      el.style.transform = `translate3d(0, ${dy}px, 0) rotateX(${tilt}deg) scale(1.02)`;
    });
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateParallax);
    }
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        parallaxEls.add(e.target);
      } else {
        parallaxEls.delete(e.target);
        e.target.style.transform = 'translate3d(0,0,0)';
      }
    });
  }, { threshold: 0.05 });

  parallaxEls.forEach(el => io.observe(el));
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  requestAnimationFrame(updateParallax);
}
document.addEventListener('DOMContentLoaded', initParallax);
// Minimal AJAX for contact form (optional)
document.addEventListener('submit', async (e) => {
  const form = e.target.closest('form.contact-form');
  if (!form) return;
  e.preventDefault();
  const note = form.querySelector('.form-note');
  const isAr = document.documentElement.lang === 'ar';

  note.textContent = isAr ? 'جارٍ الإرسال…' : 'Sending…';
  note.style.color = '#ccc';

  // Simulate network delay for demo
  await new Promise(r => setTimeout(r, 1500));

  // Always succeed for demo
  note.textContent = isAr ? 'تم الإرسال بنجاح. سنعاودك قريبًا.' : 'Message sent successfully. We will contact you soon.';
  note.style.color = 'var(--neo)';
  form.reset();
});


/* =========================
   Cinematic Text Reveal
   ========================= */
function initTextReveal() {
  // Target specific headings or paragraphs
  const targets = document.querySelectorAll('.intro h2, .intro p, .spotlight h2, .spotlight ul li');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-text-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  targets.forEach(el => {
    el.classList.add('reveal-text');
    observer.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', initTextReveal);

/* =========================
   iOS autoplay nudge for <video>
   ========================= */
document.addEventListener('touchstart', () => {
  const v = document.getElementById('bgVideo');
  if (v) v.play().catch(() => { });
}, { once: true });

/* =========================
   Number Counter Animation
   ========================= */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200; // The lower the slower

  const animate = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(() => animate(counter), 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

document.addEventListener('DOMContentLoaded', initCounters);
