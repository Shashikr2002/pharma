import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import Counters from '@/components/home/Counters';
import ProductPortfolio from '@/components/home/ProductPortfolio';
import Expertise from '@/components/home/Expertise';
import QualityReliability from '@/components/home/QualityReliability';
import ResearchInnovation from '@/components/home/ResearchInnovation';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import GlobalReach from '@/components/home/GlobalReach';
import FAQs from '@/components/home/FAQs';
import BusinessEnquiryCTA from '@/components/home/BusinessEnquiryCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Counters />
      <ProductPortfolio />
      <Expertise />
      <QualityReliability />
      <ResearchInnovation />
      <WhyChooseUs />
      <Testimonials />
      <GlobalReach />
      <FAQs />
      <BusinessEnquiryCTA />
    </>
  );
}
