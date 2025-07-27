"use client";

import { PageHero } from "../../../../shared/components/ui/page-hero";

export function HeroSection() {
  const handleScheduleCall = () => {
    // Calendly integration coming soon...
  };

  return (
    <PageHero
      overline="SaaS development agency"
      title="We build SaaS platforms that actually"
      highlightedText="work."
      description="Enterprise-ready MERN architecture + startup speed and flexibility."
      primaryButton={{
        text: "Schedule Discovery Call",
        color: "success",
        onClick: handleScheduleCall,
      }}
      secondaryButton={{
        text: "View Our Work",
        color: "secondary",
        href: "/projects",
      }}
    />
  );
}
