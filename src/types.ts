
export type Lang = "EN" | "VI";

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  year: string;
  location: string;
  image: string;
  description: string;
}

export interface Philosophy {
  t: string;
  d: string;
}

export interface ServiceDetail {
  t: string;
  d: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface Translation {
  nav: string[];
  heroTitle: string[];
  heroSub: string;
  selectedWorks: string;
  archive: string;
  profile: string;
  bio: string;
  team: string;
  philosophies: Philosophy[];
  serviceDetails: ServiceDetail[];
  otherServices: ServiceDetail[];
  contactInfo: ContactInfo;
  back: string;
  projectStats: string[];
  status: string[];
  newProjects: string;
  studioImg: string;
  teamIntroduction: string;
}
