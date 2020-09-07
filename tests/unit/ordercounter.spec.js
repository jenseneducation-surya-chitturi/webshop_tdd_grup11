import { shallowMount } from '@vue/test-utils'
import OrderCounter from '@/components/OrderCounter.vue'

describe('OrderCounter.vue', () => {
    test('the value of counter is increasing by 1 when there is a click event', async () => {
        const wrapper = shallowMount(OrderCounter)
        await wrapper.setData({ orderCount: 0 })
        const value_p = wrapper.find('p')
        const button = wrapper.find('.increase-counter')
        expect(value_p.text()).toBe('0')
        await button.trigger('click')
        expect(value_p.text()).toBe('1')

    })

    test('the value of counter decrease by 1 when there is a click event', async () => {
        const wrapper = shallowMount(OrderCounter)
        await wrapper.setData({ orderCount: 5 })
        const value_p = wrapper.find('p')
        const button = wrapper.find('.decrease-counter')
        expect(value_p.text()).toBe('5')
        await button.trigger('click')
        expect(value_p.text()).toBe('4')

    })

})