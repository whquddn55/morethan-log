const CONFIG = {
  // profile setting (required)
  profile: {
    name: "thuthi",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "백엔드 개발자 피곤한투티(조병우) 입니다.",
    email: "whquddn55@gmail.com",
    linkedin: "",
    github: "whquddn55",
    instagram: "",
  },
  projects: [
    {
      name: `Algorithm-repo`,
      href: "https://github.com/whquddn55/Algorithm_BojSolves",
    },
  ],
  // blog setting (required)
  blog: {
    title: "thuthi-log: 피곤한투티의 개발과 일상",
    description: "피곤한투티의 개발/일상 공유 블로그",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://thuthi.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: [
      "Dev", "Spring", "Springboot", "Algorithm", "JPA",
      "dev", "spring", "springboot", "algorithm", "jpa",
      "개발", "스프링", "스프링부트", "알고리즘", "김영한", "조환규", "피곤한투티", "투티", "부산대", "부산대학교",
      "ssafy", "싸피", "LG CNS", "CODE MONSTER", "코드몬스터", "코딩테스트", "코테", "ICPC", "SCPC", "UCPC", "코딩대회"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "whquddn55/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }