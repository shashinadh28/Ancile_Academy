import { CheckCircle, ArrowRight } from 'lucide-react';
import PageBanner from '../../components/shared/PageBanner';
import SectionWrapper from '../../components/shared/SectionWrapper';
import Button from '../../components/shared/Button';
import AnimateIn from '../../components/shared/AnimateIn';
import ContactCTA from '../../components/home/ContactCTA';

export default function SAT() {
  return (
    <>
      <PageBanner
        title="SAT Exam Guide"
        breadcrumbs={[{ label: 'Exams' }, { label: 'Undergraduate' }, { label: 'SAT' }]}
      />

      <SectionWrapper>
        <div className="max-w-5xl mx-auto space-y-8 text-gray-600">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <AnimateIn animation="fadeUp">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">SAT Exam Guide</h2>
                <p className="text-xl text-primary-600 font-semibold mb-6">Test More, Learn Better, Score High!</p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <span className="font-bold text-gray-900">Did you know</span> that even though most US universities are test-optional, submitting your SAT exam scores actually helps improve your application? That's correct! Even though it is no longer mandatory to submit valid SAT scores at most universities in the USA, these scores can significantly improve your chances of enrollment in your desired university and programme in the upcoming academic year.
                </p>
              </AnimateIn>

              <AnimateIn animation="fadeUp" delay={100}>
                <p className="leading-relaxed mt-4">
                  The SAT exam has long been used to enrol prospective students, both domestic and international, to various undergraduate programmes across the US and Canada. However, with recent changes to university requirements and the test, the SAT is now a tool that students use to enhance their academic profile and give the admission committee a greater insight into their potential, not just as a student but also as a future expert, leader or entrepreneur.
                </p>
              </AnimateIn>

              <AnimateIn animation="fadeUp" delay={200}>
                <p className="leading-relaxed mt-4">
                  Through this article, we will discuss everything that you need to know about the SAT exam and more, before you start applying to universities and colleges this year.
                </p>
              </AnimateIn>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg sticky top-28">
                <img src="/EXAMS/SAT.webp" alt="SAT Exam" className="w-full h-56 lg:h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          <AnimateIn animation="fadeUp" delay={300}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is the SAT Exam?</h2>
            <p className="leading-relaxed mb-4">
              The latest and only version of the SAT, called the Digital SAT exam, is a 2-hour and 14-minute-long standardised test, split into two main sections: Reading and Writing, and Mathematics. Before the update of the Digital SAT, the Reading and Writing sections were 2 distinct sections, which have now been merged into one 64-minute-long section. The second section, i.e. Math section, is a 70-minute-long section that assesses students on various aspects of mathematics.
            </p>
            <p className="leading-relaxed mb-4">
              Offered as an online standardised test, taken at a proctored test centre, the Digital SAT does not penalise candidates for submitting incorrect or unanswered questions on the test. The SAT exam is scored out of 1,600, with each section being scored on a scale of 200 - 800. Both the Reading and Writing and the Math sections contain 2 modules in the updated version of the test.
            </p>
            <p className="leading-relaxed">
              With the introduction of the Digital SAT exam, the test has also introduced the "Multistage Adaptive Testing", which means the difficulty level for each test-taker will be unique and different. The first module in each section consists of questions with varying difficulty levels, which will determine the difficulty level of the second module in each section.
            </p>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={400}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Digital SAT Exam Highlights</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">Feature</th>
                    <th className="px-6 py-4">SAT Reading and Writing Section</th>
                    <th className="px-6 py-4">SAT Math Section</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">Total Duration</td>
                    <td className="px-6 py-4">64 Minutes</td>
                    <td className="px-6 py-4">70 Minutes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Total Number of Questions</td>
                    <td className="px-6 py-4">54 Questions</td>
                    <td className="px-6 py-4">44 Questions</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">Question Types</td>
                    <td className="px-6 py-4">One-Passage-One-MCQ</td>
                    <td className="px-6 py-4">MCQ + Student-produced Answers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Content Area</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Craft and Structure</li>
                        <li>Information and Ideas</li>
                        <li>Standard English Conventions</li>
                        <li>Expression of Ideas</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Algebra</li>
                        <li>Advanced Math</li>
                        <li>Problem-solving & Data Analysis</li>
                        <li>Geometry & Trigonometry</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateIn>
          
          <AnimateIn animation="fadeUp" delay={500}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Digital SAT Exam Eligibility</h2>
            <p className="leading-relaxed mb-4">
              Being an entrance exam to undergraduate courses offered by top-ranking universities in the USA and Canada, the SAT does not specify any particular requirements that test-takers need to adhere to.
            </p>
            <p className="leading-relaxed">
              The only requirement is that you are prepared, pay the international test-taker fees along with the standard fees, and appear for the test on the scheduled date as per the exam day regulations stipulated by the College Board.
            </p>
          </AnimateIn>
          
          <AnimateIn animation="fadeUp" delay={600}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Digital SAT Exam Fee 2026</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8 max-w-2xl mx-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">Charge/Cost</th>
                    <th className="px-6 py-4">SAT Fees (in USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['SAT Registration Fee', 'US $68'],
                    ['International Fee', 'US $43'],
                    ['Test Centre Fees (Select)', 'US $24'],
                    ['Changing of Test Centre', 'US $34'],
                    ['Cancellation Fee', 'US $34'],
                    ['Late Cancellation Fee', 'US $44'],
                    ['Late Registration Fee', 'US $38'],
                  ].map(([label, fee], i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{label}</td>
                      <td className="px-6 py-4">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">SAT Exam Score Services Fees</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4 max-w-2xl mx-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">SAT Score Service</th>
                    <th className="px-6 py-4">Fees (in USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Additional Score Reports*', 'US $15 per report'],
                    ['Rush Reports', 'US $31'],
                    ['Receive Scores on Phone', 'US $15 per call'],
                    ['Archived Scores', 'US $35'],
                    ['Score Verification', 'US $55'],
                  ].map(([label, fee], i) => (
                    <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{label}</td>
                      <td className="px-6 py-4">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 italic text-center max-w-2xl mx-auto">
              *The first 4 score reports sent within 9 days of the test date are free. The cost is incurred for subsequent reports.
            </p>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={700}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">SAT Exam Dates and Deadlines 2026</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4 max-w-3xl mx-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">SAT Test Date</th>
                    <th className="px-6 py-4">Registration Deadline</th>
                    <th className="px-6 py-4">Late Registration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['14 March 2026', '27 February 2026', '3 March 2026'],
                    ['2 May 2026', '17 April 2026', '21 April 2026'],
                    ['6 June 2026', '22 May 2026', '26 May 2026'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-6 py-4 ${j === 0 ? 'font-medium text-gray-900' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={800}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Digital SAT Registration Steps</h2>
            <ul className="space-y-4">
              {[
                ['Find multiple testing locations', 'Via MySAT account, find different verified test centres. Finding multiple locations allows you to still take the test even when one location is full.'],
                ['Select the preferred date', 'Choose a test date that gives you ample time to prepare, receive scores, and appear again if needed.'],
                ['Complete the Registration', 'Fill out the form per your passport and official school documents. Ensure all information matches.'],
                ['Submit the Photograph', 'Provide a digital photo per College Board specifications before submitting.'],
                ['Cross-check all information', 'Double-check all provided information before submitting.'],
                ['Complete the Payment', 'Pay via credit or debit card to complete the registration process.'],
                ['Print the Admission Ticket', 'Download and print the SAT admission ticket after payment confirmation.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle className="text-primary-500 shrink-0 mt-1" size={20} />
                  <div><span className="font-semibold text-gray-800">{title}:</span> {desc}</div>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={900}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">SAT Exam Syllabus & Pattern</h2>
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">SAT Reading and Writing Section</h3>
            <p className="leading-relaxed mb-4">
              The merged Reading and Writing section replaces lengthy passages with shorter passages of 25-150 words, each with a single MCQ. With 54 questions in 64 minutes, the section consists of 2 equal-length modules evaluating four content domains: Craft and Structure, Information and Ideas, Standard English Conventions, and Expression of Ideas.
            </p>
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">SAT Math Section</h3>
            <p className="leading-relaxed mb-4">
              The Math section includes 44 questions in 70 minutes, divided into 2 equal-length modules with a mix of MCQs (75%) and student-produced answers (25%). Topics cover Algebra, Advanced Math, Problem-solving & Data Analysis, and Geometry & Trigonometry.
            </p>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={1000}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Digital SAT Results and Scores</h2>
            <p className="leading-relaxed mb-4">
              SAT scores are typically available 2 to 4 weeks after the test date. Students can access scores through their College Board account.
            </p>
            <div className="bg-primary-50/60 border border-primary-100 rounded-xl p-5 mb-6">
              <p className="font-semibold text-gray-800 mb-2">Score Ranges:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-primary-600 font-bold">•</span> Total SAT Score: 400 – 1,600</li>
                <li className="flex gap-2"><span className="text-primary-600 font-bold">•</span> Reading and Writing Score: 200 – 800</li>
                <li className="flex gap-2"><span className="text-primary-600 font-bold">•</span> Math Score: 200 – 800</li>
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={1100}>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Prepare for the SAT Exam</h2>
            <ul className="space-y-3">
              {[
                'Download the Bluebook App and familiarise yourself with its interface.',
                'Attempt Practice Test 1 to gauge your standing on different topics.',
                'Use official study material from College Board and Khan Academy.',
                'Train with the Desmos Calculator — spend 2-3 hours practising shortcuts.',
                'Attempt multiple practice tests and review every incorrect answer.',
                'Complete a Device Check a few days before exam day.',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                  <CheckCircle size={16} className="text-primary-500 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={1200}>
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 md:p-8 mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need help applying for the SAT exam this year?</h2>
              <p className="text-gray-600 mb-6">Our expert counsellors are here to guide you through the registration process, test preparation, and university applications.</p>
              <Button to="/contact" size="lg">Connect with an Expert <ArrowRight size={16} /></Button>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>
      <ContactCTA />
    </>
  );
}
