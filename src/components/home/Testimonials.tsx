import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote: 'Partnering with Pharma Healthcare has been a reliable experience. Their commitment to quality and timely supply has been consistent throughout our association.',
    author: 'Distribution Partner',
    role: 'Placeholder — name to be added',
    rating: 5,
  },
  {
    quote: 'The product quality and professional approach of the team have been commendable. We look forward to a continued partnership.',
    author: 'Healthcare Institution',
    role: 'Placeholder — name to be added',
    rating: 5,
  },
  {
    quote: 'Responsive communication and dependable deliveries make Pharma Healthcare a trusted partner in our supply chain.',
    author: 'Business Associate',
    role: 'Placeholder — name to be added',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <section
      className="py-20 md:py-28 bg-brand-navy relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-brand-accent blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Partners Say"
          subtitle="Placeholder testimonials — genuine reviews will be added upon availability."
          light
        />

        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-center"
              >
                <Quote className="w-12 h-12 text-brand-accent mx-auto mb-6 opacity-50" />
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium max-w-3xl mx-auto">
                  "{testimonials[current].quote}"
                </p>
                <div className="mt-8">
                  <p className="font-display font-bold text-white text-lg">
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm text-white/50 mt-1">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-brand-accent' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
