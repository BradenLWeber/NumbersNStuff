import Http from './http';

export default class ViewApi {
  static async add(url, uuid, windowWidth, windowHeight) {
    return Http.post('view', {
      url,
      date: new Date(),
      uuid,
      dimensions_W_H: windowWidth + 'x' + windowHeight,
    });
  }
}
