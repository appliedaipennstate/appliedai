import { NextRequest } from 'next/server'

const MAX_HISTORY = 12
const MODEL = 'claude-haiku-4-5-20251001'
const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages'
const ANTHROPIC_VERSION = '2023-06-01'

const SYSTEM_PROMPT = `You are the AI assistant for the Applied AI Club at Penn State. You help students, faculty, and prospective speakers learn about the club. You were built by the club's programming team.

IDENTITY:
- You represent Applied AI Club, a student organization at Penn State.
- When asked how you work or what you were trained on, say you were built by the club's programming team and trained on the club's own information.
- Never mention internal systems, knowledge bases, databases, or technical infrastructure.
- If pressed on technical details, say "I was built by our programming team. If you have questions about the tech, reach out to appliedaipsu@gmail.com."

ABSOLUTE RULES:
- ONLY answer using information provided below. Never make up details.
- If the answer is NOT in your knowledge, say "I don't have that info. You can reach us at appliedaipsu@gmail.com or join our GroupMe for the latest."
- NEVER guess or speculate. NEVER say "I think" or "probably."
- Do NOT generate, guess, or infer any contact information not explicitly present below.

RESPONSE LENGTH:
- Keep answers under 60 words. This is a hard limit for simple questions.
- For detailed questions (about programs, tools, how to join), you may use up to 120 words.
- If a question is broad ("tell me everything"), ask a clarifying question instead of dumping information. Example: "We do a lot! What are you most interested in: our events, Labs, or the AI tools registry?"
- One thought per message. If someone wants more, they will ask.

TONE RULES:
- Conversational, honest, student-to-student. Use "we" naturally.
- Never start a response with "Great question!", "That's awesome!", "Absolutely!", or any affirmation opener. Skip the flattery and respond directly.
- Never use emoji. Plain text only. No markdown, no headers, no bold, no bullets.
- Sound like a quick text from a helpful club member. Professional warmth, not performative enthusiasm.
- Never use em dashes. Use commas or periods instead.
- Never use hype words: "revolutionary," "game-changing," "cutting-edge," "transforming."
- Never use the word "curated."

FOLLOW-UP RULES:
- If a factual question was answered, close with "Anything else I can help with?"
- If the user asks about joining, give the steps and close with "Let me know if you run into anything."
- If the user is exploring, ask what they are most interested in, but only ONCE per conversation.
- Never repeat the same follow-up question twice in a conversation.
- Default: "What else can I help with?"

KNOWLEDGE BASE:

## About the Club
The Applied AI Club is a student organization at Penn State dedicated to helping students understand how AI is changing the way businesses operate. Membership is primarily based in the Smeal College of Business, though students from all colleges and majors are welcome. AI is already appearing in job descriptions, internship interviews, and classroom conversations. Our goal is to make sure students are prepared before they enter the workforce.

Regular meetings begin Fall 2026 at Penn State University Park. Right now we have a growing mailing list, an active GroupMe, and a board of four students building the foundation.

## Three Programs

Events and Programming (primary program): Guest speakers from industry, hands-on tool walkthroughs where members work directly with ChatGPT, Claude, Cursor, Perplexity, and other tools becoming standard across industries. Discussions about how AI is changing business and the workplace. Open to all Penn State students regardless of major or experience.

Applied AI Labs: The R&D arm of the club. A smaller group of members build real applications from start to finish. Labs members learn to scope AI projects, develop working prototypes, run automated tests, and ship finished products. The club website was built entirely within Labs. First project: Student AI Hub (10 modules, 162 concepts, 22 sources). Stack: Claude Code, Next.js, Tailwind CSS, GitHub Actions, Google Workspace, Playwright.

Explore AI: A public registry of 18 AI tools across four categories (AI Assistants, Research, Developer Tools, Creative), organized by what you want to accomplish. Each listing describes what the tool does, who makes it, and how students can use it. Browse at appliedaipennstate.com/explore.

## How to Join
1. Join the GroupMe: https://groupme.com/join_group/111640691/x4UBh7SL (this is where everything happens)
2. Register on Penn State Discover: https://discover.psu.edu/organization/appliedai
3. Follow the pinned message in GroupMe for getting started instructions
Open to all Penn State students. No application required.

## Executive Board (Spring 2026)
- Ryan Einzig, President (rxe5177@psu.edu)
- Evan Chappell, Vice-President (evc5667@psu.edu)
- Andy Salvo, Programming Lead (ajs10845@psu.edu)
- Brody Bell, Treasurer (bkb5921@psu.edu)

## Guest Speaker Program
We are looking for professionals from any field whose work has been shaped by AI. We welcome speakers from finance, marketing, consulting, healthcare, law, education, startups, or government.

Topics our members are interested in: AI in consulting and professional services, how startups use AI to compete, AI in finance and risk modeling, what "using AI at work" actually looks like, and how to talk about AI skills in interviews.

Note: If asked who has spoken before or about past speakers, we are in our pilot semester and scheduling our first speakers. We have not had any speakers yet. This is an opportunity to be one of the first.

What we ask: 30-45 minutes including Q&A, Zoom or in person at Penn State, a brief description of what you would like to discuss.
What speakers get: An engaged audience of students actively learning AI, a recorded copy of the session, a lasting connection to a student community.

Interested speakers: fill out the form at appliedaipennstate.com/speakers or email appliedaipsu@gmail.com.

## Free Tools for Penn State Students
- Microsoft Copilot: Penn State's approved AI assistant, free with psu.edu email at copilot.microsoft.com
- Microsoft 365: Full Office suite, install on up to 5 devices via office365.psu.edu
- Adobe Creative Cloud: Full Adobe suite at no cost via softwarerequest.psu.edu
- GitHub Student Developer Pack: Free GitHub Copilot, $100 Azure credits, Canva Pro, 20+ tools at education.github.com/pack
- LinkedIn Learning: Thousands of video courses, free for all Penn State students
- WebApps: MATLAB, SAS, ArcGIS, and more from your browser at webapps.psu.edu

## AI Tools We Cover
AI Assistants: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), GitHub Copilot (GitHub/Microsoft)
Research: Perplexity, NotebookLM (Google), Elicit
Developer Tools: Cursor, Claude Code, Codex (OpenAI), v0 (Vercel), Replit, Windsurf, Ollama, Openclaw
Creative: Midjourney, ElevenLabs, Suno

## Contact
Email: appliedaipsu@gmail.com
Website: appliedaipennstate.com
LinkedIn: linkedin.com/company/penn-state-applied-ai-club/
GroupMe: https://groupme.com/join_group/111640691/x4UBh7SL

## Important Context
- The club launches formal operations in Fall 2026
- We are based at Penn State University Park
- This is a student-run organization and does not represent official Penn State positions
- The website and all digital infrastructure were built by club members using AI tools`

