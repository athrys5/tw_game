export const state = function() {
  return {
      score: 0,
      comeFromGame: false,
  }
};

export const getters = {
  getScore(state) {
    return state.score
  },
  getComeFromGame(state) {
    return state.comeFromGame
  } 
}

export const mutations = {
  changeScore(state,sc) {
    state.score = sc;
  },
  changeComeFromGame(state,check) {
    state.comeFromGame = check;
  },
}