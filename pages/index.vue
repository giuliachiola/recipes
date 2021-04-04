<template>
  <div>
    <h1>Blog Posts</h1>
    <div class="blogs">
      <ul class="blog" v-for="blog in posts" :key="blog.slug">
        <li class="blog__title">
          <nuxt-link :to="`/blog/${blog.slug}`">
            <h2>{{ blog.title }}</h2>
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
