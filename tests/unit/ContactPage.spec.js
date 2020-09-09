import { mount, shallowMount } from "@vue/test-utils";
import ContactPage from "@/views/ContactPage.vue";

describe("tests for submiting a form for ContactPage", () => {
  it("should reveal a notification when submitted", async () => {
    const wrapper = mount(ContactPage);

    await wrapper.find("[data-username]").setValue("razieh");
    await wrapper.find(".contact-form").trigger("submit.prevent");

    expect(wrapper.find(".msg").text()).toBe(
      "Thank you for your Message, razieh"
    );
  });
  // it("sets the value for user email", () => {
  //   const wrapper = mount(ContactPage,{
  //     propsData: {
  //       userEmail: 'my@mail.com'
  //     }
  //   });
  //   const value = wrapper.find("[data-useremail]").text();
  //   expect(value).toBe('my@mail.com');
  // });

  it("should display the placeholder attribute for email", () => {
    const wrapper = mount(ContactPage);

    const place = wrapper.find("[data-useremail]");
    
    expect(place.attributes().placeholder).toBe("Email");
  });
});

describe("UX/UI tests for ContactPage.vue", () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallowMount(ContactPage);
  });

  it("should have the contact page component", () => {
    const contact = wrapper.findComponent(ContactPage);
    expect(contact.exists()).toBe(true)
});

it("should display h1", () => {
  const contactPageHeading = "Contact Us";
  const content = wrapper.find("h1").text();
  expect(content).toBe(contactPageHeading);
});
});