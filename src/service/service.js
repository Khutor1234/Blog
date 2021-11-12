export default class Service {

    _apiBase = ' https://jsonplaceholder.typicode.com';
  
    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };
  
    getNews = async () => {
      const res = await this.getResource(`/posts/`);
      return res
    };

    getNewsById = async (id) => {
      const res = await this.getResource(`/posts/${id}`);
      return res
    };

    getUsers = async () => {
      const res = await this.getResource(`/users/`);
      return res
    };

    getComments = async () => {
        const res = await this.getResource(`/comments/`);
        return res
      };

}