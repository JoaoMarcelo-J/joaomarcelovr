export const profile = {
  name: "João Marcelo Vieira Ramos",
  shortName: "João Marcelo",
  title: "Software Engineer",
  initials: "JM",
  roles: [
    "Tech Lead",
    "Senior Fullstack Developer",
    "Especialista em GoLang & Node.js",
    "Especialista em Software de Pagamentos",
  ],
  headline:
    "Tech Lead & Senior Fullstack Developer especialista em GoLang, JavaScript e Node.js.",
  email: "joaomarcelodev.contato@gmail.com",
  phone: "(83) 98748-6259",
  photo: "/eu.jpg",
  about: [
    "Profissional com sólida experiência em desenvolvimento fullstack, liderando squads ágeis e atuando em projetos de alta performance focados em escalabilidade, qualidade de código e arquitetura moderna.",
    "Trabalho com GoLang, JavaScript, Node.js e TypeScript, desenvolvendo APIs REST, microsserviços e aplicações distribuídas — com destaque em software de pagamentos, gateways e checkouts de alta conversão.",
    "Tenho liderança técnica comprovada conduzindo refatorações estruturais, migrações complexas e modernização de stacks legados, sempre com foco em performance, confiabilidade e experiência do usuário.",
  ],
  hobby:
    "Nas horas livres aprofundo meus estudos no mercado de pagamentos — gateways, checkouts e arquiteturas transacionais — e também exploro projetos Web3 e engenharia de software de alta performance.",
};

export const socials = [
  {
    label: "LinkedIn",
    handle: "/in/joaomarcelo-j",
    href: "https://www.linkedin.com/in/joaomarcelo-j/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    handle: "/JoaoMarcelo-J",
    href: "https://github.com/JoaoMarcelo-J",
    icon: "github",
  },
  {
    label: "Instagram",
    handle: "@joao_marcel0o0",
    href: "https://instagram.com/joao_marcel0o0",
    icon: "instagram",
  },
  {
    label: "X / Twitter",
    handle: "@joaomarcel0vr",
    href: "https://x.com/joaomarcel0vr",
    icon: "twitter",
  },
] as const;

export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string[];
  result: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Hydra Hub",
    role: "Skill Lead / Tech Lead",
    period: "01/2025 — Atual",
    current: true,
    description: [
      "Liderança técnica do time de desenvolvimento, apoiando decisões de arquitetura e guiando o time nos desafios técnicos.",
      "Responsável por code reviews, padronização de código e boas práticas de engenharia de software.",
      "Refatoração completa da arquitetura: migração do front de Vite para Next.js e do back de Express para Fastify.",
      "Implementação de testes unitários e de integração, garantindo estabilidade em ambientes de alta demanda.",
    ],
    result:
      "Refatoração completa do core da plataforma com aumento de 30% em velocidade e escalabilidade. Desenvolvi um gateway de pagamentos white-label que atende milhares de usuários processando grandes volumes de dados.",
    tags: ["Next.js", "Fastify", "Node.js", "TypeScript", "Arquitetura", "CI/CD"],
  },
  {
    company: "Mobiup",
    role: "Senior Fullstack Developer",
    period: "05/2023 — 01/2025",
    description: [
      "Liderança técnica de dois desenvolvedores juniores em uma squad multidisciplinar.",
      "Desenvolvimento fullstack de soluções web com foco em qualidade, velocidade e entrega contínua.",
      "Projetos para clientes de diversos setores: fintech, hotelaria, educação, entre outros.",
      "Refatoração de código legado, correção de bugs críticos e implementação de novas features.",
    ],
    result:
      "Entrega de múltiplos projetos com qualidade e agilidade acima da média. Melhoria significativa das bases de código internas, elevando a manutenibilidade e a estabilidade dos sistemas.",
    tags: ["React", "Node.js", "TypeScript", "Web3", "Testes", "Liderança"],
  },
  {
    company: "NFTFY",
    role: "Developer Fullstack Web3",
    period: "08/2022 — 05/2023",
    description: [
      "Desenvolvimento fullstack de um produto inovador do zero, com tecnologias modernas de front e back.",
      "Integração com smart contracts, carteiras cripto e bibliotecas Web3 (Wagmi, Ethers.js).",
      "Criação de um design system e experiência de usuário otimizada para produtos blockchain.",
    ],
    result:
      "Criação do produto Sweep&Flip do zero com tecnologias Web3 modernas e entregas estáveis. Responsável por uma parcela significativa do front-end, design system e integrações blockchain de alta performance.",
    tags: ["Web3", "Wagmi", "Ethers.js", "React", "Design System"],
  },
  {
    company: "Liqi Digital Assets",
    role: "Developer Fullstack Web / Mobile",
    period: "05/2022 — 08/2022",
    description: [
      "Desenvolvimento do aplicativo mobile oficial da exchange brasileira Liqi, com foco em performance e usabilidade.",
      "Criação de landing pages promocionais para lançamentos de fan tokens e campanhas de marketing.",
      "Desenvolvimento de um marketplace de NFTs integrando front-end, back-end e blockchain.",
    ],
    result:
      "Coautor do app oficial da Liqi, desenvolvido do zero, além de diversos projetos de marketing digital e blockchain. Entreguei landing pages de alto impacto para eventos como Big Brother Brasil e clubes esportivos.",
    tags: ["React Native", "React", "Blockchain", "Landing Pages"],
  },
  {
    company: "Foton Tech",
    role: "Developer Fullstack",
    period: "01/2021 — 01/2022",
    description: [
      "Atuação em projetos nacionais e internacionais: marketplaces, e-commerces e sistemas educacionais.",
      "Participação em reuniões com clientes globais, apresentando soluções técnicas em inglês.",
      "Criação de gateways de pagamento e plataformas SaaS com front moderno e back bem estruturado.",
    ],
    result:
      "Entrega de soluções completas para clientes internacionais, com participação direta na definição de requisitos. Contribuição em produtos robustos e escaláveis nos setores de educação, finanças e comércio.",
    tags: ["Fullstack", "SaaS", "E-commerce", "Pagamentos"],
  },
];

