<template>
  <div class="post">
    <img v-bind:src="post.thumbnail" class="post__featured-img" />
    <h1 class="post__title">{{post.title}}</h1>
    <div class="post__date">{{post.date}}</div>
    <div class="post__body" v-html="$md.render(post.body)"></div>
  </div>
</template>

<script>
export default {
  // Fetching Single post
  async asyncData({ params, payload }) {
    if (payload) return { post: payload };
    else
      return {
        post: await require(`~/assets/content/posts/${params.id}.json`)
      };
  }
};
</script>

<style>
.post {
  max-width: 800px;
  margin: 2rem auto;
}
.post__featured-img {
  width: 100%;
  height: auto;
}
div,
h1,
img {
  margin-bottom: 1rem;
}
</style>
