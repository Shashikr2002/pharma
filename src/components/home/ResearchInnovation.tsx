import { motion } from 'framer-motion';
import { Microscope, FlaskConical, TrendingUp, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { companyConfig } from '@/config/company';

const innovationPoints = [
  { title: 'Pharmaceutical Development', description: 'Continuous focus on improving formulations and delivery systems to meet evolving healthcare needs.', icon: FlaskConical },
  { title: 'Evolving Healthcare Needs', description: 'Attentive to changing patient requirements and therapeutic advancements in the industry.', icon: TrendingUp },
  { title: 'Scientific Approach', description: 'A methodical, science-driven approach to product development and quality improvement.', icon: Microscope },
  { title: 'Forward Thinking', description: 'Exploring new possibilities in pharmaceutical manufacturing and product offerings.', icon: Lightbulb },
];

export default function ResearchInnovation() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Innovation"
          title="Research and Innovation"
          subtitle="Advancing pharmaceutical development to meet evolving healthcare needs with a science-driven approach."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/10"
            >
              <img
                src={companyConfig.images.labResearch}
                alt="Pharmaceutical research and development"
                className="w-full h-[360px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-8 -right-4 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            >
              <img
                src={companyConfig.images.labVials}
                alt="Laboratory vials"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="space-y-6">
            {innovationPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex gap-5 p-5 rounded-xl hover:bg-brand-soft-gray transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light-blue group-hover:bg-brand-navy flex items-center justify-center shrink-0 transition-colors duration-300">
                  <point.icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-dark-text">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-dark-text/60 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
