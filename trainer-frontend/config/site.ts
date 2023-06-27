export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Questions",
      href: "/questions",
    },
    {
      title: "Sessions",
      href: "/sessions",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  api_prod: "https://faqapi-service-mgn7slqt5a-as.a.run.app",
  api_local: "http://localhost:3000",
}

export const API_PROD_URL = siteConfig.api_prod
export const API_LOCAL_URL = siteConfig.api_local
