import { Metadata } from "next";

import { ServicesPage } from "@app/modules/services";

export const metadata: Metadata = {
  title: "SaaS Development Services - Codecraftr",
  description:
    "Professional MERN stack development services for SaaS startups. Time & Materials approach with 8-12 weeks delivery and enterprise-ready architecture.",
  keywords: [
    "SaaS development services",
    "MERN stack development",
    "startup development team",
    "time and materials development",
  ],
  openGraph: {
    title: "SaaS Development Services - Codecraftr",
    description: "Fast delivery with enterprise-ready MERN architecture for SaaS startups",
    url: "/services",
  },
};

export default ServicesPage;
