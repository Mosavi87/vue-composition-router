<template>
  <div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="# About">About</a></li>
      <li><a href="#asdf">Broken link</a></li>
    </ul>

    <div>
      <component :is="currentView"></component>
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
