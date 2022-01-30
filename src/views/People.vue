<template>
  <v-list>
    <v-list-item v-for="(person, index) in people" :key="index">{{
      person.name
    }}</v-list-item>
  </v-list>
</template>
<script>
import axios from 'axios';
export default {
  name: 'People',
  data() {
    return {
      people: null,
    };
  },
  methods: {
    getPeople() {
      axios.get('https://swapi.dev/api/people').then((res) => {
        this.people = res.data.results;
      });
    },
  },
  mounted() {
    this.getPeople();
  },
};
</script>