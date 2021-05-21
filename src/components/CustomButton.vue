<template>
  <div>
    <button @click="handleClick">{{ text }}</button>
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

<style scoped></style>
