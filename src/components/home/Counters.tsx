import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { companyConfig } from '@/config/company';

function Counter({ value, suffix, label, note }: { value: number; suffix: string; label: string; note: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-display font-bold text-white">
        {count}
        <span className="text-brand-accent">{suffix}</span>
      </p>
      <p className="mt-2 text-sm md:text-base text-white/80 font-medium">{label}</p>
      <p className="mt-1 text-[10px] text-white/40">{note}</p>
    </div>
  );
}

export default function Counters() {
  return (
    <section className="py-20 md:py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-brand-accent blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Our Journey in Numbers
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            Figures that reflect our commitment to pharmaceutical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {companyConfig.counters.map((counter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Counter {...counter} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
