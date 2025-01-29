import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  LeongLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adaline Leong",
  // initials: "AL",
  location: "Nashville, TN, USA",
  locationLink:
    "https://www.google.com/maps/place/Vanderbilt+University/@36.1447077,-86.80523,17z/data=!3m1!4b1!4m6!3m5!1s0x886466a4a6ef8047:0xea511455173915d6!8m2!3d36.1447034!4d-86.8026551!16zL20vMDFwcTR3?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  about:
    "Undergraduate student majoring in Computer Science graduating in Fall 2025",
  // summary: (
  //   <>
  //     Frontend-focused Full Stack Engineer specializing in high-performance
  //     React applications, scalable Node.js services, and real-time collaboration
  //     systems. Experienced in technical architecture design and remote team
  //     leadership.
  //   </>
  // ),
  avatarUrl: LeongLogo,
  personalWebsiteUrl: "https://adalinel.github.io/",
  contact: {
    email: "jia.yin.leong@vanderbilt.edu",
    tel: "+14807388550",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/adalinel",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jiayinleong/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Vanderbilt University",
      degree: "Computer Science Major",
      // start: "",
      end: "Fall 2025",
    },
  ],
  work: [
    {
      company: "CurraPay",
      link: "http://currapay.com/",
      badges: [
        "Express",
        "tRPC",
        "Prisma",
        "PostgreSQL",
        "AWS",
        "Netlify",
        "Heroku",
      ],
      title: "Intern",
      // logo: ConsultlyLogo,
      start: "August 2024",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Led backend development using Express, tRPC, Prisma, PostgreSQL,
              and AWS to build scalable product
            </li>
            <li>
              Designed and implemented tRPC APIs for efficient frontend-backend
              communication
            </li>
            <li>Managed deployment of CurraPay.com using Netlify and Heroku</li>
          </ul>
        </>
      ),
    },
    {
      company: "FTI Consulting",
      link: "https://www.fticonsulting.com/",
      badges: ["AWS", "SQL", "Python", "Power Bi", "Excel"],
      title: "Data & Analytics Intern",
      // logo: ParabolLogo,
      start: "June 2024",
      end: "August 2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Collaborating in a team to create data-driven solutions through
              analyzing trends and visualizing results using AWS, SQL, Python,
              Power Bi and Excel
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Vanderbilt Data Science",
      link: "https://www.linkedin.com/company/vanderbilt-data-science/",
      badges: ["Chakra UI", "React", "MongoDB"],
      title: "President and Founder",
      // logo: ClevertechLogo,
      start: "August 2022",
      end: "May 2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Spearheaded 10 data science projects in partnership with the{" "}
              <a href="https://www.vanderbilt.edu/datascience/">DSI</a>
              lab, local nonprofits, and other organizations
            </li>
            <li>
              Directing the development and launch of a{" "}
              <a href="https://github.com/VandyDataScience-Internal/main-frontend">
                dynamic club website
              </a>{" "}
              using Chakra UI, React, and MongoDB
            </li>
            <li>
              Leading the end-to-end recruiting process for new members,
              including designing the{" "}
              <a href="https://vandydatascience-internal.github.io/">
                coding challenge
              </a>
            </li>
            <li>
              Accepted into{" "}
              <a href="https://www.clintonfoundation.org/clinton-global-initiative-university-2023/">
                Clinton Global Initiative University 2023
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Vanderbilt Institute for Software Integrated Systems",
      link: "https://www.isis.vanderbilt.edu/",
      badges: [
        "Flutter",
        "Ionic React",
        "Expo",
        "React Native",
        "tRPC",
        "Prisma",
      ],
      title: "Research Assistant at NSFOpenData",
      // logo: JojoMobileLogo,
      start: "August 2022 to December 2022",
      end: "May 2023 to December 2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed the frontend of a Flutter mobile application based off
              of an existing Ionic React full-stack software
            </li>
            <li>
              Enhancing the maintainability and scalability of legacy codebase
              that uses Expo, React Native, tRPC, and Prisma
            </li>
            <li>
              Presented results at the annual{" "}
              <a href="https://www.tntech.edu/ssc/engineering/tlsamp24.php">
                TLSAMP Research Conference
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Adobe Illustrator",
    "Figma",
    "Excel",
    "Agile",
    "Scrum",
    "Tensorflow",
    "OpenCV",
    "scikit-learn",
    "Plotly",
    "Git",
    "MongoDB",
    "AWS",
    "Firebase",
    "Prisma",
    "Power Bi",
    "Flutter",
    "Express.js",
    "Node.js",
    "React",
    "React Native",
    "Wasm",
    "Monaco Editor",
    "Tree-sitter",
    "tRPC",
    "Webpack",
    "WebSockets",
    "Socket.io",
    "Xterm.js",
    "Svelte",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "RSA GUI",
      techStack: ["Python", "thingsvision"],
      description:
        "Implemented an alignment method tool in order to more efficiently compare collected data with specific layers of a specified computer vision neural network model as part of the  Wallace Multisensory Research Lab",
      // logo: MonitoLogo,
      link: {
        label: "RSA GUI",
        href: "https://github.com/AdalineL/RSA-GUI",
      },
    },
    {
      title: "VandyHacks IX",
      techStack: ["Svelte", "Javascript"],
      description:
        "Directed the development and deployment of the VandyHacks X promotional site (made with Svelte). Both projects were used by the nearly 150 attendees and judges in the annual collegiate VH hackathon.",
      // logo: ConsultlyLogo,
      link: {
        label: "vandyhacks-ix.devpost.com",
        href: "https://vandyhacks-ix.devpost.com/",
      },
    },
    {
      title: "Formula Web",
      techStack: [
        "Wasm",
        "React",
        "Monaco Editor",
        "Tree-sitter",
        "Webpack",
        "Express.js",
        "Node",
        "WebSockets",
        "Xterm.js",
      ],
      description:
        "Ported a symbolic analysis tool to the web and deployed at formula.isis.vanderbilt.edu/# for the use of VUISIS lab Developed an accessible way to use Formula as an in-browser text editor with a functionable terminal interface using Wasm, React, Monaco Editor, Tree-sitter, Webpack, Express.js, Node, WebSockets, and Xterm.js. Presented results in annual Vanderbilt Undergraduate Research Fair as part of the VUISIS summer research internship",
      // logo: MonitoLogo,
      link: {
        label: "Formula Web",
        href: "https://formula.isis.vanderbilt.edu/#",
      },
    },
  ],
} as const;
