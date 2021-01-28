class ApiService {
  _apiUrl = 'https://jsonplaceholder.typicode.com/';
  _todosPath = 'todos/';

  async getTodoList() {
    return await this._fetchData(this._todosPath);
  }

  async getTodoItem(id) {
    return await this._fetchData(`${this._todosPath}${id}`);
  }

  async _fetchData(path) {
    const request = await fetch(`${this._apiUrl}${path}`);

    if (!request.ok) {
      throw new Error(
        `Can't get data from url: ${this._apiUrl}${path}. Error status: ${request.status}`
      );
    }

    return await request.json();
  }
}

export default new ApiService();
