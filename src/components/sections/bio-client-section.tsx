"use client";

import { useEffect, useState } from 'react';
import { generateBio } from '@/ai/flows/generate-bio';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';

const BioClientSection = () => {
  const [bio, setBio] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBio = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const keywords = "ReactJS, Tailwind CSS, Typescript, Material UI, Bootstrap";
        const result = await generateBio({ keywords });
        setBio(result.bio);
      } catch (err) {
        console.error("Failed to generate bio:", err);
        setError("Failed to load introduction. Please try again later.");
        // Fallback bio
        setBio("A passionate developer skilled in modern web technologies, focused on creating elegant and efficient solutions.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBio();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  if (error && !bio) { // Show error only if bio is not available (even fallback)
    return (
       <Alert variant="destructive" className="mt-4">
         <Terminal className="h-4 w-4" />
         <AlertTitle>Error</AlertTitle>
         <AlertDescription>{error}</AlertDescription>
       </Alert>
    )
  }
  

  return (
    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
      {bio || "Loading bio..."}
    </p>
  );
};

export default BioClientSection;
