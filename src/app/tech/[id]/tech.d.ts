export type TSingleBlogType = {
  id: number;
  title: string;
  content: string;
  tag: TtechnologyType;
};

export type TtechnologyType =
  | "React"
  | "Javascript"
  | "Typescript"
  | "Next.js"
  | "Nest.js"
  | "Node.js"
  | "Software Structure"
  | "OS"
  | "Computer Science"
  | "Diary";
