export class Item {
  constructor (key) {
    this.key = key;
    this.get = ()=> JSON.parse(localStorage.getItem(this.key) || '{}');
    this.set = (data)=> localStorage.setItem(this.key, JSON.stringify(data));
  }
}
