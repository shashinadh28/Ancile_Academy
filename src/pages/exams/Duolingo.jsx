import ExamPage from '../../components/shared/ExamPage';

const breadcrumbs = [
  { label: 'Exams' },
  { label: 'English Language Proficiency' },
  { label: 'Duolingo' },
];

const sections = [
  {
    heading: 'Overview',
    paragraphs: [
      'The Duolingo English Test (DET) is a modern English proficiency exam designed for university admissions and professional certification. Taken entirely online for a flat fee of $59, it lasts about one hour and delivers certified results within 48 hours. More than 5,000 institutions worldwide accept the DET, making it one of the most accessible and cost-effective ways to demonstrate English ability for study abroad.',
    ],
  },
  {
    heading: 'Exam highlights',
    paragraphs: [
      'The table below summarises the main reasons students choose the Duolingo English Test alongside or instead of longer, centre-based exams.',
    ],
    table: {
      headers: ['Aspect', 'Details'],
      rows: [
        ['Affordability', 'Single test: $59 USD'],
        ['Duration', 'Approximately 1 hour end-to-end'],
        ['Results', 'Certified scores typically within 48 hours'],
        ['Format', 'Fully online; no travel to a test centre'],
        ['Flexibility', 'Available year-round; schedule when you are ready'],
        ['Global acceptance', 'Accepted by 5,000+ universities and programmes'],
        ['Adaptive design', 'Question difficulty adjusts based on your performance'],
      ],
    },
  },
  {
    heading: 'Recent updates',
    subheading: 'New and updated task types',
    paragraphs: [
      'Duolingo continues to refine the test to better measure real-world English. Recent additions and emphasis include interactive and production tasks that go beyond traditional multiple choice.',
      'Fill in the Blanks asks you to complete short texts by typing missing words, testing vocabulary in context and spelling.',
      'Interactive Writing presents a prompt and invites you to write, then revise or extend your response in a second stage—assessing planning, coherence, and the ability to improve your own work.',
      'Read and Select requires you to identify real English words from a set of options, measuring recognition of authentic vocabulary and reducing reliance on guessing patterns.',
    ],
  },
  {
    heading: 'Test duration',
    subheading: 'Typical one-hour structure',
    paragraphs: [
      'The full session is designed to finish in about 60 minutes, including onboarding and each scored section. Actual timing can vary slightly based on adaptive pacing.',
    ],
    bullets: [
      'Setup and checks (identity, environment, equipment): about 5 minutes',
      'Adaptive graded questions (reading, listening, speaking, writing integrated): about 45 minutes',
      'Interactive writing section: about 8 minutes',
      'Video interview (unscored; sent to institutions that request it): about 10 minutes',
    ],
  },
  {
    heading: 'Requirements',
    paragraphs: [
      'You must meet technical, identification, and environment standards before you can start. Failing any check may require rescheduling or a new attempt.',
    ],
    bullets: [
      'Technical: Windows or Mac computer with a supported browser, working webcam, microphone, and stable internet; speakers or headphones as specified in official guidelines.',
      'ID: Valid government-issued photo ID matching the name on your account; requirements vary by country—confirm accepted documents before you pay.',
      'Environment: Quiet, private room; alone for the full test; desk clear of unauthorised materials; good lighting so your face is visible.',
    ],
  },
  {
    cta: 'Ready to register? An Ancile Academy counsellor can guide you.',
  },
  {
    heading: 'Registration',
    paragraphs: [
      'Registration is handled through the official Duolingo English Test website. Follow these steps to avoid delays or invalid attempts.',
    ],
    bullets: [
      'Create or sign in to your Duolingo English Test account.',
      'Review institution score requirements and test rules for your target universities.',
      'Purchase a single test ($59) or a bundle of two tests ($100) if you want a backup attempt.',
      'Complete any pre-test system check and ensure your ID and room meet proctoring rules.',
      'Start the test when you are ready within the validity period stated at purchase; complete identity verification as prompted.',
    ],
  },
  {
    heading: 'How to take the test',
    paragraphs: [
      'On test day, preparation and calm execution help you perform at your best.',
    ],
    bullets: [
      'Use only the approved device and browser; close unrelated apps and notifications.',
      'Sit centred in frame; keep ears and face visible unless an accommodation applies.',
      'Follow all proctor instructions; do not leave the room or use unpermitted resources.',
      'Work steadily through adaptive sections; there is no separate timer per question in the same way as fixed paper tests.',
      'Complete the interactive writing and, if required, the video interview before submitting.',
      'After submission, wait for the official score report and send results to institutions through your Duolingo dashboard.',
    ],
  },
  {
    heading: 'Fees',
    paragraphs: [
      'Pricing is straightforward and published by Duolingo. Bundles reduce the per-test cost if you plan more than one sitting.',
      'Single test: $59 USD. Bundle of two tests: $100 USD (pricing subject to change; confirm on the official site before purchase).',
    ],
  },
  {
    heading: 'Scoring',
    paragraphs: [
      'Overall scores range from 10 to 160, reported as a single holistic score with subscores for literacy, comprehension, conversation, and production where shown. Cut-offs differ by university and programme; always verify current requirements on the institution’s admissions page.',
    ],
  },
  {
    heading: 'Acceptance and minimum scores',
    paragraphs: [
      'The examples below are illustrative; minimum Duolingo scores change by intake and programme. Use them as a planning guide only and confirm with each university.',
    ],
    table: {
      headers: ['University / institution (examples)', 'Typical minimum DET score (verify officially)'],
      rows: [
        ['University College London (UCL)', '135 (example; programmes vary)'],
        ['Northern Arizona University', '115 (example; programmes vary)'],
        ['University of Toronto', '120 (example; programmes vary)'],
        ['University of Southern California (USC)', '130 (example; programmes vary)'],
        ['University of Birmingham (UK)', '120–135 (example; by programme)'],
        ['York University (Canada)', '115–120 (example; by programme)'],
      ],
    },
  },
];

export default function Duolingo() {
  return (
    <ExamPage
      title="Duolingo English Test"
      breadcrumbs={breadcrumbs}
      subtitle="Duolingo English Test: A Complete Guide"
      image="/EXAMS/Duolingo-English-Test.webp"
      sections={sections}
    />
  );
}
