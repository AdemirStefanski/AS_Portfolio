export enum SelectedPage {
  Home = "home",
  About ="about",
  Projects = "projects",
  Certifications = "certifications",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface Course {
  id: number;
  title: string;
  duration: string;
  syllabus: string[];
  imageUrl: string;
}