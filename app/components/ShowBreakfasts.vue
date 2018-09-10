<template>
  <v-layout row justify-center fluid align-center wrap md12>
      <v-card v-for="breakfast in breakfasts" :key="breakfast.id">
        <v-card-title class="headline">{{ breakfast.date | dateformat }}</v-card-title>
        <v-card-text>
          <p>Participants: {{ breakfast.persons }}</p>
          <p>Weißwürscht: {{ breakfast.quantity }}</p>
          <p>Pretzels: {{ breakfast.pretzels}}</p>
          <p>Glass of Senf: {{ breakfast.senf }}</p>
          <p>Beers: {{ breakfast.beer }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt :to="'/breakfast/'+breakfast.id">Register</v-btn>
        </v-card-actions>
      </v-card>
  </v-layout>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        breakfasts: 'getBreakfasts'
      })
    },
    methods: {
      ...mapActions([
        'breakfast'
      ])
    },
    mounted () {
      this.breakfast()
    }
  }
</script>

<style scoped>

</style>
