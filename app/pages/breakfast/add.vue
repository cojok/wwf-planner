<template>
  <v-layout wrap v-if="!loading">
    <v-flex xs6>
      <v-date-picker v-model="date" :landscape="landscape" :reactive="reactive"></v-date-picker>
    </v-flex>
    <v-flex xs6>
      <v-time-picker v-model="time" :landscape="landscape"></v-time-picker>
    </v-flex>
    <v-flex>
      <v-btn @click="submit">
        Save Breakfast
      </v-btn>
    </v-flex>
  </v-layout>  
</template>

<script>
  // import { mapGetters } from 'vuex'
  import axios from 'axios'
  export default {
    data: () => ({
      date: null,
      landscape: true,
      reactive: false,
      time: null,
      loading: false
    }),
    methods: {
      submit () {
        if (this.date && this.time) {
          console.log(this.date, ' => ', this.time)
          axios.post('http://localhost:3333/api/v1/breakfast', {
            date: this.date, time: this.time
          }).then(response => {
            this.loading = false
            console.log(response.data)
          }).catch(err => {
            // state.error = err
            console.log(err.response)
          })
        }
      }
    }
  }
</script>