import { VRSpacePage } from './app.po';

describe('vrspace App', function() {
  let page: VRSpacePage;

  beforeEach(() => {
    page = new VRSpacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
