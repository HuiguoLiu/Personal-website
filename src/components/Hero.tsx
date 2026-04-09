import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Open to Data Analyst & Business Analyst Roles
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              DATA-DRIVEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                STRATEGIST
              </span>{" "}
              & ANALYST
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              I'm Huiguo Liu, a MS in Business Analytics student at the University of Minnesota. 
              I bridge the gap between complex data and strategic business decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full group w-full sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                Download CV
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800" // TODO: Replace this URL with your actual photo path (e.g., "/profile.jpg") after uploading it to the file explorer
                  alt="Huiguo Liu"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-background border border-border p-3 rounded-2xl shadow-lg"
              >
                <div className="text-xs font-bold text-primary uppercase tracking-wider">MSBA @ UMN</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-background border border-border p-3 rounded-2xl shadow-lg"
              >
                <div className="text-xs font-bold text-blue-500 uppercase tracking-wider">Data Scientist</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-muted-foreground/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
