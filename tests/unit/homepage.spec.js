import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('Homepage', () => {
    test('find the tag with "Best deals"', () => {
        const wrapper = shallowMount(HomePage)
        const msg = 'Best Deals are Here!'

        const element = wrapper.find('h1').text()

        expect(element).toBe(msg)
    })

    test('find there is an image src', () => {
        const wrapper = shallowMount(HomePage)
        const elements = wrapper.find('img')
        expect(elements.contains('img')).toBe(true)
    })
})
