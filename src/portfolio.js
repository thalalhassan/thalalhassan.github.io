const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://thalalhassan.github.io',
  title: 'THR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Thalal Hassan',
  role: 'Full Stack Engineer',
  description:
    'Developer adequate in all stages of advanced web development with the flair for creating elegant solutions and problem solving in the least amount of time. Bringing forth expertise in front-end and back-end development. Equipped with a diverse and promising skill-set and able to effectively self-manage during independent projects, as well as collaborate in a team setting.',
  social: {
    linkedin: 'https://linkedin.com/in/thalalhassan',
    github: 'https://github.com/thalalhassan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Google Docs clone',
    description: `A simple reactjs, socket application that imitate basic functionality of google doc
      `,
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/thalalhassan/google-docs-clone',
  },
  {
    name: 'Covid Tracker',
    description: `Application that uses covid public apis to show the covid cases`,
    stack: ['JavaScript', 'Vue'],
    sourceCode: 'https://github.com/thalalhassan/vue-covid-tracker',
  },
  {
    name: 'StyleUp Ecommerce',
    description: `Ecommerse application that using angular and nodejs`,
    stack: ['JavaScript', 'Angular', 'Nodejs'],
    sourceCode: 'https://github.com/thalalhassan/vue-covid-tracker',
  },
]

const skills = [
  // skills can be added or removed
  'JavaScript',
  'TypeScript',
  'Go',
  'Node',
  'React',
  'Nextjs',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Git',
  'GitHub',
  'Gitlab',
  'Docker',
  'Nginx',
  'Ngrok',
  'Visual Studio Code',
  'Illustrator',
  'Photoshop',
  'Figma',
  'Linux',
  'windows',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'thalal424@mail.com',
}

export { header, about, projects, skills, contact }
