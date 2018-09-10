<template>
  <v-layout wrap>
    <v-flex xs6>
      <v-date-picker v-model="date" :landscape="landscape" :reactive="reactive"></v-date-picker>
    </v-flex>
    <v-flex xs6>
      <v-time-picker v-model="time" :landscape="landscape"></v-time-picker>
    </v-flex>
    <v-flex>
      <v-btn @click="submit()">
        Save Breakfast
      </v-btn>
    </v-flex>
     <v-snackbar
      v-model="snackbar.show"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="snackbar.timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
      :color="snackbar.color"
    >
      {{ snackbar.text }}
      <v-btn
        dark
        flat
        @click="hideSnackbar"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-layout>  
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import moment from 'moment'
  export default {
    data: () => ({
      date: null,
      landscape: true,
      reactive: false,
      time: null,
      y: 'top',
      x: null,
      mode: 'multi-line'
    }),
    computed: {
      ...mapGetters({
        snackbar: 'getSnackbar'
      })
    },
    methods: {
      ...mapActions([
        'saveBreakfast',
        'setSnackbar'
      ]),
      submit () {
        if (this.date && this.time) {
          let dateTime = new Date(this.date + ' ' + this.time)
          dateTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss')
          this.saveBreakfast(dateTime)
        } else {
          const data = {
            show: true,
            color: 'error',
            text: 'Please choose a date and a time',
            timeout: 1200
          }
          this.setSnackbar(data)
        }
      },
      hideSnackbar () {
        const data = {
          show: false,
          color: '',
          text: '',
          timeout: 0
        }
        this.setSnackbar(data)
      }
    }
  }
</script>