import { Metadata } from "next";

import { AboutPage } from "@app/modules/about";

export const metadata: Metadata = {
  title: "About Us - Codecraftr - SaaS Development Experts",
  description:
    "Learn about our founder, technical expertise, and vision for building scalable SaaS platforms with MERN stack.",
  keywords: [
    "SaaS development team",
    "MERN stack experts",
    "startup technical founders",
    "about codecraftr",
  ],
  openGraph: {
    title: "About Codecraftr - SaaS Development Experts",
    description: "Technical expertise and startup mindset for building scalable SaaS platforms",
    url: "/about",
  },
};

export default AboutPage;
