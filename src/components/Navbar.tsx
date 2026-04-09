import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold">HL</span>
        </div>
        <span className="font-bold text-xl tracking-tighter uppercase">Huiguo Liu</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.linkedin.com/in/huiguo-liu-28629a2b5" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
        </Button>
        <Button className="hidden sm:flex" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </motion.nav>
  );
}
