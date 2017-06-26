import { LilyfabricAdminPage } from './app.po';

describe('lilyfabric-admin App', () => {
  let page: LilyfabricAdminPage;

  beforeEach(() => {
    page = new LilyfabricAdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to lfa!!'))
      .then(done, done.fail);
  });
});
