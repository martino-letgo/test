import {Page} from './Page';

class LoginPage extends Page{

    //example on how use constructor and set a property
    constructor() {
      super();
      this.ceckPoint = "//*[starts-with(@class, 'Header__accessWrapper')]/*/button";
      this.path = "/";
        
    }

    //Element definition

    // email login section //
    public get emailLoginLink()     { return browser.element("//*[starts-with(@class, 'Auth__second-btn')]") }
    public get usernameBox()    { return browser.element("//input[@name='email']") }
    public get passwordBox()    { return browser.element("//input[@name='password']") }
    public get loginButton()    { return browser.element("//button[starts-with(@class, 'Auth__submitBtn')]") }
    public get errorMessage()  { return browser.element("//*[starts-with(@class, 'Auth__snackbar')]") }

    // facebook login section
    public get facebookLoginLink()      { return browser.element("//button[@data-test='login-facebook']") }
    public get facebookUsernameBox()    { return browser.element("//input[@id='email']") }
    public get facebookPasswordBox()    { return browser.element("//input[@id='pass']") }
    public get facebookLoginButton()    { return browser.element("//input[@name='login']") }

    // google login section
    public get googleLoginLink()      { return browser.element("//*[starts-with(@class, 'Auth__buttons')][1]/a[2]") }
    public get googleUsernameBox()    { return browser.element("//input[@id='identifierId']") }
    public get googleNext()           { return browser.element("//div[@id='identifierNext']") }
    public get googlePasswordBox()    { return browser.element("//input[@name='password']") }
    public get googleLoginButton()    { return browser.element("//div[@id='passwordNext']") }


    public open(): void {
        browser.url('/')
        browser.element("//*[starts-with(@class, 'Header__accessWrapper')]/*/button").click();
    }
  
    public emailLoginAs(user,password): void{
      
      this.emailLoginLink.click();
      this.usernameBox.setValue(user);
      this.passwordBox.setValue(password);
      this.loginButton.click();
      
    }

    public facebookLoginAs(user,password): void{

        this.facebookLoginLink.click();

        var newTabId = browser.getTabIds()[1]
        browser.switchTab(newTabId);

        this.facebookUsernameBox.setValue(user);
        this.facebookPasswordBox.setValue(password);
        this.facebookLoginButton.waitForClickable();
        this.facebookLoginButton.click();

        browser.pause(3000);
        browser.switchTab();
    }

    public googleLoginAs(user,password): void{

        this.googleLoginLink.click();

        var newTabId = browser.getTabIds()[1]
        browser.switchTab(newTabId);

        this.googleUsernameBox.setValue(user);
        this.googleNext.click();

        this.googlePasswordBox.waitForClickable();
        this.googlePasswordBox.setValue(password);

        this.googleLoginButton.waitForClickable();
        this.googleLoginButton.click();

        browser.pause(3000);
        browser.switchTab();

    }
}
const loginPage = new LoginPage();
export default loginPage