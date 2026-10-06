import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Ankush Mittal | Full Stack Developer Portfolio",
  description:
    "Portfolio of Ankush Mittal showcasing Java, full-stack engineering, cloud, and AI-assisted product work.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ankush Mittal | Full Stack Developer Portfolio",
    description:
      "Explore Java systems, full-stack applications, and cloud-focused engineering work by Ankush Mittal.",
    url: "/",
    images: [{ url: "/assets/profile.jpg", width: 1200, height: 630, alt: "Ankush Mittal Portfolio" }],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
