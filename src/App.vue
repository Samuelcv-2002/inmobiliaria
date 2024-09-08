<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const currentUrl = ref(route.fullPath);


const CheckCockie = () => {
  const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token='));
  console.log(currentUrl.value)
  const to = tokenCookie ? currentUrl.value : "/"
  router.push(to)
}

watch(() => route.fullPath, (newUrl) => {
  currentUrl.value = newUrl;
  CheckCockie()
});

</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
