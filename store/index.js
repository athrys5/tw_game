export const state = function() {
  return {
      score: 0,
  }
};

export const getters = {
  getScore(state) {
    return state.score
  } 
}

export const mutations = {
  changeScore(state,sc) {
    state.score = sc;
  }
}