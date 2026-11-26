/* =========================
   Page Transitions
   ========================= */
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-link]');
  if (!a) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin) return;
  e.preventDefault();
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.add('active');
  setTimeout(() => { location.href = a.href; }, 380);
});

/* =========================
   i18n Dictionary (EN / AR)
   ========================= */
const i18n = {
  en: {
    /* --- Navigation --- */
    'nav.solutions':        'Solutions',
    'nav.sw':               'Software Engineering',
    'nav.digital':          'Digital Solutions',
    'nav.marketing':        'Marketing & Creative',
    'nav.automation':       'Business Automation',
    'nav.products':         'Products',
    'nav.ret':              'Tashgheel Retail',
    'nav.rest': 'Tashgheel F&B',
    'nav.srv':              'Tashgheel Services',
    'nav.industries':       'Industries',
    'nav.cases':            'Case Studies',
    'nav.insights':         'Insights',
    'nav.about':            'About',
    'nav.contact':          'Contact',
    'nav.home':             'Home',
    'cta.demo':             'Request a Demo',
    'cta.quote':            'Request a Quote',

    /* --- Hero --- */
    'hero.badge':           'Digital Transformation Partner',
    'hero.h1a':             'Technology That Powers',
    'hero.h1b':             'Your Business.',
    'hero.h1c':             'Marketing That Grows It.',
    'hero.subtitle':        'At ITQAN Solutions, we design, develop, and market tailored digital solutions that help businesses streamline operations, increase productivity, and accelerate growth.',
    'hero.cta1':            'Request a Demo',
    'hero.cta2':            'Explore Solutions',
    'hero.trust':           'Trusted by businesses across Egypt & GCC',

    /* --- Ecosystem --- */
    'eco.label':            'One Ecosystem. Unlimited Growth.',
    'eco.title':            'Everything Your Business Needs, Connected.',
    'eco.desc':             'From marketing to software, from branding to automation—every part of your operation works together as one intelligent system.',
    'eco.message':          'One partner. One ecosystem. Unlimited growth.',

    /* --- Solutions --- */
    'sol.label':            'Our Solutions',
    'sol.title':            'Four Divisions. One Vision.',
    'sol.desc':             'We combine engineering, design, marketing, and automation into a unified platform built around your business goals.',
    'sol.sw.title':         'Software Engineering',
    'sol.sw.tag':           'ERP · CRM · POS · HRMS',
    'sol.sw.desc':          'Enterprise-grade custom software tailored precisely to your operational workflow—from ERP and CRM to POS systems and business intelligence dashboards.',
    'sol.sw.link':          'Explore Engineering →',
    'sol.dig.title':        'Digital Solutions',
    'sol.dig.tag':          'Web · Mobile · UI/UX',
    'sol.dig.desc':         'Modern websites, high-performance e-commerce platforms, native mobile applications, and user-centered digital experiences that convert visitors into customers.',
    'sol.dig.link':         'Explore Digital →',
    'sol.mkt.title':        'Marketing & Creative',
    'sol.mkt.tag':          'Strategy · Content · Ads · Production',
    'sol.mkt.desc':         'Full-service marketing from strategy and branding to content production, social media management, performance advertising, and campaign analytics.',
    'sol.mkt.link':         'Explore Marketing →',
    'sol.aut.title':        'Business Automation',
    'sol.aut.tag':          'AI · Integrations · Workflows',
    'sol.aut.desc':         'Connect every system. Automate repetitive tasks. Leverage AI-powered workflows, API integrations, and intelligent reporting to operate at a higher level.',
    'sol.aut.link':         'Explore Automation →',

    /* --- Featured Products --- */
    'prod.label':           'Featured Products',
    'prod.title':           'Our Flagship Solutions',
    'prod.desc':            'Purpose-built software products that are already powering businesses across Egypt and the region.',
    'prod.ret.title':       'Tashgheel Retail',
    'prod.ret.badge':       'Retail POS',
    'prod.ret.desc':        'A complete point-of-sale and inventory management solution for retail, clothing, and multi-branch shops.',
    'prod.ret.f1':          'Multi-branch management',
    'prod.ret.f2':          'Offline + Online operation',
    'prod.ret.f3':          'ERP-grade reporting',
    'prod.ret.f4':          'Arabic & English interface',
    'prod.rest.title':      'Tashgheel Restaurants',
    'prod.rest.badge':      'F&B POS',
    'prod.rest.desc':       'An end-to-end restaurant management platform covering POS, tables, kitchen display, delivery, and COGS analysis.',
    'prod.rest.f1':         'Kitchen Display System (KDS)',
    'prod.rest.f2':         'Table & delivery management',
    'prod.rest.f3':         'Recipe costing & waste tracking',
    'prod.rest.f4':         'Multi-channel pricing',
    'prod.srv.title':       'Tashgheel Services',
    'prod.srv.badge':       'Service Center ERP',
    'prod.srv.desc':        'Built for maintenance centers, auto workshops, and service businesses. Manage visits, technicians, spare parts, and invoicing.',
    'prod.srv.f1':          'Customer & vehicle profiles',
    'prod.srv.f2':          'Technician performance tracking',
    'prod.srv.f3':          'Supplier & parts management',
    'prod.srv.f4':          'Appointment scheduling',
    'prod.erp.title':       'Custom ERP',
    'prod.erp.badge':       'Enterprise Software',
    'prod.erp.desc':        'Fully tailored enterprise resource planning systems built around your unique operational processes and industry requirements.',
    'prod.erp.f1':          'Modular architecture',
    'prod.erp.f2':          'Cloud & on-premise deployment',
    'prod.erp.f3':          'Custom workflows & dashboards',
    'prod.erp.f4':          'API-first integration ready',

    /* --- Industries --- */
    'ind.label':            'Industries We Serve',
    'ind.title':            'Built for Your Sector',
    'ind.desc':             'Our solutions are adapted for the unique challenges of each industry—not generic templates.',
    'ind.retail':           'Retail',
    'ind.rest':             'Restaurants',
    'ind.health':           'Healthcare',
    'ind.edu':              'Education',
    'ind.mfg':              'Manufacturing',
    'ind.dist':             'Distribution',
    'ind.log':              'Logistics',
    'ind.whole':            'Wholesale',
    'ind.pro':              'Professional Services',
    'ind.gov':              'Government',

    /* --- Why ITQAN --- */
    'why.label':            'Why ITQAN',
    'why.title':            'The Difference Is in the Details',
    'why.desc':             'We are not a generic software house. We are a strategic technology partner committed to your long-term growth.',
    'why.b1.t':             'Tailor-Made Solutions',
    'why.b1.d':             'Every system we build is designed specifically for your business processes—never a generic template.',
    'why.b2.t':             'Offline + Online Capable',
    'why.b2.d':             'Our software works with or without internet. Business continuity is never compromised.',
    'why.b3.t':             'Multi-Branch Ready',
    'why.b3.d':             'Manage unlimited branches from a single dashboard with real-time synchronization.',
    'why.b4.t':             'Cloud-First Architecture',
    'why.b4.d':             'Secure, scalable cloud infrastructure with enterprise-grade reliability and uptime.',
    'why.b5.t':             'Arabic & English',
    'why.b5.d':             'Full RTL/LTR bilingual support across all our systems and interfaces.',
    'why.b6.t':             'Enterprise Security',
    'why.b6.d':             'Role-based access control, data encryption, secure backups, and GDPR-aligned practices.',
    'why.b7.t':             'Scalable Systems',
    'why.b7.d':             'Our architecture grows with your business—from a single location to a nationwide operation.',
    'why.b8.t':             'Continuous Support',
    'why.b8.d':             'Bilingual technical support, training, and long-term partnership after every launch.',

    /* --- Process --- */
    'proc.label':           'How We Work',
    'proc.title':           'Our Proven Process',
    'proc.desc':            'A structured methodology that ensures quality, speed, and results on every project.',
    'proc.tab.dev':         'Development Process',
    'proc.tab.mkt':         'Marketing Process',
    'proc.d1':              'Discovery',
    'proc.d1d':             'Understanding your business, goals, and technical requirements.',
    'proc.d2':              'Analysis',
    'proc.d2d':             'Deep-dive into workflows, data flows, and system architecture.',
    'proc.d3':              'Design',
    'proc.d3d':             'UI/UX wireframes, prototypes, and design system creation.',
    'proc.d4':              'Development',
    'proc.d4d':             'Agile sprints delivering working features every 2 weeks.',
    'proc.d5':              'Testing',
    'proc.d5d':             'QA, performance testing, and user acceptance testing.',
    'proc.d6':              'Deployment',
    'proc.d6d':             'Smooth launch with zero downtime infrastructure setup.',
    'proc.d7':              'Training',
    'proc.d7d':             'Full team training and comprehensive documentation.',
    'proc.d8':              'Support',
    'proc.d8d':             'Ongoing maintenance, updates, and technical partnership.',
    'proc.m1':              'Research',
    'proc.m1d':             'Market research, competitor analysis, and audience profiling.',
    'proc.m2':              'Strategy',
    'proc.m2d':             'Go-to-market plan, brand positioning, and campaign roadmap.',
    'proc.m3':              'Planning',
    'proc.m3d':             'Content calendar, creative briefs, and channel selection.',
    'proc.m4':              'Production',
    'proc.m4d':             'Design, copy, video, and creative asset development.',
    'proc.m5':              'Launch',
    'proc.m5d':             'Campaign activation across all selected channels.',
    'proc.m6':              'Optimization',
    'proc.m6d':             'Real-time performance monitoring and A/B testing.',
    'proc.m7':              'Reporting',
    'proc.m7d':             'Monthly KPI dashboards and ROI analysis reports.',

    /* --- Case Studies --- */
    'cs.label':             'Case Studies',
    'cs.title':             'Real Results. Real Businesses.',
    'cs.desc':              'See how we help organizations transform their operations and accelerate growth through technology.',
    'cs.c1.title':          'Multi-Branch Retail ERP',
    'cs.c1.ind':            'Retail',
    'cs.c1.challenge':      'A growing retail chain struggled with manual inventory tracking across 5 branches, causing stock discrepancies and lost sales.',
    'cs.c1.solution':       'We built a custom offline-first POS integrated with a central ERP dashboard, real-time stock sync, and automated reorder alerts.',
    'cs.c1.tech':           'Electron · SQL Server · REST API · Power BI',
    'cs.c1.metric1':        '40%',
    'cs.c1.label1':         'Faster operations',
    'cs.c1.metric2':        '5 Branches',
    'cs.c1.label2':         'Synchronized',
    'cs.c2.title':          'Restaurant Chain Digital Transformation',
    'cs.c2.ind':            'F&B',
    'cs.c2.challenge':      'A restaurant group with 3 locations needed to reduce checkout time, track food costs, and unify operations across branches.',
    'cs.c2.solution':       'Deployed Tashgheel Restaurants with KDS, table management, recipe costing, and a centralized management dashboard.',
    'cs.c2.tech':           'Tashgheel POS · KDS · Cloud Dashboard',
    'cs.c2.metric1':        '60%',
    'cs.c2.label1':         'Faster checkout',
    'cs.c2.metric2':        '3 Branches',
    'cs.c2.label2':         'Unified system',
    'cs.c3.title':          'Digital Marketing Campaign',
    'cs.c3.ind':            'Marketing',
    'cs.c3.challenge':      'A B2B services company had strong offerings but struggled with brand visibility and digital lead generation.',
    'cs.c3.solution':       'Delivered a complete brand identity, corporate website, SEO strategy, and a 3-month Meta Ads campaign targeting decision-makers.',
    'cs.c3.tech':           'Meta Ads · Google Ads · SEO · Brand Design',
    'cs.c3.metric1':        '220%',
    'cs.c3.label1':         'More website traffic',
    'cs.c3.metric2':        '4×',
    'cs.c3.label2':         'Lead increase',

    /* --- Testimonials --- */
    'test.label':           'Testimonials',
    'test.title':           'What Our Clients Say',
    'test.t1.text':         'ITQAN delivered a POS system that completely transformed how we run our 4 branches. The offline capability was critical for our business continuity.',
    'test.t1.name':         'Ahmed M.',
    'test.t1.role':         'Retail Chain Owner, Cairo',
    'test.t2.text':         'Their marketing team built our brand from scratch and ran our digital campaigns. Within 3 months, our leads increased by 4×. Exceptional work.',
    'test.t2.name':         'Sara K.',
    'test.t2.role':         'CEO, Professional Services Firm',
    'test.t3.text':         'The custom ERP they built for our distribution company saved us hundreds of hours monthly. The bilingual support made adoption seamless across our team.',
    'test.t3.name':         'Omar R.',
    'test.t3.role':         'Operations Director, Distribution Company',

    /* --- Integrations --- */
    'int.label':            'Integrations',
    'int.title':            'Connects With Your Entire Stack',
    'int.desc':             'Our systems integrate natively with the tools and platforms your business already uses.',

    /* --- Insights --- */
    'ins.label':            'Insights',
    'ins.title':            'Knowledge That Drives Growth',
    'ins.desc':             'Expert perspectives on digital transformation, software engineering, and business growth strategies.',
    'ins.readmore':         'Read Article →',
    'ins.p1.cat':           'Digital Transformation',
    'ins.p1.title':         'Why Mid-Sized Companies Invest in Custom ERP in 2025',
    'ins.p1.desc':          'When off-the-shelf software no longer fits complex operations. Discover why bespoke ERP is becoming a decisive competitive advantage.',
    'ins.p2.cat':           'Marketing Strategy',
    'ins.p2.title':         'The Performance Marketing Playbook for B2B Growth in the Middle East',
    'ins.p2.desc':          'A data-driven framework for generating qualified leads and turning marketing spend into measurable opportunities.',
    'ins.p3.cat':           'Business Automation',
    'ins.p3.title':         'How AI-Powered Automation Is Reshaping Business Operations',
    'ins.p3.desc':          'From document processing to intelligent reporting—explore how businesses are using automation to cut costs and accelerate decisions.',

    /* --- CTA Section --- */
    'cta.title':            'Ready to Transform Your Business?',
    'cta.desc':             'Let\'s build technology that fits the way you work. Request a consultation and we\'ll design a roadmap tailored to your goals.',
    'cta.btn1':             'Request a Consultation',
    'cta.btn2':             'View Our Work',

    /* --- Footer --- */
    'footer.tagline':       'Technology that powers your business. Marketing that grows it.',
    'footer.col.solutions': 'Solutions',
    'footer.col.products':  'Products',
    'footer.col.company':   'Company',
    'footer.follow':        'Follow Us',
    'footer.copy':          '© {year} ITQAN Solutions. All rights reserved.',

    /* --- About Page --- */
    'about.label':          'About ITQAN Solutions',
    'about.title':          'We Engineer Growth.',
    'about.subtitle':       'A digital transformation and software engineering company helping businesses in Egypt and the MENA region operate smarter and grow faster.',
    'about.desc':           'At ITQAN Solutions, we believe technology should work for your business—not the other way around. Founded in 2020, we combine software engineering, digital innovation, and strategic marketing into a single, cohesive ecosystem that helps organizations at every stage of their growth journey. From building your first ERP to launching your next digital campaign—we engineer growth.',
    'about.mission.t':      'Our Mission',
    'about.mission.d':      'To empower businesses with practical, reliable, and intelligent technology that simplifies complexity, increases efficiency, and drives sustainable growth.',
    'about.vision.t':       'Our Vision',
    'about.vision.d':       'To be the leading digital transformation partner in the MENA region, recognized for engineering excellence, creative impact, and long-term business results.',
    'about.v1.t':           'Engineering Quality',
    'about.v1.d':           'Clean architecture, scalable systems, and code that stands the test of time.',
    'about.v2.t':           'Delivery Speed',
    'about.v2.d':           'Agile execution with real business outcomes, not just deliverables.',
    'about.v3.t':           'Partnership Depth',
    'about.v3.d':           'We stay with our clients long after launch—training, support, and continuous improvement.',
    'about.time.1.y':       '2020',
    'about.time.1.t':       'Founded',
    'about.time.1.d':       'ITQAN was established with a clear vision: build meaningful, practical software for real businesses.',
    'about.time.2.y':       '2021',
    'about.time.2.t':       'First Enterprise ERP',
    'about.time.2.d':       'Delivered our first custom ERP for a multi-branch distribution company, proving our engineering capabilities.',
    'about.time.3.y':       '2022',
    'about.time.3.t':       'Tashgheel POS Launch',
    'about.time.3.d':       'Released the Tashgheel platform covering retail, restaurants, and service centers across Egypt.',
    'about.time.4.y':       '2023',
    'about.time.4.t':       'Digital & Marketing Division',
    'about.time.4.d':       'Expanded into full-service digital solutions and performance marketing, becoming a complete transformation partner.',
    'about.time.5.y':       '2024',
    'about.time.5.t':       'Regional Expansion',
    'about.time.5.d':       'Extended our reach into GCC markets with cloud-ready enterprise solutions and remote implementation.',
    'about.time.6.y':       '2025–26',
    'about.time.6.t':       'AI & Automation Era',
    'about.time.6.d':       'Integrating AI-powered automation, intelligent analytics, and next-generation workflows into all our products.',
    'about.tech.t':         'Technology Stack',
    'about.tech.d':         'We build with the best modern tools, organized into capability layers.',
    'about.process.t':      'Our Process',

    /* --- Services Page --- */
    'srv.label':            'Our Services',
    'srv.title':            'Four Divisions. One Vision.',
    'srv.desc':             'ITQAN offers complete end-to-end solutions organized into four strategic divisions, each designed to address a specific dimension of your business growth.',
    'srv.p1.num':           '01',
    'srv.p1.label':         'Software Engineering',
    'srv.p1.title':         'Custom Business Software',
    'srv.p1.desc':          'We engineer enterprise-grade software systems tailored precisely to your operational workflows—not adapted from a template.',
    'srv.p2.num':           '02',
    'srv.p2.label':         'Digital Solutions',
    'srv.p2.title':         'Digital Presence & Products',
    'srv.p2.desc':          'Modern digital experiences that make your brand stand out—websites, apps, portals, and platforms built for performance.',
    'srv.p3.num':           '03',
    'srv.p3.label':         'Marketing & Creative',
    'srv.p3.title':         'Growth Marketing & Brand Building',
    'srv.p3.desc':          'From brand identity and content production to digital advertising and social media—we help you attract, engage, and convert.',
    'srv.p4.num':           '04',
    'srv.p4.label':         'Business Automation',
    'srv.p4.title':         'Intelligent Automation & Integration',
    'srv.p4.desc':          'Connect your systems, eliminate manual processes, and leverage AI-driven automation to operate with higher efficiency.',
    'srv.why.title':        'Why Choose ITQAN?',
    'srv.why.1.t':          'MENA Market Expertise',
    'srv.why.1.d':          'Deep understanding of local business dynamics, regulatory requirements, and Arabic language needs.',
    'srv.why.2.t':          'Full-Spectrum Capabilities',
    'srv.why.2.d':          'Software, design, marketing, and automation under one roof—no need for multiple vendors.',
    'srv.why.3.t':          'Long-Term Partnership',
    'srv.why.3.d':          'We invest in your success beyond the project delivery. Support, training, and improvement never stop.',
    'srv.faq.title':        'Frequently Asked Questions',

    /* --- FAQ --- */
    'faq.q1':               'Do you build fully custom software from scratch?',
    'faq.a1':               'Yes. Every software solution we deliver is purpose-built for your specific business processes, workflows, and industry requirements. We never use generic templates.',
    'faq.q2':               'Can your systems work without an internet connection?',
    'faq.a2':               'Absolutely. Our desktop POS and ERP solutions are designed with offline-first architecture. They operate fully without internet and sync automatically when connectivity is restored.',
    'faq.q3':               'Can you integrate with our existing systems?',
    'faq.a3':               'Yes. Our API-first architecture allows seamless integration with ERP systems, accounting software, payment gateways, CRM platforms, e-commerce stores, and virtually any third-party system.',
    'faq.q4':               'Do you support multi-branch operations?',
    'faq.a4':               'Yes. All our enterprise solutions support unlimited branches with real-time data synchronization, centralized reporting, and branch-level permission controls.',
    'faq.q5':               'Do you provide training after delivery?',
    'faq.a5':               'Every project includes a comprehensive training program for all user roles—from administrators to daily operators. We also provide documentation and video tutorials.',
    'faq.q6':               'What kind of ongoing support do you offer?',
    'faq.a6':               'We offer tiered support packages including bug fixes, feature updates, performance monitoring, and a dedicated account manager for enterprise clients.',
    'faq.q7':               'Do you offer marketing services alongside software?',
    'faq.a7':               'Yes. Our Marketing & Creative division offers full-service solutions: brand identity, content production, social media management, Meta/Google Ads, SEO, and analytics.',

    /* --- Contact Page --- */
    'contact.label':        'Contact Us',
    'contact.desc':         'Tell us about your project and goals. We respond within 24 hours with a clear next step.',
    'contact.info.title':   'Contact Information',
    'contact.email':        'info@itqansolutions.org',
    'contact.phone1':       '+20 112 652 2373',
    'contact.phone2':       '+20 115 525 3886',
    'contact.phone3':       '+20 114 270 3439',
    'contact.form.title':   'Send Us a Message',
    'contact.name':         'Full Name',
    'contact.email.f':      'Email Address',
    'contact.phone.f':      'Phone Number',
    'contact.company':      'Company Name',
    'contact.service':      'Service of Interest',
    'contact.service.sw':   'Software Engineering',
    'contact.service.dig':  'Digital Solutions',
    'contact.service.mkt':  'Marketing & Creative',
    'contact.service.aut':  'Business Automation',
    'contact.service.oth':  'Other / Not Sure',
    'contact.message':      'Tell us about your project',
    'contact.send':         'Send Message',
    'contact.sending':      'Sending…',
    'contact.success':      '✓ Message sent! We\'ll be in touch within 24 hours.',
    'contact.error':        'Something went wrong. Please email us directly.',

    /* --- Services Page Pillars & Features --- */
    'srv.label':            'Our Solutions',
    'srv.title':            'Comprehensive Technology & Marketing',
    'srv.desc':             'From software engineering and digital transformation to performance marketing and business automation.',
    'srv.p1.label':         'Pillar 01',
    'srv.p1.title':         'Software Engineering',
    'srv.p1.desc':          'Robust, scalable, and secure systems tailored for complex business needs.',
    'srv.p2.label':         'Pillar 02',
    'srv.p2.title':         'Digital Solutions',
    'srv.p2.desc':          'Engaging digital products built for speed, conversion, and user satisfaction.',
    'srv.p3.label':         'Pillar 03',
    'srv.p3.title':         'Marketing & Creative',
    'srv.p3.desc':          'Strategic growth, brand identity, content production, and performance ads.',
    'srv.p4.label':         'Pillar 04',
    'srv.p4.title':         'Business Automation',
    'srv.p4.desc':          'Connect systems, automate workflows, and save hours with AI and integrations.',
    'srv.why.title':        'Why Choose ITQAN',
    'srv.why.1.t':          'Strategic Partnership',
    'srv.why.1.d':          'We don\'t just deliver code—we partner with you to achieve measurable business growth.',
    'srv.why.2.t':          'Unified Platform',
    'srv.why.2.d':          'Engineering, design, marketing, and automation working together seamlessly.',
    'srv.why.3.t':          'Measurable ROI',
    'srv.why.3.d':          'Data-driven execution focused on efficiency, conversions, and revenue.',
    'srv.faq.title':        'Frequently Asked Questions',

    /* --- Service Features (Pillars 1-4) --- */
    'srv.sf1.t': 'Custom ERP Systems',           'srv.sf1.d': 'Fully tailored enterprise resource planning systems.',
    'srv.sf2.t': 'CRM',                          'srv.sf2.d': 'Customer relationship management built for your sales process.',
    'srv.sf3.t': 'HRMS',                         'srv.sf3.d': 'Attendance, payroll, recruitment, and performance management.',
    'srv.sf4.t': 'Retail POS',                   'srv.sf4.d': 'Multi-branch retail point of sale with offline capability.',
    'srv.sf5.t': 'Restaurant POS',               'srv.sf5.d': 'F&B management with kitchen display and table tracking.',
    'srv.sf6.t': 'Inventory Management',        'srv.sf6.d': 'Real-time stock control across locations.',
    'srv.sf7.t': 'Finance & Accounting',        'srv.sf7.d': 'AR/AP, invoicing, and financial reporting.',
    'srv.sf8.t': 'Procurement',                  'srv.sf8.d': 'Purchase orders, vendor management, and cost control.',
    'srv.sf9.t': 'Business Intelligence',       'srv.sf9.d': 'Custom dashboards and data-driven reporting.',

    'srv.dg1.t': 'Corporate Websites',          'srv.dg1.d': 'Professional online presence optimized for speed and SEO.',
    'srv.dg2.t': 'E-Commerce Platforms',        'srv.dg2.d': 'High-converting web stores with local payment integrations.',
    'srv.dg3.t': 'Landing Pages',               'srv.dg3.d': 'Focused, high-impact pages designed for ad campaigns.',
    'srv.dg4.t': 'Mobile Applications',         'srv.dg4.d': 'Native iOS and Android apps for seamless mobile experience.',
    'srv.dg5.t': 'Customer Portals',            'srv.dg5.d': 'Self-service web applications for client interaction.',
    'srv.dg6.t': 'UI/UX Design',                'srv.dg6.d': 'Intuitive, beautiful user experience and product design.',
    'srv.dg7.t': 'Hosting & Infrastructure',    'srv.dg7.d': 'Reliable cloud setup, SSL, and server management.',
    'srv.dg8.t': 'Maintenance & Support',       'srv.dg8.d': 'Ongoing updates, security patches, and issue resolution.',
    'srv.dg9.t': 'Website Optimization',       'srv.dg9.d': 'Speed enhancement, core web vitals, and UX audit.',

    'srv.mk1.t': 'Marketing Strategy',          'srv.mk1.d': 'Data-backed roadmap to reach your ideal audience.',
    'srv.mk2.t': 'Brand Identity',              'srv.mk2.d': 'Logos, brand guidelines, and visual storytelling.',
    'srv.mk3.t': 'Content Production',          'srv.mk3.d': 'Professional video, photography, and copy writing.',
    'srv.mk4.t': 'Social Media Management',     'srv.mk4.d': 'End-to-end management, content plans, and engagement.',
    'srv.mk5.t': 'Performance Advertising',    'srv.mk5.d': 'Target Meta, Google, and TikTok ads focused on ROI.',
    'srv.mk6.t': 'SEO & Search Growth',         'srv.mk6.d': 'Organic traffic growth through keyword strategy.',

    'srv.at1.t': 'Workflow Automation',         'srv.at1.d': 'Streamline internal tasks and eliminate manual entry.',
    'srv.at2.t': 'AI Powered Systems',          'srv.at2.d': 'Intelligent bots, automated routing, and smart insights.',
    'srv.at3.t': 'API Integrations',            'srv.at3.d': 'Seamless communication between your software ecosystem.',
    'srv.at4.t': 'WhatsApp Automation',         'srv.at4.d': 'Automated customer messaging and order updates.',
    'srv.at5.t': 'Payment Gateway Setup',       'srv.at5.d': 'Secure online payment processing with local channels.',
    'srv.at6.t': 'Reporting Automation',        'srv.at6.d': 'Automated daily/weekly reporting directly to management.',

    /* --- Case Studies 4 & 5 --- */
    'cs.c4.ind': 'Healthcare',
    'cs.c4.title': 'HRMS for a Multi-Department Healthcare Organization',
    'cs.c4.challenge': 'A 200-employee clinic struggled with manual attendance, payroll, and leave management across departments.',
    'cs.c4.solution': 'Deployed a custom HRMS covering attendance tracking, automated payroll calculation, leave management, and performance reviews.',
    'cs.c4.metric1': '85%', 'cs.c4.label1': 'Reduction in Manual HR Tasks',
    'cs.c4.metric2': '200', 'cs.c4.label2': 'Employees Onboarded in 2 weeks',

    'cs.c5.ind': 'Retail',
    'cs.c5.title': 'Custom E-Commerce Platform with ERP Integration',
    'cs.c5.challenge': 'A wholesale brand wanted to sell direct-to-consumer online with real-time inventory sync from their existing ERP.',
    'cs.c5.solution': 'Built a high-performance e-commerce store with live inventory sync, product catalog management, and integrated payment gateways.',
    'cs.c5.metric1': '3×', 'cs.c5.label1': 'Online Revenue Growth',
    'cs.c5.metric2': 'Real-time', 'cs.c5.label2': 'Inventory Sync Across Channels',

    /* --- Tashgheel Retail --- */
    'ret.label':            'Tashgheel Retail',
    'ret.title':            'The Complete Retail Intelligence Platform.',
    'ret.subtitle':         'A professional point-of-sale and ERP system designed for modern retail—combining operational simplicity with enterprise-grade reporting.',
    'ret.cta1':             'Request a Demo',
    'ret.cta2':             'View Features',
    'ret.ov.title':         'One Platform. Every Retail Operation.',
    'ret.ov.desc':          'From the sales counter to the back office—Tashgheel Retail covers every aspect of running a modern retail business.',
    'ret.feat.title':       'Key Features',
    'ret.f1.t':             'Multi-User & Roles',
    'ret.f1.d':             'Unlimited users with granular role-based permission controls.',
    'ret.f2.t':             'Custom Receipts',
    'ret.f2.d':             'Logo, address, language, footer, and promotional messages—fully customizable.',
    'ret.f3.t':             'Advanced Inventory',
    'ret.f3.d':             'Track cost/sell prices by category, perform stock audits, and set reorder alerts.',
    'ret.f4.t':             'Expense Tracking',
    'ret.f4.d':             'Record daily expenses linked to employees and financial reports.',
    'ret.f5.t':             'Sales Targets',
    'ret.f5.d':             'Set monthly targets per salesperson and track real-time achievement.',
    'ret.f6.t':             'Secure Backup',
    'ret.f6.d':             'One-click encrypted backup and restore without technical expertise.',
    'ret.rep.title':        'Enterprise-Grade Reports',
    'ret.rep.l1':           'Total Sales — Cash, Visa, Mobile Wallet',
    'ret.rep.l2':           'COGS & Net Profit Analysis',
    'ret.rep.l3':           'Sales by User, Product, or Category',
    'ret.rep.l4':           'Inventory Value & Returns Tracking',
    'ret.dep.title':        'Flexible Deployment',
    'ret.online.t':         'Online — Web App',
    'ret.online.d':         'Ideal for multi-branch and remote management. Real-time cloud sync.',
    'ret.offline.t':        'Offline — Desktop',
    'ret.offline.d':        'Maximum stability. No internet required. All data stored locally.',

    /* --- Tashgheel Restaurants --- */
    'rst.label': 'Tashgheel F&B',
    'rst.title': 'Tashgheel F&B: Restaurant POS and Management System for Egypt',
    'rst.subtitle':         'An end-to-end restaurant management platform covering POS, kitchen display, table management, delivery, recipe costing, and COGS analysis.',
    'rst.f1.t':             'Raw Material Management',
    'rst.f1.d':             'Add ingredients, link to suppliers, and track payment schedules.',
    'rst.f2.t':             'Menu Engineering',
    'rst.f2.d':             'Calculate actual recipe cost and waste percentages per item and size.',
    'rst.f3.t':             'Flexible Pricing',
    'rst.f3.d':             'Different prices for dine-in, takeaway, and delivery with Happy Hour support.',
    'rst.f4.t':             'Point of Sale (POS)',
    'rst.f4.d':             'Fast interface with discounts, multi-payment, and split billing.',
    'rst.f5.t':             'Table Management',
    'rst.f5.d':             'Visual floor plan, merge, transfer, and close tables with ease.',
    'rst.f6.t':             'Kitchen Display (KDS)',
    'rst.f6.d':             'Real-time kitchen screen with order status management.',
    'rst.f7.t':             'Staff & Permissions',
    'rst.f7.d':             'Waiter, chef, and cashier roles with individual performance tracking.',
    'rst.f8.t':             'Delivery Management',
    'rst.f8.d':             'Customer database with saved addresses for fast order processing.',
    'rst.f9.t':             'Inventory & Waste',
    'rst.f9.d':             'Auto-deduct ingredients on sale with accurate waste and loss reports.',
    'rst.f10.t':            'Multi-Printer Routing',
    'rst.f10.d':            'Food orders to kitchen, drinks to bar—automatic and configurable.',
    'rst.f11.t':            'Advanced Analytics',
    'rst.f11.d':            'Revenue, channel performance, staff KPIs, and supplier balances.',
    'rst.f12.t':            'Secure Backup',
    'rst.f12.d':            'One-click backup and data recovery without technical assistance.',

    /* --- Tashgheel Services --- */
    'svc.label':            'Tashgheel Services',
    'svc.title':            'Power Your Service Center.',
    'svc.subtitle':         'A comprehensive system for maintenance centers, auto workshops, and service businesses—track visits, technicians, spare parts, and invoicing.',
    'svc.f1.t':             'Visits Management',
    'svc.f1.d':             'Register and track all customer visits. Search by plate, chassis, or name.',
    'svc.f2.t':             'Customer & Vehicle Profiles',
    'svc.f2.d':             'Complete records including model, VIN, odometer, and service history.',
    'svc.f3.t':             'Spare Parts',
    'svc.f3.d':             'Track cost, sell price, and profitability. Link parts directly to visits.',
    'svc.f4.t':             'Supplier Management',
    'svc.f4.d':             'Manage debts, partial payments, and full transaction history per supplier.',
    'svc.f5.t':             'Service Management',
    'svc.f5.d':             'Add services to visits and combine with parts in a single invoice.',
    'svc.f6.t':             'Invoicing',
    'svc.f6.d':             'Detailed printable invoices with discount support and itemized breakdown.',
    'svc.f7.t':             'Appointments',
    'svc.f7.d':             'Schedule next service visits and print reminders on invoices.',
    'svc.f8.t':             'Technician Tracking',
    'svc.f8.d':             'Assign technicians to visits and monitor performance targets.',
    'svc.f9.t':             'Expense Tracking',
    'svc.f9.d':             'Record operational costs and track impact on net profit.',
    'svc.f10.t':            'Reports & Analytics',
    'svc.f10.d':            'Revenue, top services, technician KPIs, and supplier balances.',
    'svc.f11.t':            'Secure Backup',
    'svc.f11.d':            'Create and restore backups anytime without technical assistance.',

    /* --- Shared Product Strings --- */
    'prod.dep.title':       'Deployment Options',
    'prod.online.t':        'Online — Web Application',
    'prod.online.d':        'Perfect for multi-branch management and remote access. Real-time cloud sync.',
    'prod.offline.t':       'Offline — Desktop Application',
    'prod.offline.d':       'Maximum stability and data security. No internet dependency.',
    'prod.cta.demo':        'Request a Free Demo',

    /* --- Blog / Insights Page --- */
    'blog.label':           'ITQAN Insights',
    'blog.title':           'Knowledge Drives Growth',
    'blog.subtitle':        'Expert perspectives on digital transformation, ERP, marketing, automation, and business growth from the ITQAN team.',
    'blog.all':             'All Topics',
    'blog.cat.dt':          'Digital Transformation',
    'blog.cat.erp':         'ERP & Systems',
    'blog.cat.mkt':         'Marketing',
    'blog.cat.ai':          'AI & Automation',
    'blog.cat.web':         'Web & Mobile',
    'blog.cat.biz':         'Business Growth',

    /* --- Portfolio / Case Studies Page --- */
    'port.label':           'Case Studies',
    'port.title':           'Real Solutions. Measurable Results.',
    'port.desc':            'A selection of projects where ITQAN helped businesses transform their operations through technology, marketing, and automation.',

    /* --- Footer links --- */
    'footer.sw':            'Software Engineering',
    'footer.dig':           'Digital Solutions',
    'footer.mkt':           'Marketing & Creative',
    'footer.aut':           'Business Automation',
    'footer.ret':           'Tashgheel Retail',
    'footer.rest': 'Tashgheel F&B',
    'footer.srv':           'Tashgheel Services',
    'footer.erp':           'Custom ERP',
    'footer.about':         'About Us',
    'footer.cases':         'Case Studies',
    'footer.insights':      'Insights',
    'footer.contact':       'Contact',

    /* --- Phase 2: product pages --- */
    'nav.crm': 'Tashgheel Real Estate CRM',
    'nav.cln': 'Tashgheel Clinics',
    'footer.crm': 'Tashgheel Real Estate CRM',
    'footer.cln': 'Tashgheel Clinics',
    'pp.who': 'Who it is for',
    'pp.feat': 'Key Features',
    'pp.faq': 'Frequently Asked Questions',
    'pp.demo': 'Request a Demo',
    'pp.quote': 'Request a Quote',
    'pp.features': 'View Features',
    'tut.title': 'Video tutorials',
    'tut.desc': 'Step-by-step walkthroughs on our YouTube channel',
    'tut.btn': 'Watch the playlist →',
    'pp.note': 'Pricing tailored to your needs. Request a demo or a quote and we will reply.',
    'nav.gcrm': 'Tashgheel General CRM',
    'footer.gcrm': 'Tashgheel General CRM',
    'gcrm.label': 'Tashgheel CRM',
    'gcrm.title': 'CRM and Sales Management Software for Egyptian Companies',
    'gcrm.subtitle': 'Tashgheel CRM brings customers, leads, deals, quotations, invoices, inventory and team targets into one Arabic and English system, built in Cairo by Itqan Solutions.',
    'gcrm.app': 'Open Tashgheel CRM',
    'gcrm.who.title': 'Built for sales-driven companies',
    'gcrm.who.desc': 'The general edition of Tashgheel CRM is for companies that sell to many customers and want sales, stock and money in one place.',
    'gcrm.who.l1': 'Trading, distribution and service companies',
    'gcrm.who.l2': 'Sales teams that need follow-up and targets',
    'gcrm.who.l3': 'Companies that quote, invoice and track stock',
    'gcrm.who.l4': 'Owners who want one system instead of separate sheets',
    'gcrm.f1.t': 'Customers and leads',
    'gcrm.f1.d': 'Keep every customer and lead with its contacts, history and owner.',
    'gcrm.f2.t': 'Deals and pipeline',
    'gcrm.f2.d': 'Move deals through pipeline stages and see what is open, won or lost.',
    'gcrm.f3.t': 'Tasks and follow-ups',
    'gcrm.f3.d': 'Assign tasks to the team so no lead is forgotten.',
    'gcrm.f4.t': 'Quotations and sales orders',
    'gcrm.f4.d': 'Prepare quotations, turn them into sales orders and invoice the customer.',
    'gcrm.f5.t': 'Teams and targets',
    'gcrm.f5.d': 'Organize sales teams, set targets and follow performance.',
    'gcrm.f6.t': 'Meta lead forms and WhatsApp',
    'gcrm.f6.d': 'Bring in leads from Facebook and Instagram forms and message customers on WhatsApp. WhatsApp needs a verified Meta business account.',
    'gcrm.f7.t': 'Marketing campaigns',
    'gcrm.f7.d': 'Run marketing campaigns from the same customer data.',
    'gcrm.f8.t': 'Inventory and procurement',
    'gcrm.f8.d': 'Manage items, warehouses, suppliers and purchasing.',
    'gcrm.f9.t': 'Roles and audit log',
    'gcrm.f9.d': 'Give each user the access they need and keep an audit trail of changes.',
    'gcrm.more.title': 'Finance and HR in the same system',
    'gcrm.more.desc': 'Back-office modules share the same data as sales, so numbers match across teams.',
    'gcrm.more.l1': 'Invoices, receipts and expenses',
    'gcrm.more.l2': 'Treasury, banks and customer statements',
    'gcrm.more.l3': 'HR, attendance and payroll',
    'gcrm.more.l4': 'E-invoicing integration (Egyptian Tax Authority)',
    'gcrm.q1': 'What is Tashgheel CRM?',
    'gcrm.a1': 'Tashgheel CRM is a cloud CRM and business system made by Itqan Solutions in Cairo. The general edition covers sales, finance, inventory, procurement and HR. A separate real estate edition covers developers and brokers.',
    'gcrm.q2': 'Is it available in Arabic?',
    'gcrm.a2': 'Yes. The interface works in Arabic and English.',
    'gcrm.q3': 'What is the difference between the general and the real estate edition?',
    'gcrm.a3': 'The real estate edition adds projects, units, reservations, contracts, installments and commissions. The general edition is for companies that sell products or services to customers.',
    'gcrm.q4': 'Can it create quotations and invoices?',
    'gcrm.a4': 'Yes. You can prepare quotations, convert them to sales orders and issue invoices and receipts.',
    'gcrm.q5': 'Does it support Egyptian e-invoicing?',
    'gcrm.a5': 'Tashgheel CRM includes e-invoicing integration settings for the Egyptian Tax Authority. Ask us how it fits your tax registration when you request a demo.',
    'gcrm.q6': 'Can I connect Facebook, Instagram and WhatsApp?',
    'gcrm.a6': 'Tashgheel CRM connects to Meta lead forms and WhatsApp. WhatsApp needs a verified Meta business account, and we help you set it up.',
    'gcrm.q7': 'Do I need to install anything?',
    'gcrm.a7': 'No. It is a web application. Your team signs in from any browser.',
    'gcrm.q8': 'How much does it cost?',
    'gcrm.a8': 'Pricing is tailored to team size and modules. Request a demo or a quote and we will reply with a clear offer.',
    'crm.label': 'Tashgheel CRM',
    'crm.title': 'Real Estate CRM for Egyptian Developers and Brokers',
    'crm.subtitle': 'Tashgheel CRM tracks every lead, unit, reservation, installment and commission in one Arabic and English system, built in Cairo by Itqan Solutions.',
    'crm.app': 'Open Tashgheel CRM',
    'shot.title': 'See it in action',
    'shot.crm.cap': 'The Tashgheel CRM dashboard (Arabic interface, test data): available units, reserved units, deals in progress and collected amounts.',
    'shot.gcrm.cap': 'The Tashgheel General CRM dashboard (Arabic interface, test data).',
    'shot.cl.cap': 'The Tashgheel Clinics dashboard (Arabic interface, test data): patients, today\'s appointments and revenue, with a menu for doctors, schedules, inventory, accounts and reports.',
    'prod.crm.title': 'Tashgheel Real Estate CRM',
    'prod.crm.desc': 'A CRM for property developers and brokers: leads, units, reservations, installments and commissions in one place.',
    'prod.crm.f1': 'Units, reservations and installments',
    'prod.crm.f2': 'Leads and deal pipeline',
    'prod.crm.f3': 'Arabic & English interface',
    'prod.crm.btn': 'Explore Real Estate CRM →',
    'prod.gcrm.title': 'Tashgheel General CRM',
    'prod.gcrm.desc': 'Customers, deals, quotations, invoices, inventory and team targets for companies that sell to many customers.',
    'prod.gcrm.f1': 'Deals and quotations',
    'prod.gcrm.f2': 'Invoices and inventory',
    'prod.gcrm.f3': 'Arabic & English interface',
    'prod.gcrm.btn': 'Explore General CRM →',
    'prod.clin.title': 'Tashgheel Clinics',
    'prod.clin.desc': 'Patients, appointments, doctor schedules, inventory and payments for clinics and aesthetic centers.',
    'prod.clin.f1': 'Appointments and doctor schedules',
    'prod.clin.f2': 'Patients, inventory and accounts',
    'prod.clin.f3': 'Arabic & English interface',
    'prod.clin.btn': 'Explore Clinics →',
    'rst.ov.title': 'One Platform. Every F&B Operation.',
    'rst.ov.desc': 'From the dining room to the kitchen and the stockroom, Tashgheel F&B covers the daily running of a restaurant or cafe.',
    'srv.ov.title': 'One Platform. Every Service Operation.',
    'srv.ov.desc': 'From the reception desk to the workshop and the spare parts store, Tashgheel Services covers the daily running of a service center.',
    'prod.badge.ret': 'Retail POS',
    'prod.badge.rest': 'F&B POS',
    'prod.badge.srv': 'Service Center',
    'prod.badge.crm': 'Real Estate CRM',
    'prod.badge.gcrm': 'General CRM',
    'prod.badge.clin': 'Clinic Management',
    'prod.badge.erp': 'Enterprise ERP',
    'prod.ret.btn': 'Explore Retail →',
    'prod.rest.btn': 'Explore Restaurants →',
    'prod.srv.btn': 'Explore Services →',
    'prod.erp.btn': 'Explore Custom ERP →',
    'rst.ov.b1': 'Kitchen Display',
    'rst.ov.b2': 'Table Management',
    'rst.ov.b3': 'Recipe Costing',
    'rst.ov.b4': 'Multi-Channel',
    'shot.fb.cap': 'The Tashgheel F&B point of sale (Arabic interface, demo data): menu by category, dine-in, takeaway and delivery order types, and shift controls.',
    'crm.who.title': 'Built for real estate sales teams',
    'crm.who.desc': 'Tashgheel CRM is for companies that sell property and need to see the whole journey from first inquiry to handover.',
    'crm.who.l1': 'Real estate developers selling off-plan and ready units',
    'crm.who.l2': 'Brokerages and sales agencies with several teams',
    'crm.who.l3': 'Sales managers who need targets and follow-up discipline',
    'crm.who.l4': 'Owners who want one system for sales and the back office',
    'crm.f1.t': 'Leads and sales pipeline',
    'crm.f1.d': 'Capture leads, assign them to reps and move each deal through a visual pipeline with tasks and follow-ups.',
    'crm.f2.t': 'Meta lead forms',
    'crm.f2.d': 'Bring leads from Facebook and Instagram lead forms straight into the CRM.',
    'crm.f3.t': 'WhatsApp integration',
    'crm.f3.d': 'Message leads on WhatsApp from the customer record. Needs a verified Meta business account, and we help set it up.',
    'crm.f4.t': 'Projects, phases and units',
    'crm.f4.d': 'Model developers, projects, phases, buildings and units, and see what is available at any time.',
    'crm.f5.t': 'Reservations and contracts',
    'crm.f5.d': 'Reserve a unit, issue the contract and keep the full deal history in one place.',
    'crm.f6.t': 'Installment schedules and receipts',
    'crm.f6.d': 'Set up installment plans per contract and record each receipt against the schedule.',
    'crm.f7.t': 'Teams, targets and commissions',
    'crm.f7.d': 'Organize sales teams, set targets and calculate commissions.',
    'crm.f8.t': 'Property Finder integration',
    'crm.f8.d': 'Receive inquiries from Property Finder directly in the CRM.',
    'crm.f9.t': 'Roles and audit log',
    'crm.f9.d': 'Give each user the access they need and keep an audit trail of changes.',
    'crm.more.title': 'More than a sales tool',
    'crm.more.desc': 'The same system includes back-office modules, so sales, money and operations share one set of data.',
    'crm.more.l1': 'Quotations, sales orders and invoices',
    'crm.more.l2': 'Inventory, warehouses and procurement',
    'crm.more.l3': 'Finance: receipts, expenses, treasury and statements',
    'crm.more.l4': 'HR, attendance, payroll and e-invoicing integration (Egyptian Tax Authority)',
    'crm.q1': 'What is Tashgheel CRM?',
    'crm.a1': 'Tashgheel CRM is a cloud CRM and business system made by Itqan Solutions in Cairo. It has a real estate module for developers and brokers, plus sales, finance, inventory, procurement and HR modules.',
    'crm.q2': 'Is Tashgheel CRM available in Arabic?',
    'crm.a2': 'Yes. The interface works in Arabic and English, so your team can use whichever language they prefer.',
    'crm.q3': 'Can it manage installment plans for units?',
    'crm.a3': 'Yes. You can create installment schedules for each contract and record receipts against them, so you can see what has been paid and what is due.',
    'crm.q4': 'Can I capture leads from Facebook, Instagram, WhatsApp and Property Finder?',
    'crm.a4': 'Tashgheel CRM connects to Meta lead forms, WhatsApp and Property Finder. WhatsApp needs a verified Meta business account, and we help you set up each connection.',
    'crm.q5': 'Does it support Egyptian e-invoicing?',
    'crm.a5': 'Tashgheel CRM includes e-invoicing integration settings for the Egyptian Tax Authority. Ask us how it fits your tax registration when you request a demo.',
    'crm.q6': 'Do I need to install anything?',
    'crm.a6': 'No. It is a web application. Your team signs in from any browser, on the office computer or a phone.',
    'crm.q7': 'Can brokers and managers have different permissions?',
    'crm.a7': 'Yes. Users get roles, so a broker sees their own leads while a manager sees teams, targets and reports. Changes are recorded in an audit log.',
    'crm.q8': 'How much does it cost?',
    'crm.a8': 'Pricing is tailored to team size and modules. Request a demo or a quote and we will reply with a clear offer.',
    'cln.label': 'Tashgheel Clinics',
    'cln.title': 'Clinic and Aesthetic Center Management Software for Egypt',
    'cln.subtitle': 'Tashgheel Clinics runs patients, appointments, doctor schedules, sessions, stock and payments in one system, with an Arabic and English interface.',
    'cln.app': 'Open Tashgheel Clinics',
    'cln.who.title': 'Built for clinics and aesthetic centers',
    'cln.who.desc': 'Tashgheel Clinics fits practices where several doctors, specialties and treatment sessions need to run smoothly every day.',
    'cln.who.l1': 'Multi-doctor clinics and polyclinics',
    'cln.who.l2': 'Dermatology, cosmetic and aesthetic centers',
    'cln.who.l3': 'Clinics that track treatment sessions and consumables',
    'cln.who.l4': 'Owners who want daily numbers without chasing paperwork',
    'cln.f1.t': 'Patient records',
    'cln.f1.d': 'One profile per patient with personal details, medical history, appointments and images.',
    'cln.f2.t': 'Appointments and calendar',
    'cln.f2.d': 'Book, move and track appointments on a calendar that shows each doctor and day.',
    'cln.f3.t': 'Doctor schedules and specialties',
    'cln.f3.d': 'Set working days and hours per doctor and organize doctors by specialty and service.',
    'cln.f4.t': 'Consultation workspace',
    'cln.f4.d': 'Record notes, the services performed and the prescription during the visit.',
    'cln.f5.t': 'Body map',
    'cln.f5.d': 'Mark treated areas on a body map and keep the history for each patient.',
    'cln.f6.t': 'Stock and consumables',
    'cln.f6.d': 'Track products, vendors and purchases, and record what each session consumed.',
    'cln.f7.t': 'Payments and finance',
    'cln.f7.d': 'Collect payments from patients, record transactions and follow the clinic cash position.',
    'cln.f8.t': 'Online booking page',
    'cln.f8.d': 'Let patients request appointments through a public booking page.',
    'cln.f9.t': 'Reports and user roles',
    'cln.f9.d': 'Review activity with reports, and give reception, doctors and managers separate access.',
    'cln.q1': 'What is Tashgheel Clinics?',
    'cln.a1': 'Tashgheel Clinics is a clinic management system made by Itqan Solutions in Cairo. It covers patients, appointments, doctors, consultations, stock, payments and reports.',
    'cln.q2': 'Which clinics is it for?',
    'cln.a2': 'It is built for clinics with one or more doctors, and for cosmetic and aesthetic centers that run treatment sessions and use consumables.',
    'cln.q3': 'Does it have an Arabic interface?',
    'cln.a3': 'Yes. It supports Arabic with right-to-left layout, and English as well.',
    'cln.q4': 'Can patients book online?',
    'cln.a4': 'Yes. There is a public booking page where patients can request an appointment, and the request reaches your team in the system.',
    'cln.q5': 'Can it track the stock used in each session?',
    'cln.a5': 'Yes. You can keep products and vendors, record purchases, and log the items used during a consultation so stock stays accurate.',
    'cln.q6': 'Can it handle patient payments?',
    'cln.a6': 'Yes. Reception can collect payments against a visit, and managers can see transactions and the financial picture in the finance and reports screens.',
    'cln.q7': 'Is patient data protected?',
    'cln.a7': 'Each clinic has its own separate account space, and staff only see what their role allows. Changes are recorded in an audit log.',
    'cln.q8': 'How much does it cost?',
    'cln.a8': 'Pricing is tailored to clinic size and modules. Request a demo or a quote and we will reply with a clear offer.',
    'rst.app': 'Open Tashgheel F&B',
    'rst.who.title': 'Built for food and beverage businesses',
    'rst.who.desc': 'Tashgheel F&B runs the floor, the kitchen and the stockroom from one system.',
    'rst.who.l1': 'Restaurants with dine-in, takeaway and delivery',
    'rst.who.l2': 'Cafes and quick-service shops',
    'rst.who.l3': 'Multi-branch food and beverage brands',
    'rst.who.l4': 'Owners who want real food cost and supplier balances',
    'rst.faq.q1': 'What is Tashgheel F&B?',
    'rst.faq.a1': 'Tashgheel F&B is a restaurant POS and management system made by Itqan Solutions in Cairo. It covers the POS, tables, kitchen screen, delivery, recipes, stock, suppliers and reports.',
    'rst.faq.q2': 'Which businesses can use it?',
    'rst.faq.a2': 'Restaurants, cafes, quick-service shops and multi-branch food brands, with dine-in, takeaway and delivery orders.',
    'rst.faq.q3': 'Can customers order from the table with a QR code?',
    'rst.faq.a3': 'Yes. QR table ordering can be switched on or off by the admin, and a waiter approves each order before it goes to the kitchen.',
    'rst.faq.q4': 'Does it calculate food cost?',
    'rst.faq.a4': 'Yes. You define recipes and ingredients, and the system works out the cost of each item. Stock is deducted when the invoice is closed.',
    'rst.faq.q5': 'Does it support multiple branches and staff roles?',
    'rst.faq.a5': 'Yes. You can run several branches, and give cashiers, waiters, kitchen staff and managers different access.',
    'rst.faq.q6': 'Is there an Arabic interface?',
    'rst.faq.a6': 'Yes. The system supports Arabic and English.',
    'rst.faq.q7': 'Can I try it before buying?',
    'rst.faq.a7': 'Yes. You can register on the F&B app and start a free 3-day trial, or request a demo and our team will walk you through it.',
    'rst.faq.q8': 'How much does it cost?',
    'rst.faq.a8': 'Pricing is tailored to number of branches and modules. Request a demo or a quote and we will reply with a clear offer.',

  },

  ar: {
    /* --- Navigation --- */
    'nav.solutions':        'الحلول',
    'nav.sw':               'هندسة البرمجيات',
    'nav.digital':          'الحلول الرقمية',
    'nav.marketing':        'التسويق والإبداع',
    'nav.automation':       'أتمتة الأعمال',
    'nav.products':         'المنتجات',
    'nav.ret':              'تشغيل ريتيل',
    'nav.rest': 'تشغيل F&B',
    'nav.srv':              'تشغيل خدمات',
    'nav.industries':       'القطاعات',
    'nav.cases':            'دراسات الحالة',
    'nav.insights':         'المقالات',
    'nav.about':            'من نحن',
    'nav.contact':          'اتصل بنا',
    'nav.home':             'الرئيسية',
    'cta.demo':             'اطلب عرضًا تجريبيًا',
    'cta.quote':            'اطلب عرض سعر',

    /* --- Hero --- */
    'hero.badge':           'شريك التحول الرقمي',
    'hero.h1a':             'تكنولوجيا تُشغّل',
    'hero.h1b':             'أعمالك.',
    'hero.h1c':             'تسويق يُنمّيها.',
    'hero.subtitle':        'في إتقان سوليوشنز، نصمم ونطور ونسوّق حلولاً رقمية مخصصة تساعد الشركات على تبسيط العمليات وزيادة الإنتاجية وتسريع النمو.',
    'hero.cta1':            'اطلب عرضًا تجريبيًا',
    'hero.cta2':            'استعرض الحلول',
    'hero.trust':           'موثوق من شركات في مصر ودول الخليج',

    /* --- Ecosystem --- */
    'eco.label':            'منظومة متكاملة. نمو لا محدود.',
    'eco.title':            'كل ما تحتاجه، متصل في منظومة واحدة.',
    'eco.desc':             'من التسويق إلى البرمجيات، ومن الهوية البصرية إلى الأتمتة—كل جانب من عملك يعمل بتناسق كامل كمنظومة ذكية واحدة.',
    'eco.message':          'شريك واحد. منظومة واحدة. نمو لا محدود.',

    /* --- Solutions --- */
    'sol.label':            'حلولنا',
    'sol.title':            'أربعة أقسام. رؤية واحدة.',
    'sol.desc':             'ندمج الهندسة والتصميم والتسويق والأتمتة في منظومة موحدة مبنية حول أهداف عملك.',
    'sol.sw.title':         'هندسة البرمجيات',
    'sol.sw.tag':           'ERP · CRM · POS · HRMS',
    'sol.sw.desc':          'برمجيات مخصصة بمستوى المؤسسات مصممة بدقة لعمليات عملك—من الـ ERP والـ CRM وحتى أنظمة نقاط البيع ولوحات تحليل الأعمال.',
    'sol.sw.link':          'استعرض الهندسة ←',
    'sol.dig.title':        'الحلول الرقمية',
    'sol.dig.tag':          'ويب · موبايل · UI/UX',
    'sol.dig.desc':         'مواقع إلكترونية عصرية، منصات تجارة إلكترونية عالية الأداء، تطبيقات موبايل أصيلة، وتجارب رقمية تحول الزوار إلى عملاء.',
    'sol.dig.link':         'استعرض الحلول الرقمية ←',
    'sol.mkt.title':        'التسويق والإبداع',
    'sol.mkt.tag':          'استراتيجية · محتوى · إعلانات · إنتاج',
    'sol.mkt.desc':         'خدمات تسويق متكاملة من الاستراتيجية وبناء الهوية إلى إنتاج المحتوى وإدارة السوشيال ميديا والإعلانات الأدائية وتحليلات الحملات.',
    'sol.mkt.link':         'استعرض التسويق ←',
    'sol.aut.title':        'أتمتة الأعمال',
    'sol.aut.tag':          'ذكاء اصطناعي · تكاملات · سير عمل',
    'sol.aut.desc':         'ربط كل أنظمتك. أتمتة المهام المتكررة. استثمار سير العمل المدعومة بالذكاء الاصطناعي وتكاملات API والتقارير الذكية للعمل بمستوى أعلى.',
    'sol.aut.link':         'استعرض الأتمتة ←',

    /* --- Services Page Pillars & Features --- */
    'srv.label':            'حلولنا',
    'srv.title':            'تكنولوجيا متكاملة واستراتيجيات تسويق',
    'srv.desc':             'من هندسة البرمجيات والتحول الرقمي إلى تسويق النمو وأتمتة الأعمال الذكية—نقدم حلولاً متكاملة تنمو مع أعمالك.',
    'srv.p1.label':         'الركيزة 01',
    'srv.p1.title':         'هندسة البرمجيات',
    'srv.p1.desc':          'أنظمة مخصصة وقوية قابلة للتوسع وآمنة مصممة بدقة لتلبية احتياجات عملك المعقدة.',
    'srv.p2.label':         'الركيزة 02',
    'srv.p2.title':         'الحلول الرقمية',
    'srv.p2.desc':          'منتجات رقمية جذابة مبنية للسرعة، تحويل الزوار، ورضا المستخدمين.',
    'srv.p3.label':         'الركيزة 03',
    'srv.p3.title':         'التسويق والإبداع',
    'srv.p3.desc':          'نمو استراتيجي، هوية بصرية، إنتاج محتوى، وإعلانات أدائية تستهدف أعلى عائد استثمار.',
    'srv.p4.label':         'الركيزة 04',
    'srv.p4.title':         'أتمتة الأعمال',
    'srv.p4.desc':          'ربط الأنظمة وأتمتة المهام وتوفير مئات الساعات عبر الذكاء الاصطناعي والتكاملات.',
    'srv.why.title':        'لماذا تختار إتقان للحلول والخدمات',
    'srv.why.1.t':          'شراكة استراتيجية',
    'srv.why.1.d':          'نحن لا نسلم كودًا فحسب—بل نشاركك المسيرة لتحقيق نمو حقيقي وقابل للقياس.',
    'srv.why.2.t':          'منظومة موحدة',
    'srv.why.2.d':          'الهندسة والتصميم والتسويق والأتمتة تعمل جميعها بتناسق كامل.',
    'srv.why.3.t':          'عائد استثمار ملموس',
    'srv.why.3.d':          'تنفيذ قائم على البيانات يركز على الكفاءة التشغيلية وزيادة الإيرادات.',
    'srv.faq.title':        'الأسئلة الشائعة',

    'srv.sf1.t': 'أنظمة ERP مخصصة',            'srv.sf1.d': 'أنظمة تخطيط موارد المؤسسات المصممة بالكامل حسب دورتك التشغيلية.',
    'srv.sf2.t': 'إدارة علاقات العملاء (CRM)',    'srv.sf2.d': 'إدارة العملاء والمبيعات المبنية خصيصًا لدورة مبيعاتك.',
    'srv.sf3.t': 'إدارة الموارد البشرية (HRMS)', 'srv.sf3.d': 'الحضور والانصراف، المرتبات، التوظيف، وتقييم الأداء.',
    'srv.sf4.t': 'نقاط بيع التجزئة (POS)',      'srv.sf4.d': 'أنظمة نقاط البيع للمتاجر متعددة الفروع مع العمل أوفلاين.',
    'srv.sf5.t': 'نقاط بيع المطاعم',            'srv.sf5.d': 'إدارة الأغذية والمشروبات مع شاشات المطبخ والطاولات.',
    'srv.sf6.t': 'إدارة المخزون',              'srv.sf6.d': 'مراقبة المخزون الفورية وتتبع الحركة عبر كل المستودعات.',
    'srv.sf7.t': 'المالية والحسابات',          'srv.sf7.d': 'المقبوضات والمستحقات، الفواتير، والتقارير المالية الشاملة.',
    'srv.sf8.t': 'المشتريات والتموين',          'srv.sf8.d': 'أوامر الشراء، إدارة الموردين، والتحكم المالي بالتكاليف.',
    'srv.sf9.t': 'ذكاء الأعمال (BI)',           'srv.sf9.d': 'لوحات تحكم مخصصة وتقارير تفاعلية مدعومة بالبيانات.',

    'srv.dg1.t': 'المواقع المؤسسية',          'srv.dg1.d': 'تواجد رقمي احترافي محسن للسرعة ومحركات البحث SEO.',
    'srv.dg2.t': 'منصات التجارة الإلكترونية',  'srv.dg2.d': 'متاجر إلكترونية عالية التحويل مع ربط بوابات الدفع المحلية.',
    'srv.dg3.t': 'صفحات الهبوط (Landing Pages)', 'srv.dg3.d': 'صفحات مركزة عالية التأثير مصممة خصيصًا للحملات الإعلانية.',
    'srv.dg4.t': 'تطبيقات الموبايل',           'srv.dg4.d': 'تطبيقات iOS وأندرويد أصيلة لتجربة مستخدم سلسة.',
    'srv.dg5.t': 'بوابات العملاء',            'srv.dg5.d': 'تطبيقات ويب ذاتية الخدمة لتسهيل تفاعل العملاء.',
    'srv.dg6.t': 'تصميم واجهات المستخدم (UI/UX)', 'srv.dg6.d': 'تجارب مستخدم مبتكرة وتصاميم عصرية للمنتجات الرقمية.',
    'srv.dg7.t': 'الاستضافة والبنية التحتية',   'srv.dg7.d': 'إعدادات سحابية آمنة، شهادات الأمان SSL، وإدارة السيرفرات.',
    'srv.dg8.t': 'الصيانة والدعم الفني',       'srv.dg8.d': 'تحديثات مستمرة، ترقيعات أمنية، ودعم فني سريع.',
    'srv.dg9.t': 'تحسين أداء المواقع',         'srv.dg9.d': 'تسريع التحميل، تحسين مؤشرات الأداء، وتجربة الاستخدام.',

    'srv.mk1.t': 'استراتيجيات التسويق',        'srv.mk1.d': 'خارطة طريق استراتيجية مدعومة بالبيانات للوصول لجمهورك.',
    'srv.mk2.t': 'الهوية البصرية والعلامة',    'srv.mk2.d': 'شعارات، أدلة الهوية، وصياغة القصة البصرية لعلامتك.',
    'srv.mk3.t': 'إنتاج المحتوى',              'srv.mk3.d': 'إنتاج الفيديو الاحترافي، التصوير، وكتابة النصوص الإعلانية.',
    'srv.mk4.t': 'إدارة السوشيال ميديا',       'srv.mk4.d': 'إدارة كاملة، خطط المحتوى، والتفاعل المستمر مع المتابعين.',
    'srv.mk5.t': 'التسويق الأدائي والإعلانات',  'srv.mk5.d': 'إعلانات موجهة عبر ميتا وجوجل وتيك توك تستهدف أعلى ROI.',
    'srv.mk6.t': 'تحسين محركات البحث (SEO)',   'srv.mk6.d': 'زيادة الزيارات المجانية عبر استراتيجيات الكلمات المفتاحية.',

    'srv.at1.t': 'أتمتة سير العمل',            'srv.at1.d': 'تبسيط المهام الداخلية وإلغاء الإدخال اليدوي المكرر.',
    'srv.at2.t': 'أنظمة الذكاء الاصطناعي',     'srv.at2.d': 'بوتات ذكية، توجيه تلقائي، ورؤى تحليلية متقدمة.',
    'srv.at3.t': 'تكاملات الأنظمة (APIs)',      'srv.at3.d': 'ربط سلس وتكامل كامل بين أنظمة منظومتك البرمجية.',
    'srv.at4.t': 'أتمتة الواتساب',             'srv.at4.d': 'إرسال رسائل تلقائية وتحديثات الطلبات للعملاء عبر الواتساب.',
    'srv.at5.t': 'ربط بوابات الدفع',           'srv.at5.d': 'معالجة دفع إلكتروني آمنة ودعم قنوات السداد المحلية.',
    'srv.at6.t': 'أتمتة التقارير',             'srv.at6.d': 'تقارير دورية تلقائية ترسل مباشرة إلى الإدارة.',

    /* --- Featured Products --- */
    'prod.label':           'منتجاتنا المميزة',
    'prod.title':           'حلولنا الرائدة',
    'prod.desc':            'برمجيات متخصصة تشغّل بالفعل شركات في مصر والمنطقة.',
    'prod.ret.title':       'تشغيل ريتيل',
    'prod.ret.badge':       'نقاط بيع التجزئة',
    'prod.ret.desc':        'حل متكامل لنقاط البيع وإدارة المخزون للمتاجر والملابس والمحلات متعددة الفروع.',
    'prod.ret.f1':          'إدارة متعددة الفروع',
    'prod.ret.f2':          'يعمل أونلاين وأوفلاين',
    'prod.ret.f3':          'تقارير بمستوى ERP',
    'prod.ret.f4':          'واجهة عربية وإنجليزية',
    'prod.rest.title':      'تشغيل مطاعم',
    'prod.rest.badge':      'نقاط بيع المطاعم',
    'prod.rest.desc':       'منصة إدارة مطاعم شاملة تغطي نقاط البيع والطاولات وشاشة المطبخ والدليفري وحساب تكاليف الوصفات.',
    'prod.rest.f1':         'شاشة المطبخ (KDS)',
    'prod.rest.f2':         'إدارة الطاولات والدليفري',
    'prod.rest.f3':         'حساب تكلفة الوصفات وتتبع الهدر',
    'prod.rest.f4':         'أسعار متعددة القنوات',
    'prod.srv.title':       'تشغيل خدمات',
    'prod.srv.badge':       'ERP مراكز الخدمة',
    'prod.srv.desc':        'مصمم لمراكز الصيانة والورش وشركات الخدمات. إدارة الزيارات والفنيين وقطع الغيار والفواتير.',
    'prod.srv.f1':          'ملفات العملاء والمركبات',
    'prod.srv.f2':          'تتبع أداء الفنيين',
    'prod.srv.f3':          'إدارة الموردين وقطع الغيار',
    'prod.srv.f4':          'جدولة المواعيد',
    'prod.erp.title':       'ERP مخصص',
    'prod.erp.badge':       'برمجيات المؤسسات',
    'prod.erp.desc':        'أنظمة تخطيط موارد المؤسسات مبنية بالكامل حول عمليات ومتطلبات قطاعك الفريدة.',
    'prod.erp.f1':          'بنية معيارية قابلة للتوسع',
    'prod.erp.f2':          'سحابي ومحلي',
    'prod.erp.f3':          'سير عمل ولوحات تحكم مخصصة',
    'prod.erp.f4':          'API-first جاهز للتكامل',

    /* --- Tashgheel Retail --- */
    'ret.label':            'تشغيل ريتيل',
    'ret.title':            'منصة إدارة وتجزئة متكاملة',
    'ret.subtitle':         'نظام نقاط بيع وإدارة مخزون احترافي مصمم للتجزئة الحديثة—يجمع بين سهولة الاستخدام وتقارير بمستوى المؤسسات.',
    'ret.cta1':             'اطلب عرضًا تجريبيًا',
    'ret.cta2':             'استعرض الميزات',
    'ret.ov.title':         'منظومة واحدة لكل عمليات التجزئة',
    'ret.ov.desc':          'من كاونتر المبيعات إلى الإدارة الخلفية—تشغيل ريتيل يغطي كافة جوانب عملك.',
    'ret.feat.title':       'الميزات الرئيسية',
    'ret.f1.t':             'إدارة المستخدمين والصلاحيات',
    'ret.f1.d':             'مستخدمين غير محدودين مع التحكم الصارم في الصلاحيات لكل دور.',
    'ret.f2.t':             'فواتير قابلة للتخصيص',
    'ret.f2.d':             'إضافة اللوجو، العنوان، اللغة، والتذييل ورسائل العروض بكل سهولة.',
    'ret.f3.t':             'إدارة المخزون المتقدمة',
    'ret.f3.d':             'تتبع أسعار الشراء والبيع، الجرد الدوري، وتنبيهات نواقص المخزون.',
    'ret.f4.t':             'تتبع المصروفات',
    'ret.f4.d':             'تسجيل المصروفات اليومية وربطها بالموظفين والتقارير المالية.',
    'ret.f5.t':             'تاركت المبيعات',
    'ret.f5.d':             'تحديد أهداف المبيعات الشهرية لكل بائع وتتبع الإنجاز فورياً.',
    'ret.f6.t':             'نسخ احتياطي آمن',
    'ret.f6.d':             'نسخ احتياطي مشفر بضغطة زر دون الحاجة لخبرة تقنية.',
    'ret.rep.title':        'تقارير احترافية شمولية',
    'ret.rep.l1':           'إجمالي المبيعات — كاش، فيزا، محفظة إلكترونية',
    'ret.rep.l2':           'تحليل تكلفة البضاعة وصافي الأرباح',
    'ret.rep.l3':           'المبيعات حسب الموظف، المنتجات، أو الأقسام',
    'ret.rep.l4':           'تقييم المخزون وتتبع المرتجعات',
    'ret.dep.title':        'خيارات التشغيل',
    'ret.online.t':         'سحابي — تطبيق ويب',
    'ret.online.d':         'مثالي لإدارة الفروع المتعددة والمتابعة عن بُعد مع مزامنة فورية.',
    'ret.offline.t':        'أوفلاين — تطبيق سطح المكتب',
    'ret.offline.d':        'استقرار كامل بدون إنترنت. حفظ البيانات محلياً على جهازك.',

    /* --- Tashgheel Restaurants --- */
    'rst.label': 'تشغيل F&B',
    'rst.title': 'تشغيل F&B: نظام نقاط بيع وإدارة المطاعم في مصر',
    'rst.subtitle':         'منصة إدارة مطاعم شاملة تغطي نقاط البيع، شاشة المطبخ، إدارة الطاولات، الدليفري، وحساب تكاليف الوصفات.',
    'rst.f1.t':             'إدارة المواد الخام',
    'rst.f1.d':             'إضافة المكونات، ربط الموردين، وتتبع مواعيد السداد.',
    'rst.f2.t':             'حساب تكلفة المنيو',
    'rst.f2.d':             'حساب التكلفة الفعلية للوجبات وتتبع نسب الهدر والفاقد.',
    'rst.f3.t':             'تسعير مرن',
    'rst.f3.d':             'أسعار مختلفة للصالة، التيك أواي، والدليفري مع دعم الساعات السعيدة.',
    'rst.f4.t':             'نقاط البيع السريعة (POS)',
    'rst.f4.d':             'واجهة فائقة السرعة مع الخصومات وسداد متعدد وفصل الفواتير.',
    'rst.f5.t':             'إدارة الطاولات',
    'rst.f5.d':             'خريطة تفاعلية للصالة، دمج ونقل وإغلاق الطاولات بمرونة.',
    'rst.f6.t':             'شاشة المطبخ (KDS)',
    'rst.f6.d':             'عرض الطلبات مباشرة للمطبخ مع تتبع حالات التحضير.',
    'rst.f7.t':             'إدارة فريق العمل',
    'rst.f7.d':             'أدوار محددة للويتر، الشيف، والكاشير مع تقارير الأداء.',
    'rst.f8.t':             'إدارة الدليفري',
    'rst.f8.d':             'قاعدة بيانات العملاء وعناوينهم لتسريع الطلبات الهاتفية.',
    'rst.f9.t':             'المخزون والهدر',
    'rst.f9.d':             'خصم تلقائي للمكونات عند البيع مع تقارير دقيقة للهدر.',
    'rst.f10.t':            'طباعة موزعة',
    'rst.f10.d':            'توجيه طلبات المأكولات للمطبخ والمشروبات للبار تلقائياً.',
    'rst.f11.t':            'تحليلات المبيعات',
    'rst.f11.d':            'تحليل الإيرادات، قنوات البيع، وأداء الموظفين والموردين.',
    'rst.f12.t':            'نسخ احتياطي آمن',
    'rst.f12.d':            'حفظ واسترجاع البيانات بضغطة زر واحدة.',

    /* --- Tashgheel Services --- */
    'svc.label':            'تشغيل خدمات',
    'svc.title':            'شغّل مركز خدمتك بكفاءة فائقة',
    'svc.subtitle':         'نظام شامل لمراكز الصيانة وورش السيارات والخدمات—تتبع الزيارات، الفنيين، قطع الغيار، والفواتير.',
    'svc.f1.t':             'إدارة الزيارات وأوامر الشغل',
    'svc.f1.d':             'تسجيل وتتبع زيارات العملاء. البحث برقم اللوحة أو الشاسيه أو الاسم.',
    'svc.f2.t':             'ملفات العملاء والمركبات',
    'svc.f2.d':             'سجل كامل يشمل الموديل، رقم الشاسيه، عداد الكيلومترات، وسجل الصيانة.',
    'svc.f3.t':             'قطع الغيار والمخزون',
    'svc.f3.d':             'تتبع التكلفة وسعر البيع والربحية. ربط القطع مباشرة بأوامر الشغل.',
    'svc.f4.t':             'إدارة الموردين',
    'svc.f4.d':             'متابعة الديون والمدفوعات وسجل المعاملات لكل مورد.',
    'svc.f5.t':             'إدارة المصنعيات والخدمات',
    'svc.f5.d':             'إضافة المصنعيات ودمجها مع قطع الغيار في فاتورة واحدة.',
    'svc.f6.t':             'الفوترة الاحترافية',
    'svc.f6.d':             'فواتير تفصيلية قابلة للطباعة مع دعم الخصومات والتفاصيل.',
    'svc.f7.t':             'جدولة المواعيد',
    'svc.f7.d':             'تنظيم المواعيد وتنبيهات الصيانة القادمة على الفاتورة.',
    'svc.f8.t':             'تتبع أداء الفنيين',
    'svc.f8.d':             'توزيع الأعمال على الفنيين ومتابعة إنتاجية كل فني.',
    'svc.f9.t':             'تتبع المصروفات التشغيلية',
    'svc.f9.d':             'تسجيل المصاريف اليومية وتحديد صافي الأرباح.',
    'svc.f10.t':            'التقارير والتحليلات',
    'svc.f10.d':            'تقارير الإيرادات، أكثر الخدمات طلباً، وأداء الفنيين.',
    'svc.f11.t':            'حماية ونسخ احتياطي',
    'svc.f11.d':            'حماية بياناتك واسترجاعها بسهولة في أي وقت.',

    /* --- Shared Product Strings --- */
    'prod.dep.title':       'خيارات التشغيل',
    'prod.online.t':        'سحابي — تطبيق ويب',
    'prod.online.d':        'مثالي لإدارة الفروع المترابطة والوصول عن بُعد مع مزامنة سحابية.',
    'prod.offline.t':       'أوفلاين — تطبيق سطح المكتب',
    'prod.offline.d':       'تشغيل محلي استقرار تام وبدون الحاجة لاتصال بالإنترنت.',
    'prod.cta.demo':        'اطلب عرضًا تجريبيًا مجانيًا',

    /* --- Industries --- */
    'ind.label':            'القطاعات التي نخدمها',
    'ind.title':            'مصمم لقطاعك',
    'ind.desc':             'حلولنا مكيّفة للتحديات الفريدة لكل قطاع—لا قوالب جاهزة.',
    'ind.retail':           'التجزئة',
    'ind.rest':             'المطاعم',
    'ind.health':           'الرعاية الصحية',
    'ind.edu':              'التعليم',
    'ind.mfg':              'التصنيع',
    'ind.dist':             'التوزيع',
    'ind.log':              'اللوجستيات',
    'ind.whole':            'الجملة',
    'ind.pro':              'الخدمات المهنية',
    'ind.gov':              'الحكومة',

    /* --- Why ITQAN --- */
    'why.label':            'لماذا إتقان',
    'why.title':            'الفرق يكمن في التفاصيل',
    'why.desc':             'لسنا شركة برمجيات عادية. نحن شريك تكنولوجي استراتيجي ملتزم بنموك على المدى البعيد.',
    'why.b1.t':             'حلول مخصصة بالكامل',
    'why.b1.d':             'كل نظام نبنيه مصمم خصيصًا لعمليات عملك—لا قوالب جاهزة.',
    'why.b2.t':             'أونلاين وأوفلاين',
    'why.b2.d':             'برمجياتنا تعمل مع الإنترنت وبدونه. استمرارية أعمالك مضمونة دائمًا.',
    'why.b3.t':             'دعم متعدد الفروع',
    'why.b3.d':             'إدارة فروع غير محدودة من لوحة تحكم واحدة مع مزامنة فورية.',
    'why.b4.t':             'بنية سحابية أولاً',
    'why.b4.d':             'بنية تحتية سحابية آمنة وقابلة للتوسع بموثوقية مستوى المؤسسات.',
    'why.b5.t':             'عربي وإنجليزي',
    'why.b5.d':             'دعم كامل للغتين مع RTL/LTR في جميع أنظمتنا وواجهاتنا.',
    'why.b6.t':             'أمان المؤسسات',
    'why.b6.d':             'صلاحيات قائمة على الأدوار، تشفير البيانات، نسخ احتياطية آمنة.',
    'why.b7.t':             'أنظمة قابلة للتوسع',
    'why.b7.d':             'بنيتنا تنمو مع عملك—من فرع واحد إلى عملية على مستوى وطني.',
    'why.b8.t':             'دعم مستمر',
    'why.b8.d':             'دعم تقني ثنائي اللغة، تدريب، وشراكة طويلة الأمد بعد كل إطلاق.',

    /* --- Process --- */
    'proc.label':           'كيف نعمل',
    'proc.title':           'منهجيتنا المثبتة',
    'proc.desc':            'منهجية منظمة تضمن الجودة والسرعة والنتائج في كل مشروع.',
    'proc.tab.dev':         'عملية التطوير',
    'proc.tab.mkt':         'عملية التسويق',
    'proc.d1':              'الاستكشاف',    'proc.d1d': 'فهم عملك وأهدافك ومتطلباتك التقنية.',
    'proc.d2':              'التحليل',      'proc.d2d': 'دراسة معمقة لسير العمل وتدفقات البيانات والبنية التقنية.',
    'proc.d3':              'التصميم',      'proc.d3d': 'إطارات wireframes ونماذج أولية ومنظومة تصميم.',
    'proc.d4':              'التطوير',      'proc.d4d': 'سبرينتات مرنة تسلّم ميزات قابلة للاستخدام كل أسبوعين.',
    'proc.d5':              'الاختبار',     'proc.d5d': 'اختبارات جودة وأداء وقبول المستخدم.',
    'proc.d6':              'الإطلاق',      'proc.d6d': 'إطلاق سلس مع إعداد بنية تحتية دون توقف.',
    'proc.d7':              'التدريب',      'proc.d7d': 'تدريب شامل للفريق وتوثيق متكامل.',
    'proc.d8':              'الدعم',        'proc.d8d': 'صيانة مستمرة، تحديثات، وشراكة تقنية دائمة.',
    'proc.m1':              'البحث',        'proc.m1d': 'أبحاث السوق وتحليل المنافسين وتحديد الجمهور.',
    'proc.m2':              'الاستراتيجية', 'proc.m2d': 'خطة الوصول للسوق وتموضع العلامة وخارطة الحملات.',
    'proc.m3':              'التخطيط',      'proc.m3d': 'تقويم المحتوى والـ Creative Briefs واختيار القنوات.',
    'proc.m4':              'الإنتاج',      'proc.m4d': 'تصميم وكتابة ومقاطع فيديو وتطوير الأصول الإبداعية.',
    'proc.m5':              'الإطلاق',      'proc.m5d': 'تفعيل الحملة عبر جميع القنوات المختارة.',
    'proc.m6':              'التحسين',      'proc.m6d': 'مراقبة الأداء الفوري واختبارات A/B.',
    'proc.m7':              'التقارير',     'proc.m7d': 'لوحات KPI شهرية وتقارير تحليل العائد على الاستثمار.',

    /* --- Case Studies --- */
    'cs.label':             'دراسات الحالة',
    'cs.title':             'نتائج حقيقية. شركات حقيقية.',
    'cs.desc':              'كيف نساعد المنظمات على تحويل عملياتها وتسريع نموها من خلال التكنولوجيا.',
    'cs.c1.title':          'ERP تجزئة متعدد الفروع',
    'cs.c1.ind':            'تجزئة',
    'cs.c1.challenge':      'سلسلة تجزئة متنامية عانت من تتبع مخزون يدوي عبر 5 فروع مما تسبب في تناقضات وخسارة مبيعات.',
    'cs.c1.solution':       'بنينا نقطة بيع أوفلاين أولاً مدمجة مع لوحة ERP مركزية ومزامنة مخزون فورية وتنبيهات إعادة طلب تلقائية.',
    'cs.c1.tech':           'Electron · SQL Server · REST API · Power BI',
    'cs.c1.metric1':        '40%',         'cs.c1.label1': 'تسريع العمليات',
    'cs.c1.metric2':        '5 فروع',      'cs.c1.label2': 'متزامنة',
    'cs.c2.title':          'تحول رقمي لسلسلة مطاعم',
    'cs.c2.ind':            'مطاعم',
    'cs.c2.challenge':      'مجموعة مطاعم بـ 3 فروع احتاجت لتقليل وقت الخروج وتتبع تكاليف الطعام وتوحيد العمليات.',
    'cs.c2.solution':       'نشرنا تشغيل مطاعم مع KDS وإدارة الطاولات وحساب تكاليف الوصفات ولوحة إدارة مركزية.',
    'cs.c2.tech':           'Tashgheel POS · KDS · Cloud Dashboard',
    'cs.c2.metric1':        '60%',         'cs.c2.label1': 'أسرع عند الدفع',
    'cs.c2.metric2':        '3 فروع',      'cs.c2.label2': 'نظام موحد',
    'cs.c3.title':          'حملة تسويق رقمي',
    'cs.c3.ind':            'تسويق',
    'cs.c3.challenge':      'شركة خدمات B2B لديها عروض قوية لكنها تعاني من ضعف الحضور الرقمي وتوليد العملاء المحتملين.',
    'cs.c3.solution':       'قدمنا هوية بصرية كاملة وموقعًا مؤسسيًا واستراتيجية SEO وحملة Meta Ads لمدة 3 أشهر.',
    'cs.c3.tech':           'Meta Ads · Google Ads · SEO · Brand Design',
    'cs.c3.metric1':        '220%',        'cs.c3.label1': 'زيادة الزوار',
    'cs.c3.metric2':        '4×',          'cs.c3.label2': 'زيادة العملاء',

    'cs.c4.ind':            'الرعاية الصحية',
    'cs.c4.title':          'نظام HRMS لمؤسسة رعاية صحية متعددة الأقسام',
    'cs.c4.challenge':      'مركز طبي يضم 200 موظف عانى من التتبع اليدوي للحضور والمرتبات وإدارات الإجازات بين الأقسام.',
    'cs.c4.solution':       'نشر نظام HRMS مخصص يغطي تتبع الحضور، الحساب الآلي للمرتبات، إدارة الإجازات، وتقييمات الأداء.',
    'cs.c4.metric1':        '85%',         'cs.c4.label1': 'خفض في المهام اليدوية',
    'cs.c4.metric2':        '200',         'cs.c4.label2': 'موظف تم انضمامهم في أسبوعين',

    'cs.c5.ind':            'التجزئة والجملة',
    'cs.c5.title':          'منصة تجارة إلكترونية مخصصة متكاملة مع الـ ERP',
    'cs.c5.challenge':      'علامة تجارية للجملة أرادت البيع المباشر للمستهلك عبر الإنترنت مع مزامنة المخزون المباشرة من الـ ERP.',
    'cs.c5.solution':       'بناء متجر إلكتروني عالي الأداء مع مزامنة المخزون المباشرة، إدارة الكتالوج، وبوابات دفع متكاملة.',
    'cs.c5.metric1':        '3 أضعاف',     'cs.c5.label1': 'نمو المبيعات أونلاين',
    'cs.c5.metric2':        'فوري',        'cs.c5.label2': 'مزامنة المخزون عبر القنوات',

    /* --- Testimonials --- */
    'test.label':           'آراء العملاء',
    'test.title':           'ماذا يقول عملاؤنا',
    'test.t1.text':         'سلّمت إتقان نظام POS غيّر طريقة إدارتنا لـ 4 فروع كليًا. قدرة العمل أوفلاين كانت حيوية لاستمرارية أعمالنا.',
    'test.t1.name':         'أحمد م.',
    'test.t1.role':         'مالك سلسلة تجزئة، القاهرة',
    'test.t2.text':         'بنى فريق التسويق علامتنا التجارية من الصفر وأدار حملاتنا الرقمية. خلال 3 أشهر، تضاعفت عملاؤنا المحتملون 4 مرات.',
    'test.t2.name':         'سارة ك.',
    'test.t2.role':         'الرئيس التنفيذي، شركة خدمات مهنية',
    'test.t3.text':         'الـ ERP المخصص الذي بنوه لشركة التوزيع وفّر علينا مئات الساعات شهريًا. الدعم ثنائي اللغة جعل التبني سلسًا للفريق بأكمله.',
    'test.t3.name':         'عمر ر.',
    'test.t3.role':         'مدير العمليات، شركة توزيع',

    /* --- Integrations --- */
    'int.label':            'التكاملات',
    'int.title':            'يتصل بكل منظومتك',
    'int.desc':             'أنظمتنا تتكامل بشكل أصيل مع الأدوات والمنصات التي تستخدمها شركتك بالفعل.',

    /* --- Insights --- */
    'ins.label':            'المقالات',
    'ins.title':            'معرفة تدفع النمو',
    'ins.desc':             'رؤى متخصصة في التحول الرقمي وهندسة البرمجيات واستراتيجيات نمو الأعمال.',
    'ins.readmore':         'اقرأ المقال ←',
    'ins.p1.cat':           'التحول الرقمي',
    'ins.p1.title':         'لماذا تستثمر الشركات المتوسطة في ERP مخصص في 2025؟',
    'ins.p1.desc':          'البرمجيات الجاهزة لم تعد تلائم الاحتياجات التشغيلية المعقدة. إليك لماذا أصبح الـ ERP المخصص ميزة تنافسية.',
    'ins.p2.cat':           'استراتيجية التسويق',
    'ins.p2.title':         'دليل التسويق الأدائي لنمو B2B في منطقة الشرق الأوسط',
    'ins.p2.desc':          'إطار عمل قائم على البيانات لتوليد عملاء محتملين مؤهلين وتحويل الميزانية إلى فرص تجارية قابلة للقياس.',
    'ins.p3.cat':           'أتمتة الأعمال',
    'ins.p3.title':         'كيف تعيد الأتمتة المدعومة بالذكاء الاصطناعي تشكيل العمليات التجارية',
    'ins.p3.desc':          'من معالجة المستندات إلى التقارير الذكية—اكتشف كيف تستخدم الشركات الأتمتة لخفض التكاليف وتسريع القرارات.',

    /* --- CTA --- */
    'cta.title':            'مستعد لتحويل أعمالك رقميًا؟',
    'cta.desc':             'دعنا نبني تكنولوجيا تعمل بالطريقة التي تعمل بها. اطلب استشارة ونصمم خارطة طريق مخصصة لأهدافك.',
    'cta.btn1':             'اطلب استشارة',
    'cta.btn2':             'استعرض أعمالنا',

    /* --- Footer --- */
    'footer.tagline':       'تكنولوجيا تُشغّل أعمالك. تسويق يُنمّيها.',
    'footer.col.solutions': 'الحلول',
    'footer.col.products':  'المنتجات',
    'footer.col.company':   'الشركة',
    'footer.follow':        'تابعنا',
    'footer.copy':          '© {year} إتقان سوليوشنز. جميع الحقوق محفوظة.',

    /* --- About --- */
    'about.label':          'عن إتقان سوليوشنز',
    'about.title':          'نهندس النمو.',
    'about.subtitle':       'شركة تحول رقمي وهندسة برمجيات تساعد الشركات في مصر ومنطقة الشرق الأوسط على العمل بذكاء أكبر والنمو بسرعة أعلى.',
    'about.desc':           'في إتقان سوليوشنز، نؤمن بأن التكنولوجيا يجب أن تخدم عملك—لا العكس. منذ 2020، ندمج هندسة البرمجيات والابتكار الرقمي والتسويق الاستراتيجي في منظومة واحدة متكاملة تساعد المنظمات في كل مرحلة من مسيرة نموها.',
    'about.mission.t':      'مهمتنا',
    'about.mission.d':      'تمكين الشركات بتكنولوجيا عملية وموثوقة وذكية تبسط التعقيد وتزيد الكفاءة وتدفع النمو المستدام.',
    'about.vision.t':       'رؤيتنا',
    'about.vision.d':       'أن نكون الشريك الرائد للتحول الرقمي في منطقة الشرق الأوسط، معروفين بالتميز الهندسي والتأثير الإبداعي ونتائج الأعمال الحقيقية.',
    'about.v1.t':           'جودة الهندسة',
    'about.v1.d':           'بنية نظيفة، أنظمة قابلة للتوسع، وكود يصمد أمام اختبار الزمن.',
    'about.v2.t':           'سرعة التسليم',
    'about.v2.d':           'تنفيذ مرن بنتائج أعمال حقيقية، لا مجرد تسليمات.',
    'about.v3.t':           'عمق الشراكة',
    'about.v3.d':           'نبقى مع عملائنا بعد الإطلاق—تدريب، دعم، وتحسين مستمر.',
    'about.time.1.y':       '2020', 'about.time.1.t': 'التأسيس',              'about.time.1.d': 'تأسست إتقان برؤية واضحة: بناء برمجيات ذات معنى وعملية لشركات حقيقية.',
    'about.time.2.y':       '2021', 'about.time.2.t': 'أول ERP مؤسسي',        'about.time.2.d': 'سلّمنا أول ERP مخصص لشركة توزيع متعددة الفروع مما أثبت قدراتنا الهندسية.',
    'about.time.3.y':       '2022', 'about.time.3.t': 'إطلاق تشغيل',         'about.time.3.d': 'إطلاق منصة تشغيل للتجزئة والمطاعم ومراكز الخدمة في مصر.',
    'about.time.4.y':       '2023', 'about.time.4.t': 'قسم الرقمي والتسويق', 'about.time.4.d': 'توسعنا في الحلول الرقمية الكاملة والتسويق الأدائي لنصبح شريكًا متكاملًا.',
    'about.time.5.y':       '2024', 'about.time.5.t': 'التوسع الإقليمي',     'about.time.5.d': 'امتد نطاقنا لأسواق الخليج بحلول سحابية وتطبيقات عن بعد.',
    'about.time.6.y':       '2025–26', 'about.time.6.t': 'عصر الذكاء الاصطناعي', 'about.time.6.d': 'دمج أتمتة مدعومة بالذكاء الاصطناعي وتحليلات ذكية وسير عمل الجيل التالي.',
    'about.tech.t':         'التقنيات المستخدمة',
    'about.tech.d':         'نبني بأفضل الأدوات الحديثة، منظمة في طبقات قدرات.',
    'about.process.t':      'مراحل العمل',

    /* --- Contact --- */
    'contact.label':        'تواصل معنا',
    'contact.title':        'دعنا نبني شيئًا رائعًا',
    'contact.desc':         'أخبرنا عن مشروعك وأهدافك. نرد في غضون 24 ساعة بخطوة واضحة تالية.',
    'contact.info.title':   'معلومات التواصل',
    'contact.email':        'info@itqansolutions.org',
    'contact.phone1':       '+20 112 652 2373',
    'contact.phone2':       '+20 115 525 3886',
    'contact.phone3':       '+20 114 270 3439',
    'contact.form.title':   'أرسل لنا رسالة',
    'contact.name':         'الاسم الكامل',
    'contact.email.f':      'البريد الإلكتروني',
    'contact.phone.f':      'رقم الهاتف',
    'contact.company':      'اسم الشركة',
    'contact.service':      'الخدمة المطلوبة',
    'contact.service.sw':   'هندسة البرمجيات',
    'contact.service.dig':  'الحلول الرقمية',
    'contact.service.mkt':  'التسويق والإبداع',
    'contact.service.aut':  'أتمتة الأعمال',
    'contact.service.oth':  'أخرى / غير متأكد',
    'contact.message':      'أخبرنا عن مشروعك',
    'contact.send':         'إرسال الرسالة',
    'contact.sending':      'جارٍ الإرسال…',
    'contact.success':      '✓ تم الإرسال! سنتواصل معك خلال 24 ساعة.',
    'contact.error':        'حدث خطأ. يرجى مراسلتنا مباشرة على البريد الإلكتروني.',

    /* --- Blog --- */
    'blog.label':           'مقالات إتقان',
    'blog.title':           'المعرفة تدفع النمو',
    'blog.subtitle':        'رؤى متخصصة في التحول الرقمي والـ ERP والتسويق والأتمتة ونمو الأعمال من فريق إتقان.',
    'blog.all':             'كل الموضوعات',
    'blog.cat.dt':          'التحول الرقمي',
    'blog.cat.erp':         'ERP والأنظمة',
    'blog.cat.mkt':         'التسويق',
    'blog.cat.ai':          'الذكاء الاصطناعي',
    'blog.cat.web':         'ويب وموبايل',
    'blog.cat.biz':         'نمو الأعمال',

    /* --- Portfolio --- */
    'port.label':           'دراسات الحالة',
    'port.title':           'حلول حقيقية. نتائج قابلة للقياس.',
    'port.desc':            'مجموعة مختارة من المشاريع التي ساعدت فيها إتقان الشركات على تحويل عملياتها.',

    /* --- Footer links --- */
    'footer.sw':            'هندسة البرمجيات',
    'footer.dig':           'الحلول الرقمية',
    'footer.mkt':           'التسويق والإبداع',
    'footer.aut':           'أتمتة الأعمال',
    'footer.ret':           'تشغيل ريتيل',
    'footer.rest': 'تشغيل F&B',
    'footer.srv':           'تشغيل خدمات',
    'footer.erp':           'ERP مخصص',
    'footer.about':         'من نحن',
    'footer.cases':         'دراسات الحالة',
    'footer.insights':      'المقالات',
    'footer.contact':       'اتصل بنا',

    /* --- Phase 2: product pages --- */
    'nav.gcrm': 'تشغيل CRM العام',
    'footer.gcrm': 'تشغيل CRM العام',
    'gcrm.label': 'تشغيل CRM',
    'gcrm.title': 'نظام CRM وإدارة مبيعات للشركات في مصر',
    'gcrm.subtitle': 'تشغيل CRM يجمع العملاء والعملاء المحتملين والصفقات وعروض الأسعار والفواتير والمخزون وأهداف الفريق في نظام واحد بالعربية والإنجليزية، من تطوير إتقان سوليوشنز في القاهرة.',
    'gcrm.app': 'افتح تشغيل CRM',
    'gcrm.who.title': 'مصمم للشركات التي تعتمد على المبيعات',
    'gcrm.who.desc': 'النسخة العامة من تشغيل CRM للشركات التي تبيع لعملاء كثيرين وتريد المبيعات والمخزون والحسابات في مكان واحد.',
    'gcrm.who.l1': 'شركات التجارة والتوزيع والخدمات',
    'gcrm.who.l2': 'فرق المبيعات التي تحتاج متابعة وأهداف',
    'gcrm.who.l3': 'الشركات التي تعمل عروض أسعار وفواتير وتتابع المخزون',
    'gcrm.who.l4': 'الملاك الذين يريدون نظامًا واحدًا بدل الجداول المتفرقة',
    'gcrm.f1.t': 'العملاء والعملاء المحتملون',
    'gcrm.f1.d': 'احتفظ بكل عميل وعميل محتمل مع بيانات التواصل والتاريخ والمسؤول عنه.',
    'gcrm.f2.t': 'الصفقات وخط المبيعات',
    'gcrm.f2.d': 'حرّك الصفقات عبر مراحل خط المبيعات وشاهد المفتوح والمكسوب والخاسر.',
    'gcrm.f3.t': 'المهام والمتابعات',
    'gcrm.f3.d': 'وزّع المهام على الفريق حتى لا يضيع أي عميل.',
    'gcrm.f4.t': 'عروض الأسعار وأوامر البيع',
    'gcrm.f4.d': 'جهّز عروض الأسعار وحوّلها إلى أوامر بيع وأصدر الفاتورة للعميل.',
    'gcrm.f5.t': 'الفرق والأهداف',
    'gcrm.f5.d': 'نظّم فرق المبيعات وحدد الأهداف وتابع الأداء.',
    'gcrm.f6.t': 'نماذج ميتا وواتساب',
    'gcrm.f6.d': 'استقبل العملاء من نماذج فيسبوك وإنستجرام وراسلهم على واتساب. واتساب يحتاج حساب ميتا للأعمال موثقًا.',
    'gcrm.f7.t': 'الحملات التسويقية',
    'gcrm.f7.d': 'نفّذ حملاتك التسويقية من نفس بيانات العملاء.',
    'gcrm.f8.t': 'المخزون والمشتريات',
    'gcrm.f8.d': 'أدر الأصناف والمخازن والموردين والمشتريات.',
    'gcrm.f9.t': 'الصلاحيات وسجل المراجعة',
    'gcrm.f9.d': 'امنح كل مستخدم الصلاحيات التي يحتاجها واحتفظ بسجل لكل تغيير.',
    'gcrm.more.title': 'المالية والموارد البشرية في نفس النظام',
    'gcrm.more.desc': 'موديولات الإدارة الخلفية تستخدم نفس بيانات المبيعات، فتتطابق الأرقام بين الفرق.',
    'gcrm.more.l1': 'الفواتير والإيصالات والمصروفات',
    'gcrm.more.l2': 'الخزينة والبنوك وكشوف حساب العملاء',
    'gcrm.more.l3': 'الموارد البشرية والحضور والمرتبات',
    'gcrm.more.l4': 'ربط الفاتورة الإلكترونية (مصلحة الضرائب المصرية)',
    'gcrm.q1': 'ما هو تشغيل CRM؟',
    'gcrm.a1': 'تشغيل CRM نظام سحابي لإدارة العملاء والأعمال من إتقان سوليوشنز في القاهرة. النسخة العامة تغطي المبيعات والمالية والمخزون والمشتريات والموارد البشرية، وهناك نسخة عقارية منفصلة للمطورين والسماسرة.',
    'gcrm.q2': 'هل هو متاح بالعربية؟',
    'gcrm.a2': 'نعم. الواجهة تعمل بالعربية والإنجليزية.',
    'gcrm.q3': 'ما الفرق بين النسخة العامة والنسخة العقارية؟',
    'gcrm.a3': 'النسخة العقارية تضيف المشروعات والوحدات والحجوزات والعقود والأقساط والعمولات. أما العامة فهي للشركات التي تبيع منتجات أو خدمات للعملاء.',
    'gcrm.q4': 'هل يصدر عروض أسعار وفواتير؟',
    'gcrm.a4': 'نعم. تجهز عروض الأسعار وتحولها إلى أوامر بيع وتصدر الفواتير والإيصالات.',
    'gcrm.q5': 'هل يدعم الفاتورة الإلكترونية المصرية؟',
    'gcrm.a5': 'يتضمن تشغيل CRM إعدادات ربط الفاتورة الإلكترونية مع مصلحة الضرائب المصرية. اسألنا عن مناسبته لتسجيلك الضريبي عند طلب العرض التجريبي.',
    'gcrm.q6': 'هل أستطيع ربط فيسبوك وإنستجرام وواتساب؟',
    'gcrm.a6': 'يرتبط تشغيل CRM بنماذج ميتا وواتساب. واتساب يحتاج حساب ميتا للأعمال موثقًا، ونساعدك في إعداده.',
    'gcrm.q7': 'هل أحتاج إلى تثبيت أي برنامج؟',
    'gcrm.a7': 'لا. هو تطبيق ويب، يدخل عليه فريقك من أي متصفح.',
    'gcrm.q8': 'كم تكلفة النظام؟',
    'gcrm.a8': 'الأسعار حسب حجم الفريق والموديولات. اطلب عرضًا تجريبيًا أو عرض سعر وسنرد عليك بعرض واضح.',
    'nav.crm': 'تشغيل CRM العقاري',
    'nav.cln': 'تشغيل كلينكس',
    'footer.crm': 'تشغيل CRM العقاري',
    'footer.cln': 'تشغيل كلينكس',
    'pp.who': 'لمن هذا النظام',
    'pp.feat': 'الميزات الرئيسية',
    'pp.faq': 'الأسئلة الشائعة',
    'pp.demo': 'اطلب عرضًا تجريبيًا',
    'pp.quote': 'اطلب عرض سعر',
    'pp.features': 'استعرض الميزات',
    'tut.title': 'شروحات فيديو',
    'tut.desc': 'شرح خطوة بخطوة على قناتنا على يوتيوب',
    'tut.btn': 'شاهد قائمة الشروحات →',
    'pp.note': 'الأسعار حسب احتياجك، اطلب عرضًا تجريبيًا أو عرض سعر وسنرد عليك.',
    'crm.label': 'تشغيل CRM',
    'crm.title': 'نظام CRM عقاري للمطورين والسماسرة في مصر',
    'crm.subtitle': 'تشغيل CRM يتابع كل عميل محتمل ووحدة وحجز وقسط وعمولة في نظام واحد بالعربية والإنجليزية، من تطوير إتقان سوليوشنز في القاهرة.',
    'crm.app': 'افتح تشغيل CRM',
    'shot.title': 'شاهد النظام أثناء العمل',
    'shot.crm.cap': 'لوحة تحكم تشغيل CRM (الواجهة العربية، بيانات تجريبية): الوحدات المتاحة والمحجوزة والصفقات الجارية والمبالغ المحصلة.',
    'shot.gcrm.cap': 'لوحة تحكم تشغيل CRM العام (الواجهة العربية، بيانات تجريبية).',
    'shot.cl.cap': 'لوحة تحكم تشغيل كلينكس (الواجهة العربية، بيانات تجريبية): المرضى ومواعيد اليوم والإيراد، مع قوائم الأطباء والجداول والمخزون والحسابات والتقارير.',
    'prod.crm.title': 'تشغيل CRM العقاري',
    'prod.crm.desc': 'نظام CRM للمطورين والسماسرة العقاريين: العملاء المحتملون والوحدات والحجوزات والأقساط والعمولات في مكان واحد.',
    'prod.crm.f1': 'الوحدات والحجوزات والأقساط',
    'prod.crm.f2': 'العملاء المحتملون ومسار الصفقات',
    'prod.crm.f3': 'واجهة بالعربية والإنجليزية',
    'prod.crm.btn': 'اكتشف CRM العقاري →',
    'prod.gcrm.title': 'تشغيل CRM العام',
    'prod.gcrm.desc': 'العملاء والصفقات وعروض الأسعار والفواتير والمخزون وأهداف الفريق للشركات التي تبيع لعدد كبير من العملاء.',
    'prod.gcrm.f1': 'الصفقات وعروض الأسعار',
    'prod.gcrm.f2': 'الفواتير والمخزون',
    'prod.gcrm.f3': 'واجهة بالعربية والإنجليزية',
    'prod.gcrm.btn': 'اكتشف CRM العام →',
    'prod.clin.title': 'تشغيل كلينكس',
    'prod.clin.desc': 'المرضى والمواعيد وجداول الأطباء والمخزون والمدفوعات للعيادات ومراكز التجميل.',
    'prod.clin.f1': 'المواعيد وجداول الأطباء',
    'prod.clin.f2': 'المرضى والمخزون والحسابات',
    'prod.clin.f3': 'واجهة بالعربية والإنجليزية',
    'prod.clin.btn': 'اكتشف كلينكس →',
    'rst.ov.title': 'منظومة واحدة لكل عمليات المطاعم',
    'rst.ov.desc': 'من الصالة إلى المطبخ والمخزن، يغطي تشغيل F&B التشغيل اليومي للمطعم أو الكافيه.',
    'srv.ov.title': 'منظومة واحدة لكل عمليات مراكز الخدمة',
    'srv.ov.desc': 'من الاستقبال إلى الورشة ومخزن قطع الغيار، يغطي تشغيل الخدمات التشغيل اليومي لمركز الصيانة.',
    'prod.badge.ret': 'نقاط بيع التجزئة',
    'prod.badge.rest': 'نقاط بيع المطاعم',
    'prod.badge.srv': 'مراكز الخدمة',
    'prod.badge.crm': 'CRM عقاري',
    'prod.badge.gcrm': 'CRM عام',
    'prod.badge.clin': 'إدارة العيادات',
    'prod.badge.erp': 'نظام ERP للشركات',
    'prod.ret.btn': 'اكتشف تشغيل التجزئة →',
    'prod.rest.btn': 'اكتشف تشغيل المطاعم →',
    'prod.srv.btn': 'اكتشف تشغيل الخدمات →',
    'prod.erp.btn': 'اكتشف نظام ERP المخصص →',
    'rst.ov.b1': 'شاشة المطبخ',
    'rst.ov.b2': 'إدارة الطاولات',
    'rst.ov.b3': 'حساب تكلفة الوصفات',
    'rst.ov.b4': 'قنوات بيع متعددة',
    'about.time.title': 'رحلتنا',
    'contact.service.1': 'هندسة البرمجيات',
    'contact.service.2': 'الحلول الرقمية',
    'contact.service.3': 'التسويق والإبداع',
    'contact.service.4': 'أتمتة الأعمال',
    'contact.service.5': 'أخرى',
    'faq.q1': 'هل تبنون برمجيات مخصصة بالكامل من الصفر؟',
    'faq.a1': 'نعم. كل حل برمجي نسلمه مبني خصيصًا لعمليات شركتك وسير عملها ومتطلبات مجالك. لا نستخدم قوالب جاهزة.',
    'faq.q2': 'هل تعمل أنظمتكم بدون اتصال بالإنترنت؟',
    'faq.a2': 'نعم. حلول نقاط البيع وERP المكتبية مصممة لتعمل بدون إنترنت وتتزامن تلقائيًا عند عودة الاتصال.',
    'faq.q3': 'هل يمكنكم الربط مع أنظمتنا الحالية؟',
    'faq.a3': 'نعم. بنيتنا المعتمدة على واجهات API تتيح الربط مع أنظمة ERP وبرامج المحاسبة وبوابات الدفع وأنظمة CRM والمتاجر الإلكترونية وأغلب الأنظمة الأخرى.',
    'faq.q4': 'هل تدعمون تعدد الفروع؟',
    'faq.a4': 'نعم. كل حلولنا للشركات تدعم عددًا غير محدود من الفروع مع مزامنة البيانات لحظيًا وتقارير مركزية وصلاحيات على مستوى الفرع.',
    'faq.q5': 'هل تقدمون تدريبًا بعد التسليم؟',
    'faq.a5': 'كل مشروع يتضمن برنامج تدريب لجميع الأدوار، من المديرين إلى المشغلين اليوميين. كما نوفر أدلة استخدام وفيديوهات تعليمية.',
    'faq.q6': 'ما نوع الدعم المستمر الذي تقدمونه؟',
    'faq.a6': 'نقدم باقات دعم متدرجة تشمل إصلاح الأخطاء وتحديث المزايا ومتابعة الأداء، ومدير حساب مخصص لعملاء الشركات.',
    'faq.q7': 'هل تقدمون خدمات تسويق إلى جانب البرمجيات؟',
    'faq.a7': 'نعم. قسم التسويق والإبداع لدينا يقدم خدمات متكاملة: الهوية البصرية وإنتاج المحتوى وإدارة السوشيال ميديا وإعلانات ميتا وجوجل وتحسين محركات البحث والتحليلات.',
    'srv.why.1.title': 'تنفيذ متكامل',
    'srv.why.1.desc': 'من الاستراتيجية الأولى وتطوير البرمجيات إلى تنفيذ حملات التسويق كاملة.',
    'srv.why.2.title': 'خبرة في المجال',
    'srv.why.2.desc': 'سجل مثبت في التجزئة والمطاعم والرعاية الصحية والخدمات المهنية.',
    'srv.why.3.title': 'حلول قابلة للتوسع',
    'srv.why.3.desc': 'تقنية مصممة لتنمو مع شركتك دون قيود.',
    'rst.online.t': 'استضافة سحابية',
    'rst.online.d': 'تحكم مركزي في جميع فروعك.',
    'rst.offline.t': 'تشغيل محلي (سطح المكتب)',
    'rst.offline.d': 'إعداد مستقل ومستقر على شبكتك المحلية.',
    'shot.fb.cap': 'نقطة بيع تشغيل F&B (الواجهة العربية، بيانات تجريبية): قائمة الطعام حسب الأقسام، وأنواع الطلب صالة وتيك أواي وتوصيل، وأدوات الوردية.',
    'crm.who.title': 'مصمم لفرق المبيعات العقارية',
    'crm.who.desc': 'تشغيل CRM للشركات التي تبيع العقارات وتحتاج إلى رؤية الرحلة كاملة من أول استفسار حتى التسليم.',
    'crm.who.l1': 'المطورون العقاريون الذين يبيعون وحدات على الخريطة وجاهزة',
    'crm.who.l2': 'شركات السمسرة والتسويق العقاري ذات الفرق المتعددة',
    'crm.who.l3': 'مديرو المبيعات الذين يحتاجون إلى أهداف ومتابعة منضبطة',
    'crm.who.l4': 'أصحاب الشركات الذين يريدون نظامًا واحدًا للمبيعات والإدارة الخلفية',
    'crm.f1.t': 'العملاء المحتملون وخط المبيعات',
    'crm.f1.d': 'سجّل العملاء المحتملين ووزّعهم على المندوبين وحرّك كل صفقة عبر خط مبيعات مرئي مع المهام والمتابعات.',
    'crm.f2.t': 'نماذج العملاء من ميتا',
    'crm.f2.d': 'استقبل العملاء المحتملين من نماذج فيسبوك وإنستجرام مباشرة داخل النظام.',
    'crm.f3.t': 'ربط واتساب',
    'crm.f3.d': 'راسل العملاء على واتساب من ملف العميل. يحتاج حساب ميتا للأعمال موثقًا، ونساعدك في إعداده.',
    'crm.f4.t': 'المشروعات والمراحل والوحدات',
    'crm.f4.d': 'نظّم المطورين والمشروعات والمراحل والمباني والوحدات، وشاهد المتاح منها في أي وقت.',
    'crm.f5.t': 'الحجوزات والعقود',
    'crm.f5.d': 'احجز الوحدة وأصدر العقد واحتفظ بتاريخ الصفقة كاملًا في مكان واحد.',
    'crm.f6.t': 'جداول الأقساط والإيصالات',
    'crm.f6.d': 'أنشئ خطط التقسيط لكل عقد وسجّل كل إيصال مقابل الجدول.',
    'crm.f7.t': 'الفرق والأهداف والعمولات',
    'crm.f7.d': 'نظّم فرق المبيعات وحدد الأهداف واحسب العمولات.',
    'crm.f8.t': 'ربط بروبرتي فايندر',
    'crm.f8.d': 'استقبل استفسارات بروبرتي فايندر مباشرة داخل النظام.',
    'crm.f9.t': 'الصلاحيات وسجل المراجعة',
    'crm.f9.d': 'امنح كل مستخدم الصلاحيات التي يحتاجها واحتفظ بسجل لكل تغيير.',
    'crm.more.title': 'أكثر من أداة مبيعات',
    'crm.more.desc': 'يضم النظام موديولات الإدارة الخلفية، فتشترك المبيعات والحسابات والتشغيل في بيانات واحدة.',
    'crm.more.l1': 'عروض الأسعار وأوامر البيع والفواتير',
    'crm.more.l2': 'المخزون والمخازن والمشتريات',
    'crm.more.l3': 'المالية: الإيصالات والمصروفات والخزينة وكشوف الحساب',
    'crm.more.l4': 'الموارد البشرية والحضور والمرتبات وربط الفاتورة الإلكترونية (مصلحة الضرائب المصرية)',
    'crm.q1': 'ما هو تشغيل CRM؟',
    'crm.a1': 'تشغيل CRM نظام سحابي لإدارة العملاء والأعمال من إتقان سوليوشنز في القاهرة. فيه موديول عقاري للمطورين والسماسرة، إضافة إلى المبيعات والمالية والمخزون والمشتريات والموارد البشرية.',
    'crm.q2': 'هل تشغيل CRM متاح بالعربية؟',
    'crm.a2': 'نعم. الواجهة تعمل بالعربية والإنجليزية، ويستخدم فريقك اللغة التي يفضلها.',
    'crm.q3': 'هل يدير خطط التقسيط للوحدات؟',
    'crm.a3': 'نعم. تنشئ جدول أقساط لكل عقد وتسجل الإيصالات مقابله، فتعرف ما تم سداده وما هو مستحق.',
    'crm.q4': 'هل أستطيع استقبال العملاء من فيسبوك وإنستجرام وواتساب وبروبرتي فايندر؟',
    'crm.a4': 'يرتبط تشغيل CRM بنماذج ميتا وواتساب وبروبرتي فايندر. واتساب يحتاج حساب ميتا للأعمال موثقًا، ونساعدك في إعداد كل ربط.',
    'crm.q5': 'هل يدعم الفاتورة الإلكترونية المصرية؟',
    'crm.a5': 'يتضمن تشغيل CRM إعدادات ربط الفاتورة الإلكترونية مع مصلحة الضرائب المصرية. اسألنا عن مناسبته لتسجيلك الضريبي عند طلب العرض التجريبي.',
    'crm.q6': 'هل أحتاج إلى تثبيت أي برنامج؟',
    'crm.a6': 'لا. هو تطبيق ويب، يدخل عليه فريقك من أي متصفح على كمبيوتر المكتب أو الموبايل.',
    'crm.q7': 'هل يمكن أن تختلف صلاحيات السماسرة والمديرين؟',
    'crm.a7': 'نعم. لكل مستخدم دور، فيرى السمسار عملاءه فقط بينما يرى المدير الفرق والأهداف والتقارير. وتُسجل التغييرات في سجل مراجعة.',
    'crm.q8': 'كم تكلفة النظام؟',
    'crm.a8': 'الأسعار حسب حجم الفريق والموديولات. اطلب عرضًا تجريبيًا أو عرض سعر وسنرد عليك بعرض واضح.',
    'cln.label': 'تشغيل كلينكس',
    'cln.title': 'نظام إدارة العيادات ومراكز التجميل في مصر',
    'cln.subtitle': 'تشغيل كلينكس يدير المرضى والمواعيد وجداول الأطباء والجلسات والمخزون والمدفوعات في نظام واحد بواجهة عربية وإنجليزية.',
    'cln.app': 'افتح تشغيل كلينكس',
    'cln.who.title': 'مصمم للعيادات ومراكز التجميل',
    'cln.who.desc': 'يناسب تشغيل كلينكس الأماكن التي يعمل فيها عدة أطباء وتخصصات وجلسات علاجية كل يوم.',
    'cln.who.l1': 'العيادات متعددة الأطباء والمجمعات الطبية',
    'cln.who.l2': 'مراكز الجلدية والتجميل',
    'cln.who.l3': 'العيادات التي تتابع الجلسات العلاجية والمستهلكات',
    'cln.who.l4': 'الملاك الذين يريدون أرقام اليوم دون مطاردة الأوراق',
    'cln.f1.t': 'ملفات المرضى',
    'cln.f1.d': 'ملف واحد لكل مريض فيه البيانات الشخصية والتاريخ المرضي والمواعيد والصور.',
    'cln.f2.t': 'المواعيد والتقويم',
    'cln.f2.d': 'احجز وانقل وتابع المواعيد على تقويم يعرض كل طبيب وكل يوم.',
    'cln.f3.t': 'جداول الأطباء والتخصصات',
    'cln.f3.d': 'حدد أيام وساعات عمل كل طبيب ونظّم الأطباء حسب التخصص والخدمة.',
    'cln.f4.t': 'شاشة الكشف',
    'cln.f4.d': 'سجّل الملاحظات والخدمات المنفذة والروشتة أثناء الزيارة.',
    'cln.f5.t': 'خريطة الجسم',
    'cln.f5.d': 'حدد المناطق المعالجة على خريطة الجسم واحتفظ بالتاريخ لكل مريض.',
    'cln.f6.t': 'المخزون والمستهلكات',
    'cln.f6.d': 'تابع المنتجات والموردين والمشتريات، وسجّل ما استهلكته كل جلسة.',
    'cln.f7.t': 'المدفوعات والمالية',
    'cln.f7.d': 'حصّل المدفوعات من المرضى وسجّل المعاملات وتابع موقف الخزينة.',
    'cln.f8.t': 'صفحة حجز أونلاين',
    'cln.f8.d': 'اسمح للمرضى بطلب موعد من خلال صفحة حجز عامة.',
    'cln.f9.t': 'التقارير والصلاحيات',
    'cln.f9.d': 'راجع النشاط بالتقارير، وامنح الاستقبال والأطباء والمديرين صلاحيات منفصلة.',
    'cln.q1': 'ما هو تشغيل كلينكس؟',
    'cln.a1': 'تشغيل كلينكس نظام لإدارة العيادات من إتقان سوليوشنز في القاهرة. يغطي المرضى والمواعيد والأطباء والكشوفات والمخزون والمدفوعات والتقارير.',
    'cln.q2': 'لأي عيادات هو مناسب؟',
    'cln.a2': 'مصمم للعيادات التي بها طبيب أو أكثر، ولمراكز التجميل التي تقدم جلسات علاجية وتستهلك مستلزمات.',
    'cln.q3': 'هل له واجهة عربية؟',
    'cln.a3': 'نعم. يدعم العربية بتخطيط من اليمين إلى اليسار، كما يدعم الإنجليزية.',
    'cln.q4': 'هل يستطيع المرضى الحجز أونلاين؟',
    'cln.a4': 'نعم. توجد صفحة حجز عامة يطلب منها المريض موعدًا، ويصل الطلب إلى فريقك داخل النظام.',
    'cln.q5': 'هل يتابع المخزون المستخدم في كل جلسة؟',
    'cln.a5': 'نعم. يمكنك تسجيل المنتجات والموردين والمشتريات، وتسجيل ما استُخدم أثناء الكشف ليظل المخزون دقيقًا.',
    'cln.q6': 'هل يتعامل مع مدفوعات المرضى؟',
    'cln.a6': 'نعم. يحصّل الاستقبال المدفوعات مقابل الزيارة، ويرى المديرون المعاملات والموقف المالي في شاشات المالية والتقارير.',
    'cln.q7': 'هل بيانات المرضى محمية؟',
    'cln.a7': 'لكل عيادة مساحة حساب منفصلة، ولا يرى الموظفون إلا ما يسمح به دورهم. وتُسجل التغييرات في سجل مراجعة.',
    'cln.q8': 'كم تكلفة النظام؟',
    'cln.a8': 'الأسعار حسب حجم العيادة والموديولات. اطلب عرضًا تجريبيًا أو عرض سعر وسنرد عليك بعرض واضح.',
    'rst.app': 'افتح تشغيل F&B',
    'rst.who.title': 'مصمم لأعمال الأغذية والمشروبات',
    'rst.who.desc': 'تشغيل F&B يدير الصالة والمطبخ والمخزن من نظام واحد.',
    'rst.who.l1': 'مطاعم تقدم الصالة والتيك أواي والدليفري',
    'rst.who.l2': 'الكافيهات ومحلات الخدمة السريعة',
    'rst.who.l3': 'علامات الأغذية والمشروبات متعددة الفروع',
    'rst.who.l4': 'الملاك الذين يريدون تكلفة الطعام الفعلية وأرصدة الموردين',
    'rst.faq.q1': 'ما هو تشغيل F&B؟',
    'rst.faq.a1': 'تشغيل F&B نظام نقاط بيع وإدارة مطاعم من إتقان سوليوشنز في القاهرة. يغطي نقطة البيع والطاولات وشاشة المطبخ والدليفري والوصفات والمخزون والموردين والتقارير.',
    'rst.faq.q2': 'ما الأنشطة التي تستخدمه؟',
    'rst.faq.a2': 'المطاعم والكافيهات ومحلات الخدمة السريعة وعلامات الأغذية متعددة الفروع، بطلبات الصالة والتيك أواي والدليفري.',
    'rst.faq.q3': 'هل يستطيع العملاء الطلب من الطاولة بكود QR؟',
    'rst.faq.a3': 'نعم. يمكن للأدمن تشغيل الطلب بالـ QR أو إيقافه، ويوافق الويتر على كل طلب قبل أن يصل إلى المطبخ.',
    'rst.faq.q4': 'هل يحسب تكلفة الطعام؟',
    'rst.faq.a4': 'نعم. تحدد الوصفات والمكونات ويحسب النظام تكلفة كل صنف، ويُخصم المخزون عند إغلاق الفاتورة.',
    'rst.faq.q5': 'هل يدعم الفروع المتعددة وأدوار الموظفين؟',
    'rst.faq.a5': 'نعم. تدير عدة فروع، وتمنح الكاشير والويتر وطاقم المطبخ والمديرين صلاحيات مختلفة.',
    'rst.faq.q6': 'هل توجد واجهة عربية؟',
    'rst.faq.a6': 'نعم. يدعم النظام العربية والإنجليزية.',
    'rst.faq.q7': 'هل أستطيع تجربته قبل الشراء؟',
    'rst.faq.a7': 'نعم. سجّل حسابًا على تطبيق F&B وابدأ تجربة مجانية لمدة 3 أيام، أو اطلب عرضًا تجريبيًا وسيشرحه لك فريقنا.',
    'rst.faq.q8': 'كم تكلفة النظام؟',
    'rst.faq.a8': 'الأسعار حسب عدد الفروع والموديولات. اطلب عرضًا تجريبيًا أو عرض سعر وسنرد عليك بعرض واضح.',

  }
};

