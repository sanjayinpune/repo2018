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
            args: ['allow-file-access-from-files', 'start-maximized']
        }
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    },
    restartBrowserBetweenTests: false,
};