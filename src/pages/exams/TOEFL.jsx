import ExamPage from '../../components/shared/ExamPage';

const sections = [
  {
    heading: 'Overview',
    paragraphs: [
      'The Test of English as a Foreign Language (TOEFL) measures how well non-native speakers can use and understand English in an academic setting. It is developed and administered by ETS (Educational Testing Service).',
      'Scores are widely used for admission to undergraduate and graduate programs in the United States and Canada, and are accepted by thousands of institutions worldwide when proof of English proficiency is required.',
    ],
    table: {
      headers: ['Detail', 'Information'],
      rows: [
        ['Full form', 'Test of English as a Foreign Language'],
        ['Official website', 'ets.org/toefl'],
        ['Conducting body', 'ETS (Educational Testing Service)'],
        ['Typically accepted by', 'US and Canadian universities; many global institutions'],
        ['Mode', 'TOEFL iBT at test centres; TOEFL Home Edition; select regions may offer other options'],
        ['Fees (indicative)', 'Around USD 285 (varies by country and test type)'],
        ['Score range', '0–30 per section; total scaled score 0–120'],
      ],
    },
  },
  {
    heading: 'TOEFL iBT format',
    subheading: 'Classic vs shorter test experience',
    paragraphs: [
      'The internet-based test covers Reading, Listening, Speaking, and Writing. ETS has offered a more compact schedule in recent years; exact timing can vary slightly by form and centre.',
    ],
    table: {
      headers: ['Section', 'Earlier-style iBT (approx.)', 'Shorter iBT-style (approx.)'],
      rows: [
        ['Reading', 'About 54–72 minutes; 3–4 passages, ~30–40 questions', 'About 35 minutes; 2 passages, 20 questions'],
        ['Listening', 'About 41–57 minutes; lectures and conversations, ~28–39 questions', 'About 36 minutes; 28 questions'],
        ['Speaking', 'About 20 minutes; 6 tasks', 'About 16 minutes; 4 tasks'],
        ['Writing', 'About 50 minutes; integrated + independent tasks', 'About 29 minutes; integrated + “Write for an Academic Discussion” style task'],
      ],
    },
  },
  {
    heading: 'Types of TOEFL',
    paragraphs: [
      'TOEFL iBT is the standard computer-delivered exam taken at authorised test centres, with full proctoring and on-site equipment.',
      'The Home Edition is the same iBT content taken online from home, monitored by a human proctor via camera and screen sharing, where available and if you meet environment and equipment rules.',
    ],
  },
  {
    cta: 'Want to learn how to ace the TOEFL? Get expert guidance from Ancile Academy.',
  },
  {
    heading: 'Eligibility',
    paragraphs: [
      'ETS does not enforce degree or age cut-offs for the TOEFL. Candidates usually sit the test when applying to English-medium programs.',
      'In practice, most applicants have completed secondary education (e.g. 10+2 or equivalent) or are enrolled in higher study, since universities expect that level of academic English.',
    ],
  },
  {
    heading: 'Exam fee (indicative, USD)',
    paragraphs: [
      'Fees depend on country, currency, and product. Use the official registration site for your location for exact amounts.',
    ],
    table: {
      headers: ['Test type', 'Typical fee range (USD)'],
      rows: [
        ['TOEFL iBT (test centre)', '$200–235'],
        ['TOEFL Home Edition', '$200–235'],
        ['TOEFL Essential (where offered)', '$100–120'],
      ],
    },
  },
  {
    heading: 'Registration',
    paragraphs: ['Register through your ETS account. Typical steps:'],
    bullets: [
      'Step 1: Create or sign in to an ETS account and choose TOEFL iBT (or Home Edition if applicable).',
      'Step 2: Select your country or region and confirm ID requirements for test day.',
      'Step 3: Pick a test date and either a test centre or Home Edition slot, depending on availability.',
      'Step 4: Complete the registration form and review personal details carefully.',
      'Step 5: Pay the exam fee with an accepted method; keep the confirmation email.',
      'Step 6: Note your appointment, prepare your ID and equipment (especially for Home Edition), and plan arrival or login time.',
    ],
  },
  {
    heading: 'Syllabus',
    paragraphs: [
      'Reading: Academic passages with multiple-choice items; emphasis on main ideas, supporting detail, inference, vocabulary in context, and how information is structured.',
      'Listening: Lectures and campus-style conversations; questions target gist, detail, speaker intent, and how ideas connect.',
      'Speaking: Short integrated and independent responses via microphone—familiar topics plus tasks that combine reading and/or listening.',
      'Writing: An integrated task that relates reading and listening to a written response, plus a second task that may be independent or discussion-style depending on the form you take.',
    ],
  },
  {
    heading: 'Results and scores',
    paragraphs: [
      'Each of the four sections is scored from 0 to 30; the total score is 0–120. Official score reports are usually available within about 6–10 days after the test date for iBT.',
      'Scores are valid for two years from the test date; institutions rely on that window for admissions decisions.',
    ],
  },
  {
    heading: 'How to prepare',
    bullets: [
      'Diagnose weak areas early with one full-length official-style practice test under timed conditions.',
      'Build academic vocabulary and note-taking habits; listening and integrated tasks reward concise, organised notes.',
      'Practise speaking aloud with a timer; record yourself and compare to task rubrics.',
      'Write regularly: summarise lectures and argue a clear position within word and time limits.',
      'Use official ETS materials and, if needed, structured coaching to target score gaps efficiently.',
    ],
  },
];

export default function TOEFL() {
  return (
    <ExamPage
      title="TOEFL"
      breadcrumbs={[
        { label: 'Exams' },
        { label: 'English Language Proficiency' },
        { label: 'TOEFL' },
      ]}
      subtitle="TOEFL Exam Overview 2026 — Test More, Learn Better, Score High."
      image="/EXAMS/TOEFL.webp"
      sections={sections}
    />
  );
}
