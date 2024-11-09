import Http from './http';

export default class ViewApi {
  static async add(url, uuid) {
    return Http.post('view', {
      url,
      date: new Date(),
      uuid,
    });
  }
}
