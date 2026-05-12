export interface ExperienceType {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Experience" | "Education"; 
  badge: string; 
  desc: string;
  skills: string[];
  isCurrent?: boolean;
}

export const experiences: ExperienceType[] = [
  {
    id: 1,

    role:
      "Dashboard System Development Intern",

    company:
      "Informatics Engineering Department, UIN Suska Riau",

    location:
      "Pekanbaru, Indonesia",

    period:
      "Jan 2025 - Mar 2025",

    type:
      "Experience",

    badge:
      "Internship",

    desc:
      "Contributed to the development and interface design of the Informatics Engineering dashboard system, focusing on user experience, operational workflows, and modern dashboard visualization.",

    skills: [
      "React",
      "Dashboard Systems",
      "UI/UX",
      "Tailwind CSS",
    ],

    isCurrent:
      false,
  },

  {
  id: 2,

  role:
    "Computer & Network Engineering",

  company:
    "SMK Negeri 2 Dumai",

  location:
    "Dumai, Indonesia",

  period:
    "2019 - 2022",

  type:
    "Education",

  badge:
    "Vocational High School",

  desc:
    "Studied computer networking, network infrastructure, hardware systems, and basic cybersecurity concepts through technical vocational education in Computer & Network Engineering (TKJ).",

  skills: [
    "Computer Networking",
    "Network Infrastructure",
    "Linux",
    "Hardware Systems",
  ],
},

  {
    id: 3,

    role:
      "Bachelor of Informatics Engineering",

    company:
      "UIN Suska Riau",

    location:
      "Pekanbaru, Indonesia",

    period:
      "2022 - 2026",

    type:
      "Education",

    badge:
      "Bachelor's Degree",

    desc:
      "Focused on Industrial Data Analytics, cybersecurity, operational intelligence, and enterprise system development through academic and independent projects.",

    skills: [
      "Python",
      "Data Analytics",
      "Cybersecurity",
      "Dashboard Systems",
    ],
    isCurrent:
      true,
  },
];