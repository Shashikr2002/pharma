import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb: string;
}

export default function PageBanner({ title, subtitle, image, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative h-[420px] md:h-[480px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/70" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-widest">
            {breadcrumb}
          </span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
