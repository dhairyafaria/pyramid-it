<template>
  <div class="user">
    <h1>{{ userName }}</h1>
  </div>
</template>
<script>
export default {
  name: 'User',
  data() {
    return {
      userName: this.$store.getters.getUserName,
    };
  },
};
</script>
