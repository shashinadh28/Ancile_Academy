import ExamPage from '../../components/shared/ExamPage';

const sections = [
  {
    heading: 'Overview',
    paragraphs: [
      'The Occupational English Test (OET) is an international English language exam designed specifically for healthcare professionals. It is owned by Cambridge Boxhill Language Assessment (CBLA), a venture between Cambridge Assessment English and Box Hill Institute.',
      'OET assesses the language skills needed to register and practise in an English-speaking healthcare environment. It is available for twelve registered healthcare professions and is recognised by more than fifteen regulatory councils, employers, and universities worldwide—making it a focused alternative to general academic English tests when your goal is clinical or allied-health registration abroad.',
    ],
  },
  {
    heading: 'Global acceptance',
    subheading: 'Where OET is recognised',
    bullets: [
      'United Kingdom: accepted by the Nursing and Midwifery Council (NMC) and other UK healthcare regulators for registration and visa-related English evidence where applicable.',
      'Australia: recognised by the Australian Health Practitioner Regulation Agency (AHPRA) and relevant National Boards for many professions.',
      'New Zealand: accepted by New Zealand regulatory authorities for healthcare registration pathways, subject to each council’s current policy.',
      'Additional countries and institutions also recognise OET; always confirm the latest requirements with your target regulator or employer before you book.',
    ],
  },
  {
    heading: 'Registered healthcare professions',
    subheading: 'Twelve professions covered by OET',
    paragraphs: [
      'OET offers profession-specific content so reading, writing, and speaking tasks reflect real workplace scenarios for your field.',
    ],
    table: {
      headers: ['Profession', 'Profession'],
      rows: [
        ['Dentistry', 'Dietetics'],
        ['Medicine', 'Nursing'],
        ['Occupational therapy', 'Optometry'],
        ['Pharmacy', 'Physiotherapy'],
        ['Podiatry', 'Radiography'],
        ['Speech pathology', 'Veterinary science'],
      ],
    },
  },
  {
    heading: 'Delivery modes',
    subheading: 'How you can take OET',
    table: {
      headers: ['Mode', 'Description'],
      rows: [
        [
          'On-paper',
          'Traditional test delivered at an authorised test venue with paper-based materials; suitable if you prefer a familiar format or where computer delivery is limited.',
        ],
        [
          'On-computer',
          'Taken at a test centre on secure computer equipment; results are typically available quickly for most skills, with a structured test-day experience.',
        ],
        [
          'OET@Home',
          'Remote proctored option allowing you to complete the test from a suitable private location, subject to equipment, identity, and environment checks.',
        ],
      ],
    },
  },
  {
    heading: 'Exam fees (indicative)',
    subheading: 'Pricing by number of sub-tests',
    paragraphs: [
      'Fees vary by region and currency. The figures below reflect commonly published OET pricing; confirm the exact amount in your local currency when you register.',
    ],
    table: {
      headers: ['Package', 'Fee (AUD)', 'Fee (USD)'],
      rows: [
        ['All four sub-tests (Listening, Reading, Writing, Speaking)', 'AU$587', 'US$455'],
        ['Three sub-tests', 'AU$515', '—'],
        ['Two sub-tests', 'AU$415', '—'],
        ['One sub-test', 'AU$315', '—'],
      ],
    },
  },
  {
    cta: 'Connect with Ancile Academy exam experts for OET guidance.',
  },
  {
    heading: 'Eligibility',
    subheading: 'Who can take OET',
    bullets: [
      'You should be preparing for or working in one of the twelve healthcare professions that OET serves, as tasks are tailored to clinical communication.',
      'Candidates are generally required to be at least 18 years old on the test date.',
      'A valid passport (or other ID accepted by OET for your region) is required for registration and on test day for identity verification.',
    ],
  },
  {
    heading: 'Registration',
    subheading: 'Steps to book your test',
    bullets: [
      'Create or sign in to your account on the official OET booking platform (myOET).',
      'Select your profession so that Writing and Speaking are scored for the correct role-specific criteria.',
      'Choose your delivery mode (on-paper, on-computer, or OET@Home) and an available test date and location or session.',
      'Complete your personal details exactly as they appear on your ID document.',
      'Pay the test fee for the number of sub-tests you need; download and retain your confirmation and preparation materials.',
      'Review test-day rules, technical requirements (especially for OET@Home), and arrive or log in with valid ID as instructed.',
    ],
  },
  {
    heading: 'Exam pattern',
    subheading: 'Structure and timing',
    table: {
      headers: ['Sub-test', 'Duration'],
      rows: [
        ['Listening', 'Approximately 45 minutes'],
        ['Reading', '60 minutes'],
        ['Writing', '45 minutes'],
        ['Speaking', 'Approximately 20 minutes'],
      ],
    },
  },
  {
    heading: 'Scoring',
    paragraphs: [
      'Each sub-test is scored on a scale from 0 to 500. You receive a separate numeric score for Listening, Reading, Writing, and Speaking.',
      'Scores are reported as letter grades from A (highest) through E (lowest), reflecting workplace-ready communication at each level. Most regulators specify a minimum grade (often B or C+) in each sub-test—check your council’s current English language policy.',
    ],
  },
  {
    heading: 'Grading scale (reference)',
    subheading: 'Numeric scores, grades, and indicative IELTS comparison',
    paragraphs: [
      'The table below summarises typical OET numeric bands and letter grades. Exact boundaries can vary slightly by sub-test and version; IELTS equivalents are indicative only—regulators publish their own requirements.',
    ],
    table: {
      headers: ['Score range (typical)', 'Grade', 'IELTS equivalent (approx.)', 'Proficiency level'],
      rows: [
        ['450–500', 'A', '8.0–9.0', 'Very high—fluent, accurate communication'],
        ['350–449', 'B', '7.0–7.5', 'High—effective clinical communication'],
        ['300–349', 'C+', '6.5–7.0', 'Good—generally adequate with minor limitations'],
        ['200–299', 'C', '6.0–6.5', 'Adequate for some contexts; may need support'],
        ['100–199', 'D', '5.0–5.5', 'Limited—frequent errors affecting clarity'],
        ['0–99', 'E', 'Below 5.0', 'Low—does not meet typical registration standards'],
      ],
    },
  },
  {
    heading: 'Results and validity',
    paragraphs: [
      'For most on-computer and OET@Home sittings, results are released within about 48 hours after the test, subject to quality checks. On-paper results may follow a longer processing window.',
      'OET results are generally accepted as valid for two years by many institutions and regulators, though some bodies set their own validity period—always verify with your regulator.',
    ],
  },
];

export default function OET() {
  return (
    <ExamPage
      title="OET Exam Guide 2026"
      breadcrumbs={[
        { label: 'Exams' },
        { label: 'English Language Proficiency' },
        { label: 'OET' },
      ]}
      subtitle="Language Test for Healthcare Professionals"
      image="/EXAMS/International-English-Language-Testing-System.webp"
      sections={sections}
    />
  );
}
