<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <button class="button is-info" @click="$emit('onShowBanner')">
        showBanner
      </button>
      <slot class="container" name="header" />
    </div>
  </section>
</template>

<script>
export default {}
</script>
