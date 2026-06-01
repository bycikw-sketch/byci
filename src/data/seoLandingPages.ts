import { Award, BriefcaseBusiness, Building2, Brain, Cloud, Shield } from 'lucide-react';

export const seoLandingPages = [
  {
    slug: 'ai-course-kuwait',
    title: 'AI Course in Kuwait',
    headline: 'Practical AI Course in Kuwait for Professionals and Students',
    description:
      'Build practical AI skills for work, study, productivity, and business with BYCI training programs in Kuwait.',
    audience: 'Professionals, students, job seekers, and business owners in Kuwait and GCC.',
    keywords: ['AI course in Kuwait', 'artificial intelligence training Kuwait', 'AI training for professionals'],
    icon: Brain,
    relatedProgram: '/programs/ai-mastery-bootcamp',
    primaryCta: 'Explore AI Programs',
    outcomes: [
      'Understand AI fundamentals and real workplace use cases',
      'Learn prompt engineering and practical AI tools',
      'Apply AI to productivity, research, reports, and business workflows',
      'Prepare for advanced AI and data programs',
    ],
  },
  {
    slug: 'pmp-training-kuwait',
    title: 'PMP Training in Kuwait',
    headline: 'PMP Certification Training in Kuwait',
    description:
      'Prepare for the PMP certification with structured project management training, exam practice, and BYCI support.',
    audience: 'Project managers, engineers, team leads, and professionals preparing for PMP certification.',
    keywords: ['PMP training Kuwait', 'PMP course Kuwait', 'project management certification Kuwait'],
    icon: Award,
    relatedProgram: '/programs/pmp-certification-prep',
    primaryCta: 'View PMP Program',
    outcomes: [
      'Cover PMP exam domains with a structured curriculum',
      'Build exam confidence through guided preparation',
      'Understand project management frameworks and terminology',
      'Get support for professional certification readiness',
    ],
  },
  {
    slug: 'corporate-training-kuwait',
    title: 'Corporate Training in Kuwait',
    headline: 'Corporate Training Programs in Kuwait for Modern Teams',
    description:
      'BYCI designs corporate training programs for leadership, AI, productivity, certifications, and workforce development.',
    audience: 'HR teams, business owners, managers, and organizations in Kuwait and GCC.',
    keywords: ['corporate training Kuwait', 'employee training Kuwait', 'professional development Kuwait'],
    icon: Building2,
    relatedProgram: '/corporate',
    primaryCta: 'Request Corporate Training',
    outcomes: [
      'Identify skill gaps and workforce development priorities',
      'Deliver practical training aligned with business goals',
      'Support teams with bilingual learning options',
      'Track learning outcomes and training impact',
    ],
  },
  {
    slug: 'data-science-course-kuwait',
    title: 'Data Science Course in Kuwait',
    headline: 'Data Science Course in Kuwait with Practical Projects',
    description:
      'Learn data analysis, Python, SQL, dashboards, and applied analytics through BYCI data science training.',
    audience: 'Students, analysts, working professionals, and career changers.',
    keywords: ['data science course Kuwait', 'Python data analysis Kuwait', 'data analytics training Kuwait'],
    icon: BriefcaseBusiness,
    relatedProgram: '/programs/data-science-foundations',
    primaryCta: 'View Data Science Program',
    outcomes: [
      'Build foundations in data analysis and reporting',
      'Learn Python, SQL, and modern analytics workflows',
      'Create practical projects for portfolio development',
      'Apply data skills to business and career use cases',
    ],
  },
  {
    slug: 'cybersecurity-course-kuwait',
    title: 'Cybersecurity Course in Kuwait',
    headline: 'Cybersecurity Training in Kuwait for IT and Business Teams',
    description:
      'Develop cybersecurity fundamentals, threat awareness, network security, and incident response knowledge with BYCI.',
    audience: 'IT professionals, students, operations teams, and security-aware organizations.',
    keywords: ['cybersecurity course Kuwait', 'cyber security training Kuwait', 'network security course Kuwait'],
    icon: Shield,
    relatedProgram: '/programs/cybersecurity-essentials',
    primaryCta: 'View Cybersecurity Program',
    outcomes: [
      'Understand common cyber threats and risk areas',
      'Learn security fundamentals and response practices',
      'Build readiness for security-focused roles',
      'Support organizational security awareness',
    ],
  },
  {
    slug: 'cloud-computing-course-kuwait',
    title: 'Cloud Computing Course in Kuwait',
    headline: 'Cloud Computing and AWS Training in Kuwait',
    description:
      'Learn cloud concepts, AWS foundations, cloud architecture, and practical deployment skills with BYCI.',
    audience: 'IT professionals, students, engineers, and technical teams.',
    keywords: ['cloud computing course Kuwait', 'AWS training Kuwait', 'cloud certification Kuwait'],
    icon: Cloud,
    relatedProgram: '/programs/cloud-computing-aws',
    primaryCta: 'View Cloud Program',
    outcomes: [
      'Understand core cloud computing concepts',
      'Learn AWS services and architecture basics',
      'Build practical cloud deployment knowledge',
      'Prepare for cloud certification pathways',
    ],
  },
] as const;

export type SeoLandingPage = (typeof seoLandingPages)[number];
