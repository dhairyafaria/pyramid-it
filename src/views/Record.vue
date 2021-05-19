<template>
  <div class="record">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="user" v-for="(user, index) in users" :key="index">
      <img class="avatar"
        :alt="user.first_name"
        :src="user.avatar"
      />
      <div class="full-name">
        Name: {{ user.first_name }} {{ user.last_name }}
      </div>
      <div class="email">
        Email: {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'Record',
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      axios.get('https://reqres.in/api/users')
        .then((response) => {
          this.users = response.data.data;
          this.$store.commit('setUserName', this.users[0].email);
        });
    },
  },
};
</script>
