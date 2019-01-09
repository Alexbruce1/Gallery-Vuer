import Vue from 'vue';
import App from './App'

let app = new Vue({
  el: '#app',
  data: {
    info: {},
    data: [null],
    searched: false,
    mediaType: 'gallery',
    currentPage: 1,
    query: ''
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      let API = require('./assets/API');
      let url = `https://api.harvardartmuseums.org/${this.mediaType}`;
      let page = `&page=${this.currentPage}`
      let q = '';

      if (this.query) {
        q = `&q=${this.query}`
      }
      
      fetch(url + API.key + page + q)
        .then(response => response.json())
        .then(data => {
          this.data = data.records
          this.info = data.info
        })
    },
    updateMediaType: function (mediaType) {
      this.mediaType = mediaType
      this.currentPage = 1
      this.fetchData()
    },
    changePage: function (direction) {
      if (direction === 1) {
        if (this.currentPage > 1) {
          this.currentPage--
          this.fetchData()
        } else {
          return;
        }
      } else {
        if (this.currentPage < this.info.pages + 1) {
          this.currentPage++
          this.fetchData()
        } else {
          return;
        }
      }
    },
    submitSearch: function (e) {
      this.query = e.target.value;

      this.fetchData()

      this.query = ''
    },
    clearSearch: function () {
      this.query = ''

      this.fetchData()
    }
  }
})