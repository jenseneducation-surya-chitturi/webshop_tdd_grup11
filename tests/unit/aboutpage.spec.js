import { shallowMount } from '@vue/test-utils';
import AboutPage from '@/views/AboutPage.vue';

describe('Homepage', () => {
    test('find the tag with "homepage"', () => {
        const wrapper = shallowMount(AboutPage)
        const msg = 'This is a about page'

        const element = wrapper.find('h1').text()

        expect(element).toBe(msg)
    })
})