export interface Tool {
  name: string
  maker: string
  description: string
  capabilities: string[]
  url: string
  category?: string
}

export const tools: Tool[] = [
  {
    name: 'ChatGPT',
    maker: 'OpenAI',
    description: 'The most widely used AI chat assistant.',
    capabilities: [
      'General Q&A and research',
      'Writing and editing help',
      'Code generation and debugging',
      'Image generation with DALL-E',
    ],
    url: 'https://chat.openai.com',
  },
  {
    name: 'Claude',
    maker: 'Anthropic',
    description: 'An AI assistant built for nuanced, trustworthy reasoning and long-form writing.',
    capabilities: [
      'Long document analysis',
      'Careful, nuanced reasoning',
      'Code generation and review',
      'Research synthesis',
    ],
    url: 'https://claude.ai',
  },
  {
    name: 'Perplexity',
    maker: 'Perplexity AI',
    description: 'The search engine built for research. Every answer comes with sources.',
    capabilities: [
      'Source-backed research answers',
      'Academic and news search',
      'Follow-up question threads',
      'Collections for organizing research',
    ],
    url: 'https://perplexity.ai',
  },
  {
    name: 'Openclaw',
    maker: 'Openclaw',
    description: 'Open source AI framework for building agents that connect to real tools.',
    capabilities: [
      'Build custom AI agents',
      'Connect agents to APIs and databases',
      'Chain multiple AI models together',
      'Run agents locally or in the cloud',
    ],
    url: 'https://openclaw.com',
  },
  {
    name: 'Ollama',
    maker: 'Ollama',
    description: 'Run AI models on your own computer. No cloud, no API keys, no cost.',
    capabilities: [
      'Run LLMs locally (Llama, Mistral, Gemma)',
      'Complete privacy for sensitive work',
      'No usage limits or costs',
      'Fine-tune models on your data',
    ],
    url: 'https://ollama.com',
  },
  {
    name: 'Cursor',
    maker: 'Anysphere',
    description: 'An AI-native code editor. Understands your whole codebase.',
    capabilities: [
      'AI-powered code editing and completion',
      'Codebase-aware suggestions',
      'Natural language to code changes',
      'Built-in chat with your code as context',
    ],
    url: 'https://cursor.com',
  },
  {
    name: 'v0',
    maker: 'Vercel',
    description: 'Generate UI components and full pages from text descriptions.',
    capabilities: [
      'Generate React components from prompts',
      'Create full page layouts',
      'Export production-ready code',
      'Iterate on designs conversationally',
    ],
    url: 'https://v0.dev',
  },
  {
    name: 'Codex',
    maker: 'OpenAI',
    description: 'An agentic coding tool by OpenAI that writes, tests, and fixes code.',
    capabilities: [
      'Write entire features from specifications',
      'Run and test code in a sandbox',
      'Fix bugs by reading error messages',
      'Generate pull requests automatically',
    ],
    url: 'https://openai.com/codex',
  },
]
