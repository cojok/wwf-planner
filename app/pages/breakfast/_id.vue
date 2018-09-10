<template>
  <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
      v-model="quantity"
      label="How many weißwursts you want?"
      required
      type="number">
      </v-text-field>
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
        submit
      </v-btn>
  </v-form>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    asyncData ({ params }) {
      return {
        breakfast_id: params.id
      }
    },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      quantity: 0
    }),
    methods: {
      ...mapActions([
        'registerForBreakfast'
      ]),
      submit () {
        if (this.$refs.form.validate()) {
          const data = {
            name: this.name,
            email: this.email,
            quantity: this.quantity,
            breakfast_id: this.breakfast_id
          }
          this.registerForBreakfast(data)
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>