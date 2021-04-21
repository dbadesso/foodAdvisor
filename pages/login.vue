<template>
  <div>
    <p>Esto es la page:Login llamando al layout login</p>
    <buttonHome />
  </div>
</template>
<script lang="ts">
import buttonHome from '~/components/buttonHome'
export default {
  components: {
    buttonHome
  },
  layout: 'login'
}
</script>
