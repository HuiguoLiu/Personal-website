import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Analytics for Good Hackathon",
      description: "Analyzed enterprise travel data to uncover actionable sustainability insights. Identified that out-of-policy travel produced 46.3% higher carbon emissions.",
      image: "https://picsum.photos/seed/sustainability/800/600",
      tags: ["SQL", "Tableau", "Celonis", "Sustainability"],
      github: "#",
      demo: "#",
    },
    {
      title: "Construction Project Bidding Analysis",
      description: "Engineered project-level features and performed predictive analyses using Python and SQL to identify patterns driving bid success.",
      image: "https://picsum.photos/seed/construction/800/600",
      tags: ["Python", "SQL", "Predictive Modeling", "Tableau"],
      github: "#",
      demo: "#",
    },
    {
      title: "Market Research - Battery Sectors",
      description: "Conducted industry research on battery sectors, analyzing market trends and financial conditions for investment opportunities.",
      image: "https://picsum.photos/seed/battery/800/600",
      tags: ["Market Research", "Financial Analysis", "Excel", "Wind"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Selected <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              A collection of projects that I've built, ranging from small
              experiments to full-scale applications.
            </p>
          </div>
          <Button variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group border-none bg-muted/30">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
