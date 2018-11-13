let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    directConnect: true,
    seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.5',
    seleniumServerStartTimeout: 60000,
    specs: ['specs/PrudentialTestSpec.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    },
    onPrepare: function(){
        jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true
        }))
    },
    restartBrowserBetweenTests: false,
};