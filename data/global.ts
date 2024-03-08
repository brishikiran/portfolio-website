type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    paypal: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Experience",
    path: "/experience",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/kiranreddy95/",
  },
  {
    title: "GitHub",
    path: "https://github.com/rishikiran2260039",
  },
  {
    title: "Resume",
    path: "https://drive.google.com/file/d/1I1_WwtybK2ruJ8hj4csH3ZBaCw4ArjHi/view?usp=sharing",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Experience",
          link: "/experience",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
       
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/rishikiran2260039",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/kiranreddy95/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:rishi.123kiran@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "rishikiran",
    paypal: "brkr2612",
    message: "I appreciate your support very much!",
  },
};
