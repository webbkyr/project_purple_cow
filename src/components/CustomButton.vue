<template>
  <div class="custom_btn_container">
    <button class="btn" @click="handleClick">{{ text }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() text!: string;

  handleClick($event: MouseEvent) {
    this.$emit("clickHandler", $event);
  }
}
</script>

<style scoped>
.custom_btn_container {
  margin: 2rem;
}

.btn {
  background-color: #941ef4;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  opacity: 0.6;
  transition: 0.3s;
}

.btn:hover {
  opacity: 1;
}
</style>
