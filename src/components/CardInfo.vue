<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card">
      <img :src="card.card_images[0].image_url" :alt="card.name">
      <div class="card-body text-center">
        <h4 class="text-white text-uppercase">{{ card.name }}</h4>
        <div class="font-weight-bold">{{ card.archetype }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardInfo',
  props: ['card']
}
</script>

<style lang="scss" scoped>
h4 {
  text-transform: capitalize;
}

img {
  width: 100%;
  height: auto;
}

.card-body {
  background-color: #D48F37;
  height: 150px;
}

</style>