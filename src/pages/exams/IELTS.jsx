import ExamPage from '../../components/shared/ExamPage';

const sections = [
  {
    heading: 'What is IELTS?',
    paragraphs: [
      'The International English Language Testing System (IELTS) measures how well you can use English in academic, professional, and everyday settings. It assesses listening, reading, writing, and speaking through tasks designed to reflect real-world use of the language.',
      'Scores are reported as band levels from 0 to 9. The test is jointly managed by the British Council, IDP Education, and Cambridge Assessment English. Results are accepted by more than 12,000 organisations worldwide, including universities, employers, immigration authorities, and professional bodies.',
    ],
  },
  {
    heading: 'IELTS exam overview',
    subheading: 'Skills tested',
    paragraphs: [
      'The four papers evaluate complementary language skills. Together they give institutions a rounded picture of your English ability.',
    ],
    table: {
      headers: ['Skill', 'What it assesses'],
      rows: [
        [
          'Listening',
          'Understanding conversations and monologues in social, academic, and training contexts; following arguments, opinions, and factual detail.',
        ],
        [
          'Reading',
          'Locating information, understanding main ideas and detail, and interpreting argument and opinion from written texts appropriate to the test type.',
        ],
        [
          'Writing',
          'Organising ideas, using appropriate tone and register, and producing clear, coherent responses to visual data (Task 1) and essay prompts (Task 2).',
        ],
        [
          'Speaking',
          'Fluency, coherence, lexical range, grammatical accuracy, and pronunciation through a structured interview with an examiner.',
        ],
      ],
    },
  },
  {
    heading: 'Why is IELTS required?',
    paragraphs: [
      'Many gatekeepers use IELTS because it is standardised, widely recognised, and aligned with the Common European Framework of Reference (CEFR). Typical reasons organisations ask for a score include:',
    ],
    bullets: [
      'Education: undergraduate and postgraduate admissions, pathway and foundation programmes.',
      'Professional registration: licensing bodies in healthcare, law, engineering, and other regulated fields.',
      'Immigration: visa categories that specify English proof (often IELTS for UKVI where applicable).',
      'Employment: employers verifying workplace communication skills for international roles.',
    ],
  },
  {
    heading: 'IELTS eligibility',
    paragraphs: [
      'There is no upper age limit. Candidates are generally expected to be at least 16 years old; younger test-takers may be accepted at the discretion of the test centre. You do not need a minimum qualification to register, but you should choose Academic or General Training to match your goal.',
      'On test day you must present the same valid identity document you used to book—typically a passport or national ID as accepted by your centre. Requirements can vary slightly by country and centre, so confirm document rules when you register.',
    ],
    table: {
      headers: ['Requirement', 'Summary'],
      rows: [
        ['Minimum age', 'Usually 16+; check with your test centre if younger.'],
        ['ID', 'Valid passport or accepted national ID; must match registration details.'],
        ['Booking', 'Register online or via an authorised agent; choose module (Academic / General Training / UKVI as needed).'],
        ['Frequency', 'Tests are offered regularly; you may retake after any period allowed by your centre’s policy.'],
      ],
    },
  },
  {
    cta: 'Connect with an Ancile Academy counsellor for personalised support',
  },
  {
    heading: 'IELTS exam duration',
    paragraphs: [
      'The Listening, Reading, and Writing sections are completed in one sitting without a break between them, totalling 2 hours and 45 minutes. The Speaking test is a separate face-to-face or video interview, usually scheduled on the same day or within a week of the other papers.',
    ],
    bullets: [
      'Listening: approximately 30 minutes of audio, plus 10 minutes to transfer answers on paper-based tests (computer-delivered tests use different timing for typing answers).',
      'Reading: 60 minutes.',
      'Writing: 60 minutes (Task 1 and Task 2).',
      'Speaking: about 11–14 minutes (three parts).',
    ],
  },
  {
    heading: 'Types of IELTS exams',
    paragraphs: [
      'Choose the module that matches how you will use your results. If you are unsure, your university, employer, or immigration checklist will specify which test and sometimes a minimum band.',
    ],
    bullets: [
      'IELTS Academic: best for degree-level study and some professional registrations; academic reading and writing tasks reflect higher-education contexts.',
      'IELTS General Training: suited to work experience, training programmes, secondary education, and migration to some English-speaking countries; everyday and workplace English feature more strongly in reading and writing.',
      'IELTS for UKVI: taken at approved centres when UK Visas and Immigration requires a Secure English Language Test (SELT); content level is the same as Academic or General Training but administrative and reporting rules differ for visa use.',
    ],
  },
  {
    heading: 'IELTS Academic vs General Training',
    paragraphs: [
      'Listening and Speaking are the same for both modules. Reading and Writing differ in text types, tasks, and emphasis. Neither module is universally “easier”; difficulty depends on your strengths and the skills each paper rewards.',
    ],
    table: {
      headers: ['Area', 'Academic', 'General Training'],
      rows: [
        [
          'Purpose',
          'Higher education and professional registration where academic English is required.',
          'Secondary education, work, training, and some migration pathways.',
        ],
        [
          'Content focus',
          'Academic texts, data description, and discursive essays.',
          'General-interest texts, everyday/workplace situations, and practical writing (e.g. letters).',
        ],
        [
          'Reading',
          'Three longer academic passages with a range of question types.',
          'Three sections mixing shorter workplace and everyday texts with one longer passage.',
        ],
        [
          'Writing',
          'Task 1: describe visual information (graph, chart, diagram, or process). Task 2: essay responding to a point of view, argument, or problem.',
          'Task 1: letter (often formal or semi-formal). Task 2: essay on a general topic.',
        ],
        [
          'Difficulty',
          'Demands comfort with abstract ideas and academic register; Task 1 is data-focused.',
          'Often more accessible topics for daily life, but still scored to the same band descriptors for writing and speaking.',
        ],
      ],
    },
  },
];

export default function IELTS() {
  return (
    <ExamPage
      title="IELTS Exam Overview: The Complete Guide"
      breadcrumbs={[
        { label: 'Exams' },
        { label: 'English Language Proficiency' },
        { label: 'IELTS' },
      ]}
      subtitle="IELTS full form is International English Language Testing System. It is a globally recognised English language proficiency test."
      image="/EXAMS/International-English-Language-Testing-System.webp"
      sections={sections}
    />
  );
}
