<template>
  <div class="container py-4">
    <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="setSearch">
      <div class="col-12">
        <label class="visually-hidden" for="searchStatus">Search status</label>
        <select class="form-select" id="searchStatus" v-model="store.search.archetype">
          <option selected value="">Choose...</option>
          <option :value="status.archetype_name" v-for="(status, index) in statusOptions" :key="index">{{
            status.archetype_name }}</option>
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
export default {
  name: 'SearchBar',
  data() {
    return {
      store,
      statusOptions: [
        // 'Alive',
        // 'Dead',
        // 'Unknown'
      ]
    }
  },
  methods: {
    setSearch() {
      store.getCard();
    },
    resetSearch() {
      store.search.archetype = '';
      store.search.name = '';
      store.getCard();

    }
  },
  mounted() {
    const url = store.baseURL + store.endpoint.type;
    axios.get(url).then((res) => {
      console.log(res.data);
      this.statusOptions = res.data;
    })
  }

}
</script>

<style lang="scss" scoped></style>