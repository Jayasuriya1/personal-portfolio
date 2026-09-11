export interface ProjectItem {
  icon: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl: string;
  frontendCodeUrl?: string;
  backendCodeUrl?: string;
  codeUrl?: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  items: { name: string; level?: string }[];
}

export interface PortfolioData {
  name: string;
  logo: string;
  greeting: string;
  tagline: string;
  bio: string;
  resumeUrl: string;
  about: {
    paragraphs: string[];
    info: { label: string; value: string }[];
  };
  projects: ProjectItem[];
  skills: SkillGroup[];
  contact: {
    intro: string;
    links: { type: 'email' | 'linkedin' | 'github' | 'leetcode'; title: string; subtitle: string; href: string }[];
  };
  socials: { label: string; href: string; icon: 'leetcode' | 'linkedin' | 'github' }[];
}

export const portfolioData: PortfolioData = {
  name: "Jayasuriya Sudhakar",
  logo: "JS",
  greeting: "Hello 👋",
  tagline: "I'm Jayasuriya Sudhakar",
  bio: "Software Engineer specializing in full-stack and backend systems. Focused on clean architecture, NestJS, React, TypeScript, and database optimization.",
  resumeUrl: "/resume.pdf",

  about: {
    paragraphs: [
      "I am a Software Engineer with a deep focus on full-stack web applications and robust backend engineering. I specialize in building scalable APIs, type-safe application architectures, and intuitive digital interfaces.",
      "My core engineering stack revolves around TypeScript, React, NestJS, Node.js, Express.js, SQL, and database management with PostgreSQL, TypeORM, and MongoDB. I value clean code principles, performance optimization, and modular software design."
    ],
    info: [
      { label: "Location", value: "India / Remote" },
      { label: "Role", value: "Software Engineer" },
      { label: "Specialization", value: "Full Stack & Backend" },
      { label: "Email", value: "jayasuriyaprogrammer@gmail.com" }
    ]
  },

  projects: [
    {
      icon: "🤖",
      title: "Unstuck – AI Task Deconstructor",
      category: "AI Full-Stack App",
      description: "An AI-powered task unblocker that breaks overwhelming tasks into smaller actionable sub-steps with realistic time estimates using Gemini API and recursive tree decomposition.",
      tags: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Gemini API"],
      liveUrl: "https://unstuck-web.vercel.app",
      frontendCodeUrl: "https://github.com/Jayasuriya1/unstuck-web",
      backendCodeUrl: "https://github.com/Jayasuriya1/unstuck-api"
    },
    {
      icon: "💼",
      title: "CRM Platform",
      category: "Full-Stack Enterprise App",
      description: "Full-stack Customer Relationship Management platform featuring lead tracking, customer lifecycle management, role-based access control (RBAC), and sales analytics dashboard.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST API"],
      liveUrl: "https://crm-jayasuriya.netlify.app",
      frontendCodeUrl: "https://github.com/Jayasuriya1/crm_Front_End",
      backendCodeUrl: "https://github.com/Jayasuriya1/crm_Back_End"
    },
    {
      icon: "🛍️",
      title: "E-Commerce Application",
      category: "Full-Stack E-Commerce",
      description: "Full-stack online shopping platform with product catalog filtering, dynamic cart state management, secure user checkout flows, and admin product management.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "REST API"],
      liveUrl: "https://ecommerce-rsj1.netlify.app",
      frontendCodeUrl: "https://github.com/Jayasuriya1/ecommerce-frontend",
      backendCodeUrl: "https://github.com/Jayasuriya1/E-commerce-backend"
    },
    {
      icon: "💸",
      title: "Expense Tracker",
      category: "Full-Stack Finance App",
      description: "Personal finance management application featuring income/expense logging, category breakdowns, visual analytics charts, and monthly budget reporting.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js", "REST API"],
      liveUrl: "https://expense-tracker-rsj.netlify.app",
      frontendCodeUrl: "https://github.com/Jayasuriya1/expense-tracker-FE",
      backendCodeUrl: "https://github.com/Jayasuriya1/Expence-Tracker-BE"
    },
    {
      icon: "📝",
      title: "Notify – Task Management App",
      category: "Full-Stack Productivity",
      description: "Feature-rich task and to-do management application with priority badges, status filters, completion tracking, and cloud state synchronization.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "CSS"],
      liveUrl: "https://notify1.netlify.app",
      frontendCodeUrl: "https://github.com/Jayasuriya1/to-do-list-FE",
      backendCodeUrl: "https://github.com/Jayasuriya1/To-Do-List-BE"
    },
    {
      icon: "🔗",
      title: "URL Shortener Service",
      category: "Full-Stack Web Utility",
      description: "Fast URL shortening microservice that compresses long web links into short aliases with click analytics tracking, redirect counts, and custom link generation.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
      liveUrl: "https://shorturl0.netlify.app",
      frontendCodeUrl: "https://github.com/Jayasuriya1/url-shortener-FE",
      backendCodeUrl: "https://github.com/Jayasuriya1/URL-Shortner-BE"
    },
    {
      icon: "🌤️",
      title: "Weather Forecasting App",
      category: "Frontend Web App",
      description: "Responsive weather application providing real-time weather reports, multi-day forecasts, atmospheric metrics, and location search for cities worldwide.",
      tags: ["React", "OpenWeather API", "CSS", "Vite"],
      liveUrl: "https://weather-app-666.netlify.app",
      codeUrl: "https://github.com/Jayasuriya1/weather-application"
    }
  ],

  skills: [
    {
      category: "Languages",
      icon: "💻",
      items: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "SQL" }
      ]
    },
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" }
      ]
    },
    {
      category: "Backend",
      icon: "⚡",
      items: [
        { name: "NodeJs" },
        { name: "NestJS" },
        { name: "ExpressJs" },
        { name: "REST APIs" }
      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      items: [
        { name: "PostgreSQL" },
        { name: "TypeORM" },
        { name: "MongoDB" }
      ]
    }
  ],

  contact: {
    intro: "I'm open to software engineering opportunities, full-stack projects, and backend roles. Feel free to reach out directly via email or connect with me on GitHub, LinkedIn, or LeetCode.",
    links: [
      {
        type: "email",
        title: "Email",
        subtitle: "jayasuriyaprogrammer@gmail.com",
        href: "mailto:jayasuriyaprogrammer@gmail.com"
      },
      {
        type: "linkedin",
        title: "LinkedIn",
        subtitle: "linkedin.com/in/jayasuriya-sudhakar",
        href: "https://www.linkedin.com/in/jayasuriya-sudhakar/"
      },
      {
        type: "github",
        title: "GitHub",
        subtitle: "github.com/Jayasuriya1",
        href: "https://github.com/Jayasuriya1"
      },
      {
        type: "leetcode",
        title: "LeetCode",
        subtitle: "leetcode.com/u/Jayasuriya17",
        href: "https://leetcode.com/u/Jayasuriya17/"
      }
    ]
  },

  socials: [
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Jayasuriya17/",
      icon: "leetcode"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jayasuriya-sudhakar/",
      icon: "linkedin"
    },
    {
      label: "GitHub",
      href: "https://github.com/Jayasuriya1",
      icon: "github"
    }
  ]
};
