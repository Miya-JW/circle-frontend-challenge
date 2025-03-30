<template>
  <div class="cover-show">
    <img @click="moveLeft" :src="LeftArrow" alt="left arrow" />
    <div v-for="book in books" :key="book.id">
      <div @click="selectAndNavigate(book)" :title="book.title">
        <img :src="book.cover" alt="book cover" />
      </div>
    </div>
    <img @click="moveRight" :src="RightArrow" alt="right arrow" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";

export default {
  name: "BookGallery",
  computed: {
    ...mapState(["books", "currentIndex"]),
  },
  data() {
    return {
      LeftArrow,
      RightArrow,
    };
  },
  methods: {
    ...mapActions(["fetchBooks", "selectBook"]),
    selectAndNavigate(book) {
      this.selectBook(book); //select the book
      this.$router.push({ name: "BookDetail", params: { id: book.id } }); //navigate to the BookDetail view
    },
    moveRight() {
      // 确保不会超出数组长度
      if (this.currentIndex < this.books.length - 1) {
        this.$store.commit("updateCurrentIndex", this.currentIndex + 1);
      }
    },
    moveLeft() {
      // 确保不会小于0
      if (this.currentIndex > 0) {
        this.$store.commit("updateCurrentIndex", this.currentIndex - 1);
      }
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>
<style>
.cover-show {
  display: flex;
  align-items: center;
  overflow: hidden; /* 隐藏超出部分 */
}
</style>
