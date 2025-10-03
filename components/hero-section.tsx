"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-montserrat font-black text-4xl sm:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
            Hi, I&apos;m <span className="text-primary">Lance Penaflor</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-open-sans text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance"
          >
            CS + Statistics Student | University of West Florida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-open-sans text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
          >
            Applying my skills in data science, improving my second serve, and probably listening to some Oasis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="font-open-sans font-medium">
              <a href="/lance_resume_10_25.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="font-open-sans font-medium bg-transparent" asChild>
              <a href="https://github.com/lancemelon" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="font-open-sans font-medium bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/lance-penaflor-069407211/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
