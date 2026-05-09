import PageBanner from '../components/shared/PageBanner';
import AnimateIn from '../components/shared/AnimateIn';

const sections = [
  {
    title: '1. Information We Collect',
    body: `We collect information you provide directly to us, such as your name, email address, phone number, and academic background when you fill out enquiry forms, subscribe to our newsletter, or contact us. We may also collect certain information automatically when you visit our website, including your IP address, browser type, pages viewed, and time spent on pages.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information we collect to provide, maintain, and improve our services; to communicate with you about study abroad opportunities, events, and updates; to respond to your enquiries and provide personalized counselling; to send you newsletters and promotional material (you may opt out at any time); and to comply with legal obligations.`,
  },
  {
    title: '3. Sharing of Information',
    body: `We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except to trusted third parties who assist us in operating our website, conducting our business, or serving you, so long as those parties agree to keep this information confidential. We may also release information when required by law.`,
  },
  {
    title: '4. Cookies and Tracking Technologies',
    body: `Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze usage patterns, and deliver relevant content. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.`,
  },
  {
    title: '5. Data Retention',
    body: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.`,
  },
  {
    title: '6. Data Security',
    body: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '7. Your Rights',
    body: `Depending on your location, you may have the right to access, correct, or delete the personal information we hold about you; to object to or restrict our processing of your information; and to request portability of your data. To exercise any of these rights, please contact us at info@ancileacademy.com.`,
  },
  {
    title: '8. Third-Party Websites',
    body: `Our website may contain links to third-party websites. This Privacy Policy does not apply to those websites, and we are not responsible for the privacy practices of any third-party sites. We encourage you to review the privacy policy of every website you visit.`,
  },
  {
    title: '9. Children\'s Privacy',
    body: `Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information promptly.`,
  },
  {
    title: '10. Updates to This Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page with an updated date. We encourage you to review this policy periodically.`,
  },
  {
    title: '11. Contact Us',
    body: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at info@ancileacademy.com or at 329 Odyssey Lane, Milpitas, CA 95035, United States.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how we collect, use, and protect your data."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
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
              <h3 className="text-xl font-bold text-white mb-2">Privacy Questions?</h3>
              <p className="text-blue-200/80 mb-5 text-sm">Reach out and we'll be happy to address your concerns.</p>
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
