<template>
  <v-container fluid grid-list-md>
    <v-row>
      <v-col v-for="(person, index) in people" :key="index" class="pa-2" md="3">
        <v-card>
          <v-card-title class="text-h5"> {{ person.name }}</v-card-title>
          <v-list>
            <v-list-item>
              <v-list-item-title>Birth Year</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                {{ person.birth_year }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'People',
  computed: {
    people() {
      return this.$store.state.people;
    },
  },
  methods: {
    species(species) {
      return species.length === 0 ? 'N/A' : species[0];
    },
  },
  mounted() {
    this.$store.dispatch('getPeople');
  },
};
</script>