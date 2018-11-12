var settings = require('../../e2e/specs/e2esettings.json'),
    locators = require('../../e2e/specs/locators.json');

describe('UI Testcases', function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get(settings.baseurl);
        browser.refresh();
        browser.sleep(settings.SmallSleep);
    });

    it('should verify City Name Box is Present', () => {
        expect(element(by.xpath(locators.cityNameBox)).isPresent()).toBe(true);
    });
    it('should verify Search Button is Present', () => {
        expect(element(by.xpath(locators.searchButton)).isPresent()).toBe(true);
    });
    it('should verify currentLocation is Present', () => {
        expect(element(by.xpath(locators.currentLocation)).isPresent()).toBe(true);
    });
    it('should verify supportinCity is Present', () => {
        expect(element(by.xpath(locators.supportinCity)).isPresent()).toBe(true);
    });
    it('should verify weatherinCity is Present', () => {
        expect(element(by.xpath(locators.weatherinCity)).isPresent()).toBe(true);
    });
    it('should verify signIn is Present', () => {
        expect(element(by.xpath(locators.signIn)).isPresent()).toBe(true);
    });
    it('should verify signUp is Present', () => {
        expect(element(by.xpath(locators.signUp)).isPresent()).toBe(true);
    });
    it('should verify Farenheit is Present', () => {
        element(by.xpath(locators.farenheit)).click();
        expect(element(by.xpath(locators.farenheit)).isPresent()).toBe(true);
    });
    it('should verify Celcius is Present', () => {
        element(by.xpath(locators.celcius)).click();
        expect(element(by.xpath(locators.celcius)).isPresent()).toBe(true);
    });

    it('should verify Invalid City Name results in NOT FOUND', () => {
        element(by.xpath(locators.searchButton)).click();
        browser.sleep(settings.SmallSleep);
        element(by.xpath(locators.cityNameBox1)).sendKeys('INVALIDCITYNAME');
        element(by.xpath(locators.searchButton)).click();
        browser.sleep(settings.SmallSleep);
        expect(element(by.xpath(locators.notfound)).isPresent()).toBe(true);
        //expect(element(by.xpath(locators.notfound)).getText()).toContain("x");
    });

    it('should verify Valid City Name results', () => {
        element(by.xpath(locators.searchButton)).click();
        browser.sleep(settings.SmallSleep);
        element(by.xpath(locators.cityNameBox1)).clear();
        element(by.xpath(locators.cityNameBox1)).sendKeys('Mumbai');
        element(by.xpath(locators.searchButton)).click();
        browser.sleep(settings.SmallSleep);
        expect(element(by.xpath(locators.mumbaicityname)).isPresent()).toBe(true);
        element(by.xpath(locators.mumbaicityname)).click();
        browser.sleep(settings.SmallSleep);
        expect(element(by.xpath(locators.mumbaicityname1)).getText()).toContain("Mumbai");
    });
});
