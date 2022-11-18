export const state = function() {
  return {
      isLogged: false,
      email:'',
      userId:'',
      sta: '',
  }
};

export const getters = {
  getIsLogged(state) {
    return state.isLogged
  },
 getEmail(state) {
    return state.email
  },
  getUserId(state) {
    return state.userId
  },
  getState(state) {
    return state.sta
  } 

}

export const mutations = {
  changeIsLogged(state) {
      state.isLogged = !state.isLogged;
  },
 changeEmail(state,logemail) {
    state.email = logemail;
  },
  changeUserId(state,id) {
    state.userId = id;
  },
  changeState(state,st) {
    state.sta = st;
  }
}