<template>
  <div class="card" style="width:400px;">
    <div class="card-image">
      <figure>
        <img src="~/assets/images/restaurant.jpg" alt="Pizza Restaurant">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 restaurant-name">
            {{ name }}
          </p>
          <div class="columns">
            <div class="column">
              <span class="is-category tag">{{ category }}</span>
            </div>
            <div class="column has-text-right">
              <button class="button is-info" @click="sumLikes">
                {{ likes }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        {{ description }}. <a :href="slug">More info</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  methods: {
    sumLikes () {
      this.$emit('onLikeButton')
      // this.likes++
    }
  }
}
</script>
<style>
</style>