/* =========================
   Language System
   ========================= */
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
    const val = (k === 'footer.copy') ? dict[k].replace('{year}', year) : dict[k];
    el.textContent = val;
  });

  // Switch images (AR/EN)
  document.querySelectorAll('[data-img-en]').forEach(el => {
    const src = (lang === 'ar' && el.getAttribute('data-img-ar'))
      ? el.getAttribute('data-img-ar')
      : el.getAttribute('data-img-en');
    if (src) el.src = src;
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-ph]').forEach(el => {
    const k = el.getAttribute('data-ph');
    if (dict[k]) el.placeholder = dict[k];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = (location.pathname.indexOf('/ar/') === 0) ? 'ar' : 'en';
  applyLang(saved);
});

if (langBtn) {
  langBtn.addEventListener('click', () => {
    /* Language switch = go to the same page in the other language (/ar/ mirror). */
    const p = location.pathname;
    let target;
    if (p.indexOf('/ar/') === 0) {
      target = p.slice(3);
      if (target === '/index.html') target = '/';
      localStorage.setItem('lang', 'en');
    } else {
      target = (p === '/' || p === '/index.html') ? '/ar/' : '/ar' + (p.charAt(0) === '/' ? p : '/' + p);
      localStorage.setItem('lang', 'ar');
    }
    location.href = target + location.search + location.hash;
  });
}

