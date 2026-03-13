export interface Program {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: 'ai' | 'business' | 'certification' | 'corporate';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  durationAr: string;
  format: string;
  formatAr: string;
  overviewEn: string;
  overviewAr: string;
  outcomesEn: string[];
  outcomesAr: string[];
  modulesEn: { title: string; topics: string[] }[];
  modulesAr: { title: string; topics: string[] }[];
  instructorEn: { name: string; bio: string };
  instructorAr: { name: string; bio: string };
  certificationEn: string;
  certificationAr: string;
  faqEn: { q: string; a: string }[];
  faqAr: { q: string; a: string }[];
  icon: string;
}

export const programs: Program[] = [
  {
    id: 'ai-mastery-bootcamp',
    titleEn: 'AI Mastery Bootcamp',
    titleAr: 'معسكر إتقان الذكاء الاصطناعي',
    descriptionEn: 'Comprehensive 12-week intensive program covering AI fundamentals, machine learning, deep learning, and practical applications for business.',
    descriptionAr: 'برنامج مكثف شامل لمدة 12 أسبوعاً يغطي أساسيات الذكاء الاصطناعي والتعلم الآلي والتعلم العميق والتطبيقات العملية للأعمال.',
    category: 'ai',
    level: 'intermediate',
    duration: '12 Weeks',
    durationAr: '12 أسبوع',
    format: 'Hybrid (Online + In-Person)',
    formatAr: 'هجين (عبر الإنترنت + حضوري)',
    overviewEn: 'The AI Mastery Bootcamp is designed for professionals who want to leverage artificial intelligence in their organizations. This program provides hands-on experience with real-world AI applications, from data preparation to model deployment.',
    overviewAr: 'تم تصميم معسكر إتقان الذكاء الاصطناعي للمهنيين الذين يريدون الاستفادة من الذكاء الاصطناعي في مؤسساتهم. يوفر هذا البرنامج خبرة عملية مع تطبيقات الذكاء الاصطناعي في العالم الحقيقي.',
    outcomesEn: ['Understand AI and ML fundamentals', 'Build and train machine learning models', 'Apply deep learning to business problems', 'Deploy AI solutions in production', 'Develop an AI strategy for your organization'],
    outcomesAr: ['فهم أساسيات الذكاء الاصطناعي والتعلم الآلي', 'بناء وتدريب نماذج التعلم الآلي', 'تطبيق التعلم العميق على مشاكل الأعمال', 'نشر حلول الذكاء الاصطناعي في الإنتاج', 'تطوير استراتيجية ذكاء اصطناعي لمؤسستك'],
    modulesEn: [
      { title: 'Foundation of AI', topics: ['History and Evolution', 'Types of AI', 'AI Ethics', 'Python for AI'] },
      { title: 'Machine Learning', topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'] },
      { title: 'Deep Learning', topics: ['Neural Networks', 'CNNs', 'RNNs', 'Transfer Learning'] },
      { title: 'AI in Practice', topics: ['NLP Applications', 'Computer Vision', 'AI Deployment', 'Capstone Project'] },
    ],
    modulesAr: [
      { title: 'أساسيات الذكاء الاصطناعي', topics: ['التاريخ والتطور', 'أنواع الذكاء الاصطناعي', 'أخلاقيات الذكاء الاصطناعي', 'بايثون للذكاء الاصطناعي'] },
      { title: 'التعلم الآلي', topics: ['التعلم الموجه', 'التعلم غير الموجه', 'تقييم النماذج', 'هندسة الميزات'] },
      { title: 'التعلم العميق', topics: ['الشبكات العصبية', 'الشبكات الالتفافية', 'الشبكات التكرارية', 'نقل التعلم'] },
      { title: 'الذكاء الاصطناعي في الممارسة', topics: ['تطبيقات معالجة اللغة', 'الرؤية الحاسوبية', 'نشر الذكاء الاصطناعي', 'مشروع التخرج'] },
    ],
    instructorEn: { name: 'Dr. Khalid Al-Mutairi', bio: 'AI researcher and practitioner with 15+ years of experience in machine learning and data science. Former lead data scientist at a Fortune 500 company.' },
    instructorAr: { name: 'د. خالد المطيري', bio: 'باحث وممارس في الذكاء الاصطناعي مع أكثر من 15 عاماً من الخبرة في التعلم الآلي وعلوم البيانات.' },
    certificationEn: 'Upon completion, participants receive the BYCI AI Mastery Certificate, recognized by industry partners across the GCC.',
    certificationAr: 'عند الانتهاء، يحصل المشاركون على شهادة إتقان الذكاء الاصطناعي من BYCI، المعترف بها من شركاء الصناعة في دول الخليج.',
    faqEn: [
      { q: 'What are the prerequisites?', a: 'Basic programming knowledge and familiarity with statistics. No prior AI experience required.' },
      { q: 'Is the program available online?', a: 'Yes, the program is offered in a hybrid format with both online and in-person sessions in Kuwait.' },
      { q: 'What career support is provided?', a: 'We offer career counseling, portfolio review, and connections to our industry partner network.' },
    ],
    faqAr: [
      { q: 'ما هي المتطلبات الأساسية؟', a: 'معرفة أساسية بالبرمجة وإلمام بالإحصاء. لا حاجة لخبرة سابقة في الذكاء الاصطناعي.' },
      { q: 'هل البرنامج متاح عبر الإنترنت؟', a: 'نعم، يُقدم البرنامج بصيغة هجينة مع جلسات عبر الإنترنت وحضورية في الكويت.' },
      { q: 'ما الدعم المهني المقدم؟', a: 'نقدم استشارات مهنية ومراجعة المحفظة وروابط بشبكة شركائنا في الصناعة.' },
    ],
    icon: 'Brain',
  },
  {
    id: 'pmp-certification-prep',
    titleEn: 'PMP Certification Preparation',
    titleAr: 'التحضير لشهادة PMP',
    descriptionEn: 'Intensive preparation program for the Project Management Professional (PMP) certification with a 95% first-attempt pass rate.',
    descriptionAr: 'برنامج تحضيري مكثف لشهادة محترف إدارة المشاريع (PMP) بمعدل نجاح 95% من المحاولة الأولى.',
    category: 'certification',
    level: 'advanced',
    duration: '6 Weeks',
    durationAr: '6 أسابيع',
    format: 'In-Person + Online',
    formatAr: 'حضوري + عبر الإنترنت',
    overviewEn: 'Our PMP prep program is designed by certified PMP holders with decades of project management experience. The structured curriculum follows the latest PMI guidelines and includes extensive practice exams.',
    overviewAr: 'تم تصميم برنامج التحضير لشهادة PMP من قبل حاملي شهادة PMP المعتمدين بعقود من الخبرة في إدارة المشاريع.',
    outcomesEn: ['Master all PMP exam domains', 'Complete 35 contact hours requirement', 'Pass practice exams consistently', 'Develop exam-taking strategies', 'Build confidence for certification day'],
    outcomesAr: ['إتقان جميع مجالات امتحان PMP', 'إكمال متطلبات 35 ساعة تواصل', 'اجتياز اختبارات الممارسة باستمرار', 'تطوير استراتيجيات الامتحان', 'بناء الثقة ليوم الشهادة'],
    modulesEn: [
      { title: 'People Domain', topics: ['Team Management', 'Conflict Resolution', 'Stakeholder Engagement', 'Leadership'] },
      { title: 'Process Domain', topics: ['Planning', 'Execution', 'Monitoring', 'Risk Management'] },
      { title: 'Business Environment', topics: ['Benefits Realization', 'Compliance', 'Organizational Strategy', 'Change Management'] },
      { title: 'Exam Preparation', topics: ['Practice Exams', 'Time Management', 'Question Analysis', 'Review Sessions'] },
    ],
    modulesAr: [
      { title: 'مجال الأفراد', topics: ['إدارة الفريق', 'حل النزاعات', 'إشراك أصحاب المصلحة', 'القيادة'] },
      { title: 'مجال العمليات', topics: ['التخطيط', 'التنفيذ', 'المراقبة', 'إدارة المخاطر'] },
      { title: 'بيئة الأعمال', topics: ['تحقيق الفوائد', 'الامتثال', 'الاستراتيجية المؤسسية', 'إدارة التغيير'] },
      { title: 'التحضير للامتحان', topics: ['اختبارات تجريبية', 'إدارة الوقت', 'تحليل الأسئلة', 'جلسات مراجعة'] },
    ],
    instructorEn: { name: 'Eng. Noura Al-Hajri', bio: 'PMP, PgMP certified with 20+ years managing large-scale infrastructure projects across the GCC region.' },
    instructorAr: { name: 'م. نورة الحجري', bio: 'حاملة شهادات PMP وPgMP مع أكثر من 20 عاماً في إدارة مشاريع البنية التحتية الكبرى في منطقة الخليج.' },
    certificationEn: 'This program qualifies you for the PMI PMP examination. BYCI provides full application support and exam scheduling assistance.',
    certificationAr: 'يؤهلك هذا البرنامج لامتحان PMP من PMI. يقدم BYCI دعماً كاملاً في التقديم والمساعدة في جدولة الامتحان.',
    faqEn: [
      { q: 'What experience is required?', a: '36 months leading projects (with a degree) or 60 months (without). We help verify eligibility.' },
      { q: 'What is the pass rate?', a: 'Our participants achieve a 95% first-attempt pass rate, significantly above the global average.' },
    ],
    faqAr: [
      { q: 'ما الخبرة المطلوبة؟', a: '36 شهراً في قيادة المشاريع (مع شهادة) أو 60 شهراً (بدونها). نساعد في التحقق من الأهلية.' },
      { q: 'ما معدل النجاح؟', a: 'يحقق مشاركونا معدل نجاح 95% من المحاولة الأولى، أعلى بكثير من المتوسط العالمي.' },
    ],
    icon: 'Award',
  },
  {
    id: 'leadership-excellence',
    titleEn: 'Leadership Excellence Program',
    titleAr: 'برنامج التميز القيادي',
    descriptionEn: 'A comprehensive leadership development program designed for mid-to-senior level managers seeking to elevate their leadership capabilities.',
    descriptionAr: 'برنامج تطوير قيادي شامل مصمم للمدراء من المستوى المتوسط إلى الأعلى الذين يسعون لرفع قدراتهم القيادية.',
    category: 'business',
    level: 'advanced',
    duration: '8 Weeks',
    durationAr: '8 أسابيع',
    format: 'In-Person',
    formatAr: 'حضوري',
    overviewEn: 'The Leadership Excellence Program develops strategic thinking, emotional intelligence, and organizational leadership skills through case studies, simulations, and executive coaching.',
    overviewAr: 'يطور برنامج التميز القيادي التفكير الاستراتيجي والذكاء العاطفي ومهارات القيادة التنظيمية من خلال دراسات الحالة والمحاكاة والتوجيه التنفيذي.',
    outcomesEn: ['Develop strategic leadership skills', 'Build high-performing teams', 'Master change management', 'Enhance decision-making capabilities'],
    outcomesAr: ['تطوير مهارات القيادة الاستراتيجية', 'بناء فرق عالية الأداء', 'إتقان إدارة التغيير', 'تعزيز قدرات صنع القرار'],
    modulesEn: [
      { title: 'Strategic Leadership', topics: ['Vision & Strategy', 'Strategic Thinking', 'Innovation Leadership'] },
      { title: 'People Leadership', topics: ['Emotional Intelligence', 'Team Dynamics', 'Talent Development'] },
      { title: 'Organizational Leadership', topics: ['Change Management', 'Culture Building', 'Governance'] },
    ],
    modulesAr: [
      { title: 'القيادة الاستراتيجية', topics: ['الرؤية والاستراتيجية', 'التفكير الاستراتيجي', 'قيادة الابتكار'] },
      { title: 'قيادة الأفراد', topics: ['الذكاء العاطفي', 'ديناميكيات الفريق', 'تطوير المواهب'] },
      { title: 'القيادة التنظيمية', topics: ['إدارة التغيير', 'بناء الثقافة', 'الحوكمة'] },
    ],
    instructorEn: { name: 'Dr. Rania Mahmoud', bio: 'Executive coach and organizational psychologist with experience advising C-suite leaders at multinational corporations.' },
    instructorAr: { name: 'د. رانيا محمود', bio: 'مدربة تنفيذية وعالمة نفس تنظيمية ذات خبرة في تقديم المشورة لقادة الشركات المتعددة الجنسيات.' },
    certificationEn: 'Participants receive the BYCI Leadership Excellence Certificate upon successful completion of all modules and the capstone project.',
    certificationAr: 'يحصل المشاركون على شهادة التميز القيادي من BYCI عند إكمال جميع الوحدات ومشروع التخرج بنجاح.',
    faqEn: [{ q: 'Who should attend?', a: 'Mid-to-senior level managers with 5+ years of management experience looking to advance to executive roles.' }],
    faqAr: [{ q: 'من يجب أن يحضر؟', a: 'المدراء من المستوى المتوسط إلى الأعلى مع 5+ سنوات من الخبرة الإدارية الذين يتطلعون للتقدم لأدوار تنفيذية.' }],
    icon: 'Users',
  },
  {
    id: 'data-science-foundations',
    titleEn: 'Data Science Foundations',
    titleAr: 'أساسيات علوم البيانات',
    descriptionEn: 'Build a strong foundation in data science with hands-on projects using Python, SQL, and modern analytics tools.',
    descriptionAr: 'ابنِ أساساً قوياً في علوم البيانات مع مشاريع عملية باستخدام بايثون وSQL وأدوات التحليل الحديثة.',
    category: 'ai',
    level: 'beginner',
    duration: '10 Weeks',
    durationAr: '10 أسابيع',
    format: 'Online',
    formatAr: 'عبر الإنترنت',
    overviewEn: 'This program is ideal for professionals looking to transition into data science or add data skills to their current role. No prior coding experience required.',
    overviewAr: 'هذا البرنامج مثالي للمهنيين الذين يتطلعون للانتقال إلى علوم البيانات أو إضافة مهارات البيانات لدورهم الحالي.',
    outcomesEn: ['Master Python for data analysis', 'Build SQL querying skills', 'Create data visualizations', 'Apply statistical methods'],
    outcomesAr: ['إتقان بايثون لتحليل البيانات', 'بناء مهارات استعلام SQL', 'إنشاء تصورات البيانات', 'تطبيق الأساليب الإحصائية'],
    modulesEn: [
      { title: 'Python Essentials', topics: ['Variables & Data Types', 'Pandas & NumPy', 'Data Cleaning'] },
      { title: 'Data Analysis', topics: ['SQL Fundamentals', 'Statistical Analysis', 'Data Visualization'] },
      { title: 'Applied Projects', topics: ['Business Analytics', 'Dashboard Building', 'Capstone Project'] },
    ],
    modulesAr: [
      { title: 'أساسيات بايثون', topics: ['المتغيرات وأنواع البيانات', 'Pandas و NumPy', 'تنظيف البيانات'] },
      { title: 'تحليل البيانات', topics: ['أساسيات SQL', 'التحليل الإحصائي', 'تصور البيانات'] },
      { title: 'المشاريع التطبيقية', topics: ['تحليلات الأعمال', 'بناء لوحات المعلومات', 'مشروع التخرج'] },
    ],
    instructorEn: { name: 'Aisha Patel', bio: 'Data scientist with experience at Google and Amazon, passionate about making data science accessible to non-technical professionals.' },
    instructorAr: { name: 'عائشة باتيل', bio: 'عالمة بيانات ذات خبرة في جوجل وأمازون، شغوفة بجعل علوم البيانات متاحة للمهنيين غير التقنيين.' },
    certificationEn: 'BYCI Data Science Foundations Certificate with a digital portfolio of completed projects.',
    certificationAr: 'شهادة أساسيات علوم البيانات من BYCI مع محفظة رقمية من المشاريع المكتملة.',
    faqEn: [{ q: 'Do I need coding experience?', a: 'No prior coding experience is needed. We start from the basics and build up gradually.' }],
    faqAr: [{ q: 'هل أحتاج خبرة في البرمجة؟', a: 'لا حاجة لخبرة سابقة في البرمجة. نبدأ من الأساسيات ونبني تدريجياً.' }],
    icon: 'BarChart3',
  },
  {
    id: 'cybersecurity-essentials',
    titleEn: 'Cybersecurity Essentials',
    titleAr: 'أساسيات الأمن السيبراني',
    descriptionEn: 'Comprehensive cybersecurity program covering threat analysis, network security, incident response, and compliance frameworks.',
    descriptionAr: 'برنامج أمن سيبراني شامل يغطي تحليل التهديدات وأمن الشبكات والاستجابة للحوادث وأطر الامتثال.',
    category: 'ai',
    level: 'intermediate',
    duration: '8 Weeks',
    durationAr: '8 أسابيع',
    format: 'Hybrid',
    formatAr: 'هجين',
    overviewEn: 'As cyber threats continue to evolve, organizations need professionals who can protect their digital assets. This program prepares you for a career in cybersecurity or enhances your existing IT security skills.',
    overviewAr: 'مع استمرار تطور التهديدات السيبرانية، تحتاج المؤسسات لمهنيين قادرين على حماية أصولها الرقمية. يعدك هذا البرنامج لمسيرة في الأمن السيبراني.',
    outcomesEn: ['Identify and assess security threats', 'Implement security controls', 'Develop incident response plans', 'Understand compliance requirements'],
    outcomesAr: ['تحديد وتقييم التهديدات الأمنية', 'تنفيذ ضوابط الأمن', 'تطوير خطط الاستجابة للحوادث', 'فهم متطلبات الامتثال'],
    modulesEn: [
      { title: 'Security Fundamentals', topics: ['Threat Landscape', 'Security Principles', 'Cryptography'] },
      { title: 'Network Security', topics: ['Firewalls', 'IDS/IPS', 'VPN & Zero Trust'] },
      { title: 'Incident Response', topics: ['Detection', 'Analysis', 'Recovery', 'Reporting'] },
    ],
    modulesAr: [
      { title: 'أساسيات الأمن', topics: ['مشهد التهديدات', 'مبادئ الأمن', 'التشفير'] },
      { title: 'أمن الشبكات', topics: ['جدران الحماية', 'أنظمة كشف التسلل', 'VPN والثقة الصفرية'] },
      { title: 'الاستجابة للحوادث', topics: ['الكشف', 'التحليل', 'التعافي', 'التقارير'] },
    ],
    instructorEn: { name: 'Mohammed Al-Dosari', bio: 'CISSP, CEH certified cybersecurity expert with experience in government and financial sector security across the GCC.' },
    instructorAr: { name: 'محمد الدوسري', bio: 'خبير أمن سيبراني حامل لشهادات CISSP و CEH مع خبرة في أمن القطاعين الحكومي والمالي في دول الخليج.' },
    certificationEn: 'BYCI Cybersecurity Essentials Certificate. This program also prepares you for CompTIA Security+ certification.',
    certificationAr: 'شهادة أساسيات الأمن السيبراني من BYCI. يعدك هذا البرنامج أيضاً لشهادة CompTIA Security+.',
    faqEn: [{ q: 'Is this suitable for beginners?', a: 'Basic IT knowledge is recommended. We cover fundamentals before advancing to more complex topics.' }],
    faqAr: [{ q: 'هل هذا مناسب للمبتدئين؟', a: 'يُنصح بمعرفة أساسية بتكنولوجيا المعلومات. نغطي الأساسيات قبل الانتقال لمواضيع أكثر تعقيداً.' }],
    icon: 'Shield',
  },
  {
    id: 'cloud-computing-aws',
    titleEn: 'Cloud Computing with AWS',
    titleAr: 'الحوسبة السحابية مع AWS',
    descriptionEn: 'Master Amazon Web Services with hands-on labs and prepare for AWS Solutions Architect certification.',
    descriptionAr: 'أتقن خدمات أمازون ويب مع مختبرات عملية واستعد لشهادة مهندس حلول AWS.',
    category: 'certification',
    level: 'intermediate',
    duration: '8 Weeks',
    durationAr: '8 أسابيع',
    format: 'Online + Labs',
    formatAr: 'عبر الإنترنت + مختبرات',
    overviewEn: 'Cloud computing skills are in high demand across the GCC. This program gives you practical experience with AWS services and prepares you for the Solutions Architect Associate certification.',
    overviewAr: 'مهارات الحوسبة السحابية مطلوبة بشدة في دول الخليج. يمنحك هذا البرنامج خبرة عملية مع خدمات AWS ويعدك لشهادة مهندس الحلول.',
    outcomesEn: ['Design scalable cloud architectures', 'Deploy applications on AWS', 'Manage cloud security', 'Optimize costs'],
    outcomesAr: ['تصميم بنى سحابية قابلة للتوسع', 'نشر التطبيقات على AWS', 'إدارة أمن السحابة', 'تحسين التكاليف'],
    modulesEn: [
      { title: 'AWS Foundations', topics: ['Cloud Concepts', 'IAM', 'VPC', 'EC2'] },
      { title: 'Storage & Databases', topics: ['S3', 'RDS', 'DynamoDB', 'ElastiCache'] },
      { title: 'Architecture & Security', topics: ['Well-Architected Framework', 'Security Best Practices', 'Cost Optimization'] },
    ],
    modulesAr: [
      { title: 'أساسيات AWS', topics: ['مفاهيم السحابة', 'IAM', 'VPC', 'EC2'] },
      { title: 'التخزين وقواعد البيانات', topics: ['S3', 'RDS', 'DynamoDB', 'ElastiCache'] },
      { title: 'البنية والأمن', topics: ['إطار العمل المعماري', 'أفضل ممارسات الأمن', 'تحسين التكاليف'] },
    ],
    instructorEn: { name: 'James Chen', bio: 'AWS Solutions Architect Professional and DevOps Engineer with 10+ years of cloud infrastructure experience.' },
    instructorAr: { name: 'جيمس تشين', bio: 'مهندس حلول AWS محترف ومهندس DevOps مع أكثر من 10 سنوات من الخبرة في البنية التحتية السحابية.' },
    certificationEn: 'Prepares you for AWS Solutions Architect Associate exam. BYCI provides exam vouchers and scheduling support.',
    certificationAr: 'يعدك لامتحان مهندس حلول AWS المعتمد. يقدم BYCI قسائم الامتحان ودعم الجدولة.',
    faqEn: [{ q: 'Do I need prior cloud experience?', a: 'Basic IT knowledge is sufficient. The program covers cloud fundamentals before diving into AWS services.' }],
    faqAr: [{ q: 'هل أحتاج خبرة سحابية سابقة؟', a: 'المعرفة الأساسية بتكنولوجيا المعلومات كافية. يغطي البرنامج أساسيات السحابة قبل الغوص في خدمات AWS.' }],
    icon: 'Cloud',
  },
];

export const getCategoryLabel = (cat: string, lang: 'en' | 'ar') => {
  const labels: Record<string, { en: string; ar: string }> = {
    ai: { en: 'AI & Technology', ar: 'الذكاء الاصطناعي والتكنولوجيا' },
    business: { en: 'Business & Leadership', ar: 'الأعمال والقيادة' },
    certification: { en: 'Professional Certification', ar: 'الشهادات المهنية' },
    corporate: { en: 'Corporate Development', ar: 'التطوير المؤسسي' },
  };
  return labels[cat]?.[lang] || cat;
};

export const getLevelLabel = (level: string, lang: 'en' | 'ar') => {
  const labels: Record<string, { en: string; ar: string }> = {
    beginner: { en: 'Beginner', ar: 'مبتدئ' },
    intermediate: { en: 'Intermediate', ar: 'متوسط' },
    advanced: { en: 'Advanced', ar: 'متقدم' },
  };
  return labels[level]?.[lang] || level;
};
