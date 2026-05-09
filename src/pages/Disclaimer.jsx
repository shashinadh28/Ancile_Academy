import PageBanner from '../components/shared/PageBanner';
import AnimateIn from '../components/shared/AnimateIn';

const sections = [
  {
    title: 'General Disclaimer',
    body: `The information provided on the Ancile Academy website is for general informational and educational purposes only. While we strive to keep all information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, services, or related content on this website.`,
  },
  {
    title: 'No Guarantee of Outcomes',
    body: `Ancile Academy does not guarantee admission to any university, college, or educational institution, nor does it guarantee the issuance of any student visa or immigration document. University admissions and visa decisions are solely at the discretion of the respective institutions and government authorities. Our counselling services improve your preparation and application quality, but outcomes cannot be guaranteed.`,
  },
  {
    title: 'Accuracy of Information',
    body: `University course details, tuition fees, entry requirements, visa regulations, and scholarship information are subject to change without notice by the respective institutions and governments. We strongly advise you to verify all information directly with the relevant university or official government immigration portals before making any decisions.`,
  },
  {
    title: 'Professional Advice',
    body: `The content on this website is not a substitute for professional legal, financial, or immigration advice. For questions relating to visa applications, immigration law, or financial planning, we recommend consulting a licensed professional. Ancile Academy's counsellors provide guidance based on experience and general knowledge, not licensed legal representation.`,
  },
  {
    title: 'External Links',
    body: `Our website may contain links to external websites operated by third parties. These links are provided for your reference and convenience only. Ancile Academy does not endorse, control, or take responsibility for the content, privacy policies, or practices of any third-party websites. Access to external links is at your own risk.`,
  },
  {
    title: 'Testimonials',
    body: `Testimonials displayed on our website reflect the individual experiences of past students. These are personal opinions and may not represent the typical experience of all students. Individual results may vary based on a wide range of factors including academic background, destination country, and personal circumstances.`,
  },
  {
    title: 'Limitation of Liability',
    body: `In no event shall Ancile Academy, its directors, employees, partners, or agents be liable for any loss or damage — including without limitation, indirect or consequential loss or damage — arising from the use of this website or the services provided, even if Ancile Academy has been notified of the possibility of such loss or damage.`,
  },
  {
    title: 'Changes to This Disclaimer',
    body: `Ancile Academy reserves the right to modify or update this Disclaimer at any time without prior notice. Changes become effective immediately upon posting. Your continued use of our website following any changes constitutes your acceptance of the revised Disclaimer.`,
  },
  {
    title: 'Contact Us',
    body: `If you have any questions or concerns about this Disclaimer, please contact us at info@ancileacademy.com or write to us at 329 Odyssey Lane, Milpitas, CA 95035, United States.`,
  },
];

export default function Disclaimer() {
  return (
    <>
      <PageBanner
        title="Disclaimer"
        subtitle="Important information about the limitations of our services and content."
        breadcrumbs={[{ label: 'Disclaimer' }]}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateIn animation="fadeUp">
            <p className="text-sm text-gray-500 mb-10 border-l-4 border-primary-500 pl-4">
              Last updated: May 2025 &nbsp;·&nbsp; Effective immediately
            </p>
          </AnimateIn>

          <div className="space-y-10">
            {sections.map((sec, i) => (
              <AnimateIn key={sec.title} animation="fadeUp" delay={i * 40}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">{sec.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-sm">{sec.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fadeUp" delay={300}>
            <div className="mt-12 rounded-2xl p-6 md:p-8 text-center"
              style={{ background: 'linear-gradient(135deg, #172554, #1e3a8a, #1d4ed8)' }}>
              <h3 className="text-xl font-bold text-white mb-2">Need Clarification?</h3>
              <p className="text-blue-200/80 mb-5 text-sm">Our team is here to answer any questions you may have.</p>
              <a href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary-700 font-bold text-sm hover:shadow-lg transition-shadow">
                Contact Us
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
