/**
 * Skill
 */
export const Language = {
  English: 'english',
  Spanish: 'spanish',
};

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
  Symfony: 'symfony',
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
  Json: 'json',
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

export const Skill = {
  ...Language,
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

export type Skill = typeof Skill;
export type SkillKey = keyof Skill;
export type SkillValue<K extends SkillKey> = Skill[K];
export type SkillValues = ValuesFromConst<Skill>;

/**
 * Skill types
 */
export const SkillType = {
  Language: 'language',
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

export const SkillByType = {
  [SkillType.Language]: Language,
  [SkillType.Frontend]: Frontend,
  [SkillType.Backend]: Backend,
  [SkillType.Testing]: Testing,
  [SkillType.ToolingAndVcs]: ToolingAndVcs,
  [SkillType.DevopsAndSystems]: DevopsAndSystems,
  [SkillType.ApisAndDataFormats]: ApisAndDataFormats,
  [SkillType.ManagementAndStrategy]: ManagementAndStrategy,
  [SkillType.Ia]: Ia,
  [SkillType.DatabasesAndSearch]: DatabasesAndSearch,
  [SkillType.Design]: Design,
} as const;

export type SkillType = typeof SkillType;
export type SkillTypeKey = keyof SkillType;
export type SkillTypeValue<K extends SkillTypeKey> = SkillType[K];
export type SkillTypeValues = ValuesFromConst<SkillType>;
