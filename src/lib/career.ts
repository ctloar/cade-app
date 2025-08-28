interface Job {
    id: number,
    title: string,
    company: string,
    duration: string,
    location: string,
    link: string
}

export const careerData: Job[] = [
    {
        id: 5,
        title: 'Full Stack Software Engineer',
        company: 'Contatta!',
        duration: 'Sep 2025 - Present',
        location: 'Scottsdale, AZ',
        link: 'https://contatta.com',
    },
    {
        id: 4,
        title: 'Software Engineer',
        company: 'STAX.AI',
        duration: 'Jan 2025 - Jul 2025',
        location: 'Scottsdale, AZ',
        link: 'https://stax.ai',
    },
    {
        id: 3,
        title: 'Full Stack Software Engineer',
        company: 'Affinitiv, Inc',
        duration: 'Jun 2024 - Oct 2024',
        location: 'Remote (Provo, UT)',
        link: 'https://affinitiv.com',
    },
    {
        id: 2,
        title: 'Founding Software Engineer',
        company: 'EYARC Experience',
        duration: 'Feb 2024 - Aug 2024',
        location: 'Provo, UT',
        link: 'https://experience.eyarc.site',
    },
    {
        id: 1,
        title: 'Full Stack Software Developer',
        company: 'The Church of Jesus Christ of Latter-day Saints',
        duration: 'Apr 2022 - Feb 2024',
        location: 'Provo, UT',
        link: 'https://churchofjesuschrist.org',
    },
  ]