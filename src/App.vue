<template>
  <HeaderComponent title="Yu-Gi-Oh Api" />
  <main>
    <SearchBar"/>
    <CardList />
  </main>
</template>

<script>
import { store } from './data/store'
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue'
import CardList from './components/CardList.vue'
import SearchBar from './components/SearchBar.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardList,
    SearchBar,
  },
  data() {
    return {
      store
    }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.surname;
    }
  },
  methods: {

  },
  mounted() {
    store.getCard();
  }
}
</script>

<style lang="scss" scoped>
main{
  background-color: #D48F37;
}
</style>
