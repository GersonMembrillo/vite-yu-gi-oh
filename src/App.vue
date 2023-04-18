<template>
  <HeaderComponent title="Yu-Gi-Oh Api" />
  <main>
    <InputComponent />
    <CardList />
  </main>
</template>

<script>
import { store } from './data/store'
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue'
import CardList from './components/CardList.vue'
import InputComponent from './components/InputComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardList,
    InputComponent,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      const url = store.baseURL + store.endpoint;
      axios.get(url).then((res) => {
        store.cardList = res.data.data;
        console.log(res.data.data)
      });
    }
  },
  mounted() {
    store.endpoint = 'card'
    this.getCard()
  }
}
</script>

<style lang="scss" scoped>
main{
  background-color: #D48F37;
}
</style>
