import { PriatoolPage } from './app.po';

describe('priatool App', function() {
  let page: PriatoolPage;

  beforeEach(() => {
    page = new PriatoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
