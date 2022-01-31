import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: [],
  },
  getters: {
    people: state => state.people,
  },
  mutations: {
    setPeople(state, val) {
      state.people = val;
    },
  },
  actions: {
    async getPeople({ commit }) {
      let ppl = await axios.get('https://swapi.dev/api/people').then((res) => {
        return res.data.results;
      });
      await ppl.forEach(person => {
         axios.get(person.homeworld).then(hw => {
          person.homeworld = hw.data;
        })
      })
      commit('setPeople', ppl)
    },
  },
  modules: {},
});
