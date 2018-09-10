import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateformat', val => moment(val).format('YYYY-MM-DD HH:mm:ss'))
