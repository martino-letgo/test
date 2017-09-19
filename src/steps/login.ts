import {defineSupportCode} from 'cucumber';

let expect = require('chai').expect;
import HomePage from '../model/pages/HomePage';
import LoginPage from '../model/pages/LoginPage';

defineSupportCode(function ({Given, Then, When}) {

    Given(/^I attempt to log in with valid email/, function () {
        HomePage.goToLogin();
        LoginPage.waitToLoad();
        LoginPage.emailLoginAs("martino.turturiello@letgo.com", "automation");
    });

    Given(/^I attempt to log in with invalid email/, function () {
        HomePage.goToLogin();
        LoginPage.waitToLoad();
        LoginPage.emailLoginAs("martino.turturiello@letgo.com", "wrong");
    });

    Given(/^I attempt to log in with valid facebook/, function () {
        HomePage.goToLogin();
        LoginPage.waitToLoad();
        LoginPage.facebookLoginAs("silvia.doz@letgo.com", "letgo2016");
    });

    Given(/^I attempt to log in with invalid facebook/, function () {
        HomePage.goToLogin();
        LoginPage.waitToLoad();
        LoginPage.facebookLoginAs("silvia.doz@letgo.com", "wrog");
    });

    Given(/^I attempt to log in with valid google/, function () {
        HomePage.goToLogin();
        LoginPage.waitToLoad();
        LoginPage.googleLoginAs("automation-test@letgo.com", "browserstack2017");
    });

    Given(/^I attempt to log in with invalid google/, function () {
        HomePage.goToLogin();
        LoginPage.waitToLoad();
        LoginPage.googleLoginAs("automation-test@letgo.com", "wrong");
    });



    Then(/^I am presented with the error message/, function () {
        LoginPage.errorMessage.waitForVisible();
        expect(LoginPage.errorMessage.getText()).to.contain('Invalid email or password. Please try again.')
    });


    Then(/^the logout button is visible/, function () {
        expect(HomePage.logoutButton.isVisible());
    });


    When(/^I logout/, function () {
        HomePage.logout();
    });


    Then(/^I can see the avatar/, function () {
        expect(HomePage.avatarButton.waitForVisible());
    });

    Then(/^I cannot see the avatar/, function () {
        expect(HomePage.avatarButton.waitForNotExist()).to.be.true;
    });






});






