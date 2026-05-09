import PageBanner from '../components/shared/PageBanner';
import AnimateIn from '../components/shared/AnimateIn';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using the Ancile Academy website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use our platform.`,
  },
  {
    title: '2. Use of Services',
    body: `Our services are intended to assist prospective students in exploring study abroad opportunities. You agree to use our platform only for lawful purposes and in a manner consistent with all applicable laws and regulations. You must not misuse our services by introducing viruses, attempting unauthorized access, or engaging in any activity that disrupts or damages our platform.`,
  },
  {
    title: '3. Intellectual Property',
    body: `All content on this website — including text, graphics, logos, images, and software — is the property of Ancile Academy or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
  },
  {
    title: '4. User Submissions',
    body: `Any information you submit through our contact forms, enquiry pages, or other interactive areas becomes the property of Ancile Academy. By submitting information, you grant us a non-exclusive, royalty-free license to use it for the purposes of providing and improving our services. You are responsible for ensuring the accuracy and legality of any information you provide.`,
  },
  {
    title: '5. Third-Party Links',
    body: `Our website may contain links to third-party websites or resources. These links are provided for your convenience only. Ancile Academy has no control over the contents of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: '6. Disclaimer of Warranties',
    body: `Our services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Ancile Academy does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee specific outcomes such as visa approvals or university admissions.`,
  },
  {
    title: '7. Limitation of Liability',
    body: `To the fullest extent permitted by law, Ancile Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — our services, even if we have been advised of the possibility of such damages.`,
  },
  {
    title: '8. Changes to Terms',
    body: `We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes your acceptance of the revised terms. We encourage you to review this page periodically.`,
  },
  {
    title: '9. Governing Law',
    body: `These Terms of Use shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in California.`,
  },
  {
    title: '10. Contact Us',
    body: `If you have any questions about these Terms of Use, please contact us at info@ancileacademy.com or write to us at 329 Odyssey Lane, Milpitas, CA 95035, United States.`,
  },
];

export default function TermsOfUse() {
  return (
    <>
      <PageBanner
        title="Terms of Use"
        subtitle="Please read these terms carefully before using our website and services."
        breadcrumbs={[{ label: 'Terms of Use' }]}
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
              <h3 className="text-xl font-bold text-white mb-2">Have Questions?</h3>
              <p className="text-blue-200/80 mb-5 text-sm">Our team is happy to clarify any part of these terms.</p>
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
