const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/chrisnguyen12/cleanfolio',
    title: 'JS.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Christina Nguyen',
    role: 'Full Stack Developer',
    description: 'Hello my name is Christina and I have graduated from The University of Texas at Austin Coding Bootcamp. I am now a junior web developer based in Houston,Texas. I have completed three projects showecased below with my fellow classmates. With the skills that I have now I will hone in the skills I have learned. In the near furture I intend to learn the following programming languages; Python,Java,C#, and Amazon Web Services.  ',
    resume: 'https://docs.google.com/document/d/e/2PACX-1vTZVScMfhZXtvv6oyZ__yVfi3Nz8GV145PlDZdzsK_xSP0Pn7Hr0tI06ogMJvtpmDV-epsLWEFUk1pg/pub',
    social: {
        linkedin: 'https://www.linkedin.com/in/christina-nguyen-827580236/',
        github: 'https://github.com/chrisnguyen12',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Concert Music',
        description: 'Artists come to your town and you can find out when they are coming.',
        stack: ['Javascript', 'HTML', 'CSS'],
        sourceCode: 'https://github.com/osheathe1/concert_music',
        livePreview: 'https://osheathe1.github.io/concert_music/',
    },
    {
        name: 'Cat Wonderland',
        description:'We Made a Card game to learn how to take care of your cat without making other people in your life go crazy for having too many cats',
        stack: ['CSS', 'JavaScript', 'Handlebars'],
        sourceCode: 'https://github.com/richardjhong/cat-wonderland',
        livePreview: 'https://cat-wonderland.herokuapp.com/',
    },
    {
        name: 'My WorkSpace',
        description: 'A Social Media app that shows what project someone is working on and allows messages to be shared between the projects themselves',
        stack: ['JavaScript', 'HTML', 'React'],
        sourceCode: 'https://github.com/Krimeas/myworkspace',
        livePreview: 'https://myworkspaceutap3.herokuapp.com/',
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML/CSS',
    'JavaScript',
    'NoSQL',
    'React',
    'Jquery',
    'Bootstrap',
    'APIs',
    'Git',
    'Responsive Design',
    'Progressive Web Applications (PWAs)',
    'JSON',
    'AJAX',
    'MySQL',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'nguyenchris624@gmail.com',
}

export { header, about, projects, skills, contact }