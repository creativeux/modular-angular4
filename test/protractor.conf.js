// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// NOTE: This is here to make the 'specs' path and the 'project' path absolute.
// If this isn't done, the specs path is relative to the execution location
// and the project path is relative to this file's location.
const path = require('path');
const rootPath = path.resolve('./');

const {
  SpecReporter
} = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    rootPath.concat('/test/e2e/**/*.e2e-spec.ts')
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: rootPath.concat('/test/e2e/tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
};
