import {
  Globe,
  GraduationCap,
  Briefcase,
  MessageSquare,
  Utensils,
  Wine,
  PartyPopper,
  HelpCircle,
  Network,
  AlertTriangle,
  Users,
  Car,
  Coffee,
  HandMetal,
  BookOpen,
  Scale,
  ShieldAlert,
  Compass,
  Map,
  type LucideIcon,
} from 'lucide-react';

export type SlideData = {
  id: number;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  emojis?: string[];
  imageUrl?: string;
  points: { title: string; desc: string; revealId: number }[];
  source?: string;
};

export const slides: SlideData[] = [
  // --- PART 1: THE SERIOUS / SOCIOLOGICAL FRAMEWORK ---
  {
    id: 1,
    title: 'Bridging Three Worlds',
    subtitle: 'A Cross-Cultural Sociological Analysis of China, Mexico, and Italy',
    icon: Globe,
    emojis: ['🇨🇳', '🇲🇽', '🇮🇹'],
    points: [
      {
        title: 'Three Cultural Lenses',
        desc: 'Comparing how history, family systems, hierarchy, and communication shape everyday behavior.',
        revealId: 1,
      },
      {
        title: 'Our Approach',
        desc: 'Using classic sociological frameworks as a starting point, then testing them against real social moments.',
        revealId: 2,
      }
    ],
  },
  {
    id: 2,
    title: 'The Sociological Foundations',
    subtitle: 'Frameworks of Culture',
    icon: BookOpen,
    emojis: ['📊', '📉'],
    points: [
      {
        title: 'Hofstede\'s Cultural Dimensions',
        desc: 'A comparative framework for dimensions such as Power Distance, Individualism, and Uncertainty Avoidance.',
        revealId: 1,
      },
      {
        title: 'Hall\'s Context Theory',
        desc: 'Analyzing how much communication relies on implicit cues versus explicit spoken words.',
        revealId: 2,
      },
      {
        title: 'Trompenaars\' Model',
        desc: 'A lens for understanding when people prioritize universal rules, personal relationships, or context.',
        revealId: 3,
      },
    ],
    source: 'Hofstede (1980); Hall (1976); Trompenaars (1997)'
  },
  {
    id: 3,
    title: 'Navigating Hierarchy',
    subtitle: 'The Power Distance Index (PDI)',
    icon: Scale,
    emojis: ['🪜', '👑'],
    points: [
      {
        title: '🇨🇳 China (PDI: 80)',
        desc: 'High hierarchy is often accepted as a way to preserve order, respect, and responsibility.',
        revealId: 1,
      },
      {
        title: '🇲🇽 Mexico (PDI: 81)',
        desc: 'Authority is often centralized, with leaders expected to provide both direction and protection.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Italy (PDI: 50)',
        desc: 'A mid-range score: titles can matter, but authority is also questioned and negotiated.',
        revealId: 3,
      },
    ],
    source: 'Hofstede Insights: Power Distance'
  },
  {
    id: 4,
    title: 'The Group vs. The Self',
    subtitle: 'Individualism vs. Collectivism (IDV)',
    icon: Users,
    emojis: ['🫂', '🕴️'],
    points: [
      {
        title: '🇨🇳 China (IDV: 20)',
        desc: 'Strong collectivism: identity is closely connected to family, networks, and guanxi.',
        revealId: 1,
      },
      {
        title: '🇲🇽 Mexico (IDV: 30)',
        desc: 'Collectivist, with familism placing extended family at the center of many decisions.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Italy (IDV: 76)',
        desc: 'High individualism: personal expression and autonomy are emphasized, while family remains important.',
        revealId: 3,
      },
    ],
  },
  {
    id: 5,
    title: 'Managing the Unknown',
    subtitle: 'Uncertainty Avoidance Index (UAI)',
    icon: ShieldAlert,
    emojis: ['🛡️', '⚠️'],
    points: [
      {
        title: '🇨🇳 China (UAI: 30)',
        desc: 'Lower uncertainty avoidance: ambiguity can be handled pragmatically and flexibly.',
        revealId: 1,
      },
      {
        title: '🇮🇹 Italy (UAI: 75)',
        desc: 'Higher uncertainty avoidance: detailed systems and rules help reduce unpredictability.',
        revealId: 2,
      },
      {
        title: '🇲🇽 Mexico (UAI: 82)',
        desc: 'High uncertainty avoidance: tradition, ritual, and trusted routines provide stability.',
        revealId: 3,
      },
    ],
  },
  {
    id: 6,
    title: 'Time as a Horizon',
    subtitle: 'Long-Term vs. Short-Term Orientation',
    icon: Compass,
    emojis: ['🔭', '📅'],
    points: [
      {
        title: '🇨🇳 China (LTO: 87)',
        desc: 'Long-term oriented: present effort is often linked to future family and generational success.',
        revealId: 1,
      },
      {
        title: '🇮🇹 Italy (LTO: 61)',
        desc: 'Pragmatic but balanced: history matters, while adaptation and modernization still continue.',
        revealId: 2,
      },
      {
        title: '🇲🇽 Mexico (LTO: 24)',
        desc: 'More present-focused: continuity, relationships, and immediate stability carry strong weight.',
        revealId: 3,
      },
    ],
  },
  {
    id: 7,
    title: 'Rules vs. Relationships',
    subtitle: 'Universalism vs. Particularism (Trompenaars)',
    icon: Network,
    emojis: ['⚖️', '🤝'],
    points: [
      {
        title: 'Universalism',
        desc: 'The belief that rules and laws apply equally to everyone, regardless of who they are.',
        revealId: 1,
      },
      {
        title: 'Particularism',
        desc: 'The belief that personal relationships and context dictate whether a rule should be enforced.',
        revealId: 2,
      },
      {
        title: 'A Shared Trait',
        desc: 'China and Mexico lean strongly relationship-based, while Italy often balances formal rules with personal context.',
        revealId: 3,
      },
    ],
  },
  {
    id: 8,
    title: 'Reading Between the Lines',
    subtitle: 'High-Context vs. Low-Context Communication',
    icon: MessageSquare,
    emojis: ['🗣️', '👁️'],
    points: [
      {
        title: 'Implicit Communication',
        desc: 'In all three cultures, meaning often depends on tone, relationship, timing, and setting.',
        revealId: 1,
      },
      {
        title: 'Shared History',
        desc: 'Messages rely on centuries of embedded cultural, historical, and familial understanding.',
        revealId: 2,
      },
      {
        title: 'Reading the Air',
        desc: '"Kàn qìfēn" (China), "sottinteso" (Italy), and "el ambiente" (Mexico): noticing what is not said.',
        revealId: 3,
      },
    ],
  },
  {
    id: 9,
    title: 'The Sociology of Space',
    subtitle: 'Proxemics Theory',
    icon: Map,
    emojis: ['📏', '🫧'],
    points: [
      {
        title: '🇨🇳 Spatial Preservation',
        desc: 'With unfamiliar people, greetings can be more formal and physical boundaries more clearly observed.',
        revealId: 1,
      },
      {
        title: '🇲🇽 Tactile Bonding',
        desc: 'Warm greetings, hugs, and closeness can signal trust, affection, and group belonging.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Expressive Amplification',
        desc: 'Conversation often uses expressive gestures and closer distance to add emphasis and meaning.',
        revealId: 3,
      },
    ],
  },
  {
    id: 10,
    title: 'The Structural Conclusion',
    subtitle: 'Where Theory Ends',
    icon: BookOpen,
    emojis: ['🧠', '➡️', '🎭'],
    points: [
      {
        title: 'Frameworks as Maps',
        desc: 'These models do not define individuals, but they help explain recurring cultural patterns.',
        revealId: 1,
      },
      {
        title: 'The Common Ground',
        desc: 'Underneath everything, all three societies prioritize social cohesion and profound loyalty over raw efficiency.',
        revealId: 2,
      },
      {
        title: 'The Reality Check',
        desc: 'Theory is clean. Real life is warmer, messier, and much more memorable.',
        revealId: 3,
      },
    ],
  },

  // --- PART 2: EVERYDAY CULTURE IN ACTION ---
  {
    id: 11,
    title: 'Cultural Distillation',
    subtitle: 'Spirits and Hierarchies',
    icon: Wine,
    emojis: ['🍶', '🥃', '🍷'],
    points: [
      {
        title: '🇨🇳 Moutai & Ganbei',
        desc: 'Clinking slightly lower can become a small physical signal of respect and seniority.',
        revealId: 1,
      },
      {
        title: '🇲🇽 Tequila & Toasts',
        desc: 'Shared shots can loosen formality and turn a table of strangers into a table of stories.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Wine & Bella Figura',
        desc: 'Wine belongs with food, style, conversation, and the art of staying composed.',
        revealId: 3,
      },
    ],
  },
  {
    id: 12,
    title: 'At School & Home',
    subtitle: 'The Ultimate Authorities',
    icon: GraduationCap,
    emojis: ['👩‍🏫', '👨‍👩‍👧', '🎒'],
    points: [
      {
        title: '🇨🇳 The Tiger Mom & Lǎoshī',
        desc: 'Respect for teachers and high expectations often meet quiet care, like fruit arriving during study time.',
        revealId: 1,
      },
      {
        title: '🇲🇽 La Chancla',
        desc: 'A famous family joke about authority: discipline, love, and warning signals in one cultural symbol.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Mammismo & Mamma',
        desc: 'Family closeness stays strong into adulthood, especially around food, advice, and home life.',
        revealId: 3,
      },
    ],
  },
  {
    id: 13,
    title: 'At Work',
    subtitle: 'Office Politics & "Ahorita"',
    icon: Briefcase,
    emojis: ['💻', '⏰', '🛌'],
    points: [
      {
        title: '🇨🇳 The 15-Minute Rule & Naps',
        desc: 'Arriving early signals seriousness, while a short lunch rest can be part of the workday rhythm.',
        revealId: 1,
      },
      {
        title: '🇲🇽 "Ahorita"',
        desc: 'A flexible word that can mean right now, soon, later, or "we will see," depending on context.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Il Quarto d\'Ora Accademico',
        desc: 'The academic quarter-hour: in some settings, a small delay is expected rather than shocking.',
        revealId: 3,
      },
    ],
  },
  {
    id: 14,
    title: 'Social Norms',
    subtitle: 'Talking Without Speaking',
    icon: HandMetal,
    emojis: ['🤌', '💋', '🤫'],
    points: [
      {
        title: '🇨🇳 Face & Restraint',
        desc: 'Tact and emotional control help avoid public embarrassment and preserve harmony.',
        revealId: 1,
      },
      {
        title: '🇲🇽 The Lip Point',
        desc: 'Why use hands? Communicating complex directions and pointing at an object across the room using only your lips.',
        revealId: 2,
      },
      {
        title: '🇮🇹 The Hand Vocabulary',
        desc: 'Gestures can add emphasis, emotion, and meaning alongside spoken words.',
        revealId: 3,
      },
    ],
  },
  {
    id: 15,
    title: 'Food Culture',
    subtitle: 'The Unbreakable Rules',
    icon: Utensils,
    emojis: ['🥢', '🌮', '☕'],
    points: [
      {
        title: '🇨🇳 The Check Ritual',
        desc: 'Insisting on paying can signal generosity and respect; secret pre-payment is the advanced move.',
        revealId: 1,
      },
      {
        title: '🇲🇽 La Sobremesa',
        desc: 'The meal is only the beginning; conversation can continue long after the plates are cleared.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Culinary Codes',
        desc: 'Coffee, pasta, and pizza traditions are defended with playful seriousness and strong opinions.',
        revealId: 3,
      },
    ],
  },
  {
    id: 16,
    title: 'Drink Culture',
    subtitle: 'The Morning After',
    icon: Coffee,
    emojis: ['🤒', '🍲', '☕'],
    points: [
      {
        title: '🇨🇳 Hot Water & Congee',
        desc: 'A default comfort remedy: warm, simple, practical, and offered with quiet confidence.',
        revealId: 1,
      },
      {
        title: '🇲🇽 Menudo & Chilaquiles',
        desc: 'Bold comfort food brings salt, spice, warmth, and the feeling that recovery is possible.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Espresso & Reset',
        desc: 'A small espresso, a composed face, and a return to dignity one sip at a time.',
        revealId: 3,
      },
    ],
  },
  {
    id: 17,
    title: 'Party Culture',
    subtitle: 'In-Group vs Out-Group Bonding',
    icon: PartyPopper,
    emojis: ['🎤', '💃', '🥂'],
    points: [
      {
        title: '🇨🇳 KTV Vulnerability',
        desc: 'Karaoke can lower formality: enthusiasm matters more than perfect singing.',
        revealId: 1,
      },
      {
        title: '🇲🇽 The Eternal Fiesta',
        desc: 'Celebrations often stretch across generations, rooms, food, music, and time.',
        revealId: 2,
      },
      {
        title: '🇮🇹 The Elegant Aperitivo',
        desc: 'Aperitivo turns early evening into a stylish ritual of conversation, snacks, and people-watching.',
        revealId: 3,
      },
    ],
  },
  {
    id: 18,
    title: 'Daily Chaos',
    subtitle: 'Traffic & Driving Laws',
    icon: Car,
    emojis: ['🚗', '🛵', '🛑'],
    points: [
      {
        title: '🇨🇳 Honk as Signal',
        desc: 'In dense traffic, honking can function as a location signal more than a personal insult.',
        revealId: 1,
      },
      {
        title: '🇲🇽 Echando Lámina',
        desc: 'Assertive merging: a driving style where confidence and timing matter as much as lane markings.',
        revealId: 2,
      },
      {
        title: '🇮🇹 The Vespa Ballet',
        desc: 'Scooters weave through narrow streets with speed, style, and a surprising sense of shared rhythm.',
        revealId: 3,
      },
    ],
  },
  {
    id: 19,
    title: 'Superstitions & Taboos',
    subtitle: 'How Luck Gets Protected',
    icon: AlertTriangle,
    emojis: ['👻', '🧿', '🧂'],
    points: [
      {
        title: '🇨🇳 The Number 4',
        desc: 'Four sounds close to the word for "death," so some buildings avoid floors or room numbers with 4.',
        revealId: 1,
      },
      {
        title: '🇲🇽 El Mal de Ojo (Evil Eye)',
        desc: 'Compliments, babies, and protective charms can all connect to beliefs about envy and protection.',
        revealId: 2,
      },
      {
        title: '🇮🇹 Salt & Purple',
        desc: 'Spilling salt or oil is unlucky, and purple can be avoided in some theater and performance contexts.',
        revealId: 3,
      },
    ],
  },
  {
    id: 20,
    title: 'The Global Tapestry',
    subtitle: 'Thank you & Q&A',
    icon: HelpCircle,
    emojis: ['🌍', '🙌', '🎉'],
    points: [
      {
        title: 'The Underlying Truth',
        desc: 'Beneath the frameworks, rituals, and jokes are recognizable needs: respect, belonging, and care.',
        revealId: 1,
      },
      {
        title: 'Laughter is Empathy',
        desc: 'We all want respect, love, and a good meal. Laughing at our differences builds genuine global fluency and empathy.',
        revealId: 2,
      },
      {
        title: 'Open Floor',
        desc: '¿Preguntas? Domande? 问题 (Wèntí)?',
        revealId: 3,
      },
    ],
  }
];