/* =========================
   Navigation — Navbar scroll state
   ========================= */
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* =========================
   Navigation — Mobile Sidebar
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn  = document.getElementById('menuBtn');
  const sidebar  = document.getElementById('navSidebar');
  const navOvl   = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('sidebarClose');

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add('open');
    if (navOvl) navOvl.classList.add('show');
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
  }

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('open');
    if (navOvl) navOvl.classList.remove('show');
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
  }

  if (menuBtn)  menuBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (navOvl)   navOvl.addEventListener('click', closeSidebar);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 960) closeSidebar();
  });
});

/* =========================
   Navigation — Desktop Dropdowns (click on mobile)
   ========================= */
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (window.innerWidth < 960) {
      e.preventDefault();
      const parent = btn.closest('.dropdown');
      parent.classList.toggle('open');
    }
  });
});

/* =========================
   Scroll Reveal (IntersectionObserver)
   ========================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

function initReveal() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up')
    .forEach(el => revealObserver.observe(el));
}

document.addEventListener('DOMContentLoaded', initReveal);

/* =========================
   Animated Number Counters
   ========================= */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
  if (isNaN(target)) return;
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
});

/* =========================
   Process Tabs
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.process-tab');
  const panels = document.querySelectorAll('.process-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
});

/* =========================
   FAQ Accordion
   ========================= */
