import type { SVGProps } from 'react';
// Using Lucide's existing Github icon as a base
import { Github as LucideGithub } from 'lucide-react';

export function Github(props: SVGProps<SVGSVGElement>) {
  return <LucideGithub {...props} />;
}
