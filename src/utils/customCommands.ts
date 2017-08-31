module.exports = function() {


    //TODO improve this code
    browser.addCommand("click", function (selector) {
        let result;
        try {
            if (selector) {
                result = browser.element(selector).click();
            } else {
                result = this.elementIdClick(this.element().value.ELEMENT);
            }
        } catch (err) {
            //console.log('ERR CLICK');
            console.log(err.message);
            if (err.message.includes('is not clickable') !== -1) {
                console.log('WAIT FOR NOT VISIBLE  .loading');
                browser.waitForVisible('.loading', 1000, true);
                result = this.click();
            } else {
                // console.log('THROW ERR');
                throw err;
            }
        }
        return result;
    }, true);


    browser.addCommand('waitForClickable', function () {
        //there is a strange behavior in reactjs with the clickable element, dev team is looking at it, for now we have to wait a second before interact with click
        browser.pause(1000);
        return browser.waitForVisible(this.element().selector) && browser.waitForEnabled(this.element().selector)
    });


    browser.addCommand('waitForInvisible', function ( ms = null) {
        return this.waitForVisible(ms, true);
    });


    browser.addCommand('waitForNotSelected', function ( ms = null) {
        return this.waitForSelected(ms, true);
    });


    browser.addCommand('waitForNotExist', function ( ms = null) {
        return this.waitForExist(ms, true);
    });
};