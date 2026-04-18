/**
 * Centralized search index for the entire site.
 * Both the Navbar search and Hero landing-page search use this data.
 *
 * Each item shape:
 *   label       – display name
 *   path        – React Router path to navigate to
 *   type        – category key: 'Country' | 'Exam' | 'Service' | 'Page'
 *   description – short one-liner shown in the dropdown
 *   keywords    – extra strings to match (not shown)
 */

export const SEARCH_DATA = [
  // ─── Countries ───────────────────────────────────────────────────────────
  {
    label: 'Study in USA',
    path: '/countries/usa',
    type: 'Country',
    description: 'Top universities & diverse programs',
    keywords: ['united states', 'america', 'us'],
  },
  {
    label: 'Study in UK',
    path: '/countries/uk',
    type: 'Country',
    description: 'World-renowned education system',
    keywords: ['united kingdom', 'britain', 'england'],
  },
  {
    label: 'Study in Canada',
    path: '/countries/canada',
    type: 'Country',
    description: 'Affordable education with work opportunities',
    keywords: ['canadian'],
  },
  {
    label: 'Study in Dubai',
    path: '/countries/dubai',
    type: 'Country',
    description: 'International hub with tax-free growth',
    keywords: ['uae', 'emirates', 'united arab'],
  },
  {
    label: 'Study in Australia',
    path: '/countries/australia',
    type: 'Country',
    description: 'Vibrant student life & top institutions',
    keywords: ['aussie'],
  },
  {
    label: 'Study in New Zealand',
    path: '/countries/new-zealand',
    type: 'Country',
    description: 'World-class education in stunning scenery',
    keywords: ['nz', 'kiwi'],
  },
  {
    label: 'Study in Ireland',
    path: '/countries/ireland',
    type: 'Country',
    description: "Europe's English-speaking tech hub",
    keywords: ['irish', 'dublin'],
  },
  {
    label: 'Study in Europe',
    path: '/countries/europe',
    type: 'Country',
    description: 'Diverse cultures & affordable tuition',
    keywords: ['germany', 'france', 'netherlands', 'schengen'],
  },

  // ─── Exams ───────────────────────────────────────────────────────────────
  {
    label: 'IELTS',
    path: '/exams/ielts',
    type: 'Exam',
    description: 'International English Language Testing System',
    keywords: ['english', 'test', 'band'],
  },
  {
    label: 'TOEFL',
    path: '/exams/toefl',
    type: 'Exam',
    description: 'Test of English as a Foreign Language',
    keywords: ['english', 'test', 'ets'],
  },
  {
    label: 'PTE',
    path: '/exams/pte',
    type: 'Exam',
    description: 'Pearson Test of English',
    keywords: ['pearson', 'english', 'test'],
  },
  {
    label: 'Duolingo English Test',
    path: '/exams/duolingo',
    type: 'Exam',
    description: 'Convenient online English proficiency test',
    keywords: ['duolingo', 'det', 'english'],
  },
  {
    label: 'OET',
    path: '/exams/oet',
    type: 'Exam',
    description: 'Occupational English Test for healthcare',
    keywords: ['occupational', 'healthcare', 'medical'],
  },
  {
    label: 'SAT',
    path: '/exams/sat',
    type: 'Exam',
    description: 'Scholastic Assessment Test (Undergraduate)',
    keywords: ['undergraduate', 'college board'],
  },
  {
    label: 'GRE',
    path: '/exams/gre',
    type: 'Exam',
    description: 'Graduate Record Examination',
    keywords: ['graduate', 'postgrad', 'masters'],
  },
  {
    label: 'GMAT',
    path: '/exams/gmat',
    type: 'Exam',
    description: 'Graduate Management Admission Test',
    keywords: ['mba', 'management', 'business'],
  },

  // ─── Services ────────────────────────────────────────────────────────────
  {
    label: 'University Selection',
    path: '/services',
    type: 'Service',
    description: 'Find the perfect program & institution',
    keywords: ['counselling', 'admission', 'apply'],
  },
  {
    label: 'Visa Guidance',
    path: '/services',
    type: 'Service',
    description: 'Expert help navigating the visa process',
    keywords: ['visa', 'student visa', 'immigration'],
  },
  {
    label: 'Scholarship Assistance',
    path: '/services',
    type: 'Service',
    description: 'Maximize your chances of financial aid',
    keywords: ['scholarship', 'funding', 'grant', 'financial aid'],
  },
  {
    label: 'Test Preparation',
    path: '/services',
    type: 'Service',
    description: 'Personalized coaching for IELTS, TOEFL & more',
    keywords: ['coaching', 'prep', 'training'],
  },
  {
    label: 'English Coaching',
    path: '/english-coaching',
    type: 'Service',
    description: 'Build fluency with expert English tutors',
    keywords: ['english', 'spoken', 'fluency', 'language'],
  },
  {
    label: 'SOP Writing',
    path: '/services',
    type: 'Service',
    description: 'Craft a winning Statement of Purpose',
    keywords: ['statement of purpose', 'essay', 'lor'],
  },

  // ─── Pages ───────────────────────────────────────────────────────────────
  {
    label: 'About Us',
    path: '/about',
    type: 'Page',
    description: 'Our story, mission and expert team',
    keywords: ['team', 'who we are', 'company'],
  },
  {
    label: 'Contact Us',
    path: '/contact',
    type: 'Page',
    description: 'Get in touch — we\'re here to help',
    keywords: ['contact', 'phone', 'email', 'address'],
  },
  {
    label: 'Blog',
    path: '/blog',
    type: 'Page',
    description: 'Tips, guides and the latest news',
    keywords: ['articles', 'news', 'updates'],
  },
  {
    label: 'Resources',
    path: '/resources',
    type: 'Page',
    description: 'Free downloads, guides and tools',
    keywords: ['free', 'download', 'guide'],
  },
  {
    label: 'Get Started',
    path: '/get-started',
    type: 'Page',
    description: 'Begin your study-abroad journey today',
    keywords: ['start', 'apply', 'register', 'free counselling'],
  },
  {
    label: 'All Study Destinations',
    path: '/countries',
    type: 'Page',
    description: 'Browse every country we support',
    keywords: ['countries', 'destinations', 'explore'],
  },
  {
    label: 'All Services',
    path: '/services',
    type: 'Page',
    description: 'See everything Ancile Academy offers',
    keywords: ['services', 'offerings'],
  },
];

