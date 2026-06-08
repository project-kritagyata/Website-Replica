export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  year: number;
  imageUrl: string;
  beneficiaries: number;
  location: string;
  tags: string[];
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
  projectId: number | null;
}

export interface ProjectStats {
  totalProjects: number;
  totalBeneficiaries: number;
  yearsActive: number;
  volunteers: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Old Age Home Visits",
    description: "A heartfelt visit to elderly residents at an old age home in Paschim Vihar, New Delhi — bringing joy, companionship, and essential supplies to 35+ seniors in collaboration with Project Aqidat.",
    longDescription: "On 15th March 2026, Project Kritagyata joined hands with Project Aqidat for a deeply moving Old Age Home Visit drive at Paschim Vihar, New Delhi. Volunteers gathered to spend quality time with elderly residents who often go weeks without visitors — sharing conversations, distributing food and daily essentials, and offering the simple but powerful gift of human connection. The drive touched the lives of 35+ residents, many of whom expressed how much these visits mean to them.",
    category: "Elder Care",
    year: 2026,
    imageUrl: "/old-age-home-visit.png",
    beneficiaries: 35,
    location: "Paschim Vihar, New Delhi",
    tags: ["Elder Care", "Community", "Collaboration", "Project Aqidat", "New Delhi"],
  },
  {
    id: 7,
    title: "Sharbat Distribution",
    description: "A refreshing act of care — distributing sharbat to passersby, workers, and the underprivileged at Connaught Place, Delhi, on a hot summer day in collaboration with Project Aqidat, Project Sukh, and Thrive Together.",
    longDescription: "On 17th May 2026, amid the sweltering summer heat of Delhi, Project Kritagyata united with three incredible partner organisations — Project Aqidat, Project Sukh, and Thrive Together — for a Sharbat Distribution drive at Connaught Place, Delhi. Volunteers lined the streets, offering cool, refreshing sharbat to daily wage workers, street vendors, auto-rickshaw drivers, and anyone who passed by. The drive was a celebration of solidarity — a simple, joyful reminder that caring for one another is the highest form of gratitude. Hundreds of glasses of sharbat were distributed, smiles were exchanged, and for a few hours, the bustling heart of Delhi felt a little cooler and a lot kinder.",
    category: "Distribution",
    year: 2026,
    imageUrl: "/sharbat-distribution.jpeg",
    beneficiaries: 200,
    location: "Connaught Place, Delhi",
    tags: ["Distribution", "Food & Beverage", "Collaboration", "Project Aqidat", "Project Sukh", "Thrive Together", "Delhi"],
  },
  {
    id: 9,
    title: "Visit at Bharte Kadam NGO",
    description: "A joyful and impactful visit to Bharte Kadam NGO, Sector 1, Rohini, New Delhi — spending meaningful time with underprivileged children, engaging them in activities and bringing warmth to 45+ young beneficiaries.",
    longDescription: "On 28th December 2025, Project Kritagyata volunteers visited Bharte Kadam NGO at Sector 1, Rohini, New Delhi — a centre dedicated to educating and supporting children from underprivileged communities. The visit was filled with laughter, learning, and connection as our team engaged the children in interactive activities, distributed supplies, and spent quality time with each of them. Over 45 beneficiaries were touched by the drive. The energy and excitement in the children's eyes was an unforgettable reminder of the difference that showing up can make. This was one of Kritagyata's earliest drives, carried out just weeks after our launch — and it set the spirit for everything that followed.",
    category: "Community Visit",
    year: 2025,
    imageUrl: "/bharte-kadam-visit.jpeg",
    beneficiaries: 45,
    location: "Bharte Kadam NGO, Sector 1, Rohini, New Delhi",
    tags: ["Community Visit", "Children", "Education", "Rohini", "New Delhi", "2025"],
  },
  {
    id: 8,
    title: "Clothes & Food Distribution",
    description: "Project Kritagyata distributed clothes and food to underprivileged children and families at Sector 5, Rohini, New Delhi — bringing warmth, nourishment, and dignity to 50+ beneficiaries.",
    longDescription: "On 9th May 2026, Project Kritagyata volunteers gathered at Sector 5, Rohini, New Delhi for a Clothes and Food Distribution drive. The team reached out to underprivileged children and families in the area, distributing essential clothing items and nutritious food packets. Over 50 beneficiaries — many of them young children — received support on the day. The smiles on the children's faces were a powerful reminder of why every act of giving matters. This drive reflected the core belief of Kritagyata: that gratitude is not a passive feeling, but an active commitment to the communities around us.",
    category: "Distribution",
    year: 2026,
    imageUrl: "/clothes-food-distribution.jpeg",
    beneficiaries: 50,
    location: "Sector 5, Rohini, New Delhi",
    tags: ["Distribution", "Children", "Food", "Clothing", "Rohini", "New Delhi"],
  },
];

export const projectStats: ProjectStats = {
  totalProjects: 4,
  totalBeneficiaries: 330,
  yearsActive: 6,
  volunteers: 70,
};

export const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&q=80", caption: "Children at our evening learning center in Nashik", projectId: 1 },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80", caption: "A volunteer mentor conducting a session with students", projectId: 1 },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", caption: "Doctor conducting free check-ups at our health camp", projectId: 2 },
  { id: 4, imageUrl: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&q=80", caption: "Community members gathering for the Harit Bharat plantation drive", projectId: 3 },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80", caption: "Skill development workshop participants in Solapur", projectId: 4 },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80", caption: "Volunteers preparing meals for the Annadaan food drive", projectId: 5 },
  { id: 7, imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80", caption: "Women participants at a Sahara support group session", projectId: 6 },
  { id: 8, imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", caption: "Food packets being distributed to families", projectId: 5 },
  { id: 9, imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80", caption: "Volunteers with sapling kits at the plantation drive", projectId: 3 },
  { id: 10, imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", caption: "Eye testing underway at our rural health camp", projectId: 2 },
  { id: 11, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", caption: "A volunteer coordinator planning the next camp", projectId: null },
  { id: 12, imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80", caption: "Computer literacy session at our skill workshop", projectId: 4 },
];
