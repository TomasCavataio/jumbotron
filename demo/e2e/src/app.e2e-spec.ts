import { JumbortonDemoPage } from './app.po';

describe('jumbotron-demo App', () => {
  let page: JumbortonDemoPage;

  beforeEach(() => {
    page = new JumbortonDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
