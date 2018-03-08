import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('view-taxes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display message View Take Home Pay, Income Tax & National Insurance', () => {
    page.navigateTo();
    expect(page.getParagraphText('h1')).toEqual('View Take Home Pay, Income Tax & National Insurance');
  });


  it('Should return the test value that I enter in the input', () => {
    page.navigateTo();
    const search: any = page.getElement('input[type=text]');

    search.sendKeys('Test value');
    expect(search.getAttribute('value')).toEqual('Test value');
    browser.pause();
  });

  // it('Should return Tom Carey in the autocomplete when Tom is written', () => {
  //   page.navigateTo();

  //   const search: any = page.getElement('input[type=text]');
  //   search.sendKeys('Tom');
  //   search.click();

  //   const names: any = page.getAutocompleteNames();
  //   console.log(names);
  //   alert(names);
  //   expect(names[0].getAttribute('value')).toEqual('Tom Carey');

  //   browser.pause();
  // });

});
