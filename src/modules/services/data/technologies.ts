"use client";

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  logoPath: string;
}

export const technologies: Technology[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend Framework",
    description:
      "Component-based architecture for fast development cycles and reusable UI patterns. Perfect for building scalable SaaS interfaces that users love.",
    logoPath: "/icons/technologies/react.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    description:
      "High-performance JavaScript runtime for building scalable APIs and real-time features. Unified language across the entire stack for faster development.",
    logoPath: "/icons/technologies/nodejs.svg",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    description:
      "Flexible NoSQL database that scales with your SaaS growth. Perfect for rapid iteration and handling complex, evolving data structures.",
    logoPath: "/icons/technologies/mongodb.svg",
  },
  {
    id: "express",
    name: "Express",
    category: "Web Framework",
    description:
      "Minimal and flexible Node.js framework for building robust APIs quickly. Battle-tested foundation trusted by millions of applications worldwide.",
    logoPath: "/icons/technologies/express.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming Language",
    description:
      "Type-safe JavaScript for enterprise-grade applications. Dramatically reduces bugs and improves code maintainability as your development team grows.",
    logoPath: "/icons/technologies/typescript.svg",
  },
];