document.addEventListener('click', (e) => {
  const question = e.target.closest('.faq-question');
  if (!question) return;
  const item = question.closest('.faq-item');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

  // Open clicked (if it wasn't open)
  if (!isOpen) item.classList.add('open');
});

/* =========================
   Blog Filter Tabs
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  const filterTabs = document.querySelectorAll('.filter-tab');
  if (!filterTabs.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.getAttribute('data-cat');
      document.querySelectorAll('.insight-card, .blog-post-card').forEach(card => {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

/* =========================
   Contact Form
   ========================= */
document.addEventListener('submit', async (e) => {
  const form = e.target.closest('form.contact-form');
  if (!form) return;
  e.preventDefault();

  const btn  = form.querySelector('[type=submit]');
  const note = form.querySelector('.form-note');
  const lang = document.documentElement.lang;
  const dict = i18n[lang] || i18n.en;

  if (btn) { btn.disabled = true; btn.textContent = dict['contact.sending']; }
  if (note) { note.textContent = dict['contact.sending']; note.style.color = ''; }

  try {
    const data = Object.fromEntries(new FormData(form));
    const res = await fetch('https://formspree.io/f/mkndjpzj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      form.reset();
      if (note) { note.textContent = dict['contact.success']; note.style.color = 'var(--success)'; }
    } else {
      throw new Error('Server error');
    }
  } catch {
    if (note) { note.textContent = dict['contact.error']; note.style.color = '#ef4444'; }
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = dict['contact.send']; }
  }
});

