import {defineSupportCode} from 'cucumber';
import HomePage from '../model/pages/HomePage';

defineSupportCode(function ({Given, Then, When}) {

    Given(/^I open the home page/, function () {
        HomePage.open();
        HomePage.waitToLoad();
    });

});
