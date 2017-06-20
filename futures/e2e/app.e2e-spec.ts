import { FuturesPage } from './app.po';

describe('futures App', () => {
  let page: FuturesPage;

  beforeEach(() => {
    page = new FuturesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
