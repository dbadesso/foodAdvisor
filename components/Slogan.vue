<template>
  <div>
    <h2 class="title is-2">
      FoodAdvisor, tu web de restaurantes
    </h2>
    <div v-if="!is_subcribe" class="subcribe">
      <input v-model="email" type="text" class="input email" placeholder="email...">
      <button class="button is-info" @click="subscribe">
        Suscribirse
      </button>
    </div>
  </div>
</template>

<script>
import api from '~/services/api'

export default {
  data () {
    return {
      email: '',
      is_subcribe: false
    }
  },
  methods: {
    async subscribe () {
      const payload = {
        email: this.email
      }
      const response = await api.postSubscribeUser(payload)
      if (response.status === 201) {
        this.is_subcribe = true
      }
    }
  }
}
</script>
<style scoped>
.subcribe {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.email {
  width: 80%;
}
</style>
