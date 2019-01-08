import Vue from 'vue';
import App from './App'

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
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      let API = require('./assets/API');
      let url = `https://api.harvardartmuseums.org/${this.mediaType}`;

      fetch(url + API.key)
        .then(response => response.json())
        .then(data => {
          this.data = data.records
        })
    },
    updateMediaType: function (mediaType) {
      this.mediaType = mediaType
      this.fetchData()
    }
  }
})