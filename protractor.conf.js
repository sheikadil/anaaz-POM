let SpecReporter = require('jasmine-spec-reporter').SpecReporter
exports.config = {
    framework: 'jasmine',
    // selenumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['test -ts/signup.spec.ts','test -ts/signin.spec.ts'],
    SELENIUM_PROMISE_MANAGER: false,
    params: {
        env: "https://letcode.in/"
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
    onPrepare() {
        require("ts-node").register({
            project: require("path").join(__dirname,"./tsconfig.json")
        });
        jasmine.getEnv().addReporter(
            new SpecReporter({
                suite: {
                    displayNumber: true // display each suite number (hierarchical)
                },
                spec: {
                    displayPending: false, // display each pending spec
                    displayDuration: true // display each spec duration
                },
                summary: {
                    displaySuccesses: true, // display summary of all successes after execution
                    displayFailed: true, // display summary of all failures after execution
                    displayPending: true // display summary of all pending specs after execution
                }
            })
        );
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        jasmine.getEnv().beforeEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }
    
}