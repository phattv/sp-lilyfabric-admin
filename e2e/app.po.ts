import { browser, by, element } from 'protractor';

export class LilyfabricAdminPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lfa-root h1')).getText();
  }
}
