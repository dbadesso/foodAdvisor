<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand logo">
      <img src="@/static/logo.png" alt="FoodAdvisor logo">
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a href="/login" class="button is-light"> Log in </a>
        </div>
        <!--
        <div class="buttons">
          <a href="/logout" class="button is-light"> Log Out </a>
        </div>
        -->
      </div>
    </div>
  </nav>
</template>

<script>
// import { firebase } from '~/plugins/firebase'

export default {
  /*
  data () {
    return {
      logged: firebase.auth().onAuthStateChanged(function (logged) {
        // return logged
        const uid = logged.uid
        if (uid !== '') {
          return false
        } else { return true }
        // console.log('Resultado:', logged)
      })
    }
  }
  */
}
</script>

<style scoped>
.logo {
  width: 100px;
  margin: 0 20px;
}
</style>
