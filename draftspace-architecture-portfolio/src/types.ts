
export type Lang = "EN" | "VI";

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  year: string;
  location: string;
  images: string[];
  description: string;
  intent?: string;
  intent2?: string;
  team?: { role: string; name?: string }[];
  drawings?: string[];
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
  servicesTitle: string;
  servicesDesc: string;
  otherServicesTitle: string;
  processes: { t: string; d: string }[];
  aboutTeamCulture: string;
  teamRoles: string[];
  aboutStudioProfile: string;
  credentials: { t: string; d: string }[];
  projectNotFound: string;
  returnHome: string;
  selectedWork: string;
  architecturalIntent: string;
  nextProjectLabel: string;
  teamLabel: string;
  locationLabel: string;
  emailLabel: string;
  phoneLabel: string;
}
