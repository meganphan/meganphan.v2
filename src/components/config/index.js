module.exports = {
    siteTitle: 'Megan Phan | Front-end Developer',
    siteDescription:
      'A Vietnamese girl, who is pursuing her B.S. in Computer Science at Texas Christian University. Her core values as a CS major are learning, creating, and contributing.',
    siteKeywords:
      'Hoang Phan, Megan Phan, Megan, Hoang, Phan, meganphan, hoangphan, software engineer, front-end engineer, web developer, javascript, tcu, texas christian university',
    siteUrl: 'https://ourmegan.com',
    siteLanguage: 'en_US',
  
    googleVerification: '',
  
    name: 'Megan Phan',
    location: 'Fort Worth, TX',
    email: 'kimhoang7994@gmail.com',
    github: 'https://github.com/meganphan/',
    socialMedia: [
      {
        name: 'Github',
        url: 'https://github.com/meganphan/',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/hoangphan79/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/meganhphan/',
      },
    ],
  
    navLinks: [
      {
        name: 'About',
        url: '#about',
      },
      {
        name: 'Experience',
        url: '#experience',
      },
      {
        name: 'Projects',
        url: '#projects',
      },
      {
        name: 'Blog',
        url: '#blog',
      },
    ],
  
    googleAnalyticsID: 'UA-141793430-1',
    
    srConfig: (delay = 200) => ({
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
  };