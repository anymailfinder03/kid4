import Hero from '@/components/home/Hero';
import WhyILE from '@/components/home/WhyILE';
import Programs from '@/components/home/Programs';
import LearningJourney from '@/components/home/LearningJourney';
import Teachers from '@/components/home/Teachers';
import Results from '@/components/home/Results';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyILE />
      <Programs />
      <LearningJourney />
      <Teachers />
      <Results />
    </>
  );
}
