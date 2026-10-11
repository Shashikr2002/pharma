import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-sm font-bold uppercase tracking-widest mb-3 ${
            light ? 'text-brand-accent' : 'text-brand-navy'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-display font-bold leading-tight ${
          light ? 'text-white' : 'text-brand-dark-text'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-brand-dark-text/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
