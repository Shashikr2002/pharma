import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2, ShieldCheck, Settings, Layers, Truck } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { companyConfig } from '@/config/company';

const capabilities = [
  { title: 'Formulation Expertise', description: 'Experienced teams overseeing formulation development across multiple dosage forms.', icon: Settings },
  { title: 'Manufacturing Capabilities', description: 'Modern manufacturing practices aligned with industry quality standards.', icon: Layers },
  { title: 'Packaging & Supply', description: 'Reliable packaging and supply chain operations for timely delivery.', icon: Truck },
  { title: 'Quality Assurance', description: 'Rigorous quality assurance processes at every stage of production.', icon: ShieldCheck },
];

const values = [
  'Quality-driven manufacturing',
  'Responsible pharmaceutical supply',
  'Trusted partnerships',
  'Patient safety first',
  'Continuous improvement',
  'Professional integrity',
];

export default function About() {
  return (
    <>
      <PageBanner
        title="About Pharma Healthcare"
        subtitle="Committed to delivering quality pharmaceuticals through responsible manufacturing and trusted partnerships."
        image={companyConfig.images.manufacturing}
        breadcrumb="Home / About Us"
      />

      {/* Company Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                  <img
                    src={companyConfig.images.manufacturing}
                    alt="Pharmaceutical manufacturing"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <div className="absolute -top-5 -left-5 w-32 h-32 bg-brand-light-blue rounded-2xl -z-10 hidden md:block" />
              </div>
            </Reveal>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3 block">
                  Company Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text leading-tight">
                  Delivering Quality
                  <br />
                  Pharmaceuticals with Care
                </h2>
                <p className="mt-5 text-base md:text-lg text-brand-dark-text/70 leading-relaxed">
                  {companyConfig.description}
                </p>
                <p className="mt-4 text-base text-brand-dark-text/70 leading-relaxed">
                  Our approach is rooted in quality, responsibility, and a commitment to
                  serving healthcare needs across markets. We believe that every product
                  we manufacture contributes to the wellbeing of patients and the trust
                  of our partners.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {values.map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0" />
                      <span className="text-sm text-brand-dark-text/80">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-brand-soft-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-50 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-navy flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-dark-text mb-3">Our Mission</h3>
                <p className="text-brand-dark-text/70 leading-relaxed">
                  To manufacture and deliver high-quality pharmaceutical products that serve
                  the healthcare needs of patients and communities. We are committed to quality,
                  responsibility, and building trusted relationships with our partners.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-50 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-navy flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-dark-text mb-3">Our Vision</h3>
                <p className="text-brand-dark-text/70 leading-relaxed">
                  To be a trusted and respected pharmaceutical company recognized for quality
                  manufacturing, responsible supply, and meaningful partnerships. We aspire to
                  grow our presence while maintaining the highest standards of product integrity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Business Capabilities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text">
              Business Capabilities
            </h2>
            <p className="mt-4 text-brand-dark-text/70">
              Pharmaceutical capabilities supporting quality-driven manufacturing and supply.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-brand-soft-gray border border-gray-50 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 group-hover:bg-brand-navy flex items-center justify-center mb-5 transition-all duration-300">
                  <cap.icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-base text-brand-dark-text mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-brand-dark-text/60 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-20 md:py-28 bg-brand-light-blue">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                <img
                  src={companyConfig.images.labEquipment}
                  alt="Quality philosophy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </Reveal>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3 block">
                  Quality Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text leading-tight">
                  Quality at the
                  <br />
                  Core of Everything
                </h2>
                <p className="mt-5 text-base text-brand-dark-text/70 leading-relaxed">
                  Our quality philosophy is built on the belief that every pharmaceutical
                  product must meet the highest standards of safety, efficacy, and consistency.
                  We embed quality into every stage — from raw material selection to finished
                  product delivery.
                </p>
                <p className="mt-4 text-base text-brand-dark-text/70 leading-relaxed">
                  We are committed to continuous improvement, responsible practices, and
                  maintaining the trust that patients and partners place in us.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            Want to Learn More About Us?
          </h2>
          <p className="mt-4 text-white/70">
            Reach out to our team for any enquiries about our company, products, or partnerships.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="secondary" size="lg" icon>
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
