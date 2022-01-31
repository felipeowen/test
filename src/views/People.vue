<template>
  <v-container fluid grid-list-md>
    <v-row>
      <v-col v-for="(person, index) in people" :key="index" class="pa-2" md="3">
        <v-card>
          <v-card-title class="text-h5"> {{ person.name }}</v-card-title>

          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="person.birth_year"
                  label="Born"
                  outlined
                  readonly
                  filled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="person.homeworld.name"
                  label="Born"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
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
  mounted() {
    this.$store.dispatch('getPeople');
  },
};
</script>