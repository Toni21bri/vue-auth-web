<template>
  <router-view/>
</template>

<script>
  import { onBeforeMount } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import firebase from 'firebase/compat/app';

  export default {
    setup () {
      const router = useRouter();
      const route = useRoute();

      onBeforeMount(() => {
         firebase.auth().onAuthStateChanged((user) => {
           if(!user) {
            router.replace('/login');
           } else if (route.path == "/login" || route.path == "/register") {
             router.replace('/')
           }
         });
      });
    }
  }
</script>

<style lang="scss">
  body {
    background: #2c3e50;
    color: #fff;
  }

  #app {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: grayscale;
    text-align: center;
  }

  a {
    color: inherit;
  }
</style>
