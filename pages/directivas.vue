<template>
  <div>
    <p>{{ message }}</p>
    <p v-show="true">
      Hola este es un texto que se muestra
    </p>
    <p v-if="num > 10">
      Hola este es un texto que se muestra con v-if
    </p>
    <ul>
      <li v-for="elemento in items" :key="elemento">
        {{ elemento }}
      </li>
    </ul>
    <p>Nombre:</p>
    <input v-model="name" type="text">
    {{ name }}
    <!-- v-on:click => @click -->
    <button class="button is-info" @click="saludo">
      Saluda
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Hola OpenWebinars',
      num: 15,
      items: [1, 2, 3, 4, 5],
      name: ''
    }
  },
  methods: {
    saludo () {
      // eslint-disable-next-line no-console
      console.log('Esto es un saludo')
    }
  }
}
</script>
<style></style>
