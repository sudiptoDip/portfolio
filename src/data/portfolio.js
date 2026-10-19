
export const profile = {
  name: "Sudipto Basak", 
  designation: "Mern Stack Developer", 
  intro:
    "I build modern, fast and user-friendly web applications. I work with React and Next.js, and I try to learn something new every single day.", 
  photo: "/images/me.png", 
  resume: "/myResume.pdf", 
  email: "sudiptobasak10@gmail.com", 
  phone: "(+880)1521-473943", 
  whatsapp: "8801521-473943", 
  location: "Sirajganj, Bangladesh", 
};


export const socials = [
  { name: "GitHub", icon: "github", url: "https://github.com/sudiptoDip" }, 
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/sudiptobasak/" }, 
  { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/dipto000000" },
];

export const about = {
  paragraphs: [
    "My programming journey started with curiosity. I began by building small pages with HTML and CSS, then learned JavaScript to bring my websites to life. Today I build complete applications with React and Next.js.",
    "I enjoy work where clean design and clean code come together to create a great user experience. Solving problems and experimenting with new technologies is my favourite part of being a developer.",
    "Outside of coding, I love playing cricket & football, and spending time with my pets. I believe a good developer stays curious, patient and always ready to learn.",
  ],

  hobbies: ["🏏 Cricket", "⚽ Football", "🤿 Scuba Diving", "✈️ Travelling","🐾 Keeping Pets" ],
  stats: [
    { label: "Projects", value: "5+" },
    { label: "Years Learning", value: "2+" },
    { label: "Technologies", value: "15+" },
  ],
};

export const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "REST API", level: 75 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 65 },
      { name: "Vercel / Netlify", level: 80 },
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Bangladesh University of Business and Technology (BUBT)",
    result: "CGPA: 3.24 (scale of 4.00)",
    details:
      "Studying data structures, algorithms, database systems and web development.",
  },
];




export const projects = [
  {
    slug: "project-one",
    name: "DEV-STACK-PROJECT", 
    image: "/images/project1.png", 
    short: "DEV-STACK-PROJECT is a responsive web application built with React, TypeScript, and Tailwind CSS, focusing on reusable components, clean UI, and a smooth user experience.", 
    description:
      "DevStack is a responsive web application designed to help developers explore useful development resources and technologies in one place. It provides categorized resources with a clean and user-friendly interface.", 
    stack: ["React", "JavaScript", "TypeScript", "Tailwind CSS"], 
    live: "https://verdant-naiad-22f34a.netlify.app/", 
    github: "https://github.com/sudiptoDip/DEV-STACK-PROJECT",
    challenges: [
      "Responsive Design: Making the website look good and work properly on different screen sizes, including mobile, tablet, and desktop.",
      "Component Management: Organizing the React components and managing data efficiently to keep the code clean, reusable, and easy to maintain.",
      "Styling and UI Consistency: Using Tailwind CSS to maintain consistent spacing, colors, layouts, and styling throughout the application.",
    ],
    improvements: [
      "Improve User Experience: Enhance the user interface with smoother transitions, animations, and better navigation.",
      "Add More Features: Introduce advanced filtering, searching, and sorting functionality where applicable.",
      "Improve Code Quality: Refactor components, reduce code duplication, and follow better coding practices.",
    ],
  },

  {
    slug: "project-two",
    name: "Fitlog-Project",
    image: "/images/project2.png",
    short: "FitLog is a responsive fitness tracking application designed to help users explore workouts, manage fitness plans, and improve their fitness journey.", 
    description:
      "FitLog is a responsive workout library and workout-plan tracker built with Next.js and TypeScript. Users can explore workouts, view workout details, create a daily workout plan, and track their workout progress.", 
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"], 
    live: "https://capable-bienenstitch-7b19a3.netlify.app/", 
    github: "https://github.com/sudiptoDip/FitLog-Project", 
    challenges: [
      "Dynamic Routing: Implementing dynamic routes for individual workout details and ensuring each workout displays the correct information based on its ID.", 
      "Responsive UI Design: Matching the Figma design while ensuring the application looks consistent across mobile, tablet, and desktop devices.",
      "Component Organization: Building reusable React components and managing the project structure to keep the code clean, organized, and maintainable.",
    ],
    improvements: [
      "Enhanced User Experience: Add interactive elements, smooth animations, and improved feedback for user actions.", 
      "User Authentication: Implement secure user registration and login functionality to provide personalized experiences.",
      "Progress Dashboard: Add charts and visual statistics to help users monitor their workout history and progress.",
    ],
  },
];
