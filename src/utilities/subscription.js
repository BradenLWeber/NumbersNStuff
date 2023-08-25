import Http from './http';

export default class Subscription {
  static async add(email) {
    return Http.post('/subscribe', { email });
  }
  static async delete(email) {
    return Http.post('/unsubscribe', { email });
  }
}
