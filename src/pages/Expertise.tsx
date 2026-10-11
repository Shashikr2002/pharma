import { motion } from 'framer-motion';
import {
  Settings, ShieldCheck, Truck, Handshake, Layers,
  FlaskConical, FileCheck2, BadgeCheck, Microscope, PackageCheck,
} from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { companyConfig } from '@/config/company';

const capabilities = [
  { title: 'Formulation Development', description: 'Experienced teams overseeing formulation across tablets, capsules, liquids, and ointments.', icon: FlaskConical },
  { title: 'Manufacturing Excellence', description: 'Modern manufacturing practices with attention to precision and industry standards.', icon: Settings },
  { title: 'Quality Control', description: 'Multi-stage quality control processes to ensure product safety and consistency.', icon: ShieldCheck },
  { title: 'Packaging & Supply', description: 'Reliable packaging and supply chain operations for dependable delivery.', icon: Truck },
  { title: 'Diverse Portfolio', description: 'A broad product portfolio covering multiple dosage forms and therapeutic segments.', icon: Layers },
  { title: 'Partnership Focus', description: 'Quality-focused partnerships built on trust, consistency, and professional collaboration.', icon: Handshake },
];

const qualitySteps = [
  { step: '01', title: 'Raw Material Selection', description: 'Careful sourcing and verification of raw materials to ensure product integrity from the start.' },
  { step: '02', title: 'Manufacturing Controls', description: 'Controlled manufacturing processes with continuous monitoring and documentation.' },
  { step: '03', title: 'Quality Testing', description: 'Rigorous testing at multiple stages to verify product quality, safety, and consistency.' },
  { step: '04', title: 'Packaging & Delivery', description: 'Secure packaging and responsible supply to maintain product quality through to delivery.' },
];

export default function Expertise() {
  return (
    <>
      <PageBanner
        title="Expertise & Quality"
        subtitle="Pharmaceutical capabilities and quality-focused processes that define our approach."
        image={companyConfig.images.labWork}
        breadcrumb="Home / Expertise / Quality"
      />

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="Pharmaceutical Capabilities"
            subtitle="Technical expertise and capabilities across formulation, manufacturing, and supply."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group p-7 rounded-2xl bg-brand-soft-gray border border-gray-50 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 group-hover:bg-brand-navy flex items-center justify-center mb-5 transition-all duration-300">
                  <cap.icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark-text mb-2">
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

      {/* Quality Process */}
      <section className="py-20 md:py-28 bg-brand-soft-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="Quality Process"
            title="Quality-Focused Processes"
            subtitle="A structured approach to quality that spans every stage of pharmaceutical production."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {qualitySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-50 h-full">
                  <span className="text-4xl font-display font-bold text-brand-navy/10">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-display font-bold text-base text-brand-dark-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-dark-text/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < qualitySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-brand-navy/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise with image */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                <img
                  src={companyConfig.images.researchers}
                  alt="Technical expertise"
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
                  Technical Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text leading-tight">
                  Experienced Teams,
                  <br />
                  Modern Practices
                </h2>
                <p className="mt-5 text-base text-brand-dark-text/70 leading-relaxed">
                  Our technical teams bring pharmaceutical industry knowledge and a commitment
                  to precision. From formulation to packaging, every step is carried out with
                  attention to detail and adherence to industry practices.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { title: 'Precision Manufacturing', icon: Settings, desc: 'Controlled processes with attention to every detail.' },
                    { title: 'Quality Documentation', icon: FileCheck2, desc: 'Thorough documentation at every production stage.' },
                    { title: 'Skilled Workforce', icon: Microscope, desc: 'Experienced professionals dedicated to pharmaceutical quality.' },
                    { title: 'Reliable Supply', icon: PackageCheck, desc: 'Dependable supply chains partners can trust.' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-light-blue flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-brand-navy" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark-text text-sm">{item.title}</h4>
                        <p className="text-xs text-brand-dark-text/60">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Partnerships */}
      <section className="py-20 md:py-28 bg-brand-light-blue">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3 block">
                  Supply Partnerships
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text leading-tight">
                  Building Trust Through
                  <br />
                  Responsible Supply
                </h2>
                <p className="mt-5 text-base text-brand-dark-text/70 leading-relaxed">
                  We value our partnerships with distributors, institutions, and healthcare
                  organizations. Our approach to supply is rooted in reliability, transparency,
                  and a shared commitment to quality healthcare.
                </p>

                <div className="mt-6 flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-brand-dark-text/70">
                    Certifications and compliance details available upon enquiry.
                  </p>
                </div>
              </motion.div>
            </div>

            <Reveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                <img
                  src={companyConfig.images.dataReview}
                  alt="Supply partnerships"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            Interested in Partnering with Us?
          </h2>
          <p className="mt-4 text-white/70">
            Contact our team to discuss how we can support your pharmaceutical supply needs.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="secondary" size="lg" icon>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
