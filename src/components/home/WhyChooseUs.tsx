import { motion } from 'framer-motion';
import {
  ShieldCheck, PackageCheck, Users, HeartHandshake,
  Sparkles, Globe,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { companyConfig } from '@/config/company';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  PackageCheck,
  Users,
  HeartHandshake,
  Sparkles,
  Globe,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-soft-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Pharma Healthcare"
          title="Why Choose Us"
          subtitle="Professional strengths and business priorities that define our approach to pharmaceutical excellence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {companyConfig.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-500 border border-gray-50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/10 group-hover:bg-brand-navy flex items-center justify-center shrink-0 transition-all duration-300">
                    <Icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-dark-text mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-dark-text/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
