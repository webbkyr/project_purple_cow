<template>
  <div id="app">
    <h1 class="main_header">{{ header }}</h1>
    <div v-if="loading">Loading...</div>
    <counter v-else :count="this.totalCount" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "@/components/Counter.vue";

@Component({
  components: {
    Counter
  }
})
export default class App extends Vue {
  public header = "Project Purple Cow";
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main_header {
  color: #941ef4;
}
</style>
