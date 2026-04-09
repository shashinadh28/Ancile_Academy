import ExamPage from '../../components/shared/ExamPage';

const sections = [
  {
    heading: 'Overview',
    paragraphs: [
      'The Graduate Record Examinations (GRE) is a standardised test developed and administered by Educational Testing Service (ETS). It is widely used for admission to graduate programmes, including many business schools, and is accepted by thousands of institutions worldwide.',
      'A strong GRE score can strengthen your application alongside academic transcripts, recommendations, and other materials. Whether you are targeting master’s or doctoral programmes, understanding the test format and timeline helps you plan effectively.',
    ],
  },
  {
    heading: 'GRE at a Glance',
    table: {
      headers: ['Detail', 'Information'],
      rows: [
        ['Full form', 'Graduate Record Examinations'],
        ['Conducting body', 'ETS (Educational Testing Service)'],
        ['Mode', 'Computer-based (at test centres; at-home options may be available by region)'],
        ['Duration', 'Approximately 1 hour 58 minutes'],
        [
          'Score range',
          'Verbal Reasoning: 130–170; Quantitative Reasoning: 130–170; Analytical Writing: 0–6',
        ],
        ['Fee', '$220 (standard; confirm current fees on the official ETS website)'],
        ['Validity', '5 years from your test date'],
      ],
    },
  },
  {
    heading: 'Exam Structure',
    paragraphs: [
      'The GRE General Test measures verbal reasoning, quantitative reasoning, and analytical writing. Together, these skills reflect the type of thinking expected in graduate-level study.',
    ],
    bullets: [
      'Verbal Reasoning — reading comprehension, text completion, and vocabulary in context.',
      'Quantitative Reasoning — arithmetic, algebra, geometry, and data interpretation.',
      'Analytical Writing — one timed essay task assessing critical thinking and writing.',
    ],
  },
  {
    heading: 'GRE General Test Format',
    table: {
      headers: ['Section', 'Duration', 'Questions'],
      rows: [
        [
          'Verbal Reasoning',
          '~41 minutes total (two timed sections)',
          'Two sections, 27 questions each',
        ],
        [
          'Quantitative Reasoning',
          '~47 minutes total (two timed sections)',
          'Two sections, 27 questions each',
        ],
        ['Analytical Writing', '30 minutes', '1 essay task'],
      ],
    },
    paragraphs: [
      'Exact section order and break policies are confirmed in your appointment details and official ETS materials. Always refer to ets.org for the latest structure.',
    ],
  },
  {
    heading: 'Eligibility',
    paragraphs: [
      'ETS does not enforce degree-specific or age requirements for the GRE General Test. You must register with accurate personal information and present valid, acceptable identification on test day as specified by ETS for your testing location.',
    ],
  },
  {
    cta: 'Planning to take the GRE? Get expert guidance from Ancile Academy.',
  },
  {
    heading: 'Fee Details',
    paragraphs: [
      'The standard GRE General Test fee in many regions is $220. Fees can vary by country; check ETS for your location.',
      'Rescheduling typically incurs an additional fee (commonly around $50, subject to change). Cancellation and refund rules depend on how far in advance you cancel—review ETS policies when you book.',
    ],
  },
  {
    heading: 'Registration',
    bullets: [
      'Create or sign in to your ETS account at the official GRE website.',
      'Select the GRE General Test, choose a test centre or at-home option (if available), and pick a date.',
      'Complete your profile and pay the test fee with an accepted payment method.',
      'Review confirmation email, ID requirements, and test-day rules.',
      'Prepare required documents and arrive or log in early on test day.',
    ],
  },
  {
    heading: 'Scoring',
    paragraphs: [
      'Verbal and Quantitative scores are reported on a 130–170 scale in one-point increments. The Analytical Writing score is reported on a 0–6 scale in half-point increments.',
      'You will receive official score reporting timelines from ETS; unofficial scores for Verbal and Quant may be shown immediately after the test at the test centre, depending on administration type.',
    ],
  },
  {
    heading: 'Preparation Tips',
    bullets: [
      'Start with an official practice test to baseline your Verbal, Quant, and Writing skills.',
      'Use ETS official materials and timed practice to match the real exam pace.',
      'Build vocabulary and reading stamina for Verbal; drill core Quant concepts and data interpretation.',
      'Practice outlining and writing the AWA task under strict time limits.',
      'Review mistakes systematically and track weak areas over several weeks.',
      'Plan your test date so scores reach institutions before application deadlines.',
    ],
  },
];

export default function GRE() {
  return (
    <ExamPage
      title="GRE Exam Guide 2026"
      breadcrumbs={[
        { label: 'Exams' },
        { label: 'Standard Exams' },
        { label: 'GRE' },
      ]}
      subtitle="Graduate Record Examinations — Your Gateway to Graduate School"
      image="/EXAMS/GRE.webp"
      sections={sections}
    />
  );
}
