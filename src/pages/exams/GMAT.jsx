import ExamPage from '../../components/shared/ExamPage';

const sections = [
  {
    heading: 'Overview',
    paragraphs: [
      'The Graduate Management Admission Test (GMAT) is owned and administered by the Graduate Management Admission Council (GMAC). It is designed for candidates applying to MBA and other graduate business programmes.',
      'The GMAT is accepted by more than 7,700 programmes worldwide. Alongside your academic record and experience, a competitive score can support admission to top business schools.',
    ],
  },
  {
    heading: 'GMAT at a Glance',
    table: {
      headers: ['Detail', 'Information'],
      rows: [
        ['Full form', 'Graduate Management Admission Test'],
        ['Conducting body', 'GMAC (Graduate Management Admission Council)'],
        ['Edition', 'GMAT Focus Edition (current shorter format)'],
        ['Duration', 'Approximately 2 hours 15 minutes (including instructions and optional breaks per official rules)'],
        ['Score range', '205–805 (total score scale for the Focus Edition)'],
        ['Fee', '$275 (standard; confirm current fees on mba.com for your region)'],
        ['Validity', '5 years'],
      ],
    },
  },
  {
    heading: 'GMAT Focus Edition',
    paragraphs: [
      'The GMAT Focus Edition is a shorter, three-section exam that emphasises skills relevant to business school success: quantitative reasoning, verbal reasoning, and data insights. It replaces the longer legacy format for most new test-takers planning for 2026 admissions cycles.',
    ],
  },
  {
    heading: 'GMAT Focus Edition Format',
    table: {
      headers: ['Section', 'Duration', 'Questions'],
      rows: [
        ['Data Insights', '45 minutes', '20 questions'],
        ['Quantitative Reasoning', '45 minutes', '21 questions'],
        ['Verbal Reasoning', '45 minutes', '23 questions'],
      ],
    },
    paragraphs: [
      'Section order and break policies are defined by GMAC; always confirm details in your appointment confirmation and on mba.com before test day.',
    ],
  },
  {
    heading: 'Eligibility',
    paragraphs: [
      'Candidates must be at least 18 years of age. A valid passport is typically required as primary identification for international test-takers; regional rules may allow other government-issued IDs—verify GMAC’s current ID policy for your test centre or online delivery.',
    ],
  },
  {
    cta: 'Planning for GMAT? Connect with Ancile Academy for expert guidance.',
  },
  {
    heading: 'Fee Details',
    paragraphs: [
      'The standard GMAT Focus Edition fee is commonly $275, with variation by location. Rescheduling and cancellation fees apply based on how far in advance you change your appointment; review GMAC’s fee schedule when you register.',
      'Additional services (score reports, enhanced score verification) may incur separate charges listed on the official website.',
    ],
  },
  {
    heading: 'Registration',
    bullets: [
      'Create an account on mba.com (official GMAT site).',
      'Choose GMAT Focus Edition, then select online or test-centre delivery where available.',
      'Pick a date and location (or online slot) that fits your application timeline.',
      'Pay the registration fee and save your confirmation.',
      'Upload or verify ID requirements and review test-day policies.',
      'Add score recipients if required before or after the exam per GMAC rules.',
    ],
  },
  {
    heading: 'Scoring System',
    paragraphs: [
      'Total scores on the GMAT Focus Edition are reported on a 205–805 scale. Section scores and percentile rankings help schools compare your performance with other test-takers; percentiles are updated periodically and appear on your official score report.',
      'You can review GMAC documentation for how composite scores are derived from the three sections.',
    ],
  },
  {
    heading: 'Preparation Tips',
    bullets: [
      'Take an official practice exam early to identify strengths and gaps across all three sections.',
      'Study Data Insights formats (multi-source reasoning, graphics, tables) alongside traditional Quant and Verbal.',
      'Use timed sets to build stamina for three 45-minute sections back-to-back.',
      'Review official GMAC guides and question banks for authentic item styles.',
      'Maintain an error log and revisit weak topics weekly.',
      'Align your test date with first-round and second-round MBA deadlines.',
    ],
  },
];

export default function GMAT() {
  return (
    <ExamPage
      title="GMAT Exam Guide 2026"
      breadcrumbs={[
        { label: 'Exams' },
        { label: 'Standard Exams' },
        { label: 'GMAT' },
      ]}
      subtitle="Graduate Management Admission Test — For Top MBA Programs"
      image="/EXAMS/GMAT.webp"
      sections={sections}
    />
  );
}
