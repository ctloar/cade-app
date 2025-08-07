interface Project {
    id: number;
    name: string;
    description: string;
    link?: string;
    imageUrl: string;
}

export const projects: Project[] = [
    {
      id: 1,
      name: 'Personal Portfolio',
      description: 'A personal portfolio website to showcase my projects and skills.',
      link: 'https://example.com/portfolio',
      imageUrl: '/images/portfolio.jpg',
    },
    {
      id: 2,
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication and payment integration.',
      imageUrl: '/images/ecommerce.jpg',
    },
    {
      id: 3,
      name: 'Weather App',
      description: 'A weather forecasting app using OpenWeatherMap API.',
      imageUrl: '/images/weather-app.jpg',
    },
];