// Single source of truth for site text. Project details are placeholders —
// fill in tech/link/image fields once each project is uploaded.

export const site = {
  name: "Jayaraj Aalas",
  initials: "JA",
  tagline: "Pure front-end developer, crafting clean interfaces.",
  email: "aalasjayaraj@gmail.com",
};

export const about = {
  heading: "About",
  body: [
    "I'm a B.Tech Information Technology graduate (2022–2026) from Raak College of Engineering & Technology, Pondicherry, with a strong foundation in front-end web technologies. I focus on building clean, responsive interfaces with HTML5, CSS3, and JavaScript.",
    "Alongside front-end work, I have working knowledge of Python, Flask, Django, and MySQL, which helps me understand full applications end-to-end even though my focus stays on the front end. I'm always exploring new tools — from AI and UI/UX workshops to hands-on full-stack basics.",
  ],
};

export type Project = {
  name: string;
  description: string;
  tech: string[]; // TODO: add tech stack when project is uploaded
  link?: string; // TODO: add live link / repo when project is uploaded
};

export const projects: Project[] = [
  {
    name: "AI Image Analyser",
    description:
      "A deep learning app built with Python/Flask that detects AI-generated vs. human-created images, video, audio, and text, using CLIP for image analysis.",
    tech: ["Python", "Flask", "PyTorch", "CLIP"],
    link: "https://github.com/aalasjayaraj-design/AI-Image-Analyser",
  },
  {
    name: "Hospital Management System",
    description:
      "A full-featured hospital management web application with role-based dashboards for Admin, Doctor, Nurse, Pharmacist, Accountant, and Patient, built with Flask and SQLAlchemy.",
    tech: ["Python", "Flask", "SQLAlchemy", "SQLite/MySQL"],
    link: "https://github.com/aalasjayaraj-design/Hospital-Management-System",
  },
  {
    name: "E-Commerce Website",
    description:
      "A responsive e-commerce website with product listings, cart functionality, and a full checkout flow, built with HTML, CSS, and JavaScript.",
    tech: [], // TODO: add tech stack
    link: undefined, // TODO: add link
  },
];

export type BeyondEntry = {
  title: string;
  description: string;
};

export const beyondTheCode: BeyondEntry[] = [
  {
    title: "MERN Full Stack Developer — VALVENET",
    description: "15-day basic MERN full stack development program.",
  },
  {
    title: "Python Development — HTGE Technology",
    description: "1-month hands-on Python development training.",
  },
  {
    title: "AI Tools, Trends, 3D Modeling & Texturing — AAKASH Institute",
    description: "3-day workshop exploring AI tools and 3D content creation.",
  },
  {
    title: "UI/UX Design Workshop — HIGHKON Medias",
    description: "3-day workshop on UI/UX design fundamentals.",
  },
  {
    title: "Designing Workshop — AMAZE Institute",
    description: "1-day workshop on design principles.",
  },
];

export const socials = {
  linkedin: "https://www.linkedin.com/in/jayaraj-aalas95/",
  email: "aalasjayaraj@gmail.com",
  phone: "+91 9342190642",
};
