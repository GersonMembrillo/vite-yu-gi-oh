<template>
  <header>
    <div class="container">
      <h1 class="my-4">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: String,
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: white;
}
</style>