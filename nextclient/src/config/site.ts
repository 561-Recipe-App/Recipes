export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Recipez",
  description:
    "COMPE561 - Recipe App",
  mainNav: [
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Random",
      href: "/random"
    },
    {
      title: "Help page",
      href: "/Helppage"
    }
  ],
  links: {
    github: "https://github.com/561-Recipe-App/Recipes"
  }
};