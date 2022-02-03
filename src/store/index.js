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
    setHomeworld(state, payload) {
      state.people[payload.index]['homeworld'].name = payload.val;
    },
  },
  actions: {
    async getPeople({ commit }) {
      let ppl = await axios.get('https://swapi.dev/api/people').then((res) => {
        return res.data.results;
      });
      await ppl.forEach(person => {
         axios.get(person.homeworld).then(hw => {
          Vue.set(person, 'homeworld', hw.data);
        })
      })
      commit('setPeople', ppl)
    },
    updateHomeworld({ commit }, payload) {
      commit('setHomeworld', payload)
    }
  },
  modules: {},
});
