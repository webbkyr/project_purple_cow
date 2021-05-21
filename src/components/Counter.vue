<template>
  <div>
    <span class="counter_message">{{ message }}</span>
    <custom-button text="Increment me!" @clickHandler="makeCountRequest" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomButton from "./CustomButton.vue";
import api, { requestUrl } from "@/api";

@Component({
  components: {
    CustomButton
  }
})
export default class Counter extends Vue {
  public count = 0;

  async created() {
    this.makeCountRequest();
  }

  get message() {
    const isSingleView = this.count === 1;
    return `This counter has been clicked ${this.count} ${
      isSingleView ? "time." : "times."
    }`;
  }

  async makeCountRequest(): Promise<void> {
    const response = (await api.get(requestUrl)).data;
    this.count = response.value;
  }
}
</script>

<style scoped>
.counter_message {
  font-size: 16px;
}
</style>
