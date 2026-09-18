export interface WorkExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface VolunteerLeadershipItem {
  role: string;
  organization: string;
  period: string;
  details: string;
}

export interface CompetencyCategory {
  reliability: string[];
  devops: string[];
  fintech: string[];
  architecture?: string[];
}

export interface GamingFocusItem {
  id: string;
  name: string;
  genre: string;
  tagline: string;
  focus: string;
  highlights: string[];
  icon: string;
  status: string;
}

export interface GamingProfile {
  tag: string;
  title: string;
  bio: string;
  platforms: {
    youtube?: string;
    discord?: string;
    twitch?: string;
  };
  games: GamingFocusItem[];
}

export interface FounderProfile {
  name: string;
  realName: string;
  title: string;
  preferredTitle?: string;
  pronouns?: string;
  heroTagline?: string;
  heroSubtitle?: string;
  elevatorPitch?: string;
  sponsorshipStatement?: string;
  avatar: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
  experience: string[];
  gamingProfile?: GamingProfile;
  cvDetails: {
    professionalProfile: string;
    cognitiveApproach: string;
    competencies: CompetencyCategory;
    workExperience: WorkExperienceItem[];
    education: EducationItem[];
    volunteerLeadership: VolunteerLeadershipItem[];
    accommodations: string[];
  };
}

export interface VentureArchitecturalContribution {
  feature: string;
  description: string;
}

export interface FoundingVenture {
  project: string;
  founder: string;
  client?: string;
  category?: 'flagship' | 'investigative' | 'climate' | 'fine-art';
  dates?: string;
  tagline: string;
  role: string;
  mission: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    intelligence_engine?: string[];
    media_processing?: string[];
  };
  status: string;
  key_architectural_contributions: Array<string | VentureArchitecturalContribution>;
  architecture_compliance?: {
    module_separation: string;
    state_persistence: string;
  };
  demoUrl?: string;
  repoUrl?: string;
}

export interface ConsultingInquiry {
  id?: string;
  email: string;
  fullName: string;
  affiliation: string;
  topic?: string;
  message: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  linkSent: boolean;
  createdAt?: any;
  updatedAt?: any;
}

// Retain minimal types if referenced elsewhere
export interface Holding {
  ticker: string;
  name: string;
  allocation: number;
  value: number;
  costBasis: number;
  currentPrice: number;
  peRatio: number;
  dividendYield: number;
  rationale: string;
  category: string;
  deiScore: number;
  controversyFree: boolean;
}

export interface InvestmentPod {
  id: string;
  name: string;
  description: string;
  focus: string;
  membersCount: number;
  simulatedBalance: number;
  portfolio: { ticker: string; shares: number; avgCost: number; currentPrice: number }[];
  proposals: any[];
  pnlPercentage: number;
  isUserMember: boolean;
}

export interface Proposal {
  id: string;
  ticker: string;
  action: 'BUY' | 'SELL';
  price: number;
  shares: number;
  proposedBy: string;
  thesis: string;
  riskFactor: string;
  upvotes: number;
  downvotes: number;
  votedUsers: string[];
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  timestamp: string;
}

