import Filter from 'bad-words';
import Http from './http';
import dayjs from 'dayjs';

export default class CommentApi {
  static async add(text, name, post) {
    // Scrub text and mark for check if something doesn't check out
    const originalAsteriskCount = (text.match(/\*/g) || []).length;
    const filter = new Filter();
    text = filter.clean(text);
    const vulgar = (text.match(/\*/g) || []).length > originalAsteriskCount;

    return Http.post('comment', {
      text,
      name,
      date: new Date(),
      post,
      vulgar,
      flagged: false,
    });
  }
  static async getAll(post) {
    return Http.get('comments', { post }).then((res) =>
      res
        .filter((item) => !item.vulgar)
        .sort((a, b) => new Date(a.date) > new Date(b.date).toISOString()),
    );
  }
  static async flag(name, post, date) {
    return Http.post('comment', {
      name,
      date,
      post,
      flagged: true,
    });
  }
}
