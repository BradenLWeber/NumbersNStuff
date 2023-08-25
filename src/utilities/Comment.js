import Filter from 'bad-words';
import Http from './http';

export default class Comment {
  static async add(text, name, post) {
    // Scrub text and mark for check if something doesn't check out
    const originalAsteriskCount = (text.match(/\*/g) || []).length;
    const filter = new Filter();
    text = filter.clean(text);
    const vulgar = (text.match(/\*/g) || []).length > originalAsteriskCount;

    return Http.post('/comment', {
      text,
      name,
      date: new Date(),
      post,
      vulgar,
      flagged: false,
    });
  }
  static async getAll(email) {
    return Http.post('/comments');
  }
  static async flag(name, post, date) {
    return Http.post('/comment', {
      name,
      date,
      post,
      flagged: true,
    });
  }
}
