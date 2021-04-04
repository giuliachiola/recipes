<template>
  <div>
    <h1>Posts</h1>
    <div class="posts">
      <ul class="post" v-for="post in posts" :key="post.slug">
        <li class="post__title">
          <nuxt-link :to="`/posts/${post.slug}`">
            <h2>{{ post.title }}</h2>
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
