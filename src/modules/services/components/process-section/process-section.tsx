"use client";

import { ProcessStep, ProcessStepContent } from "@app/shared/components/ui/process-step-content";
import { TabbedSection, TabItem } from "@app/shared/components/ui/tabbed-section";

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    duration: "1-2 weeks",
    description:
      "Deep dive into your SaaS business model, technical requirements, and scalability goals. We analyze your target market, competition, and revenue models to architect the perfect technical foundation. Our discovery process ensures your SaaS platform is built for sustainable growth from day one.",
    deliverables: [
      "SaaS ARCHITECTURE BLUEPRINT",
      "TECHNICAL SPECIFICATION",
      "USER PERSONAS & FLOWS",
      "SCALABILITY ROADMAP",
      "MERN STACK SETUP",
      "PROJECT TIMELINE",
      "RESOURCE ALLOCATION",
      "RISK ASSESSMENT",
    ],
  },
  {
    id: "design",
    title: "Design",
    duration: "2-3 weeks",
    description:
      "SaaS-focused UI/UX design that prioritizes user onboarding, dashboard clarity, and conversion optimization. We create intuitive workflows for complex business processes, ensuring your users can accomplish their goals efficiently while maximizing your platform's business metrics.",
    deliverables: [
      "USER JOURNEY MAPPING",
      "WIREFRAMES & PROTOTYPES",
      "SaaS DASHBOARD DESIGN",
      "RESPONSIVE UI COMPONENTS",
      "CONVERSION OPTIMIZATION",
      "BRANDING & THEME",
    ],
  },
  {
    id: "development",
    title: "Development",
    duration: "6-10 weeks",
    description:
      "Enterprise-grade MERN stack development with SaaS-specific features like multi-tenancy, subscription billing, role-based access control, and API integrations. We build scalable architecture that handles growth from your first user to enterprise customers.",
    deliverables: [
      "MERN STACK IMPLEMENTATION",
      "MULTI-TENANT ARCHITECTURE",
      "SUBSCRIPTION BILLING",
      "USER MANAGEMENT SYSTEM",
      "API DEVELOPMENT",
      "THIRD-PARTY INTEGRATIONS",
      "AUTOMATED TESTING",
      "SECURITY IMPLEMENTATION",
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    duration: "1-2 weeks",
    description:
      "Production-ready deployment with CI/CD pipelines, monitoring, and scalable cloud infrastructure. We ensure your SaaS platform can handle traffic spikes, maintain 99.9% uptime, and scale automatically as your user base grows.",
    deliverables: [
      "CLOUD DEPLOYMENT",
      "CI/CD PIPELINE",
      "MONITORING SETUP",
      "PERFORMANCE OPTIMIZATION",
      "SECURITY CONFIGURATION",
      "BACKUP SYSTEMS",
      "DOCUMENTATION",
    ],
  },
  {
    id: "growth",
    title: "Growth Support",
    duration: "Ongoing",
    description:
      "Continuous optimization and feature development to support your SaaS growth. We provide technical scaling, new feature development, performance monitoring, and strategic technical guidance as your platform evolves with market demands.",
    deliverables: [
      "FEATURE DEVELOPMENT",
      "PERFORMANCE MONITORING",
      "SCALING OPTIMIZATION",
      "SECURITY UPDATES",
      "TECHNICAL CONSULTING",
      "GROWTH ANALYTICS",
    ],
  },
];

export function ProcessSection() {
  const tabs: TabItem[] = processSteps.map((step) => ({
    id: step.id,
    label: step.title,
    content: <ProcessStepContent step={step} />,
  }));

  return (
    <TabbedSection title="Our SaaS development" highlighted="process." variant="dark" tabs={tabs} />
  );
}
