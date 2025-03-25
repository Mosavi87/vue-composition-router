<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/aboutNot">Not Found</router-link></li>
    </ul>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Home from "./Pages/Home.vue";
import NotFound from "./Pages/NotFound.vue";
import About from "./Pages/About.vue";

const routes = {
  "/": Home,
  "/about": About,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes [currentPath.value.slice(1) || "/" ] || NotFound;
});
</script>
