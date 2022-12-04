const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'EO.',
}


const greeting = {
  name: 'Ovuoba Emmanuel',
  role: 'Front End Engineer',
  description:
    'I am a front end Engineer that specialize in building web applications.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/emmanuel-ovuoba-929155103/',
    github: 'https://github.com/Bit-Han',
  },
}



const about = {
  // all the properties are optional - can be left empty or deleted
  // name: 'Ovuoba Emmanuel',
  // role: 'Front End Engineer',
  title: 'About Me',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/emmanuel-ovuoba-929155103/',
    github: 'https://github.com/Bit-Han',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Real estate website',
    image: 'https://unsplash.com/photos/qtpt4WGlz3Y',
    description:
      'This is a real estate website that uses a public api to fill the houses avaliable and the prices of the apartments. There is also a filtering method used in the application to help you sort the type of apartment you are looking for based on some parameters such as prices, type of apartment. etc.',
    stack: ['Chakra UI', 'Nexjs', 'React'],
    sourceCode: 'https://github.com/Bit-Han/react-real-estate-website',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com'
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 4',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 5',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 6',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind css',
  'SASS',
  'Material UI',
  'Git',
  'chakra UI',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ovuobaemmanuel@gmail.com',
}

export { header, about, projects, skills, contact, greeting }
