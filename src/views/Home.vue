<template>
  <div>
    <Header />

    <BookGallery />
    <BookList />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import BookGallery from "../components/BookGallery.vue";
import BookList from "../components/BookList.vue";

export default {
  name: "Home",
  components: {
    Header,
    BookGallery,
    BookList,
  },
};
</script>
