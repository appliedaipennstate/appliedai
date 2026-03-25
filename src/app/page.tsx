import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight, ExternalLink } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'
import { FadeIn } from '@/components/ui/FadeIn'
import { StaggerGrid, StaggerItem } from '@/components/ui/StaggerGrid'
import { SlideIn } from '@/components/ui/SlideIn'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { PressableButton } from '@/components/ui/PressableButton'
import { MailingListForm } from '@/components/MailingListForm'
import { pillars } from '@/data/pillars'
import { team, teamSemester } from '@/data/team'

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden py-40 md:py-48 lg:py-56">
        {/* Ambient glow -- very subtle, positioned at edges not center */}
        <div className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full bg-pugh-blue/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-pa-sky/[0.03] blur-[100px]" />

        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #001E44 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <FadeIn>
              <Image
                src={assetPath('/images/logo.png')}
                alt="Applied AI"
                width={840}
                height={241}
                className="w-[min(65vw,380px)] h-auto"
                priority
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-10 text-text-muted text-lg md:text-xl leading-relaxed max-w-md tracking-wide">
                Where Penn State students learn to think with AI.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <PressableButton
                  href="#join"
                  className="inline-flex items-center gap-2 bg-beaver-blue text-white px-8 py-4 rounded-xl font-medium text-sm"
                >
                  Get involved
                  <ArrowRight size={16} />
                </PressableButton>
                <PressableButton
                  href="/explore"
                  className="inline-flex items-center gap-2 border border-border text-text px-8 py-4 rounded-xl font-medium text-sm"
                >
                  Explore AI tools
                </PressableButton>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={20} className="text-text-muted/40" />
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-beaver-blue font-semibold mb-6">
                Our Mission
              </p>
              <div className="border-l-4 border-beaver-blue pl-6 md:pl-8">
                <p
                  className="font-display text-navy font-semibold leading-snug"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                >
                  Our mission is to build a community where students can learn how AI is applied in
                  real-world settings and explore the many ways it creates value in different areas
                  of business.
                </p>
              </div>
              <p className="mt-8 text-text-muted text-base leading-relaxed max-w-2xl">
                We help Penn State students understand how AI is used in the workplace and
                throughout their future careers. The Applied AI Club brings together like-minded
                students who are curious about AI and want to learn and build together.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section id="what-we-do" className="py-28 md:py-36 bg-surface-alt relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-pugh-blue/[0.04] blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-beaver-blue font-semibold mb-3">
              What We Do
            </p>
            <h2
              className="font-display text-navy font-bold leading-tight mb-14"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Three ways to get involved
            </h2>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                {pillar.link ? (
                  <Link href={pillar.link} className="block h-full">
                    <AnimatedCard
                      className={`bg-white rounded-2xl border-t-[3px] ${pillar.accent} border border-border px-8 py-10 h-full cursor-pointer`}
                    >
                      <h3 className="font-display text-navy text-lg font-semibold mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                      <p className="mt-8 text-beaver-blue text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
                        Explore tools <ArrowRight size={12} />
                      </p>
                    </AnimatedCard>
                  </Link>
                ) : (
                  <AnimatedCard
                    className={`bg-white rounded-2xl border-t-[3px] ${pillar.accent} border border-border px-8 py-10 h-full`}
                  >
                    <h3 className="font-display text-navy text-lg font-semibold mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">{pillar.description}</p>
                  </AnimatedCard>
                )}
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ─── LABS ─── */}
      <section id="labs" className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-pa-sky/[0.03] blur-[80px]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideIn direction="left">
              <p className="text-xs uppercase tracking-widest text-beaver-blue font-semibold mb-3">
                Applied AI Labs
              </p>
              <h2
                className="font-display text-navy font-bold leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
              >
                Where students build with AI, not just learn about it
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Labs is the Applied AI Club&apos;s dedicated space for building real things with AI.
                We collect ideas from students, faculty, and partners about how AI is being used at
                Penn State and turn them into projects.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                From here, Labs is where members build with LangChain, run retrieval-augmented
                generation pipelines, experiment with vector databases, and deploy agents that
                actually do things.
              </p>
              <PressableButton
                href="https://andysalvo.github.io/smealstudentaihub/"
                className="inline-flex items-center gap-2 text-beaver-blue font-medium text-sm"
              >
                See the Student AI Hub
                <ExternalLink size={14} />
              </PressableButton>
            </SlideIn>

            <SlideIn direction="right">
              <AnimatedCard className="bg-surface-alt rounded-2xl p-8 md:p-10 border border-border">
                <p className="text-xs uppercase tracking-widest text-beaver-blue/60 font-semibold mb-5">
                  First project
                </p>
                <p className="font-display text-navy text-xl font-semibold mb-3">Student AI Hub</p>
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  A student-built resource covering AI in business, school, and professional life.
                  Ten interactive modules for every Smeal major, built from 22 foundational sources.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Tailwind', 'MDX', 'GitHub Pages'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white px-3 py-1.5 rounded-full text-text-muted border border-border font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="py-28 md:py-36 bg-surface-alt relative overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-pugh-blue/[0.03] blur-[80px]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-beaver-blue font-semibold mb-3">
              Our Team
            </p>
            <h2
              className="font-display text-navy font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Meet the board
            </h2>
            <p className="text-text-muted mb-14 max-w-lg">
              {teamSemester} executive board. If you have questions, ideas, or want to learn more
              about the club, reach out.
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <AnimatedCard className="bg-white rounded-2xl p-8 border border-border text-center">
                  <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden bg-navy/[0.06] ring-2 ring-border">
                    {member.photo ? (
                      <Image
                        src={assetPath(member.photo)}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-navy text-xl font-semibold">
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="font-display font-semibold text-navy text-base">{member.name}</p>
                  <p className="text-text-muted text-sm mt-1">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-link hover:text-link-hover mt-3 inline-block transition-colors"
                  >
                    {member.email}
                  </a>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ─── JOIN ─── */}
      <section id="join" className="py-28 md:py-36 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pugh-blue/[0.04] blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <FadeIn>
              <h2
                className="font-display text-navy font-bold leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Stay in the loop
              </h2>
              <p className="text-text-muted mb-12">
                Add your info and we will keep you updated on events, launches, and how to get
                involved.
              </p>

              <MailingListForm />

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-muted">
                <a
                  href="https://groupme.com/join_group/111640691/x4UBh7SL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy transition-colors"
                >
                  Students: Join our GroupMe
                </a>
                <span className="hidden sm:inline text-border">|</span>
                <a
                  href="mailto:appliedaipsu@gmail.com"
                  className="hover:text-navy transition-colors"
                >
                  appliedaipsu@gmail.com
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
