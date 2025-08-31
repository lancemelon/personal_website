"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Music and Fashion Trend Analysis",
      description:
        "Developed end-to-end data science project analyzing music and fashion trends. Created ETL pipeline, performed feature engineering and EDA, built predictive models, simulated new trends, and drew insights.",
      image: "/RoughTrade-Essential-Britpop.jpg",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Numpy"],
      github: "https://github.com/lancemelon/music_fashion_popularity_analysis",
      demo: "https://github.com/lancemelon/music_fashion_popularity_analysis",
    },
    {
      title: "Python and Data Science Website",
      description:
        "Built full stack website for Python and Data Science tutorials. Created interactive coding exercises, in browser code editor, and visualizations to enhance learning experience.",
      image: "/pads_ss.png",
      tech: ["TypeScript", "Python", "Next.js", "React"],
      github: "https://github.com/lancemelon/pads",
      demo: "https://pads-murex.vercel.app/",
    },
    {
      title: "Wavelet-based Preprocessing for Classification",
      description:
        "Implemented paper on wavelet-based signal preprocessing techniques to enhance classification accuracy in machine learning models.",
      image: "/ThreeWavelets.png",
      tech: ["Python", "Scikit-learn", "Pandas", "PyWavelets"],
      github: "https://github.com/lancemelon/wavelet-ms-classification",
      demo: "https://github.com/lancemelon/wavelet-ms-classification",
    },
    {
      title: "LLM Perturbation via Wavelets (In Progress)",
      description:
        "Researching wavelet-based perturbation techniques to enhance robustness and performance of large language models (LLMs).",
      image: "/llm.jpg",
      tech: ["Python", "PyTorch", "Hugging Face", "PyWavelets"],
      github: "https://github.com/lancemelon/llm_perturbation",
      demo: "https://github.com/lancemelon/llm_perturbation",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-16 text-balance">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <div className="aspect-video overflow-hidden rounded-t-lg relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  <CardHeader>
                    <CardTitle className="font-montserrat font-bold text-xl text-foreground">{project.title}</CardTitle>
                    <CardDescription className="font-open-sans text-muted-foreground text-pretty">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="font-open-sans text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="font-open-sans bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="font-open-sans">
                        <ExternalLink className="mr-2 h-4 w-4" />
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Demo
                          </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
