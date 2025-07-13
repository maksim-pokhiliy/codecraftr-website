"use client";

import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";

import { Section } from "@app/shared/components/ui/section";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "mvp-timeline",
    question: "How long does it take to build a SaaS MVP?",
    answer:
      "Typically 8-12 weeks depending on complexity and feature scope. We follow an agile development process with regular updates and iterations to ensure fast delivery without compromising quality.",
  },
  {
    id: "development-process",
    question: "What's included in your SaaS development process?",
    answer:
      "Our process includes discovery session, SaaS architecture design, MERN stack development, subscription billing integration, testing & QA, production deployment, and ongoing support.",
  },
  {
    id: "ongoing-support",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer comprehensive post-launch support including 24/7 monitoring, performance optimization, feature additions, bug fixes, security updates, and scaling assistance as your user base grows.",
  },
  {
    id: "billing-integration",
    question: "Can you help with subscription billing integration?",
    answer:
      "Absolutely! We specialize in Stripe integration and recurring payment systems. We handle subscription tiers, trial periods, invoicing, webhooks, and all the complexities of SaaS billing.",
  },
  {
    id: "what-makes-different",
    question: "What makes your SaaS development different?",
    answer:
      "We combine deep SaaS architecture expertise with startup mindset and business-first approach. We understand time-to-market pressure, budget constraints, and focus on building features that drive user engagement and revenue growth.",
  },
  {
    id: "existing-platforms",
    question: "Do you work with existing SaaS platforms?",
    answer:
      "Yes, we offer platform modernization services for legacy systems. This includes technical debt elimination, architecture refactoring, performance optimization, and adding new features to scale your existing SaaS.",
  },
];

export function FaqSection() {
  return (
    <Section title="Frequently asked" highlighted="questions." variant="light">
      <Stack spacing={0}>
        {faqs.map((faq) => (
          <Accordion key={faq.id} variant="light" square>
            <AccordionSummary>
              <Typography variant="h4" component="h3">
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography variant="body2" sx={{ fontWeight: 100, maxWidth: 800 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Section>
  );
}
