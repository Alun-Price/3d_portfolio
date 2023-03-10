import {
  billy,
  carrent,
  codeins,
  css,
  dave,
  deloitte,
  docker,
  eco,
  engage,
  figma,
  git,
  html,
  javascript,
  jobit,
  laravel,
  mongodb,
  nodejs,
  php,
  python,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  vue,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "Vue.js",
    icon: vue,
  },
  {
    title: "PHP[Laravel]",
    icon: php,
  },
  {
    title: "Python [Flask/Django]",
    icon: python,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Software Developer [Remote] ",
    company_name: "EcoOnline",
    icon: eco,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Aug 2022",
    points: [
      "Maintained EcoOnline’s flagship product - Chemical Manager - using Laravel and Vue.js",
      "Added language internationalisation and developed backend API’s for Chemical Approval - an external module for enterprise clients",
      "Continued to maintain the Engage legacy product - rebrands, SSO, bug fixes and monthly releases",
      "Note: Engage-EHS was acquired by EcoOnline Aug 2021",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Engage-EHS",
    icon: engage,
    iconBg: "#383E56",
    date: "Apr 2016 - Aug 2021",
    points: [
      "Managed all client Rebrands and SSO configurations",
      "Developed bespoke Sales Demo Sites",
      "Built the Observations module for the main SaaS product",
      "Responsible for new features and maintenance for the main product Reporting Functions",
      "Managed the main product monthly release",
      "Resurrected/Managed the Wordpress Marketing Site",
      "Added chatbots to both the main product and the marketing website",
      "Developed the Help Center for the main product",
      "Worked with a Pakistani team of developers (Whizpool) to develop our ‘Report On Site’ mobile app",
    ],
  },
  {
    title: "Full Stack Coding Bootcamp Student",
    company_name: "The Code Institute",
    icon: codeins,
    iconBg: "#E6DEDD",
    date: "Jul 2015 - Jan 2016",
    points: [
      "Stream 0 [8 week pre-course requirement]: HTML5, CSS3, Python and Javascript on Codecademy",
      "Stream 1 [Front End]:  Sublime Text, Responsive web design, FlexBox, Wireframing, UX, Bootstrap, JQuery, Forms, D3.js, Angular, Github",
      "Stream 2 [Back End]:  PyCharm IDE, Python, Unit-testing, MySQL, Python Twitter API, Webscraping, Matplotlib, MongoDB, Flask, Dashboard Visualization, DC.js, Crossfilter",
      "Stream 3 [Full Stack Framework Development]:  VirtualBox, Linux, Django, Flatpages, User & Email Authentication, Stripe/Paypal Payment/Subscription systems, Blog app, Test framework, Django deployment",
    ],
  },
  {
    title: "Big Data Coding Bootcamp",
    company_name: "Deloitte Analytical Training Academy",
    icon: deloitte,
    iconBg: "#E6DEDD",
    date: "Aug 2014 - Oct 2014",
    points: [
      "Media Training (with Aidan Browne from UTV)",
      "SQL (t-SQL using Microsoft Sequel Server 2012)",
      "IBM COGNOS Report Studio (v 10.2)(Fundamentals Vol.1&2 (B5258); Advanced (B5259) and Multidimensional Data(B5261)) [Certified COGNOS10 Author accreditation]",
      "Introduction to Data Exploration, Mining & Visualisation",
      "PRINCE2 Project Management (Foundation accreditation)",
      "Agile/Scrummaster Project Management [Certified Scrummaster accreditation]",
      "Introduction to lean six sigma",
      "FRESH (IDEO’s structured approach to group innovation & design)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Making Alun permanent was one of the easiest decisions we ever made …",
    name: "Billy O'Brien",
    designation: "Founder of Engage-EHS",
    company: "Engage-EHS",
    image: billy,
  },
  {
    testimonial:
      "Alun always went above and beyond to help us with the marketing website design, performance and SEO … A pleasure to work with!",
    name: "David Rowland",
    designation: "Head of Marketing",
    company: "Protex AI",
    image: dave,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
