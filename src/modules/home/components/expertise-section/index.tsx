"use client";

import { ContentSection } from "@app/shared/components/ui/content-section";
import { FloatingShape } from "@app/shared/components/ui/floating-shape";
import { SectionHeader } from "@app/shared/components/ui/section-header";
import { TerminalWindow } from "@app/shared/components/ui/terminal-window";
import { TypingAnimation } from "@app/shared/components/ui/typing-animation";
import { ColorVariant, GradientVariant, ShapeVariant, Size } from "@app/shared/types";

export function ExpertiseSection() {
  const commands = [
    { text: "$ codecraftr --init saas-platform --stack mern", type: "command" as const },
    { text: "✓ React: Enterprise components ready", type: "success" as const },
    { text: "✓ Node.js: Scalable API architecture", type: "success" as const },
    { text: "✓ MongoDB: Optimized for growth", type: "success" as const },
    { text: "✓ Express: Production-ready setup", type: "success" as const },
    { text: "✓ Deployment: 8-12 weeks delivery", type: "success" as const },
    { text: "✓ Success rate: 100% client satisfaction", type: "success" as const },
    { text: "$ ready_to_scale_your_startup", type: "command" as const },
  ];

  return (
    <ContentSection backgroundColor="paper">
      <SectionHeader
        highlightedText="SaaS Architecture"
        title="Expertise"
        subtitle="We understand the unique challenges of building scalable SaaS platforms"
        gradientVariant={GradientVariant.PRIMARY}
      />

      <TerminalWindow title="codecraftr-expertise" height={60}>
        <TypingAnimation commands={commands} typeSpeed={50} pauseAfterCommand={800} />
      </TerminalWindow>

      <FloatingShape
        variant={ShapeVariant.SQUARE}
        size={Size.MEDIUM}
        position={{ top: "10%", right: "8%" }}
        color={ColorVariant.PRIMARY}
        rotation={25}
      />
    </ContentSection>
  );
}
