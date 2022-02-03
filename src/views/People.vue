<template>
  <v-container fluid grid-list-md>
    <v-row>
      <v-col v-for="(person, index) in people" :key="index" class="pa-2" md="3">
        <Person
          :name="person.name"
          :bday="person.birth_year"
          :homeworld="person.homeworld.name"
          :index="index"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

import Person from '@/components/Person';
export default {
  name: 'People',
  components: {
    Person,
  },
  computed: {
    ...mapGetters(['people']),
  },
  mounted() {
    this.$store.dispatch('getPeople');
  },
};
</script>