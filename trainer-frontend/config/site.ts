export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Interfaith.ai",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Questions",
      href: "/questions",
    },
    {
      title: "Sessions",
      href: "/sessions",
    },
    {
      title: "Chatbot",
      href: "/chatbot",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  api_prod: "https://faqapi-service-mgn7slqt5a-as.a.run.app",
  api_local: "http://localhost:4000",
}

export const API_PROD_URL = siteConfig.api_prod
export const API_LOCAL_URL = siteConfig.api_local
export const CHATBOT_URL = 'https://chatbot-mgn7slqt5a-as.a.run.app';