/* =========================
   Footer Year
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* =========================
   Smooth Active Link
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-link], .nav-sidebar a[data-link]').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0].split('/').pop() || 'index.html';
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});

/* =========================================================
   21 World-Class Interactive Animations & Engines (ITQAN)
   ========================================================= */

// 1. Mouse Spotlight Card Tracking
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// 2. Custom Interactive Dual Cursor
document.addEventListener('DOMContentLoaded', () => {
  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Magnify on interactive items
  const interactives = 'a, button, .spotlight-card, .eco-interactive-node, .pipeline-node, input, select, textarea';
  document.querySelectorAll(interactives).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('expand'));
    el.addEventListener('mouseleave', () => ring.classList.remove('expand'));
  });
});

// 3. Live Floating HTML Dashboard Real-Time Simulation
document.addEventListener('DOMContentLoaded', () => {
  const revVal = document.getElementById('dashLiveRev');
  const ordVal = document.getElementById('dashLiveOrd');
  const stockVal = document.getElementById('dashLiveStock');

  if (!revVal || !ordVal) return;

  setInterval(() => {
    // Fluctuate Live Orders (235 to 255)
    const currentOrd = parseInt(ordVal.textContent || '241');
    const newOrd = currentOrd + (Math.random() > 0.4 ? 1 : -1);
    ordVal.textContent = newOrd;

    // Random chart bar animation
    const bars = document.querySelectorAll('.chart-bar');
    bars.forEach(bar => {
      const randomHeight = Math.floor(Math.random() * 65) + 30;
      bar.style.height = `${randomHeight}%`;
    });
  }, 2500);
});

