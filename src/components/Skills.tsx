import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Tools",
      skills: ["Python", "R", "SQL", "Tableau", "Spark", "Excel", "PowerPoint"],
    },
    {
      title: "Techniques",
      skills: ["Exploratory Analysis", "Data Cleaning", "Data Visualization", "A/B Testing", "Statistical Analysis", "Time Series Forecasting"],
    },
    {
      title: "Business",
      skills: ["Strategy Consulting", "Market Research", "Investment Proposals", "Business Modeling"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            My <span className="text-primary">Toolbox</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the technologies and tools I use to bring ideas to life.
            I'm always learning and exploring new ways to build better software.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                    className="px-4 py-2 bg-background rounded-lg border border-border text-sm font-medium hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
