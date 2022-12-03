import { Project, ProjectType } from './index.d';

export const projects: Project[] = [
  {
    name: 'Portfolio Website',
    description: "You're here",
    type: ProjectType.WEB,
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    picture: 'webPortofolio.jpg',
    repoLink: 'https://github.com/Syaiful-Maulana/Web-Portofolio',
  },
  {
    name: 'Loak.ID Website',
    description: "You're here",
    type: ProjectType.WEB,
    tags: ['React.JS', 'Node.JS', 'Bootstrap, Express.Js, Redux'],
    picture: 'loakid.jpg',
    repoLink: 'https://github.com/Syaiful-Maulana/loakId',
  },

  {
    name: 'Games API',
    description: 'REST API ',
    type: ProjectType.API,
    tags: ['NodesJs', 'ExpressJs', 'Sequelize'],
    picture: 'apiGame.jpg',
    repoLink: '#',
  },
];
