const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/bhavin-08/my_portfolio',
  title: 'My Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bhavin Rathod',
  role: 'Front End Developer Fresher',
  description:
    'Enthusiastic and detail-oriented Frontend Developer Intern with a passion for crafting responsive and user-friendly web applications. Proficient in modern web technologies including HTML5, CSS3, JavaScript, and ReactJS. Eager to contribute technical skills and creative abilities to a dynamic team while gaining hands-on experience in frontend development.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/bhavin-rathod-095745186',
    github: 'https://github.com/bhavin-08',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Developed a responsive password generator website using ReactJS that generates secure passwords based on user preferences. The application allows users to specify password length, include/exclude special characters, numbers, and uppercase letters to customize their passwords.',
    stack: ['CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/bhavin-08/react_password_generator',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'The React Task Scheduler is a website designed to help users manage their daily tasks efficiently. Built using ReactJS, it provides a responsive and intuitive interface for adding, editing, and deleting tasks. The application utilizes local storage to persist tasks across sessions, ensuring data integrity and user convenience.',
    stack: ['CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/bhavin-08/task_scheduler',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Developed a responsive and interactive real estate website leveraging ReactJS to provide a seamless user experience for property browsing and management. The project aimed to showcase listings, property details, and facilitate user interaction through intuitive UI components.',
    stack: ['CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/bhavin-08/re2/tree/main/Real-Estate-website-main',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Python',
  'Material UI',
  'Git',
  'MySQL',
  'Linux',
  'VS Code',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bhavinrathod1115@gmail.com',
}

export { header, about, projects, skills, contact }
