import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">HL</span>
            </div>
            <span className="font-bold text-xl tracking-tighter uppercase">Huiguo Liu</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Huiguo Liu. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/huiguo-liu-28629a2b5" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:liu01959@umn.edu" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
