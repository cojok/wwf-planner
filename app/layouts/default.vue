<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ copyright }}</span>
    </v-footer>
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
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      miniVariant: true,
      copyright: (new Date()).getFullYear(),
      y: 'top',
      x: null,
      mode: 'multi-line'
    }
  },
  computed: {
    ...mapGetters({
      items: 'getMenuItems',
      title: 'getTitle',
      snackbar: 'getSnackbar'
    })
  },
  methods: {
    ...mapActions([
      'setSnackbar'
    ]),
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