/** Category display metadata */
export const TYPE_META = {
  Country: {
    label: 'Study Destinations',
    badgeClass: 'bg-blue-50 text-blue-700 border border-blue-100',
    dotClass: 'bg-blue-500',
  },
  Exam: {
    label: 'Exams & Tests',
    badgeClass: 'bg-amber-50 text-amber-700 border border-amber-100',
    dotClass: 'bg-amber-500',
  },
  Service: {
    label: 'Our Services',
    badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    dotClass: 'bg-emerald-500',
  },
  Page: {
    label: 'Pages',
    badgeClass: 'bg-gray-100 text-gray-600 border border-gray-200',
    dotClass: 'bg-gray-400',
  },
};

/**
 * Filter & score items against a query string.
 * Returns items sorted by relevance (label prefix > label contains > keyword match).
 */
export function searchItems(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results = [];

  for (const item of SEARCH_DATA) {
    const labelLower = item.label.toLowerCase();
    const descLower = (item.description || '').toLowerCase();
    const keywordsLower = (item.keywords || []).join(' ');

    let score = 0;
    if (labelLower.startsWith(q)) score = 100;
    else if (labelLower.includes(q)) score = 80;
    else if (descLower.includes(q)) score = 60;
    else if (keywordsLower.includes(q)) score = 40;

    if (score > 0) results.push({ ...item, _score: score });
  }

  return results.sort((a, b) => b._score - a._score);
}

/** Popular / default items shown when search box is focused but empty */
export const POPULAR_ITEMS = [
  SEARCH_DATA.find((i) => i.label === 'Study in UK'),
  SEARCH_DATA.find((i) => i.label === 'Study in USA'),
  SEARCH_DATA.find((i) => i.label === 'Study in Canada'),
  SEARCH_DATA.find((i) => i.label === 'IELTS'),
  SEARCH_DATA.find((i) => i.label === 'Visa Guidance'),
  SEARCH_DATA.find((i) => i.label === 'Get Started'),
].filter(Boolean);
