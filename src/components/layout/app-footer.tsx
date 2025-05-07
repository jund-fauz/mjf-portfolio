import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/mujadidjundi', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mujadidjundi', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/mujadidjundi', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@mujadidjundi', icon: Youtube },
];

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Mujadid Jundi Fauzi. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Next.js, Tailwind CSS, and Genkit.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
