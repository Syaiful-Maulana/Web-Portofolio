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
    tags: ['React.JS', 'Node.JS', 'Bootstrap', 'Express.Js', 'Redux'],
    picture: 'loakid.jpg',
    repoLink: 'https://github.com/Syaiful-Maulana/loakId',
  },
  {
    name: 'DapurFresh Website',
    description: "You're here",
    type: ProjectType.WEB,
    tags: ['React.JS', 'Bootstrap', 'Tailwind', 'Express.Js', 'Redux'],
    picture: 'dapur.jpg',
    repoLink: 'https://github.com/Syaiful-Maulana/dapurfresh',
  },

  {
    name: 'Invoice API',
    description: 'REST API ',
    type: ProjectType.API,
    tags: ['Golang', 'ECHO', 'GORM'],
    picture: 'invoice.jpg',
    repoLink: 'https://github.com/Syaiful-Maulana/api-invoice',
  },
  {
    name: 'DapurFresh API',
    description: 'REST API ',
    type: ProjectType.API,
    tags: ['NodesJs', 'ExpressJs', 'Sequelize'],
    picture: 'dapurbe.jpg',
    repoLink: 'https://github.com/Syaiful-Maulana/api-dapurfresh',
  },
  {
    name: 'Loak ID API',
    description: 'REST API ',
    type: ProjectType.API,
    tags: ['NodesJs', 'ExpressJs', 'Sequelize'],
    picture: 'loakidbe.jpg',
    repoLink: '#',
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
