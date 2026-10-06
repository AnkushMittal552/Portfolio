import type { Metadata } from "next";
import GameHubClient from "@/app/games/GameHubClient";

export const metadata: Metadata = {
  title: "Game Hub | Ankush Mittal",
  description: "A small game hub with interactive mini games built into Ankush Mittal's portfolio.",
  alternates: { canonical: "/games" },
};

export default function GamesPage() {
  return <GameHubClient />;
}
