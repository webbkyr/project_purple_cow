import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("renders the default count to 0", () => {
    const msg = "This counter has been clicked 0 times.";
    const wrapper = shallowMount(Counter, {});
    expect(wrapper.text()).toMatch(msg);
  });
});
