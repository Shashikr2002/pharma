import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, FileCheck2, Stethoscope } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { PharmaPattern } from '@/components/ui/PharmaDecor';
import { companyConfig } from '@/config/company';

const qualityPoints = [
  { title: 'Stringent Quality Controls', description: 'Multi-stage quality checks across manufacturing to ensure product safety and consistency.', icon: ShieldCheck },
  { title: 'Process Documentation', description: 'Detailed documentation and process tracking aligned with industry quality practices.', icon: FileCheck2 },
  { title: 'Responsible Sourcing', description: 'Careful selection of raw materials and suppliers to maintain product integrity.', icon: BadgeCheck },
  { title: 'Patient Safety Focus', description: 'Every process is designed with patient safety and therapeutic reliability as priorities.', icon: Stethoscope },
];

export default function QualityReliability() {
  return (
    <section className="py-20 md:py-28 bg-brand-light-blue relative overflow-hidden">
      <PharmaPattern variant="molecules" opacity={0.03} className="text-brand-navy" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -skew-x-12 origin-top-right" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                <img
                  src={companyConfig.images.qualityControl}
                  alt="Quality control in pharmaceutical manufacturing"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-brand-dark-text">Quality First</p>
                    <p className="text-xs text-brand-dark-text/50">In every process</p>
                  </div>
                </div>
              </div>
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
                Quality & Reliability
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark-text leading-tight">
                Quality-Focused Processes
                <br />
                and Responsible Supply
              </h2>
              <p className="mt-5 text-base text-brand-dark-text/70 leading-relaxed">
                Quality is the foundation of everything we do. From raw material selection
                to finished product delivery, every step is governed by rigorous quality
                practices and a deep sense of responsibility.
              </p>

              <div className="mt-8 space-y-5">
                {qualityPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center shrink-0">
                      <point.icon className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark-text">{point.title}</h4>
                      <p className="text-sm text-brand-dark-text/60 mt-1">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
