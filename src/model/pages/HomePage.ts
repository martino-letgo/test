import {Page} from './Page';

class HomePage extends Page{

    //2nd from last
    ceckPoint = ".ReactVirtualized__Collection__cell:nth-last-child(2)";
    path = "/";

    //PAGE ELEMENTS
    get loginBtn()  { return browser.element("//button[contains(., 'Log In')]/*"); }
    get searchFld() { return browser.element("//*[contains(@id, 'searchField-Whatareyoulookingfor')]"); }
    get menuBtn()   { return browser.element("[class*='Header__menuDesktop'] >span>div>button"); }
    get itemsList() { return browser.elements("//*[@class='ReactVirtualized__Collection__cell']"); }
    get itemContainer() { return browser.element("//*[contains(@class, 'ReactVirtualized__Collection__innerScrollContainer')]");}

    //filters section
    get filterCarsBtn()         { return browser.element("//*[starts-with(@class, 'Filters__cars-and-motors')]/input"); }
    get filterElectronicsBtn()  { return browser.element("//*[starts-with(@class, 'Filters__electronics')]/input"); }
    get filterFreeStuffBtn()    { return browser.element("//*[starts-with(@class, 'Filters__free-stuff')]/input"); }


    //logged in user section
    public get avatarButton()   { return browser.element("[class*='cursor Header__avatar_']"); }
    public get logoutButton()   { return browser.element("(//*[starts-with(@class, 'Icon__icon-logout')])[2]"); }


    public get dialogConfirm()  {return browser.element("//*[starts-with(@class, 'Dialog__actionsClass')]/button[2]/span/span"); }
    public goToLogin() {
        browser.element("//*[starts-with(@class, 'Header__accessWrapper')]/*/button").click();
      
  }

  public logout(){
      this.menuBtn.waitForClickable();
      this.menuBtn.click();

      this.logoutButton.waitForClickable();
      this.logoutButton.click();

      this.dialogConfirm.waitForClickable();
      this.dialogConfirm.click();
  }


}
const homePage = new HomePage();
export default homePage