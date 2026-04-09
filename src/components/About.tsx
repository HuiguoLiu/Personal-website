import { motion } from "motion/react";
import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "40+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Coffee Consumed", value: "1.2k" },
  ];

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning interfaces that users love.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Development",
      description: "Building fast, scalable, and secure web applications using modern tech.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Making sure your website loads instantly and runs smoothly.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Product Strategy",
      description: "Helping you define and launch successful digital products.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Driving decisions through <span className="text-primary">data</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am a Master's student in Business Analytics at the Carlson School of Management, 
              with a background in Economics and Management. My journey has taken me through 
              roles in business analysis, market research, and strategy consulting.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              I thrive at the intersection of business and technology, using tools like Python, 
              SQL, and Tableau to uncover hidden patterns and drive strategic growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-primary mt-1" />
                <div>
                  <div className="font-bold">MS in Business Analytics</div>
                  <div className="text-sm text-muted-foreground">Carlson School of Management | 2025 - 2026</div>
                  <div className="text-xs text-primary font-semibold">Merit-based Scholarship</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-muted mt-1" />
                <div>
                  <div className="font-bold">ACE-Certified Personal Trainer</div>
                  <div className="text-sm text-muted-foreground">American Council on Exercise (ACE Fitness)</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-muted mt-1" />
                <div>
                  <div className="font-bold">BA in Economics</div>
                  <div className="text-sm text-muted-foreground">University of Minnesota | 2021 - 2025</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-none bg-background/50 backdrop-blur-sm hover:bg-background transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
