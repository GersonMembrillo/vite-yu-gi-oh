<template>
  <section class="container">
    <div class="card-number bg-dark text-white p-4">Found {{  }} Card</div>
    <div class="bg-white d-flex flex-wrap p-4">
      <CardInfo v-for="(card, index) in store.cardList" :key="card.id" :card="card" />
    </div>
  </section>
</template>

<script>
import { store } from '../data/store';
import CardInfo from './CardInfo.vue';
export default {
  name: 'CardList',
  components: {
    CardInfo
  },
  data() {
    return {
      store
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>