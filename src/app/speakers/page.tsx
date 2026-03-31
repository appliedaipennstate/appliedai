import { Mic, Clock, Video, Users } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SpeakerForm } from '@/components/SpeakerForm'

export const metadata = {
  title: 'Speak at Applied AI',
  description:
    'We are looking for professionals from any field who can share how AI has changed the way they work. 30-45 minutes, Zoom or in person at Penn State.',
}

export default function SpeakersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full bg-pugh-blue/[0.04] blur-[120px]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase text-beaver-blue mb-4">
              Guest Speaker Program
            </p>
            <h1
              className="font-display font-bold text-navy leading-tight mb-6"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Share what AI looks like in your work
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-xl mx-auto">
              We are a student organization at Penn State learning how AI changes business. We are
              looking for professionals who can share what that looks like in practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Details */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                {
                  icon: Clock,
                  label: '30-45 minutes',
                  detail: 'Including Q&A',
                },
                {
                  icon: Video,
                  label: 'Zoom or in person',
                  detail: 'Your preference',
                },
                {
                  icon: Users,
                  label: 'All fields welcome',
                  detail: 'Finance to nonprofits',
                },
                {
                  icon: Mic,
                  label: 'Your experience',
                  detail: 'Real insight over slides',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center p-5 rounded-xl border border-border bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/[0.06] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <p className="text-sm font-semibold text-navy mb-0.5">{item.label}</p>
                  <p className="text-xs text-text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-xl mx-auto mb-16">
              <h2 className="font-display text-xl font-bold text-navy mb-4 text-center">
                Who we are looking for
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Professionals from any field whose work has been shaped by AI in some meaningful
                way. Technical expertise is valuable, and so is a perspective from someone whose
                role had little to do with technology until recently.
              </p>
              <p className="text-text-muted leading-relaxed">
                What matters most is that you can communicate your experience in a way that a
                student with no background in your field could follow. We are looking for real
                insight over polished presentations.
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            <div className="max-w-xl mx-auto">
              <div className="bg-surface-alt rounded-2xl border border-border p-8 md:p-10">
                <h2 className="font-display text-lg font-bold text-navy mb-2 text-center">
                  Interested in speaking?
                </h2>
                <p className="text-text-muted text-sm text-center mb-8">
                  Fill this out and we will follow up within a week.
                </p>
                <SpeakerForm />
              </div>
            </div>
          </FadeIn>

          {/* Share note */}
          <FadeIn delay={0.3}>
            <p className="text-center text-text-muted text-sm mt-10">
              Know someone who would be a great speaker? Please share this page.
              <br />
              <span className="text-beaver-blue font-medium">appliedaipennstate.com/speakers</span>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
