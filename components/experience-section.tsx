"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Machine Learning and Statistics Reasearch Assistant",
      company: "UWF CSDA Lab",
      period: "Oct 2024 - Present",
      description:
        "Joined CSDA Lab during first semester to grow my skills in machine learning and statistics. Working on various projects involving data analysis, model development, and statistical research.",
      achievements: [
        "Built cancer classification model with 75% accuracy, 80% specificity",
        "Co-authored 1 research paper for IEEE(under review)",
        "Working on LLM perturbation project using wavelet transforms",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "PyTorch", "PyWavelets"],
    },
    {
      title: "Data Science Educator",
      company: "UWF CSDA Lab",
      period: "Aug 2024 - Present",
      description:
        "Lead Python and Data Science labs to teach no programmers foundational skills in Python, data analysis, and machine learning.",
      achievements: [
        "Reached 40+ members in first 2 semesters",
        "Led weekly Python and Data Science workshops",
        "Created 10+ tutorials and exercises for members",
      ],
      tech: ["Python", "Teaching", "Data Science", "Machine Learning"],
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "University of West Florida",
      period: "Jan 2025 - Present",
      description:
        "Assist professor in curriculum development, and support in courses. ",
      achievements: [
        "Assisted Programming using C++, Advanced Algorithms, Honors Elements of Statistics",
        "Developed Python-based lessons to modernize curriculum",
        "Created and transcribed content notes",
      ],
      tech: ["Pytho", "Statistics", "Word", "LaTeX"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-16 text-balance">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="font-montserrat font-bold text-xl text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="font-open-sans text-primary font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="font-open-sans w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-open-sans text-muted-foreground text-pretty">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-open-sans font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="font-open-sans text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-open-sans text-xs">
                          {tech}
                        </Badge>
                      ))}
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
