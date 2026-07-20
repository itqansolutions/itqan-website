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
    'nav.rest':             'Tashgheel Restaurants',
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
    'eco.message':          '🔗 One partner. One ecosystem. Unlimited growth.',

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
    'ins.p1.title':         'Why Mid-Market Companies Are Investing in Custom ERP in 2025',
    'ins.p1.desc':          'Off-the-shelf software no longer fits complex operational needs. Here is why bespoke ERP is becoming the competitive advantage.',
    'ins.p2.cat':           'Marketing Strategy',
    'ins.p2.title':         'The Performance Marketing Playbook for B2B Growth in the MENA Region',
    'ins.p2.desc':          'A data-driven framework for running Meta Ads, Google Ads, and LinkedIn campaigns that generate qualified enterprise leads.',
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
    'contact.title':        'Let\'s Build Something',
    'contact.desc':         'Tell us about your project     'contact.info.title':   'Contact Information',
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
    'rst.label':            'Tashgheel Restaurants',
    'rst.title':            'Built for the Pace of F&B.',
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
    'footer.rest':          'Tashgheel Restaurants',
    'footer.srv':           'Tashgheel Services',
    'footer.erp':           'Custom ERP',
    'footer.about':         'About Us',
    'footer.cases':         'Case Studies',
    'footer.insights':      'Insights',
    'footer.contact':       'Contact',
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
    'nav.rest':             'تشغيل مطاعم',
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
    'eco.message':          '🔗 شريك واحد. منظومة واحدة. نمو لا محدود.',

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
    'rst.label':            'تشغيل مطاعم',
    'rst.title':            'مصمم لسرعة وتحديات قطاع الأغذية والمشروبات',
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
    'ins.p1.title':         'لماذا تستثمر الشركات المتوسطة في ERP مخصص في 2025',
    'ins.p1.desc':          'البرمجيات الجاهزة لم تعد تلائم الاحتياجات التشغيلية المعقدة. إليك لماذا أصبح الـ ERP المخصص ميزة تنافسية.',
    'ins.p2.cat':           'استراتيجية التسويق',
    'ins.p2.title':         'دليل التسويق الأدائي لنمو B2B في منطقة الشرق الأوسط',
    'ins.p2.desc':          'إطار عمل قائم على البيانات لتشغيل حملات Meta Ads وGoogle Ads وLinkedIn تولّد عملاء محتملين مؤهلين.',
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
    'footer.rest':          'تشغيل مطاعم',
    'footer.srv':           'تشغيل خدمات',
    'footer.erp':           'ERP مخصص',
    'footer.about':         'من نحن',
    'footer.cases':         'دراسات الحالة',
    'footer.insights':      'المقالات',
    'footer.contact':       'اتصل بنا',
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
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
