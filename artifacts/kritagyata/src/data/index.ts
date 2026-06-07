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
    id: 2,
    title: "Aarogya Seva — Rural Health Camp",
    description: "Free medical check-up camps bringing doctors, diagnostic facilities, and essential medicines directly to underserved rural communities.",
    longDescription: "Access to basic healthcare remains a distant dream for millions living in rural India. Aarogya Seva was our response — a mobile health camp initiative that brings qualified doctors, diagnostic equipment, and medicines directly to villages.\n\nEach camp is a full-day event staffed by volunteer doctors, nurses, and healthcare workers. We conduct general check-ups, eye tests, dental screenings, blood pressure and blood sugar monitoring, and distribute essential medicines free of charge.\n\nIn our most recent camp, we screened over 400 individuals in a single day, identified several cases requiring urgent referral, and connected families with the nearest government health facilities.",
    category: "Healthcare",
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    beneficiaries: 860,
    location: "Ahmednagar, Maharashtra",
    tags: ["health", "rural", "medical", "camp"],
  },
  {
    id: 3,
    title: "Harit Bharat — Tree Plantation Drive",
    description: "A large-scale community tree plantation drive to combat deforestation and engage local communities in environmental stewardship.",
    longDescription: "The Harit Bharat initiative emerged from our concern for declining green cover in peri-urban areas. We organized community plantation drives, working with local schools, panchayats, and forest departments to plant native species along roadsides, school premises, and degraded land.\n\nVolunteers and community members together planted saplings and committed to their upkeep for the first year. We also conducted environmental awareness workshops in schools, introducing children to ecology, climate change, and the importance of trees.\n\nThis project taught us that environmental action is most effective when communities take ownership — and they did.",
    category: "Environment",
    year: 2022,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    beneficiaries: 3200,
    location: "Pune District, Maharashtra",
    tags: ["environment", "trees", "community", "nature"],
  },
  {
    id: 4,
    title: "Ujjwal Kal — Skill Development Workshop",
    description: "Vocational training and skill-building workshops for unemployed youth, equipping them with practical skills for sustainable livelihoods.",
    longDescription: "Ujjwal Kal addresses the gap between education and employability. We partnered with local craftspeople, technicians, and entrepreneurs to deliver short-term skill workshops in tailoring, electrical repair, mobile phone servicing, and basic computer literacy.\n\nParticipants received certification upon completion, and we facilitated connections with local businesses for placement or self-employment support. Several participants have since started their own micro-enterprises.\n\nThis program reinforced our belief that dignity comes from economic independence — and that skills, once given, cannot be taken away.",
    category: "Livelihood",
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    beneficiaries: 320,
    location: "Solapur, Maharashtra",
    tags: ["skills", "youth", "livelihood", "employment"],
  },
  {
    id: 5,
    title: "Annadaan — Food Distribution Drive",
    description: "Regular food distribution drives providing cooked meals and ration kits to homeless individuals, daily-wage workers, and families in crisis.",
    longDescription: "During the pandemic, we saw hunger and desperation up close. Annadaan began as an emergency response and has since become a regular monthly initiative.\n\nOur volunteers cook and distribute hot meals to homeless individuals, construction workers, and families experiencing temporary hardship. We also distribute dry ration kits — rice, dal, oil, and spices — enough to sustain a family for two weeks.\n\nEvery distribution drive is a reminder that food is not just sustenance — it is dignity. We do not merely hand over packets; we sit, talk, and listen.",
    category: "Food & Nutrition",
    year: 2021,
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    beneficiaries: 5800,
    location: "Pune, Maharashtra",
    tags: ["food", "hunger", "community", "relief"],
  },
  {
    id: 6,
    title: "Sahara — Women Empowerment Initiative",
    description: "A support and skill-building program for women survivors of domestic hardship, providing legal aid awareness, counselling, and economic opportunities.",
    longDescription: "Sahara was built on the recognition that empowerment is not a single intervention — it is a sustained relationship of trust and support. We work with women who have faced domestic hardship, helping them navigate legal processes, access government schemes, and develop economic independence.\n\nOur program includes regular support group sessions, legal aid awareness workshops conducted in partnership with law students and practitioners, and skill-building sessions in handicrafts and home-based businesses.\n\nThe most powerful outcome has been community — women who once felt isolated finding solidarity and strength in each other.",
    category: "Women Empowerment",
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    beneficiaries: 180,
    location: "Kolhapur, Maharashtra",
    tags: ["women", "empowerment", "legal", "support"],
  },
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
  totalProjects: 8,
  totalBeneficiaries: 10645,
  yearsActive: 6,
  volunteers: 120,
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
