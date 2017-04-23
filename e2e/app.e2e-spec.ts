import { EliasdouglasPage } from './app.po';

describe('eliasdouglas App', function() {
  let page: EliasdouglasPage;

  beforeEach(() => {
    page = new EliasdouglasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