// 4. Interactive Business Ecosystem Node & Particle Engine
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('ecoGraphContainer');
  const svgCanvas = document.getElementById('ecoSvgCanvas');

  if (!container || !svgCanvas) return;

  const coreNode = container.querySelector('.core-node');
  const nodes = container.querySelectorAll('.eco-interactive-node:not(.core-node)');

  if (!coreNode) return;

  function drawConnections() {
    svgCanvas.innerHTML = '';
    const containerRect = container.getBoundingClientRect();
    const coreRect = coreNode.getBoundingClientRect();

    const coreX = coreRect.left + coreRect.width / 2 - containerRect.left;
    const coreY = coreRect.top + coreRect.height / 2 - containerRect.top;

    nodes.forEach(node => {
      const nodeRect = node.getBoundingClientRect();
      const nodeX = nodeRect.left + nodeRect.width / 2 - containerRect.left;
      const nodeY = nodeRect.top + nodeRect.height / 2 - containerRect.top;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const d = `M ${coreX} ${coreY} Q ${(coreX + nodeX)/2} ${(coreY + nodeY)/2 - 20} ${nodeX} ${nodeY}`;
      path.setAttribute('d', d);
      path.setAttribute('class', 'eco-connection-line');
      path.setAttribute('data-target-id', node.getAttribute('data-node-id') || '');
      svgCanvas.appendChild(path);
    });
  }

  // Draw connections on load & resize
  drawConnections();
  window.addEventListener('resize', drawConnections);

  // Hover highlighting
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const id = node.getAttribute('data-node-id');
      node.classList.add('highlighted');
      coreNode.classList.add('highlighted');

      svgCanvas.querySelectorAll('.eco-connection-line').forEach(line => {
        if (line.getAttribute('data-target-id') === id) {
          line.classList.add('active');
        }
      });
    });

    node.addEventListener('mouseleave', () => {
      node.classList.remove('highlighted');
      coreNode.classList.remove('highlighted');

      svgCanvas.querySelectorAll('.eco-connection-line').forEach(line => {
        line.classList.remove('active');
      });
    });
  });
});

