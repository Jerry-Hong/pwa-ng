import { PwaNgPage } from './app.po';

describe('pwa-ng App', () => {
  let page: PwaNgPage;

  beforeEach(() => {
    page = new PwaNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
