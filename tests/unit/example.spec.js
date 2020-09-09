import { shallowMount } from '@vue/test-utils'
import CartList from '@/components/CartList.vue'

describe('CartList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Your order'
    const wrapper = shallowMount(CartList)
    const heading = wrapper.find('.cart-header')
    expect(heading.text()).toMatch(msg)
  })
})
