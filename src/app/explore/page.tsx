import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { StaggerGrid, StaggerItem } from '@/components/ui/StaggerGrid'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { tools } from '@/data/tools'

export const metadata: Metadata = {
  title: 'Explore AI',
  description: 'A list of essential AI tools worth knowing, organized for students at every level.',
}

export default function ExplorePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-pugh-blue/[0.04] blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-beaver-blue font-semibold mb-3">
              Explore AI
            </p>
            <h1
              className="font-display text-navy font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
            >
              A list of essential AI tools worth knowing
            </h1>
            <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
              Organized for students at every level. From beginner-friendly assistants to the
              agentic tools shaping the industry, this is a good place to start.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto px-6">
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <StaggerItem key={tool.name}>
                <AnimatedCard className="bg-white rounded-2xl border border-border p-8 md:p-10 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="font-display text-navy text-xl font-semibold">{tool.name}</h2>
                      <p className="text-text-muted text-xs mt-1">{tool.maker}</p>
                    </div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-beaver-blue transition-colors shrink-0 ml-4"
                      aria-label={`Visit ${tool.name}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed mb-6">{tool.description}</p>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-beaver-blue/60 font-semibold mb-3">
                      What you can do with it
                    </p>
                    <ul className="space-y-2">
                      {tool.capabilities.map((cap) => (
                        <li key={cap} className="text-sm text-text-muted flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-beaver-blue/40 mt-2 shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  )
}
