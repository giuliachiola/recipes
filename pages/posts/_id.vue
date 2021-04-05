<template>
  <div class="o-wrapper">
    <img :src="post.thumbnail" class="c-post__img" />
    <h1 class="c-post__title">{{post.title}}</h1>
    <div class="c-post__date">{{post.date}}</div>
    <div class="c-post__body" v-html="$md.render(post.body)"></div>
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

<style lang="scss">
</style>
