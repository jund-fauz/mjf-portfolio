import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/mujadidjundi', icon: Github, handle: '@mujadidjundi' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mujadidjundi', icon: Linkedin, handle: 'mujadidjundi' },
  { name: 'Instagram', href: 'https://instagram.com/mujadidjundi', icon: Instagram, handle: '@mujadidjundi' },
  { name: 'YouTube', href: 'https://youtube.com/@mujadidjundi', icon: Youtube, handle: '@mujadidjundi' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl animate-in fade-in-0 slide-in-from-left-10 duration-500">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
              <CardDescription>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" type="text" placeholder="Subject of your message" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." className="mt-1 min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-in fade-in-0 slide-in-from-right-10 duration-500">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <Link href="mailto:mujadid.j.f@example.com" className="text-foreground hover:text-primary transition-colors">
                    mujadid.j.f@example.com
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-foreground">+12 345 678 90 (Example)</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map(link => (
                  <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <link.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">{link.name}</p>
                      <p className="text-sm text-muted-foreground">{link.handle}</p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
