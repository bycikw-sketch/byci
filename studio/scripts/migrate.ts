/**
 * One-shot migration script — imports all static TypeScript data into Sanity.
 * Run from the studio/ directory:
 *   npx tsx scripts/migrate.ts
 *
 * Requires studio/scripts/.env with:
 *   SANITY_PROJECT_ID=...
 *   SANITY_DATASET=production
 *   SANITY_MIGRATE_TOKEN=...  (editor token from manage.sanity.io/tokens)
 */

import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { randomUUID } from 'crypto';

// Load migration env
dotenv.config({ path: resolve(__dirname, '.env') });

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET ?? 'production',
  token: process.env.SANITY_MIGRATE_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// ---- Inline static data (copied from src/data to avoid ESM import issues in Node) ----

const programs = [
  {
    id: 'ai-mastery-bootcamp', titleEn: 'AI Mastery Bootcamp', titleAr: 'معسكر إتقان الذكاء الاصطناعي',
    descriptionEn: 'Comprehensive 12-week intensive program covering AI fundamentals, machine learning, deep learning, and practical applications for business.',
    descriptionAr: 'برنامج مكثف شامل لمدة 12 أسبوعاً يغطي أساسيات الذكاء الاصطناعي والتعلم الآلي والتعلم العميق والتطبيقات العملية للأعمال.',
    category: 'ai', level: 'intermediate', duration: '12 Weeks', durationAr: '12 أسبوع',
    format: 'Hybrid (Online + In-Person)', formatAr: 'هجين (عبر الإنترنت + حضوري)',
    overviewEn: 'The AI Mastery Bootcamp is designed for professionals who want to leverage artificial intelligence in their organizations.',
    overviewAr: 'تم تصميم معسكر إتقان الذكاء الاصطناعي للمهنيين الذين يريدون الاستفادة من الذكاء الاصطناعي في مؤسساتهم.',
    outcomesEn: ['Understand AI and ML fundamentals', 'Build and train machine learning models', 'Apply deep learning to business problems', 'Deploy AI solutions in production'],
    outcomesAr: ['فهم أساسيات الذكاء الاصطناعي والتعلم الآلي', 'بناء وتدريب نماذج التعلم الآلي', 'تطبيق التعلم العميق على مشاكل الأعمال', 'نشر حلول الذكاء الاصطناعي في الإنتاج'],
    modulesEn: [
      { title: 'Foundation of AI', topics: ['History and Evolution', 'Types of AI', 'AI Ethics', 'Python for AI'] },
      { title: 'Machine Learning', topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'] },
      { title: 'Deep Learning', topics: ['Neural Networks', 'CNNs', 'RNNs', 'Transfer Learning'] },
      { title: 'AI in Practice', topics: ['NLP Applications', 'Computer Vision', 'AI Deployment', 'Capstone Project'] },
    ],
    modulesAr: [
      { title: 'أساسيات الذكاء الاصطناعي', topics: ['التاريخ والتطور', 'أنواع الذكاء الاصطناعي', 'أخلاقيات الذكاء الاصطناعي', 'بايثون للذكاء الاصطناعي'] },
      { title: 'التعلم الآلي', topics: ['التعلم الموجه', 'التعلم غير الموجه', 'تقييم النماذج'] },
      { title: 'التعلم العميق', topics: ['الشبكات العصبية', 'الشبكات الالتفافية', 'الشبكات التكرارية', 'نقل التعلم'] },
      { title: 'الذكاء الاصطناعي في الممارسة', topics: ['تطبيقات معالجة اللغة', 'الرؤية الحاسوبية', 'نشر الذكاء الاصطناعي', 'مشروع التخرج'] },
    ],
    instructorEn: { name: 'Dr. Khalid Al-Mutairi', bio: 'AI researcher with 15+ years of experience in machine learning and data science.' },
    instructorAr: { name: 'د. خالد المطيري', bio: 'باحث في الذكاء الاصطناعي مع أكثر من 15 عاماً من الخبرة.' },
    certificationEn: 'BYCI AI Mastery Certificate, recognized by industry partners across the GCC.',
    certificationAr: 'شهادة إتقان الذكاء الاصطناعي من BYCI، المعترف بها من شركاء الصناعة في دول الخليج.',
    faqEn: [{ q: 'What are the prerequisites?', a: 'Basic programming knowledge and familiarity with statistics.' }],
    faqAr: [{ q: 'ما هي المتطلبات الأساسية؟', a: 'معرفة أساسية بالبرمجة وإلمام بالإحصاء.' }],
    icon: 'Brain',
  },
  {
    id: 'pmp-certification-prep', titleEn: 'PMP Certification Preparation', titleAr: 'التحضير لشهادة PMP',
    descriptionEn: 'Intensive preparation program for the Project Management Professional (PMP) certification with a 95% first-attempt pass rate.',
    descriptionAr: 'برنامج تحضيري مكثف لشهادة محترف إدارة المشاريع (PMP) بمعدل نجاح 95% من المحاولة الأولى.',
    category: 'certification', level: 'advanced', duration: '6 Weeks', durationAr: '6 أسابيع',
    format: 'In-Person + Online', formatAr: 'حضوري + عبر الإنترنت',
    overviewEn: 'Our PMP prep program is designed by certified PMP holders with decades of project management experience.',
    overviewAr: 'تم تصميم برنامج التحضير لشهادة PMP من قبل حاملي شهادة PMP المعتمدين.',
    outcomesEn: ['Master all PMP exam domains', 'Complete 35 contact hours requirement', 'Pass practice exams consistently'],
    outcomesAr: ['إتقان جميع مجالات امتحان PMP', 'إكمال متطلبات 35 ساعة تواصل', 'اجتياز اختبارات الممارسة باستمرار'],
    modulesEn: [
      { title: 'People Domain', topics: ['Team Management', 'Conflict Resolution', 'Stakeholder Engagement'] },
      { title: 'Process Domain', topics: ['Planning', 'Execution', 'Monitoring', 'Risk Management'] },
      { title: 'Exam Preparation', topics: ['Practice Exams', 'Time Management', 'Question Analysis'] },
    ],
    modulesAr: [
      { title: 'مجال الأفراد', topics: ['إدارة الفريق', 'حل النزاعات', 'إشراك أصحاب المصلحة'] },
      { title: 'مجال العمليات', topics: ['التخطيط', 'التنفيذ', 'المراقبة', 'إدارة المخاطر'] },
      { title: 'التحضير للامتحان', topics: ['اختبارات تجريبية', 'إدارة الوقت', 'تحليل الأسئلة'] },
    ],
    instructorEn: { name: 'Eng. Noura Al-Hajri', bio: 'PMP, PgMP certified with 20+ years managing large-scale infrastructure projects.' },
    instructorAr: { name: 'م. نورة الحجري', bio: 'حاملة شهادات PMP وPgMP مع أكثر من 20 عاماً في إدارة مشاريع البنية التحتية.' },
    certificationEn: 'This program qualifies you for the PMI PMP examination.',
    certificationAr: 'يؤهلك هذا البرنامج لامتحان PMP من PMI.',
    faqEn: [{ q: 'What experience is required?', a: '36 months leading projects (with a degree) or 60 months (without).' }],
    faqAr: [{ q: 'ما الخبرة المطلوبة؟', a: '36 شهراً في قيادة المشاريع (مع شهادة) أو 60 شهراً (بدونها).' }],
    icon: 'Award',
  },
  {
    id: 'leadership-excellence', titleEn: 'Leadership Excellence Program', titleAr: 'برنامج التميز القيادي',
    descriptionEn: 'A comprehensive leadership development program designed for mid-to-senior level managers.',
    descriptionAr: 'برنامج تطوير قيادي شامل مصمم للمدراء من المستوى المتوسط إلى الأعلى.',
    category: 'business', level: 'advanced', duration: '8 Weeks', durationAr: '8 أسابيع',
    format: 'In-Person', formatAr: 'حضوري',
    overviewEn: 'The Leadership Excellence Program develops strategic thinking, emotional intelligence, and organizational leadership skills.',
    overviewAr: 'يطور برنامج التميز القيادي التفكير الاستراتيجي والذكاء العاطفي ومهارات القيادة التنظيمية.',
    outcomesEn: ['Develop strategic leadership skills', 'Build high-performing teams', 'Master change management'],
    outcomesAr: ['تطوير مهارات القيادة الاستراتيجية', 'بناء فرق عالية الأداء', 'إتقان إدارة التغيير'],
    modulesEn: [
      { title: 'Strategic Leadership', topics: ['Vision & Strategy', 'Strategic Thinking', 'Innovation Leadership'] },
      { title: 'People Leadership', topics: ['Emotional Intelligence', 'Team Dynamics', 'Talent Development'] },
    ],
    modulesAr: [
      { title: 'القيادة الاستراتيجية', topics: ['الرؤية والاستراتيجية', 'التفكير الاستراتيجي', 'قيادة الابتكار'] },
      { title: 'قيادة الأفراد', topics: ['الذكاء العاطفي', 'ديناميكيات الفريق', 'تطوير المواهب'] },
    ],
    instructorEn: { name: 'Dr. Rania Mahmoud', bio: 'Executive coach and organizational psychologist advising C-suite leaders.' },
    instructorAr: { name: 'د. رانيا محمود', bio: 'مدربة تنفيذية وعالمة نفس تنظيمية.' },
    certificationEn: 'BYCI Leadership Excellence Certificate upon completion.',
    certificationAr: 'شهادة التميز القيادي من BYCI عند الإكمال.',
    faqEn: [{ q: 'Who should attend?', a: 'Mid-to-senior level managers with 5+ years of management experience.' }],
    faqAr: [{ q: 'من يجب أن يحضر؟', a: 'المدراء من المستوى المتوسط إلى الأعلى مع 5+ سنوات من الخبرة.' }],
    icon: 'Users',
  },
  {
    id: 'data-science-foundations', titleEn: 'Data Science Foundations', titleAr: 'أساسيات علوم البيانات',
    descriptionEn: 'Build a strong foundation in data science with hands-on projects using Python, SQL, and modern analytics tools.',
    descriptionAr: 'ابنِ أساساً قوياً في علوم البيانات مع مشاريع عملية باستخدام بايثون وSQL وأدوات التحليل الحديثة.',
    category: 'ai', level: 'beginner', duration: '10 Weeks', durationAr: '10 أسابيع',
    format: 'Online', formatAr: 'عبر الإنترنت',
    overviewEn: 'Ideal for professionals looking to transition into data science or add data skills to their current role.',
    overviewAr: 'مثالي للمهنيين الذين يتطلعون للانتقال إلى علوم البيانات.',
    outcomesEn: ['Master Python for data analysis', 'Build SQL querying skills', 'Create data visualizations'],
    outcomesAr: ['إتقان بايثون لتحليل البيانات', 'بناء مهارات استعلام SQL', 'إنشاء تصورات البيانات'],
    modulesEn: [
      { title: 'Python Essentials', topics: ['Variables & Data Types', 'Pandas & NumPy', 'Data Cleaning'] },
      { title: 'Data Analysis', topics: ['SQL Fundamentals', 'Statistical Analysis', 'Data Visualization'] },
    ],
    modulesAr: [
      { title: 'أساسيات بايثون', topics: ['المتغيرات وأنواع البيانات', 'Pandas و NumPy', 'تنظيف البيانات'] },
      { title: 'تحليل البيانات', topics: ['أساسيات SQL', 'التحليل الإحصائي', 'تصور البيانات'] },
    ],
    instructorEn: { name: 'Aisha Patel', bio: 'Data scientist with experience at Google and Amazon.' },
    instructorAr: { name: 'عائشة باتيل', bio: 'عالمة بيانات ذات خبرة في جوجل وأمازون.' },
    certificationEn: 'BYCI Data Science Foundations Certificate.',
    certificationAr: 'شهادة أساسيات علوم البيانات من BYCI.',
    faqEn: [{ q: 'Do I need coding experience?', a: 'No prior coding experience is needed.' }],
    faqAr: [{ q: 'هل أحتاج خبرة في البرمجة؟', a: 'لا حاجة لخبرة سابقة في البرمجة.' }],
    icon: 'BarChart3',
  },
  {
    id: 'cybersecurity-essentials', titleEn: 'Cybersecurity Essentials', titleAr: 'أساسيات الأمن السيبراني',
    descriptionEn: 'Comprehensive cybersecurity program covering threat analysis, network security, incident response, and compliance frameworks.',
    descriptionAr: 'برنامج أمن سيبراني شامل يغطي تحليل التهديدات وأمن الشبكات والاستجابة للحوادث.',
    category: 'ai', level: 'intermediate', duration: '8 Weeks', durationAr: '8 أسابيع',
    format: 'Hybrid', formatAr: 'هجين',
    overviewEn: 'Prepares you for a career in cybersecurity or enhances your existing IT security skills.',
    overviewAr: 'يعدك للعمل في مجال الأمن السيبراني أو يعزز مهاراتك الأمنية الحالية.',
    outcomesEn: ['Identify and assess security threats', 'Implement security controls', 'Develop incident response plans'],
    outcomesAr: ['تحديد وتقييم التهديدات الأمنية', 'تنفيذ ضوابط الأمن', 'تطوير خطط الاستجابة للحوادث'],
    modulesEn: [
      { title: 'Security Fundamentals', topics: ['Threat Landscape', 'Security Principles', 'Cryptography'] },
      { title: 'Network Security', topics: ['Firewalls', 'IDS/IPS', 'VPN & Zero Trust'] },
    ],
    modulesAr: [
      { title: 'أساسيات الأمن', topics: ['مشهد التهديدات', 'مبادئ الأمن', 'التشفير'] },
      { title: 'أمن الشبكات', topics: ['جدران الحماية', 'أنظمة كشف التسلل', 'VPN والثقة الصفرية'] },
    ],
    instructorEn: { name: 'Mohammed Al-Dosari', bio: 'CISSP, CEH certified cybersecurity expert.' },
    instructorAr: { name: 'محمد الدوسري', bio: 'خبير أمن سيبراني حامل لشهادات CISSP و CEH.' },
    certificationEn: 'BYCI Cybersecurity Essentials Certificate. Also prepares for CompTIA Security+.',
    certificationAr: 'شهادة أساسيات الأمن السيبراني من BYCI. يعدك أيضاً لشهادة CompTIA Security+.',
    faqEn: [{ q: 'Is this suitable for beginners?', a: 'Basic IT knowledge is recommended.' }],
    faqAr: [{ q: 'هل هذا مناسب للمبتدئين؟', a: 'يُنصح بمعرفة أساسية بتكنولوجيا المعلومات.' }],
    icon: 'Shield',
  },
  {
    id: 'cloud-computing-aws', titleEn: 'Cloud Computing with AWS', titleAr: 'الحوسبة السحابية مع AWS',
    descriptionEn: 'Master Amazon Web Services with hands-on labs and prepare for AWS Solutions Architect certification.',
    descriptionAr: 'أتقن خدمات أمازون ويب مع مختبرات عملية واستعد لشهادة مهندس حلول AWS.',
    category: 'certification', level: 'intermediate', duration: '8 Weeks', durationAr: '8 أسابيع',
    format: 'Online + Labs', formatAr: 'عبر الإنترنت + مختبرات',
    overviewEn: 'Practical experience with AWS services and preparation for the Solutions Architect Associate certification.',
    overviewAr: 'خبرة عملية مع خدمات AWS والتحضير لشهادة مهندس الحلول.',
    outcomesEn: ['Design scalable cloud architectures', 'Deploy applications on AWS', 'Manage cloud security'],
    outcomesAr: ['تصميم بنى سحابية قابلة للتوسع', 'نشر التطبيقات على AWS', 'إدارة أمن السحابة'],
    modulesEn: [
      { title: 'AWS Foundations', topics: ['Cloud Concepts', 'IAM', 'VPC', 'EC2'] },
      { title: 'Storage & Databases', topics: ['S3', 'RDS', 'DynamoDB', 'ElastiCache'] },
    ],
    modulesAr: [
      { title: 'أساسيات AWS', topics: ['مفاهيم السحابة', 'IAM', 'VPC', 'EC2'] },
      { title: 'التخزين وقواعد البيانات', topics: ['S3', 'RDS', 'DynamoDB', 'ElastiCache'] },
    ],
    instructorEn: { name: 'James Chen', bio: 'AWS Solutions Architect Professional with 10+ years of cloud infrastructure experience.' },
    instructorAr: { name: 'جيمس تشين', bio: 'مهندس حلول AWS محترف مع أكثر من 10 سنوات من الخبرة.' },
    certificationEn: 'Prepares you for AWS Solutions Architect Associate exam.',
    certificationAr: 'يعدك لامتحان مهندس حلول AWS المعتمد.',
    faqEn: [{ q: 'Do I need prior cloud experience?', a: 'Basic IT knowledge is sufficient.' }],
    faqAr: [{ q: 'هل أحتاج خبرة سحابية سابقة؟', a: 'المعرفة الأساسية بتكنولوجيا المعلومات كافية.' }],
    icon: 'Cloud',
  },
];

const blogArticles = [
  {
    id: 'ai-transforming-gcc-workforce',
    titleEn: 'How AI is Transforming the GCC Workforce in 2025', titleAr: 'كيف يحوّل الذكاء الاصطناعي القوى العاملة في دول الخليج في 2025',
    excerptEn: 'Artificial intelligence is reshaping industries across Kuwait and the Gulf region.',
    excerptAr: 'يعيد الذكاء الاصطناعي تشكيل الصناعات في الكويت ومنطقة الخليج.',
    contentEn: ['The Gulf Cooperation Council region is undergoing a profound transformation driven by artificial intelligence.', 'According to recent studies, AI adoption across GCC organizations has increased by over 40% in the past two years.', 'For professionals, this means that AI literacy is no longer optional.', 'At BYCI, our AI Mastery Bootcamp is designed specifically for GCC professionals who need practical, hands-on AI skills.', 'The key takeaway: professionals who invest in AI skills today will be positioned for leadership roles tomorrow.'],
    contentAr: ['تشهد منطقة مجلس التعاون الخليجي تحولاً عميقاً مدفوعاً بالذكاء الاصطناعي.', 'وفقاً لدراسات حديثة، زاد تبني الذكاء الاصطناعي في مؤسسات دول الخليج بأكثر من 40%.', 'بالنسبة للمهنيين، هذا يعني أن محو الأمية في الذكاء الاصطناعي لم يعد اختيارياً.', 'في BYCI، تم تصميم معسكر إتقان الذكاء الاصطناعي خصيصاً للمهنيين في دول الخليج.', 'الخلاصة: المهنيون الذين يستثمرون في مهارات الذكاء الاصطناعي اليوم سيكونون في وضع قيادي غداً.'],
    category: 'ai', author: 'Dr. Khalid Al-Mutairi', authorRoleEn: 'AI Program Director, BYCI', authorRoleAr: 'مدير برنامج الذكاء الاصطناعي، BYCI',
    date: '2025-01-15', readTimeEn: '6 min read', readTimeAr: '6 دقائق للقراءة', icon: 'Brain',
  },
  {
    id: 'pmp-certification-guide-2025',
    titleEn: 'The Complete Guide to PMP Certification in 2025', titleAr: 'الدليل الشامل لشهادة PMP في 2025',
    excerptEn: 'Everything you need to know about earning your PMP certification.',
    excerptAr: 'كل ما تحتاج معرفته للحصول على شهادة PMP.',
    contentEn: ['The Project Management Professional (PMP) certification remains one of the most valuable credentials a professional can earn.', 'The 2025 PMP exam follows the updated ECO that emphasizes three domains: People (42%), Process (50%), and Business Environment (8%).', 'Eligibility requirements include a four-year degree with 36 months of project management experience.', 'Our PMP preparation strategy at BYCI focuses on understanding concepts rather than memorization.', 'The career impact of PMP certification extends beyond salary increases.'],
    contentAr: ['تظل شهادة محترف إدارة المشاريع (PMP) واحدة من أكثر الاعتمادات قيمة.', 'يتبع امتحان PMP لعام 2025 المخطط المحدث الذي يركز على ثلاثة مجالات.', 'تشمل متطلبات الأهلية درجة جامعية مع 36 شهراً من الخبرة في إدارة المشاريع.', 'تركز استراتيجية التحضير لشهادة PMP في BYCI على فهم المفاهيم بدلاً من الحفظ.', 'يمتد الأثر المهني لشهادة PMP إلى ما وراء زيادات الرواتب.'],
    category: 'certifications', author: 'Eng. Noura Al-Hajri', authorRoleEn: 'PMP Program Lead, BYCI', authorRoleAr: 'قائدة برنامج PMP، BYCI',
    date: '2025-01-08', readTimeEn: '8 min read', readTimeAr: '8 دقائق للقراءة', icon: 'Award',
  },
  {
    id: 'leadership-skills-digital-age',
    titleEn: '5 Leadership Skills Every Manager Needs in the Digital Age', titleAr: '5 مهارات قيادية يحتاجها كل مدير في العصر الرقمي',
    excerptEn: 'The digital transformation demands a new type of leader.',
    excerptAr: 'يتطلب التحول الرقمي نوعاً جديداً من القادة.',
    contentEn: ['Leadership in 2025 looks fundamentally different from even five years ago.', 'Digital Fluency: Leaders must understand how technology creates value.', 'Adaptive Decision-Making: The pace of change means leaders must make decisions with incomplete information.', 'Emotional Intelligence at Scale: Managing distributed teams requires heightened emotional intelligence.', 'Continuous Learning Mindset: Leaders who model continuous learning will outperform those who don\'t.'],
    contentAr: ['تبدو القيادة في 2025 مختلفة جذرياً عما كانت عليه حتى قبل خمس سنوات.', 'الطلاقة الرقمية: يجب أن يفهم القادة كيف تخلق التكنولوجيا القيمة.', 'صنع القرار التكيفي: يجب أن يتخذ القادة قرارات بمعلومات غير مكتملة.', 'الذكاء العاطفي: إدارة فرق موزعة تتطلب ذكاءً عاطفياً متزايداً.', 'عقلية التعلم المستمر: القادة الذين يجسدون التعلم المستمر سيتفوقون على غيرهم.'],
    category: 'leadership', author: 'Dr. Rania Mahmoud', authorRoleEn: 'Leadership Program Director, BYCI', authorRoleAr: 'مديرة برنامج القيادة، BYCI',
    date: '2024-12-20', readTimeEn: '7 min read', readTimeAr: '7 دقائق للقراءة', icon: 'Users',
  },
  {
    id: 'cloud-computing-career-paths',
    titleEn: 'Cloud Computing Career Paths: AWS, Azure, and Beyond', titleAr: 'مسارات مهنية في الحوسبة السحابية',
    excerptEn: 'Cloud computing professionals are among the highest paid in tech.',
    excerptAr: 'يعد محترفو الحوسبة السحابية من بين الأعلى أجراً في مجال التكنولوجيا.',
    contentEn: ['Cloud computing has become the backbone of modern enterprise IT.', 'AWS remains the market leader with approximately 32% market share.', 'Entry-level cloud roles start with foundational certifications.', 'The salary premium for certified cloud professionals in the GCC is substantial.', 'BYCI cloud programs combine hands-on lab experience with certification preparation.'],
    contentAr: ['أصبحت الحوسبة السحابية العمود الفقري لتقنية المعلومات المؤسسية.', 'تظل AWS الرائدة في السوق بحصة تقارب 32%.', 'تبدأ أدوار السحابة للمبتدئين بشهادات أساسية.', 'العلاوة المالية لمحترفي السحابة المعتمدين في دول الخليج كبيرة.', 'تجمع برامج BYCI بين الخبرة العملية والتحضير للشهادات.'],
    category: 'career', author: 'James Chen', authorRoleEn: 'Cloud Computing Instructor, BYCI', authorRoleAr: 'مدرب الحوسبة السحابية، BYCI',
    date: '2024-12-10', readTimeEn: '5 min read', readTimeAr: '5 دقائق للقراءة', icon: 'Cloud',
  },
  {
    id: 'corporate-training-roi',
    titleEn: 'Measuring the ROI of Corporate Training Programs', titleAr: 'قياس العائد على الاستثمار في برامج التدريب المؤسسي',
    excerptEn: 'How to quantify the business impact of professional development.',
    excerptAr: 'كيفية قياس الأثر التجاري للتطوير المهني.',
    contentEn: ['One of the biggest challenges for L&D leaders is demonstrating ROI of training programs.', 'The Kirkpatrick Model provides a proven framework across four levels.', 'For technical training, ROI can be measured through productivity improvements.', 'Leadership programs often deliver the highest ROI over longer periods.', 'BYCI works with corporate clients to establish KPIs before training begins.'],
    contentAr: ['أحد أكبر التحديات هو إثبات العائد على الاستثمار من برامج التدريب.', 'يوفر نموذج كيركباتريك إطاراً مثبتاً عبر أربعة مستويات.', 'يمكن قياس العائد على التدريب التقني من خلال تحسينات الإنتاجية.', 'تتطلب برامج تطوير القيادة فترات تقييم أطول.', 'يعمل BYCI مع عملائه على تحديد مؤشرات الأداء قبل بدء التدريب.'],
    category: 'corporate', author: 'Sarah Thompson', authorRoleEn: 'Corporate Training Advisor, BYCI', authorRoleAr: 'مستشارة التدريب المؤسسي، BYCI',
    date: '2024-11-28', readTimeEn: '6 min read', readTimeAr: '6 دقائق للقراءة', icon: 'BarChart3',
  },
  {
    id: 'cybersecurity-threats-2025',
    titleEn: 'Top Cybersecurity Threats Facing GCC Organizations in 2025', titleAr: 'أبرز تهديدات الأمن السيبراني في 2025',
    excerptEn: 'From AI-powered attacks to supply chain vulnerabilities.',
    excerptAr: 'من الهجمات المدعومة بالذكاء الاصطناعي إلى ثغرات سلسلة التوريد.',
    contentEn: ['The cybersecurity landscape in the GCC has become increasingly complex.', 'AI-powered cyberattacks represent the most significant emerging threat.', 'Supply chain attacks have surged dramatically.', 'Ransomware continues to evolve targeting critical infrastructure.', 'The skills gap remains the fundamental challenge — the GCC needs 50,000 additional cybersecurity professionals by 2026.'],
    contentAr: ['أصبح مشهد الأمن السيبراني في دول الخليج معقداً بشكل متزايد.', 'تمثل الهجمات السيبرانية المدعومة بالذكاء الاصطناعي أبرز التهديدات الناشئة.', 'ارتفعت هجمات سلسلة التوريد بشكل كبير.', 'يستمر برنامج الفدية في التطور مستهدفاً البنية التحتية الحيوية.', 'تظل فجوة المهارات التحدي الأساسي.'],
    category: 'ai', author: 'Mohammed Al-Dosari', authorRoleEn: 'Cybersecurity Instructor, BYCI', authorRoleAr: 'مدرب الأمن السيبراني، BYCI',
    date: '2024-11-15', readTimeEn: '7 min read', readTimeAr: '7 دقائق للقراءة', icon: 'Shield',
  },
];

// ---- Migration functions ----

async function migratePrograms() {
  console.log('\n📚 Migrating programs...');
  for (const [i, p] of programs.entries()) {
    const doc = {
      _type: 'program',
      _id: `program-${p.id}`,
      id: { _type: 'slug', current: p.id },
      titleEn: p.titleEn, titleAr: p.titleAr,
      descriptionEn: p.descriptionEn, descriptionAr: p.descriptionAr,
      category: p.category, level: p.level,
      duration: p.duration, durationAr: p.durationAr,
      format: p.format, formatAr: p.formatAr,
      overviewEn: p.overviewEn, overviewAr: p.overviewAr,
      outcomesEn: p.outcomesEn, outcomesAr: p.outcomesAr,
      modulesEn: p.modulesEn.map((m) => ({ _type: 'bilingualModule', _key: randomUUID(), titleEn: m.title, titleAr: m.title, topics: m.topics })),
      modulesAr: p.modulesAr.map((m) => ({ _type: 'bilingualModule', _key: randomUUID(), titleEn: m.title, titleAr: m.title, topics: m.topics })),
      instructorEn: { _type: 'bilingualInstructor', name: p.instructorEn.name, bio: p.instructorEn.bio },
      instructorAr: { _type: 'bilingualInstructor', name: p.instructorAr.name, bio: p.instructorAr.bio },
      certificationEn: p.certificationEn, certificationAr: p.certificationAr,
      faqEn: p.faqEn.map((f) => ({ _type: 'bilingualFaq', _key: randomUUID(), qEn: f.q, qAr: f.q, aEn: f.a, aAr: f.a })),
      faqAr: p.faqAr.map((f) => ({ _type: 'bilingualFaq', _key: randomUUID(), qEn: f.q, qAr: f.q, aEn: f.a, aAr: f.a })),
      icon: p.icon,
      order: i + 1,
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${p.id}`);
  }
}

async function migrateBlogPosts() {
  console.log('\n📝 Migrating blog posts...');
  for (const a of blogArticles) {
    const doc = {
      _type: 'blogPost',
      _id: `blogPost-${a.id}`,
      id: { _type: 'slug', current: a.id },
      titleEn: a.titleEn, titleAr: a.titleAr,
      excerptEn: a.excerptEn, excerptAr: a.excerptAr,
      contentEn: a.contentEn, contentAr: a.contentAr,
      category: a.category, author: a.author,
      authorRoleEn: a.authorRoleEn, authorRoleAr: a.authorRoleAr,
      date: a.date, readTimeEn: a.readTimeEn, readTimeAr: a.readTimeAr,
      icon: a.icon,
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${a.id}`);
  }
}

async function migrateHomepageSettings() {
  console.log('\n🏠 Migrating homepage settings...');
  const doc = {
    _type: 'homepageSettings',
    _id: 'homepageSettings',
    heroSlides: [
      { _type: 'heroSlide', _key: randomUUID(), headlineEn: 'AI Mastery Bootcamp – Kuwait', headlineAr: 'معسكر إتقان الذكاء الاصطناعي – الكويت', subheadlineEn: 'Master artificial intelligence with hands-on training programs designed for professionals in the GCC region.', subheadlineAr: 'أتقن الذكاء الاصطناعي مع برامج تدريب عملية مصممة للمهنيين في منطقة الخليج.', ctaEn: 'Explore Program', ctaAr: 'استكشف البرنامج', secondaryCtaEn: 'View All Programs', secondaryCtaAr: 'عرض جميع البرامج' },
      { _type: 'heroSlide', _key: randomUUID(), headlineEn: 'Professional Certifications', headlineAr: 'الشهادات المهنية', subheadlineEn: 'Earn globally recognized certifications that accelerate your career and validate your expertise.', subheadlineAr: 'احصل على شهادات معترف بها دولياً تُسرّع مسيرتك المهنية.', ctaEn: 'Browse Certifications', ctaAr: 'تصفح الشهادات', secondaryCtaEn: 'Learn More', secondaryCtaAr: 'تعرف أكثر' },
      { _type: 'heroSlide', _key: randomUUID(), headlineEn: 'Corporate Training Solutions', headlineAr: 'حلول التدريب المؤسسي', subheadlineEn: 'Tailored training programs that transform your workforce and drive organizational growth.', subheadlineAr: 'برامج تدريب مخصصة تحوّل قوتك العاملة وتدفع النمو المؤسسي.', ctaEn: 'Request Consultation', ctaAr: 'طلب استشارة', secondaryCtaEn: 'See Our Approach', secondaryCtaAr: 'تعرف على نهجنا' },
      { _type: 'heroSlide', _key: randomUUID(), headlineEn: 'Emerging Technologies Programs', headlineAr: 'برامج التقنيات الناشئة', subheadlineEn: 'Stay ahead with cutting-edge programs in AI, Data Science, Cloud Computing, and Cybersecurity.', subheadlineAr: 'ابقَ في المقدمة مع برامج متطورة في الذكاء الاصطناعي وعلوم البيانات والسحابة.', ctaEn: 'Discover Programs', ctaAr: 'اكتشف البرامج', secondaryCtaEn: 'Contact Us', secondaryCtaAr: 'تواصل معنا' },
    ],
    stats: [
      { _type: 'statItem', _key: randomUUID(), value: '500+', labelEn: 'Graduates', labelAr: 'خريج' },
      { _type: 'statItem', _key: randomUUID(), value: '20+', labelEn: 'Programs', labelAr: 'برنامج' },
      { _type: 'statItem', _key: randomUUID(), value: '95%', labelEn: 'Pass Rate', labelAr: 'معدل النجاح' },
      { _type: 'statItem', _key: randomUUID(), value: '3', labelEn: 'Regions', labelAr: 'مناطق' },
    ],
    focusAreas: [
      { _type: 'focusArea', _key: randomUUID(), titleEn: 'AI & Emerging Technologies', titleAr: 'الذكاء الاصطناعي والتكنولوجيا', descriptionEn: 'Master AI, Machine Learning, Data Science, and cutting-edge technologies shaping the future of work.', descriptionAr: 'أتقن الذكاء الاصطناعي والتعلم الآلي وعلوم البيانات.' },
      { _type: 'focusArea', _key: randomUUID(), titleEn: 'Business & Leadership', titleAr: 'الأعمال والقيادة', descriptionEn: 'Develop strategic thinking, management skills, and leadership capabilities for career advancement.', descriptionAr: 'طوّر التفكير الاستراتيجي ومهارات الإدارة والقيادة.' },
      { _type: 'focusArea', _key: randomUUID(), titleEn: 'Professional Certifications', titleAr: 'الشهادات المهنية', descriptionEn: 'Prepare for globally recognized certifications including PMP, SHRM, AWS, and more.', descriptionAr: 'استعد للشهادات المعترف بها دولياً.' },
      { _type: 'focusArea', _key: randomUUID(), titleEn: 'Corporate Development', titleAr: 'التطوير المؤسسي', descriptionEn: 'Custom training solutions designed to align with organizational objectives and industry standards.', descriptionAr: 'حلول تدريب مخصصة لتتوافق مع الأهداف المؤسسية.' },
    ],
    whyPillars: [
      { _type: 'whyPillar', _key: randomUUID(), titleEn: 'Industry-Aligned', titleAr: 'متوافق مع الصناعة', descriptionEn: 'Curricula developed in partnership with industry leaders and subject matter experts.', descriptionAr: 'مناهج طورت بشراكة مع قادة الصناعة.' },
      { _type: 'whyPillar', _key: randomUUID(), titleEn: 'Structured Curriculum', titleAr: 'منهج منظم', descriptionEn: 'Methodical learning pathways with clear milestones and measurable outcomes.', descriptionAr: 'مسارات تعلم منهجية بمعالم واضحة ونتائج قابلة للقياس.' },
      { _type: 'whyPillar', _key: randomUUID(), titleEn: 'Expert-Led', titleAr: 'بقيادة خبراء', descriptionEn: 'Learn from certified professionals with extensive real-world experience.', descriptionAr: 'تعلم من محترفين معتمدين بخبرة واسعة في العالم الحقيقي.' },
      { _type: 'whyPillar', _key: randomUUID(), titleEn: 'Bilingual Support', titleAr: 'دعم ثنائي اللغة', descriptionEn: 'Full program delivery and support in both English and Arabic.', descriptionAr: 'تقديم البرامج والدعم الكامل باللغتين الإنجليزية والعربية.' },
    ],
    testimonials: [
      { _type: 'testimonialItem', _key: randomUUID(), nameEn: 'Ahmed Al-Rashidi', nameAr: 'أحمد الراشدي', roleEn: 'Senior Manager, Kuwait Finance House', roleAr: 'مدير أول، بيت التمويل الكويتي', textEn: 'The AI Mastery Bootcamp transformed how our team approaches data-driven decisions. BYCI delivered exactly what we needed.', textAr: 'غيّر معسكر إتقان الذكاء الاصطناعي طريقة تعامل فريقنا مع القرارات المدفوعة بالبيانات.' },
      { _type: 'testimonialItem', _key: randomUUID(), nameEn: 'Sarah Thompson', nameAr: 'سارة تومبسون', roleEn: 'HR Director, Gulf Energy Corp', roleAr: 'مديرة الموارد البشرية، شركة الطاقة الخليجية', textEn: "BYCI's corporate training program was exceptionally well-structured. Our team's productivity increased measurably within months.", textAr: 'كان برنامج التدريب المؤسسي من BYCI منظماً بشكل استثنائي.' },
      { _type: 'testimonialItem', _key: randomUUID(), nameEn: 'Dr. Fatima Al-Sabah', nameAr: 'د. فاطمة الصباح', roleEn: 'CTO, TechVentures Kuwait', roleAr: 'المدير التقني، تك فنتشرز الكويت', textEn: 'The bilingual delivery made it accessible for our entire diverse team. The certification prep courses have a remarkable pass rate.', textAr: 'جعل التقديم ثنائي اللغة البرنامج متاحاً لفريقنا المتنوع بالكامل.' },
    ],
  };
  await client.createOrReplace(doc);
  console.log('  ✓ homepageSettings');
}

async function migrateSiteSettings() {
  console.log('\n⚙️  Migrating site settings...');
  const doc = {
    _type: 'siteSettings',
    _id: 'siteSettings',
    phone: '+965 41103254',
    email: 'info@byciedu.com',
    addressEn: 'Kuwait City, Kuwait',
    addressAr: 'مدينة الكويت، الكويت',
    whatsappUrl: 'https://wa.me/96541103254',
    linkedinUrl: '',
    twitterUrl: '',
    instagramUrl: '',
    footerTaglineEn: 'Build Your Career Institute – Professional development for the modern workforce.',
    footerTaglineAr: 'معهد بناء مسيرتك المهنية – التطوير المهني للقوى العاملة الحديثة.',
  };
  await client.createOrReplace(doc);
  console.log('  ✓ siteSettings');
}

(async () => {
  console.log('🚀 Starting BYCI → Sanity migration...');
  await migratePrograms();
  await migrateBlogPosts();
  await migrateHomepageSettings();
  await migrateSiteSettings();
  console.log('\n✅ Migration complete!');
})().catch((err) => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
