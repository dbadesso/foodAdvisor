<template>
  <div class="container">
    <Hero>
      <div slot="header">
        <p>Soy el slot desde el padre</p>
      </div>
    </Hero>
    <section class="section">
      <RestaurantCard
        name="Bar Tolo"
        description="Descripción del restaurante"
        category="burger"
        slug="bar-tolo"
        :likes="likes"
        @onLikeButton="sumLikes"
      />
    </section>
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard'
import Hero from '~/components/Hero'
export default {
  components: {
    RestaurantCard,
    Hero
  },
  data () {
    return {
      likes: 0
    }
  },
  methods: {
    sumLikes () {
      this.likes++
    }
  }
}
</script>

<style>

</style>
