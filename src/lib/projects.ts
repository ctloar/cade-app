interface Project {
    id: number;
    name: string;
    description: string;
    tags?: string[];
    link?: string;
    gh?: string;
    youtube?: string;
    article?: string;
}

export const projects: Project[] = [
    {
      id: 1,
      name: '📈 Personal Portfolio',
      description: 'This website. A simple personal portfolio to showcase some of my projects and skills.',
      gh: 'https://github.com/ctloar/cade-app',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel'],
    },
    {
      id: 2,
      name: '📚 EYARC Experience',
      description: 'I was a founding engineer for this LMS platform that helps accounting students leverage AI to learn accounting concepts. Helped build the MVP from the ground up and launch the product to hundreds of students. Although I no longer work on this project, it is still active and being run by an awesome team!',
      tags: ['React', 'TypeScript', 'Python', 'Django', 'Supabase', 'Tailwind CSS', 'Figma', 'AWS'],
      link: 'https://experience.eyarc.site',
      article: 'https://marriott.byu.edu/stories/student-experiences/building-an-educational-platform-one-module-at-a-time',
    },
    {
      id: 3,
      name: '🏠 CASA',
      description: 'College housing search redefined. Mobile app built to help college students find housing they will love based on their social connections. Includes listings, social network, map view, and more. Check out the YouTube video for a demo!',
      youtube: 'https://www.youtube.com/watch?v=ELdW2YTQyUo',
      link: 'https://www.linkedin.com/posts/cadeloar_introducing-casa-the-app-thats-redefining-activity-7183174719280480256-s6lq',
      tags: ['SwiftUI', 'Swift', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Figma'],
    },
    {
      id: 4,
      name: '⚰️ Fag el-Gamous Excavation',
      description: 'A user-friendly interface to manage the immense amount of data for the mummy excavation site Fag el-Gamous. RBAC system allows admin to assign users different roles, granting them access to different features. Researchers can run machine learning models to predict target variables of mummy burials.',
      tags: ['C#', '.NET', 'Python', 'JavaScript', 'AWS Lambda', 'AWS Elastic Beanstalk', 'AWS RDS', 'PostgreSQL', 'RBAC'],
      gh: 'https://github.com/brandonjacobs1/fag-el-gamous',
      youtube: 'https://youtu.be/OSjTVpi7zZc',
      link: '/files/FagelGamous.pdf'
    },
    {
      id: 5,
      name: '🥬 Kidney2 Nutrient Tracker',
      description: 'A web app designed to help victims of chronic kidney disease track their nutrient intake and manage their health. Includes authentication, third-party API integration, and food suggestions based on user metrics.',
      gh: 'https://github.com/colbyjacobjensen/INTEX',
      youtube: 'https://youtu.be/oW7gStoECqY',
      link: '/files/Kidney2.pdf',
      tags: ['JavaScript', 'Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'SQL'],
    },
];