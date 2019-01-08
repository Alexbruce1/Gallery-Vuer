let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, world',
    items: [
      'thing1',
      'thing2',
      'thing3',
      'thing4',
    ],
    data: [],
    mediaType: 'gallery'
  },
  created () {
    let API = require('./assets/API');
    let url = `https://api.harvardartmuseums.org/${this.mediaType}`;

    fetch(url + API.key)
      .then(response => response.json())
      .then(data => {
        this.data = data.records
      });
  },
  updated () {
    let API = require('./assets/API');
    let url = `https://api.harvardartmuseums.org/${this.mediaType}`;
    
    fetch(url + API.key)
      .then(response => response.json())
      .then(data => {
        this.data = data.records
      });
  }
})