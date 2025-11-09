"use client"

import { useState } from "react"
import { ChevronRight, Heart, Globe, Brain, Lock, MessageCircle, ArrowRight } from "lucide-react"

const Page = () => {
  const [activeDemo, setActiveDemo] = useState(0)

  const features = [
    {
      icon: MessageCircle,
      title: "AI Health Chat",
      description: "Chat naturally about symptoms and concerns using conversational AI.",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Works seamlessly in English and Hindi for accessibility across India.",
    },
    {
      icon: Brain,
      title: "Smart Suggestions",
      description: "Get verified, safe guidance on your health instantly.",
    },
    {
      icon: Lock,
      title: "Private & Secure",
      description: "Your conversations remain confidential and secure.",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Type Your Symptoms",
      description: "Describe what you're feeling in simple language.",
    },
    {
      number: "02",
      title: "AI Analyzes Instantly",
      description: "SalusAI uses advanced AI to understand and interpret symptoms accurately.",
    },
    {
      number: "03",
      title: "Get Advice",
      description: "Receive general guidance, possible causes, and when to visit a doctor.",
    },
  ]

  const demoConversations = [
    {
      user: "I have a mild sore throat and slight fever.",
      ai: "It could be a viral infection. Rest, stay hydrated, and monitor your temperature. If symptoms persist for more than 3 days, consult a doctor.",
    },
    {
      user: "I'm experiencing persistent headaches and fatigue.",
      ai: "These could be signs of dehydration, stress, or sleep deprivation. Try drinking more water and getting adequate rest. If it continues, see a healthcare provider.",
    },
  ]

  const stats = [
    { icon: "💚", label: "1,000+ conversations analyzed" },
    { icon: "💬", label: "Available in 2 languages" },
    { icon: "🌏", label: "Target: 1M users by 2026" },
  ]

  return (
    <div className="w-full gradient-bg">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <span className="text-xl font-bold text-foreground">SalusAI</span>
          </div>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-green-200 transition-all duration-300">
            Start Chat
          </button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Your Health,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Guided by AI
              </span>
              .
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              SalusAI is your personal health companion. Describe your symptoms and get safe, AI-powered advice in
              seconds — anytime, anywhere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-green-300 transition-all duration-300 hover:scale-105">
              Start Chat
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center space-y-6 bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-green-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Accessible Healthcare for Everyone</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Millions of people face delays in getting medical guidance. SalusAI bridges that gap with an intelligent
            assistant that listens, understands, and provides reliable health insights — instantly.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose SalusAI?</h2>
            <p className="text-muted-foreground text-lg">Everything you need for better health management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-xl border border-green-100 hover:border-primary hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Simple, Fast, and Reliable</h2>
            <p className="text-muted-foreground text-lg">Get health guidance in three easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white p-8 rounded-xl border border-green-100 h-full flex flex-col">
                  <div className="text-4xl font-bold text-primary/30 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground flex-grow">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">See SalusAI in Action</h2>
            <p className="text-muted-foreground text-lg">Real conversations, real results</p>
          </div>

          <div className="bg-white rounded-2xl border border-green-100 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-primary to-primary/60 h-2" />
            <div className="p-8 space-y-6">
              {demoConversations[activeDemo] && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="flex justify-end">
                    <div className="max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4">
                      <p className="text-sm">{demoConversations[activeDemo].user}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-secondary text-secondary-foreground rounded-2xl rounded-tl-none p-4">
                      <p className="text-sm">{demoConversations[activeDemo].ai}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                {demoConversations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveDemo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeDemo === i ? "bg-primary w-8" : "bg-border w-2"
                    }`}
                    aria-label={`Demo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Vision for a Healthier India</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SalusAI empowers people with trusted health guidance — bridging the gap between knowledge and action.
              From small towns to cities, we make health advice accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-green-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="font-semibold text-foreground text-balance">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 text-center space-y-6 border border-primary/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Take Charge of Your Health Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start your journey towards smarter, safer healthcare. SalusAI — your digital health companion.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-green-300 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Try SalusAI Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="border-t border-green-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-3">
            <p className="font-semibold text-foreground">© 2025 SalusAI. All rights reserved.</p>
            <p className="text-sm text-muted-foreground leading-relaxed text-balance">
              SalusAI provides general guidance only. It is not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page
