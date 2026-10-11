import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import Button from '@/components/ui/Button';
import { companyConfig } from '@/config/company';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: companyConfig.contact.address },
  { icon: Phone, label: 'Phone', value: `${companyConfig.contact.phone} / ${companyConfig.contact.phoneSecondary}` },
  { icon: Mail, label: 'Email', value: companyConfig.contact.email },
  { icon: Clock, label: 'Business Hours', value: companyConfig.contact.hours },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-brand-soft-gray border border-gray-100 focus:border-brand-navy focus:outline-none text-brand-dark-text placeholder:text-brand-dark-text/40 transition-colors text-sm';

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our team for business enquiries, product information, and partnership opportunities."
        image={companyConfig.images.experiments}
        breadcrumb="Home / Contact Us"
      />

      {/* Contact Information */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-brand-soft-gray border border-gray-50 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-sm text-brand-dark-text mb-2">
                  {info.label}
                </h3>
                <p className="text-xs text-brand-dark-text/60 leading-relaxed">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Enquiry Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3 block">
                  Business Enquiry
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text leading-tight">
                  Let's Start a
                  <br />
                  Conversation
                </h2>
                <p className="mt-5 text-base text-brand-dark-text/70 leading-relaxed">
                  Whether you're interested in our products, exploring partnership opportunities,
                  or have general enquiries, our team is ready to assist you.
                </p>

                <div className="mt-8 p-5 rounded-xl bg-brand-light-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-5 h-5 text-brand-navy" />
                    <h4 className="font-display font-semibold text-brand-dark-text">
                      Response Time
                    </h4>
                  </div>
                  <p className="text-sm text-brand-dark-text/60">
                    Our team typically responds to enquiries within 1-2 business days.
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-brand-navy/5 border border-gray-50"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-brand-navy/10 flex items-center justify-center mx-auto mb-5">
                      <Send className="w-8 h-8 text-brand-navy" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-dark-text mb-2">
                      Enquiry Submitted
                    </h3>
                    <p className="text-sm text-brand-dark-text/60 max-w-sm mx-auto">
                      Thank you for reaching out. This is a demo form — your enquiry has not
                      been stored or sent. Please contact us directly at {companyConfig.contact.email}
                      for a response.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
                      }}
                      className="mt-6 text-sm font-semibold text-brand-navy hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark-text mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark-text mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark-text mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark-text mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-dark-text mb-1.5">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Enquiry">Product Enquiry</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Bulk Order">Bulk Order Request</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-dark-text mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your enquiry..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy-dark transition-all duration-300 shadow-lg shadow-brand-navy/20"
                    >
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                    </button>

                    <p className="text-xs text-brand-dark-text/40 text-center pt-2">
                      This is a demo form. Submissions are not stored or sent to our team.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            Explore Our Products
          </h2>
          <p className="mt-4 text-white/70">
            Discover our range of pharmaceutical formulations across multiple dosage forms.
          </p>
          <div className="mt-8">
            <Button to="/products" variant="secondary" size="lg" icon>
              View Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
