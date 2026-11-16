/**
 * Tech
 */
export const Frontend = {
  Typescript: 'typescript',
  Javascript: 'javascript',
  Ember: 'ember',
  FastbootSsr: 'fastbootSsr',
  ReduxAndContextApi: 'reduxAndContextApi',
  D3: 'd3',
  Html: 'html',
  Css: 'css',
  Sass: 'sass',
  Tailwind: 'tailwind',
  FunctionalProgramming: 'functionalProgramming',
  Nextjs: 'nextjs',
  React: 'react',
  Primereact: 'primereact',
  Rxjs: 'rxjs',
  Angularjs: 'angularjs',
  Bootstrap: 'bootstrap',
  Konva: 'konva',
  Less: 'less',
  Angular: 'angular',
  Jquery: 'jquery',
  Foundation: 'foundation',
  Riot: 'riot',
  Coffeescript: 'coffeescript',
} as const;

export const Backend = {
  Nodejs: 'nodejs',
  Handlebars: 'handlebars',
  Nestjs: 'nestjs',
  Express: 'express',
  Python: 'python',
  Java: 'java',
  Php: 'php',
  Twig: 'twig',
  Blade: 'blade',
  Smarty: 'smarty',
  Symfony: 'symphony',
} as const;

export const Testing = {
  Qunit: 'qunit',
  Msw: 'msw',
  Jest: 'jest',
  Jasmine: 'jasmine',
  Mocha: 'mocha',
} as const;

export const ToolingAndVcs = {
  Prettier: 'prettier',
  Eslint: 'eslint',
  Github: 'github',
  Npm: 'npm',
  Requirejs: 'requirejs',
  Grunt: 'grunt',
  Gulp: 'gulp',
  Webpack: 'webpack',
  Mercurial: 'mercurial',
  Bower: 'bower',
  Composer: 'composer',
} as const;

export const DevopsAndSystems = {
  Docker: 'docker',
  AwsLambdaS3Ec2: 'awsLambdaS3Ec2',
  Linux: 'linux',
  Macos: 'macos',
  Jenkins: 'jenkins',
  Windows: 'windows',
  ShellScript: 'shellScript',
  Ssh: 'ssh',
} as const;

export const ApisAndDataFormats = {
  RestApi: 'restApi',
  Swagger: 'swagger',
  Postman: 'postman',
  TechnicalDocumentation: 'technicalDocumentation',
  Xml: 'xml',
  Xslt: 'xslt',
  Relaxng: 'relaxng',
  Json: 'json',
  JsonLd: 'jsonLd',
} as const;

export const ManagementAndStrategy = {
  Jira: 'jira',
  Scrum: 'scrum',
  AnaliticaGtmDtm: 'analiticaGtmDtm',
  Kibana: 'kibana',
  Lean: 'lean',
  SoftwareArchitecture: 'softwareArchitecture',
  TechnicalDocumentation: 'technicalDocumentation',
} as const;

export const Ia = {
  Webmcp: 'webmcp',
} as const;

export const DatabasesAndSearch = {
  Mongodb: 'mongodb',
  Sql: 'sql',
  ApacheSolr: 'apacheSolr',
  Elasticsearch: 'elasticsearch',
} as const;

export const Design = {
  Illustrator: 'illustrator',
  Photoshop: 'photoshop',
  Fireworks: 'fireworks',
  Inkscape: 'inkscape',
  Gimp: 'gimp',
  AdobeFlashActionscript: 'adobeFlashActionscript',
} as const;

export const Tech = {
  ...Frontend,
  ...Backend,
  ...Testing,
  ...ToolingAndVcs,
  ...DevopsAndSystems,
  ...ApisAndDataFormats,
  ...ManagementAndStrategy,
  ...Ia,
  ...DatabasesAndSearch,
  ...Design,
} as const;

export type Tech = typeof Tech;
export type TechKey = keyof Tech;
export type TechValue<K extends TechKey> = Tech[K];
export type TechValues = ValuesFromConst<Tech>;

/**
 * Tech types
 */
export const TechType = {
  Frontend: 'frontend',
  Backend: 'backend',
  Testing: 'testing',
  ToolingAndVcs: 'toolingAndVcs',
  DevopsAndSystems: 'devopsAndSystems',
  ApisAndDataFormats: 'apisAndDataFormats',
  ManagementAndStrategy: 'managementAndStrategy',
  Ia: 'ia',
  DatabasesAndSearch: 'databasesAndSearch',
  Design: 'design',
} as const;

export const TechByType = {
  [TechType.Frontend]: Frontend,
  [TechType.Backend]: Backend,
  [TechType.Testing]: Testing,
  [TechType.ToolingAndVcs]: ToolingAndVcs,
  [TechType.DevopsAndSystems]: DevopsAndSystems,
  [TechType.ApisAndDataFormats]: ApisAndDataFormats,
  [TechType.ManagementAndStrategy]: ManagementAndStrategy,
  [TechType.Ia]: Ia,
  [TechType.DatabasesAndSearch]: DatabasesAndSearch,
  [TechType.Design]: Design,
} as const;

export type TechType = typeof TechType;
export type TechTypeKey = keyof TechType;
export type TechTypeValue<K extends TechTypeKey> = TechType[K];
export type TechTypeValues = ValuesFromConst<TechType>;
