<template>
  <div>
    <Hero @onShowBanner="changeShowBannerValue">
      <Banner v-if="showBanner" slot="header" />
      <Slogan v-else slot="header" />
    </Hero>
    <div class="container">
      <section class="section">
        <div class="columns is-multiline">
          <RestaurantCard
            v-for="(restaurant, index) in restaurants"
            :key="index"
            :name="restaurant.name"
            :description="restaurant.description"
            :slug="restaurant.slug"
            :category="restaurant.category"
            :likes="restaurant.likes"
            :image="restaurant.image"
            class="restaurant-card"
            @onLikeButton="sumRestaurantLikes(restaurant)"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard'
import Hero from '~/components/Hero'
import Banner from '~/components/Banner'
import Slogan from '~/components/Slogan'
import api from '~/services/api'
import { db } from '~/plugins/firebase'

export default {
  components: {
    RestaurantCard,
    Hero,
    Banner,
    Slogan
  },
  async asyncData () {
    try {
      const response = await api.getRestaurants()
      return { restaurants: response.data }
    } catch {
      return { restaurant: [] }
    }
  },
  data () {
    return {
      likes: 0,
      showBanner: true,
      restaurants: []
    }
  },
  created () {
    // eslint-disable-next-line no-console
    console.log(db)
  },
  // async created() {
  //  const response = await api.getRestaurants()
  //  if (response.status === 200) {
  //    this.restaurants = response.data
  //  }
  // },
  methods: {
    async sumLikes (restaurant) {
      const payload = {
        id: restaurant.id,
        data: {
          likes: restaurant.likes + 1
        }
      }
      const response = await api.putSumRestaurantLikes(payload)
      if (response.status === 200) {
        restaurant.likes++
      }
    },
    changeShowBannerValue () {
      this.showBanner = !this.showBanner
    }
  }
}
</script>

<style>
.restaurant-card {
  margin: 10px 10px;
  max-width: 300px;
}
</style>
