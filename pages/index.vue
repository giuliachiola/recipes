<template>
  <div class="o-wrapper">
    <h1>Ricettine</h1>
    <ul class="c-cards">
      <!-- card -->
      <li class="c-card" v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/posts/${post.slug}`">
          <figure class="c-card__img">
            <img :src="post.thumbnail" :alt="post.title"/>
          </figure>
        </nuxt-link>
        <!-- content -->
        <div class="c-card__content">
          <nuxt-link :to="`/posts/${post.slug}`">
            <h2 class="c-card__title">{{ post.title }}</h2>
          </nuxt-link>

          <!-- bottom -->
          <!-- <div class="c-card__bottom">
            <ul v-if="post.tags && post.tags.length > 0" class="c-card__tags">
              <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
            </ul>
            <p class="c-card__category">SALATO</p>
          </div> -->
        </div>
      </li>
    </ul>
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
.c-cards {
  @extend %list-reset;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.c-card {
  // background: $color-light;
  // border-radius: 10px;
  display: flex;
  flex-direction: column;

  // reset link styles
  > a {
    color: inherit;
    text-decoration: none;
  }
}

.c-card__content {
  padding: $space-m;
  width: 95%;
  background: #FFF;
  border-radius: 10px;
  z-index: 100;
  position: relative;
  margin: -40px auto 0;
  flex-basis: 100%;
}

.c-card__img {
  height: 200px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.c-card__bottom {
  position: absolute;
  bottom: $space-m;
  right: $space-m;
  text-align: right;
}

.c-card__tags {
  @extend %list-reset;

  li {
    display: inline;
  }

  li + li {
    &::before {
      content: ', ';
    }
  }
}
</style>
