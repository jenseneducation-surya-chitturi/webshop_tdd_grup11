import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import AboutPage from "@/views/AboutPage.vue"
import HomePage from "@/views/HomePage.vue"
import ProductPage from '@/views/ProductPage.vue'
import routes from "@/routes.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("renders a child component via routing", async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, {
      localVue,
      router
    })

    router.push("/products")
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(ProductPage).exists()).toBe(true)
  })


  it("renders a child component via routing", async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, {
      localVue,
      router
    })

    router.push("/about")
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(AboutPage).exists()).toBe(true)
  })
})
