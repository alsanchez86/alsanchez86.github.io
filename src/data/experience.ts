import {
  ApisAndDataFormats,
  Backend,
  DatabasesAndSearch,
  Design,
  DevopsAndSystems,
  Frontend,
  Ia,
  ManagementAndStrategy,
  TechType,
  Testing,
  ToolingAndVcs,
  type TechTypeValues,
  type TechValues,
} from '@/constants/tech';
import type { TKey } from '@/types/i18n';

export interface TechItem {
  name: TechValues;
  description: TKey;
}

export interface Tech {
  type: TechTypeValues;
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
  companyLink?: string;
}

export const experiences = [
  {
    id: 'ccc',
    name: 'Copyright Clearance Center',
    date: 'cccDate',
    city: 'sevilla',
    companyLink: 'https://www.copyright.com/',
    position: 'cccPosition',
    description: 'cccDescription',
    techs: [
      {
        type: TechType.Frontend,
        items: [
          { name: Frontend.Typescript, description: 'typescriptTKey' },
          { name: Frontend.Javascript, description: 'javascriptTKey' },
          { name: Frontend.Ember, description: 'emberTKey' },
          { name: Frontend.FastbootSsr, description: 'fastbootSsrTKey' },
          {
            name: Frontend.ReduxAndContextApi,
            description: 'reduxAndContextApiTKey',
          },
          { name: Frontend.D3, description: 'd3TKey' },
          { name: Frontend.Html, description: 'htmlTKey' },
          { name: Frontend.Css, description: 'cssTKey' },
          { name: Frontend.Sass, description: 'sassTKey' },
          { name: Frontend.Tailwind, description: 'tailwindTKey' },
          {
            name: Frontend.FunctionalProgramming,
            description: 'functionalProgrammingTKey',
          },
        ],
      },
      {
        type: TechType.Backend,
        items: [
          { name: Backend.Nodejs, description: 'nodejsTKey' },
          { name: Backend.Handlebars, description: 'handlebarsTKey' },
        ],
      },
      {
        type: TechType.Testing,
        items: [
          { name: Testing.Qunit, description: 'qunitTKey' },
          { name: Testing.Msw, description: 'mswTKey' },
          { name: Testing.Jest, description: 'jestTKey' },
        ],
      },
      {
        type: TechType.ToolingAndVcs,
        items: [
          { name: ToolingAndVcs.Prettier, description: 'prettierTKey' },
          { name: ToolingAndVcs.Eslint, description: 'eslintTKey' },
          { name: ToolingAndVcs.Github, description: 'githubTKey' },
          { name: ToolingAndVcs.Npm, description: 'npmTKey' },
        ],
      },
      {
        type: TechType.DevopsAndSystems,
        items: [
          { name: DevopsAndSystems.Docker, description: 'dockerTKey' },
          {
            name: DevopsAndSystems.AwsLambdaS3Ec2,
            description: 'awsLambdaS3Ec2TKey',
          },
          { name: DevopsAndSystems.Linux, description: 'linuxTKey' },
          { name: DevopsAndSystems.Macos, description: 'macosTKey' },
          { name: DevopsAndSystems.Jenkins, description: 'jenkinsTKey' },
        ],
      },
      {
        type: TechType.ApisAndDataFormats,
        items: [
          { name: ApisAndDataFormats.Swagger, description: 'swaggerTKey' },
          { name: ApisAndDataFormats.Postman, description: 'postmanTKey' },
          {
            name: ApisAndDataFormats.TechnicalDocumentation,
            description: 'technicalDocumentationTKey',
          },
        ],
      },
      {
        type: TechType.ManagementAndStrategy,
        items: [
          { name: ManagementAndStrategy.Jira, description: 'jiraTKey' },
          { name: ManagementAndStrategy.Scrum, description: 'scrumTKey' },
          {
            name: ManagementAndStrategy.AnaliticaGtmDtm,
            description: 'analiticaGtmDtmTKey',
          },
        ],
      },
      {
        type: TechType.Ia,
        items: [{ name: Ia.Webmcp, description: 'webmcpTKey' }],
      },
    ],
  },
  {
    id: 'ntt-data',
    name: 'NTT Data',
    date: 'nttDataDate',
    city: 'sevilla',
    companyLink: 'https://www.nttdata.com/global/en/',
    position: 'nttDataPosition',
    description: 'nttDataDescription',
    techs: [
      {
        type: TechType.Frontend,
        items: [
          { name: Frontend.Typescript, description: 'typescriptTKey' },
          { name: Frontend.Javascript, description: 'javascriptTKey' },
          { name: Frontend.Nextjs, description: 'nextjsTKey' },
          { name: Frontend.React, description: 'reactTKey' },
          {
            name: Frontend.ReduxAndContextApi,
            description: 'reduxAndContextApiTKey',
          },
          { name: Frontend.Primereact, description: 'primereactTKey' },
          { name: Frontend.Rxjs, description: 'rxjsTKey' },
          { name: Frontend.Html, description: 'htmlTKey' },
          { name: Frontend.Css, description: 'cssTKey' },
          { name: Frontend.Sass, description: 'sassTKey' },
        ],
      },
      {
        type: TechType.Backend,
        items: [
          { name: Backend.Nodejs, description: 'nodejsTKey' },
          { name: Backend.Nestjs, description: 'nestjsTKey' },
          { name: Backend.Express, description: 'expressTKey' },
        ],
      },
      {
        type: TechType.DatabasesAndSearch,
        items: [
          { name: DatabasesAndSearch.Mongodb, description: 'mongodbTKey' },
        ],
      },
      {
        type: TechType.Testing,
        items: [{ name: Testing.Jest, description: 'jestTKey' }],
      },
      {
        type: TechType.ApisAndDataFormats,
        items: [
          { name: ApisAndDataFormats.Swagger, description: 'swaggerTKey' },
        ],
      },
      {
        type: TechType.ToolingAndVcs,
        items: [
          { name: ToolingAndVcs.Github, description: 'githubTKey' },
          { name: ToolingAndVcs.Npm, description: 'npmTKey' },
        ],
      },
      {
        type: TechType.DevopsAndSystems,
        items: [
          { name: DevopsAndSystems.Docker, description: 'dockerTKey' },
          {
            name: DevopsAndSystems.AwsLambdaS3Ec2,
            description: 'awsLambdaS3Ec2TKey',
          },
          { name: DevopsAndSystems.Linux, description: 'linuxTKey' },
          { name: DevopsAndSystems.Windows, description: 'windowsTKey' },
          { name: DevopsAndSystems.Jenkins, description: 'jenkinsTKey' },
        ],
      },
      {
        type: TechType.ManagementAndStrategy,
        items: [
          { name: ManagementAndStrategy.Jira, description: 'jiraTKey' },
          { name: ManagementAndStrategy.Scrum, description: 'scrumTKey' },
        ],
      },
    ],
  },
  {
    id: 'betix',
    name: 'BeTIX',
    date: 'betixDate',
    city: 'barcelona',
    companyLink:
      'https://www.linkedin.com/company/expertus-technology-software/',
    position: 'betixPosition',
    description: 'betixDescription',
    techs: [
      {
        type: TechType.Frontend,
        items: [
          { name: Frontend.Typescript, description: 'typescriptTKey' },
          { name: Frontend.Javascript, description: 'javascriptTKey' },
          { name: Frontend.React, description: 'reactTKey' },
          {
            name: Frontend.ReduxAndContextApi,
            description: 'reduxAndContextApiTKey',
          },
          { name: Frontend.Angularjs, description: 'angularjsTKey' },
          { name: Frontend.Bootstrap, description: 'bootstrapTKey' },
          { name: Frontend.D3, description: 'd3TKey' },
          { name: Frontend.Konva, description: 'konvaTKey' },
          { name: Frontend.Html, description: 'htmlTKey' },
          { name: Frontend.Css, description: 'cssTKey' },
          { name: Frontend.Sass, description: 'sassTKey' },
          { name: Frontend.Less, description: 'lessTKey' },
        ],
      },
      {
        type: TechType.Backend,
        items: [
          { name: Backend.Nodejs, description: 'nodejsTKey' },
          { name: Backend.Python, description: 'pythonTKey' },
          { name: Backend.Java, description: 'javaTKey' },
        ],
      },
      {
        type: TechType.Testing,
        items: [
          { name: Testing.Jasmine, description: 'jasmineTKey' },
          { name: Testing.Mocha, description: 'mochaTKey' },
        ],
      },
      {
        type: TechType.ToolingAndVcs,
        items: [
          { name: ToolingAndVcs.Requirejs, description: 'requirejsTKey' },
          { name: ToolingAndVcs.Grunt, description: 'gruntTKey' },
          { name: ToolingAndVcs.Gulp, description: 'gulpTKey' },
          { name: ToolingAndVcs.Webpack, description: 'webpackTKey' },
          { name: ToolingAndVcs.Mercurial, description: 'mercurialTKey' },
          { name: ToolingAndVcs.Github, description: 'githubTKey' },
          { name: ToolingAndVcs.Npm, description: 'npmTKey' },
        ],
      },
      {
        type: TechType.DevopsAndSystems,
        items: [
          {
            name: DevopsAndSystems.ShellScript,
            description: 'shellScriptTKey',
          },
          {
            name: DevopsAndSystems.AwsLambdaS3Ec2,
            description: 'awsLambdaS3Ec2TKey',
          },
          { name: DevopsAndSystems.Linux, description: 'linuxTKey' },
          { name: DevopsAndSystems.Windows, description: 'windowsTKey' },
          { name: DevopsAndSystems.Jenkins, description: 'jenkinsTKey' },
        ],
      },
      {
        type: TechType.ManagementAndStrategy,
        items: [
          {
            name: ManagementAndStrategy.AnaliticaGtmDtm,
            description: 'analiticaGtmDtmTKey',
          },
          { name: ManagementAndStrategy.Scrum, description: 'scrumTKey' },
        ],
      },
    ],
  },
  {
    id: 'crealogix',
    name: 'Crealogix',
    date: 'crealogixDate',
    city: 'barcelona',
    companyLink: 'https://www.linkedin.com/company/crealogix/',
    position: 'crealogixPosition',
    description: 'crealogixDescription',
    techs: [
      {
        type: TechType.Frontend,
        items: [
          { name: Frontend.Javascript, description: 'javascriptTKey' },
          { name: Frontend.Angular, description: 'angularTKey' },
          { name: Frontend.Angularjs, description: 'angularjsTKey' },
          { name: Frontend.Jquery, description: 'jqueryTKey' },
          { name: Frontend.Typescript, description: 'typescriptTKey' },
          { name: Frontend.Bootstrap, description: 'bootstrapTKey' },
          { name: Frontend.Foundation, description: 'foundationTKey' },
          { name: Frontend.Html, description: 'htmlTKey' },
          { name: Frontend.Css, description: 'cssTKey' },
          { name: Frontend.Sass, description: 'sassTKey' },
          { name: Frontend.Less, description: 'lessTKey' },
        ],
      },
      {
        type: TechType.Backend,
        items: [
          { name: Backend.Php, description: 'phpTKey' },
          { name: Backend.Twig, description: 'twigTKey' },
          { name: Backend.Blade, description: 'bladeTKey' },
        ],
      },
      {
        type: TechType.DatabasesAndSearch,
        items: [{ name: DatabasesAndSearch.Sql, description: 'sqlTKey' }],
      },
      {
        type: TechType.ToolingAndVcs,
        items: [
          { name: ToolingAndVcs.Grunt, description: 'gruntTKey' },
          { name: ToolingAndVcs.Gulp, description: 'gulpTKey' },
          { name: ToolingAndVcs.Github, description: 'githubTKey' },
          { name: ToolingAndVcs.Npm, description: 'npmTKey' },
          { name: ToolingAndVcs.Bower, description: 'bowerTKey' },
        ],
      },
      {
        type: TechType.DevopsAndSystems,
        items: [{ name: DevopsAndSystems.Linux, description: 'linuxTKey' }],
      },
    ],
  },
  {
    id: 'ximdex',
    name: 'Ximdex',
    date: 'ximdexDate',
    city: 'sevilla',
    companyLink: 'https://www.ximdex.com/',
    position: 'ximdexPosition',
    description: 'ximdexDescription',
    techs: [
      {
        type: TechType.Frontend,
        items: [
          { name: Frontend.Javascript, description: 'javascriptTKey' },
          { name: Frontend.Jquery, description: 'jqueryTKey' },
          { name: Frontend.Riot, description: 'riotTKey' },
          { name: Frontend.Angularjs, description: 'angularjsTKey' },
          { name: Frontend.Coffeescript, description: 'coffeescriptTKey' },
          { name: Frontend.Bootstrap, description: 'bootstrapTKey' },
          { name: Frontend.Html, description: 'htmlTKey' },
          { name: Frontend.Css, description: 'cssTKey' },
          { name: Frontend.Less, description: 'lessTKey' },
          { name: Frontend.Sass, description: 'sassTKey' },
        ],
      },
      {
        type: TechType.Backend,
        items: [
          { name: Backend.Php, description: 'phpTKey' },
          { name: Backend.Twig, description: 'twigTKey' },
          { name: Backend.Blade, description: 'bladeTKey' },
          { name: Backend.Smarty, description: 'smartyTKey' },
        ],
      },
      {
        type: TechType.DatabasesAndSearch,
        items: [
          { name: DatabasesAndSearch.Sql, description: 'sqlTKey' },
          {
            name: DatabasesAndSearch.ApacheSolr,
            description: 'apacheSolrTKey',
          },
          {
            name: DatabasesAndSearch.Elasticsearch,
            description: 'elasticsearchTKey',
          },
        ],
      },
      {
        type: TechType.ApisAndDataFormats,
        items: [
          { name: ApisAndDataFormats.Xml, description: 'xmlTKey' },
          { name: ApisAndDataFormats.Xslt, description: 'xsltTKey' },
          { name: ApisAndDataFormats.Relaxng, description: 'relaxngTKey' },
          { name: ApisAndDataFormats.Json, description: 'jsonTKey' },
          { name: ApisAndDataFormats.JsonLd, description: 'jsonLdTKey' },
        ],
      },
      {
        type: TechType.ToolingAndVcs,
        items: [
          { name: ToolingAndVcs.Grunt, description: 'gruntTKey' },
          { name: ToolingAndVcs.Gulp, description: 'gulpTKey' },
          { name: ToolingAndVcs.Github, description: 'githubTKey' },
          { name: ToolingAndVcs.Npm, description: 'npmTKey' },
          { name: ToolingAndVcs.Composer, description: 'composerTKey' },
          { name: ToolingAndVcs.Bower, description: 'bowerTKey' },
        ],
      },
      {
        type: TechType.DevopsAndSystems,
        items: [
          { name: DevopsAndSystems.Linux, description: 'linuxTKey' },
          { name: DevopsAndSystems.Windows, description: 'windowsTKey' },
        ],
      },
      {
        type: TechType.ManagementAndStrategy,
        items: [
          { name: ManagementAndStrategy.Kibana, description: 'kibanaTKey' },
          { name: ManagementAndStrategy.Scrum, description: 'scrumTKey' },
        ],
      },
      {
        type: TechType.Design,
        items: [
          { name: Design.Illustrator, description: 'illustratorTKey' },
          { name: Design.Photoshop, description: 'photoshopTKey' },
          { name: Design.Fireworks, description: 'fireworksTKey' },
          { name: Design.Inkscape, description: 'inkscapeTKey' },
          { name: Design.Gimp, description: 'gimpTKey' },
        ],
      },
    ],
  },
  {
    id: 'existo',
    name: 'Existo Diseño Web',
    date: 'existoDate',
    city: 'sevilla',
    companyLink: 'https://www.existo.es/',
    position: 'existoPosition',
    description: 'existoDescription',
    techs: [
      {
        type: TechType.Frontend,
        items: [
          { name: Frontend.Javascript, description: 'javascriptTKey' },
          { name: Frontend.Jquery, description: 'jqueryTKey' },
          { name: Frontend.Bootstrap, description: 'bootstrapTKey' },
          { name: Frontend.Html, description: 'htmlTKey' },
          { name: Frontend.Css, description: 'cssTKey' },
          { name: Frontend.Less, description: 'lessTKey' },
          { name: Frontend.Sass, description: 'sassTKey' },
        ],
      },
      {
        type: TechType.Backend,
        items: [
          { name: Backend.Php, description: 'phpTKey' },
          { name: Backend.Smarty, description: 'smartyTKey' },
        ],
      },
      {
        type: TechType.DatabasesAndSearch,
        items: [{ name: DatabasesAndSearch.Sql, description: 'sqlTKey' }],
      },
      {
        type: TechType.DevopsAndSystems,
        items: [{ name: DevopsAndSystems.Windows, description: 'windowsTKey' }],
      },
      {
        type: TechType.ManagementAndStrategy,
        items: [{ name: ManagementAndStrategy.Lean, description: 'leanTKey' }],
      },
      {
        type: TechType.Design,
        items: [
          { name: Design.Illustrator, description: 'illustratorTKey' },
          { name: Design.Photoshop, description: 'photoshopTKey' },
          { name: Design.Fireworks, description: 'fireworksTKey' },
        ],
      },
    ],
  },
  {
    id: 'freelance',
    name: 'Freelance',
    date: 'freelanceDate',
    city: 'sevilla',
    companyLink: 'https://iaic.us.es/',
    position: 'freelancePosition',
    description: 'freelanceDescription',
    techs: [
      {
        type: TechType.Frontend,
        items: [
          { name: Frontend.Javascript, description: 'javascriptTKey' },
          { name: Frontend.Jquery, description: 'jqueryTKey' },
          { name: Frontend.Html, description: 'htmlTKey' },
          { name: Frontend.Css, description: 'cssTKey' },
        ],
      },
      {
        type: TechType.Backend,
        items: [{ name: Backend.Php, description: 'phpTKey' }],
      },
      {
        type: TechType.DatabasesAndSearch,
        items: [{ name: DatabasesAndSearch.Sql, description: 'sqlTKey' }],
      },
      {
        type: TechType.DevopsAndSystems,
        items: [{ name: DevopsAndSystems.Windows, description: 'windowsTKey' }],
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
        type: TechType.Frontend,
        items: [
          { name: Frontend.Javascript, description: 'javascriptTKey' },
          { name: Frontend.Html, description: 'htmlTKey' },
          { name: Frontend.Css, description: 'cssTKey' },
        ],
      },
      {
        type: TechType.Backend,
        items: [{ name: Backend.Php, description: 'phpTKey' }],
      },
      {
        type: TechType.DatabasesAndSearch,
        items: [{ name: DatabasesAndSearch.Sql, description: 'sqlTKey' }],
      },
      {
        type: TechType.DevopsAndSystems,
        items: [{ name: DevopsAndSystems.Windows, description: 'windowsTKey' }],
      },
      {
        type: TechType.Design,
        items: [
          { name: Design.Illustrator, description: 'illustratorTKey' },
          { name: Design.Photoshop, description: 'photoshopTKey' },
          { name: Design.Fireworks, description: 'fireworksTKey' },
          {
            name: Design.AdobeFlashActionscript,
            description: 'adobeFlashActionscriptTKey',
          },
        ],
      },
    ],
  },
] satisfies Array<Experience>;