// 5. Interactive Pipeline Flow Step Highlights
document.addEventListener('DOMContentLoaded', () => {
  const pipelineNodes = document.querySelectorAll('.pipeline-node');
  if (!pipelineNodes.length) return;

  let currentStep = 0;
  setInterval(() => {
    pipelineNodes.forEach((n, idx) => {
      if (idx === currentStep) {
        n.classList.add('active');
      } else {
        n.classList.remove('active');
      }
    });
    currentStep = (currentStep + 1) % pipelineNodes.length;
  }, 2000);
});

/* =========================
   WhatsApp Floating Button  (bilingual EN / AR)
   ========================= */
(function () {
  const WA_NUMBER = '201142703439'; // +20 11 42703439

  const WA_COPY = {
    en: {
      label:   'Chat with us',
      message: "Hello ITQAN Solutions! I'd like to learn more about your services.",
      aria:    'Chat with us on WhatsApp'
    },
    ar: {
      label:   'تواصل معنا',
      message: 'مرحباً ITQAN Solutions! أود معرفة المزيد عن خدماتكم.',
      aria:    'تواصل معنا عبر واتساب'
    }
  };

  const WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  // Build the button
  const btn = document.createElement('a');
  btn.id        = 'waFloatBtn';
  btn.className = 'whatsapp-float';
  btn.target    = '_blank';
  btn.rel       = 'noopener noreferrer';
  btn.innerHTML = WA_SVG + '<span class="whatsapp-float-label">Chat with us</span>';
  document.body.appendChild(btn);

  // Helper: update text, link & aria for the given lang
  function updateWALang(lang) {
    const copy = WA_COPY[lang] || WA_COPY.en;
    const url  = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(copy.message);
    btn.href   = url;
    btn.setAttribute('aria-label', copy.aria);
    const label = btn.querySelector('.whatsapp-float-label');
    if (label) label.textContent = copy.label;
    // Position handled automatically via CSS [dir="rtl"]
    btn.style.left = '';
    btn.style.right = '';
  }

  // Apply current saved language on load
  document.addEventListener('DOMContentLoaded', function () {
    const saved = (location.pathname.indexOf('/ar/') === 0) ? 'ar' : 'en';
    updateWALang(saved);
  });

  // Patch applyLang so the button syncs whenever language is toggled
  const _origApplyLang = typeof applyLang === 'function' ? applyLang : null;
  if (_origApplyLang) {
    // Override the global applyLang to also update the WA button
    window._waUpdateLang = updateWALang;
  }

  // Listen for the lang toggle button click (most reliable hook)
  document.addEventListener('click', function (e) {
    const lb = e.target.closest('#langToggle');
    if (!lb) return;
    // The new lang is the opposite of the current html[lang]
    /* navigation handled by the lang toggle itself */
  });
})();

