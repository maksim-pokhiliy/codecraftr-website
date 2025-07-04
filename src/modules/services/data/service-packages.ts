"use client";

import CodeIcon from "@mui/icons-material/Code";
import FlightIcon from "@mui/icons-material/Flight";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export interface ServicePackage {
  name: string;
  description: string;
  timeline: string;
  commitment: string;
  estimatedRange: string;
  techStack: string[];
  keyFeatures: string[];
  targetAudience: string;
  icon: React.ElementType;
  featured?: boolean;
  premium?: boolean;
}

export const servicePackages: ServicePackage[] = [
  {
    name: "SaaS MVP Development",
    description:
      "Complete SaaS platform built from scratch with scalable architecture, user management, and subscription billing ready for your first customers.",
    timeline: "8-12 weeks",
    commitment: "40 hours/week",
    estimatedRange: "$19,200 - $38,400",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    keyFeatures: [
      "User authentication & authorization",
      "Subscription billing integration",
      "Admin dashboard",
      "API foundation",
      "Responsive web app",
      "Deployment setup",
    ],
    targetAudience: "B2B SaaS Startups",
    icon: CodeIcon,
    featured: true,
  },
  {
    name: "Travel SaaS Platform",
    description:
      "Specialized booking platforms with travel-specific workflows, payment processing, and real-time availability systems built with domain expertise.",
    timeline: "10-14 weeks",
    commitment: "40 hours/week",
    estimatedRange: "$32,000 - $56,000",
    techStack: ["React", "Node.js", "MongoDB", "Travel APIs", "Stripe"],
    keyFeatures: [
      "Travel-specific booking workflows",
      "Complex payment processing",
      "Real-time availability systems",
      "Multi-vendor management",
      "Travel domain integrations",
      "Booking confirmation systems",
    ],
    targetAudience: "Travel Tech Startups",
    icon: FlightIcon,
    premium: true,
  },
  {
    name: "Platform Modernization",
    description:
      "Refactor existing SaaS platforms with modern architecture, performance optimization, and new feature development for scaling companies.",
    timeline: "12-20 weeks",
    commitment: "30-40 hours/week",
    estimatedRange: "$32,400 - $96,000",
    techStack: ["React", "Node.js", "MongoDB", "AWS", "CI/CD"],
    keyFeatures: [
      "Technical debt analysis",
      "Architecture refactoring",
      "Performance optimization",
      "Security improvements",
      "New feature development",
      "Team knowledge transfer",
    ],
    targetAudience: "Growing SaaS Companies",
    icon: TrendingUpIcon,
  },
  {
    name: "Mobile App Development",
    description:
      "Cross-platform React Native apps that integrate seamlessly with your existing SaaS platform, extending your reach to mobile users.",
    timeline: "6-10 weeks",
    commitment: "30-40 hours/week",
    estimatedRange: "$10,800 - $40,000",
    techStack: ["React Native", "API Integration", "Push Notifications"],
    keyFeatures: [
      "React Native app development",
      "API integration with existing platform",
      "Push notifications setup",
      "App store deployment",
      "User analytics integration",
      "Offline functionality",
    ],
    targetAudience: "Existing SaaS Platform Owners",
    icon: PhoneAndroidIcon,
  },
];
