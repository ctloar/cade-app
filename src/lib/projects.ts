interface ProjectLink {
  type: 'github' | 'youtube' | 'article' | 'pdf' | 'site' | 'post';
  url: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  tags?: string[];
  links?: ProjectLink[];
}


export const projects: Project[] = [
    {
      id: 1,
      name: '📈 Personal Portfolio',
      description: 'This website. A simple personal portfolio to showcase some of my projects and skills.',
      links: [
        {type: 'github', url: 'https://github.com/ctloar/cade-app'}
      ],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
    {
      id: 2,
      name: '📚 EYARC Experience',
      description: 'I was a founding engineer for this LMS platform that helps accounting students leverage AI to learn accounting concepts. Helped build the MVP from the ground up and launch the product to hundreds of students. Although I no longer work on this project, it is still active and being run by an awesome team!',
      links: [
        {type: 'site', url: 'https://experience.eyarc.site'},
        {type: 'article', url: 'https://marriott.byu.edu/stories/student-experiences/building-an-educational-platform-one-module-at-a-time'}
      ],
      tags: ['React', 'TypeScript', 'Python', 'Django', 'Supabase', 'Tailwind CSS', 'Figma', 'AWS', 'AI'],
    },
    {
      id: 3,
      name: '🏠 CASA',
      description: 'College housing search redefined. Mobile app built to help college students find housing they will love based on their social connections. Includes listings, social network, map view, and more. Check out the YouTube video for a demo!',
      links: [
        {type: 'post', url: 'https://www.linkedin.com/posts/cadeloar_introducing-casa-the-app-thats-redefining-activity-7183174719280480256-s6lq'},
        {type: 'youtube', url: 'https://www.youtube.com/watch?v=ELdW2YTQyUo'},
      ],
      tags: ['SwiftUI', 'Swift', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Figma'],
    },
    {
      id: 4,
      name: '⚰️ Mummy Excavation',
      description: 'A user-friendly interface to manage the immense amount of data for the mummy excavation site Fag el-Gamous. RBAC system allows admin to assign users different roles, granting them access to different features. Researchers can run machine learning models to predict target variables of mummy burials.',
      links: [
        {type: 'github', url: 'https://github.com/brandonjacobs1/fag-el-gamous'},
        {type: 'youtube', url: 'https://youtu.be/OSjTVpi7zZc'},
        {type: 'pdf', url: '/files/FagelGamous.pdf'},
      ],
      tags: ['C#', '.NET', 'Python', 'JavaScript', 'AWS Lambda', 'AWS Elastic Beanstalk', 'AWS RDS', 'PostgreSQL', 'RBAC'],
    },
    {
      id: 5,
      name: '🥬 Kidney2 Nutrient Tracker',
      description: 'A web app designed to help victims of chronic kidney disease track their nutrient intake and manage their health. Includes authentication, third-party API integration, and food suggestions based on user metrics.',
      links: [
        {type: 'github', url: 'https://github.com/colbyjacobjensen/INTEX'},
        {type: 'youtube', url: 'https://youtu.be/oW7gStoECqY'},
        {type: 'pdf', url: '/files/Kidney2.pdf'},
      ],
      tags: ['JavaScript', 'Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'SQL'],
    },
];