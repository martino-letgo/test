import {defineSupportCode} from 'cucumber';

let expect = require('chai').expect;
import HomePage from '../model/pages/HomePage';

defineSupportCode(function ({Given, Then, When}) {

    Given(/^I search for (.*)/, function (q) {
        HomePage.searchFld.setValue(q);
        HomePage.searchFld.submitForm();
    });

    Then(/^I can see (.*) related results/, function (q) {
        HomePage.searchFld.waitForValue();
        expect(HomePage.searchFld.getValue()).to.contain(q);

        //TODO add a custom command to make this easier
        //get a random item text
        let ement = HomePage.itemsList.value[4];
        let itemText = browser.elementIdText(ement.ELEMENT).value;

        expect(itemText.toLowerCase()).to.have.string(q.toLowerCase());
    });


    Given(/^I select filter by (.*)/, function (q) {

        switch (q) {
            case "Cars": {
                HomePage.filterCarsBtn.click();
                break;
            }
            case "Electronics": {
                HomePage.filterElectronicsBtn.click();
                break;
            }
            case "Free Stuff": {
                HomePage.filterFreeStuffBtn.click();
                break;
            }

            default: {
                //statements;
                break;
            }
        }

    });


    Then(/^I see that filter (.*) is selected/, function (q) {

        switch (q) {
            case "Cars": {
                expect(HomePage.filterCarsBtn.waitForSelected()).to.be.true;
                break;
            }
            case "Electronics": {
                expect(HomePage.filterElectronicsBtn.waitForSelected()).to.be.true;
                break;
            }
            case "Free Stuff": {
                expect(HomePage.filterFreeStuffBtn.waitForSelected()).to.be.true;
                break;
            }

            default: {
                //statements;
                break;
            }
        }
    });


    Then(/^I see that filter (.*) is not selected/, function (q) {

        switch (q) {
            case "Cars": {
                expect(HomePage.filterCarsBtn.waitForNotSelected()).to.be.true;
                break;
            }
            case "Electronics": {
                expect(HomePage.filterElectronicsBtn.waitForNotSelected()).to.be.true;
                break;
            }
            case "Free Stuff": {
                expect(HomePage.filterFreeStuffBtn.waitForNotSelected()).to.be.true;
                break;
            }

            default: {
                //statements;
                break;
            }
        }
    });

});