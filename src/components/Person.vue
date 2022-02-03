<template>
  <v-card>
    <v-card-title class="text-h5"> {{ name }}</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="bday"
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
            :value="homeworld"
            @input="inputHandler(index, $event)"
            label="Born"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import simpleDebounce from '@/mixins/simple-debounce';
export default {
  name: 'Person',
  props: ['name', 'bday', 'homeworld', 'index'],
  mixins: [simpleDebounce],
  methods: {
    inputHandler(index, val) {
      let _this = this;
      this.simpleDebounce(() => {
        let payload = { index: index, val: val };
        _this.$store.dispatch('updateHomeworld', payload);
      }, 500);
    },
  },
  beforeUnmount() {
    this.debouncedHandler.cancel();
  },
};
</script>