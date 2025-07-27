"use client";

import { PageHero } from "../../../../shared/components/ui/page-hero";

export function HeroSection() {
  const handleScheduleCall = () => {
    // Calendly integration coming soon...
  };

  return (
    <PageHero
      overline="Our services"
      title={<>Professional SaaS development</>}
      animatedWords={["services.", "solutions.", "expertise.", "platforms."]}
      description="MERN stack expertise for startups and growing companies. From MVP to scale, we build platforms that drive business growth."
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
