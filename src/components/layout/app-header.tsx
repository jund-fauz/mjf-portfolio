import Link from 'next/link';
import { CodeXml } from 'lucide-react';

const AppHeader = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border/50 shadow-sm sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors">
          <CodeXml className="h-6 w-6" />
          <span>Mujadid Jundi Fauzi</span>
        </Link>
        {/* Navigation links can be added here if needed */}
        {/* <nav className="hidden md:flex gap-4">
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </nav> */}
      </div>
    </header>
  );
};

export default AppHeader;
