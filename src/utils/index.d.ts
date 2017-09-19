declare namespace WebdriverIO {

    interface Client<T> {
        waitForNotExist(
            milliseconds?: number
        ): Client<boolean> & boolean;

        waitForInvisible(
            milliseconds?: number
        ): Client<boolean> & boolean;

        waitForNotSelected(
            milliseconds?: number
        ): Client<boolean> & boolean;

        waitForClickable(): Client<boolean> & boolean;

    }
}
declare module "webdriverioCustom" {
    export = WebdriverIO;
}