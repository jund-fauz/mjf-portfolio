import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator className="my-0" />
      <ProjectsSection />
      <Separator className="my-0" />
      <SkillsSection />
      <Separator className="my-0" />
      <ContactSection />
    </>
  );
}
