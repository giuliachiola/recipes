<template>
  <div class="o-wrapper">
    <h1>Ricettine</h1>
    <div class="c-posts">
      <ul class="c-posts__list" v-for="post in posts" :key="post.slug">
        <li class="c-post__item">
          <nuxt-link :to="`/posts/${post.slug}`">
            <h2>{{ post.title }}</h2>
            <img :src="post.thumbnail" :alt="post.title"/>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // Fetching all posts data
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style lang="scss">
%list-reset {
	list-style: none;
	padding-left: 0;
	margin: 0;
}

.c-posts__list {
  @extend %list-reset;
}
</style>
