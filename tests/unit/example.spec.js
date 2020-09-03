import { shallowMount } from '@vue/test-utils'
import NavigationPage from '@/components/NavigationPage.vue'

describe('NavigationPage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
