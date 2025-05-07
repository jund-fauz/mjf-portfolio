import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveSiteUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    id: 'project-1',
    name: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with admin panel, payment integration, and user accounts.',
    imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
    imageHint: 'website screenshot',
    liveSiteUrl: '#',
    githubUrl: '#',
    tags: ['ReactJS', 'Next.js', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 'project-2',
    name: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and intuitive UI.',
    imageUrl: 'https://picsum.photos/seed/taskapp/600/400',
    imageHint: 'application interface',
    liveSiteUrl: '#',
    githubUrl: '#',
    tags: ['Vue.js', 'Firebase', 'Material UI'],
  },
  {
    id: 'project-3',
    name: 'Personal Blog',
    description: 'A customizable personal blog built with a headless CMS and static site generation.',
    imageUrl: 'https://picsum.photos/seed/blog/600/400',
    imageHint: 'blog design',
    githubUrl: '#',
    tags: ['Gatsby', 'GraphQL', 'Netlify CMS'],
  },
   {
    id: 'project-4',
    name: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with various chart types.',
    imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
    imageHint: 'charts graphs',
    liveSiteUrl: '#',
    tags: ['D3.js', 'Python (Flask)', 'Bootstrap'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Portfolio</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-10 duration-500" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="p-0">
                <div className="relative w-full h-48 sm:h-60">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl font-semibold mb-2">{project.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                 <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary/20 text-secondary-foreground rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end space-x-3">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.liveSiteUrl && (
                  <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Site
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
