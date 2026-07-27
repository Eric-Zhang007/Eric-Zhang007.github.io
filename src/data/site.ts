export const basePath = import.meta.env.BASE_URL;

export const profile = {
  name: 'Jiachang Zhang',
  brand: 'Jiachang Zhang',
  location: 'XJTU AI · SJTU DMCV Lab',
  github: 'https://github.com/Eric-Zhang007',
  email: 'zjc010100000@stu.xjtu.edu.cn',
  cvUrl: 'files/Jiachang_Zhang_Research_CV.pdf',
  intro:
    'Undergraduate researcher working on embodied AI, world models, and video learning systems.',
};

export const navItems = [
  { label: 'Research', href: 'research/' },
  { label: 'Projects', href: 'projects/' },
  { label: 'Blog', href: 'blog/' },
  { label: 'Notes', href: 'notes/' },
  { label: 'Links', href: 'links/' },
  { label: 'About', href: 'about/' },
];

export const researchInterests = [
  'Embodied AI',
  'World Models',
  'Video Understanding',
  'Mixture-of-Experts',
  'Data-Centric Learning Systems',
];

export const researchThemes = [
  {
    title: 'Embodied failure recovery',
    description: 'Collecting auditable trajectories that preserve failures, recovery attempts, and counterfactual branches.',
  },
  {
    title: 'Video world models',
    description: 'Studying how routed video models represent visual changes, dynamics, and physical interactions.',
  },
  {
    title: 'Multi-agent data',
    description: 'Contributing interaction data and quality control for world-model research in multi-agent settings.',
  },
];

export const educationEntries: Array<{
  school: string;
  degree: string;
  period: string;
  description?: string;
}> = [
  {
    school: "Xi'an Jiaotong University (XJTU)",
    degree: 'B.Eng. in Artificial Intelligence',
    period: '2025 - Present',
    description: 'Incoming sophomore in Sep 2026.',
  },
];

export const blogPosts: Array<{
  title: string;
  date: string;
  href: string;
  summary?: string;
}> = [];

export const notes: Array<{
  title: string;
  date: string;
  href: string;
  summary?: string;
}> = [];

export const projects: Array<{
  title: string;
  status: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
}> = [
  {
    title: 'Embodied Failure-Recovery Data Collection',
    status: 'AAAI submission in preparation',
    summary:
      'A data-collection and evaluation workflow for recoverable embodied task failures in AI2-THOR, with replayable traces and branch-level evidence.',
    image: 'images/projects/embodied-failure-recovery.png',
    imageAlt: 'An AI2-THOR indoor environment used for embodied recovery data collection.',
    tags: ['Embodied AI', 'AI2-THOR', 'Data collection'],
  },
  {
    title: 'LingBot Video MoE Routing',
    status: 'Ongoing research',
    summary:
      'Controlled analysis of routing behavior and targeted gate interventions in a video mixture-of-experts model.',
    image: 'images/projects/lingbot-moe.png',
    imageAlt: 'A generated video frame of an ice cube splashing into a glass.',
    tags: ['Video models', 'MoE', 'Model analysis'],
  },
  {
    title: 'Multi-Agent World-Model Data Collection',
    status: 'Ongoing collaboration',
    summary:
      'Contributing multi-agent interaction data and quality control. Model training is planned for a later stage.',
    tags: ['World models', 'Multi-agent systems', 'Data quality'],
  },
];

export const links = [
  { label: 'GitHub', href: profile.github, description: 'Code and public work' },
  { label: 'Email', href: `mailto:${profile.email}`, description: profile.email },
];

export const activities = [
  { date: 'Present', title: 'Research Intern · DMCV Lab, Shanghai Jiao Tong University' },
  { date: 'Sep 2026', title: 'Entering second year · B.Eng. in Artificial Intelligence, XJTU' },
];

export const stats = [
  { label: 'Blog posts', value: blogPosts.length },
  { label: 'Notes', value: notes.length },
  { label: 'Research projects', value: projects.length },
  { label: 'Current roles', value: 2 },
];

export function sitePath(path = '') {
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
}
