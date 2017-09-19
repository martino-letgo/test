import {defineSupportCode} from 'cucumber';

defineSupportCode(function ({Given, Then, When}) {

    Then(/^I clean the browser cookies/, function () {
        browser.deleteCookie();
    });

});