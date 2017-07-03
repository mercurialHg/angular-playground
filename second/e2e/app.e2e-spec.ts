import { Start4Page } from './app.po';

describe('start4 App', () => {
  let page: Start4Page;

  beforeEach(() => {
    page = new Start4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
