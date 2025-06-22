export type TextBlock = {
  type: "text";
  content: string;
  styles?: string;
};

export type HeadingBlock = {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
  styles?: string;
};

export type ImageBlock = {
  type: "image";
  src: string | string[];
  alt: string;
  caption?: string;
  layout?: "single" | "gallery" | "full-width";
  styles?: string;
};

export type CodeBlock = {
  type: "code";
  language: string;
  code: string;
  fileName?: string;
  styles?: string;
};

export type LinkBlock = {
  type: "link";
  href: string;
  text: string;
  icon?: string;
  styles?: string;
};

export type ListBlock = {
  type: "list";
  items: string[];
  ordered?: boolean; //true for <ol>, false for <ul>
  styles?: string;
};

export type ProjectContentBlock =
  | TextBlock
  | HeadingBlock
  | ImageBlock
  | CodeBlock
  | LinkBlock
  | ListBlock;

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category?: string[];
  shortdescription: string;
  longdescription?: string;
  year: number;
  type?: string;
  team: "Solo Project" | "Research";
  status: "Completed" | "In Progress" | "Ongoing";
  tags: string[];
  tech: string[];
  featured?: boolean;
  demoLink?: string;
  codeLink?: string;
  contentBlocks?: ProjectContentBlock[];
};
