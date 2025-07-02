"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import PaymentIcon from "@mui/icons-material/Payment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export interface SaaSBusinessChallenge {
  title: string;
  problem: string;
  approach: string;
  icon: React.ElementType;
}

export const saasBusinessChallenges: SaaSBusinessChallenge[] = [
  {
    title: "Time to Market Pressure",
    problem:
      "Founders have 12-18 months runway. Every week of development delay burns cash and pushes back revenue.",
    approach:
      "We build MVPs in 8-12 weeks with scalable foundations. No technical debt that slows future iterations.",
    icon: AccessTimeIcon,
  },
  {
    title: "Scalable Architecture",
    problem:
      "Most platforms break at 1,000+ users because they weren't built to scale from day one.",
    approach:
      "Enterprise-grade MERN architecture that handles growth from 10 to 10,000+ users without rebuilding.",
    icon: ArchitectureIcon,
  },
  {
    title: "Subscription Complexity",
    problem:
      "Trials, upgrades, downgrades, failed payments, and churn handling require complex business logic.",
    approach:
      "Stripe-powered subscription engine with proper webhook handling and customer lifecycle management.",
    icon: PaymentIcon,
  },
  {
    title: "Product-Market Fit",
    problem:
      "SaaS requires constant iteration based on user feedback and analytics to find product-market fit.",
    approach:
      "Built-in analytics, A/B testing capabilities, and architecture that supports rapid feature development.",
    icon: TrendingUpIcon,
  },
];
