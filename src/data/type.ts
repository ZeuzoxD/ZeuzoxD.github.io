export type Project = {
  id: string;
  title: string;
  subtitle: string;
  shortdescription: string;
  longdescription: string;
  year: number;
  type: string;
  team: "Solo Project" | "Research Team";
  status: "Completed" | "In Progress" | "Ongoing";
  tags: string[];
  tech: string[];
  featured?: boolean;
  demoLink?: string;
  codeLink?: string;
};
