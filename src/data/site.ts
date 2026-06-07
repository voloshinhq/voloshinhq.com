export type Lang = 'ru' | 'en';

export const defaultLang: Lang = 'en';
export const languages: Lang[] = ['en', 'ru'];

export const socialLinks = (lang: Lang) => [
  { key: 'github', label: 'GitHub', href: 'https://github.com/voloshinhq' },
  { key: 'x', label: 'X', href: 'https://x.com/voloshinhq' },
  { key: 'telegram', label: 'Telegram', href: lang === 'ru' ? 'https://t.me/voloshinhq_ru' : 'https://t.me/voloshinhq' },
  { key: 'email', label: 'Email', href: 'mailto:voloshinhq@gmail.com' }
];

export const ctaTelegramHref = 'https://t.me/voloshin_hq';
export const calendlyHref = 'https://calendly.com/voloshinhq/30min';
export const licenseHref = 'https://github.com/voloshinhq/voloshinhq.com/blob/main/LICENSE';

export const ui = {
  ru: {
    metaTitle: 'Ярослав Волошин - инженер',
    metaDescription: 'Персональный сайт Ярослава Волошина: инженерные заметки, проекты и ссылки.',
    nav: {
      blog: 'Блог',
      projects: 'Проекты',
      contact: 'Контакт'
    },
    hero: {
      eyebrow: 'Инженер. Строю личные и коммерческие продукты.',
      title: 'Ярослав Волошин',
      text: 'Инженер. Строю проекты с 2020 года. Начинал с пет-проектов, сейчас делаю инструменты с реальными пользователями. Увлекаюсь Формулой 1. Добро пожаловать в мой уголок интернета.'
    },
    shift: {
      label: 'Мир изменился',
      title: 'Codex и Claude отлично пишут код. Инженеры больше не нужны?',
      text: 'Сгенерировать рабочий код сегодня очень легко. ИИ справляется с этим лучше и быстрее, чем джуны до появления ИИ. Но код это не продукт. Написать код стало дёшево. Цена ошибки не изменилась. Поэтому инженеры, которые понимают систему и отвечают за результат, нужны бизнесу.'
    },
    modes: {
      title: 'Два режима работы',
      items: [
        {
          title: 'Проект от идеи до продакшена',
          text: 'Помогаю превратить сырую идею в работающий продукт: структура, MVP, инфраструктура, запуск и первые итерации.'
        },
        {
          title: 'Точечная инженерная помощь',
          text: 'Разбор архитектуры, code review, консультация, отладка сложной проблемы или второй взгляд перед важным релизом.'
        }
      ]
    },
    projects: {
      title: 'Проекты',
      intro: 'Несколько личных и коммерческих направлений. Тексты здесь заглушки, структуру можно быстро наполнить реальными деталями.',
      items: [
        {
          title: 'OpenClaw workflow',
          text: 'Личная инженерная среда с AI-агентами, автоматизацией задач и инфраструктурным мониторингом.',
          href: 'https://voloshinhq.com',
          tags: ['AI', 'Automation', 'Infra']
        },
        {
          title: 'Project monitoring',
          text: 'Слой наблюдаемости для сайтов, сервисов и серверов, чтобы видеть проблемы раньше пользователей.',
          href: '/ru/blog/project-monitoring-you-cant-scale-without-it',
          tags: ['Monitoring', 'Linux', 'Ops']
        },
        {
          title: 'Todon',
          text: 'Черновик продукта вокруг to-do и done. Идея, которую можно развивать публично и небольшими релизами.',
          href: '#',
          tags: ['Product', 'SaaS', 'WIP']
        }
      ]
    },
    testimonials: {
      title: 'Отзывы клиентов',
      items: [
        { quote: 'Короткий отзыв клиента о скорости, ясности и качестве работы. Placeholder.', author: 'Имя клиента', role: 'Компания / роль' },
        { quote: 'Здесь будет живой отзыв после согласования текста. Без маркетинговой воды.', author: 'Имя клиента', role: 'Проект' },
        { quote: 'Ещё один короткий отзыв: конкретная польза, результат, почему было удобно работать.', author: 'Имя клиента', role: 'Продукт' }
      ]
    },
    latest: {
      title: 'Последние посты',
      all: 'Все посты'
    },
    cta: {
      title: 'Давайте поговорим',
      text: 'Если у вас есть идея, проект или сложный инженерный вопрос, напишите в Telegram. Если удобнее, можно написать на email или забронировать короткий созвон.',
      primary: 'Написать в Telegram',
      secondary: 'Email',
      tertiary: 'Забронировать встречу'
    },
    blog: {
      title: 'Блог',
      description: 'Заметки о продуктах, инфраструктуре, AI и инженерной работе.',
      allTags: 'Все',
      loadMore: 'Загрузить ещё',
      readMore: 'Читать',
      readTime: 'мин чтения',
      previous: 'Предыдущий пост',
      next: 'Следующий пост',
      empty: 'Постов пока нет.'
    }
  },
  en: {
    metaTitle: 'Yaroslav Voloshin - Engineer',
    metaDescription: 'Personal website of Yaroslav Voloshin: engineering notes, projects, and links.',
    nav: {
      blog: 'Blog',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Engineer. Building personal and commercial products.',
      title: 'Yaroslav Voloshin',
      text: 'Engineer. I have been building projects since 2020. I started with pet projects, and now I build tools with real users. I am into Formula 1. Welcome to my corner of the internet.'
    },
    shift: {
      label: 'The world changed',
      title: 'Codex and Claude write great code. Do engineers still matter?',
      text: 'Generating working code is very easy today. AI does it better and faster than juniors did before AI. But code is not a product. Writing code got cheap. The cost of a wrong direction did not change. That is why engineers who understand the system and own the outcome still matter to the business.'
    },
    modes: {
      title: 'Two Work Modes',
      items: [
        {
          title: 'Full project to production',
          text: 'I help turn a rough idea into a working product: structure, MVP, infrastructure, launch, and first iterations.'
        },
        {
          title: 'Focused engineering help',
          text: 'Architecture review, code review, consultation, debugging a hard problem, or a second opinion before an important release.'
        }
      ]
    },
    projects: {
      title: 'Projects',
      intro: 'A few personal and commercial directions. Copy here is placeholder, but the structure is ready for real details.',
      items: [
        {
          title: 'OpenClaw workflow',
          text: 'A personal engineering environment with AI agents, task automation, and infrastructure monitoring.',
          href: 'https://voloshinhq.com',
          tags: ['AI', 'Automation', 'Infra']
        },
        {
          title: 'Project monitoring',
          text: 'An observability layer for websites, services, and servers to catch problems before users do.',
          href: '/en/blog/project-monitoring-you-cant-scale-without-it',
          tags: ['Monitoring', 'Linux', 'Ops']
        },
        {
          title: 'Todon',
          text: 'A product draft around to-do and done, designed to be developed in public through small releases.',
          href: '#',
          tags: ['Product', 'SaaS', 'WIP']
        }
      ]
    },
    testimonials: {
      title: 'Client Notes',
      items: [
        { quote: 'A short client note about speed, clarity, and quality. Placeholder.', author: 'Client name', role: 'Company / role' },
        { quote: 'A real approved quote will live here. No corporate filler.', author: 'Client name', role: 'Project' },
        { quote: 'Another concise quote: concrete value, outcome, and why the work felt easy.', author: 'Client name', role: 'Product' }
      ]
    },
    latest: {
      title: 'Latest Posts',
      all: 'All posts'
    },
    cta: {
      title: 'Let\'s Talk',
      text: 'If you have an idea, a project, or a hard engineering question, message me on Telegram. If easier, you can email me or book a short call.',
      primary: 'Message on Telegram',
      secondary: 'Email',
      tertiary: 'Book a meeting'
    },
    blog: {
      title: 'Blog',
      description: 'Notes on products, infrastructure, AI, and engineering work.',
      allTags: 'All',
      loadMore: 'Load more',
      readMore: 'Read',
      readTime: 'min read',
      previous: 'Previous post',
      next: 'Next post',
      empty: 'No posts yet.'
    }
  }
} as const;

export const pathForLang = (lang: Lang, path = '') => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return normalized === '/' ? '/' : normalized;
  return normalized === '/' ? `/${lang}` : `/${lang}${normalized}`;
};

export const otherLang = (lang: Lang): Lang => (lang === 'ru' ? 'en' : 'ru');
