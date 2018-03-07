import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('view-taxes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message View Take Home Pay, Income Tax & National Insurance', () => {
    page.navigateTo();
    expect(page.getParagraphText('h1')).toEqual('View Take Home Pay, Income Tax & National Insurance');
  });
});
