import { shallowMount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('Homepage', () => {
    test('find the tag with "homepage"', () => {
        const wrapper = shallowMount(HomePage)
        const msg = 'homepage'

        const element = wrapper.find('h1').text()

        expect(element).toBe(msg)
    })
})