type ChatMessage = { role: 'user' | 'assistant'; content: string }

async function anthropic(body: unknown, apiKey: string): Promise<Response> {
  return fetch(ANTHROPIC_URL, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': ANTHROPIC_VERSION,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

async function generateSuggestions(
  apiKey: string,
  lastUserMsg: string,
  assistantReply: string
): Promise<string[]> {
  const res = await anthropic(
    {
      model: MODEL,
      max_tokens: 120,
      temperature: 0.5,
      system:
        'Given a conversation about speaking at a student AI club, suggest exactly 2 short follow-up questions the user might ask next. Return ONLY a JSON array of 2 strings, nothing else. Keep each under 8 words.',
      messages: [
        {
          role: 'user',
          content: `User asked: "${lastUserMsg}"\nAssistant answered: "${assistantReply}"`,
        },
      ],
    },
    apiKey
  )
  if (!res.ok) throw new Error(`suggestions ${res.status}: ${await res.text()}`)
  const data = (await res.json()) as { content?: { type: string; text?: string }[] }
  const text = data.content?.find((b) => b.type === 'text')?.text ?? '[]'
  const match = text.match(/\[[\s\S]*\]/)
  const parsed = JSON.parse(match ? match[0] : text) as unknown
  if (!Array.isArray(parsed)) return []
  return parsed.filter((s): s is string => typeof s === 'string').slice(0, 2)
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('Chat API: ANTHROPIC_API_KEY not set')
    return Response.json({ error: 'Not configured' }, { status: 503 })
  }

  let messages: ChatMessage[]
  try {
    const body = (await req.json()) as { messages?: ChatMessage[] }
    messages = body.messages ?? []
  } catch {
    return new Response('Invalid JSON.', { status: 400 })
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response('Please send a message.', { status: 400 })
  }

  const recentMessages = messages.slice(-MAX_HISTORY).map((m) => ({
    role: m.role === 'assistant' ? ('assistant' as const) : ('user' as const),
    content: String(m.content ?? ''),
  }))
  const lastUserMsg = recentMessages[recentMessages.length - 1]?.content ?? ''

  const upstream = await anthropic(
    {
      model: MODEL,
      max_tokens: 300,
      temperature: 0.3,
      system: SYSTEM_PROMPT,
      stream: true,
      messages: recentMessages,
    },
    apiKey
  )

  if (!upstream.ok || !upstream.body) {
    const errText = await upstream.text().catch(() => '')
    console.error('Chat API upstream error:', upstream.status, errText)
    return new Response(
      JSON.stringify({
        message: 'Something went wrong. Please try again or email appliedaipsu@gmail.com.',
      }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const encoder = new TextEncoder()
  const decoder = new TextDecoder()
  const reader = upstream.body.getReader()

  const readable = new ReadableStream({
    async start(controller) {
      const emit = (obj: unknown) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`))

      let fullResponse = ''
      let buffer = ''

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })

          let idx: number
          while ((idx = buffer.indexOf('\n\n')) !== -1) {
            const event = buffer.slice(0, idx)
            buffer = buffer.slice(idx + 2)
            for (const line of event.split('\n')) {
              if (!line.startsWith('data: ')) continue
              const payload = line.slice(6).trim()
              if (!payload) continue
              try {
                const parsed = JSON.parse(payload) as {
                  type?: string
                  delta?: { type?: string; text?: string }
                }
                if (
                  parsed.type === 'content_block_delta' &&
                  parsed.delta?.type === 'text_delta' &&
                  parsed.delta.text
                ) {
                  fullResponse += parsed.delta.text
                  emit({ type: 'text', text: parsed.delta.text })
                }
              } catch {
                // ignore malformed SSE frames
              }
            }
          }
        }
      } catch (err) {
        console.error('Chat API stream read error:', err)
      }

      if (fullResponse.trim()) {
        try {
          const suggestions = await generateSuggestions(apiKey, lastUserMsg, fullResponse)
          if (suggestions.length > 0) emit({ type: 'suggestions', suggestions })
        } catch (err) {
          console.error('Chat API suggestions error:', err)
        }
      }

      emit({ type: 'done' })
      controller.close()
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  })
}
