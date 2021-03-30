export const state = () => ({
  blogPosts: []
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list.map(el => ({
      ...el,
      // remove empty strings and spaces between keywords
      tags: el.tags ? el.tags.split(',').map(el => el.trim()).filter(el => el) : []
    }));
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/assets/content/blog/",
      false,
      /\.json$/
    );
    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit("setBlogPosts", blogPosts);
  }
};