export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  highlight: string;
}

export const projects: Project[] = [
  {
    title: "Avantti Finance",
    company: "Hydra Hub",
    description:
      "Plataforma de pagamentos completa para infoprodutos e produtos físicos, com checkout builder visual, produtos customizados e funil de vendas avançado — upsell, downsell, order bump e muito mais.",
    tags: ["Next.js", "Fastify", "Pagamentos", "Checkout Builder"],
    highlight: "Funil de vendas",
  },
  {
    title: "Sweep&Flip",
    company: "NFTFY",
    description:
      "Produto Web3 construído do zero com integrações blockchain de alta performance, smart contracts e design system próprio.",
    tags: ["Web3", "Wagmi", "Ethers.js", "React"],
    highlight: "Produto do zero",
  },
  {
    title: "App Oficial Liqi",
    company: "Liqi Digital Assets",
    description:
      "Aplicativo mobile oficial da exchange de criptoativos Liqi, com foco em performance, usabilidade e integração blockchain.",
    tags: ["React Native", "Mobile", "Crypto"],
    highlight: "Coautor do app",
  },
  {
    title: "Plataformas SaaS & E-commerce",
    company: "Foton Tech",
    description:
      "Marketplaces, e-commerces e sistemas educacionais para clientes nacionais e internacionais, com arquitetura escalável.",
    tags: ["SaaS", "E-commerce", "Pagamentos"],
    highlight: "Clientes globais",
  },
  {
    title: "Modernização de Stack Legada",
    company: "Mobiup",
    description:
      "Refatoração de código legado e implementação de novas features para clientes de fintech, hotelaria e educação.",
    tags: ["Refatoração", "Node.js", "React"],
    highlight: "Multi-setor",
  },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Linguagens",
    items: ["GoLang", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["ReactJS", "Next.js", "React Native", "Design Systems"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Fastify", "APIs REST", "Microsserviços", "Gateways"],
  },
  {
    category: "Infra & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Git"],
  },
  {
    category: "Dados",
    items: ["PostgreSQL", "SQL", "Arquitetura de Dados"],
  },
  {
    category: "Qualidade & Web3",
    items: ["Jest", "Testes Automatizados", "Wagmi", "Ethers.js"],
  },
];

export const techStrip = [
  "GoLang",
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Fastify",
  "Pagamentos",
  "Web3",
];

export interface Education {
  title: string;
  institution: string;
  date: string;
  type: "degree" | "course";
}

export const education: Education[] = [
  {
    title: "Pós-graduação em Go Expert",
    institution: "Full Cycle",
    date: "09/2025",
    type: "degree",
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Unipê",
    date: "12/2023",
    type: "degree",
  },
  {
    title: "Ignite React Native (60h)",
    institution: "Rocketseat",
    date: "12/2022",
    type: "course",
  },
  {
    title: "Ignite Node.js (60h)",
    institution: "Rocketseat",
    date: "07/2022",
    type: "course",
  },
  {
    title: "Ignite React (90h)",
    institution: "Rocketseat",
    date: "12/2021",
    type: "course",
  },
];

export const stats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "∞", label: "Energético e código" },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado" },
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];
