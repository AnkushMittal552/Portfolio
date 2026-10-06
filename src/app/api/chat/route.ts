import { NextRequest, NextResponse } from "next/server";
import { CASE_STUDIES, CERTIFICATIONS, CONTACT_CARDS, EDUCATION_ITEMS, PROJECTS, SKILL_GROUPS, TRUST_METRICS } from "@/lib/data";

type IncomingMessage = {
  role: "user" | "assistant";
  text: string;
};

function localPortfolioReply(userText: string) {
  const query = userText.toLowerCase();

  if (/(best project|hiring|hire|job)/.test(query)) {
    return "For hiring, I’d point to the Java Order Matching Engine and the Smart Ride Dispatch System — they show strong engineering depth, product thinking, and systems design.";
  }

  if (/(tech stack|stack|tools|use most|most use)/.test(query)) {
    return "My strongest stack is Java, JavaScript, React, Node.js, Express.js, REST APIs, MongoDB, MySQL, and AWS.";
  }

  if (/(education|study|vit|college|degree)/.test(query)) {
    return "I’m a Computer Science student at VIT Vellore with a CGPA of 8.81, and my work has focused on full-stack engineering and secure systems design.";
  }

  if (/(contact|reach|email|linkedin|github|phone|how can i contact)/.test(query)) {
    return "You can reach me at ankushmittal552@gmail.com, connect on LinkedIn, or explore my GitHub — all the links are on the portfolio.";
  }

  if (/(resume|cv)/.test(query)) {
    return "My resume is available on the portfolio and includes my education, internship experience, projects, and certifications.";
  }

  if (/(bookbase|library|book)/.test(query)) {
    return "BookBase is a full-stack digital library and review app built with React, Node.js, Express, MongoDB, JWT authentication, and Google Books integration.";
  }

  if (/(ride|dispatch|smart ride)/.test(query)) {
    return "The Smart Ride Dispatch System focuses on AI-assisted ride matching, Google Maps integration, role-based auth, and PostgreSQL-backed production workflows.";
  }

  if (/(order matching|java engine|java order)/.test(query)) {
    return "The Java Order Matching Engine simulates stock-exchange behavior using price-time priority, FIFO execution, partial fills, and efficient order-book data structures.";
  }

  if (/(security|cyber|secure|cloud|aws)/.test(query)) {
    return "I’m especially interested in secure system design, cloud architecture, and building products that balance reliability, speed, and usability.";
  }

  return "Nice try, but the real answer is in my portfolio: I’m a full-stack developer with Java, React, Node.js, AWS, and secure system design experience. Ask me about projects, education, skills, or contact details.";
}

function buildPortfolioContext() {
  const projects = PROJECTS.map((p) => `${p.title} [${p.category}] - ${p.shortDescription}. Stack: ${p.tech.join(", ")}`).join("\n");
  const education = EDUCATION_ITEMS.map((e) => `${e.degree} | ${e.institute} | ${e.year} | ${e.score}`).join("\n");
  const skills = SKILL_GROUPS.map((g) => `${g.title}: ${g.items.map((i) => i.name).join(", ")}`).join("\n");
  const certs = CERTIFICATIONS.map((c) => `${c.title} - ${c.description}`).join("\n");
  const cases = CASE_STUDIES.map((c) => `${c.title} (${c.period}) - ${c.summary}`).join("\n");
  const trust = TRUST_METRICS.map((m) => `${m.label}: ${m.value} (${m.note})`).join("\n");
  const contact = CONTACT_CARDS.map((c) => `${c.title}: ${c.value}`).join("\n");

  return `
Owner name: Ankush Mittal
Role: Full Stack Developer with a strong interest in Java systems, cloud architecture, and secure product engineering

Projects:
${projects}

Education:
${education}

Skills:
${skills}

Certifications:
${certs}

Case studies:
${cases}

Trust metrics:
${trust}

Contact:
${contact}

Resume path: /assets/resume.pdf
GitHub: https://github.com/ankushmittal552
LinkedIn: https://www.linkedin.com/in/ankush-mittal-552
Email: ankushmittal552@gmail.com
Phone: +91 9817090691
`.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { messages?: IncomingMessage[] };
    const incoming = (body.messages ?? []).slice(-10);

    if (!incoming.length) {
      return NextResponse.json({ success: false, message: "No chat messages provided." }, { status: 400 });
    }

    const lastUserMessage = [...incoming].reverse().find((m) => m.role === "user")?.text ?? "";
    const reply = localPortfolioReply(lastUserMessage);

    return NextResponse.json({ success: true, reply });
  } catch (error) {
    console.error("Chat API failed:", error);
    return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
