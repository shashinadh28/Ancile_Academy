import ExamPage from '../../components/shared/ExamPage';

const sections = [
  {
    heading: 'Overview',
    paragraphs: [
      'PTE Academic is Pearson’s computer-based English test for study abroad and migration. It is accepted by more than 3,500 institutions worldwide and measures integrated reading, writing, speaking, and listening in a single session of roughly two hours.',
    ],
  },
  {
    heading: 'What is PTE?',
    paragraphs: [
      'The Pearson Test of English (PTE) uses automated scoring to assess how well you can use English in academic settings. Results are reported on a scale from 10 to 90, with separate scores for each communicative skill and enabling skills where applicable.',
    ],
  },
  {
    heading: 'Types of PTE',
    subheading: 'Choose the test that matches your goal',
    bullets: [
      'PTE Academic: For degree-level study and many visa routes; full academic format with integrated tasks.',
      'PTE Academic UKVI: Approved for UK visas where SELT requirements apply; same skills as Academic with UKVI-specific booking and reporting.',
      'PTE General: A general English qualification with six levels from Foundation to Level 5, often used for work and progression rather than degree admissions.',
    ],
  },
  {
    heading: 'PTE Academic exam pattern',
    paragraphs: [
      'The full test typically runs about two hours and fifteen minutes, including an optional scheduled break where offered. You complete speaking, writing, reading, and listening in a fixed sequence at a secure test centre.',
    ],
  },
  {
    heading: 'Speaking & writing',
    subheading: 'Part 1 — integrated oral and written production',
    paragraphs: [
      'The first part blends spoken responses with short writing tasks. Timing is section-level: you move through item types within the overall window below.',
    ],
    table: {
      headers: ['Task type', 'Typical items', 'Time / notes'],
      rows: [
        ['Personal introduction', '1 (not scored)', '~1 minute'],
        ['Read aloud', '6–7', 'Part of ~54–67 min section'],
        ['Repeat sentence', '10–12', '—'],
        ['Describe image', '6–7', '—'],
        ['Re-tell lecture', '3–4', '—'],
        ['Answer short question', '10–12', '—'],
        ['Summarize written text', '1–2', '~10 min per task'],
        ['Write essay', '1', '20 minutes'],
      ],
    },
  },
  {
    heading: 'Reading',
    subheading: 'Part 2',
    paragraphs: [
      'Reading items are timed as a block. You will see a mix of gap-fill, re-ordering, and multiple-choice formats.',
    ],
    table: {
      headers: ['Task type', 'Typical items', 'Duration'],
      rows: [
        ['Reading & writing: fill in blanks', '5–6', '—'],
        ['Multiple choice, multiple answers', '1–2', '—'],
        ['Re-order paragraphs', '2–3', '—'],
        ['Reading: fill in blanks', '4–5', '—'],
        ['Multiple choice, single answer', '1–2', '—'],
        ['Section total', '—', 'About 29–30 minutes'],
      ],
    },
  },
  {
    heading: 'Listening',
    subheading: 'Part 3',
    paragraphs: [
      'Audio and video clips play once unless noted. Some tasks mix listening with short written responses.',
    ],
    table: {
      headers: ['Task type', 'Typical items', 'Duration / notes'],
      rows: [
        ['Summarize spoken text', '1–2', '~10 min per task'],
        ['Multiple choice, multiple answers', '1–2', '—'],
        ['Fill in blanks', '2–3', '—'],
        ['Highlight correct summary', '1–2', '—'],
        ['Multiple choice, single answer', '1–2', '—'],
        ['Select missing word', '1–2', '—'],
        ['Highlight incorrect words', '5–6', '—'],
        ['Write from dictation', '3–4', '—'],
        ['Section total', '—', 'About 30–43 minutes'],
      ],
    },
  },
  {
    cta: 'Ready to take the PTE Academic? Get expert guidance from Ancile Academy.',
  },
  {
    heading: 'PTE General — levels at a glance',
    paragraphs: [
      'PTE General is structured in six stages aligned to common proficiency bands. Each level includes a written paper and a spoken interview-style component.',
    ],
    table: {
      headers: ['Level', 'Typical CEFR alignment', 'What it covers'],
      rows: [
        ['Foundation', 'A1', 'Very basic everyday language and short exchanges.'],
        ['Level 1', 'A2', 'Simple practical English for familiar situations.'],
        ['Level 2', 'B1', 'Independent handling of routine topics and travel/work contexts.'],
        ['Level 3', 'B2', 'Clear, detailed expression on a wide range of subjects.'],
        ['Level 4', 'C1', 'Fluent, flexible use for professional and academic-style tasks.'],
        ['Level 5', 'C2', 'Near-native precision and nuance in demanding contexts.'],
      ],
    },
  },
  {
    heading: 'Results',
    paragraphs: [
      'Official PTE Academic scores are usually available within about two working days. Many institutions treat strong overall and sectional scores favourably; an overall band in the mid-60s or higher is often cited as competitive for scholarships and selective programmes—always confirm exact cut-offs with your target institution.',
    ],
  },
  {
    heading: 'How to apply',
    subheading: 'Registration in brief',
    bullets: [
      'Create a Pearson account for PTE and verify your identity details against your passport or official ID.',
      'Select PTE Academic, PTE Academic UKVI, or PTE General according to your institution or visa requirements.',
      'Choose a test centre, date, and time slot with available seats in your region.',
      'Pay the exam fee securely online and keep the confirmation and appointment details.',
      'Review equipment rules, arrive early on test day with valid ID, and follow on-screen instructions throughout the session.',
    ],
  },
];

export default function PTE() {
  return (
    <ExamPage
      title="PTE"
      breadcrumbs={[
        { label: 'Exams' },
        { label: 'English Language Proficiency' },
        { label: 'PTE' },
      ]}
      subtitle="PTE Academic: The Complete Guide"
      image="/EXAMS/PTE.webp"
      sections={sections}
    />
  );
}
