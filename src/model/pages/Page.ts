export class Page {
    /** This is used to verify a page, or a section is loaded. */
    ceckPoint;

    /** This is used to load a page directly by its relative path */
    path;

    public open(): void {
        if (this.path) {
            browser.url(this.path);
        }
        else {
            browser.url('/');
        }
    }


    /** Check page has been loaded and ready to interact with */
    public waitToLoad(): void {

        //TODO make this more robust
        try {
            browser.waitForVisible('.loading', 500, false);
            browser.waitForVisible('.loading', 5000, true);
        }
        catch (e) {
        }


        if (this.ceckPoint != null) {
            browser.waitForVisible(this.ceckPoint);
        }
    }






}