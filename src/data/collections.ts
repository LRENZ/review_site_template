// Real Product Images
import fashionCover from '@/assets/collections/fashion.jpg';
import aiCover from '@/assets/collections/ai.jpg';
import techCover from '@/assets/collections/tech.jpg';
import botsCover from '@/assets/products/monica.webp'; // Using Monica image as cover for Bots
import { StaticImageData } from 'next/image';

export interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroImage: string | StaticImageData;
  items: CollectionItem[];
}

export interface CollectionItem {
  reviewSlug: string;
  editorialComment: string; // "Toxic" / Sharp commentary
}

export const collections: Collection[] = [
  {
    id: 'col_ai_chatbots_2025',
    slug: 'ai-chatbots-2025',
    title: 'Battle of the Bots: LLM Showdown',
    description: 'We stopped asking "which AI is best" and started asking "which one makes us want to throw our laptop out the window the least?" This is the definitive ranking of the chatterboxes.',
    heroImage: botsCover,
    items: [
      {
        reviewSlug: 'monica-im',
        editorialComment: "The Frankenstein of AI tools. It stitches together every model you love (GPT-4, Claude, Gemini) into a browser extension that feels like a command center. Is it messy? Yes. Is the UI a bit much? Absolutely. But having every major LLM one click away while browsing is a workflow unlock that makes you feel like a wizard. Just don't look too closely at the privacy policy."
      },
      {
        reviewSlug: 'perplexity-ai',
        editorialComment: "Google is dead. Long live Perplexity. It’s the only search engine that respects your time. It gives you the answer, sourced and cited, without forcing you to wade through SEO-spam recipe blogs. If you are still 'Googling' factual questions in 2025, you are essentially using a fax machine."
      },
      {
        reviewSlug: 'claude-3-5-sonnet',
        editorialComment: "The smart kid in class who is also incredibly annoying. It writes better code than GPT-4, but it will lecture you about safety if you ask it to do anything remotely edgy. It’s the moral compass you didn't ask for, attached to the coding brain you desperately need."
      },
      {
        reviewSlug: 'google-gemini-advanced',
        editorialComment: "Google's desperate, hulking attempt to stay relevant. It’s integrated into everything (Docs, Gmail, Drive), which is both its superpower and its curse. It’s fast, it has a 1M token context window, and it’s occasionally completely wrong with total confidence. Use it for the storage space; tolerate it for the AI."
      }
    ]
  },
  {
    id: 'col_fashion_2025',
    slug: 'fashion-2025',
    title: 'The 2025 Uniform: Essential & Ethical',
    description: 'We are done with fast fashion. This year is about fewer, better things. This collection highlights the pieces that survive the wash, the commute, and the trend cycle.',
    heroImage: fashionCover,
    items: [
      {
        reviewSlug: 'patagonia-better-sweater',
        editorialComment: "The tech bro uniform? Maybe. But it survives the meme cycle because it's indestructible. While other fleeces dissolve into a pill-covered mess, this ages like a good leather jacket. Just don't wear the vest version unless you're actually pitching a Series B."
      },
      {
        reviewSlug: 'ray-ban-meta',
        editorialComment: "The only 'smart' wearable that doesn't make you look like a cyborg dork. The camera quality is shockingly good for something on your face. Yes, you are feeding Zuckerberg your POV data, but for hands-free TikToks, it's a Faustian bargain many are willing to make."
      },
      {
        reviewSlug: 'nike-pegasus-40',
        editorialComment: "The Toyota Camry of running shoes. Reliable, boring, and indestructible. It’s not trying to be a super-shoe; it's trying to be the shoe you don't have to think about. In a world of $300 fragile racers, reliable boredom is a feature."
      },
      {
        reviewSlug: 'apple-watch-ultra-2',
        editorialComment: "Do you need a dive computer to check emails? No. But the Ultra 2 isn't about what you *will* do; it's about not having to charge your watch every single night. That alone makes it the only Apple Watch worth buying."
      }
    ]
  },
  {
    id: 'col_ai_2025',
    slug: 'ai-tools-2025',
    title: 'The AI Stack: Productivity Multipliers',
    description: 'Beyond the chatbots. These are the AI-powered tools that actually 10x your productivity, verified by our editorial team. We expanded this list to include the creative, the coding, and the organizational heavyweights.',
    heroImage: aiCover,
    items: [
      {
        reviewSlug: 'chatgpt-plus',
        editorialComment: "Stop complaining about the $20/month. If you use this for work, it pays for itself by 10 AM on Monday. The Data Analysis feature alone—uploading spreadsheets and getting instant charts—is a career cheat code."
      },
      {
        reviewSlug: 'midjourney',
        editorialComment: "The king of gatekeeping. The Discord interface is a filter that keeps the casuals out. But if you want AI art that doesn't look like plastic stock photos, this is the only game in town. It's user-hostile, expensive, and absolutely magical."
      },
      {
        reviewSlug: 'github-copilot',
        editorialComment: "It’s a junior developer that types 1000 words per minute and never sleeps. Does it write bugs? Yes. Does it hallucinate APIs? Sometimes. But it eliminates the 'blank page' paralysis of coding. If you aren't using it, you are typing too much."
      },
      {
        reviewSlug: 'arc-browser',
        editorialComment: "A browser that wants to be an operating system. It demands you unlearn 20 years of muscle memory (vertical tabs? spaces?), but once you do, Chrome feels like a toy. It eats RAM for breakfast, but the productivity boost is worth the battery drain."
      },
      {
        reviewSlug: 'notion-workspace',
        editorialComment: "Notion is dangerous. You can spend more time building your 'system' than doing work. But the AI integration is actually useful for summarizing messy notes. Just don't fall into the trap of making your workspace 'aesthetic' instead of functional."
      },
      {
        reviewSlug: 'loom',
        editorialComment: "The meeting killer. Why spend 30 minutes on a Zoom call when a 3-minute Loom video can explain the bug? The new AI features title your videos and write the summary for you. It’s the only tool that actually gives you time back."
      }
    ]
  },
  {
    id: 'col_tech_2025',
    slug: 'tech-2025',
    title: 'Gadget Hall of Fame: Engineering Peaks',
    description: 'Hardware is hard. These products managed to survive the hype cycle and earn a permanent spot on our desks.',
    heroImage: techCover,
    items: [
      {
        reviewSlug: 'sony-wh1000xm5',
        editorialComment: "They don't fold. The case is huge. They cost a fortune. And yet, they are the only headphones you should buy for travel. Sony has mastered the art of silencing the screaming baby in row 12."
      },
      {
        reviewSlug: 'dyson-v15-detect',
        editorialComment: "Buying a $750 vacuum is a sign you have officially aged out of being cool. But the laser on this thing is addictive. It gamifies cleaning by showing you exactly how filthy your 'clean' floors are. It's horrifying and satisfying."
      },
      {
        reviewSlug: 'steam-deck-oled',
        editorialComment: "The best handheld gaming PC, period. The OLED screen is stunning, the battery life is actually usable, and it just works. It puts the buggy, Windows-based competitors to shame."
      },
      {
        reviewSlug: 'herman-miller-aeron',
        editorialComment: "It's ugly. It looks like a torture device from a 90s sci-fi movie. But your back doesn't care about aesthetics. Buying a cheap gaming chair is a loan you pay back with spinal damage. Buying an Aeron is preventative medicine."
      }
    ]
  }
];

export function getCollection(slug: string) {
  return collections.find(c => c.slug === slug);
}
