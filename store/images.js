export const state = () => ({
  images: [],
})

export const mutations = {
  setImages(state, content) {
    state.images = content
  },
}

export const actions = {
  async getImages({ state, commit }) {
    const queryParams = {
      query: 'Bird',
      size: 'landscape',
      orientation: 'landscape',
    }

    const response = await this.$axios.$get('search', {
      params: queryParams,
      headers: {
        Authorization:
          '563492ad6f917000010000014251ab0018364c0eb106f0df240718b0',
      },
    })
    commit('setImages', response.photos)
  },
}
