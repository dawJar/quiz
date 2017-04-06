import { QuizNg2Page } from './app.po';

describe('quiz-ng2 App', function() {
  let page: QuizNg2Page;

  beforeEach(() => {
    page = new QuizNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
