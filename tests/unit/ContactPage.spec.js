// import {mount} from'@vue/test-utils'
// import { from } from "core-js/fn/array"

import { mount } from "@vue/test-utils";
import ContactPage from "@/views/ContactPage.vue";

describe("tests for submiting a form for ContactPage", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = mount(ContactPage);

    await wrapper.find("[data-username]").setValue("razieh");
    await wrapper.find(".contact-form").trigger("submit.prevent");

    expect(wrapper.find(".msg").text()).toBe(
      "Thank you for your Message, razieh"
    );
  });
});
