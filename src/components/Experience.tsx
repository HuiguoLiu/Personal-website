import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "HP Tech Ventures",
      role: "Business Analyst Internship",
      period: "Dec 2024 - Feb 2025",
      description: [
        "Researched startups in the AI, media, and technology sectors, evaluating business models and market potential.",
        "Analyzed market trends and built multidimensional visualizations to illustrate industry dynamics.",
        "Prepared and delivered investment proposals for high-potential startups, incorporating data-driven insights.",
      ],
    },
    {
      company: "Great Wall Securities",
      role: "Market Research Analyst",
      period: "May 2024 - Sep 2024",
      description: [
        "Conducted industry research reports on battery sectors, analyzing market trends and financial conditions.",
        "Analyzed financial statements of 10+ publicly listed companies using Excel and Wind terminal.",
        "Collected and consolidated market data from the photovoltaic and lithium battery industries.",
      ],
    },
    {
      company: "University of Minnesota",
      role: "Personal Trainer",
      period: "Mar 2023 - Mar 2024",
      description: [
        "Designed and customized fitness programs for a diverse clientele at the University of Minnesota's largest student wellness facility.",
        "Led client onboarding and training, improving team efficiency and enhancing client experience.",
        "Developed and implemented structured fitness programs, increasing client participation and satisfaction.",
      ],
    },
    {
      company: "PWC",
      role: "Strategy Consulting Internship",
      period: "Jan 2024 - Mar 2024",
      description: [
        "Conducted market research on China's coffee industry, assessing market size and projected growth.",
        "Analyzed revenue and cost structures to identify market opportunities and optimize client market share.",
        "Performed competitive analysis by calculating key business metrics for 20+ stores across three major brands.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional background in business analysis, market research, and strategy consulting.
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="text-primary font-medium">{exp.company}</div>
                  </div>
                  <time className="text-sm font-mono text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                    {exp.period}
                  </time>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
