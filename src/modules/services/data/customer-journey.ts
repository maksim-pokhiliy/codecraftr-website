"use client";

export interface JourneyStep {
  title: string;
  description: string;
  details: string[];
  duration: string;
}

export const journeySteps: JourneyStep[] = [
  {
    title: "Discovery Call",
    description:
      "30-minute conversation to understand your SaaS vision, technical requirements, and business goals.",
    details: [
      "Discuss your product vision",
      "Understand target market",
      "Review technical requirements",
      "Identify key challenges",
    ],
    duration: "30 minutes",
  },
  {
    title: "Technical Assessment",
    description:
      "Deep dive into your project architecture, technology stack, and scalability requirements.",
    details: [
      "SaaS architecture planning",
      "Technology stack selection",
      "Scalability considerations",
      "Integration requirements",
    ],
    duration: "2-3 days",
  },
  {
    title: "Custom Proposal",
    description:
      "Detailed development plan with timeline, milestones, and transparent pricing breakdown.",
    details: [
      "Project timeline & phases",
      "Technical milestones",
      "Resource allocation",
      "Investment breakdown",
    ],
    duration: "3-5 days",
  },
  {
    title: "Agreement & Kickoff",
    description:
      "Contract signing and project kickoff with team introductions and development setup.",
    details: [
      "Contract finalization",
      "Team introductions",
      "Development environment setup",
      "Communication channels",
    ],
    duration: "1-2 days",
  },
  {
    title: "Ongoing Development",
    description:
      "Iterative development with weekly updates, transparent progress tracking, and continuous collaboration.",
    details: [
      "Weekly progress reports",
      "Regular stakeholder updates",
      "Iterative feedback cycles",
      "Transparent collaboration",
    ],
    duration: "8-12 weeks",
  },
];
