<template>
  <div v-if="restaurant" class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">
              Edit Restaurant
            </h2>
          </div>
        </div>
        <div class="columns box">
          <div class="column">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  v-model="restaurant.name"
                  class="input"
                  type="text"
                  placeholder="restaurant name"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Slug</label>
              <div class="control">
                <input
                  v-model="restaurant.slug"
                  class="input"
                  type="text"
                  disabled
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Image</label>
              <div class="control">
                <input
                  v-model="restaurant.image"
                  class="input"
                  type="text"
                  placeholder="https://...."
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <input
                  v-model="restaurant.description"
                  class="input"
                  type="text"
                  placeholder="description"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Address</label>
              <div class="control">
                <input
                  v-model="restaurant.address"
                  class="input"
                  type="text"
                  placeholder="address"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Cities</label>
              <div class="control">
                <div class="select">
                  <select v-model="restaurant.city">
                    <option>Select dropdown</option>
                    <option value="Madrid">
                      Madrid
                    </option>
                    <option value="Barcelona">
                      Barcelona
                    </option>
                    <option value="Valencia">
                      Valencia
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Category</label>
              <div class="control">
                <div class="select">
                  <select v-model="restaurant.category">
                    <option>Select dropdown</option>
                    <option value="Brunch">
                      Brunch
                    </option>
                    <option value="Burgers">
                      Burgers
                    </option>
                    <option value="Mediterranean">
                      Mediterranean
                    </option>
                    <option value="Italian">
                      Italian
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Text</label>
              <div class="control">
                <textarea
                  v-model="restaurant.text"
                  class="textarea"
                  type="textarea"
                  rows="10"
                  placeholder="text"
                />
              </div>
            </div>
            <div class="field">
              <div class="control has-text-centered">
                <button
                  class="button is-danger"
                  type="button"
                  @click="$router.back()"
                >
                  Cancel
                </button>
                <button
                  class="button is-link"
                  type="button"
                  @click.prevent="onUpdateButton"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
export default {
  middleware: 'auth',
  data () {
    return {
      restaurant: null
    }
  },
  created () {
    const response = db.collection('restaurants').doc(this.$route.params.id).get()
    response.then((doc) => {
      if (doc.exists) {
        this.restaurant = doc.data()
      }
    })
  },
  methods: {
    onUpdateButton () {
      const ref = db.collection('restaurants').doc(this.$route.params.id)
      const response = ref.update(this.restaurant)
      response.then(() => {
        this.$router.back() // En caso de éxito vuelva para atrás (página index)
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
