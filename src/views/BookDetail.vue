<template>
    <div v-if="book">
      <h1>{{ book.title }}</h1>
      <img :src="book.cover" alt="Cover image of the book">
      <p>{{ book.description }}</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        book: state => state.currentBook 
      })
    }
  };
  </script>