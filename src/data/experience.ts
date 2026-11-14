import type { TKey } from '@/types/i18n';

export interface TechItem {
  name: string;
}

export interface Tech {
  type: string;
  items: TechItem[];
}

export interface Experience {
  id: string;
  name: string;
  date: TKey;
  city: TKey;
  position: TKey;
  description: TKey;
  techs: Tech[];
  company_link?: string;
}

export const experiences = [
  {
    id: 'ccc',
    name: 'Copyright Clearance Center',
    date: 'cccDate',
    city: 'sevilla',
    company_link: 'https://www.copyright.com/',
    position: 'cccPosition',
    description: 'cccDescription',
    techs: [
      {
        type: 'frontend',
        items: [
          { name: 'Typescript' },
          { name: 'JavaScript' },
          { name: 'Ember' },
          { name: 'Fastboot (SSR)' },
          { name: 'Redux and Context API' },
          { name: 'd3' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'Sass' },
          { name: 'Tailwind' },
          { name: 'functionalProgramming' },
        ],
      },
      {
        type: 'backend',
        items: [{ name: 'Nodejs' }, { name: 'Handlebars' }],
      },
      {
        type: 'testing',
        items: [{ name: 'Qunit' }, { name: 'MSW' }, { name: 'Jest' }],
      },
      {
        type: 'tooling_and_vcs',
        items: [
          { name: 'Prettier' },
          { name: 'ESLint' },
          { name: 'Github' },
          { name: 'npm' },
        ],
      },
      {
        type: 'devops_and_systems',
        items: [
          { name: 'Docker' },
          { name: 'AWS (Lambda, S3, EC2)' },
          { name: 'Linux' },
          { name: 'macOS' },
          { name: 'Jenkins' },
        ],
      },
      {
        type: 'apis_and_data_formats',
        items: [
          { name: 'Swagger' },
          { name: 'Postman' },
          { name: 'Technical Documentation' },
        ],
      },
      {
        type: 'management_and_strategy',
        items: [
          { name: 'Jira' },
          { name: 'Scrum' },
          { name: 'Analítica (GTM, DTM)' },
        ],
      },
      {
        type: 'ia',
        items: [{ name: 'WebMCP' }],
      },
    ],
  },
  {
    id: 'ntt-data',
    name: 'NTT Data',
    date: 'nttDataDate',
    city: 'sevilla',
    company_link: 'https://www.nttdata.com/global/en/',
    position: 'nttDataPosition',
    description: 'nttDataDescription',
    techs: [
      {
        type: 'frontend',
        items: [
          { name: 'Typescript' },
          { name: 'JavaScript' },
          { name: 'Nextjs' },
          { name: 'React' },
          { name: 'Redux and Context API' },
          { name: 'Primereact' },
          { name: 'RxJS' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'Sass' },
        ],
      },
      {
        type: 'backend',
        items: [{ name: 'Nodejs' }, { name: 'Nestjs' }, { name: 'Express' }],
      },
      {
        type: 'databases_and_search',
        items: [{ name: 'Mongodb' }],
      },
      {
        type: 'testing',
        items: [{ name: 'Jest' }],
      },
      {
        type: 'apis_and_data_formats',
        items: [{ name: 'Swagger' }],
      },
      {
        type: 'tooling_and_vcs',
        items: [{ name: 'Github' }, { name: 'npm' }],
      },
      {
        type: 'devops_and_systems',
        items: [
          { name: 'Docker' },
          { name: 'AWS (Lambda, S3, EC2)' },
          { name: 'Linux' },
          { name: 'Windows' },
          { name: 'Jenkins' },
        ],
      },
      {
        type: 'management_and_strategy',
        items: [{ name: 'Jira' }, { name: 'Scrum' }],
      },
    ],
  },
  {
    id: 'betix',
    name: 'BeTIX',
    date: 'betixDate',
    city: 'barcelona',
    company_link:
      'https://www.linkedin.com/company/expertus-technology-software/',
    position: 'betixPosition',
    description: 'betixDescription',
    techs: [
      {
        type: 'frontend',
        items: [
          { name: 'Typescript' },
          { name: 'JavaScript' },
          { name: 'React' },
          { name: 'Redux and Context API' },
          { name: 'AngularJS' },
          { name: 'Bootstrap' },
          { name: 'd3' },
          { name: 'Konva' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'Sass' },
          { name: 'Less' },
        ],
      },
      {
        type: 'backend',
        items: [{ name: 'Nodejs' }, { name: 'Python' }, { name: 'Java' }],
      },
      {
        type: 'testing',
        items: [{ name: 'Jasmine' }, { name: 'Mocha' }],
      },
      {
        type: 'tooling_and_vcs',
        items: [
          { name: 'RequireJS' },
          { name: 'Grunt' },
          { name: 'Gulp' },
          { name: 'webpack' },
          { name: 'Mercurial' },
          { name: 'Github' },
          { name: 'npm' },
        ],
      },
      {
        type: 'devops_and_systems',
        items: [
          { name: 'Shell script' },
          { name: 'AWS (Lambda, S3, EC2)' },
          { name: 'Linux' },
          { name: 'Windows' },
          { name: 'Jenkins' },
        ],
      },
      {
        type: 'management_and_strategy',
        items: [{ name: 'Analítica (GTM, DTM)' }, { name: 'Scrum' }],
      },
    ],
  },
  {
    id: 'crealogix',
    name: 'Crealogix',
    date: 'crealogixDate',
    city: 'barcelona',
    company_link: 'https://www.linkedin.com/company/crealogix/',
    position: 'crealogixPosition',
    description: 'crealogixDescription',
    techs: [
      {
        type: 'frontend',
        items: [
          { name: 'JavaScript' },
          { name: 'Angular' },
          { name: 'AngularJS' },
          { name: 'jQuery' },
          { name: 'Typescript' },
          { name: 'Bootstrap' },
          { name: 'Foundation' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'Sass' },
          { name: 'Less' },
        ],
      },
      {
        type: 'backend',
        items: [{ name: 'PHP' }, { name: 'Twig' }, { name: 'Blade' }],
      },
      {
        type: 'databases_and_search',
        items: [{ name: 'SQL' }],
      },
      {
        type: 'tooling_and_vcs',
        items: [
          { name: 'Grunt' },
          { name: 'Gulp' },
          { name: 'Github' },
          { name: 'npm' },
          { name: 'Bower' },
        ],
      },
      {
        type: 'devops_and_systems',
        items: [{ name: 'Linux' }],
      },
    ],
  },
  {
    id: 'ximdex',
    name: 'Ximdex',
    date: 'ximdexDate',
    city: 'sevilla',
    company_link: 'https://www.ximdex.com/',
    position: 'ximdexPosition',
    description: 'ximdexDescription',
    techs: [
      {
        type: 'frontend',
        items: [
          { name: 'JavaScript' },
          { name: 'jQuery' },
          { name: 'Riot' },
          { name: 'AngularJS' },
          { name: 'CoffeeScript' },
          { name: 'Bootstrap' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'Less' },
          { name: 'Sass' },
        ],
      },
      {
        type: 'backend',
        items: [
          { name: 'PHP' },
          { name: 'Twig' },
          { name: 'Blade' },
          { name: 'Smarty' },
        ],
      },
      {
        type: 'databases_and_search',
        items: [
          { name: 'SQL' },
          { name: 'Apache Solr' },
          { name: 'ElasticSearch' },
        ],
      },
      {
        type: 'apis_and_data_formats',
        items: [
          { name: 'XML' },
          { name: 'XSLT' },
          { name: 'RELAXNG' },
          { name: 'JSON' },
          { name: 'JSON-LD' },
        ],
      },
      {
        type: 'tooling_and_vcs',
        items: [
          { name: 'Grunt' },
          { name: 'Gulp' },
          { name: 'Github' },
          { name: 'npm' },
          { name: 'Composer' },
          { name: 'Bower' },
        ],
      },
      {
        type: 'devops_and_systems',
        items: [{ name: 'Linux' }, { name: 'Windows' }],
      },
      {
        type: 'management_and_strategy',
        items: [{ name: 'Kibana' }, { name: 'Scrum' }],
      },
      {
        type: 'design',
        items: [
          { name: 'Illustrator' },
          { name: 'Photoshop' },
          { name: 'Fireworks' },
          { name: 'Inkscape' },
          { name: 'Gimp' },
        ],
      },
    ],
  },
  {
    id: 'existo',
    name: 'Existo Diseño Web',
    date: 'existoDate',
    city: 'sevilla',
    company_link: 'https://www.existo.es/',
    position: 'existoPosition',
    description: 'existoDescription',
    techs: [
      {
        type: 'frontend',
        items: [
          { name: 'JavaScript' },
          { name: 'jQuery' },
          { name: 'Bootstrap' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'Less' },
          { name: 'Sass' },
        ],
      },
      {
        type: 'backend',
        items: [{ name: 'PHP' }, { name: 'Smarty' }],
      },
      {
        type: 'databases_and_search',
        items: [{ name: 'SQL' }],
      },
      {
        type: 'devops_and_systems',
        items: [{ name: 'Windows' }],
      },
      {
        type: 'management_and_strategy',
        items: [{ name: 'Lean' }],
      },
      {
        type: 'design',
        items: [
          { name: 'Illustrator' },
          { name: 'Photoshop' },
          { name: 'Fireworks' },
        ],
      },
    ],
  },
  {
    id: 'freelance',
    name: 'Freelance',
    date: 'freelanceDate',
    city: 'sevilla',
    company_link: 'https://iaic.us.es/',
    position: 'freelancePosition',
    description: 'freelanceDescription',
    techs: [
      {
        type: 'frontend',
        items: [
          { name: 'JavaScript' },
          { name: 'jQuery' },
          { name: 'HTML' },
          { name: 'CSS' },
        ],
      },
      {
        type: 'backend',
        items: [{ name: 'PHP' }],
      },
      {
        type: 'databases_and_search',
        items: [{ name: 'SQL' }],
      },
      {
        type: 'devops_and_systems',
        items: [{ name: 'Windows' }],
      },
    ],
  },
  {
    id: 'gaesa',
    name: 'Gaesa',
    date: 'gaesaDate',
    city: 'sevilla',
    position: 'gaesaPosition',
    description: 'gaesaDescription',
    techs: [
      {
        type: 'frontend',
        items: [{ name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }],
      },
      {
        type: 'backend',
        items: [{ name: 'PHP' }],
      },
      {
        type: 'databases_and_search',
        items: [{ name: 'SQL' }],
      },
      {
        type: 'devops_and_systems',
        items: [{ name: 'Windows' }],
      },
      {
        type: 'design',
        items: [
          { name: 'Illustrator' },
          { name: 'Photoshop' },
          { name: 'Fireworks' },
          { name: 'Adobe Flash (ActionScript 3)' },
        ],
      },
    ],
  },
] satisfies Array<Experience>;
