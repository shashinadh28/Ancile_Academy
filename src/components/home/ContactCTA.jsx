import { useState } from 'react';
import { Send } from 'lucide-react';
import AnimateIn from '../shared/AnimateIn';

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <AnimateIn animation="scaleIn" duration="slow">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 rounded-2xl px-6 md:px-12 py-8 md:py-10">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-1">
                Have Questions? <span className="text-primary-200">Reach Out to Us!</span>
              </h3>
              <p className="text-primary-200/70 text-sm text-center mb-6">Connect with us on Social Media.</p>

              {submitted ? (
                <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-5 text-center">
                  <p className="text-white font-semibold">Thank you! We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={3}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-primary-50 transition-colors cursor-pointer"
                  >
                    <Send size={15} /> Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
