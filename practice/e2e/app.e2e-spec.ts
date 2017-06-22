import { SassStylePage } from './app.po';

describe('sass-style App', () => {
  let page: SassStylePage;

  beforeEach(() => {
    page = new SassStylePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
