import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BioClientSection from './bio-client-section';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-card animate-in fade-in duration-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in slide-in-from-left-12 duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary mt-1">Mujadid Jundi Fauzi</span>
            </h1>
            <BioClientSection />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105">
                <Link href="#projects">
                  View My Work <ArrowDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-all duration-300 hover:scale-105">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-in slide-in-from-right-12 duration-700">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary transform transition-all duration-500 hover:scale-105">
              <Image
                src="https://picsum.photos/seed/mujadid/400/400" // Placeholder image
                alt="Mujadid Jundi Fauzi"
                layout="fill"
                objectFit="cover"
                className="transform transition-all duration-500 group-hover:scale-110"
                data-ai-hint="professional portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
