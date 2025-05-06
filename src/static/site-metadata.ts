interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "Yang's Workouts Map",
  siteUrl: 'https://run.eimoo.com',
  logo: 'https://rs-eimoo.112030.xyz/static/avatar_admin.png',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://www.eimoo.com',
    },
    {
      name: 'About',
      url: 'https://www.eimoo.com/about',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/yangli',
    },
  ],
};

export default data;
