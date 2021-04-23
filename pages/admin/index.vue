<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">
            Resturantes
          </h2>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Restaurant name</th>
              <th>Category</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in restaurants" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.city }}</td>
              <td>
                <NuxtLink class="button is-primary" :to="`admin/${item.id}`">
                  Edit
                </NuxtLink>
                <button class="button is-danger" @click="deleteDocument(item.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="paginator" />
        <div id="new">
          <NuxtLink class="button is-warning" to="admin/create">
            Add new
          </Nuxtlink>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { db } from '~/plugins/firebase'

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.getDocument()
  },
  methods: {
    getDocument () {
      this.restaurants = []
      const response = db.collection('restaurants').get()
      response
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const restaurant = {
              id: doc.id,
              ...doc.data()
            }
            this.restaurants.push(restaurant)
          })
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    deleteDocument (id) {
      const ref = db.collection('restaurants').doc(id)
      ref.delete()
      this.getDocument() // refrescamos la lista
    }
  }
}
</script>
