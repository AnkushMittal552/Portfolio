"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StaggerHeading from "@/components/StaggerHeading";
import { CONTACT_CARDS } from "@/lib/data";
import { DURATIONS, EASE_STANDARD } from "@/lib/motion";

export default function Contact() {
  const [visitors, setVisitors] = useState("Loading...");
  const calendlyUrl = "https://calendly.com/ankushmittal552/30min";

  useEffect(() => {
    const page = window.location.pathname;
    const device = navigator.userAgent;

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page,
        device,
        time: new Date().toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((data: { totalVisits?: number }) => setVisitors(String(data.totalVisits ?? "Unavailable")))
      .catch(() => setVisitors("Unavailable"));
  }, []);

  return (
    <section id="contact" className="section-backplate c section-wrap px-5 pb-16 pt-8 sm:px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DURATIONS.base, ease: EASE_STANDARD }}
          className="relative grid gap-8"
        >
          <div>
            <p className="eyebrow-hand"><span className="eyebrow-hand-underline">Signal Line</span></p>
            <div className="mt-4">
              <StaggerHeading
                text="Let's build something."
                className="display-title text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#9ca3af] sm:text-base">
              Open to engineering roles, security work, and collaborations.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="metric-card card-3d px-4 py-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/42">Response</p>
                <p className="mt-2 text-lg font-semibold text-white">{"< 24h"}</p>
                <p className="mt-1 text-xs text-white/55">Fast reply for hiring and project outreach.</p>
              </div>
              <div className="metric-card card-3d px-4 py-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/42">Mode</p>
                <p className="mt-2 text-lg font-semibold text-white">Remote Ready</p>
                <p className="mt-1 text-xs text-white/55">Comfortable with async collaboration and shipping.</p>
              </div>
              <div className="metric-card card-3d px-4 py-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/42">Focus</p>
                <p className="mt-2 text-lg font-semibold text-white">Product + Security</p>
                <p className="mt-1 text-xs text-white/55">Best fit for modern engineering and interface work.</p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:ankushmittal552@gmail.com?subject=Hiring%20Inquiry"
                className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black"
              >
                Hire Me
              </a>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-300/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200"
              >
                Book a Call
              </a>
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8 space-y-3">
              {CONTACT_CARDS.map((card) => (
                <a key={card.title} href={card.href} className="surface block rounded-xl p-4 hover:border-white/20">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">{card.title}</p>
                  <p className="mt-1 break-words text-white/85">{card.value}</p>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DURATIONS.base, ease: EASE_STANDARD }}
          className="mt-10 rounded-2xl border border-cyan-200/20 bg-[linear-gradient(115deg,rgba(34,211,238,0.18),rgba(14,116,144,0.12))] p-5 md:p-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Last Call</p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="display-title text-2xl font-semibold leading-tight text-white sm:text-3xl">Ready when you are</p>
            <a
              href="#contact"
              className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-black/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

        <footer className="mt-14 border-t border-white/10 pt-6 text-sm text-white/55">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>Designed & engineered by Ankush Mittal</p>
            <p>Total Visitors: {visitors}</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
