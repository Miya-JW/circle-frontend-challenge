import { createApp } from 'vue'
import './style/style.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store';
import Header from './components/header.vue';
import BookGallery from './components/BookGallery.vue';
import BookList from './components/BookList.vue';
const app = createApp(App);
app.component('Header', Header);
app.component('BookGallery', BookGallery);
app.component('BookList', BookList);
app.use(router);
app.use(store);
app.mount('#app');

