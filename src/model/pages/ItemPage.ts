import {Page} from './Page';

class ItemPage extends Page{

    ceckPoint = "//*[contains(@class, 'product-page__breadcrumbSeparator')]";

    //PAGE ELEMENTS
    get categoryText() { return browser.elements("(//*[contains(@class, 'product-page__breadcrumbSeparator')])[2]/../span[2]"); }
    get titleText() { return browser.element("[class^='product-page__productTitle']"); }
    get descriptionText()  { return browser.element("[class^='ProductDetail__name-description']"); }
    get navigateLeftBtn()  { return browser.element("[class*='ProductNavigator__left']"); }
    get navigateRightBtn()  { return browser.element("[class*='ProductNavigator__right']"); }




}
const itemPage = new ItemPage();
export default itemPage