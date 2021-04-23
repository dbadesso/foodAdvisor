<template>
  <div class="box column is-4 is-offset-4 box-login">
    <buttonHome />
    <div class="columns">
      <div class="column has-text-centered">
        <img src="@/static/logo.png">
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <input v-model="email" class="input" type="text" placeholder="email">
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <input v-model="password" class="input" type="text" placeholder="contraseña">
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <NuxtLink to="/" class="button is-danger">
          Cancelar
        </NuxtLink>
        <button class="button is-primary" @click="onLogin">
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from '~/plugins/firebase'
import buttonHome from '~/components/buttonHome'

export default {
  components: {
    buttonHome
  },
  layout: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      const response = firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      response.then((data) => {
        // eslint-disable-next-line no-console
        // console.log(data)
        this.$router.push('admin')
      })
    }
  }
}
</script>
