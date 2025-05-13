import {
  Clipboard,
  Code,
  Film,
  LayoutPanelLeft,
  Monitor,
  PenTool,
  Smartphone,
  Users,
} from "lucide-react";

export const navlinks = {
  logo: {
    dark: "/devkins_full_logo.svg",
    light: "/devkins_full_logo black.svg",
    default: "/devkins_full_logo.svg",
    alt: "Devkins Logo",
    width: 100,
    height: 80,
  },
  navItems: [
    {
      name: "Services",
      href: "/",
      hasDropdown: true,
      dropdownItems: {
        columns: [
          {
            title: "Design",
            items: [
              {
                name: "Graphic Design",
                description: "Brand visuals",
                href: "/services/graphic-design",
                icon: PenTool,
              },
              {
                name: "App Design",
                description: "Mobile UI/UX",
                href: "/services/mobile-app-design",
                icon: Smartphone,
              },
              {
                name: "Web Design",
                description: "UI/UX for web",
                href: "/services/ui-ux-web",
                icon: Monitor,
              },
            ],
          },
          {
            title: "Development",
            items: [
              {
                name: "Web Development",
                description: "Build websites",
                href: "/services/website-development",
                icon: Code,
              },
              {
                name: "App Development",
                description: "Mobile apps",
                href: "/services/mobile-development",
                icon: Smartphone,
              },
              {
                name: "Shopify Website",
                description: "Ecommerce Websites",
                href: "/services/shopify-web",
                icon: LayoutPanelLeft,
              },
            ],
          },
          {
            title: "Business Solutions",
            items: [
              {
                name: "Digital Marketing",
                description: "Online strategies",
                href: "/services/digital-marketing",
                icon: Users,
              },
              {
                name: "Video Editing",
                description: "Video content",
                href: "/services/video-editing",
                icon: Film,
              },
              {
                name: "QuickBooks",
                description: "Accounting",
                href: "/services/quickbooks",
                icon: Clipboard,
              },
            ],
          },
        ],
      },
    },
    {
      name: "Company",
      href: "/",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "About Us",
          description: "Learn more about our company",
          href: "/about-us",
          icon: PenTool,
        },
        {
          name: "Careers",
          description: "Join our team",
          href: "/careers",
          icon: Monitor,
        },
        {
          name: "Contact",
          description: "Get in touch with us",
          href: "/contact",
          icon: Smartphone,
        },
      ],
    },      
    { name: "Academy", href: "/academy", hasDropdown: false },
    { name: "Marketplace", href: "/marketplace", hasDropdown: false },
    { name: "Tools", href: "/tools", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ],
  userMenuItems: [
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Logout", href: "/logout" },
  ],
};