export interface BlogArticle {
  id: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  contentEn: string[];
  contentAr: string[];
  category: 'ai' | 'leadership' | 'certifications' | 'career' | 'corporate';
  author: string;
  authorRoleEn: string;
  authorRoleAr: string;
  date: string;
  readTimeEn: string;
  readTimeAr: string;
  icon: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'ai-transforming-gcc-workforce',
    titleEn: 'How AI is Transforming the GCC Workforce in 2025',
    titleAr: 'كيف يحوّل الذكاء الاصطناعي القوى العاملة في دول الخليج في 2025',
    excerptEn: 'Artificial intelligence is reshaping industries across Kuwait and the Gulf region. Discover the key AI trends professionals need to prepare for.',
    excerptAr: 'يعيد الذكاء الاصطناعي تشكيل الصناعات في الكويت ومنطقة الخليج. اكتشف أبرز اتجاهات الذكاء الاصطناعي التي يحتاج المهنيون للاستعداد لها.',
    contentEn: [
      'The Gulf Cooperation Council region is undergoing a profound transformation driven by artificial intelligence. From financial services in Kuwait City to energy operations across the region, AI is no longer a future concept — it is an operational reality that professionals must understand and leverage.',
      'According to recent studies, AI adoption across GCC organizations has increased by over 40% in the past two years. Governments are investing heavily in national AI strategies, with Kuwait, Saudi Arabia, and the UAE leading the charge in digital transformation initiatives.',
      'For professionals, this means that AI literacy is no longer optional. Understanding how machine learning models work, how to interpret AI-driven analytics, and how to integrate AI tools into existing workflows has become a core competency across industries including banking, healthcare, energy, and government.',
      'At BYCI, our AI Mastery Bootcamp is designed specifically for GCC professionals who need practical, hands-on AI skills. The program covers everything from Python fundamentals to deploying machine learning models in production environments, with case studies drawn from regional industries.',
      'The key takeaway: professionals who invest in AI skills today will be positioned for leadership roles tomorrow. The demand for AI-literate managers and decision-makers far outstrips supply, creating significant career advancement opportunities for those who act now.',
    ],
    contentAr: [
      'تشهد منطقة مجلس التعاون الخليجي تحولاً عميقاً مدفوعاً بالذكاء الاصطناعي. من الخدمات المالية في مدينة الكويت إلى عمليات الطاقة في أنحاء المنطقة، لم يعد الذكاء الاصطناعي مفهوماً مستقبلياً — بل أصبح واقعاً تشغيلياً يجب على المهنيين فهمه والاستفادة منه.',
      'وفقاً لدراسات حديثة، زاد تبني الذكاء الاصطناعي في مؤسسات دول الخليج بأكثر من 40% خلال العامين الماضيين. تستثمر الحكومات بكثافة في استراتيجيات الذكاء الاصطناعي الوطنية.',
      'بالنسبة للمهنيين، هذا يعني أن محو الأمية في الذكاء الاصطناعي لم يعد اختيارياً. أصبح فهم كيفية عمل نماذج التعلم الآلي وكيفية تفسير التحليلات المدفوعة بالذكاء الاصطناعي كفاءة أساسية.',
      'في BYCI، تم تصميم معسكر إتقان الذكاء الاصطناعي خصيصاً للمهنيين في دول الخليج الذين يحتاجون مهارات عملية في الذكاء الاصطناعي.',
      'الخلاصة: المهنيون الذين يستثمرون في مهارات الذكاء الاصطناعي اليوم سيكونون في وضع يؤهلهم لأدوار قيادية غداً.',
    ],
    category: 'ai',
    author: 'Dr. Khalid Al-Mutairi',
    authorRoleEn: 'AI Program Director, BYCI',
    authorRoleAr: 'مدير برنامج الذكاء الاصطناعي، BYCI',
    date: '2025-01-15',
    readTimeEn: '6 min read',
    readTimeAr: '6 دقائق للقراءة',
    icon: 'Brain',
  },
  {
    id: 'pmp-certification-guide-2025',
    titleEn: 'The Complete Guide to PMP Certification in 2025',
    titleAr: 'الدليل الشامل لشهادة PMP في 2025',
    excerptEn: 'Everything you need to know about earning your PMP certification — from eligibility requirements to exam strategies and career impact.',
    excerptAr: 'كل ما تحتاج معرفته للحصول على شهادة PMP — من متطلبات الأهلية إلى استراتيجيات الامتحان والأثر المهني.',
    contentEn: [
      'The Project Management Professional (PMP) certification remains one of the most valuable credentials a professional can earn. In the GCC region, PMP-certified professionals command salaries 20-25% higher than their non-certified peers.',
      'The 2025 PMP exam follows the updated ECO (Examination Content Outline) that emphasizes three domains: People (42%), Process (50%), and Business Environment (8%). The exam includes 180 questions to be completed in 230 minutes.',
      'Eligibility requirements include a four-year degree with 36 months of project management experience, or a secondary degree with 60 months of experience. All candidates must also complete 35 hours of project management education.',
      'Our PMP preparation strategy at BYCI focuses on understanding concepts rather than memorization. We use scenario-based questions that mirror the actual exam format, helping participants develop the critical thinking skills needed to pass.',
      'The career impact of PMP certification extends beyond salary increases. Certified professionals report greater job satisfaction, more opportunities for advancement, and increased credibility with stakeholders and clients.',
    ],
    contentAr: [
      'تظل شهادة محترف إدارة المشاريع (PMP) واحدة من أكثر الاعتمادات قيمة التي يمكن للمهني الحصول عليها. في منطقة الخليج، يحصل حاملو شهادة PMP على رواتب أعلى بنسبة 20-25% من نظرائهم غير المعتمدين.',
      'يتبع امتحان PMP لعام 2025 المخطط المحدث الذي يركز على ثلاثة مجالات: الأفراد (42%)، والعمليات (50%)، وبيئة الأعمال (8%). يتضمن الامتحان 180 سؤالاً يجب إكمالها في 230 دقيقة.',
      'تشمل متطلبات الأهلية درجة جامعية مع 36 شهراً من الخبرة في إدارة المشاريع، أو شهادة ثانوية مع 60 شهراً من الخبرة.',
      'تركز استراتيجية التحضير لشهادة PMP في BYCI على فهم المفاهيم بدلاً من الحفظ. نستخدم أسئلة قائمة على السيناريوهات تحاكي شكل الامتحان الفعلي.',
      'يمتد الأثر المهني لشهادة PMP إلى ما وراء زيادات الرواتب. يبلّغ المحترفون المعتمدون عن رضا وظيفي أكبر وفرص أكثر للتقدم.',
    ],
    category: 'certifications',
    author: 'Eng. Noura Al-Hajri',
    authorRoleEn: 'PMP Program Lead, BYCI',
    authorRoleAr: 'قائدة برنامج PMP، BYCI',
    date: '2025-01-08',
    readTimeEn: '8 min read',
    readTimeAr: '8 دقائق للقراءة',
    icon: 'Award',
  },
  {
    id: 'leadership-skills-digital-age',
    titleEn: '5 Leadership Skills Every Manager Needs in the Digital Age',
    titleAr: '5 مهارات قيادية يحتاجها كل مدير في العصر الرقمي',
    excerptEn: 'The digital transformation demands a new type of leader. Here are the critical skills that separate effective managers from the rest.',
    excerptAr: 'يتطلب التحول الرقمي نوعاً جديداً من القادة. إليك المهارات الحاسمة التي تميز المدراء الفعالين عن غيرهم.',
    contentEn: [
      'Leadership in 2025 looks fundamentally different from even five years ago. The convergence of AI adoption, remote work models, and rapid market shifts requires managers to develop entirely new competencies.',
      'Digital Fluency: Leaders don\'t need to code, but they must understand how technology creates value. This means being conversant in AI capabilities, data analytics, and digital tools that drive productivity.',
      'Adaptive Decision-Making: The pace of change means leaders must make decisions with incomplete information more often. Building frameworks for rapid, iterative decision-making is essential.',
      'Emotional Intelligence at Scale: Managing distributed teams across cultures — particularly relevant in the GCC\'s diverse workforce — requires heightened emotional intelligence and cultural awareness.',
      'Continuous Learning Mindset: The half-life of professional skills is shrinking. Leaders who model continuous learning and create learning cultures within their organizations will outperform those who don\'t.',
      'Strategic Communication: In an era of information overload, the ability to communicate strategy clearly, concisely, and compellingly is a competitive advantage that separates exceptional leaders from competent managers.',
    ],
    contentAr: [
      'تبدو القيادة في 2025 مختلفة جذرياً عما كانت عليه حتى قبل خمس سنوات. يتطلب تقارب تبني الذكاء الاصطناعي ونماذج العمل عن بُعد والتحولات السريعة في السوق من المدراء تطوير كفاءات جديدة كلياً.',
      'الطلاقة الرقمية: لا يحتاج القادة للبرمجة، لكن يجب أن يفهموا كيف تخلق التكنولوجيا القيمة.',
      'صنع القرار التكيفي: تعني سرعة التغيير أن القادة يجب أن يتخذوا قرارات بمعلومات غير مكتملة بشكل أكثر تكراراً.',
      'الذكاء العاطفي على نطاق واسع: تتطلب إدارة فرق موزعة عبر ثقافات — ذات صلة خاصة بالقوى العاملة المتنوعة في دول الخليج — ذكاءً عاطفياً متزايداً.',
      'عقلية التعلم المستمر: يتقلص نصف عمر المهارات المهنية. القادة الذين يجسدون التعلم المستمر ويخلقون ثقافات تعلم سيتفوقون على غيرهم.',
      'التواصل الاستراتيجي: في عصر الحمل الزائد للمعلومات، تعد القدرة على إيصال الاستراتيجية بوضوح وإيجاز ميزة تنافسية تفصل القادة الاستثنائيين عن المدراء الأكفاء.',
    ],
    category: 'leadership',
    author: 'Dr. Rania Mahmoud',
    authorRoleEn: 'Leadership Program Director, BYCI',
    authorRoleAr: 'مديرة برنامج القيادة، BYCI',
    date: '2024-12-20',
    readTimeEn: '7 min read',
    readTimeAr: '7 دقائق للقراءة',
    icon: 'Users',
  },
  {
    id: 'cloud-computing-career-paths',
    titleEn: 'Cloud Computing Career Paths: AWS, Azure, and Beyond',
    titleAr: 'مسارات مهنية في الحوسبة السحابية: AWS وAzure وما بعدهما',
    excerptEn: 'Cloud computing professionals are among the highest paid in tech. Learn which certifications and skills will maximize your career potential.',
    excerptAr: 'يعد محترفو الحوسبة السحابية من بين الأعلى أجراً في مجال التكنولوجيا. تعرّف على الشهادات والمهارات التي ستعظّم إمكاناتك المهنية.',
    contentEn: [
      'Cloud computing has become the backbone of modern enterprise IT. As organizations across the GCC accelerate their digital transformation, demand for cloud professionals has surged dramatically.',
      'AWS remains the market leader with approximately 32% market share, followed by Microsoft Azure at 23% and Google Cloud at 10%. For professionals in the GCC, AWS and Azure are the most commonly requested skills.',
      'Entry-level cloud roles start with foundational certifications like AWS Cloud Practitioner or Azure Fundamentals. From there, professionals can specialize in solutions architecture, DevOps engineering, security, or data engineering.',
      'The salary premium for certified cloud professionals in the GCC is substantial. AWS Solutions Architect certified professionals earn 30-40% more than their non-certified counterparts, with senior roles commanding salaries well above market averages.',
      'At BYCI, our cloud computing programs combine hands-on lab experience with certification preparation. Students work with real AWS environments, build production-grade architectures, and receive full exam preparation support.',
    ],
    contentAr: [
      'أصبحت الحوسبة السحابية العمود الفقري لتقنية المعلومات المؤسسية الحديثة. مع تسارع المؤسسات في دول الخليج في التحول الرقمي، ارتفع الطلب على محترفي السحابة بشكل كبير.',
      'تظل AWS الرائدة في السوق بحصة تقارب 32%، تليها مايكروسوفت Azure بنسبة 23% وجوجل كلاود بنسبة 10%.',
      'تبدأ أدوار السحابة للمبتدئين بشهادات أساسية مثل AWS Cloud Practitioner أو Azure Fundamentals. من هناك، يمكن للمحترفين التخصص في هندسة الحلول أو DevOps أو الأمن أو هندسة البيانات.',
      'العلاوة المالية لمحترفي السحابة المعتمدين في دول الخليج كبيرة. يحصل حاملو شهادة AWS Solutions Architect على رواتب أعلى بنسبة 30-40% من نظرائهم غير المعتمدين.',
      'في BYCI، تجمع برامج الحوسبة السحابية بين الخبرة العملية في المختبرات والتحضير للشهادات. يعمل الطلاب مع بيئات AWS حقيقية ويبنون بنى معمارية جاهزة للإنتاج.',
    ],
    category: 'career',
    author: 'James Chen',
    authorRoleEn: 'Cloud Computing Instructor, BYCI',
    authorRoleAr: 'مدرب الحوسبة السحابية، BYCI',
    date: '2024-12-10',
    readTimeEn: '5 min read',
    readTimeAr: '5 دقائق للقراءة',
    icon: 'Cloud',
  },
  {
    id: 'corporate-training-roi',
    titleEn: 'Measuring the ROI of Corporate Training Programs',
    titleAr: 'قياس العائد على الاستثمار في برامج التدريب المؤسسي',
    excerptEn: 'How to quantify the business impact of professional development and make a compelling case for training investment.',
    excerptAr: 'كيفية قياس الأثر التجاري للتطوير المهني وتقديم حجة مقنعة للاستثمار في التدريب.',
    contentEn: [
      'One of the biggest challenges for L&D leaders is demonstrating the return on investment of training programs. Yet organizations that measure training ROI effectively are 3x more likely to increase their training budgets.',
      'The Kirkpatrick Model provides a proven framework: Level 1 (Reaction) measures participant satisfaction, Level 2 (Learning) assesses knowledge gains, Level 3 (Behavior) tracks on-the-job application, and Level 4 (Results) quantifies business impact.',
      'For technical training programs like AI or cloud computing, ROI can often be measured directly through productivity improvements, reduced error rates, faster project completion, and reduced reliance on external consultants.',
      'Leadership development programs require longer evaluation periods but often deliver the highest ROI. Organizations report improvements in employee retention, team productivity, and strategic execution after investing in leadership training.',
      'At BYCI, we work with our corporate clients to establish clear KPIs before training begins and provide post-program impact assessments. This data-driven approach ensures that training investments deliver measurable business value.',
    ],
    contentAr: [
      'أحد أكبر التحديات لقادة التعلم والتطوير هو إثبات العائد على الاستثمار من برامج التدريب. ومع ذلك، فإن المؤسسات التي تقيس عائد التدريب بفعالية أكثر عرضة 3 مرات لزيادة ميزانيات التدريب.',
      'يوفر نموذج كيركباتريك إطاراً مثبتاً: المستوى 1 (ردة الفعل) يقيس رضا المشاركين، والمستوى 2 (التعلم) يقيّم المكاسب المعرفية، والمستوى 3 (السلوك) يتتبع التطبيق في العمل، والمستوى 4 (النتائج) يحدد الأثر التجاري.',
      'بالنسبة لبرامج التدريب التقنية مثل الذكاء الاصطناعي أو الحوسبة السحابية، يمكن غالباً قياس العائد مباشرة من خلال تحسينات الإنتاجية وتقليل معدلات الخطأ.',
      'تتطلب برامج تطوير القيادة فترات تقييم أطول ولكنها غالباً تحقق أعلى عائد. تبلّغ المؤسسات عن تحسينات في الاحتفاظ بالموظفين وإنتاجية الفريق والتنفيذ الاستراتيجي.',
      'في BYCI، نعمل مع عملائنا المؤسسيين لتحديد مؤشرات أداء واضحة قبل بدء التدريب ونقدم تقييمات أثر ما بعد البرنامج.',
    ],
    category: 'corporate',
    author: 'Sarah Thompson',
    authorRoleEn: 'Corporate Training Advisor, BYCI',
    authorRoleAr: 'مستشارة التدريب المؤسسي، BYCI',
    date: '2024-11-28',
    readTimeEn: '6 min read',
    readTimeAr: '6 دقائق للقراءة',
    icon: 'BarChart3',
  },
  {
    id: 'cybersecurity-threats-2025',
    titleEn: 'Top Cybersecurity Threats Facing GCC Organizations in 2025',
    titleAr: 'أبرز تهديدات الأمن السيبراني التي تواجه مؤسسات الخليج في 2025',
    excerptEn: 'From AI-powered attacks to supply chain vulnerabilities, here are the cybersecurity threats every professional should understand.',
    excerptAr: 'من الهجمات المدعومة بالذكاء الاصطناعي إلى ثغرات سلسلة التوريد، إليك تهديدات الأمن السيبراني التي يجب على كل مهني فهمها.',
    contentEn: [
      'The cybersecurity landscape in the GCC has become increasingly complex. With rapid digital transformation across government and private sector organizations, the attack surface has expanded dramatically.',
      'AI-powered cyberattacks represent the most significant emerging threat. Attackers are using machine learning to create more convincing phishing campaigns, automate vulnerability discovery, and evade traditional security controls.',
      'Supply chain attacks have also surged, with organizations being compromised through trusted third-party software and services. The interconnected nature of modern business means that a vulnerability in one vendor can cascade across entire industries.',
      'Ransomware continues to evolve, with threat actors increasingly targeting critical infrastructure and demanding larger ransoms. GCC organizations in energy, finance, and healthcare are particularly high-value targets.',
      'The skills gap remains the fundamental challenge. The GCC needs an estimated 50,000 additional cybersecurity professionals by 2026. At BYCI, our Cybersecurity Essentials program addresses this gap by preparing professionals for roles in security operations, incident response, and compliance.',
    ],
    contentAr: [
      'أصبح مشهد الأمن السيبراني في دول الخليج معقداً بشكل متزايد. مع التحول الرقمي السريع عبر مؤسسات القطاعين الحكومي والخاص، توسع سطح الهجوم بشكل كبير.',
      'تمثل الهجمات السيبرانية المدعومة بالذكاء الاصطناعي أبرز التهديدات الناشئة. يستخدم المهاجمون التعلم الآلي لإنشاء حملات تصيد أكثر إقناعاً.',
      'كما ارتفعت هجمات سلسلة التوريد، حيث يتم اختراق المؤسسات من خلال برامج وخدمات طرف ثالث موثوق بها.',
      'يستمر برنامج الفدية في التطور، حيث يستهدف الفاعلون بشكل متزايد البنية التحتية الحيوية. مؤسسات الخليج في قطاعات الطاقة والمالية والرعاية الصحية هي أهداف عالية القيمة.',
      'تظل فجوة المهارات التحدي الأساسي. يحتاج الخليج إلى ما يقدر بـ 50,000 متخصص إضافي في الأمن السيبراني بحلول 2026. في BYCI، يعالج برنامج أساسيات الأمن السيبراني هذه الفجوة.',
    ],
    category: 'ai',
    author: 'Mohammed Al-Dosari',
    authorRoleEn: 'Cybersecurity Instructor, BYCI',
    authorRoleAr: 'مدرب الأمن السيبراني، BYCI',
    date: '2024-11-15',
    readTimeEn: '7 min read',
    readTimeAr: '7 دقائق للقراءة',
    icon: 'Shield',
  },
];

export const getBlogCategoryLabel = (cat: string, lang: 'en' | 'ar') => {
  const labels: Record<string, { en: string; ar: string }> = {
    ai: { en: 'AI & Technology', ar: 'الذكاء الاصطناعي والتكنولوجيا' },
    leadership: { en: 'Leadership', ar: 'القيادة' },
    certifications: { en: 'Certifications', ar: 'الشهادات' },
    career: { en: 'Career Development', ar: 'التطوير المهني' },
    corporate: { en: 'Corporate Training', ar: 'التدريب المؤسسي' },
  };
  return labels[cat]?.[lang] || cat;
};
