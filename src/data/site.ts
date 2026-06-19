export type Lang = 'ru' | 'en';

export const defaultLang: Lang = 'en';
export const languages: Lang[] = ['en', 'ru'];
export const emailAddress = 'voloshinhq@gmail.com';
export const emailHref = `mailto:${emailAddress}`;
export const emailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

export const socialLinks = (lang: Lang) => [
  { key: 'github', label: 'GitHub', href: 'https://github.com/voloshinhq' },
  { key: 'x', label: 'X', href: 'https://x.com/voloshinhq' },
  { key: 'telegram', label: 'Telegram', href: lang === 'ru' ? 'https://t.me/voloshinhq_ru' : 'https://t.me/voloshinhq' },
  { key: 'email', label: 'Email', href: emailHref }
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
      intro: 'Избранные продукты и инженерные системы, которые я строю, поддерживаю или развиваю публично.',
      items: [
        {
          title: 'OpenClaw workflow',
          text: 'Личная инженерная среда с AI-агентами, автоматизацией задач, напоминаниями, проверками и рабочими процессами вокруг проектов.',
          href: 'https://voloshinhq.com'
        },
        {
          title: 'Project monitoring',
          text: 'Мониторинг сайтов, сервисов и серверов, чтобы раньше видеть сбои, деградацию и проблемы инфраструктуры.',
          href: '/ru/blog/project-monitoring-you-cant-scale-without-it'
        },
        {
          title: 'Todon',
          text: 'Продуктовый эксперимент на стыке to-do и done: как делать прогресс видимым, выпускать маленькие части и держать честный цикл работы.',
          href: '/ru/blog/building-in-public-ai-tools-and-todon'
        }
      ]
    },
    testimonials: {
      title: 'Как я работаю',
      items: [
        { title: 'Быстро довожу до рабочего результата', text: 'Сначала фиксирую цель, ограничения и минимальный полезный результат. Потом двигаюсь короткими итерациями без лишней сложности.' },
        { title: 'Думаю о продакшене заранее', text: 'Код, инфраструктура, мониторинг и поддержка должны быть понятны не только в момент запуска, но и через месяц после него.' },
        { title: 'Общаюсь прямо и по делу', text: 'Показываю прогресс, риски и следующие шаги так, чтобы по проекту было легко принимать решения без лишней бюрократии.' }
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
      intro: 'Selected products and engineering systems I build, maintain, or develop in public.',
      items: [
        {
          title: 'OpenClaw workflow',
          text: 'A personal engineering environment with AI agents, task automation, reminders, checks, and project workflows.',
          href: 'https://voloshinhq.com'
        },
        {
          title: 'Project monitoring',
          text: 'Monitoring for websites, services, and servers to catch outages, degradation, and infrastructure problems earlier.',
          href: '/blog/project-monitoring-you-cant-scale-without-it'
        },
        {
          title: 'Todon',
          text: 'A product experiment between to-do and done: making progress visible, shipping small pieces, and keeping the work loop honest.',
          href: '/blog/building-in-public-ai-tools-and-todon'
        }
      ]
    },
    testimonials: {
      title: 'How I work',
      items: [
        { title: 'Get to a working result quickly', text: 'I define the goal, constraints, and smallest useful outcome first. Then I move in short iterations without unnecessary complexity.' },
        { title: 'Think about production early', text: 'Code, infrastructure, monitoring, and support should stay understandable not only at launch, but a month later too.' },
        { title: 'Communicate directly', text: 'I show progress, risks, and next steps clearly, so project decisions stay simple and grounded.' }
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
