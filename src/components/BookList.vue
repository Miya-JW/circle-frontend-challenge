<template>
  <div v-for="book in books" :key="book.id">
    <a @click="selectAndNavigate(book)">
      {{ book.title }}
    </a>
    <div>{{ book.author }}</div>
    <img :src="book.cover" alt="book cover" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "BookList",
  computed: {
    ...mapState({
      books: (state) => state.books,
    }),
  },
  methods: {
    ...mapActions(["fetchBooks", "selectBook"]),
    selectAndNavigate(book) {
      this.selectBook(book); //select the book
      this.$router.push({ name: "BookDetail", params: { id: book.id } }); //navigate to the BookDetail view
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>
