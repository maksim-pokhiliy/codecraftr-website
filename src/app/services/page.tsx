import { Metadata } from "next";

import { ServicesPage } from "@app/modules/services";

export const metadata: Metadata = {
  title: "SaaS Development Services - Codecraftr",
  description:
    "Professional MERN stack development services for SaaS startups. MVP development, platform modernization, and ongoing support with 8-12 weeks delivery.",
  keywords: [
    "SaaS development services",
    "MERN stack development",
    "SaaS MVP development",
    "platform modernization",
  ],
  openGraph: {
    title: "SaaS Development Services - Codecraftr",
    description: "Professional MERN stack development for SaaS startups and growing companies",
    url: "/services",
  },
};

export default ServicesPage;