/* =========================
   Contact Form — Formspree
   ========================= */
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  // SETUP REQUIRED:
  // 1. Go to https://formspree.io and create a free account.
  // 2. Click "New Form", set your email, and copy the form ID from the endpoint.
  // 3. Replace YOUR_FORM_ID below with that ID (e.g. "xpwzkoab").
  var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  var submitBtn = form.querySelector('button[type="submit"]');
  var note      = form.querySelector('.form-note');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    var originalText = submitBtn.textContent;
    submitBtn.disabled   = true;
    submitBtn.textContent = 'Sending…';
    if (note) { note.style.color = 'var(--text-muted)'; note.textContent = ''; }

    try {
      var data = new FormData(form);
      var res  = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        if (note) {
          note.style.color = '#22c55e';
          note.textContent  = '✓ Message sent! We\'ll get back to you within 24 hours.';
        }
        submitBtn.textContent = '✓ Sent';
        setTimeout(function () {
          submitBtn.disabled    = false;
          submitBtn.textContent = originalText;
        }, 4000);
      } else {
        var json = await res.json().catch(function () { return {}; });
        throw new Error(json.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Form error:', err);
      if (note) {
        note.style.color = '#ef4444';
        note.textContent  = 'Something went wrong. Please email us at info@itqansolutions.org';
      }
      submitBtn.disabled    = false;
      submitBtn.textContent = originalText;
    }
  });
});

/* =========================
   Round 4: WhatsApp float auto-hide, reveal stagger, cinematic intro
   ========================= */
(function () {
  // WhatsApp float: slide away while scrolling down on phones so it never covers content
  var lastY = window.scrollY, timer;
  window.addEventListener('scroll', function () {
    var wa = document.querySelector('.whatsapp-float');
    if (!wa || window.innerWidth > 768) return;
    var y = window.scrollY;
    if (y > lastY + 4 && y > 200) wa.classList.add('wa-away');
    else if (y < lastY - 4) wa.classList.remove('wa-away');
    lastY = y;
    clearTimeout(timer);
    timer = setTimeout(function () { wa.classList.remove('wa-away'); }, 900);
  }, { passive: true });

  // Staggered reveal: delay siblings so cards cascade
  document.addEventListener('DOMContentLoaded', function () {
    var seen = new Map();
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach(function (el) {
      var p = el.parentElement; if (!p) return;
      var i = seen.get(p) || 0; seen.set(p, i + 1);
      if (!el.style.transitionDelay && i > 0) el.style.transitionDelay = Math.min(i, 6) * 70 + 'ms';
    });
  });
  // Safety: anything already above the fold when scrolling stops gets revealed
  window.addEventListener('scroll', function () {
    document.querySelectorAll('.reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible), .reveal-up:not(.is-visible)').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.96) el.classList.add('is-visible');
    });
  }, { passive: true });
})();

(function () {
  var root = document.documentElement;
  if (!root.classList.contains('intro-on')) return;
  var isAr = root.lang === 'ar' || root.dir === 'rtl';
  var L1 = isAr ? 'تكنولوجيا تُشغّل أعمالك.' : 'Technology that powers your business.';
  var L2 = isAr ? 'تسويق يُنمّيها.' : 'Marketing that grows it.';
  var DUR = 2600;

  function start() {
    var ov = document.createElement('div');
    ov.id = 'itqIntro'; ov.setAttribute('aria-hidden', 'true');
    ov.innerHTML = '<canvas></canvas><div class="itq-intro-slogan"><span class="l1"></span><br><span class="l2"></span><i class="caret"></i></div>';
    document.body.appendChild(ov);
    var cv = ov.querySelector('canvas'), ctx = cv.getContext('2d');
    var sl = ov.querySelector('.itq-intro-slogan'), s1 = sl.querySelector('.l1'), s2 = sl.querySelector('.l2');
    var W, H, dpr, cx, cy, ls, base, bld = [], seed = 7;
    function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    var P = [new Path2D('M16 30 L43 44 L34 14'), new Path2D('M84 30 L57 44 L66 14'), new Path2D('M16 70 L43 56 L34 86'), new Path2D('M84 70 L57 56 L66 86')];
    function layout() {
      dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cx = W / 2; ls = Math.min(Math.max(W * 0.3, 96), 150); cy = H * 0.36;
      base = H * 0.9; bld = []; seed = 7;
      var x = -10;
      while (x < W + 10) {
        var w = (W < 600 ? 22 : 34) + rnd() * (W < 600 ? 26 : 40);
        var dc = Math.abs(x + w / 2 - cx) / (W / 2);
        var h = H * (0.12 + rnd() * 0.18) + H * 0.16 * (1 - dc) * rnd();
        bld.push({ x: x, w: w, h: h, top: base - h, t: 0.45 + dc * 0.85 + rnd() * 0.12, cols: Math.max(2, Math.floor(w / 9)), rows: Math.floor(h / 12), seed: rnd() });
        x += w + 2 + rnd() * 4;
      }
      sl.style.top = (cy + ls * 0.62 + 22) + 'px';
    }
    layout();
    var busY = function () { return cy + ls * 0.75 + H * 0.2; };
    function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
    function ease(t) { return 1 - Math.pow(1 - t, 3); }
    function pathPt(b, p) { // logo -> down -> bus -> across -> up to building top
      var by = Math.min(busY(), b.top - 14), bx = b.x + b.w / 2;
      var segs = [[cx, cy + ls * 0.5, cx, by], [cx, by, bx, by], [bx, by, bx, b.top]];
      var tot = 0, ln = segs.map(function (s) { var l = Math.abs(s[2] - s[0]) + Math.abs(s[3] - s[1]); tot += l; return l; });
      var d = p * tot, i = 0;
      while (i < 2 && d > ln[i]) { d -= ln[i]; i++; }
      var s = segs[i], f = ln[i] ? d / ln[i] : 0;
      return [s[0] + (s[2] - s[0]) * f, s[1] + (s[3] - s[1]) * f];
    }
    function drawPulse(b, T) {
      var p = clamp((T - 0.35) / (b.t - 0.35 + 0.001), 0, 1);
      if (T < 0.35) return;
      var by = Math.min(busY(), b.top - 14), bx = b.x + b.w / 2;
      ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(94,224,255,' + (0.10 * clamp((T - 0.35) / 0.3, 0, 1)) + ')';
      ctx.beginPath(); ctx.moveTo(cx, cy + ls * 0.5); ctx.lineTo(cx, by); ctx.lineTo(bx, by); ctx.lineTo(bx, b.top); ctx.stroke();
      if (p >= 1) return;
      var tr = 0.14, pts = [], k;
      for (k = 0; k <= 8; k++) pts.push(pathPt(b, clamp(p - tr * (k / 8), 0, 1)));
      for (k = 0; k < 8; k++) {
        ctx.strokeStyle = 'rgba(' + (k < 2 ? '255,255,255' : '94,224,255') + ',' + (1 - k / 8) * 0.9 + ')';
        ctx.lineWidth = 2.2 * (1 - k / 10);
        ctx.beginPath(); ctx.moveTo(pts[k][0], pts[k][1]); ctx.lineTo(pts[k + 1][0], pts[k + 1][1]); ctx.stroke();
      }
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(pts[0][0], pts[0][1], 2.2, 0, 7); ctx.fill();
    }
    function frame(T) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#05080f'); g.addColorStop(0.62, '#0c1230'); g.addColorStop(1, '#1b1450');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // horizon glow rises with the energy
      var hg = ctx.createRadialGradient(cx, base, 0, cx, base, W * 0.8);
      var ha = clamp((T - 0.5) / 1.2, 0, 1) * 0.5;
      hg.addColorStop(0, 'rgba(90,70,255,' + ha + ')'); hg.addColorStop(1, 'rgba(90,70,255,0)');
      ctx.fillStyle = hg; ctx.fillRect(0, 0, W, H);
      // buildings
      bld.forEach(function (b) {
        var lit = clamp((T - b.t) / 0.45, 0, 1);
        ctx.fillStyle = '#0a0f24'; ctx.fillRect(b.x, b.top, b.w, b.h + 2);
        if (lit > 0) {
          ctx.fillStyle = 'rgba(94,224,255,' + 0.55 * lit + ')'; ctx.fillRect(b.x, b.top, b.w, 1.5);
          for (var r = 0; r < b.rows; r++) for (var c = 0; c < b.cols; c++) {
            var on = ((r * 7 + c * 13 + Math.floor(b.seed * 100)) % 5) < 3;
            if (!on) continue;
            var flick = 0.5 + 0.5 * Math.sin(T * 6 + r + c * 2 + b.seed * 9);
            ctx.fillStyle = (c + r) % 4 === 0 ? 'rgba(167,139,250,' + (0.5 + 0.3 * flick) * lit + ')' : 'rgba(94,224,255,' + (0.35 + 0.35 * flick) * lit + ')';
            ctx.fillRect(b.x + 3 + c * ((b.w - 4) / b.cols), b.top + 6 + r * 12, 3, 4);
          }
        }
      });
      ctx.fillStyle = '#05080f'; ctx.fillRect(0, base, W, H - base);
      bld.forEach(function (b) { drawPulse(b, T); });
      // logo glow + shockwave rings
      var a = ease(clamp(T / 0.5, 0, 1));
      var glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, ls * (1.4 + 0.25 * Math.sin(T * 5)));
      glow.addColorStop(0, 'rgba(120,100,255,' + 0.55 * a + ')'); glow.addColorStop(1, 'rgba(90,70,255,0)');
      ctx.fillStyle = glow; ctx.fillRect(cx - ls * 2, cy - ls * 2, ls * 4, ls * 4);
      for (var i = 0; i < 2; i++) {
        var rp = clamp((T - 0.35 - i * 0.25) / 0.9, 0, 1);
        if (rp > 0 && rp < 1) { ctx.strokeStyle = 'rgba(94,224,255,' + (1 - rp) * 0.5 + ')'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(cx, cy, ls * 0.4 + rp * Math.max(W, H) * 0.7, 0, 7); ctx.stroke(); }
      }
      // logo
      ctx.save();
      ctx.translate(cx - ls / 2, cy - ls / 2); ctx.scale(ls / 100, ls / 100);
      ctx.globalAlpha = a; ctx.lineWidth = 15; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.shadowColor = 'rgba(94,224,255,.9)'; ctx.shadowBlur = 18 * a * dpr;
      var lg = ctx.createLinearGradient(0, 0, 100, 100); lg.addColorStop(0, '#ffffff'); lg.addColorStop(1, '#9fe9ff');
      ctx.strokeStyle = lg;
      var pr = ease(clamp(T / 0.6, 0, 1));
      ctx.setLineDash([120, 120]); 
      P.forEach(function (p, k) { var q = ease(clamp((T - k * 0.05) / 0.55, 0, 1)); ctx.lineDashOffset = 120 * (1 - q); ctx.stroke(p); });
      ctx.setLineDash([]);
      ctx.fillStyle = '#5EE0FF'; ctx.translate(50, 50); ctx.rotate(Math.PI / 4 + T * 2); var ds = 3 + 3 * (0.5 + 0.5 * Math.sin(T * 9)) * pr; ctx.fillRect(-ds, -ds, ds * 2, ds * 2);
      ctx.restore();
      // slogan typing
      var ts = clamp((T - 1.3) / 0.8, 0, 1), n = Math.floor(ts * (L1.length + L2.length));
      if (isAr) { var words = (L1 + ' ' + L2).split(' '), wn = Math.floor(ts * words.length + 0.001), w1 = L1.split(' ').length; s1.textContent = words.slice(0, Math.min(wn, w1)).join(' '); s2.textContent = wn > w1 ? words.slice(w1, wn).join(' ') : ''; }
      else { s1.textContent = L1.slice(0, n); s2.textContent = n > L1.length ? L2.slice(0, n - L1.length) : ''; }
      sl.style.opacity = T > 1.25 ? 1 : 0;
      sl.querySelector('.caret').style.display = ts >= 1 && T > 2.15 ? 'none' : 'inline-block';
    }
    var t0 = null, done = false, raf;
    function finish() {
      if (done) return; done = true;
      cancelAnimationFrame(raf);
      ov.classList.add('out');
      root.classList.remove('intro-on');
      ['pointerdown', 'wheel', 'touchmove', 'keydown'].forEach(function (e) { window.removeEventListener(e, finish); });
      setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 700);
    }
    ['pointerdown', 'wheel', 'touchmove', 'keydown'].forEach(function (e) { window.addEventListener(e, finish, { passive: true }); });
    window.addEventListener('resize', layout);
    function loop(ts) {
      if (done) return;
      if (t0 === null) t0 = ts;
      var el = ts - t0;
      frame(el / 1000);
      if (el >= DUR) { finish(); return; }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    setTimeout(finish, DUR + 1500); // hard stop
    window.__itqIntroDebug = function (T) { done = true; cancelAnimationFrame(raf); frame(T); };
  }
  try { start(); } catch (e) { root.classList.remove('intro-on'); }
})();
