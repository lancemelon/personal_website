"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" }) // Reset form
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-center text-foreground mb-16 text-balance">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
<motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-foreground mb-4">Let&apos;s Connect</h3>
                <p className="font-open-sans text-lg text-muted-foreground leading-relaxed text-pretty">
                  I&apos;m always interested in discussing new opportunities, collaborating on exciting projects, or simply
                  chatting about data science and machine learning. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-open-sans text-foreground">penaflor.lance11@gmail.com</span>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <a href="https://github.com/lancemelon" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon">
                    <a href="https://www.linkedin.com/in/lance-penaflor-069407211/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon">
                    <a href="mailto:penaflor.lance11@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground">Send a Message</CardTitle>
                  <CardDescription className="font-open-sans text-muted-foreground">
                    I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitStatus === "success" && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-800 font-open-sans text-sm">
                          Message sent successfully! I&apos;ll get back to you soon.
                        </p>
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-800 font-open-sans text-sm">
                          Failed to send message. Please try again or email me directly.
                        </p>
                      </div>
                    )}

                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="font-open-sans"
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="font-open-sans"
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="font-open-sans"
                        disabled={isLoading}
                      />
                    </div>
                    <Button type="submit" className="w-full font-open-sans font-medium" disabled={isLoading}>
                      <Send className="mr-2 h-4 w-4" />
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
