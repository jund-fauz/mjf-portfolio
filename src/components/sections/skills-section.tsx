
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactIcon } from '@/components/icons/react-icon';
import { TailwindIcon } from '@/components/icons/tailwind-icon';
import { TypescriptIcon } from '@/components/icons/typescript-icon';
import { MuiIcon } from '@/components/icons/mui-icon';
import { BootstrapIcon } from '@/components/icons/bootstrap-icon';
import { Github } from '@/components/icons/github';
import { Code, Database, Cog, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  level?: string; // e.g., "Advanced", "Intermediate" - Optional
}

const skillsData: { category: string, icon: React.ElementType, skills: Skill[] }[] = [
  {
    category: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'ReactJS', icon: ReactIcon, level: "Advanced" },
      { name: 'Tailwind CSS', icon: TailwindIcon, level: "Advanced" },
      { name: 'TypeScript', icon: TypescriptIcon, level: "Intermediate" },
      { name: 'Material UI', icon: MuiIcon, level: "Intermediate" },
      { name: 'Bootstrap', icon: BootstrapIcon, level: "Proficient" },
      { name: 'Next.js', icon: Code, level: "Intermediate" }, // Generic icon for Next.js
      { name: 'HTML5 & CSS3', icon: Code, level: "Advanced" }, // Generic icon
    ],
  },
  {
    category: 'Backend & Databases',
    icon: Database,
    skills: [
      { name: 'Node.js', icon: Code, level: "Intermediate" },
      { name: 'Express.js', icon: Code, level: "Intermediate" },
      { name: 'MongoDB', icon: Database, level: "Intermediate" },
      { name: 'Firebase', icon: Cloud, level: "Proficient" },
    ],
  },
  {
    category: 'Tools & Others',
    icon: Cog,
    skills: [
      { name: 'Git & GitHub', icon: Github, level: "Advanced" },
      { name: 'REST APIs', icon: Code, level: "Advanced" },
      { name: 'Responsive Design', icon: Code, level: "Advanced" },
      { name: 'Agile Methodologies', icon: Cog, level: "Proficient" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Technologies & <span className="text-primary">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, catIndex) => (
            <Card key={skillCategory.category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in-0 slide-in-from-bottom-10 duration-500" style={{animationDelay: `${catIndex * 150}ms`}}>
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                <skillCategory.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl font-semibold">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skillCategory.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between p-3 rounded-md hover:bg-background transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-6 w-6 text-secondary" />
                        <span className="text-foreground">{skill.name}</span>
                      </div>
                      {skill.level && <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{skill.level}</span>}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
