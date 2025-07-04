"use client";

import ArchitectureIcon from "@mui/icons-material/Architecture";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export interface ProcessWeek {
  week: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  activities: string[];
  clientInvolvement: string;
  icon: React.ElementType;
}

export const developmentWeeks: ProcessWeek[] = [
  {
    week: "Week 1-2",
    phase: "Foundation",
    title: "Architecture & Planning",
    description: "We design your SaaS architecture and create detailed technical roadmap",
    deliverables: [
      "Database schema design",
      "API architecture plan",
      "User flow diagrams",
      "Technical specification document",
    ],
    activities: [
      "Requirements analysis",
      "Technology stack finalization",
      "Development environment setup",
      "Security planning",
    ],
    clientInvolvement: "Daily standups for feedback and clarifications",
    icon: ArchitectureIcon,
  },
  {
    week: "Week 3-6",
    phase: "Core Development",
    title: "MVP Features Build",
    description: "Building your core SaaS functionality with scalable foundations",
    deliverables: [
      "User authentication system",
      "Core business logic",
      "Admin dashboard",
      "API endpoints",
    ],
    activities: [
      "Frontend component development",
      "Backend API creation",
      "Database implementation",
      "Real-time features setup",
    ],
    clientInvolvement: "Weekly demos and feature reviews",
    icon: CodeIcon,
  },
  {
    week: "Week 7-8",
    phase: "Integration",
    title: "Third-party Services",
    description: "Connecting payment processing, analytics, and essential integrations",
    deliverables: [
      "Stripe subscription billing",
      "Email notification system",
      "Analytics integration",
      "Security implementation",
    ],
    activities: [
      "Payment gateway setup",
      "Webhook implementation",
      "Testing automation",
      "Performance optimization",
    ],
    clientInvolvement: "Integration testing and approval",
    icon: IntegrationInstructionsIcon,
  },
  {
    week: "Week 9-10",
    phase: "Launch",
    title: "Deployment & Go-Live",
    description: "Production deployment with monitoring and documentation",
    deliverables: [
      "Production deployment",
      "Technical documentation",
      "Admin training materials",
      "Monitoring dashboard",
    ],
    activities: [
      "Server configuration",
      "SSL setup and security",
      "Performance monitoring",
      "Team knowledge transfer",
    ],
    clientInvolvement: "Final testing and launch coordination",
    icon: RocketLaunchIcon,
  },
];
